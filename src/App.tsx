import './App.css'
import Welcome from './Components/Welcome/Welcome'
import { HashRouter as Router, Routes, Route, } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-t-4 border-b-4 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin">
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {isAuthenticated ? (
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
          </Routes>
        </Router>) : (<Welcome />)
      }

    </>
  )
}

export default App
