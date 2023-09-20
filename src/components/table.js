import React from 'react';
import '../styles/table.css'; // Import the styling for the table

function Table({ numRows, numCols, onBoxClick }) {
  const handleBoxClick = (boxIndex) => {
    onBoxClick(boxIndex);
  };

  const renderTable = () => {
    const tableRows = [];
  
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      const rowCells = [];
  
      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        const boxIndex = rowIndex * numCols + colIndex; // Calculate boxIndex
        rowCells.push(
          <td
            key={colIndex}
            className="cell"
            style={{ backgroundColor: `#${boxIndex + 1}a${boxIndex + 2}` }}
            onClick={() => handleBoxClick(boxIndex)} // Pass boxIndex to handleBoxClick
          />
        );
      }
  
      tableRows.push(<tr key={rowIndex}>{rowCells}</tr>);
    }
  
    return tableRows;
  };
  

  return (
    <table className="table">
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default Table;
