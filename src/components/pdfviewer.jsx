import React from "react";

const PDFViewer = () => {
  return (
    <div className="">
      <iframe
        src={`https://www.africau.edu/images/default/sample.pdf#toolbar=0`}
        className="h-full w-full"
      />
    </div>
  );
};
export default PDFViewer;
