import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../../images/preloader.gif";

export const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader}/>
        </div>
    );
};

