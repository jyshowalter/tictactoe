//Determine whose turn it is

//Listen for a click in a box 

//Depending on turn, place X for player = 1, place O for player = 2

//Remove click ability for used box

//Change players 
let player_one = 1;
function switchTurns (squares) {
    if (player_one == 1) {
        document.querySelector(squares).innerText = 'X';
        player_one = 0;
    } else {
        document.querySelector(squares).innerText = 'O'
        player_one = 1;
    }
}

//Resume play until 3 in a row 
const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

//Update to determine winner