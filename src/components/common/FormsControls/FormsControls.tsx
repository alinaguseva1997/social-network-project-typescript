import React from "react";
import s from "./FormsControls.module.css";

// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {showError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}
// @ts-ignore
export const Input = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <input {...input} {...props}/>
            {showError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}