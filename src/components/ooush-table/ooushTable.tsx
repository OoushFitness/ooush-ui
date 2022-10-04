import React, { useState } from "react";
import OoushTableRow from "../../interfaces/commonInterfaces";
import EditableInput from "../editable-input/editableInput"
import styles from "./ooushTable.module.scss"

import capitalize from "../../../utils/language/language-utils";

export interface OoushTableProps {
    tableData: Array<OoushTableRow>;
    defaultData: Array<OoushTableRow>;
    includeAddRowButton?: boolean;
}

const OoushTable: React.FC<OoushTableProps> = ({tableData, defaultData, includeAddRowButton}) => {

    const tableDataPresent = tableData.length > 0;

    const [tableState, setTableState] = useState(tableDataPresent ? tableData : defaultData);

    const tableHeaders = Object.keys(tableState[0]);
    const tableHeadersCapitalized = tableHeaders.map(string => capitalize(string));
    const tableCellWidth = `calc(100% / ${tableHeaders.length})`;

    const addNewBlankTableRow = () => {
        const newTableState = [...tableState, defaultData[0]];
        console.log(newTableState)
        setTableState(newTableState);
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
                </tr>
            </thead>
            <tbody>
                {tableState.map((tableRow: OoushTableRow, idx: number) => {
                    return (
                        <tr key={"tableBodyDataRow" + idx} className={styles.ooushTableRow}>
                            {tableHeaders.map((header: string, cellIdx: number) => {
                                return (
                                    <td
                                        key={"tableBodyDataCell" + cellIdx}
                                        className={styles.ooushTableCellInput}
                                        style={{width: tableCellWidth}}
                                    >   
                                        <EditableInput
                                            tableCellInput
                                            displayLabel={tableRow[header as 'name']}
                                            type="text"
                                            id={cellIdx}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
            {includeAddRowButton
                && <div className={styles.ooushTableAddRowButtonContainer}>
                        <div
                            className={styles.ooushTableAddRowButton}
                            title="Add new entry"
                            onClick={() => addNewBlankTableRow()}
                        />
                    </div>
            }
        </table>
    )
}

export default OoushTable;