import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 120px;
  .series-counter {
    display: flex;
    align-items: flex-end;

    .decrement,
    .increment {
      color: ${({ theme }) => theme.colors.primary};
      background: #f0f0f0a8;
      border: none;
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 4px;
    }

    .count {
      font-size: 2rem;
      width: 40px;
      text-align: center;
    }
  }

  .reset {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    cursor: pointer;
    padding: 4px 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default CounterWrapper;
