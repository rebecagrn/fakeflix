import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";
import avatar from "../../assets/avatar.png";
import { FaCaretDown } from "react-icons/fa";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  return (
    <HeaderStyle>
      <nav className={scroll ? "bg-black" : "bg-transparent"}>
        <div>
          <Link to="/" className="logo">
            FAKEFLIX
          </Link>
        </div>
        <div className="avatar">
          <Link to="/">
            <img className="avatar--img" src={avatar} alt="avatar" />
          </Link>
          <span>
            <FaCaretDown color="#fff" />
          </span>
        </div>
      </nav>
    </HeaderStyle>
  );
}
