import React from "react";

import styles from "./simpleDropdown.module.scss";

export interface DataEntry {
    id: number,
    name: string,
}

export interface SimpleDropdownProps {
    data: DataEntry[],
    includeLabel: boolean,
    labelText: string
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({data, labelText, includeLabel}) => {

    return (
        <div className={styles.simpleDropdownContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleDropdownLabel}>{labelText}</label>
            }
            <select name="select" id="select-element" className={styles.simpleDropdownSelect}>
                {data.map((dataEntry: DataEntry) => {
                    return (
                        <option value={dataEntry.id}>{dataEntry.name}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default SimpleDropdown;