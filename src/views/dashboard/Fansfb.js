import React, { useState, useEffect } from 'react'
import {
    CChartLine,
    //  CChartPie,
    CChartBar

} from '@coreui/react-chartjs'
import { AppSidebar, AppHeader } from '../../components/index'
import * as Facebook from '../../services/facebook';
import {
    CCardBody,
    CCard,
    CCol,
    CRow,
    CCardHeader,

} from '@coreui/react'


const Fansfb = () => {




    useEffect(() => {
        displayTableau();
    }, []);

    const [infopagefanslabes, setinfopagefanslabes] = useState();

    const [infopagefansvalue, setinfopagefansvalue] = useState();
    

     const [infopagefansgenderagevalue, setinfopagefansgenderagevalue] = useState();
     
     const [infopagefansgenderagelabes, setinfopagefansgenderagelabes] = useState();
     
     const [infofanslocalelabes, setinfofanslocalelabes] = useState();
     
    const [infofanslocalevalue, setinfofanslocalevalue] = useState();
    
    const [infofanscityvalue, setinfofanscityvalue] = useState();
    const [infofanscitylabes, setinfofanscitylabes] = useState();
    
    const displayTableau = () => {
        Facebook.pagefans().then(res => {
            //  setinfoviews(res);

            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopagefanslabes(labes);
            setinfopagefansvalue(value);
        })
        Facebook.pagefansgenderage().then(res => {
            //  setinfoviews(res);
console.log(res.data[0]);
const labes = [];
const value = [];
for (let key in res.data[0]) {
    if (key !== "_id") {
        labes.push(key);

        value.push(res.data[0][key]);
    }

}
      
            setinfopagefansgenderagelabes(labes);
            
            setinfopagefansgenderagevalue(value);
            
        })
        Facebook.fanslocale().then(res => {
            // setInstareach(res);
  
             const labes =res.data[0].values.map((element)=>Object.keys(element["value"]));
            const value = res.data[0].values.map((element) => Object.values(element["value"]));
            // setinfoInstareachlabes(labes);
            
            setinfofanslocalelabes(labes[0]);
            setinfofanslocalevalue(value[0]);
     
        })
        Facebook.fanscity().then(res => {
            // setInstapageimpression(res.data[0].data);
            console.log("fanscity1",res.data[0].values[0].value);

            const labes =res.data[0].values.map((element)=>Object.keys(element["value"]));
            const value = res.data[0].values.map((element) => Object.values(element["value"]));
            console.log("fanscity2",labes[0]);
            console.log("fanscity3",value[0]);
            setinfofanscitylabes(labes[0]);
            setinfofanscityvalue(value[0]);
            console.log(infofanscitylabes);
     
            console.log(infofanscityvalue);
            console.log("fac4",res);
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
                    labels: infopagefanslabes,
                    datasets: [
                        {
                            label: 'Info page fans',
                            backgroundColor: 'rgba(220, 220, 220, 0.2)',
                            borderColor: 'rgba(220, 220, 220, 1)',
                            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                            pointBorderColor: '#fff',
                            data: infopagefansvalue,
                        },
                  
                       
                    ],
                }
            }
            />
        </CCardBody>
    </CCard>
</CCol>
<CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                Insta aud age
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infopagefansgenderagelabes,
                                            datasets: [
                                                {
                                                    label: 'Insta audage value',
                                                    backgroundColor: '#f87979',
                                                    data: infopagefansgenderagevalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
<CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                Langauge Fan
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infofanslocalelabes,
                                            datasets: [
                                                {
                                                    label: 'Langauge fan',
                                                    backgroundColor: '#f87979',
                                                    data: infofanslocalevalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                City Fan
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infofanscitylabes,
                                            datasets: [
                                                {
                                                    label: 'City fans',
                                                    backgroundColor: '#f87979',
                                                    data: infofanscityvalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
{/* 
<CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Pie Chart</CCardHeader>
                                <CCardBody>
                                    <CChartPie
                                        data={{
                                            labels: infofanslocalelabes,
                                            datasets: [
                                                {
                                                            data: infofanslocalevalue,
                                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#0dcaf0', '#0dcaf0', '#8a93a2','#636f83','#2eb85c','#f9b115'],
                                                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#0dcaf0', '#0dcaf0', '#8a93a2','#636f83','#2eb85c','#f9b115'],
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>  */}
                         {/* <CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Pie Chart</CCardHeader>
                                <CCardBody>
                                    <CChartPie
                                        data={{
                                            labels: infofanslocalelabes,
                                            datasets: [
                                                {
                                                            data: infofanslocalevalue,
                                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#0dcaf0', '#0dcaf0', '#8a93a2','#636f83','#2eb85c','#f9b115'],
                                                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#0dcaf0', '#0dcaf0', '#8a93a2','#636f83','#2eb85c','#f9b115'],
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>  */}

</CRow>


                </div>
            </div>
        </div>
    )
}

export default Fansfb
