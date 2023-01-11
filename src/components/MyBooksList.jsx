import React, {useState} from "react";
import PropTypes from "prop-types";


const MyBooksList = (props) => {
    const books = props.data;
    const items = books.map((item, index) => {
      return (
        <React.Fragment>
          <p>
            {index+1} {item.name}
          </p>
        </React.Fragment>
      );
    })
    return (
      <React.Fragment>
        <h1>Мои книги</h1>
        {items}
      </React.Fragment>
    );
  };

  MyBooksList.propTypes = {
    data: PropTypes.array.isRequired, 
  };

export default MyBooksList;