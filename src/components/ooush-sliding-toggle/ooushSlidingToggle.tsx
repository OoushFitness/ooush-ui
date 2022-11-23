import React, { useEffect, useState } from "react";
import { camelCaseify } from "../../../utils/language/language-utils";

import styles from "./ooushSlidingToggle.module.scss";

export interface OoushSlidingToggleProps {
    label?: string,
    leftValue?: string,
    rightValue?: string,
    databaseValue?: any,
    toggleApi?: (data: object) => void;
}

const OoushSlidingToggle: React.FC<OoushSlidingToggleProps> = ({label, leftValue, rightValue, databaseValue, toggleApi}) => {

    const [toggled, setToggled] = useState(databaseValue ? rightValue === databaseValue : false);

    const handleToggle = () => {
        let toggledState = toggled;
        setToggled(!toggledState);
        if (toggleApi) {
            toggleApi({[camelCaseify(label)]: toggled ? leftValue : rightValue});
        }
    }

    return (
        <div className={styles.ooushSlidingToggleContainer}>
            {label
                && <div className={styles.ooushSlidingToggleLabel}>{label}</div>
            }
            {leftValue
                && <div className={styles.ooushOoushSlidingToggleValues}>{leftValue}</div>
            }
            <div className={styles.ooushSlidingToggleBar} onClick={handleToggle}>
                <div className={toggled ? styles.ooushSlidingToggleToggled : styles.ooushSlidingToggle} />
            </div>
            {rightValue
                && <div className={styles.ooushOoushSlidingToggleValues}>{rightValue}</div>
            }
        </div>
    );
}

export default OoushSlidingToggle;