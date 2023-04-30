// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the correct way to write a JavaScript comment?",
    a: [{ text: "a) //This is a comment", isCorrect: true },
        { text: "b) <!--This is a comment-->", isCorrect: false },
        { text: "c) /*This is a comment*/", isCorrect: false }
    ]},{
    id: 1,
    q: "What is the result of '3 > 2 > 1 === false'?",
    a: [{ text: "a) true", isCorrect: true },
        { text: "b) false", isCorrect: false },
        { text: "c) You receive an error", isCorrect: false }
    ]},{
    id: 2,
    q: "How do you find the minimum of x and y using JavaScript?",
    a: [{ text: "a) min(x,y)", isCorrect: false },
        { text: "b) Math.min(x,y)", isCorrect: true },
        { text: "c) Math.mini(xy)", isCorrect: false }
    ]},{
    id: 3,
    q: "Which of the following statements will throw an error?",
    a: [{ text: "a) var fun = function bar(){}", isCorrect: false },
        { text: "b) function fun(){}", isCorrect: false },
        { text: "c) var fun = function bar{}", isCorrect: true }
    ]},{
    id: 4,
    q: "Which JS label catches all the values, except for the ones specified?",
    a: [{ text: "a) label", isCorrect: false },
        { text: "b) catch", isCorrect: false },
        { text: "c) default", isCorrect: true }
    ]},{
    id: 5,
    q: "Which statement is executed correct if x is equal to 2?",
    a: [{ text: "a) if(x=2)", isCorrect: false },
        { text: "b) if(x==2)", isCorrect: true },
        { text: "c) if(x!=2)", isCorrect: false },
    ]},{
    id: 6,
    q: "Which is the correct JS syntax to change the HTML content given below?",
    a: [{ text: 'a) document.getElementById(test).innerHTML="Hello World";', isCorrect: false},
        { text: 'b) document.getElementsByID("test").innerHTML="Hello World";', isCorrect: false },
        { text: 'c) document.getElementById("test").innerHTML="HelloWorld";', isCorrect: true }
    ]},{
    id: 7,
    q: "Is JavaScript a compiled or interpreted language?",
    a: [{ text: "a) interpreted", isCorrect: true },
        { text: "b) compiled", isCorrect: false },
        { text: "c) both", isCorrect: false },

    ]},{
    id: 8,
    q: "What is the difference between let and var? Which answer is wrong?",
    a: [{ text: "a) 'var' was available from the beginning, 'let' came as part of ES6", isCorrect: false },
        { text: "b) 'let' can only be a string, 'var' can only be an integer", isCorrect: true },
        { text: "c) 'let' has a function scope, 'var' has a block scope", isCorrect: false }
    ]},{
    id: 9,
    q: "What are Data Types?",
    a: [{ text: "a) +, -, x, /, %", isCorrect: false },
        { text: "b) bigint, string, string, undefined, null, number, boolean, symbol and object", isCorrect: true },
        { text: "c) var, let and const", isCorrect: false }
    ]
}]

// Set start
var start = true;


