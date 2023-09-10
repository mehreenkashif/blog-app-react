import React from 'react'
import { Route, Routes } from "react-router-dom";
import CustomLayout from './CustomLayout/CustomLayout';
// import Categaries from './Container/Categaries/Categaries';
import Users from './Container/Users/Users';
import Login from './Container/Login/Login';
import Register from './Container/Register/Register';
import Posts from './Container/Posts/Posts';
import Categaries from './Container/Categories/Categaries';



function App() {
  return (
    <>
    <Routes>

                {/* AUTHENTICATED ROUTES  */}
                
      <Route path='/' element={<CustomLayout></CustomLayout>}>
          <Route path='/' element={<Categaries></Categaries>}/>
          <Route path='/users' element={<Users></Users>}/>
          <Route path='/posts' element ={<Posts></Posts>}/>
      </Route>

               {/* UN AUTHENTICATED ROUTES */}

       <Route path='/login' element={<Login></Login>}/>
       <Route path='/register' element={<Register></Register>}/>
      
    </Routes>
    </>
  )
}

export default App