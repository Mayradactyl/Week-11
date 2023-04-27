var board;
var playerO = "O"
var playerX = "X"
var currentPlayer = playerO;
var gameOver = false;
// We will have game start with playerO and alternate every time a tile is clicked and we're have a bool for game over. 


// when the page load we will call this function immediately and will set the game.
window.onload = function() {    
    setGame()

}

// Define setGame and this will populate the tiles into the board so that out board is going to be a 3x3 Array with a blank string. 
function setGame() {
    board = [
        [' ', ' ', ' '], 
        [' ', ' ', ' '], 
        [' ', ' ', ' ']
    ]

    // we're also going to use a doble for loop, we're also going to create a div document div tag  

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            // <div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r ==1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", setTile);
            document.getElementById("board").append(tile);
        }
    } 
}


function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-") 
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') {
        return;
    }

    board[r][c] = currentPlayer;
    this.innerText = currentPlayer;

    if (currentPlayer == playerO){
        currentPlayer = playerX;

    }
    else {
        currentPlayer = playerO;
    }

    checkWinner();
    
    
}

function checkWinner() { 
    // horizontally

    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("Winner");
            }
            gameOver = true;
            return;
        }
    }
//   if both contitions are true then it returns true looping through our bool conditions.
    // vertically
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }

        // diagonally
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile= document.getElementById(i.toString() + "-" + i.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }

        // reverse diagonally
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
            let tile = document.getElementById("0-2");
            tile.classList.add("winner");

            tile = document.getElementById("1-1");
            tile.classList.add("winner");

            tile = document.getElementById("2-0");
            tile.classList.add("winner");

            gameOver = true;
            return;
        }

    }


}

function checkTie() {
    let count = 0; 
    for (let r = 0; r < 3; r++); {
        for (c = 0; c < 3; c++); {
            if (board[r][c] != ''); {
                count++;

            }
        }

    }

    if (count == 9) {
        for (let r = 0; r < 3; r++); {
            for (c = 0; c <3; c++); {
                let t = document.getElementById(r.toString ());
                t.classList.add('tie');
            }
        }
    gameOver = true
    }

}
// // const resetBoard = document.querySelector('#reset');
// resetButton.addEventListener('click', resetBoard);

// const resetBoard = () => {
//     board = ['','','','','','','','',''];
//     isGameActive = true;
//     announcer.classList.add('hide');

//     if (currentPlayer === 'O') {
//         changePlayer();
//     }
//     tiles.forEach(tile => {
//         tile.innerText = '';
//         tile.classList.remove('playerX');
//         tile.classList.remove('playerO');
//     });
// }
