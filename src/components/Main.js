import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
const Main = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
  });

  //1. 전개 연산자
  //2. Computed property names

  const inputHandle = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  };

  const submit = (e) => {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화 등록이 완료되었습니다");
        } else {
          alert("영화 등록이 실패되었습니다");
        }
      });
  };
  const resetButton = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          value={movie.title}
          name="title"
          placeholder="title을 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          value={movie.rating}
          name="rating"
          placeholder="평점을 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          value={movie.medium_cover_image}
          name="medium_cover_image"
          placeholder="이미지 주소를 입력하세요"
        />
        <br />
        <button onClick={submit}>전송</button>
        <button onClick={resetButton}>리셋</button>
      </form>
    </div>
  );
};

export default Main;
