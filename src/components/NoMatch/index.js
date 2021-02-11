import React from "react";
import Header from "../Header";
import { HeadingText } from "../Favorites/styles";

export default function NoMatch() {
  return (
    <>
      <Header />
      <HeadingText>Page Not Found</HeadingText>
    </>
  );
}
