import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constelation, id } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constelation}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Editar </button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
