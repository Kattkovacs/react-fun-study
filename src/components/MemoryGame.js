import React from "react";
import styled from "styled-components";
import GetMemoryCard from "./GetMemoryCard";
import Timer from "./Stopwatch";

export default function MemoryGame(props) {
  const content = [];
  const difficulty = props.location.search.split("=")[1];
  const amount = difficulty === "easy" ? 4 : 8;
  for (let i = 0; i < amount; i++) {
    const memo = GetMemoryCard();
    content.push(memo[0]);
    content.push(memo[1]);
  }

  shuffle(content);

  return (
    <div>
      <Timer key={amount} amount={amount}/>
      <GameBoard>{content}</GameBoard>;
    </div>
  );
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const GameBoard = styled.div`
  padding-top: 82px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  background-color: #eeeeff;
  margin: auto;
`;
