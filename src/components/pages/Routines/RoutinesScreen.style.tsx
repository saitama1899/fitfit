import styled from "styled-components";

const RoutinesScreenWrapper = styled.div`
  padding: 48px;
  h1 {
      font-size: 50px;
      font-weight: 400;
      text-shadow: 3px 3px 0px ${(props) => props.theme.colors.secondary};
  }
`;

export { RoutinesScreenWrapper };
