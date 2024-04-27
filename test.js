let totalTests = 0;
let passedTests = 0;
let formSubmitted = false;

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

function testRadioButton(id) {
    const radioButton = document.getElementById(id);
    radioButton.checked = true;
    if (radioButton.checked) {
        console.log(`Test Passed: Radio button ${id} is checked.`);
        passedTests++;
    } else {
        console.error(`Test Failed: Radio button ${id} is not checked.`);
    }
    totalTests++;
}

function testRatingWidget(starSelector) {
    const stars = document.querySelectorAll(starSelector);
    if (stars.length > 0) {
        stars[2].click(); // Simulate clicking the third star
        let emoji = document.getElementById('selectedEmoji').textContent;
        let caption = document.getElementById('selectedCaption').textContent;
        if (emoji && caption) {
            console.log('Test Passed: Rating widget updated correctly.');
            passedTests++;
        } else {
            console.error('Test Failed: Rating widget did not update correctly.');
        }
    } else {
        console.error('Test Failed: No stars found to test.');
    }
    totalTests++;
}

function testFormSubmission(formSelector) {
    const form = document.querySelector(formSelector);
    let formSubmitted = false;

    // Listen for the submit event
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the actual form submission
        formSubmitted = true;
    });

    // Programmatically trigger the form submission
    form.dispatchEvent(new Event('submit'));

    // Check if the submit event was triggered and handled
    if (formSubmitted) {
        console.log('Test Passed: Form submission triggered sucessfully.');
        passedTests++;
    } else {
        console.error('Test Failed: Form submission not triggered sucessfully.');
    }
    totalTests++;
}


function clearInputFields() {
    // Reset all textareas and input fields
    document.querySelectorAll('textarea, input[type="text"], input[type="email"]').forEach(input => {
        input.value = '';
    });

    // Uncheck all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
}

function runTests() {
    testInputField('#Review', 'This is a test review.');
    testInputField('#name', 'John Doe');
    testInputField('#email', 'john.doe@example.com');
    testRadioButton('comment');
    testRadioButton('suggestion');
    testRadioButton('question');
    testRatingWidget('.star');
    testFormSubmission('.forms', '#submit');

    console.log(`Testing Summary: ${passedTests} out of ${totalTests} tests passed.`);

    clearInputFields();
}

// Execute tests
document.addEventListener('DOMContentLoaded', runTests);