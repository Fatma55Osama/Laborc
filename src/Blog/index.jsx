import React, { useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import { Card } from 'react-bootstrap'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRecoilValue } from 'recoil'
import { $domain, useData, usepagination } from '../Store'
export default function Blog() {
  const domain = useRecoilValue($domain)
  const { dataBlog: allbolog, setDataBlog } = useData();
  // const [allbolog, setAllblog] = useState([])
  // const [currentpage, setCurrentpage] = useState(1)
  // const [totalPages, setTotalPages] = useState(1);
  const { currentpage, setCurrentpage, totalPages ,blogsperpage,setblogsperpage} = usepagination()
  // const blogsperpage = 3;
  // useEffect(() => {
  //   getblog(domain, currentpage, blogsperpage).then((res) => {
  //     setDataBlog(res.allbolgs)
  //     console.log(res)
  //     setTotalPages(res.totalPages || 1)
  //   }).catch((err) => { console.log(err) })

  // }, [domain, currentpage])
  useEffect(() => {
      setblogsperpage(3);
  }, [setblogsperpage, blogsperpage])
  const handlechange = (event, value) => {
    setCurrentpage(value)
  }
  return (
    <div className={styles.blogall + " col-12"}>

      <div className=' col-12 ' id={styles.backgimg}>
        <div className='col-12 h-100 d-flex flex-column' style={{ position: "absolute" }}>
          <div className='container   d-flex flex-column justify-content-center  flex-grow-1' id={styles.textbloge}>
            <h4>Our Blog</h4>
            <div className='d-flex flex-row align-items-center gap-1'>
              <Link className={styles.linkfont + ' nav-link'} to={"/"}>Home</Link><FaAngleRight />
              <Link className={styles.linkfont + ' nav-link'} to={"/blog"}>Blog</Link>
            </div>
          </div>
        </div>

      </div>

      <div className='col-12' id={styles.blogcategorydiv}>
        <div className='container col-12 d-flex flex-wrap justify-content-center align-items-center justify-content-between '>
          {
            allbolog.map((el, index) => (
              <div key={el.documentId} className={styles.divcard + ' d-flex  mb-5  '}>
                <Card style={{ width: '26rem', borderRadius: "6px" }} className='shadow border-0'>
                  <Card.Img variant="top" height={245} style={{ padding: "10px", objectFit: "cover" }} className='rounded-4 position-relative  ' src={domain + el.img_card.url} />
                  <div className={styles.circledesign + " position-absolute d-flex flex-column justify-content-center align-items-center text-center text-white"}> <span>{el.day}</span>{el.month}</div>
                  <Card.Body className='d-flex flex-column gap-2 mt-2 px-4 py-4'>
                    <h5>{el.title1}</h5>
                    <Card.Title className={styles.title}><Link to={`/blogdetalis/${el.documentId}`} className='nav-link'>{el.title2}</Link></Card.Title>
                    <Card.Text className={styles.cardtext}>
                      {el.text_prag}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
          <div className='col-12 d-flex justify-content-center align-items-center '>
            <Stack spacing={2}>
              <Pagination onChange={handlechange} page={currentpage} count={totalPages} siblingCount={1} boundaryCount={1} hidePrevButton hideNextButton sx={{
                '& .MuiPaginationItem-root': {
                  fontSize: '1.3rem',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: ' #08349e',
                  color: 'white',
                  fontWeight: 'bold',
                },
              }} />
            </Stack>
          </div>

        </div>

      </div>



    </div>
  )
}
