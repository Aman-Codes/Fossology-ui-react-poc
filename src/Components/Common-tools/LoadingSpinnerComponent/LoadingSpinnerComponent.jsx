import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LaodingSpinnerComponent() {
  const styles = {
    position: 'relative',
  }

  return (
    <div className="row" style={styles}>
      <div className="col">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
 
export default LaodingSpinnerComponent;