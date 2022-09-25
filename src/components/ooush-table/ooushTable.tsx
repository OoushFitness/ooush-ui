import React from "react";
import styles from "./ooushTable.module.scss"

import capitalize from "../../../utils/language/language-utils";

export interface OoushTableProps {
    tableData: Array<object>;
}

const OoushTable: React.FC<OoushTableProps> = ({tableData}) => {

    console.log(tableData.map((tableRow: object) => {
        return "Hello World";
    }))

    //@ts-ignore
    const tableHeaders = Object.keys(tableData[0])
    const tableHeadersCapitalized = tableHeaders.map(string => capitalize(string));

    return (
        <table className={styles.ooushTable}>
            <thead>
                <tr className={styles.ooushTableRow}>
                    {tableHeaders.map((header: string) => {
                        return (
                            <th>{header}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {/* {tableData.map((tableRow: object) => {
                    return (
                        <tr>

                        </tr>
                    )
                })} */}
            </tbody>
        </table>
    )
}

export default OoushTable;