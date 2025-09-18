import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
function PageNotFound() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 px-3 text-center">
      <h1 className='text-danger mb-3'>Page Not Found</h1>
      <h3 className='text-muted mb-4'>Requested page does not exist...</h3>
      <img
        src="/404.png"
        alt="404"
        className='rounded-4 img-fluid'
        style={{ maxWidth: "400px", width: "100%", height: "auto" }}
      />
    </div>
  );

}

export default PageNotFound;
