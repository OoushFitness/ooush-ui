import React, { useRef, useEffect, useState } from "react";

import styles from "./ooushModal.module.scss";

export interface OoushModalProps {
    modalTitle: string,
    jsxContent: React.ReactNode,
    modalApiCall: () => void,
    closeModalHandler: (data: object) => void
}

const OoushModal: React.FC<OoushModalProps> = ({jsxContent, modalTitle, modalApiCall, closeModalHandler}) => {

    const [buttonsDisabled, setButtonsDisabled] = useState(false);

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
                    <button className={styles.ooushModalButton} onClick={closeModalHandler} disabled={buttonsDisabled}>Cancel</button>
                    <button className={styles.ooushModalButton} onClick={() => {modalApiCall();setButtonsDisabled(true)}} disabled={buttonsDisabled}>OK</button>
                </div>
            </div>
        </div>
    )

}

export default OoushModal;