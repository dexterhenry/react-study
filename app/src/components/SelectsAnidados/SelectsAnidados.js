import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Select anidados</h2>
      <SelectList
        tite="estados"
        url=""
        handleCange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          tite="municipios"
          url=""
          handleCange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          tite="colonias"
          url=""
          handleCange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} -{suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
