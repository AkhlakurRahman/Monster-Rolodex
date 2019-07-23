import React from 'react';

import classes from './SearchBox.module.css';

const SearchBox = props => {
  return (
    <div>
      <input
        className={classes.SearchBox}
        type="search"
        placeholder="Search Monster"
        onChange={props.onSearchFieldChange}
      />
    </div>
  );
};

export default SearchBox;
