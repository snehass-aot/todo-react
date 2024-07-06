import React, { useState } from "react";
import Input from "../../../Shared/input";
import SearchIcon from "./search.svg";
import Sort from "./sort";

function Search({ setSearchValue, setSearchValueArray, todos }) {
  const [searchValue, setSearchValueState] = useState("");

  const handleSearchChange = (value) => {
    setSearchValueState(value);
    setSearchValue(value); // Update the search value in parent component
  };

  return (
    <div className="search">
      <Input
        inputClass="inputField"
        inputText="Search by task name"
        value={searchValue}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Search"
        className="sr-img"
        onClick={() => handleSearchChange(searchValue)}
        style={{ cursor: "pointer" }}
      />
      <Sort setSearchValueArray={setSearchValueArray} todos={todos} />
    </div>
  );
}

export default Search;
