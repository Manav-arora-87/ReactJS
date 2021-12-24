import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn btn-danger col-2" onClick={()=> props.resetqty()}> Reset</button>
      <div className="bg-dark text-white text-center col-8">{props.totalamt}</div>
      <button className="btn btn-primary col-2"> Pay</button>
    </div>
  );
}
