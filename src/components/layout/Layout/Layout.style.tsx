import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 24px 14px;
  }
`;

const MainContent = styled.main<{ hide: boolean }>`  
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: ${({ hide, theme }) => (hide ? "0" : `${theme.layout.header_height}px`)};
  height: calc(100vh - ${({ theme }) => `${theme.layout.header_height}px`});
  overflow: hidden;
`;

export { LayoutWrapper, MainContent };
