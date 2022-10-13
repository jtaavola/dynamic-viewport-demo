import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: ${(props) => props.minHeight};
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  padding: 1em;
  color: white;
`;

export const AppFooter = styled.footer`
  background-color: green;
  font-size: calc(10px + 2vmin);
  padding: 1em;
  color: white;
`;

export const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Options = styled(Centered)`
  margin-top: 1em;
`;

export const Button = styled(Centered)`
  border: thin solid black;
  border-radius: 5px;
  margin: 0.25em;
  background-color: ${(props) => (props.selected ? 'lightgreen' : 'white')};
  padding: 1em;
  width: 20em;
  height: 2em;
  font-family: monospace;
  &:hover {
    scale: 1.05;
  }
`;

export const BoxButton = styled(Button)`
  margin-top: 1.5em;
  width: 10em;
`;

export const Box = styled(Centered)`
  background-color: lightblue;
  min-height: ${(props) => props.minHeight};
`;

export const RepoLink = styled.a`
  position: absolute;
  top: 1.25rem;
  right: 0.5rem;
`;
