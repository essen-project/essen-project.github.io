import './App.css'
import { ThemeProvider } from './components/providers/theme-provider'
import { TailwindIndicator } from './components/tailwind-indicator'
import DashboardPage from './dashboard'
/* import Home from './home' */

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TailwindIndicator />
        <DashboardPage />
      </ThemeProvider>
    </>
  )
}

export default App
