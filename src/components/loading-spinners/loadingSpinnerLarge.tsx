import React from "react";
import styles from "./loadingSpinner.module.scss";

const LoadingSpinnerLarge: React.FC = () => {

    return (
        <div className={styles.loadingSpinnerLargeContainer}>
            <div className={styles.loadingSpinnerLarge}/>
        </div>
    )

};

export default LoadingSpinnerLarge;