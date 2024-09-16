import styled from "styled-components";

const RoutinesScreenWrapper = styled.div`
  width: 100%;
  h1 {
    font-size: 70px;
    text-align: center;
    font-weight: 400;
    text-shadow: 3px 3px 0px ${(props) => props.theme.colors.secondary};
    margin-bottom: 35px;
    line-height: .75;
  }

  .routines {
    display: flex;
    flex-direction: column;
    gap: 20px;

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
        background: rgb(207 217 223 / 95%);
        z-index: 1;
      }
      
      p {
        z-index: 2;
        font-weight: 500;
        font-size: 20px;
      }
    }
  }
`;

export { RoutinesScreenWrapper };
