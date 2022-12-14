import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import "./cell-list.css";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  // the following actions are not applicable in the web version
  // const { fetchCells, saveCells } = useActions();
  // useEffect(() => {
  //   fetchCells(cells);
  // }, []);

  // useEffect(() => {
  //   saveCells();
  // }, [JSON.stringify(cells)]);

  const renderedCells = cells.map((cell) => (
    <React.Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </React.Fragment>
  ));

  return (
    <div className="cell-list">
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
