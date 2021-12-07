import React, { useEffect } from 'react'
import  * as facebook  from '../../services/facebook'
import {  AppSidebar,AppHeader } from '../../components/index'
import {
  CAvatar,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Pageinfb = () => {

  //const [data, setData] = useState();

  useEffect(() => {
    // Update the document title using the browser API
   /* facebook.getTimeSpent().then((res)=>{
      console.log(res)
    })
    */

    console.log(facebook.getData());
 //  setData( facebook.getData() )
  }, []);


  const displayTableau = () => {
    console.log(facebook.getData());

    //setData( facebook.getData() )
    /*const d = facebook.getData();*/
   
    // const Myinfo = React.createContext(facebook.getData());
  //// const Myinfo = React.createContext(facebook.getData());
  // console.log(Myinfo);
  const info=facebook.getpage()
  if(info){
    return <>
      {  info.map((element, key) => 
                <CTableRow key={key}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/1.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{element.value}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                    <div>{element.end_time}</div>
                    </CTableDataCell>
                 
                
                 
                  </CTableRow>
        )}
    </>
  }else{
    return <>
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
        <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon name="cil-people" />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                   
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                
                <CTableBody>
                  {displayTableau()}
                </CTableBody>
              </CTable>
        </div>
       
      </div>
    </div>
  )
}

export default Pageinfb
