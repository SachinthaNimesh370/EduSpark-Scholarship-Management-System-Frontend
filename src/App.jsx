import { useState } from 'react'
import RegisterPage from './pages/auth/RegisterPage'
import SignInPage from './pages/auth/SignInPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
      {/* <RegisterPage/> */}
      {/* <SignInPage/> */}



      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          {/* You can add more routes for other pages */}
        </Routes>
    </Router>
    </>
  )
}

export default App
