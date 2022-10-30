import React, { useRef, useEffect, useState } from "react";

import styles from "./ooushModal.module.scss";

export interface OoushModalProps {
    closeModalHandler: () => void;
}

const OoushModal: React.FC<OoushModalProps> = ({closeModalHandler}) => {

    return (
        <div className={styles.ooushModalBlurMask}>
            <div className={styles.ooushModalContainer}>
                <div className={styles.ooushModalContent}>

                </div>
                <div className={styles.ooushModalControls}>
                    <button className={styles.ooushModalButton} onClick={closeModalHandler}>Cancel</button>
                    <button className={styles.ooushModalButton} onClick={closeModalHandler}>OK</button>
                </div>
            </div>
        </div>
    )

}

export default OoushModal;