import { Button } from "react-bootstrap";
import "./DataSize.css";
function DataSize(props) {
  const urlSmall =
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  const urlBig =
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  return (
    <div className="box-center btn-box">
      <Button
        variant="outline-primary"
        onClick={() => {
          props.handleBtnClick(urlSmall);
        }}
      >
        32 строки
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => {
          props.handleBtnClick(urlBig);
        }}
      >
        1000 строк
      </Button>
    </div>
  );
}

export default DataSize;

