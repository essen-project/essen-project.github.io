import Dashboard from './dashboard'
import { Routes, Route } from 'react-router-dom'
import Tasks from './tasks'

export default function Home() {
  return (
    <main className='xl:mx-36 2xl:mx-56'>
     <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
          </Routes>
    </main>
  )
}
