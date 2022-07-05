import arrowDown from "../../images/arrow-down.svg";
import arrowUp from "../../images/arrow-up.svg";
import "./Table.css";

function Table(props) {
  const arrow = props.order === "asc" ? arrowDown : arrowUp;

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("id");
            }}
            style={{ cursor: "pointer" }}
          >
            ID
            {props.column === "id" ? (
              <img src={arrow} className="icon-arrow" />
            ) : (
              ""
            )}
          </th>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("firstName");
            }}
            style={{ cursor: "pointer" }}
          >
            First Name
            {props.column === "firstName" ? (
              <img src={arrow} className="icon-arrow" />
            ) : (
              ""
            )}
          </th>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("lastName");
            }}
            style={{ cursor: "pointer" }}
          >
            Last Name
            {props.column === "lastName" ? (
              <img src={arrow} className="icon-arrow" />
            ) : (
              ""
            )}
          </th>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("email");
            }}
            style={{ cursor: "pointer" }}
          >
            Email
            {props.column === "email" ? (
              <img src={arrow} className="icon-arrow" />
            ) : (
              ""
            )}
          </th>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("phone");
            }}
            style={{ cursor: "pointer" }}
          >
            Phone
            {props.column === "phone" ? (
              <img src={arrow} className="icon-arrow" />
            ) : (
              ""
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map((item) => (
            <tr key={item.id + item.phone}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
