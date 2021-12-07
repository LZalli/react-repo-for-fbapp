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


const Tenvideos = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infocompleteviews10slabes, setinfocompleteviews10slabes] = useState();
    
    const [infoocompleteviews10svalue, setinfocompleteviews10svalue] = useState();
    const [infopaid10svalue, setinfopaid10svalue] = useState();
    

    const [infoorganic10svalue, setinfoorganic10svalue] = useState();


    const displayTableau = () => {
        Facebook.videoviews10s().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfocompleteviews10slabes(labes);
            setinfocompleteviews10svalue(value);
        })
     
        Facebook.paid10s().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopaid10svalue(value);
            // console.log(res);
        })
        Facebook.organic10s().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoorganic10svalue(value);
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
                                            labels: infocompleteviews10slabes,
                                            datasets: [
                                                {
                                                    label: 'views10s',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoocompleteviews10svalue,
                                                },
                                            
                                                {
                                                    label: 'paid10s',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopaid10svalue,
                                                },
                                                {
                                                    label: 'organic10s',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoorganic10svalue,
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

export default Tenvideos
