import React from "react";

export const Display = () => {
  return (
    <div className="bg-black mt-5 p-5 rounded">
      <div className="row">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-primary">
              All
            </button>
            <button type="button" className="btn btn-warning">
              Drama
            </button>
            <button type="button" className="btn btn-info">
              Action
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">{}</div>
      </div>
    </div>
  );
};
