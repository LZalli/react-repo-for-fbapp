import React, {useEffect,useState} from 'react'
import * as Facebook from '../../services/facebook';

import {
  // CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  // CCardFooter,
  // CCardTitle,
  // CCardText,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  // CTable,
  // CTableBody,
  // CTableDataCell,
  // CTableHead,
  // CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'



const Dashboard = () => {
  const [infobenchmark, setinfobenchmark] = useState();

  useEffect(async() => {
 
    setinfobenchmark(await displayTableau());
}, []);
const displayTableau = async() => {
    
  const info= await Facebook.benchmark();
console.log(info.data)
if( info){
  return <>
    {   info.data.map((element, key) => 
       


<CRow cols="1" colsMd="3" className="g-2"  key={key}>


<CCol xs>
                    <CCard className="mb-4">
                      <CCardHeader>{element.name}</CCardHeader>
                      <CCardBody>
                        <CRow>
                          <CCol xs="12" md="6" xl="6">
                            <CRow>
                              <CCol sm="6">
                                <div className="border-start border-start-4 border-start-info py-1 px-3">
                                  <div className="text-medium-emphasis small">Totalfans</div>
                                  <div className="fs-5 fw-semibold">{element.totalfans}</div>
                                </div>
                              </CCol>
                              <CCol sm="6">
                                <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                                  <div className="text-medium-emphasis small">New fans</div>
                                  <div className="fs-5 fw-semibold">{element.newfans}</div>
                                </div>
                              </CCol>
                              <CCol sm="6">
                                <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                                  <div className="text-medium-emphasis small">Interaction</div>
                                  <div className="fs-5 fw-semibold">{element.interactions}</div>
                                </div>
                              </CCol>
                            </CRow>
          
                            <hr className="mt-0" />
          
                        
          
                         
                        
                            <div className="progress-group mb-4">
                              <div className="progress-group-header">
                                <span>TE</span>
                                <span className="ms-auto font-semibold">{element.TE}</span>
                              </div>
                              <div className="progress-group-bars">
                                <CProgress thin color="info" value={element.TE} />
                              </div>
                            </div>
                          </CCol>
          
                          <CCol xs="12" md="6" xl="6">
                            <CRow>
                              <CCol sm="6">
                                <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                                  <div className="text-medium-emphasis small">varfans</div>
                                  <div className="fs-5 fw-semibold">{element.varfans}</div>
                                </div>
                              </CCol>
                              <CCol sm="6">
                                <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                                  <div className="text-medium-emphasis small">Posts</div>
                                  <div className="fs-5 fw-semibold">{element.posts}</div>
                                </div>
                              </CCol>
                            </CRow>
          
                            <hr className="mt-0" />
          
                            <div className="progress-group mb-4">
                              <div className="progress-group-header">
                                <span>Comment</span>
                                <span className="ms-auto font-semibold">{element.comments}</span>
                              </div>
                              <div className="progress-group-bars">
                                <CProgress thin color="warning" value={element.comments} />
                              </div>
                            </div>
                            <div className="progress-group mb-5">
                              <div className="progress-group-header">
                                <CIcon className="icon icon-lg me-2" name="cil-user-female" />
                                <span>reactions</span>
                                <span className="ms-auto font-semibold">{element.reactions} </span>
                              </div>
                              <div className="progress-group-bars">
                                <CProgress thin color="warning" value={element.reactions}  />
                              </div>
                            </div>
           
                          
                          </CCol>
                        </CRow>
          
                        <br />
          
                      </CCardBody>
                    </CCard>
                  </CCol>

</CRow>
      )}
  </>
}else{
  return <>
            <CTableRow >
               
            
             
              </CTableRow>
    
</>

}
}

  return (
    <>
   

   {infobenchmark}
    
    </>
  )
}

export default Dashboard
