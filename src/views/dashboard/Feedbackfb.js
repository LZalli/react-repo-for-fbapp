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


const Feedbackfb = () => {


    const [infonegativefdblabes, setinfonegativefdblabes] = useState();

    const [infopagenegativefdbvalue, setinfonegativefdbvalue] = useState();

    const [infopositfdbtypevalue, setinfopositfdbtypevalue] = useState();

    useEffect(() => {
        Facebook.positfdbtype().then(res => {


            setinfopositfdbtypevalue(res.data[0].values);


        })
        positfdbtypes();

        displayTableau();
    }, []);





    const displayTableau = () => {
        Facebook.negativefdb().then(res => {
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfonegativefdblabes(labes);
        
            setinfonegativefdbvalue(value);
         
        })
     
    

    }

    const positfdbtypes = () => {
        //  let like = [];
  
        if (infopositfdbtypevalue) {
            return <>

                {infopositfdbtypevalue.map((element, key) =>
                    <CTableRow key={key}>
                        <CTableDataCell>
                        <div> 
                    
                    <Moment format="YYYY/MM/DD">
                    {element.end_time}
            </Moment>
                    </div>
                                            </CTableDataCell>
                        <CTableDataCell>
                            <div>{element?.value?.link ? element?.value?.link : 0}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                            <div>{element?.value?.like ? element?.value?.like : 0}</div>

                        </CTableDataCell>
                        <CTableDataCell>
                            <div>{element?.value?.comment ? element?.value?.comment : 0}</div>

                        </CTableDataCell>
                        <CTableDataCell>
                            <div>{element?.value?.other ? element?.value?.other : 0}</div>

                        </CTableDataCell>

                    </CTableRow>
                )}
            </>
        } else {
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
                    labels: infonegativefdblabes,
                    datasets: [
                        {
                            label: 'consump',
                            backgroundColor: 'rgba(220, 220, 220, 0.2)',
                            borderColor: 'rgba(220, 220, 220, 1)',
                            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                            pointBorderColor: '#fff',
                            data: infopagenegativefdbvalue,
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
                    <CTableHeaderCell >Link</CTableHeaderCell>
                    <CTableHeaderCell >like</CTableHeaderCell>
                    <CTableHeaderCell >comment</CTableHeaderCell>
                    <CTableHeaderCell >other</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                
                <CTableBody>
                   {positfdbtypes()}
                </CTableBody>
              </CTable>

                </div>
            </div>
        </div>
    )
}

export default Feedbackfb
