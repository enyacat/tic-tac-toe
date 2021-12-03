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

    if (userClicked.classList.contains("row1")) {
        arrayRowOne.push(userClicked.textContent);
        result = winLose(arrayRowOne);
    } else if (userClicked.classList.contains("row2")) {
        arrayRowTwo.push(userClicked.textContent);
        result = winLose(arrayRowTwo);
    } else {
        arrayRowThree.push(userClicked.textContent);
        result = winLose(arrayRowThree);
    }

    if (userClicked.classList.contains("column1")) {
        arrayColumnOne.push(userClicked.textContent);
        result = winLose(arrayColumnOne);
    } else if (userClicked.classList.contains("column2")) {
        arrayColumnTwo.push(userClicked.textContent);
        result = winLose(arrayColumnTwo);
    } else {
        arrayColumnThree.push(userClicked.textContent);
        result = winLose(arrayColumnThree);
    }

    if (buttonFive.textContent != "") {
        if (buttonOne.textContent == buttonFive.textContent && buttonOne.textContent == buttonNine.textContent) {
            result = `${buttonFive.textContent} wins`;
            gameOver();
        } else if (buttonThree.textContent == buttonFive.textContent && buttonFive.textContent == buttonSeven.textContent) {
            result = `${buttonFive.textContent} wins`;
            gameOver();
        }
    }
    if (result != "") {
        // gameOver();
    }

    spanResult.textContent = result;
}




// test if element contains class
// element.classList.contains(class);

function test(arr) {
    if (arr == ['X', 'X', 'X']) {
        console.log('yes')
    }
}

function winLose(arr) {
    if (index == 9 && result != "O wins" && result != "X wins") {
        return "DRAW";
    }
    if (arr.join("") == "OOO") {
        allButtons.forEach(function (button) {
            button.disabled = true;
        });
        return ("O wins")
    } else if (arr.join("") == "XXX") {
        allButtons.forEach(function (button) {
            button.disabled = true;
        });
        return ("X wins")
    }
}

function gameOver() {
    allButtons.forEach(function (button) {
        button.disabled = true;
        button.classList.remove('shadow');
    });
    arrayColumnOne = [];
    arrayColumnTwo = [];
    arrayColumnThree = [];
    arrayRowOne = [];
    arrayRowTwo = [];
    arrayRowThree = [];
}

function handleReset() {
    allButtons.forEach(function (button) {
        button.textContent = "";
        button.disabled = false;
        button.classList.remove('no-shadow');
    })
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

