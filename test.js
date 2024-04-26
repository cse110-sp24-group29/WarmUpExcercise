let totalTests = 0;
let passedTests = 0;

function testInputField(inputSelector, value) {
    const inputElement = document.querySelector(inputSelector);
    inputElement.value = value;
    if (inputElement.value === value) {
        console.log(`Test Passed: Input value for ${inputSelector} set correctly.`);
        passedTests++;
    } else {
        console.error(`Test Failed: Input value for ${inputSelector} not set correctly.`);
    }
    totalTests++;
}

function testRadioButton(nameAttribute) {
    const radios = document.querySelectorAll(`input[name="${nameAttribute}"]`);
    if (radios.length) {
        radios[0].checked = true;
        if (radios[0].checked) {
            console.log(`Test Passed: Radio button ${radios[0].id} is checked.`);
            passedTests++;
        } else {
            console.error(`Test Failed: Radio button ${radios[0].id} is not checked.`);
        }
    } else {
        console.error('No radio buttons found with the name: ' + nameAttribute);
    }
    totalTests++;
}


function runTests() {
    testInputField('#Review', 'This is a test review.');
    testInputField('#name', 'Tianshi Gong');
    testInputField('#email', 'tgong@example.com');
    testRadioButton('feedbacktype');

    console.log(`Testing Summary: ${passedTests} out of ${totalTests} tests passed.`);
}

// Execute tests
document.addEventListener('DOMContentLoaded', runTests);
