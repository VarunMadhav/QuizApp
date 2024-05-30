import React, { useRef } from "react";

export const Start=({ setUser }) =>{
  const inputRef = useRef();

  const handleClick = () => {
    !inputRef.current.value && alert("Enter the name first ")
    inputRef.current.value && setUser(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}