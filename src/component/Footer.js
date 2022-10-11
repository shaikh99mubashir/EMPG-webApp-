import React from 'react'
import bw from '../Images/bayut.png'
import ke from '../Images/Kaidee.png'
import li from '../Images/Lamudi.webp'
import olx from '../Images/OLX.png'

const Footer = () => {
  return (
    <div className='container-fluid px-5' style={{backgroundColor:'#35383c', display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center'}}>
        <div className='container m-2'>
        <img src={bw} alt="" width={70} height={30} className='mx-3'/>
            <img src={ke} alt="" width={70} height={75} className='mx-3'/>
            <img src={li} alt="" width={70} height={38} className='mx-3'/>
            <img src={li} alt="" width={70} height={38} className='mx-3'/>
            <img src={olx} alt="" width={70} height={25} className='mx-3'/>
            <img src={bw} alt="" width={70} height={30} className='mx-3'/>
            <img src={ke} alt="" width={70} height={75} className='mx-3'/>
            <img src={li} alt="" width={70} height={38} className='mx-3'/>
            <img src={li} alt="" width={70} height={38} className='mx-3'/>
            <img src={olx} alt="" width={70} height={25} className='mx-3'/>
        </div>
  
    </div>
  )
}

export default Footer