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


const Pagefanfb = () => {
  const [infopagefanaddslabes, setinfopagefanaddslabes] = useState();
  const [infopagefanaddsvalue, setinfopagefanaddsvalue] = useState();
  const [ infopagefanremovesvalue, setinfopagefanremovesvalue] = useState();
   const [infopagefanslikesourcevalue, setinfopagefanslikesourcevalue] = useState();
    useEffect(() => {
        displayTableau();
        reactionsTotal();

    }, []);
  

     

    const displayTableau = () => {
        Facebook.pagefanadds().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopagefanaddslabes(labes);
            setinfopagefanaddsvalue(value);
            console.log(labes, value);
        })
     
        Facebook.pagefanremoves().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopagefanremovesvalue(value);
            // console.log(res);
        })

    }
const  reactionsTotal = () =>{
  Facebook.pagefanslikesource().then(res => {
 setinfopagefanslikesourcevalue(res.data[0].values);
})


if(infopagefanslikesourcevalue){
return<>
    {  infopagefanslikesourcevalue.map((element, key) => 
              <CTableRow key={key}>
                  <CTableDataCell>
                  <div>  <Moment format="YYYY/MM/DD">
                    {element.end_time}
            </Moment>
                   </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element?.value?.Other?element?.value?.Other:0}</div>
                  </CTableDataCell>
                   <CTableDataCell>
                    <div>{element?.value?.Search?element?.value?.Search:0}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{element.value["Your Page"]?element.value["Your Page"]:0}</div>
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
                                            labels: infopagefanaddslabes,
                                            datasets: [
                                                {
                                                    label: 'page fanadds',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopagefanaddsvalue,
                                                  
                                                },
            
                                                {
                                                    label: 'page fanremoves',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopagefanremovesvalue,
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
                    <CTableHeaderCell >OTHER</CTableHeaderCell>
                    <CTableHeaderCell >Search</CTableHeaderCell>
                    <CTableHeaderCell >YOUR PAGE</CTableHeaderCell>
                   
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

export default Pagefanfb
