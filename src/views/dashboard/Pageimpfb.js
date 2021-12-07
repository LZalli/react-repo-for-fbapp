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
 
} from '@coreui/react'


const Pageimpfb = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infopageimplabes, setinfopageimplabes] = useState();

    const [infopageimpvalue, setinfopageimpvalue] = useState();
    const [infopageimpaidvalue, setinfopageimpaidvalue] = useState();

    

    const [infopageimorganicvalue, setinfopageimorganicvalue] = useState();
    const [infopagepageimvirallabes, setinfopageimvirallabes] = useState();

    const [infopageimviralvalue, setinfopageimviralvalue] = useState();
    const [infopageimnonviralvalue, setinfopageimnonviralvalue] = useState();


    const displayTableau = () => {
        Facebook.pageimp().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageimplabes(labes);
            setinfopageimpvalue(value);
        })
     
        Facebook.pageimpaid().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageimpaidvalue(value);
            // console.log(res);
        })
        Facebook.pageimorganic().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageimorganicvalue(value);
            // console.log(res);
        })
        Facebook.pageimviral().then(res => {
            const labes = res.data[0].values.map((element) =>
            element["end_time"]);
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageimvirallabes(labes);

            setinfopageimviralvalue(value);
            
            // console.log(res);
        })
        Facebook.pageimnonviral().then(res => {
            console.log("5",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopageimnonviralvalue(value);
            // console.log(res);
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
                                            labels: infopageimplabes,
                                            datasets: [
                                                {
                                                    label: 'page imp',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageimpvalue,
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
                                                    label: 'page impaid ',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageimpaidvalue,
                                                },
                                                {
                                                    label: 'imorganic value',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageimorganicvalue,
                                                },
                                            ],
                                        }
                                    }
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>


   
                    </CRow>
                    <CCol xs={12}>
                            <CCard className="mb-12">
                                <CCardHeader>Line Chart</CCardHeader>
                                <CCardBody>
                                    <CChartLine
                                        data={{
                                            labels: infopagepageimvirallabes,
                                            datasets: [
                                                {
                                                    label: 'page imp',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageimviralvalue,
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
                                                    label: 'page impaid ',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopageimnonviralvalue,
                                                },
                        
                                            ],
                                        }
                                    }
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>

                </div>
            </div>
        </div>
    )
}

export default Pageimpfb
