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


const Engagementfb = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infoengageduserslabes, setinfoengageduserslabes] = useState();

    const [infoengagedusersvalue, setinfoengagedusersvalue] = useState();




    const [infopostengagementsvalue, setinfopostengagementsvalue] = useState();

    const displayTableau = () => {
        Facebook.engagedusers().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoengageduserslabes(labes);
            setinfoengagedusersvalue(value);
            console.log(labes, value);
        })
     
        Facebook.postengagements().then(res => {
            console.log("3",res)
            if(res.data[0].values){
                const value = res.data[0].values.map((element) => element["value"]);
                setinfopostengagementsvalue(value);

            }
          
            
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
                                            labels: infoengageduserslabes,
                                            datasets: [
                                                {
                                                    label: 'engaged users',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoengagedusersvalue,
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
                                                    label: 'post engagements',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopostengagementsvalue,
                                                },
                                            ],
                                        }
                                    }
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

export default Engagementfb
