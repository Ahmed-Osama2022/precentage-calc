/**
 * Add a new feature to the APP!
 * Done in 2023/Jun/12
 */

import { maximumInput, currentLevel } from "./main.js";

let savedNumber = sessionStorage.getItem('value');
maximumInput.value = savedNumber;

window.onload = () => {
    maximumInput.focus();
};

maximumInput.onblur = () => {
    console.log(maximumInput.value);
    
    sessionStorage.setItem('value', maximumInput.value);
    maximumInput.nextElementSibling.focus();
};

// Add enter key feature when finishes required input values
currentLevel.addEventListener('keyup', (e) => {
    // To get the key name ...
    // console.log(e); 
    // ||
    // console.log(e.key);
    if (e.key === 'Enter') {
        currentLevel.nextElementSibling.click();
        console.log('ahmed');
    };
});