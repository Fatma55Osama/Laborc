import React from 'react'
import video from '../../assets/video-area1-bg.jpg'
import { $blocks, $isplay } from '../../Store'
import logo2 from '../../assets/span1.svg'
import { useRecoilState } from 'recoil'
import './index.scss'
export default function Video() {
    const [isplaying, setIsplaying] = useRecoilState($isplay)
    const [blocks, setBlocks] = useRecoilState($blocks)
    return (
        <div className='div5 col-12  d-flex justify-content-center'>
            <div className='container '>
                <div className=' d-flex flex-column justify-content-center  align-items-center mt-4  gap-lg-5 gap-md-4'>
                    <div className=' mt-3 mt-md-5 mt-lg-5 d-flex align-items-center justify-content-around gap-3'>
                        <img className='logo2' src={logo2} width={40} alt="" />
                        <span className='fs-4 mt-2'>Our Process</span>
                    </div>
                    <h1 className='mb-4 mb-md-5 mb-lg-5 '  data-aos="fade-right"data-aos-offset="10" data-aos-delay="450">How Laborc Works</h1>
                </div>
                <div className='rounded-4 mb-5 position-relative videodiv '>
                    {
                        !isplaying && (
                            <div className='position-absolute h-100 w-100 rounded-4 d-flex justify-content-center align-items-center'>
                                <img src={video} className='h-100 w-100 rounded-3' style={{ objectFit: "cover", backgroundAttachment: "fixed" }} />
                                <button onClick={() => setIsplaying(true)} className='position-absolute d-flex justify-content-center align-items-center'>
                                    <span></span>
                                </button></div>

                        )
                    }
                    <iframe className='col-12 rounded-4' width="800" height="700" poster={video} src="https://www.youtube.com/embed/lgWjziyinKs?si=4zblzhXwVGdjDfch" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='col-12 all_contentdiv  d-flex justify-content-between' >
                    {
                        blocks.map((el, index) => {
                            return (
                                <div key={index} className='col-3 mt-4 pb-4 bg-white px-4 contentdiv d-flex flex-column justify-content-center align-items-center ' data-aos="fade-up"
                                data-aos-offset="10" data-aos-delay={`${index * 350}`} >
                                    <div className='coverimg mt-4 mb-2 d-flex align-items-center justify-content-center' >
                                        <img src={el.img} width={41} alt="" />
                                    </div>
                                    <h4>{el.title}</h4>
                                    <p className='text-center  mt-2'>{el.pargraph}</p>

                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}
