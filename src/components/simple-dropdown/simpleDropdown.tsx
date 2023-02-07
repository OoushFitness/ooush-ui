import React, { useState } from "react";
import { isNullorEmptyString } from "../../../utils/language/language-utils";
import { isNumber } from "../../../utils/number-helpers/number-helpers";

import styles from "./simpleDropdown.module.scss";

export interface DataEntry {
    id: number,
    name: string,
}

export interface SimpleDropdownProps {
    data: DataEntry[],
    includeLabel: boolean,
    labelText: string,
    dataTag: string,
    handleParentState?: (key: string, value: string | number) => void
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({data, labelText, dataTag, includeLabel, handleParentState}) => {

    const [value, setValue] = useState(data[0].id);

    const handleChange = (event: any) => {
        const value = event.target.value;
        const parsedValue = (isNumber(value) && !isNullorEmptyString(value)) ? Number(value) : value;
        setValue(parsedValue);
        if (handleParentState) {
            handleParentState(dataTag, parsedValue);
        }
    }

    return (
        <div className={styles.simpleDropdownContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleDropdownLabel}>{labelText}</label>
            }
            <select name="select" id="select-element" className={styles.simpleDropdownSelect} onChange={handleChange}>
                {data.map((dataEntry: DataEntry) => {
                    return (
                        <option key={dataEntry.id} value={dataEntry.id}>{dataEntry.name}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default SimpleDropdown;