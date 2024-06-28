import React from 'react'
import Navbar from './Navbar'
const ContactPage = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <img src="https://bengalpeerless.com/wp-content/uploads/2019/06/c3.jpg" alt="" />
                <p class="fs-2">GET IN TOUCH WITH US BY FILLING THIS FORM:-</p>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Subject</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Message</label>
                    <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Ph.no</label>
                    <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
