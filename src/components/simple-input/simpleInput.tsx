import React, { useState } from "react";

import styles from "./simpleInput.module.scss";

export interface SimpleInputProps {
    includeLabel: boolean,
    labelText: string,
    type: string,
    minValue?: number,
    numberDenomination?: string,
    incrementStep?: number
}

const SimpleInput: React.FC<SimpleInputProps> = ({
    includeLabel,
    labelText,
    type,
    minValue,
    numberDenomination,
    incrementStep
}) => {

    return (
        <div className={styles.simpleInputContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleInputLabel}>{labelText}</label>
            }
            <div className={styles.simpleInputFieldContainer}>
                <input className={styles.simpleInputField} type={type} min={minValue} step={incrementStep}/>
                {numberDenomination
                    && <div className={styles.simpleInputDenomination}>{numberDenomination}</div>
                }
            </div>
        </div>
    );
}

export default SimpleInput;