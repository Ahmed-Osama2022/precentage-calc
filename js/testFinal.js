/**
 * Global Variables
 */
// Elements
const bar = document.getElementById('bar');
const precentage = document.getElementById('precentage');
const maximumInput = document.getElementById('maximum');
const currentLevel = document.getElementById('current-level');
const result = document.getElementById('result');
// Blocks for loading and errors
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const error0 = document.getElementById('error0');

const allInput = document.querySelectorAll('.input-box');
// console.log(allInput);

// Let's export the needed variable for a newer update
export { maximumInput, currentLevel };
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
        },2000);
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
        let num2 = currentLevel.valueAsNumber;
        // For test:
        // console.log(typeof(num1));
        // console.log(typeof(num2));
        if (num2 > num1) {
            error.style.display = 'block';
            setTimeout(() => {
                error.style.display = 'none';                
            },2000);
        } else if (
            num1 == 0 || num2 == 0 ||
            maximumInput.value == '' || currentLevel.value == ''
            ) {
           noInput();
        } else if (num2 <= num1) {
            // Start the loader screen at first
            loader.style.display = 'block'; 
            setTimeout(() => {
            loader.style.display = 'none';
            }, 1150);
            // Using the formula:
            let output;
            // output = (currentLevel.value * 100) / maximumInput.value;
            output = (num2 * 100) / num1;
            // For test:
            // console.log(output);
            // console.log(typeof(output));

            // Update the UI: 
            precentage.innerText = output.toFixed(2) + '%';
            bar.value = output;
        }

    });
  

});
/**
 * End looping over all inputs 
 */


/**
 * Extract the formula
 * max => 100
 * 1 => outout
 * output = 100/max
 * 
 */

/**
 * End of srcipt
 */