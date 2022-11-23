import React, { useRef, useEffect, useState } from "react";

import styles from "./ooushModal.module.scss";

export interface OoushModalProps {
    modalTitle: string,
    jsxContent: React.ReactNode,
    simpleModalControls?: boolean,
    modalApiCall?: () => void,
    closeModalHandler: (data: object) => void
}

const OoushModal: React.FC<OoushModalProps> = ({jsxContent, modalTitle, simpleModalControls, modalApiCall, closeModalHandler}) => {

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
                    {simpleModalControls
                        ? <button className={styles.ooushModalButton} onClick={closeModalHandler} disabled={buttonsDisabled}>Done</button>
                        : <>
                                <button className={styles.ooushModalButton} onClick={closeModalHandler} disabled={buttonsDisabled}>Cancel</button>
                                <button
                                    className={styles.ooushModalButton}
                                    onClick={() => {
                                        if (modalApiCall) {
                                            modalApiCall();
                                        }
                                        setButtonsDisabled(true)
                                    }}
                                    disabled={buttonsDisabled}
                                >
                                    OK
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    )

}

export default OoushModal;