// Iterate
function iterate(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText = Questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;

    var selected = "";

    const evaluate = document.getElementsByClassName("evaluate");

    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#FFF200";
        op2.style.backgroundColor = "#FFE69A";
        op3.style.backgroundColor = "#FFE69A";
        selected = op1.value;
        result[0].innerHTML = "";
    })

    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#FFE69A";
        op2.style.backgroundColor = "#FFF200";
        op3.style.backgroundColor = "#FFE69A";
        selected = op2.value;
        result[0].innerHTML = "";
    })

    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#FFE69A";
        op2.style.backgroundColor = "#FFE69A";
        op3.style.backgroundColor = "#FFF200";
        selected = op3.value;
        result[0].innerHTML = "";
    })

    evaluate[0].addEventListener("click", () => {
        if (selected == "") {
            result[0].innerHTML = "<b>You need to choose an answer!</b>";
            result[0].style.color = "black";
            next.disabled = true;
            op1.style.backgroundColor = "#FFE69A";
            op2.style.backgroundColor = "#FFE69A";
            op3.style.backgroundColor = "#FFE69A";
            op1.disabled = false;
            op2.disabled = false;
            op3.disabled = false;
            evaluate[0].disabled = false;
        } else if (selected == "true") {
            result[0].innerHTML = "<b>Correct! Well done! :)</b>";
            result[0].style.color = "green";
            next.disabled = false;
            evaluate[0].disabled = true;

            if (op1.value == selected) {
                op1.style.backgroundColor = "#5F8D4E";
            } else if (op2.value == selected) {
                op2.style.backgroundColor = "#5F8D4E";
            } else if (op3.value == selected) {
                op3.style.backgroundColor = "#5F8D4E";
            } 

            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;

        } else if (selected == "false") {
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            next.disabled = false;
            evaluate[0].disabled = true;
            result[0].style.color = "black";

            if (id == 0 || id == 1 || id == 7) {
                op1.style.backgroundColor = "#A4BE7B";
                op2.style.backgroundColor = "#C21010";
                op3.style.backgroundColor = "#C21010";
                if (id == 0) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>You use // to write a comment in JavaScript.<br><b>The right answer is a.</b><br>";
                } else if (id == 1) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>Going left to right, '3 > 2' is evaluated first, which is true. The expression becomes 'true > 1'. 'true' is then converted to 1. This gives '1 > 1', which is false.<br><b>The right answer is a.</b>";
                } else if (id == 7) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>JavaScript is an interpreted language. Interpreted means that an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.<br><b>The right answer is a.</b>";
                } 
            } else if (id == 2 || id == 5 || id == 8 || id == 9) {
                op1.style.backgroundColor = "#C21010";
                op2.style.backgroundColor = "#A4BE7B";
                op3.style.backgroundColor = "#C21010";
                if (id == 2) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>To find the lowest value in a list of arguments, you need the Math property 'min()'. The syntax of every Math property is: <i>Math.property</i>.<br><b>The right answer is b.</b>";
                } else if (id == 5) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>'x=2' assigns x the value 2 and 'x!=2' states that x and 2 are not equal.<br><b>The right answer is b.</b>";
                } else if (id == 8) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b></br>'let' and 'var' can have strings and numbers as their values.<br><b>The right answer is b.</b>";
                } else if (id == 9) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>JavaScript has 8 data types: string, number, bigint, boolean, undefined, null, symbol and object.<br><b>The right answer is b.</b>";
                }
            } else if (id == 3 || id == 4 || id == 6) {
                op1.style.backgroundColor = "#C21010";
                op2.style.backgroundColor = "#C21010";
                op3.style.backgroundColor = "#A4BE7B";
                if (id == 3) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>A JavaScript function is defined with the function keyword,<br>followed by a name, followed by parentheses ().<br><b>The right answer is c.</b>";
                } else if (id == 4) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>If a function in JavaScript is called with missing arguments (less than declared),<br>the missing values are set to <i>undefined</i>.<br><b>The right answer is c.</b>";
                } else if (id == 6) {
                    result[0].innerHTML = "<b>Your answer is wrong!</b><br>'getElementsById' does not exist and the searched ID-name <i>test</i> must be in<br>quotation marks.<br><b>The right answer is c.</b>";
                }
            }
        }
    }); evaluate[0].disabled = false;
} 

function message() {
    const question = document.getElementById("question");
    question.remove();

    const option_container = document.getElementById("option-container");
    option_container.remove();

    const evaluate = document.getElementsByClassName("evaluate");
    evaluate[0].remove();
    next.remove();    

    const container = document.getElementById("container");
    container.style.opacity = "0";
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
next.disabled = true;


next.addEventListener("click", () => {
    start = false;
    op1.style.backgroundColor = "#FFE69A";
    op2.style.backgroundColor = "#FFE69A";
    op3.style.backgroundColor = "#FFE69A";

    next.disabled = true;
    op1.disabled = false;
    op2.disabled = false;
    op3.disabled = false;

    if (id < 9) {
        id++;
        iterate(id);
        console.log("Question-id:" + id);
    } else if (id == 9) {
        console.log("Now comes the changed container!");
        message();
    }   
})