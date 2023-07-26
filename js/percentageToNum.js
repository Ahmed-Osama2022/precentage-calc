
/**
 * Global Variables
 */
// Elements
const bar = document.getElementById('bar');
const precentage = document.getElementById('precentage');
const maximumInput = document.getElementById('maximum');
// const currentLevel = document.getElementById('current-level');
const result = document.getElementById('result');
// Blocks for loading and errors
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const error0 = document.getElementById('error0');

const allInput = document.querySelectorAll('.input-box');
const currentLevel2 = document.getElementById('current-level2');
// console.log(allInput);

// Let's export the needed variable for a newer update
export { maximumInput, currentLevel2, result };
/**
 * End with Global Variables
 */


/**
 * Start function on result for 0 input check!!
 */
function noInput() {
    error0.style.display = 'block';
    setTimeout(() => {
        error0.style.display = 'none';
    }, 2000);
};
/**
 * End function on result for 0 input check
 */

/**
 * Start looping over all inputs 
 */
allInput.forEach((input) => {
    // For test only
    // input.addEventListener('input', (e) => {
    //     console.log('change!');
    //     let num1 = maximumInput.valueAsNumber;
    //     let num2 = currentLevel.valueAsNumber;
    //     console.log(typeof(num1));
    //     console.log(typeof(num2));
    //     console.log(typeof(num2));

    // })
    result.addEventListener('click', (e) => {
        let num1 = maximumInput.valueAsNumber;
        let num2 = currentLevel2.valueAsNumber;
        // For test:
        // console.log(typeof(num1));
        // console.log(typeof(num2));
        if (num2 > 100) {
            error.style.display = 'block';
            setTimeout(() => {
                error.style.display = 'none';
            }, 2000);
        } else if (
            num1 == 0 || num2 == 0 ||
            maximumInput.value == '' || currentLevel2.value == ''
        ) {
            noInput();
        } else if (num2 <= 100) {
            // Start the loader screen at first
            loader.style.display = 'block';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1150);
            // Using the formula:
            let output;
            // output = (num1 * (num2 / 100));
            let calc = (num1 * (num2 / 100));
            output = num1 - calc;
            // For test:
            // console.log(output);
            // console.log(typeof(output));

            // Update the UI: 
            // precentage.innerText = output.toFixed(2);
            precentage.style.fontSize = '1.2em';
            // precentage.innerText = `Your new price is: ${output}`;
            precentage.innerHTML = `Your new price is: <span>${output.toFixed(2)}</span>`;
            bar.value = num2;
        }

    });


});
/**
 * End looping over all inputs 
 */



/**
 * End of srcipt
 */