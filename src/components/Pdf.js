import React from "react";
import { useState, useEffect } from "react";
const Pdf = (props) => {
  const [shown, setShown] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const localCheck = JSON.parse(localStorage.getItem(`checkbox ${props.id}`)) === "true" ?  true : false;
  
  const [isChecked, setIsChecked] = useState(localCheck);

  const handleOnChange = (e) => {
      if (e.target.checked===true) {
          setIsChecked(e.target.checked);
          props.handleScoreOnChecked();
          setTriggerMessage(true)
          setShowAlert(true);
          localStorage.setItem(`checkbox ${e.target.value}` ,JSON.stringify(`${e.target.checked}`))
      } else{
        props.handleScoreOnUnchecked();
       
  }}
  

  const toggle = () => {
    setShown((prevState) => !prevState);
    
  };

  
  return (
    <div className="pdf--container--style shadow container">
      {triggerMessage ? (
        showAlert ? (
          <div className="alert alert-success alert-dismissible shadow pdf--alert fixed-top  " role="alert">
            <div className="alert--text">Πήρες 5 πόντους!</div>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        ) : (
          <div className="alert alert-danger alert-dismissible shadow pdf--alert fixed-top" role="alert">
            <div className="alert--text">Σου αφεραίθηκαν 5 πόντοι!</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      )
       : ("")}
        <h1 className="h1--style center">
          Κεφάλαιο {props.id}
        </h1>
      
      <button onClick={toggle} className="shadow-sm button--style">
        Μάθημα {props.id}
      </button>
      {shown && <embed className="pdf" src={props.pdf} />}
      {!shown && <p className="p--style">{props.info}</p>}
      
      <div class="form-check center">
        <input class="pdfChecked form-check-input" type="checkbox" id="flexCheckDefault"
        value={props.id}
        checked={isChecked}
        onChange={handleOnChange}/>
        <label class="form-check-label input--label" for="flexCheckDefault">
          Διάβασα το κεφάλαιο!
        </label>
      </div>
    </div>
  );
};

export default Pdf;
