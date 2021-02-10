import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { SearchField } from "./styles";

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
    <div>
      <SearchField
        className="form-control"
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={({ key }) => key === "Enter" && handleSearchField()}
        placeholder="Type to search..."
      ></SearchField>
    </div>
  );
}
