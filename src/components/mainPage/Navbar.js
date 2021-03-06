import React, { useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";
import { Link as LinkToRoute } from "react-router-dom";

export default function Navbar() {
  const [dropdownStatus, setDropdownStatus] = useState("none");

  const changeDropdown = () => {
    if (dropdownStatus === "none") {
      setDropdownStatus("flex");
    } else {
      setDropdownStatus("none");
    }
  };

  return (
    <>
      <Nav>
        <LinkToRoute className="link" to="/">
          <h1>
            <img src="./whiteee.png"></img>
            Fun Study
          </h1>
        </LinkToRoute>
        <FlexBox dropdownStatus={dropdownStatus}>
          <Img onClick={changeDropdown} src="./dropdown.png"></Img>
          <Link className="link" to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link
            className="link"
            to="learning_site"
            smooth={true}
            duration={1000}
          >
            Learning site
          </Link>
          <Link className="link" to="memory" smooth={true} duration={1000}>
            Memory game
          </Link>
          <Link className="link" to="login" smooth={true} duration={1000}>
            Login
          </Link>
          <Link className="link" to="registration" smooth={true} duration={1000}>
            Registration
          </Link>
          <LinkToRoute className="link" to="/players">
            Players
          </LinkToRoute>
        </FlexBox>
      </Nav>
      <ArrowToTop onClick={() => scroll.scrollToTop()}>↑</ArrowToTop>
    </>
  );
}

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #313648;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  .link {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    img {
      height: 40px;
      margin-right: 12px;
    }
    &:hover {
      background-color: white;
      color: #313648;
    }
  }
  h1 {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    .link {
      position: relative;
      display: ${(props) => props.dropdownStatus};
      margin: 5px;
      padding: 10px;
    }
  }
  .link:hover {
    background-color: white;
    color: #313648;
  }
`;

const Img = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    width: 50px;
    position: absolute;
    top: -50px;
    right: 40px;
    cursor: pointer;
    &:hover {
      background-color: #111628;
      border-radius: 10px;
    }
  }
`;

const ArrowToTop = styled.button`
  z-index:1;
  position: fixed;
  bottom: 8%;
  right: 5%;
  width: 40px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
`;
