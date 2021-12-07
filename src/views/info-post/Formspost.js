import React, { useState, useEffect } from 'react'
import { AppSidebar, AppHeader } from '../../components/index'
import moment from 'moment';
import {
  CFormLabel,
  CFormControl,
  CForm,
  CCol,
  CFormSelect,
  CButton,
} from '@coreui/react';

import * as post from '../../services/post';



const Formsfp = () => {
  const [pageid, setpageid] = useState()
  const [enddate, setenddate] = useState()
  const [startdate, setstartdate] = useState()
  const [list, setList] = useState()

  useEffect(
    () => {
      displayTableau()
    }, [list]
  )

  const submitHandler = () => {
    
    const data = {
      pageid,
      startdate: moment(startdate).format('MM/DD/YYYY'),
      enddate: moment(enddate).format('MM/DD/YYYY')
    };
    console.log(data);
    post.postApiFb(data)
      .then(
        (response) => {
          post.postApimertrics(pageid)
            .then((response) => {
         console.log("pgeid hhhh")
             post.setdataId(response.data);
       });
        

            console.log(response.data);
          post.setData(response.data);
          
          post.setpageId(pageid);
          
          console.log(post.getData());

          // window.history.pushState({}, '', '/fb')
          window.location.href = '/Allinfp';       // navigate to tableau
        }
      )

  }
  const displayTableau = () => {
    post.getnamepage()
      .then(
        (response) => {
          console.log(response.data.accounts.data);
          setList(response.data.accounts.data)
        })
        .catch( err => console.log(err))
  }



  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CForm className="row g-3">
            <CCol md="6">
              <CFormLabel htmlFor="inputEmail4">STARTDATE</CFormLabel>
              <CFormControl type="date" id="inputEmail4" value={startdate} onChange={(e) => { console.log(moment(e.target.value).format('DD/MM/YYYY')); setstartdate(e.target.value); }} />
            </CCol>
            <CCol md="6">
              <CFormLabel htmlFor="inputPassword4">EndDATE</CFormLabel>
              <CFormControl type="date" id="inputPassword4" value={enddate} onChange={(e) => { setenddate(e.target.value); }} />
            </CCol>
  
         
            {
              list &&
              <CCol md="4" >
              <CFormLabel htmlFor="inputState">State</CFormLabel>
              <CFormSelect id="inputState" value={pageid} onChange={(e) => { setpageid(e.target.value); }} >
                {list.map(
                  (element, key) => <option key={key} value={element.id}>{element.name}</option>
                )}
              </CFormSelect>
            </CCol>
            }



            <CCol xs="12">
              <CButton onClick={submitHandler} >Submit</CButton>
            </CCol>
          </CForm>
        </div>

      </div>
    </div>
  )
}

export default Formsfp
