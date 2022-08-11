import React from "react";

const SearchBox = ({Search}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue br2"
        type='search' 
        onChange={Search}
        placeholder="search robots">
      </input>
    </div>
  );

}

export default SearchBox;