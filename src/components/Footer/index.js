import React from "react";
import { FaHeart, FaGithubAlt } from "react-icons/fa";
import { FooterStyle } from "./styles";

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        Made with <FaHeart color="red" size={13} /> by{" "}
        <a
          href="https://rebecadeveloper.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Rebeca
        </a>
        | <FaGithubAlt />{" "}
        <a href="https://github.com/rebecagrn" target="_blank" rel="noreferrer">
          /rebecagrn
        </a>
      </p>
    </FooterStyle>
  );
}
