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


const Videoviewsfb = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infovideoviewslabes, setinfovideoviewslabes] = useState();

    const [infovideoviewsvalue, setinfovideoviewsvalue] = useState();




    const [infovideoviewspaidvalue, setinfovideoviewspaidvalue] = useState();
    const [infovideoviewsorganicvalue, setinfovideoviewsorganicvalue] = useState();
    const [infovideoclkvalue, setinfovideoclkvalue] = useState();
    const [inforepaeatviewsvalue, setinforepaeatviewsvalue] = useState();    
    const displayTableau = () => {
        Facebook.videoviews().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfovideoviewslabes(labes);
            setinfovideoviewsvalue(value);
            console.log(labes, value);
        })
     
        Facebook.videoviewspaid().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfovideoviewspaidvalue(value);
            // console.log(res);
        })
        Facebook.videoviewsorganic().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfovideoviewsorganicvalue(value);
            // console.log(res);
        })
        Facebook.videoclk().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfovideoclkvalue(value);
            // console.log(res);
        })

        Facebook.repeatviews().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinforepaeatviewsvalue(value);
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
                                            labels: infovideoviewslabes,
                                            datasets: [
                                                {
                                                    label: 'video views',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infovideoviewsvalue,
                                                },
                                           
                                                {
                                                    label: 'video views paid',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infovideoviewspaidvalue,
                                                },
                                        
                                                {
                                                    label: 'video views organic',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infovideoviewsorganicvalue,
                                                },

                                                {
                                                    label: 'info video clk',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infovideoclkvalue,
                                                },
                                                {
                                                    label: 'info repaeat views',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: inforepaeatviewsvalue,
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

export default Videoviewsfb
