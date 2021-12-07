import React, {useEffect,useState } from 'react'
import {
    CChartLine,

} from '@coreui/react-chartjs'
import { AppSidebar, AppHeader } from '../../components/index'
import * as Facebook from '../../services/facebook';
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
import Moment from 'react-moment';


const Consultfb = () => {

    

    
    useEffect(() => {
        Facebook.consumptionstyp().then(res => {
            //  setinfoviews(res);
            console.log(res)
            setinfoconsumptionstypvalue(res.data[0].values);

           
        })

        displayTableau();
        consumptions();
    }, []);

    const [infoconsumptionslabes, setinfoconsumptionslabes] = useState();

    const [infoconsumptionsvalue, setinfoconsumptionsvalue] = useState();
    const [infoconsumptionstypvalue, setinfoconsumptionstypvalue] = useState();

    const displayTableau = () => {
        Facebook.consumptions().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoconsumptionslabes(labes);
            setinfoconsumptionsvalue(value);
            console.log(labes, value);
        })
     
    

    }


    const consumptions = () => {
    
        if(infoconsumptionstypvalue){
            console.log("home",infoconsumptionstypvalue[15].value)
            return <>
        
            {  infoconsumptionstypvalue.map((element, key) => 
                      <CTableRow key={key}>
                          <CTableDataCell>
                           <div>
                                                 
                    <Moment format="YYYY/MM/DD">
                    {element.end_time}
            </Moment>
                           </div>
               

                          </CTableDataCell>
                          <CTableDataCell>
                          <div>{element.value["link clicks"]?element.value["link clicks"]:0}</div>
                          </CTableDataCell>
                           <CTableDataCell>
                            <div>{element.value["other clicks"]?element.value["other clicks"]:0}</div>

                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{element.value["photo view"]?element.value["photo view"]:0}</div>

                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{element.value["video play"]?element.value["video play"]:0}</div>

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
                                            labels: infoconsumptionslabes,
                                            datasets: [
                                                {
                                                    label: 'consump',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoconsumptionsvalue,
                                                },
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
                    <CTableHeaderCell >Link clicks</CTableHeaderCell>
                    <CTableHeaderCell >other clicks</CTableHeaderCell>
                    <CTableHeaderCell >photo view</CTableHeaderCell>
                    <CTableHeaderCell >video play</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                
                <CTableBody>
                   {consumptions()}
                </CTableBody>
              </CTable>

                </div>
            </div>
        </div>
    )
}

export default Consultfb
