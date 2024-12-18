import { ThemeProvider } from '@mui/system';
import { theme } from './lib/theme';
import { Button } from './lib/main';

import './App.css'

function App() {

  return (
      <ThemeProvider theme={theme}>
        <div className="app">
        <Button>hello</Button>
        </div>
      </ThemeProvider>
  )
}

export default App
