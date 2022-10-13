import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import {
  AppContainer,
  AppContent,
  AppFooter,
  AppHeader,
  Box,
  BoxButton,
  Button,
  Options,
  RepoLink,
} from './styles';

const vHeightOptions = [
  {
    vHeight: '100vh',
    description:
      'The default viewport sized specified by the browser. Could be sv*, lv*, or dv*.',
  },
  {
    vHeight: '100svh',
    description:
      'The small viewport size. This is the size for when the browser interface the expanded (address bar is visible).',
  },
  {
    vHeight: '100lvh',
    description:
      'The large viewport size. This is the size for when the browser interface is retracted (address bar hidden).',
  },
  {
    vHeight: '100dvh',
    description: `The dynamic viewport size. The viewport will automatically resize in response to the
       browser interface expanding or retracting. Content will resize as the user is scrolling,
       impacting performance and user experience.`,
  },
];

const App = () => {
  const [selection, setSelection] = useState(vHeightOptions[0]);
  const [showBox, setShowBox] = useState(false);

  return (
    <AppContainer minHeight={selection.vHeight}>
      <AppHeader>
        Dynamic Viewport Demo
        <RepoLink
          href="https://github.com/jtaavola/dynamic-viewport-demo"
          target="_blank"
        >
          <SiGithub color="black" title="Repo link" />
        </RepoLink>
      </AppHeader>
      <AppContent>
        <p>
          Some browsers have a dyanmic viewport. For example, iOS Safari hides
          the address bar when scrolling, affecting the viewport height.{' '}
          <b>Try this on your phone!</b>
        </p>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport">
          MDN Web Docs: Relative Length Units Based on Viewport
        </a>

        <Options>
          {vHeightOptions.map((option, i) => (
            <Button
              key={i}
              selected={selection.vHeight === option.vHeight}
              onClick={() => {
                setSelection(option);
              }}
            >
              min-height: {option.vHeight}
            </Button>
          ))}

          <BoxButton selected={showBox} onClick={() => setShowBox(!showBox)}>
            Show Box
          </BoxButton>
        </Options>

        {showBox && (
          <Box minHeight={selection.vHeight}>
            <p>{selection.vHeight} box</p>
            <p>{selection.description}</p>
          </Box>
        )}
      </AppContent>
      <AppFooter>Footer</AppFooter>
    </AppContainer>
  );
};

export default App;
