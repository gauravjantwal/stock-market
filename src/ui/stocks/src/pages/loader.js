import React from "react";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <ReactLoading type="bubbles" color="#00b386" height={200} width={100} />
    </div>
  );
}

export default Loader;
