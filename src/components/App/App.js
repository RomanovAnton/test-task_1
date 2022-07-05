import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../blocks/index.css";
import Table from "../Table/Table";
import Loader from "../Loader/Loader";
import DataSize from "../DataSize/DataSize";

function App() {
  const [data, setData] = useState(null);
  const [order, setOrder] = useState("des");
  const [column, setColumn] = useState(null);
  const [loader, setLoader] = useState(false);
  const [dataSizeSelect, setDataSizeSelect] = useState(true);

  function dataRequest(url) {
    return fetch(url).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }

  function handleDataChoose(url) {
    setLoader(true);
    setDataSizeSelect(false);
    dataRequest(url).then((res) => {
      setData(res);
      setLoader(false);
    });
  }

  function handleSort(column) {
    setColumn(column);
    if (order === "des") {
      const sortedArr = [...data].sort((a, b) => {
        if (column === "id") {
          return a[column] < b[column] ? -1 : 1;
        } else {
          return a[column].toLowerCase() < b[column].toLowerCase() ? -1 : 1;
        }
      });
      setData(sortedArr);
      setOrder("asc");
    }

    if (order === "asc") {
      const sortedArr = [...data].sort((a, b) => {
        if (column === "id") {
          return a[column] > b[column] ? -1 : 1;
        } else {
          return a[column].toLowerCase() > b[column].toLowerCase() ? -1 : 1;
        }
      });
      setData(sortedArr);
      setOrder("des");
    }
  }

  return (
    <div className="container">
      {dataSizeSelect && <DataSize handleBtnClick={handleDataChoose} />}

      {data ? (
        <Table
          data={data}
          handleSort={handleSort}
          column={column}
          order={order}
        />
      ) : (
        <Loader loader={loader} />
      )}
    </div>
  );
}

export default App;
