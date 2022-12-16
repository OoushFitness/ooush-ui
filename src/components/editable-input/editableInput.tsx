import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { isNumber } from "../../../utils/number-helpers/number-helpers";
import { deepCloneObject } from "../../../utils/object-helpers/object-helpers";
import { isNullorEmptyString } from "../../../utils/language/language-utils";
import { enterKeyPressed } from "../../../utils/generic-helpers/genericHelpers"

import styles from "./editableInput.module.scss";
import { OoushExercise } from "../../interfaces/commonInterfaces";

export interface EditableInputProps {
    tableCellInput?: boolean,
    displayLabel: string,
    defaultLabel?: string,
    id: number,
    type: string,
    tableRow?: object,
    rowHeader?: string,
    workoutDayId?: number,
    staticCell?: boolean,
    searchResults?: OoushExercise[],
    clearSearchResults?: () => void;
    searchApi?: (input: string) => void;
    handleChangeLabel?: (id: number, label: string) => void,
    handleUpdateCell?: (data: object) => any;
    parseTableCellApiParams?: (tableRow: object | undefined, id: number | undefined) => object;
    refreshTable?: (persistCardView: boolean) => void;
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
    staticCell,
    searchResults,
    clearSearchResults,
    searchApi,
    handleChangeLabel,
    handleUpdateCell,
    parseTableCellApiParams,
    refreshTable,
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
                updateAndRefreshInput();
                if (clearSearchResults && searchResults && searchResults.length > 0) {
                    // clearSearchResults();
                }
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
        if (!staticCell) {
            setEditing(true);
        }
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
            if (searchApi) {
                searchApi(parsedValue);
            }
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (enterKeyPressed(event)) {
            updateAndRefreshInput();
        }
    }

    const updateAndRefreshInput = () => {
        if (handleChangeLabel && label !== labelOnLoad) {
            handleChangeLabel(id, label);
        }
        if (handleUpdateCell && label !== labelOnLoad && searchResults && searchResults.length === 0) {
            // @ts-ignore
            const params = parseTableCellApiParams(tableRowState, workoutDayId);
            handleUpdateCell(params).then(() => {
                // @ts-ignore
                refreshTable(true);
            });
        }
        setEditing(false);
    }

    return (
        <div className={tableCellInput
                ? staticCell
                    ? styles.divEditableLabelContainerTableStatic
                    : styles.divEditableLabelContainerTable
                : styles.divEditableLabelContainer
            } 
            onClick={() => toggleEditingStatus()}
        >
            {editing
                ? <div className={styles.divInputSaveIconContainer}>
                        <input
                            autoFocus
                            ref={wrapperRef}
                            onChange={handleInputChange}
                            type={type}
                            value={undefined}
                            className={styles.inputEditable}
                            placeholder={label}
                            onKeyDown={handleKeyDown}
                        />
                        <FontAwesomeIcon icon={faSave} title="Save label" className={styles.faIconSave} />
                    </div>
                : <div className={styles.divEditableInputLabel}>{label}</div>
            }
        </div>
    )
};

export default EditableInput;