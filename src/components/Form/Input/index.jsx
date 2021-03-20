import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Filter.css";

export const Input = ({
  name,
  changeInputForFilter,
  changeInput,
  value,
  isOpen,
}) => {
  const upperName = [...name];
  upperName.splice(0, 1, upperName[0].toUpperCase());
  if (name === "filter") {
    return (
      <>
        <CSSTransition
          in={isOpen}
          timeout={250}
          classNames="label"
          unmountOnExit
        >
          <label htmlFor={name}>{upperName}</label>
        </CSSTransition>
        <CSSTransition
          in={isOpen}
          timeout={250}
          classNames="form"
          unmountOnExit
        >
          <input
            onChange={name === "filter" ? changeInputForFilter : changeInput}
            type="text"
            id={name}
            value={value}
          />
        </CSSTransition>
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={name}>{upperName}</label>
        <input onChange={changeInput} type="text" id={name} value={value} />
      </>
    );
  }
};

export default Input;
