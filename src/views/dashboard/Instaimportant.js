import React, { useState, useEffect } from 'react'
import {
    CChartLine,

} from '@coreui/react-chartjs'
import { AppSidebar, AppHeader } from '../../components/index'
import * as Instagram from '../../services/Instagram';
import {
    CCardBody,
    CCard,
    CCol,
    CRow,
    CCardHeader,



} from '@coreui/react'


const Instareasch = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infoviewslabes, setinfoviewslabes] = useState();

    const [infoviewsvalue, setinfoviewsvalue] = useState();


    // const [infoInstareachlabes, setinfoInstareachlabes] = useState();

    const [infoInstareachvalue, setinfoInstareachvalue] = useState();

    const [infoInstapageimpressionvalue, setinfoInstapageimpressionvalue] = useState();

    const displayTableau = () => {
        Instagram.Instaviews().then(res => {
            //  setinfoviews(res);

            console.log(res.data[0].data);
            const labes = res.data[0].data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].data[0].values.map((element) => element["value"]);
            setinfoviewslabes(labes);
            setinfoviewsvalue(value);
            console.log(labes, value);
        })
        Instagram.Instareach().then(res => {
            // setInstareach(res);
            console.log(res.data[0].data);
            // const labes =res.data[0].data[0].values.map((element)=>element["end_time"]);
            const value = res.data[0].data[0].values.map((element) => element["value"]);
            // setinfoInstareachlabes(labes);
            setinfoInstareachvalue(value);
        })
        Instagram.Instapageimpression().then(res => {
            // setInstapageimpression(res.data[0].data);
            // const labes =res.data[0].data[0].values.map((element)=>element["end_time"]);
            const value = res.data[0].data[0].values.map((element) => element["value"]);
            setinfoInstapageimpressionvalue(value);
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
                                            labels: infoviewslabes,
                                            datasets: [
                                                {
                                                    label: 'Instaviews',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoviewsvalue,
                                                },
                                                {
                                                    label: 'Instareach',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoInstareachvalue,
                                                },
                                                {
                                                    label: 'Instapageimpression',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoInstapageimpressionvalue,
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

export default Instareasch
