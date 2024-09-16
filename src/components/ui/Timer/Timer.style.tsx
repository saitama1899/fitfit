import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.dark};
  width: 120px;
  .timer-display {
    font-size: 2rem;
    /* width: 50%; */
  }
  .timer-controls {
    /* width: 50%; */
    .reset {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.75rem;
      background-color: #f0f0f0a8;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
`;

export default TimerWrapper;
