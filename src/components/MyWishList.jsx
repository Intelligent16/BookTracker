import React, {useState} from "react";
import PropTypes from "prop-types";



const MyWishList = (props) => {
    const wishes = props.data;
    const items = wishes.map((item, index) => {
      return (
      <React.Fragment>
        <p>
          {index+1} {item.text}
        </p>
      </React.Fragment>
      );
    })
    return (
      <React.Fragment>
      <h1>Мои пожелания</h1>
      {items}
    </React.Fragment>
    );
  };
  MyWishList.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default MyWishList;
