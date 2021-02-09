import styled from "styled-components";

export const Featured = styled.section`
  height: 90vh;
  background-size: "cover";
  background-position: "center";

  .featured--overlay-y {
    width: inherit;
    height: inherit;
    background: linear-gradient(
      to top,
      rgba(17, 17, 17, 0.9) 10%,
      transparent 90%
    );
  }

  .featured--overlay-x {
    width: inherit;
    height: inherit;
    background: linear-gradient(
      to right,
      rgba(17, 17, 17, 0.8) 30%,
      transparent 70%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    padding-bottom: 150px;
  }
`;

export const FeaturedTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  max-width: 35%;
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 15px;

  .featured--row {
    display: flex;
  }

  .item--points {
    color: #46d369;
  }

  .item--points,
  .item--year {
    margin-right: 15px;
  }

  .item--description {
    margin-top: 15px;
    color: #fff;
    max-width: 35%;
    font-weight: 400;
    line-height: normal;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

    @media screen and (max-width: 500px) {
      max-width: 85%;
      font-size: 4vw;
    }
  }

  .item--genres {
    font-weight: 400;
  }
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;

  .btn-watch,
  .btn-mylist {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 25px;
    border-radius: 4px;
    margin-right: 1rem;
    margin-bottom: 1rem;

    svg {
      margin-right: 5px;
    }
  }

  .btn-watch {
    background-color: #fff;
    color: #000;
    transition: all ease 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }

  .btn-mylist {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    transition: all ease 0.2s;

    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
`;
