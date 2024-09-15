import styled from "styled-components";

const RoutinesScreenWrapper = styled.div`
  padding: 48px;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 36px 14px;
  }
  h1 {
    font-size: 70px;
    text-align: center;
    font-weight: 400;
    text-shadow: 3px 3px 0px ${(props) => props.theme.colors.secondary};
    margin-bottom: 20px;
  }

  .routines {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 250px);
    overflow-y: auto;

    .routine {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 10px 30px;
      height: 80px;
      position: relative;
      background-color: rgba(21, 193, 147, 0.25);
      color: #000000;
      background-size: cover; 
      background-position: center; 
      background-repeat: no-repeat;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(235 244 240 / 94%);
        z-index: 1;
      }

      h2, p {
        position: relative;
        z-index: 2;
        margin: 0;
      }

      h2 {
        font-size: 40px;
      }

      p {
        font-weight: 500;
        font-size: 20px;
      }
    }
  }
`;

export { RoutinesScreenWrapper };
