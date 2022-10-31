/* ---------- GLOBAL VARIBLES ---------- */
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const select = document.querySelector(".select")
const winText = document.querySelector(".win")
let gameboard = document.querySelectorAll("div");
let currentPlayer = "none";
let board = ["", "", "", "", "", "", "", "", ""];
 
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", (e) => {
      currentPlayer = element.innerHTML;
      console.log(currentPlayer)
      gameboard.forEach((e) => {
        e.innerText = " ";
      });
      select.classList.add("hide")
      board = ["", "", "", "", "", "", "", "", ""];
      startGame();
    });
})

/*  document.querySelector(".x").addEventListener("click", () => {
  currentPlayer = "X";
  gameboard.forEach(e =>{
    e.innerText = " "
  })
  board = ["", "", "", "", "", "", "", "", ""];
  startGame();
});
document.querySelector(".o").addEventListener("click", () => {
  currentPlayer = "O";
    gameboard.forEach((e) => {
      e.innerText = " ";
    });
    board = ["", "", "", "", "", "", "", "", ""];
  startGame();
});  */

function startGame() {
  gameboard.forEach((h2, i) => {
    h2.style.color = "ghostwhite";
    h2.addEventListener("click", () => {
      console.log(h2.textContent + "clicked");
      if (h2.textContent.includes("X") || h2.textContent.includes("O")) {
        console.log("field is full");
      } else {
        if (currentPlayer == "O") {
          console.log("O is clicked");
          h2.innerText = "O";
          board[i] = "O";
          h2.style.color = "black";
          currentPlayer = "X";
          win(currentPlayer, gameboard, board);
        } else if (currentPlayer == "X") {
          console.log("X is clicked");
          h2.innerText = "X";
          board[i] = "X";
          h2.style.color = "black";
          currentPlayer = "O";
          win(currentPlayer, gameboard, board);
        }
      }
    });
  });
}

function win(currentPlayer, gameboard, board) {
  winning.forEach((list, listIndex) => {
    console.log(currentPlayer);
    if (
      board[list[0]] == currentPlayer &&
      board[list[1]] == currentPlayer &&
      board[list[2]] == currentPlayer
    ) {
      winText.classList.remove("hide")
      winText.textContent = `${currentPlayer} Wins`
      console.log("win X");
      stop()
    } else if (
      board[list[0]] == "O" &&
      board[list[1]] == "O" &&
      board[list[2]] == "O"
    ) {
      winText.classList.remove("hide");
      winText.textContent = `${currentPlayer} Wins`;
      console.log("win O");
      stop()
    } else {console.log("no winner");}
  });
}


function stop() {
  console.log("Game Stopped")
}

