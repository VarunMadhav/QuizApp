import React, { useEffect, useState } from "react";
import "./App.css";
import { QandA } from "./components/QandA";
import { Timer } from "./components/Timer";
import { Start } from "./components/Start";

const App = () => {
  const [user, setUser] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  // eslint-disable-next-line
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyInfo = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 400 },
    { id: 5, amount: 500 },
    { id: 6, amount: 1000 },
    { id: 7, amount: 2000 },
    { id: 8, amount: 3000 },
    { id: 9, amount: 4000 },
    { id: 10, amount: 5000 },
    { id: 11, amount: 6000 },
    { id: 12, amount: 12000 },
    { id: 13, amount: 24000 },
    { id: 14, amount: 48000 },
    { id: 15, amount: 100000 },
  ].reverse();
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyInfo.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyInfo, questionNumber]);
  return (
    <div className="app">
      {user ? (
        <React.Fragment>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned:₹ {earned}</h1>
            ) : (
              <React.Fragment>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <QandA
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyPyramid">
              {moneyInfo.map((data, key) => {
                return (
                  <li
                    className={
                      questionNumber === data.id
                        ? "moneyPyramidItem active"
                        : "moneyPyramidItem"
                    }
                  >
                    <span className="questionNumber">{data.id}</span>
                    <span className="questionAmount">₹ {data.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </React.Fragment>
      ) : (
        <Start setUser={setUser} />
      )}
    </div>
  );
};
export default App;
