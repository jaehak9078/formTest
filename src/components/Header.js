import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const NavBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 70px;
  `;
  const NavCon = styled.div`
    border: 1px solid gray;
    background-color: skyblue;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div>
      <NavBox>
        <NavCon>
          <Link to="/">영화등록</Link>
        </NavCon>
        <NavCon>
          <Link to="/list">영화목록</Link>
        </NavCon>
      </NavBox>
    </div>
  );
};

export default Header;
