import React, {useEffect,useState } from 'react'
import {
    CChartLine,

} from '@coreui/react-chartjs'
import { AppSidebar, AppHeader } from '../../components/index'
import * as Facebook from '../../services/facebook';
import Moment from 'react-moment';

import {
    CCardBody,
    CCard,
    CCol,
    CRow,
    CCardHeader,
    CTableBody,
    CTableHeaderCell,
    CTableRow,
    CTableHead,
    CTable,
    CTableDataCell,
 
} from '@coreui/react'


const Pageviewsfb = () => {

 const [infopageviewloggedinlabes, setinfopageviewloggedinlabes] = useState();

    const [infopageviewsporftabvalue, setinfopageviewsporftabvalue] = useState();
    const [infopageviewloggedinvalue, setinfopageviewloggedinvalue] = useState();
    const [infopageviewslogoutvalue, setinfopageviewslogoutvalue] = useState();

    useEffect(() => {
        Facebook.pageviewsporftab().then(res => {
     
        
            setinfopageviewsporftabvalue(res.data[0].values);
            
            
            })
        displayTableau();
        profiltabTotal();
    }, []);


   


    
    const displayTableau = () => {
     
     
        Facebook.pageviewloggedin().then(res => {
             console.log("2",res)
             const labes = res.data[0].values.map((element) =>
             element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageviewloggedinlabes(labes);

            setinfopageviewloggedinvalue(value);
            // console.log(res);
        })

        Facebook.pageviewslogout().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageviewslogoutvalue(value);
            // console.log(res);
        })
      
    }
    const  profiltabTotal = () =>{
        //  let like = [];
    
        if(infopageviewsporftabvalue){
            console.log("home",infopageviewsporftabvalue[15].value)
            return <>
        
            {  infopageviewsporftabvalue.map((element, key) => 
                      <CTableRow key={key}>
                          <CTableDataCell>
                          <div> 
                    
                    <Moment format="YYYY/MM/DD">
                    {element.end_time}
            </Moment>
                    </div>                          </CTableDataCell>
                          <CTableDataCell>
                          <div>{element?.value?.HOME?element?.value?.HOME:0}</div>
                          </CTableDataCell>
                           <CTableDataCell>
                            <div>{element?.value?.COMMUNITY?element?.value?.COMMUNITY:0}</div>

                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{element?.value?.PHOTOS?element?.value?.PHOTOS:0}</div>

                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{element?.value?.POSTS?element?.value?.POSTS:0}</div>

                          </CTableDataCell>

                        </CTableRow>
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
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">

                    <CRow>

                        <CCol xs={12}>
                            <CCard className="mb-12">
                                <CCardHeader>Line Chart</CCardHeader>
                                <CCardBody>
                                    <CChartLine
                                        data={{
                                            labels: infopageviewloggedinlabes,
                                            datasets: [
                                                {
                                                    label: 'page view loggedin',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageviewloggedinvalue,
                                                },
                                                {
                                                    label: 'page view loggedout',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageviewslogoutvalue,
                                                }
                                            
                                            ],
                                        }
                                    }
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>


   
                    </CRow>
                    <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                  
                    <CTableHeaderCell>date</CTableHeaderCell>
                    <CTableHeaderCell >Home</CTableHeaderCell>
                    <CTableHeaderCell >Community</CTableHeaderCell>
                    <CTableHeaderCell >PHOTOS</CTableHeaderCell>
                    <CTableHeaderCell >POSTS</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                
                <CTableBody>
                  {profiltabTotal()}
                </CTableBody>
              </CTable>
                </div>
            </div>
        </div>
    )
}

export default Pageviewsfb
