import React, { useState, useEffect } from "react";
import OoushTableRow from "../../interfaces/commonInterfaces";
import EditableInput from "../editable-input/editableInput";
import parseExerciseTableCellUpdateParams from "../../../utils/table-cell-helpers/tableCellHelpers";
import deepCloneObject from "../../../utils/object-helpers/object-helpers";
import { capitalize } from "../../../utils/language/language-utils";
import styles from "./ooushTable.module.scss";

export interface OoushTableProps {
    tableData: Array<OoushTableRow>;
    defaultData: Array<OoushTableRow>;
    includeAddRowButton?: boolean;
    includeRemoveRowColumn?: boolean;
    workoutDayId?: number,
    hideIdColumn: boolean,
    updateCellMethod?: (data: object) => any;
    removeTableRow?: (id1: number, id2: number) => any;
    refreshTable: (persistCardView: boolean) => void;
}

const OoushTable: React.FC<OoushTableProps> = ({
    tableData,
    defaultData,
    includeAddRowButton,
    includeRemoveRowColumn,
    workoutDayId,
    hideIdColumn,
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
    const tableHeadersCapitalized = tableHeaders.filter((header: string) => hideIdColumn ? header !== 'id' : header).map(string => capitalize(string));
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

    return (
        <table className={styles.ooushTable}>
            <thead>
                <tr className={styles.ooushTableRow}>
                    {tableHeadersCapitalized.map((header: string) => {
                        return (
                            <th
                                key={"tableHeadRow" + capitalize(header)}
                                className={styles.ooushTableCell}
                                style={{width: tableCellWidth}}
                            >
                                {header}
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
                        <tr key={"tableBodyDataRow" + idx} className={styles.ooushTableRow}>
                            {tableHeaders
                                .filter((header: string) => hideIdColumn ? header !== 'id' : header)
                                .map((header: string, cellIdx: number) => {
                                    return (
                                        <td
                                            key={"tableBodyDataCell" + cellIdx}
                                            className={styles.ooushTableCellInput}
                                            style={{width: tableCellWidth}}
                                        >   
                                            <EditableInput
                                                tableCellInput
                                                displayLabel={tableRow[header as 'name']}
                                                rowHeader={header}
                                                type="text"
                                                id={cellIdx}
                                                tableRow={tableRow}
                                                workoutDayId={workoutDayId}
                                                handleUpdateCell={updateCellMethod}
                                                parseTableCellApiParams={parseExerciseTableCellUpdateParams}
                                                refreshTable={refreshTable}
                                            />
                                        </td>
                                    );
                            })}
                            {includeRemoveRowColumn
                                && <td className={styles.ooushTableCell} style={{width: '5%'}}>
                                        {tableRow.id !== null
                                            && <div
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    // @ts-ignore
                                                    onClick={() => handleRemoveTableRow(tableRow.id, workoutDayId)}
                                                />
                                        }
                                    </td>
                            }
                        </tr>
                    );
                })}
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