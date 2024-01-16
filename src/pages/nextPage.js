import React from 'react'
import second from '../Images/second.png'
import Image from 'next/image'
import Cards from '@/(components)/cards'

function NextPage() {
  let content = 'FOR STARTUP AND GROWING BUSINESS, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTIES, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM'
  return (
    <div className='bg-dark text-white'>
      <div className='border'></div>
      <div className='row m-0 p-5 webLorem'>
        <div className='col-sm-12 col-md-6 p-0 '>
          <div className='web'>We provide the best web services</div>
          <p className='lorem' style={{    fontFamily: 'Merienda'
}}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. EVENIET FUGIAT DEBITIS MAGNAM DOLORES AMET PERSPICIATIS MAIORES QUIBUSDAM ISTE, TOTAM LABORIOSAM, ODIO </p>
          <div className='mt-3 p-2' style={{ color: 'white' }}>
            <i class="bi bi-check-circle text-success mx-1"></i><span className='m-2 p-1 mx-1 '>MOST EASY PREMIUM WEB DESIGN PROCESS </span><br />
            <i class="bi bi-check-circle text-success mx-1"></i><span className='m-2 mx-1 p-1'>RESEARCH NAD DEVELOPEMENT BEFORE STARTING </span><br />
            <i class="bi bi-check-circle text-success mx-1"></i><span className='m-2 mx-1 p-1'>MAKING A QUALITY DESIGN IDEAS</span><br />
            <i class="bi bi-check-circle text-success mx-1"></i><span className='m-2 mx-1 p-1'>MAKING A QUALITY DESIGN IDEAS</span><br />
            <i class="bi bi-check-circle text-success mx-1"></i><span className='m-2 mx-1 p-1'>MAKING A QUALITY DESIGN IDEAS</span>

          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='mx-3 px-3'>
            <Image src={second} alt='second image' width={550} className='img-fluid' /></div>
        </div>
      </div>
      {/* 
        /////////////////services///////////////// */}

      <div className='bg-black  '>
        <div className='service p-4'>Services We're offering</div>
        <div className='container pb-4'>
          <div className='row justify-content-center g-4 mt-5' >
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../webdesign.png' title='Web Design' content={content} color='rgba(250, 0, 82, 0.17)' border='rgb(194 65 12)' />
            </div>
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../webapp.png' title='Web/Mobile Application' content={content} color='rgba(37, 224, 1, 0.17)' border='rgb(77 124 15)' />
            </div>
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../seo.png' title='SEO' content={content} color='rgba(87, 16, 89, 0.27)' border='rgb(90 7 46)' />
            </div>
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../digital.png' title='Digital Marketing' content={content} color='rgba(76, 59, 76, 0.47)' border='rgb(167 139 250)' />
            </div>
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../devops.png' title='Dev Ops' content={content} color='rgba(233, 104, 18, 0.17)' border='rgb(161 98 7)' />
            </div>
            <div className='col-md-12 col-lg-6' style={{ paddingLeft: 50 }}>
              <Cards pic='../data.png' title='Data Science' content={content} color='rgba(21, 5, 246, 0.17)' border='rgb(37 99 235)' />
            </div>
          </div>
        </div>
      </div>


      {/* ////////contact us////////// */}
      <div className='bg-black p-5'>
        <div className='justify-content-between text-center text-white mb-5'>
          <span style={{ fontSize: '60px', fontWeight: 'bold' }} className='con'>Contact Us</span>
        </div>
        <div className='flex row'>
          <div className='col-sm-12 col-md-6'>
            <Image
              src='/contact.png'
              width={470}
              height={500}
              style={{ borderRadius: '25px' }}
            />
          </div>
          <div className='contact col-sm-12 col-md-6'>
            <form style={{ width: '50vh', marginTop: '15vh', marginLeft: '15vh' }}>
              <div style={{ marginTop: '70px' }}>
                <label className='text-white form-label'>Name</label>
              </div>
              <div className="input-group input-group-lg">
                <input
                  type='text'
                  placeholder='Enter Name'
                  className='form-control '
                  style={{ background: (255, 255, 255, 0.4) }}
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <label className='text-white form-label'>Email</label>
              </div>
              <div className="input-group input-group-lg">
                <input
                  style={{ background: (255, 255, 255, 0.4) }}
                  type='text'
                  placeholder='Enter email' className='form-control'
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <label className='text-white form-label'>Phone</label>
              </div>
              <div className="input-group input-group-lg">
                <input
                  style={{ background: (255, 255, 255, 0.4) }} type='text'
                  placeholder='Enter phone' className='form-control'
                />
              </div>
              <div>
                <button className='btn'
                  style={{
                    backgroundColor: '#8E3F76 ',
                    width: '50vh',
                    height: '6vh',
                    padding: '2px',
                    paddingLeft: '15px',
                    borderRadius: '5px',
                    marginTop: '40px'
                  }}
                >Contact
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NextPage