import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutpage from './Aboutpage'
import Errorpage from './Errorpage'
import Contactus from './Contactus'
import Register from './Register'
import Homepage from './Homepage'
import Login from './Login'
import Research from './Research'
import { RecoilRoot } from 'recoil'
import Deatailesresearch from './DeatailesResearch'
import { registerLicense } from "@syncfusion/ej2-base";
import FAQ from './FAQ'
import Team from './Team'
import TeamDetails from './TeamDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
// registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVFzWmFZfVtgdV9CZ1ZRQGY/P1ZhSXxWdkdiUX5ddHNVQmNbWUc=");
export default function App() {
  return (
       <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
             <Route index element={<Homepage/>}></Route>
             <Route path='login' element={<Login/>}></Route>
             <Route path='register' element={<Register/>}></Route>
             <Route path='Contactus' element={<Contactus/>}></Route>
             <Route path='research' element={<Research/>}></Route>
             <Route path='Deatailesresearch/:id' element={<Deatailesresearch/>}></Route>
             <Route path='about' element={<Aboutpage/>}></Route>
             <Route path='team' element={<Team/>}></Route>
             <Route path='teamdetails/:id' element={<TeamDetails/>}></Route>
             <Route path='faq' element={<FAQ/>}></Route>
             <Route path='blog' element={<Blog/>}></Route>
             <Route path='blogdetalis/:id' element={<BlogDetails/>}></Route>
             <Route path='*' element={<Errorpage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  )
}
