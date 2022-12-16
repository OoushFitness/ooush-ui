import React, { useState, useEffect } from "react";

import EditableInput from "../editable-input/editableInput";

import { OoushExercise, OoushTableRow } from "../../interfaces/commonInterfaces";
import { parseExerciseTableCellUpdateParams } from "../../../utils/ooush-table-helpers/tableCellHelpers";
import { deepCloneArray, deepCloneObject } from "../../../utils/object-helpers/object-helpers";
import { capitalize } from "../../../utils/language/language-utils";

import styles from "./ooushTable.module.scss";

export interface OoushTableProps {
    tableData: Array<OoushTableRow>,
    defaultData: Array<OoushTableRow>,
    includeAddRowButton?: boolean,
    editableTable?: boolean,
    includeRemoveRowColumn?: boolean,
    workoutDayId?: number,
    translucentRows?: boolean,
    hideIdColumn: boolean,
    denomination?: string,
    searchResults?: Array<OoushExercise>,
    searchApi?: (input: string) => void;
    clearSearchResults?: () => void;
    parseGenericColumnMethodParams?: (data: object) => any,
    genericColumnMethod?: (data: object) => void,
    updateCellMethod?: (data: object) => any,
    removeTableRow?: (id1: number, id2: number) => any,
    refreshTable: (persistCardView: boolean) => void
}

const OoushTable: React.FC<OoushTableProps> = ({
    tableData,
    defaultData,
    includeAddRowButton,
    editableTable,
    includeRemoveRowColumn,
    workoutDayId,
    hideIdColumn,
    translucentRows,
    denomination,
    searchResults,
    clearSearchResults,
    searchApi,
    parseGenericColumnMethodParams,
    genericColumnMethod,
    updateCellMethod,
    removeTableRow,
    refreshTable
}) => {

    const tableDataPresent = tableData.length > 0;

    const [tableState, setTableState] = useState(tableDataPresent ? tableData : defaultData);

    useEffect(() => {
        setTableState(tableDataPresent ? tableData : defaultData)
    }, [tableData])

    const tableHeaders = Object.keys(tableState[0]);
    const tableHeadersCapitalized = tableHeaders.filter((header: string) => hideIdColumn ? header !== 'exerciseId' : header).map(string => capitalize(string));
    const tableCellWidth = `calc(95% / ${tableHeaders.length})`;

    const addNewBlankTableRow = () => {
        const newTableState = [...tableState, deepCloneObject(defaultData[0])];
        // @ts-ignore
        setTableState(newTableState);
    }

    const handleRemoveTableRow = (id1: number, id2: number) => {
        if (removeTableRow) {
            removeTableRow(id1, id2).then(() => {
                refreshTable(true);
            });
        }
    }

    const handleAddSearchedExercise = (exercise: OoushExercise) => {
        const params = deepCloneArray(defaultData)[0];
        params.exerciseDayId = workoutDayId;
        for (let key of Object.keys(exercise)) {
            //@ts-ignore
            params[key] = exercise[key]
        }
        if (updateCellMethod) {
            updateCellMethod(params);
        }
        if (refreshTable) {
            refreshTable(true);
        }
    }

    return (
        <table className={styles.ooushTable}>
            <thead>
                <tr className={translucentRows ? styles.ooushTableRowTranslucent : styles.ooushTableRow}>
                    {tableHeadersCapitalized.map((header: string) => {
                        return (
                            <th
                                key={"tableHeadRow" + capitalize(header)}
                                className={styles.ooushTableCell}
                                style={{width: tableCellWidth}}
                            >
                                {header === "Weight" ? header + " (" + denomination + ")" : header}
                            </th>
                        );
                    })}
                    {includeRemoveRowColumn
                        && <th className={styles.ooushTableCell} style={{width: '5%'}}/>
                    }
                </tr>
            </thead>
            <tbody className={styles.ooushTableBody}>
                {tableState.map((tableRow: OoushTableRow, idx: number) => {
                    return (
                        <tr key={"tableBodyDataRow" + idx} className={translucentRows ? styles.ooushTableRowTranslucent : styles.ooushTableRow}>
                            {tableHeaders
                                .filter((header: string) => hideIdColumn ? header !== 'exerciseId' : header)
                                .map((header: string, cellIdx: number) => {
                                    const tableCell = tableRow[header] as any;
                                    const genericColumnMethodParams = parseGenericColumnMethodParams?.(tableRow);
                                    const staticCell = (tableRow.exerciseId !== null && header == 'name');
                                    return (
                                        <td
                                            key={"tableBodyDataCell" + cellIdx}
                                            className={styles.ooushTableCellInput}
                                            style={{width: tableCellWidth}}
                                        >   
                                            {editableTable
                                                ? <EditableInput
                                                        tableCellInput
                                                        // @ts-ignore
                                                        displayLabel={tableCell}
                                                        rowHeader={header}
                                                        type="text"
                                                        id={cellIdx}
                                                        tableRow={tableRow}
                                                        workoutDayId={workoutDayId}
                                                        staticCell={staticCell}
                                                        searchApi={searchApi}
                                                        handleUpdateCell={updateCellMethod}
                                                        parseTableCellApiParams={parseExerciseTableCellUpdateParams}
                                                        refreshTable={refreshTable}
                                                        searchResults={searchResults}
                                                        clearSearchResults={clearSearchResults}
                                                    />
                                                : <div onClick={() => genericColumnMethod?.(genericColumnMethodParams)}>
                                                        {tableCell}
                                                    </div>
                                            }
                                        </td>
                                    );
                            })}
                            {includeRemoveRowColumn
                                && <td className={styles.ooushTableCell} style={{width: '5%'}}>
                                        {tableRow.exerciseId !== null
                                            && <div
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    // @ts-ignore
                                                    onClick={() => {handleRemoveTableRow(tableRow.exerciseId, workoutDayId); console.log(tableRow)}}
                                                />
                                        }
                                    </td>
                            }
                        </tr>
                    );
                })}
                {(searchResults && searchResults.length > 0)
                    && <tr className={styles.searchResultsRow}>
                            <td className={styles.searchResultsColumn}>
                                {searchResults.map((result: OoushExercise, idx: number) => {
                                    return (
                                        <div
                                            className={styles.searchResult}
                                            key={idx}
                                            onClick={() => handleAddSearchedExercise(result)}
                                        >
                                            {result.name}
                                        </div>
                                    );
                                })}
                            </td>
                        </tr>
                }
            </tbody>
            {includeAddRowButton
                && <tfoot className={styles.ooushTableAddRowButtonContainer}>
                        <tr
                            className={styles.ooushTableAddRowButton}
                            title="Add new entry"
                            onClick={() => addNewBlankTableRow()}
                        />
                    </tfoot>
            }
        </table>
    )
}

export default OoushTable;