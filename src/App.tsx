import './App.css'
import { ThemeProvider } from './components/providers/theme-provider'
import { TailwindIndicator } from './components/tailwind-indicator'
import Dashboard from './dashboard'
/* import Home from './home' */

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TailwindIndicator />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
