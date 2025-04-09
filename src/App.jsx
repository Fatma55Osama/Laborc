import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutpage from './Aboutpage'
import Errorpage from './Errorpage'
import Contactus from './Contactus'
import Register from './Register'
import Homepage from './Homepage'
import Login from './Login'
import Research from './Research'
import { RecoilRoot, useRecoilValue } from 'recoil'
import Deatailesresearch from './DeatailesResearch'
import { registerLicense } from "@syncfusion/ej2-base";
import FAQ from './FAQ'
import Team from './Team'
import TeamDetails from './TeamDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import MainLayout from './Component/MainLayout'
import { $domain, useData, usepagination } from './Store'
import { getteam } from './Api/GetTeam'
import { getblog } from './Api/GetBlog'
import Servicepage from './Servicepage'
// registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVFzWmFZfVtgdV9CZ1ZRQGY/P1ZhSXxWdkdiUX5ddHNVQmNbWUc=");
export default function App() {
  const domain = useRecoilValue($domain)
  const { dataBlog: allbolog, setDataBlog } = useData();
  const { setTeams } = useData()
  const { currentpage, setTotalPages, blogsperpage ,setblogsperpage} = usepagination()

  useEffect(() => {
    getteam(domain).then((res) => {
      setTeams(res)
    })
    getblog(domain, currentpage, blogsperpage).then((res) => {
      setDataBlog(res.allbolgs)
      console.log(res)
      setTotalPages(res.totalPages || 1)
    }).catch((err) => { console.log(err) })
  }, [domain, currentpage,blogsperpage])
  // useEffect(() => {
  //   getblog(domain, currentpage, blogsperpage).then((res) => {
  //     setDataBlog(res.allbolgs)
  //     console.log(res)
  //     setTotalPages(res.totalPages || 1)
  //   }).catch((err) => { console.log(err) })
  // }, [domain, currentpage])

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path='Contactus' element={<Contactus />}></Route>
            <Route path='research' element={<Research />}></Route>
            <Route path='Deatailesresearch/:id' element={<Deatailesresearch />}></Route>
            <Route path='about' element={<Aboutpage />}></Route>
            <Route path='team' element={<Team />}></Route>
            <Route path='teamdetails/:id' element={<TeamDetails />}></Route>
            <Route path='faq' element={<FAQ />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            <Route path='blogdetalis/:id' element={<BlogDetails />}></Route>
            <Route path='service' element={<Servicepage/>}></Route>
            <Route path='servicedetalis/:id' element={<h1>This is details Service</h1>}></Route>


          </Route>

          <Route path='/'>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='*' element={<Errorpage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  )
}
