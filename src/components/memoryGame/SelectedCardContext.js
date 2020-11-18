import React, { useState, useEffect, createContext } from "react";

export const SelectedCardContext = createContext();
export const FoundCardContext = createContext();

export const SelectedCardProvider = (props) => {
  const [selectedCards, setSelectedCards] = useState({ card1: "", card2: "" });
  const [foundCard, setFoundCard] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [totalCard, setTotalCard] = useState(4);

  useEffect(() => {
    checkSelectedCards();
    checkFinihsed();
    console.log(score);
  }, [selectedCards]);

  // useEffect(() => {
  //   console.log("Context:"+foundCard);
  // }, [foundCard])

  const checkFinihsed = () => {
    if (foundCard === totalCard) {
      setFinished(true);
      console.log("finished is set");
    }
  };

  const checkSelectedCards = () => {
    if (selectedCards.card2 !== "") {
      if (selectedCards.card1[0] !== selectedCards.card2[0]) {
        selectedCards.card1[2]();
        selectedCards.card2[2]();
        setTimeout(() => {
          turnBackCards();
        }, 1000);
        setScore(score - 1);
      } else {
        setFoundCard((prev) => prev + 1);
        setScore(score + 5);
        selectedCards.card1[3]();
        selectedCards.card2[3]();
      }
      setSelectedCards({ card1: "", card2: "" });
    }
  };

  const turnBackCards = () => {
    selectedCards.card1[1]();
    selectedCards.card2[1]();
  };
  return (
    <SelectedCardContext.Provider value={[selectedCards, setSelectedCards]}>
      <FoundCardContext.Provider value={[foundCard, setFoundCard]}>
        {props.children}
      </FoundCardContext.Provider>
    </SelectedCardContext.Provider>
  );
};
