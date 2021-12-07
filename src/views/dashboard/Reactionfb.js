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


const Reactionfb = () => {



    useEffect(() => {
        displayTableau();
    }, []);


    const [infoliketotallabes, setinfoliketotallabes] = useState();

    const [infoliketotalvalue, setinfoliketotalvalue] = useState();




    const [infolovetotalsvalue, setinfolovetotalvalue] = useState();
    const [infowowtotalvalue, setinfowowtotalvalue] = useState();
    const [infohahatotalvalue, setinfohahatotalvalue] = useState();
    const [infosorrytotalvalue, setinfosorrytotalvalue] = useState();

    const [infoangtotalvalue, setinfoangtotalvalue] = useState();

    
    const displayTableau = () => {
        Facebook.liketotal().then(res => {
            //  setinfoviews(res);

            console.log("1",res.data[0].values);
            const labes = res.data[0].values.map((element) =>
                element["end_time"]);
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoliketotallabes(labes);
            setinfoliketotalvalue(value);
            console.log(labes, value);
        })
     
        Facebook.lovetotal().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfolovetotalvalue(value);
            // console.log(res);
        })

        Facebook.wowtotal().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfowowtotalvalue(value);
            // console.log(res);
        })
        Facebook.hahatotal().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfohahatotalvalue(value);
            // console.log(res);
        })
        Facebook.sorrytotal().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfosorrytotalvalue(value);
            // console.log(res);
        })
        Facebook.angtotal().then(res => {
            console.log("3",res)
            const value = res.data[0].values.map((element) => element["value"]);
            setinfoangtotalvalue(value);
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
                                            labels: infoliketotallabes,
                                            datasets: [
                                                {
                                                    label: 'liketotal',
                                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                    borderColor: 'rgba(220, 220, 220, 1)',
                                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoliketotalvalue,
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
                                                    label: 'love total',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infolovetotalsvalue,
                                                },
                                                {
                                                    label: 'owow total',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infowowtotalvalue,
                                                },
                                                {
                                                    label: 'haha total value',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infohahatotalvalue,
                                                },
                                                {
                                                    label: 'sorry total',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infosorrytotalvalue,
                                                },
                                                {
                                                    label: 'ang total',
                                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                    borderColor: 'rgba(151, 187, 205, 1)',
                                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                    pointBorderColor: '#fff',
                                                    data: infoangtotalvalue,
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

export default Reactionfb
