import React ,{useState,useEffect}from 'react'
import {
    CChartLine,

} from '@coreui/react-chartjs'
import * as Instagram from '../../services/Instagram';

import { AppSidebar, AppHeader } from '../../components/index'

import {
    CCardBody,
    CCard,
    CCol,
    CRow,
    CCardHeader,

} from '@coreui/react'

const Instaviews = () => {
    useEffect(() => {
        displayTableau();
      },[]);
      const [infoInstemailllabes, setinfoInstemaillabes] = useState();
      const [infoInstemaillvalue, setinfoInstemailvalue] = useState();
     
      const [infoInstamsgclicksvalue, setinfoInstamsgclicksvalue] = useState();
  
  
      // const [infoInstareachlabes, setinfoInstareachlabes] = useState();
      
      const [infoInstawebsitevalue, setinfoInstawebsitevalue] = useState();
      const displayTableau = () => {
        Instagram.Instemail().then(res =>{
           //  setinfoviews(res);
       console.log("ghhhhhhh",res)
         console.log("jfjffff",res.data[0].data);
         const labes =res.data[0].data[0].values.map((element)=>
         element["end_time"]);
         const value =res.data[0].data[0].values.map((element)=>element["value"]);
         setinfoInstemaillabes(labes);
         setinfoInstemailvalue(value);
         console.log(labes,value);
         console.log("Instemail",value);
         console.log("Instemailvalue",infoInstemaillvalue);


       })
       Instagram.Instamsgclicks().then(res =>{
           // setInstareach(res);
           console.log(res.data[0].data);
           // const labes =res.data[0].data[0].values.map((element)=>element["end_time"]);
           const value =res.data[0].data[0].values.map((element)=>element["value"]);
           console.log("Instamsgclicks",value);
           // setinfoInstareachlabes(labes);
           setinfoInstamsgclicksvalue(value);
           console.log("Instamsgclicks",infoInstamsgclicksvalue);

         })
       Instagram.Instawebsite().then(res =>{
           // setInstapageimpression(res.data[0].data);
           // const labes =res.data[0].data[0].values.map((element)=>element["end_time"]);
           const value =res.data[0].data[0].values.map((element)=>element["value"]);
           console.log("Instawebsite"+value);
           setinfoInstawebsitevalue(value);
           console.log("Instawebsitevalue",infoInstawebsitevalue);

           console.log(res);
         })
       
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
                                        labels: infoInstemailllabes,
                                        datasets: [
                                            {
                                                label: 'Instaemail',
                                                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                borderColor: 'rgba(220, 220, 220, 1)',
                                                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                pointBorderColor: '#fff',
                                                data: infoInstemaillvalue, 
                                                
                                            },
                                            {
                                                label: 'Instamsgclicks',
                                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                borderColor: 'rgba(151, 187, 205, 1)',
                                                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                pointBorderColor: '#fff',
                                                data: infoInstamsgclicksvalue,
                                            },
                                            {
                                                label: 'Instawebsite',
                                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                borderColor: 'rgba(151, 187, 205, 1)',
                                                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                pointBorderColor: '#fff',
                                                data:infoInstawebsitevalue,
                                            },
                                        ],
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol> 
                   
                </CRow>

                
            </div>
        </div>
    </div>
    )
}

export default Instaviews
