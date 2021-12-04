// make 9 buttons in section
// give buttons data-number, class name e.g. "row1 column1" for future use, display grid for section.
// var some names e.g. allButtons and  document.querySelector() to locate
var allButtons = document.querySelectorAll("section button")
var buttonsColumnOne = document.querySelectorAll(".column1")
var buttonsColumnTwo = document.querySelectorAll(".column2")
var buttonsColumnThree = document.querySelectorAll(".column3")
var buttonsRowOne = document.querySelectorAll(".row1")
var buttonsRowTwo = document.querySelectorAll(".row2")
var buttonsRowThree = document.querySelectorAll(".row3")
var buttonOne = document.querySelector('[data-number="1"]')
var buttonThree = document.querySelector('[data-number="3"]')
var buttonFive = document.querySelector('[data-number="5"]')
var buttonSeven = document.querySelector('[data-number="7"]')
var buttonNine = document.querySelector('[data-number="9"]')
var resetButton = document.querySelector(".reset-button")
var arrayColumnOne = []
var arrayColumnTwo = []
var arrayColumnThree = []
var arrayRowOne = []
var arrayRowTwo = []
var arrayRowThree = []
var title = document.querySelector("h1")
var spanResult = document.querySelector(".result")
var choices = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
var index = 0
var result = ""


// textContent will be X or O
// First person click, it will fill in X and next person/computer to click to fill in O
// RULES
// if three in a line are the same, disable everything and deem X or O wins
// try if all columns or rows are the same or the Diagonal same

allButtons.forEach(function (button) {
    button.classList.toggle("shadow");
    button.addEventListener('click', handleClick)
});
resetButton.addEventListener('click', handleReset)

function handleClick(event) {
    // when clicked, disable button
    var userClicked = event.target;
    userClicked.disabled = true;
    userClicked.classList.toggle("no-shadow");

    // when clicked, log the textContent into an array
    if (index < choices.length) {
        userClicked.textContent = choices[index];
        index++;
    }

    // add image
    if (userClicked.textContent == "X") {
        userClicked.style.backgroundImage = "url('/images/Doge.png')";
        userClicked.style.backgroundSize = "180px 180px";
        title.textContent = "Tickle Dog Toe";
    } else if (userClicked.textContent == "O") {
        userClicked.style.backgroundImage = "url('/images/guapi.jpeg')";
        userClicked.style.backgroundSize = "180px 180px";
        title.textContent = "Tickle Cat Toe";
    }


    if (userClicked.classList.contains("row1")) {
        arrayRowOne.push(userClicked.textContent);
        result = judge(arrayRowOne);
    } else if (userClicked.classList.contains("row2")) {
        arrayRowTwo.push(userClicked.textContent);
        result = judge(arrayRowTwo);
    } else {
        arrayRowThree.push(userClicked.textContent);
        result = judge(arrayRowThree);
    }

    displayResult();

    if (userClicked.classList.contains("column1")) {
        arrayColumnOne.push(userClicked.textContent);
        result = judge(arrayColumnOne);
    } else if (userClicked.classList.contains("column2")) {
        arrayColumnTwo.push(userClicked.textContent);
        result = judge(arrayColumnTwo);
    } else {
        arrayColumnThree.push(userClicked.textContent);
        result = judge(arrayColumnThree);
    }

    displayResult();
}

function judge(arr) {
    if (arr.join("") == "OOO") {
        return ("O wins")
    } else if (arr.join("") == "XXX") {
        return ("X wins")
    }
    if (buttonFive.textContent != "") {
        if (buttonOne.textContent == buttonFive.textContent && buttonOne.textContent == buttonNine.textContent) {
            return `${buttonFive.textContent} wins`;
        } else if (buttonThree.textContent == buttonFive.textContent && buttonFive.textContent == buttonSeven.textContent) {
            return `${buttonFive.textContent} wins`;
        }
    }
    if (index == 9 && result != "O wins" && result != "X wins") {
        return "DRAW";
    }
}

function displayResult() {
    if (result == "O wins" || result == "X wins" || result == "DRAW") {
        if (result == "O wins") {
            spanResult.textContent = "Cat wins!"
        } else if (result == "X wins") {
            spanResult.textContent = "Dog wins!"
        } else {
            spanResult.textContent = result;
        }
        allButtons.forEach(function (button) {
            button.disabled = true;
            button.classList.remove('shadow');
        });
    }
}

function handleReset() {
    allButtons.forEach(function (button) {
        button.textContent = "";
        button.disabled = false;
        button.classList.remove('no-shadow');
        button.classList.toggle("shadow");
        button.style.backgroundImage = "";
    })
    title.textContent = "Tic Tac Toe";
    result = "";
    arrayColumnOne = [];
    arrayColumnTwo = [];
    arrayColumnThree = [];
    arrayRowOne = [];
    arrayRowTwo = [];
    arrayRowThree = [];
    index = 0;
    spanResult.textContent = "";
}


// if every button has content (was clicked), and no line of three formed, display DRAW.
// MODE
// easy mode, computer randomly select empty cells;
// medium mode computer should always take center first, if not, try a random button. computer will try to block user to form three
// hard mode, computer will try to block user to form three and build its own three at the same time.
// maybe make three functions of easy medium and hard or just pick one.
// Reset button
// reset all buttons
// reset display


// function randomDataNumber() {

//             }

// function computer() {
//                 // after user clicked
//                 // computer give a random choice of the rest of the ones if button not disabled
//                 // if one button is disabled pick another button
//                 var dataNumber = Math.ceil(Math.random() * 9)
//                 var computerButton = document.querySelector(`[data-number = ${dataNumber}]`)
//                 while (computerButton.disabled) {
//                     // 
//                 }
//                 allButtons.forEach(function (button) {
//                     if (button.disabled =) {
//                     pick another button
//                     }
//                 }
//         }




//fancy functions
// ask user to put in name
// ask to play first or computer first

