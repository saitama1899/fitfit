import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 120px;
  .series-counter {
    display: flex;
    border: 1px solid #a4a4a4;
    border-radius: 30px;
    width: 80%;
    height: 43px;

    .decrement,
    .increment {
      color: ${({ theme }) => theme.colors.primary};
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      width: 33%;
      padding: 0;
    }
    .decrement {
      border-right: 1px solid #a4a4a4;
      border-left: 1px solid #a4a4a4;
    }

    .count {
      font-size: 2rem;
      text-align: center;
      width: 33%;
    }
  }

  /* .reset {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    cursor: pointer;
    padding: 4px 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  } */
`;

export default CounterWrapper;
