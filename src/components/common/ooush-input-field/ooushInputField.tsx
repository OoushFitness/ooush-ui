import React, {ChangeEvent} from "react";
import "./ooushInputField.module.scss";
import styles from "../../../../styles/registerUser.module.css";

export interface FieldProps {
    id: string;
    value: string;
    labelValue: string;
    type?: "text" | "number" | "email" | "password";
    fieldName: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
    animateLabels: (fieldName: string) => void;
    fieldInFocus: string;
    fieldsWithContent: Set<string>;
    autoComplete?: string;
}

const OoushFieldInput: React.FC<FieldProps> = ({
    id,
    type= "text",
    fieldName,
    value,
    handleChange,
    fieldInFocus,
    fieldsWithContent,
    animateLabels,
    autoComplete,
    labelValue,
}) => {

    const fieldInUseOrFocus = (fieldName: string) => {
        return fieldInFocus === fieldName || fieldsWithContent.has(fieldName);
    }

    const prettifyDisplayLabel = (labelValue: string) => {
        if(labelValue.length >= 15) {
            return labelValue.split(" ")[0];
        }
        return labelValue;
    }

    return (
        <div className={styles.divFormGroupContainer} onFocus={() => animateLabels(fieldName)}>
            <label className={fieldInUseOrFocus(fieldName) ? styles.lblFormGroupFocus : styles.lblFormGroup}>{fieldInUseOrFocus(fieldName) ? prettifyDisplayLabel(labelValue) : labelValue}</label>
            <input className={styles.inputFormGroup} id={id} type={type} value={value} onChange={(e) => handleChange(e, fieldName)} autoComplete={autoComplete}/>
        </div>
)};

export default OoushFieldInput;
