import React from "react";
//import Frame from "../UIcomponents/Frame";


function Ringkasan() {
  return (
   
   <div className=" bg-transparent ml-32 pt-20 px-5">
    <div className="flex flex-col w-64 items-center gap-10">
      <div role="button" className="card w-64 border">
        <div className="card-body">
          <h5 className="card-title">Penjualan</h5>
          <p className="card-text">Lorem ipsum dolor sit a</p>
        </div>
      </div>
      <div className="">
        <div
          className="radial-progress bg-info border-info text-primary-content"
          style={{ "--value": 70 } as React.CSSProperties}
          role="progressbar"
        >
          70%
        </div>
      </div>
      <div className="w-full">
      
      </div>
    </div>
    </div>
   
  );
}

export default Ringkasan;
