// ============================================================
// PYTHON BASICS WEBSITE
// JavaScript File
// ============================================================


// ============================================================
// 1. TOGGLE SUB MENU
// ============================================================

function toggleSubMenu(menuId) {

    const menu = document.getElementById(menuId);

    menu.classList.toggle("active");
}


// ============================================================
// 2. PYTHON TOPIC DATA
// ============================================================

const topics = {

    // ========================================================
    // HELLO WORLD
    // ========================================================

    "hello-world": {

        title: "Hello World",

        definition:
            "Hello World is usually the first program written by a beginner. " +
            "In Python, the print() function is used to display text or values on the screen.",

        syntax:
`print("message")`,

        example:
`print("Hello, World!")`,

        output:
`Hello, World!`,

        explanation:
            "The print() function displays the text written inside the parentheses. " +
            "Text is written inside quotation marks.",

        summary:
            "print() is used to display information on the screen."
    },


    // ========================================================
    // VARIABLES & DATA TYPES
    // ========================================================

    "variables": {

        title: "Variables & Data Types",

        definition:
            "A variable is a name used to store a value in a program. " +
            "Python automatically determines the data type of the value.",

        syntax:
`variable_name = value`,

        example:
`name = "Abhishek"
age = 20
marks = 85.5
student = True

print(name)
print(age)
print(marks)
print(student)`,

        output:
`Abhishek
20
85.5
True`,

        explanation:
            "name stores a string, age stores an integer, marks stores a floating-point number, " +
            "and student stores a Boolean value.",

        summary:
            "Variables store data, while data types describe the kind of data stored."
    },


    // ========================================================
    // INPUT & OUTPUT
    // ========================================================

    "input-output": {

        title: "Input & Output",

        definition:
            "Input is the process of receiving data from the user. " +
            "Output is the process of displaying information to the user.",

        syntax:
`variable = input("Enter value: ")
print(variable)`,

        example:
`name = input("Enter your name: ")

print("Hello", name)`,

        output:
`Enter your name: Abhishek

Hello Abhishek`,

        explanation:
            "The input() function takes data from the user. " +
            "The print() function displays the result on the screen.",

        summary:
            "input() is used to take data and print() is used to display data."
    },


    // ========================================================
    // OPERATORS
    // ========================================================

    "operators": {

        title: "Operators",

        definition:
            "Operators are special symbols used to perform operations on values and variables.",

        syntax:
`value1 operator value2`,

        example:
`a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)`,

        output:
`13
7
30
3.3333333333333335`,

        explanation:
            "Python provides different types of operators such as arithmetic, " +
            "comparison, logical, assignment and more.",

        summary:
            "Operators are used to perform calculations and comparisons in Python."
    },


    // ========================================================
    // IF ELSE
    // ========================================================

    "if-else": {

        title: "If - Else",

        definition:
            "If-else statements are used for decision making. " +
            "They allow a program to execute different code depending on a condition.",

        syntax:
`if condition:
    statement
else:
    statement`,

        example:
`num = 10

if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")`,

        output:
`Even Number`,

        explanation:
            "The condition checks whether the number is divisible by 2. " +
            "If the condition is True, the if block executes. Otherwise, the else block executes.",

        summary:
            "if-else is used when a program needs to make a decision."
    },


    // ========================================================
    // FOR LOOP
    // ========================================================

    "for-loop": {

        title: "For Loop",

        definition:
            "A for loop is used to repeat a block of code for each item in a sequence " +
            "or for a specific range of values.",

        syntax:
`for variable in sequence:
    statement`,

        example:
`for i in range(1, 6):
    print(i)`,

        output:
`1
2
3
4
5`,

        explanation:
            "range(1, 6) generates numbers from 1 to 5. " +
            "The loop executes once for every number.",

        summary:
            "A for loop is useful when the number of repetitions or sequence is known."
    },


    // ========================================================
    // WHILE LOOP
    // ========================================================

    "while-loop": {

        title: "While Loop",

        definition:
            "A while loop repeatedly executes a block of code as long as its condition remains True.",

        syntax:
`while condition:
    statement`,

        example:
`i = 1

while i <= 5:
    print(i)
    i = i + 1`,

        output:
`1
2
3
4
5`,

        explanation:
            "The loop starts with i equal to 1. " +
            "It continues while i is less than or equal to 5. " +
            "The value of i increases by 1 after every iteration.",

        summary:
            "A while loop is useful when repetition depends on a condition."
    },


    // ========================================================
    // BASIC FUNCTION
    // ========================================================

    "basic-function": {

        title: "Basic Function",

        definition:
            "A function is a reusable block of code designed to perform a specific task. " +
            "Functions are defined using the def keyword.",

        syntax:
`def function_name():
    statements

function_name()`,

        example:
`def greet():
    print("Hello, Abhishek")

greet()`,

        output:
`Hello, Abhishek`,

        explanation:
            "The def keyword creates a function. " +
            "The function is executed when its name is called.",

        summary:
            "Functions help organize code and allow code to be reused."
    },


    // ========================================================
    // FUNCTION WITH ARGUMENTS
    // ========================================================

    "function-arguments": {

        title: "Function with Arguments",

        definition:
            "A function with arguments accepts values from the function call. " +
            "Arguments allow the same function to work with different values.",

        syntax:
`def function_name(parameter):
    statements

function_name(argument)`,

        example:
`def greet(name):
    print("Hello", name)

greet("Abhishek")`,

        output:
`Hello Abhishek`,

        explanation:
            "name is a parameter of the function. " +
            "When greet(\"Abhishek\") is called, Abhishek is passed as an argument to name.",

        summary:
            "Arguments make functions more flexible and reusable."
    },


    // ========================================================
    // FUNCTION WITH RETURN
    // ========================================================

    "function-return": {

        title: "Function with Return",

        definition:
            "A return statement is used to send a value back from a function to the place where the function was called.",

        syntax:
`def function_name():
    return value

result = function_name()`,

        example:
`def add(a, b):
    return a + b

result = add(10, 20)

print(result)`,

        output:
`30`,

        explanation:
            "The function calculates a + b and returns the result. " +
            "The returned value is stored in the result variable.",

        summary:
            "return sends a value from a function back to the calling statement."
    }

};


