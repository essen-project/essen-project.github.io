import Dashboard from './dashboard'
import { Routes, Route } from 'react-router-dom'
import Tasks from './tasks'
import Contacts from './contacts'
import Projects from './projects'
import Desk from './desk'

export default function Home() {
  return (
    <main className=''>
     <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="desk" element={<Desk />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
    </main>
  )
}
