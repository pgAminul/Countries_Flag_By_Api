import React from "react";

export default function flagShow({ flag }) {
  return (
    <>
      <img src={flag.png} alt="" className="w-40 h-28 object-cover" />
    </>
  );
}
