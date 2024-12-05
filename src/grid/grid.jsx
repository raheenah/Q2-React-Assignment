import { range } from "./utils";

const gridStyles = {
  width: "100px",
  height: "100px",
  border: "solid grey",
  borderRadius: "5px",
};

function Grid({ numRows, numCols }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
      className='grid'
    >
      {Array.from({ length: numRows * numCols }, (index) => {
        return <div key={index} style={{ ...gridStyles }}></div>;
      })}
    </div>
  );
}

export default Grid;
