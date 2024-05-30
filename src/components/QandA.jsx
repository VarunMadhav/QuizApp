import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3"
import correct from "../assets/src_sounds_correct.mp3"
import wrong from "../assets/src_sounds_wrong.mp3"

export const QandA = ({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) => {

  // store the current Q
  const[question, setQuestion] = useState(null);
  
  const[selectAnswer,setSelectAnswer]=useState(null);
  // classname for styling the selected ans
  const[className,setClassName]=useState("answer");

  //sound effects
  const[letsPlay]=useSound(play);
  const[correctAnswer]=useSound(correct);
  const[wrongAnswer]=useSound(wrong);

  useEffect(()=>{
    letsPlay();
    },[letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);


  const delay=(duration,callback)=>{
    setTimeout(()=>{
      callback()
    },duration);
  }
  const handleClick=(ans)=>{
    setSelectAnswer(ans);
    // console.log(selectAnswer)
    setClassName("answer active")

    // setTimeout(() => {
    //   setClassName(ans.correct?"answer correct":"answer wrong")
    // }, 3000);
    delay(500,()=>setClassName(ans.correct?"answer correct":"answer wrong"))
    delay(3500,()=>{
      if(ans.correct){
        correctAnswer();
        delay(1000,()=>{
          if(questionNumber==15){
            setStop(true);
            alert("game ends")
          }
          setQuestionNumber((prev)=> prev+1)
          setSelectAnswer(null)
        })
      }else{
        wrongAnswer();
        delay(1000,()=>{

          setStop(true)
        })
      }
    })
  }

  

  return (
    <div className="qa">
      <div className="question">{question && question.question}</div>
      <div className="answers">
        {question && question.answers.map((ans, index) => (
          <div key={index} className={selectAnswer===ans? className:"answer"} onClick={()=>handleClick(ans)}>
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};
// export default QandA;