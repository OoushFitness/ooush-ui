import React, { useState } from "react";
import { isNullorEmptyString } from "../../../utils/language/language-utils";
import { isNumber } from "../../../utils/number-helpers/number-helpers";

import styles from "./simpleInput.module.scss";

export interface SimpleInputProps {
    includeLabel: boolean,
    labelText: string,
    type: string,
    minValue?: number,
    defaultValue?: string | number,
    numberDenomination?: string,
    incrementStep?: number,
    dataTag: string,
    handleParentState?: (key: string, value: string | number) => void
}

const SimpleInput: React.FC<SimpleInputProps> = ({
    includeLabel,
    labelText,
    type,
    minValue,
    defaultValue,
    numberDenomination,
    incrementStep,
    dataTag,
    handleParentState
}) => {

    const [value, setValue] = useState(defaultValue ?? defaultValue);

    const handleChange = (event: any) => {
        const value = event.target.value;
        const parsedValue = (isNumber(value) && !isNullorEmptyString(value)) ? Number(value) : value;
        setValue(parsedValue);
        if (handleParentState) {
            handleParentState(dataTag, parsedValue);
        }
    }

    return (
        <div className={styles.simpleInputContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleInputLabel}>{labelText}</label>
            }
            <div className={styles.simpleInputFieldContainer}>
                <input 
                    className={styles.simpleInputField}
                    type={type}
                    min={minValue}
                    step={incrementStep}
                    value={value}
                    onChange={handleChange}
                />
                {numberDenomination
                    && <div className={styles.simpleInputDenomination}>{numberDenomination}</div>
                }
            </div>
        </div>
    );
}

export default SimpleInput;