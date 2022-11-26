
/**
 * Global Variables
 */
const bar = document.getElementById('bar');
const precentage = document.getElementById('precentage');
const maximumInput = document.getElementById('maximum');
const currentInput = document.getElementById('current-level');
const result = document.getElementById('result');
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const error0 = document.getElementById('error0');

const allInput = document.getElementsByClassName('input-box');

console.log(maximumInput.value);
console.log(currentInput.value);
console.log(typeof(maximumInput.value));
console.log(typeof(currentInput.value));

/**
 * End with Global Variables
 */

/**
 * Start Event Listener on result button 
 */

result.addEventListener('click', (e) => {
    
    let maxNum = maximumInput.value;
    let current = currentInput.value;
    // Check if there is no input
    if (
        maxNum == '' || current == '' || 
        maxNum == 0  || current == 0 
        // maxNum == 0 || current == 0 ||
        // maxNum == 0 && current == 0 ||
        // maxNum == 0 && current == '' ||
        // maxNum == '' && current == 0
        ) {
        error0.style.display = 'block';
        precentage.style.visibility = "hidden";
        loader.style.visibility  = "hidden";
        setTimeout(() => {45454545
            error0.style.display = 'none';
            precentage.style.visibility = "visible" ;
            precentage.innerText = "0%" ;
        },2000);
    } else {

    
        // For test:
        // console.log(maxNum);
        // console.log(current);
        
        let newElement = document.createElement('p');
        newElement.innerText = 
        `Maximum is ${maxNum} !!`;

        error.appendChild(newElement);

        // Check if the user enter a value bigger than maximum number!!
        if (current > maxNum) {
            error.style.display = 'block';
            // return to initial 

            setTimeout(() => {
                error.style.display = 'none';
                error.removeChild(newElement);
                
            },2000);

        } else {
            // Start the loader for a period of time:
            loader.style.display = 'block'; 
            setTimeout(() => {
            loader.style.display = 'none';
            }, 1150);
            // Using the formula:
            let output ;
            output = (current * 100) / maxNum;
            // For test:
            // console.log(output);
            // console.log(typeof(output));

            // Update the UI: 
            precentage.innerText = output.toFixed(2) + '%';
            bar.value = output;
            // if (Number.precentage.innerText > 100 || Number.bar.value > 100) {
            //     error.style.display = 'block';
            //     setTimeout(() => {
            //         error.style.display = 'none';
                
                    
            // //     },2000);
            // // };
        
    };
}
});

/**
 * Extract the formula
 * x => 100
 * 1 => outout
 * output = 100/x
 * 
 */