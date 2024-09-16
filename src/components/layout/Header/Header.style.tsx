import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  a {
    color: white;
    text-decoration: none;
  }
  .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 54px;
      height: 54px;
    }

    .logo-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease-in-out;
    }

  .entering {
    animation: scaleUp .4s forwards;
  }

  .exiting {
    animation: scaleDown .3s forwards;
  }
  .floor {
    background-color: ${({ theme }) => theme.colors.dark};
    width: 42px;
    height: 2px;
    margin: 0 auto;
    border-radius: 30%;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(0.95);
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
      
`;

export { HeaderWrapper };
