import "./Loader.css";

function Loader(props) {
  return (
    <>
      {props.loader && (
        <div className="box-center">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </>
  );
}

export default Loader;