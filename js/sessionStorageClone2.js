/**
 * Add a new feature to the APP!
 * Done in 2023/Jun/12
 */

import { maximumInput, currentLevel2 } from "./percentageToNum.js";

let savedNumber = sessionStorage.getItem('value%');
maximumInput.value = savedNumber;

window.onload = () => {
    maximumInput.focus();
};

maximumInput.onblur = () => {
    console.log(maximumInput.value);
    
    sessionStorage.setItem('value%', maximumInput.value);
    maximumInput.nextElementSibling.focus();
};

// Add enter key feature when finishes required input values
currentLevel2.addEventListener('keyup', (e) => {
    // To get the key name ...
    // console.log(e); 
    // ||
    // console.log(e.key);
    if (e.key === 'Enter') {
        currentLevel2.nextElementSibling.click();
        console.log('ahmed');
    };
});