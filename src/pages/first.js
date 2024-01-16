import HomeNav from '@/(components)/Navbar'
import React from 'react'
import sideImage from '../Images/image2.png'
import Image from 'next/image'

function First() {
  return (
    <div className="min-vh-100 bg-black">
      <div>
        <HomeNav />
      </div>
      <div className='container'>
        <div className='row m-0'>
          <div className='col-lg-7 row m-0 p-0'>
            <div className='p-4'>
              <div className='idea m-3 '>
                <span className='s1'>Transforming Ideas Into </span> <span className='s2'>Powerful Solution</span>
              </div>
              <div className='b1 mx-3 m-1'>FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</div>
              <div className="consultancy mt-3">
                <form className="input-group">
                  <button className='btn btn-warning border-white' type="submit"><i className="bi bi-telephone text-white"></i></button>
                  <input type="text" placeholder="Get a Free Consultation" name="search" className='bg-black px-4 p-2 text-center border-white' />
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='mx-3 px-3'>
              <Image src={sideImage} width={540} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First;
