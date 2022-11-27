import React from "react";
import { KEYBOARD_ENTER_KEY } from "../constants/ooush-constants";

export const enterKeyPressed = (event) => {
    return event.key === KEYBOARD_ENTER_KEY;
};