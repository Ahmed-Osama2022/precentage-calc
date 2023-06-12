/**
 * Add a new feature to the APP!
 * Done in 2023/Jun/12
 */

import { maximumInput, currentLevel } from "./testFinal.js";

sessionStorage.getItem('value');

window.onload = () => {
    maximumInput.focus();
};
maximumInput.onblur = () => {
    sessionStorage.setItem('value', maximumInput.value);
    maximumInput.nextElementSibling.focus();
};