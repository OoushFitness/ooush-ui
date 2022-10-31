import React, { useRef, useEffect, useState } from "react";

import styles from "./ooushModal.module.scss";

export interface OoushModalProps {
    modalTitle: string,
    jsxContent: React.ReactNode,
    closeModalHandler: (data: object) => void
}

const OoushModal: React.FC<OoushModalProps> = ({jsxContent, modalTitle, closeModalHandler}) => {

    return (
        <div className={styles.ooushModalBlurMask}>
            <div className={styles.ooushModalContainer}>
                <div className={styles.ooushModalTitle}>
                    {modalTitle}
                </div>
                <div className={styles.ooushModalContent}>
                    {jsxContent}
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