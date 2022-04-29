import React from "react";

const Book = ({ img, title, author }) => {
  return (
    <section>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </section>
  );
};

export default Book;
