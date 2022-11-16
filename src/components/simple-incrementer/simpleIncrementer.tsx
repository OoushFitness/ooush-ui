import React, { useState } from "react";

import styles from "./simpleIncrementer.module.scss";

export interface SimpleIncrementerProps {
    includeLabel: boolean,
    labelText: string,
    dataTag: string,
    handleParentState?: (key: string, value: string | number) => void
}

const SimpleIncrementer: React.FC<SimpleIncrementerProps> = ({labelText, includeLabel, dataTag, handleParentState}) => {

    const [count, setCount] = useState<number>(1);

    const handleAdjust = (increment: boolean) => {
        let currentCount = count;
        if (increment) {
            currentCount++;
        } else {
            if (currentCount > 1) {
                currentCount--;
            }
        }

        setCount(currentCount);
        if (handleParentState) {
            handleParentState(dataTag, currentCount);
        }
    }

    return (
        <div className={styles.simpleIncrementerContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleIncrementerLabel}>{labelText}</label>
            }
            <div className={styles.simpleIncrementerControls}>
                <div className={styles.simpleIncrementerDecrement} onClick={() => handleAdjust(false)} />
                <div className={styles.simpleIncrementerCount}>{count}</div>
                <div className={styles.simpleIncrementerIncrement} onClick={() => handleAdjust(true)} />
            </div>
        </div>
    );
}

export default SimpleIncrementer;