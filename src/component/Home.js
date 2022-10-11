import React from 'react'
import slider from '../Images/slider.jpeg'
import bw from '../Images/bayut.png'
import ke from '../Images/Kaidee.png'
import li from '../Images/Lamudi.webp'
import olx from '../Images/OLX.png'
import Coresal from './Coresal'
const Home = () => {
  return (
    <div>

    <div id="carouselExampleSlidesOnly" className="carousel slide mt-2 mb-1" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block  w-100"  height='300' src={slider} alt="First slide"/>
            </div>
        </div>
    </div>

    <div className='text-center mb-5'>
    <h2 style={{fontWeight:400, fontSize:'40px'}}>
    THE LARGEST CLASSIFIEDS PLAYER IN EMERGING MARKETS
    </h2>
    </div>
    
    <div className='mb-3' style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:20}}>
        <div className='row'>
            <div className='col-sm'>
            <div class="card " style={{width: '18rem', border:'none'}}>
            <div class="card-body">
            <h2 style={{fontSize:40, fontWeight:500}} class="card-title">10</h2>
            <h5 class="card-subtitle mb-2 text-muted">Brands</h5>
            <p style={{fontSize:12}} class="card-text">Our bespoke classifieds portals are some of the strongest brands in our markets, which primarily constitute the MENA, South Asia and Southeast Asia regions. Our flagship ventures are Bayut-Dubizzle in the UAE, Zameen in Pakistan, OLX in Pakistan and Egypt, Lamudi in Indonesia, Philippines and Mexico, Mubawab in North Africa, and Kaidee in Thailand.</p>
            </div>
            </div>
            </div>
            <div class="card" style={{width: '18rem', border:'none'}}>
            <div class="card-body">
            <h2 style={{fontSize:40, fontWeight:500}} class="card-title">217M</h2>
            <h5 class="card-subtitle mb-2 text-muted">Monthly Visits</h5>
            <p style={{fontSize:12}} class="card-text">EMPG’s portals are known for being the go-to classifieds platforms in their markets, which means the amount of traffic they receive is most often second to none. The 217 million monthly visits across our portals are a testament to our users’ trust and a source of unparalleled value to advertisers.</p>
            </div>
            </div>
            <div class="card" style={{width: '18rem', border:'none'}}>
            <div class="card-body">
            <h2 style={{fontSize:40, fontWeight:500}} class="card-title">6,750</h2>
            <h5 class="card-subtitle mb-2 text-muted">Total Employees</h5>
            <p style={{fontSize:12}} class="card-text">With a team of 6,750 people across 16 countries, EMPG is a melting pot of cultures and competencies brought together with the singular aim of creating the best classifieds experience in the world. Our people know how to stay curious, unlock their potential along with that of their teams, and become catalysts for success.</p>
            </div>
        </div>
        </div>

    
</div>
<hr/>
    <div className='container'   style={{ textAlign:'center'}}>
    <h2>OUR BRAND</h2>
    <div className='m-2'>
            <img src={bw} alt="" width={60} height={30} className='mx-3'/>
            <img src={ke} alt="" width={60} height={75} className='mx-3'/>
            <img src={li} alt="" width={60} height={38} className='mx-3'/>
            <img src={li} alt="" width={60} height={38} className='mx-3'/>
            <img src={olx} alt="" width={60} height={25} className='mx-3'/>
            <img src={bw} alt="" width={60} height={30} className='mx-3'/>
            <img src={ke} alt="" width={60} height={75} className='mx-3'/>
            <img src={li} alt="" width={60} height={38} className='mx-3'/>
            <img src={li} alt="" width={60} height={38} className='mx-3'/>
            <img src={olx} alt="" width={60} height={25} className='mx-3'/>
    </div>
    </div>
    
    <div className='container mb-5'>
    <div style={{display:'block'}}>
    <h4 style={{fontSize:14, fontWeight:700}}>IN THE NEWS</h4>
    </div>
    <Coresal/>
    </div>

</div>
  )
}

export default Home
