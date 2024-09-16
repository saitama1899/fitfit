import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};
  width: 120px;
  .timer-display {
    font-size: 2rem;
    /* width: 50%; */
    cursor: pointer;  
    transition: transform 0.1s ease-in-out;
    &.active {
      transform: scale(1.2);
    }
  }
`;

export default TimerWrapper;
