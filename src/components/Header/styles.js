import styled from "styled-components";

export const HeaderStyle = styled.header`
  nav {
    position: fixed;
    z-index: 99;
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

  .nav--list {
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

  @media (max-width: 768px) {
    nav {
      padding: 0 25px;
    }

    .logo {
      font-size: 22px;
    }

    .avatar--img,
    span {
      display: none;
    }

    li {
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavLink = styled.li`
  margin-right: 18px;

  a {
    color: #fff;
    font-weight: 700;

    &:hover {
      color: #e5e5e5;
    }
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    a {
      font-size: 13px;
    }
  }
`;
