import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading'
        width={180}
        className='text-center mx-auto'
      />
    </div>
  );
}

export default Spinner;
