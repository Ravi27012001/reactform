import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import "./add.css"
const Formm = () => (
  <div>
    <h2 className='heading'><u>Personal Details</u></h2>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="Name">Name*</label>
        <Field required id="Name" name="Name" placeholder="Enter your Name" />

        <label htmlFor="Age" style={{marginLeft:"120px"}}>Date of Birth or Age*</label>
        <Field required id="Age" name="Age" style={{width:"250px"}} placeholder="DD/MM/YYYY or Age in Years" />

        <label htmlFor="Sex" style={{marginLeft:"80px"}}>Sex*</label>
        <select required id='Sex' placeholder='Enter Sex'>
        <option>Enter Sex</option>
          <option>Male</option>
            <option>Female</option>
         </select>
         <br></br>
         <br></br>
         <label htmlFor="Mobile">Mobile</label>
        <Field id="Mobile" name="Mobile" style={{width:"250px",marginRight:"205px"}} placeholder="Enter Mobile" />
        
        <label htmlFor="Id">Govt Issued Id</label>
        <select id='Id' style={{width:"100px",marginRight:"20px"}} placeholder='Enter Sex'>
        <option>ID Type</option>
          <option>Adhar</option>
            <option>Pan</option>
         </select>
        <Field id="Id" name="Id" style={{width:"250px",marginRight:"120px"}} placeholder="Enter Govt ID" />
       <br></br>

       <h2 className='heading'><u>Contact Details</u></h2>
       <label htmlFor="Guardian">Guardian Detail</label>
        <select id='Guardian' style={{width:"100px",marginRight:"20px"}} placeholder='Enter Sex'>
        <option>Enter Label</option>
          <option>Adhar</option>
            <option>Pan</option>
         </select>
        <Field id="Gdetail" name="Gdetail" style={{width:"170px",marginRight:"80px"}} placeholder="Enter Guardian Detail" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Enter Email"
          type="email"
        />
        <label htmlFor="Emergency Mobile"style={{marginLeft:"40px"}}>Emergency Contact Number</label>
        <Field id="Emergency Mobile" name="Emergency Mobile" style={{width:"150px"}} placeholder="Enter Emergency No" />
        <br></br>
        <h2 className='heading'><u>Address Details</u></h2>
        <label htmlFor="address">Address</label>
        <Field id="address" name="address" style={{width:"350px"}} placeholder="Enter Address" />

        <label htmlFor="State" style={{marginLeft:"150px"}}>State</label>
        <select id='State'style={{width:"250px"}} placeholder='Enter State'>
        <option >Enter State</option>
          <option>bihar</option>
            <option>jharkhand</option>
         </select>

        <label htmlFor="city" style={{marginLeft:"80px"}}>City</label>
        <select id='city' placeholder='Enter Sex'>
        <option>Enter City/town/Villege</option>
          <option>Chatra</option>
            <option>Hazaribagh</option>
         </select>
         <br></br>
         <br></br>
         <label htmlFor="country">Country</label>
        <Field id="country" name="country" style={{width:"250px",marginRight:"245px"}} placeholder="India" />
        
        <label htmlFor="pincode">Pincode</label>
         <Field id="pincode" name="pincode" style={{width:"250px",marginRight:"245px"}} placeholder="Enter Pincode" />
        <h2 className='heading'><u>Other Details</u></h2>

        <label htmlFor="occupation">Occupation</label>
        <Field id="occupation" name="occupation" style={{width:"250px",marginRight:"50px"}} placeholder="Enter Ocuupation" />
        <label htmlFor="religion">Religion</label>
        <select id='religion' style={{marginRight:"50px"}}>
        <option>Enter Religion</option>
          <option>Hindu</option>
            <option>Muslim</option>
         </select>
        <label htmlFor="marital">Marital Status</label>
        <select id='marital' style={{marginRight:"50px"}}>
        <option>Enter Marital status</option>
          <option>Married</option>
            <option>Unmarried</option>
         </select>        <label htmlFor="blood">Blood Group</label>
         <select id='blood'>
        <option>Enter Group</option>
          <option>B +ve</option>
            <option>A +ve</option>
            
         </select> <br></br><br></br>
         <label htmlFor="Nation">Nationality</label>
        <Field id="nation" name="nation" style={{width:"250px",marginRight:"805px"}} placeholder="India" />
        <br></br>
        <div className='cls'>
        <button className='cancel' type="submit">CANCEL</button>
                <button className='submit' type="submit">SUBMIT</button>
                </div>
      </Form>
    </Formik>
  </div>
);

export default Formm;