import React from "react";
import OoushTableRow from "../../interfaces/commonInterfaces";
import EditableInput from "../editable-input/editableInput"
import styles from "./ooushTable.module.scss"

import capitalize from "../../../utils/language/language-utils";

export interface OoushTableProps {
    tableData: Array<OoushTableRow>;
    defaultData: Array<OoushTableRow>;
}

const OoushTable: React.FC<OoushTableProps> = ({tableData, defaultData}) => {

    const tableDataPresent = tableData.length > 0;
    const tableHeaders = Object.keys(tableDataPresent ? tableData[0] : defaultData[0]);
    const tableHeadersCapitalized = tableHeaders.map(string => capitalize(string));
    const tableCellWidth = `calc(100% / ${tableHeaders.length})`;
    const tableBodyData = tableDataPresent ? tableData : defaultData;

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
                {tableBodyData.map((tableRow: OoushTableRow, idx: number) => {
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
        </table>
    )
}

export default OoushTable;