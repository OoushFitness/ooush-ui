// Copy this component

import React from "react";
// when you copy this component, and create a new scss file, put the new file name here.
import styles from "./componentTemplate.module.scss";

// Change the name from 'ComponentTemplate' to something that makes sense
const ComponentTemplate: React.FC = ({
    // prop arguments go here
}) => {

    // here we return the jsx (react html), for the most part you can use regular html. 
    //One big difference is using 'className' instead of class, and here we also preface each classname with 'styles', e.g 'styles.myClass'
    return (
        <div className={styles.container}>
        </div>
    )
}

export default ComponentTemplate;