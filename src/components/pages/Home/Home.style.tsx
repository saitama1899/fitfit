import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 36px 14px;
  }
  .routine {
    height: 120px;
    padding: 25px;
    background-color: #c7d0cd;
    background-image: 
      linear-gradient(20deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent), linear-gradient(20deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    border: 3px solid #42414f;
    border-top: 0px;
    border-left: 0px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .options {
    display: flex;
    justify-content: space-around;
    p {
      margin-top: 8px;
      background: ${(props) => props.theme.colors.primary};
      color: white;
      padding: 1px 12px;
    }
    .exercises {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: rotateZ(-10deg);
      img {
        width: 75px;
        transform: rotateZ(20deg);
        filter: drop-shadow(4px 2px 0px rgba(0, 0, 0, 0.10));
      }
    }
    .create {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: rotateZ(10deg);
      img {
        width: 90px;
        transform: rotateZ(20deg);
        filter: drop-shadow(4px 2px 0px rgba(0, 0, 0, 0.10));
      }
    }
  }
`;
