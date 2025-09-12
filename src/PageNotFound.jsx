import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
function PageNotFound() {
  // return (
  //   <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 px-3 text-center">
  //     <h1 className='text-danger mb-3'>Page Not Found</h1>
  //     <h3 className='text-muted mb-4'>Requested page does not exist...</h3>
  //     <img
  //       src="/404.png"
  //       alt="404"
  //       className='rounded-4 img-fluid'
  //       style={{ maxWidth: "400px", width: "100%", height: "auto" }}
  //     />
  //   </div>
  // );

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ✅ Memoize the expensive calculation
  const double = (() => {
    console.log("Calculating...")
    return count * 2;
  })(); // only re-run when count changes

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={themeStyles}>
      <h1>Count: {count}</h1>
      <p>Double: {double}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
  
}

export default PageNotFound;
