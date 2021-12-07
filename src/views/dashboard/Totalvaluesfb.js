import React, {useEffect,useState } from 'react'
import {
    CChartLine,

} from '@coreui/react-chartjs'
import Moment from 'react-moment';

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


const Totalvaluesfb = () => {
  const [infopageviewstotallabes, setinfopageviewstotallabes] = useState();
  const [infopageviewstotalvalue, setinfopageviewstotalvalue] = useState();
  const [infototalactionsvalue, setinfototalactionsvalue] = useState();

   const [inforeactionsTotalvalue, setinforeactionsTotalvalue] = useState();
    useEffect(() => {
        Facebook.reactionsTotal().then(res => {
            setinforeactionsTotalvalue(res.data[0].values);
           })
        displayTableau();
        reactionsTotal();

    }, []);
  

     
    const displayTableau = () => {
        Facebook.pageViewsTotal().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
        element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageviewstotallabes(labes);
            setinfopageviewstotalvalue(value);
            console.log(labes, value);
        })
     
        Facebook.totalactions().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfototalactionsvalue(value);
            // console.log(res);
        })

    }
const  reactionsTotal = () =>{
 

if(inforeactionsTotalvalue){
    console.log(inforeactionsTotalvalue)
return<>
    {  inforeactionsTotalvalue.map((element, key) => 
              <CTableRow key={key}>
                  <CTableDataCell>
                    <div> 
                    
                    <Moment format="YYYY/MM/DD">
                    {element.end_time}
            </Moment>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element?.value?.like?element?.value?.like:0}</div>
                  </CTableDataCell>
                   <CTableDataCell>
                    <div>{element?.value?.love?element?.value?.love:0}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element?.value?.haha?element?.value?.haha:0}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element?.value?.sorry?element?.value?.sorry:0}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element?.value?.wow ?element?.value?.wow :0}</div>
                  </CTableDataCell> 
                </CTableRow>
      )}
  </>
}else{
return<>
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
                                            labels:
                                            infopageviewstotallabes
                                 ,
                                            datasets: [
                                                {
                                                    label: 'pageviewstotal',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageviewstotalvalue,
                                                },
                                                // {
                                                //     label: 'actionsTotalvalue',
                                                //     backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                //     borderColor: 'rgba(151, 187, 205, 1)',
                                                //     pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                //     pointBorderColor: '#fff',
                                                //     data: inforeactionsTotalvalue,
                                                // },
                                                {
                                                    label: 'totalactionsvalue',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infototalactionsvalue,
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
                    <CTableHeaderCell >like</CTableHeaderCell>
                    <CTableHeaderCell >love</CTableHeaderCell>
                    <CTableHeaderCell >soory</CTableHeaderCell>
                    <CTableHeaderCell >haha</CTableHeaderCell>
                    <CTableHeaderCell >wow</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                
                <CTableBody>

                {reactionsTotal()}                </CTableBody>
              </CTable>
                </div>
            </div>
        </div>
    )
}

export default Totalvaluesfb
