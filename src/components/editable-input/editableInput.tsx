import React, { useRef, useEffect, useState } from "react";
import styles from "./editableInput.module.scss";

export interface EditableInputProps {
    displayLabel: string,
    defaultLabel: string,
    id: number,
    type: string,
    handleChangeLabel?: (id: number, label: string) => void,
}

const EditableInput: React.FC<EditableInputProps> = ({displayLabel, defaultLabel, type, id, handleChangeLabel}) => {

    const [editing, setEditing] = useState(false);
    const [labelOnLoad, setLabelOnLoad] = useState(displayLabel ?? defaultLabel);
    const [label, setLabel] = useState(displayLabel ?? defaultLabel);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (handleChangeLabel && label !== labelOnLoad) {
                    handleChangeLabel(id, label);
                }
                setEditing(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [wrapperRef, label]);

    const toggleEditingStatus = () => {
        setEditing(true);
    }

    const handleInputChange = (event: any) => {
        setLabel(event.target.value);
    }

    return (
        <div className={styles.divEditableLabelContainer} onClick={() => toggleEditingStatus()}>
            {editing
                ? <input
                        ref={wrapperRef}
                        onChange={handleInputChange}
                        type={type}
                        value={label}
                        className={styles.inputEditable}
                    />
                : <div className={styles.divEditableInputStaticLabel}>{label}</div>
            }
        </div>
    )
};

export default EditableInput;