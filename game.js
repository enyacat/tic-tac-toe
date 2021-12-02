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


// textContent will be X or O
// First person click, it will fill in X and next person/computer to click to fill in O
// RULES
// if three in a line are the same, disable everything and deem X or O wins
// try if all columns or rows are the same or the Diagonal same
if (button of same column)

allButtons.forEach(function (button) {
    button.addEventListener('click', handleClick)
});


function handleClick(event) {
    // when clicked, disable button
    var userClicked = event.target;
    userClicked.disabled = true;
    // when clicked, log the textContent into an array
    var arrayColumn = []
    var arrayRow = []

    arrayColumn.push(userClicked.textContent);
    arrayRow.push(userClicked.textContent);

    buttonsRowOne.forEach(function (button) {
        var arrayColumnOne = []
        var arrayColumnTwo = []
        var arrayColumnThree = []
        var arrayRowOne = []
        var arrayRowTwo = []
        var arrayRowThree = []

        if (userClicked.classList.contains(row1)) {
            arrayRowOne.push(userClicked.textContent);
            result = winLose(arrayRowOne);
        } elseif(userClicked.classList.contains(row2)) {
            arrayRowTwo.push(userClicked.textContent);
            result = winLose(arrayRowTwo);
        } else {
            arrayRowThree.push(userClicked.textContent);
            result = winLose(arrayRowThree);
        }

        if (userClicked.classList.contains(column1)) {
            arrayColumnOne.push(userClicked.textContent);
            result = winLose(arrayColumnOne);
        } elseif(userClicked.classList.contains(column2)) {
            arrayColumnTwo.push(userClicked.textContent);
            result = winLose(arrayColumnTwo);
        } else {
            arrayColumnThree.push(userClicked.textContent);
            result = winLose(arrayColumnThree);
        }
    }


// test if element contains class
// element.classList.contains(class);



function winLose(arr) {
            var winArrayX = ['X', 'X', 'X']
            var winArrayO = ['O', 'O', 'O']
            if (arr == winArrayO) {
                // O wins
            } else if (arr == winArrayX) {
                // X wins
            }
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


//fancy functions
// ask user to put in name
// ask to play first or computer first

