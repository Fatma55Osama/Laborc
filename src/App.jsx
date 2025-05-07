import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Aboutpage from './Aboutpage'
import Errorpage from './Errorpage'
import Contactus from './Contactus'
import Register from './Register'
import Homepage from './Homepage'
import Login from './Login'
import Research from './Research'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { registerLicense } from "@syncfusion/ej2-base";
import FAQ from './FAQ'
import Team from './Team'
import TeamDetails from './TeamDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import MainLayout from './Component/MainLayout'
import { $domain, useData, useLoading, usepagination, useResearch } from './Store'
import { getteam } from './Api/GetTeam'
import { getblog } from './Api/GetBlog'
import Servicepage from './Servicepage'
import Registeruser from './Registeruser'
import Loginuser from './Loginuser'
import DetailsResearch from './DetailsResearch'
import { getcategory } from './Api/GetCategory'
import { indexservice } from './Api/indexservice'
import Loader from './Component/Loader'
import DeatailsService from './DeatailsService'
import Dashboard from './DashboardAdmin/Dashboard'
import Editbooking from './DashboardAdmin/Editbooking'
import MainLayoutDash from './Component/MainLayoutDash'
import Rebooking from './DashboardAdmin/Rebooking'
import Profile from './DashboardAdmin/Profile'
// registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVFzWmFZfVtgdV9CZ1ZRQGY/P1ZhSXxWdkdiUX5ddHNVQmNbWUc=");
export default function App() {
  const domain = useRecoilValue($domain)
  const { dataBlog: allbolog, setDataBlog, setService } = useData();
  const { setTeams } = useData()
  const { currentpage, setTotalPages, blogsperpage, setblogsperpage } = usepagination()
  const { setresearch } = useResearch()
  const { loaderindex, setLoderindex } = useLoading()
  const location = useLocation();
  useEffect(() => {
    setLoderindex(true);
    const timer = setTimeout(() => {
      setLoderindex(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  useEffect(() => {
    getteam(domain).then((res) => {
      setTeams(res)
    })
    getblog(domain, currentpage, blogsperpage).then((res) => {
      setDataBlog(res.allbolgs)
      console.log(res)
      setTotalPages(res.totalPages || 1)
    }).catch((err) => { console.log(err) })

    getcategory(domain).then((res) => {
      console.log("this is category research", res)
      setresearch(res)
    }).catch((err) => {
      console.log(err)
    })

  }, [domain, currentpage, blogsperpage])
  useEffect(() => {
    indexservice(domain).then((res) => {
      console.log("this is service", res)
      setService(res)
    })
  }, [])
  

  // useEffect(() => {
  //   getblog(domain, currentpage, blogsperpage).then((res) => {
  //     setDataBlog(res.allbolgs)
  //     console.log(res)
  //     setTotalPages(res.totalPages || 1)
  //   }).catch((err) => { console.log(err) })
  // }, [domain, currentpage])

  return (

    <div className='App'>

      <Routes>
       
        
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Homepage />}></Route>
                <Route path='Contactus' element={<Contactus />}></Route>
                <Route path='research' element={<Research />}></Route>
                <Route path='Deatailesresearch/:id' element={<DetailsResearch />}></Route>
                <Route path='about' element={<Aboutpage />}></Route>
                <Route path='team' element={<Team />}></Route>
                <Route path='teamdetails/:id' element={<TeamDetails />}></Route>
                <Route path='faq' element={<FAQ />}></Route>
                <Route path='blog' element={<Blog />}></Route>
                <Route path='blogdetalis/:id' element={<BlogDetails />}></Route>
                <Route path='service' element={<Servicepage />}></Route>
                <Route path='servicedetalis/:id' element={<DeatailsService />}></Route>

              </Route>
      
        <Route path='/'>
          <Route path='loginAdmin' element={<Login />}></Route>
          <Route path='registerAdmin' element={<Register />}></Route>
          <Route path='loginuser' element={<Loginuser />}></Route>
          <Route path='registeruser' element={<Registeruser />}></Route>
          {/* <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/Dashboard/edit/:taskId' element={<Editbooking/>}/> */}
          <Route path='*' element={<Errorpage />}></Route>
        </Route>

        <Route path='/Dashboard' element={<MainLayoutDash />}>
          <Route index element={<Dashboard />} />
          <Route path='/Dashboard/rebooking' element={<Rebooking />} />
          <Route path='/Dashboard/rebooking/edit/:taskId' element={<Editbooking />} />
          <Route path="/Dashboard/Profile" element={<Profile />} />


        </Route>
      </Routes>

    </div>



  )
}
