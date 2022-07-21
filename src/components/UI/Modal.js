import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return (
    <div onClick={props.onHideCartHandler} className={classes.backdrop}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// to display it in the right div we are creating this Portal Element
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCartHandler={props.onCloseCartHandler} />,
        portalElement
      )}
      {/* here we are passing props.children because we want to pass data to modal to display */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
