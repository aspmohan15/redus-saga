import React from "react";

const Child = ({ childToParent }) => {
  const data = "Child Data";

  return (
    <div>
      Child
      <button onClick={() => childToParent(data)}>Child to PArent</button>
    </div>
  );
};

export default Child;
