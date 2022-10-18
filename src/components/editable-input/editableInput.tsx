import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-regular-svg-icons";
import isNumber from "../../../utils/number-helpers/number-helpers";
import deepCloneObject from "../../../utils/object-helpers/object-helpers";
import { isNullorEmptyString } from "../../../utils/language/language-utils";

import styles from "./editableInput.module.scss";

export interface EditableInputProps {
    tableCellInput?: boolean,
    displayLabel: string,
    defaultLabel?: string,
    id: number,
    type: string,
    tableRow?: object,
    rowHeader?: string,
    workoutDayId?: number,
    handleChangeLabel?: (id: number, label: string) => void,
    handleUpdateCell?: (data: object) => any;
    parseTableCellApiParams?: (tableRow: object | undefined, id: number | undefined) => object;
    refreshTable?: (persistCardView: boolean) => void;
    testMethod?: () => void;
}

const EditableInput: React.FC<EditableInputProps> = ({
    tableCellInput,
    displayLabel,
    defaultLabel,
    type,
    id,
    tableRow,
    rowHeader,
    workoutDayId,
    handleChangeLabel,
    handleUpdateCell,
    parseTableCellApiParams,
    refreshTable,
    testMethod
}) => {

    const [editing, setEditing] = useState(false);
    const [labelOnLoad, setLabelOnLoad] = useState(displayLabel ?? defaultLabel);
    const [label, setLabel] = useState(displayLabel ?? defaultLabel);
    const [tableRowState, setTableRowState] = useState(tableRow);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (handleChangeLabel && label !== labelOnLoad) {
                    handleChangeLabel(id, label);
                }
                if (handleUpdateCell && label !== labelOnLoad) {
                    // @ts-ignore
                    const params = parseTableCellApiParams(tableRowState, workoutDayId);
                    handleUpdateCell(params).then(() => {
                        // @ts-ignore
                        refreshTable(true);
                    });
                }
                setEditing(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, label, tableRowState]);

    useEffect(() => {
        setTableRowState(tableRow);
        setLabel(displayLabel ?? defaultLabel);
    }, [tableRow, displayLabel, defaultLabel]);

    const toggleEditingStatus = () => {
        setEditing(true);
    }

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        const parsedValue = (isNumber(value) && !isNullorEmptyString(value)) ? Number(value) : value;
        setLabel(parsedValue);
        if (tableCellInput) {
            const currentTableRow = deepCloneObject(tableRowState);
            // @ts-ignore
            currentTableRow[rowHeader] = parsedValue;
            setTableRowState(currentTableRow);
        }
    }

    return (
        <div className={tableCellInput ? styles.divEditableLabelContainerTable : styles.divEditableLabelContainer} onClick={() => toggleEditingStatus()}>
            {editing
                ? <div className={styles.divInputSaveIconContainer}>
                        <input
                            ref={wrapperRef}
                            onChange={handleInputChange}
                            type={type}
                            value={label}
                            className={styles.inputEditable}
                        />
                        <FontAwesomeIcon icon={faSave} title="Save label" className={styles.faIconSave} />
                    </div>
                : <div className={styles.divEditableInputStaticLabel}>{label}</div>
            }
        </div>
    )
};

export default EditableInput;