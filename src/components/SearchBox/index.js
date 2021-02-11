import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Form, SearchField } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function Search({ value }) {
  const [searchValue, setSearchValue] = useState("");

  const search = new URLSearchParams();

  const history = useHistory();

  function handleSearchField() {
    search.set("query", searchValue);

    history.push({
      pathname: "/search",
      search: `?${search.toString()}`,
    });
  }

  return (
    <Form>
      <div>
        <FaSearch color="#fff" />
        <SearchField
          className="form-control"
          value={value}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyPress={({ key }) => key === "Enter" && handleSearchField()}
        ></SearchField>
      </div>
    </Form>
  );
}