// ============================================================
// 3. OPEN TOPIC
// ============================================================

function openTopic(topic) {

    // Get selected topic data
    const data = topics[topic];


    // Check whether topic exists
    if (!data) {

        alert("Topic not found.");

        return;
    }


    // Update Topic Title
    document.getElementById("topic-title").textContent =
        data.title;


    // Update Definition
    document.getElementById("topic-definition").textContent =
        data.definition;


    // Update Syntax
    document.getElementById("topic-syntax").textContent =
        data.syntax;


    // Update Example
    document.getElementById("topic-example").textContent =
        data.example;


    // Update Output
    document.getElementById("topic-output").textContent =
        data.output;


    // Update Explanation
    document.getElementById("topic-explanation").textContent =
        data.explanation;


    // Update Summary
    document.getElementById("topic-summary").textContent =
        data.summary;


    // Scroll to topic content
    document.getElementById("topic-content").scrollIntoView({
        behavior: "smooth"
    });

}


// ============================================================
// 4. WEBSITE LOAD MESSAGE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Python Basics Website Loaded Successfully!"
    );

});
// ============================================================
// 5. COPY CODE FUNCTION
// Copies code to the clipboard
// ============================================================

function copyCode(elementId) {

    // Get the code element
    const codeElement = document.getElementById(elementId);

    // Get the code text
    const codeText = codeElement.textContent.trim();

    // Copy code to clipboard
    navigator.clipboard.writeText(codeText)
        .then(function () {

            // Find the clicked button
            const button =
                codeElement
                    .closest(".code-container")
                    .querySelector(".copy-button");

            // Change button text
            button.textContent = "✓ Copied";

            // Add copied class
            button.classList.add("copied");


            // Change button back after 2 seconds
            setTimeout(function () {

                button.textContent = "📋 Copy";

                button.classList.remove("copied");

            }, 2000);

        })
        .catch(function () {

            alert("Unable to copy code.");

        });
}