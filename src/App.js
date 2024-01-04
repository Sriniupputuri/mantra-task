import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
  ]);
  const [searchData, setSearchData] = useState([]);

  const [userDetails, setUserDetails] = useState({});
  const [editData, setEditData] = useState({});

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const [editId, setEditId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();

  const changeHandler = (e, text) => {
    console.log("xfxg");
    setUserDetails((prev) => ({
      ...prev,
      [text]: e.target.value,
    }));
  };

  const submitHandler = () => {
    const sortedData = [...data, userDetails].sort((a, b) => a.name.localeCompare(b.name));

  setData(sortedData);
  setAdd(false);
  setUserDetails({});
  };

  const search = (e) => {
    let dd = data.filter((i) => {
      return i.name.includes(e.target.value);
    });
    setSearchData(dd);
  };

  const deleteHandler = (ind) => {
    data.splice(ind, 1);
    // setData(data.slice(ind,1))
    setData(data);
    setSearchData([]);
  };

  const editHandler = (ind) => {
    console.log("j", data[ind].name);
    setEdit(true);
    setEditId(ind);
    setAge(data[ind].age);
    setName(data[ind].name);
    setPhone(data[ind].phone);
    setEmail(data[ind].email);
    setEditData(data[ind]);
  };

  const editSubmitHandler = () => {
    let dd = [...data];
    let editobj = dd[editId];
  
    if (editobj) {
      editobj.name = name;
      editobj.age = age;
      editobj.email = email;
      editobj.phone = phone;
      dd.sort((a, b) => a.name.localeCompare(b.name));
      setData(dd);
    }
  
  
  
    setEdit(false);
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
  };

  return (
    <div>
      <div className="addcontainer">
        <input type="text" onChange={search} placeholder="search" />
        <button className="addbutton" onClick={() => setAdd(true)}>
          Add
        </button>
      </div>
      {searchData.length > 0 ? (
        <div className="tableContainer">
          <div className="col">
            <div className="header">
              <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
                Age 1- 18
              </p>
            </div>
            {searchData.map((i, ind) => {
              if (i.age > 0 && i.age <= 18) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 19- 25
            </p>
            {searchData.map((i, ind) => {
              if (i.age > 18 && i.age <= 25) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 26- 45
            </p>
            {searchData.map((i, ind) => {
              if (i.age > 25 && i.age <= 45) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 45+
            </p>
            {searchData.map((i, ind) => {
              if (i.age > 45) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className="tableContainer">
          <div className="col">
              <p style={{ borderBottom: "1px solid black", padding: "10px" }}> Age 1- 18</p>
            {data.map((i, ind) => {
              if (i.age > 0 && i.age <= 18) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 19- 25
            </p>
            {data.map((i, ind) => {
              if (i.age > 18 && i.age <= 25) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 26- 45
            </p>
            {data.map((i, ind) => {
              if (i.age > 25 && i.age <= 45) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col">
            <p style={{ borderBottom: "1px solid black", padding: "10px" }}>
              Age 45+
            </p>
            {data.map((i, ind) => {
              if (i.age > 45) {
                return (
                  <div className="card">
                    <div className="buttons">
                      <button
                        className="editButton"
                        onClick={() => editHandler(ind)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteHandler(ind)}>Delete</button>
                    </div>
                    <p>Name: {i.name}</p>
                    <p>Age: {i.age}</p>
                    <p>Email: {i.email}</p>
                    <p>Phone: {i.phone}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {add ? (
        <div>
          <div className="form">
            <input
              type="text"
              name={userDetails?.name}
              placeholder="Enter name"
              onChange={(e) => changeHandler(e, "name")}
            />
            <input
              type="email"
              name={userDetails?.email}
              placeholder="Enter email"
              onChange={(e) => changeHandler(e, "email")}
            />
            <input
              type="number"
              name={userDetails?.phone}
              placeholder="Enter phone"
              onChange={(e) => changeHandler(e, "phone")}
            />
            <input
              type="number"
              name={userDetails?.age}
              placeholder="Enter age"
              onChange={(e) => changeHandler(e, "age")}
            />
          </div>
          <div className="buttonContainer">
            <button
              style={{ marginRight: "10px" }}
              onClick={() => setAdd(false)}
            >
              Cancel
            </button>
            <button className="button" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      ) : null}
      {edit ? (
        <div>
          <div className="form">
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              value={phone}
              placeholder="Enter phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="number"
              value={age}
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            <button onClick={() => setEdit(false)}>Cancel</button>
            <button className="button" onClick={editSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
