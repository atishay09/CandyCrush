import React, { useEffect, useState } from "react";
import redCandy from "./images/Red-candy.png";
import blueCandy from "./images/blue-candy.png";
import greenCandy from "./images/green-candy.png";
import purpleCandy from "./images/Purple-candy.png";
import orangeCandy from "./images/Orange-candy.png";
import yellowCandy from "./images/Yellow-candy.png";
import blank from "./images/blank.png";
import Scoreboard from "./components/Scoreboard";
import "./App";
import { Link} from "react-router-dom";

const width = 8;
const candyColor = [
  blueCandy,
  redCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  yellowCandy,
];

const PlayGame = () => {
  const [currColorArr, setCurrColorArr] = useState([]);
  const [squareDragged, setSquareDragged] = useState(null);
  const [squareReplaced, setSquareReplaced] = useState(null);
  const [totalScore, setNewScore] = useState(0);
  const [moves, setMoves] = useState(20);
  const [over, setOver] = useState(false);

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currColorArr[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63,
      ];
      if (notValid.includes(i)) continue;
      const isblank = currColorArr[i] === blank;
      if (
        rowOfThree.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        rowOfThree.forEach((square) => (currColorArr[square] = blank));
        setNewScore((score) => score + 3);
        return true;
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currColorArr[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 61, 62, 63,
      ];
      if (notValid.includes(i)) continue;
      const isblank = currColorArr[i] === blank;
      if (
        rowOfFour.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        setNewScore((score) => score + 6);
        rowOfFour.forEach((square) => (currColorArr[square] = blank));
        return true;
      }
    }
  };

  const checkForRowOfFive = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
      const decidedColor = currColorArr[i];
      const notValid = [
        4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38,
        39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63,
      ];
      if (notValid.includes(i)) continue;
      const isblank = currColorArr[i] === blank;
      if (
        rowOfFive.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        setNewScore((score) => score + 10);
        rowOfFive.forEach((square) => (currColorArr[square] = blank));
        return true;
      }
    }
  };

  const checkForColOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const colOfThree = [i, i + width, i + width * 2];
      const decidedColor = currColorArr[i];
      const isblank = currColorArr[i] === blank;
      if (
        colOfThree.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        setNewScore((score) => score + 3);
        colOfThree.forEach((square) => (currColorArr[square] = blank));
        return true;
      }
    }
  };

  const checkForColOfFour = () => {
    for (let i = 0; i <= 31; i++) {
      const colOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currColorArr[i];
      const isblank = currColorArr[i] === blank;
      if (
        colOfFour.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        setNewScore((score) => score + 6);
        colOfFour.forEach((square) => (currColorArr[square] = blank));
        return true;
      }
    }
  };

  const checkForColOfFive = () => {
    for (let i = 0; i <= 23; i++) {
      const colOfFive = [
        i,
        i + width,
        i + width * 2,
        i + width * 3,
        i + width * 4,
      ];
      const decidedColor = currColorArr[i];
      const isblank = currColorArr[i] === blank;
      if (
        colOfFive.every(
          (square) => currColorArr[square] === decidedColor && !isblank
        )
      ) {
        setNewScore((score) => score + 10);
        colOfFive.forEach((square) => (currColorArr[square] = blank));
        return true;
      }
    }
  };

  const checkMoves = () => {
    if (moves === 0) {
      setTimeout(()=>{
        setOver(true);
      },1000)
    }
  };

  const moveIntoSquareBelow = () => {
    for (let i = 0; i < 64 - width; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currColorArr[i] === blank) {
        let randomNum = Math.floor(Math.random() * candyColor.length);
        currColorArr[i] = candyColor[randomNum];
      }

      if (currColorArr[i + width] === blank) {
        currColorArr[i + width] = currColorArr[i];
        currColorArr[i] = blank;
      }
    }
  };

  //console.log(totalScore)

  const dragStart = (e) => {
    setSquareDragged(e.target);
  };

  const dragDrop = (e) => {
    setSquareReplaced(e.target);
  };

  const dragEnd = () => {
    const squareDraggedId = parseInt(squareDragged.getAttribute("data-id"));
    const squareReplacedId = parseInt(squareReplaced.getAttribute("data-id"));

    currColorArr[squareReplacedId] = squareDragged.getAttribute("src");
    currColorArr[squareDraggedId] = squareReplaced.getAttribute("src");

    const validMoves = [
      squareDraggedId - 1,
      squareDraggedId + 1,
      squareDraggedId + width,
      squareDraggedId - width,
    ];

    const validMove = validMoves.includes(squareReplacedId);

    const isColofFive = checkForColOfFive();
    const isRowofFive = checkForRowOfFive();
    const isColofFour = checkForColOfFour();
    const isRowofFour = checkForRowOfFour();
    const isColofThree = checkForColOfThree();
    const isRowofThree = checkForRowOfThree();

    if (
      squareReplacedId &&
      validMove &&
      (isColofFive ||
        isRowofFive ||
        isColofFour ||
        isRowofFour ||
        isColofThree ||
        isRowofThree)
    ) {
      setSquareDragged(null);
      setSquareReplaced(null);
      setMoves((move) => move - 1);
    } else {
      currColorArr[squareReplacedId] = squareReplaced.getAttribute("src");
      currColorArr[squareDraggedId] = squareDragged.getAttribute("src");
      setCurrColorArr([...currColorArr]);
    }
  };

  const createBoard = () => {
      const randomColorArrangement = [];
      for (let i = 0; i < width * width; i++) {
        const randomColor =
          candyColor[Math.floor(Math.random() * candyColor.length)];
        randomColorArrangement.push(randomColor);
      }
      setCurrColorArr(randomColorArrangement);
  };

  const playAgain = () => {
    PlayGame();
  };

  useEffect(() => {
      createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColOfFive();
      checkForRowOfFive();
      checkForColOfFour();
      checkForRowOfFour();
      checkForColOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      checkMoves();
      setCurrColorArr([...currColorArr]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColOfFive,
    checkForColOfFour,
    checkForColOfThree,
    checkForRowOfFive,
    checkForRowOfFour,
    checkForRowOfThree,
    moveIntoSquareBelow,
    checkMoves,
    currColorArr,
  ]);
  if (!over) {
    return (
      <div className="main-div">
        <h1>Candy Crush</h1>
        <div className="app-game">
                <div className="game">
                  {currColorArr.map((curcol, idx) => (
                    <img
                      key={idx}
                      src={curcol}
                      alt="candy"
                      data-id={idx}
                      draggable={true}
                      onDragStart={dragStart}
                      onDragOver={(e) => e.preventDefault()}
                      onDragEnter={(e) => e.preventDefault()}
                      onDragLeave={(e) => e.preventDefault()}
                      onDrop={dragDrop}
                      onDragEnd={dragEnd}
                    />
                  ))}
                </div>
              </div>
        <div className="score-moves">
          <Scoreboard score={totalScore} />
          <h2>Moves : {moves}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="cont">
          <div className="cont-start">
            <h1>Your Score is {totalScore}</h1>
            <div className="btns">
              <Link to="/candycrush" className="btn">
                Play Again
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PlayGame;
