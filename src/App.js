/*
to have circular images - https://www.fotor.com/photo-editor-app/editor/basic
to re-size images - https://www.iloveimg.com/resize-image/resize-png#resize-options,pixels
to remove background and crop - https://clippingmagic.com/
*/
import React, { useState } from 'react';
import './App.css';
import Table from './components/table'; // Correct path to the Table component
import cursorImages from './components/cursors'; // Correct path to cursors.js

function App() {
  const [selectedCursorIndex, setSelectedCursorIndex] = useState(null);
  const [selectedCursorImages, setSelectedCursorImages] = useState(null);

  const handleBoxClick = (boxIndex) => {
    const selectedCursorImages = cursorImages[boxIndex];
    setSelectedCursorIndex(boxIndex);
    setSelectedCursorImages(selectedCursorImages);
  };

  return (
    <div className="App">
      <Table numRows={10} numCols={3} onBoxClick={handleBoxClick} />
      {selectedCursorIndex !== null && selectedCursorImages && (
        <div className="cursor-preview">
          <p>Cursor Preview for Box {selectedCursorIndex + 1}:</p>
          <style>
            {`
              :hover {
                cursor: url(${selectedCursorImages.a}), auto;
              }
              .App {
                cursor: url(${selectedCursorImages.nonA}), pointer;
              }
            `}
          </style>
          <img src={selectedCursorImages.a} alt="Cursor for <a> tags" />
          <img src={selectedCursorImages.nonA} alt="Cursor for normal tags" />
        </div>
      )}
      <a href="#">this is a link</a>
    </div>
  );
}

export default App;
