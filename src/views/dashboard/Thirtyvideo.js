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


const Thirtyvideo = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infocompleteviews30slabes, setinfocompleteviews30slabes] = useState();
    
    const [infoocompleteviews30svalue, setinfocompleteviews30svalue] = useState();
    const [infopaid30svalue, setinfopaid30svalue] = useState();
    

    const [infoorganic30svalue, setinfoorganic30svalue] = useState();


    const displayTableau = () => {
        Facebook.completeviews30s().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfocompleteviews30slabes(labes);
            setinfocompleteviews30svalue(value);
        })
     
        Facebook.paid30s().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfopaid30svalue(value);
            // console.log(res);
        })
        Facebook.organic30s().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoorganic30svalue(value);
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
                                            labels: infocompleteviews30slabes,
                                            datasets: [
                                                {
                                                    label: 'views30s',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoocompleteviews30svalue,
                                                },
                                            
                                                {
                                                    label: 'paid30s',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infopaid30svalue,
                                                },
                                                {
                                                    label: 'organic30s',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoorganic30svalue,
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

export default Thirtyvideo
