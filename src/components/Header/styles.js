import styled from "styled-components";

export const HeaderStyle = styled.header`
  nav {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    height: 68px;
    align-items: center;
  }

  .bg-black {
    background-color: #111;
    transition: background-color 0.4s;
  }

  .bg-transparent {
    background-color: transparent;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 10%,
      rgba(0, 0, 0, 0)
    );
    transition: background-color 0.4s;
  }

  .logo {
    font-family: "Anton", sans-serif;
    color: #e50914;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .avatar {
    height: 32px;
    display: flex;
    align-items: center;

    .avatar--img {
      height: 100%;
      border-radius: 4px;
      width: 32px;
      margin-right: 5px;
    }
  }
`;
