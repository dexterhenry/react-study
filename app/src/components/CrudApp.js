import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  { id: 1, name: "Name1", constelation: "Constelation1" },
  { id: 2, name: "Name2", constelation: "Constelation2" },
  { id: 3, name: "Name3", constelation: "Constelation3" },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelet = window.confirm(`Seguro de eliminar a ${id}`);

    if (isDelet) {
      let newData = db.filter((el) => el.id !== id);
      console.log(isDelet);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};

export default CrudApp;
