import { func } from "prop-types";
import React, {useState} from "react";
import PropTypes from "prop-types";
import MyBooksList from "./../components/MyBooksList.jsx";
import MyWishList from "./../components/MyWishList.jsx";

const books = {
  booksList: [
    { id: 1, name: "1984", pages: 0, progress: 0, status: false },
    { id: 2, name: "Скотный двор", pages: 0, progress: 0, status: false },
    { id: 3, name: "Свадебная ваза", pages: 0, progress: 0, status: false },
    { id: 4, name: "Гачимучи над пропастью во ржи", pages: 0, progress: 0, status: false },
    { id: 5, name: "Зеленый слоник", pages: 0, progress: 0, status: false },
  ],
};
const wish = {
  wishList: [
    { id: 1, text: "Конституция", pages: 0, status: true },
  ],
};

const BookTrackerPage = () => {
  let [isShowMyBooks, setIsShowMyBooks] = useState(true);
  const toggleMyBooks = (event) => {
    setIsShowMyBooks(!isShowMyBooks);
    console.log(isShowMyBooks);
  }
  let [isShowMyWishes, setIsShowMyWishes] = useState(true);
  const toggleMyWishes = (event) => {
    setIsShowMyWishes(!isShowMyWishes);
    console.log(isShowMyWishes);
  }
  return (
  <React.Fragment>
        <h1>Book tracker (v 0.0.2)</h1>
        <div>
            <div class="ability">
                <button onClick={toggleMyBooks}>Мои книги</button>
            </div>
            <div class="myWish">
                <button  onClick={toggleMyWishes}>Мои пожелания</button>
            </div>
        </div>
        
        <div class="addForm"></div>

          <h3>Добавить новую книженцию</h3>
          <div class="addName">Название</div>
          <input id="newBookName" type="text"/>
          <div class="addPages">Количестов страниц</div>
          <input id="newBookPages" type="text"/>
          <div class="addDate">Дата достижения цели</div>
          <input id="newBookDate" type="text"/>
          <button id="addTodoBtn">Добавить</button>
          {isShowMyBooks && <MyBooksList  data={books.booksList}/>}
          {isShowMyWishes && <MyWishList  data={wish.wishList}/>}
      </React.Fragment>);
}; 

export default BookTrackerPage;

// показать букслист:
// перебрать букслист
// каждый айтем
// иннер или Реакт?
