// @ts-nocheck
import { createTheme, ThemeProvider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{
          maxHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Navbar />
        <Stack direction='row' spacing='2' justifyContent='center'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
