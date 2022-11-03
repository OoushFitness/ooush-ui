import React, { useState } from "react";

import styles from "./simpleIncrementer.module.scss";

export interface SimpleIncrementerProps {
    includeLabel: boolean,
    labelText: string,
}

const SimpleIncrementer: React.FC<SimpleIncrementerProps> = ({labelText, includeLabel}) => {

    const [count, setCount] = useState<number>(1);

    const handleIncrement = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }

    const handleDecrement = () => {
        let currentCount = count;
        if (currentCount > 1) {
            currentCount--;
        }
        setCount(currentCount);
    }

    return (
        <div className={styles.simpleIncrementerContainer}>
            {includeLabel
                && <label htmlFor="select-element" className={styles.simpleIncrementerLabel}>{labelText}</label>
            }
            <div className={styles.simpleIncrementerControls}>
                <div className={styles.simpleIncrementerDecrement} onClick={handleDecrement} />
                <div className={styles.simpleIncrementerCount}>{count}</div>
                <div className={styles.simpleIncrementerIncrement} onClick={handleIncrement} />
            </div>
        </div>
    );
}

export default SimpleIncrementer;