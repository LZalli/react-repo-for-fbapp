import React, { useEffect,useState } from 'react'
import  * as facebook  from '../../services/post'
import {  AppSidebar,AppHeader } from '../../components/index'
import {
  CCardBody,
  CCardTitle,
  CCardText,
  CTableRow,
  CCard,
  CCol,
  CRow
} from '@coreui/react'
 import Iframe from 'react-iframe';
 
const Getpost = () => {

  const [data, setData] = useState();
 

  useEffect(async() => {
    setData(await displayTableau());
  },[]);




  const displayTableau = async() => {
    console.log(facebook.getdataId());

    //setData( facebook.getData() )
    /*const d = facebook.getData();*/
   
    // const Myinfo = React.createContext(facebook.getData());
  //// const Myinfo = React.createContext(facebook.getData());
  // console.log(Myinfo);
  const info= await facebook.postfbdetails()
console.log(info);
  if(info){
    return <>
      {  info.data.map((element, key) => 
         


<CRow cols="1" colsMd="3" className="g-2"  key={key}>
<CCol xs>
  <CCard className="h-100">
   <Iframe src={`https://www.facebook.com/plugins/post.php?href=${element.permalink_url}&show_text=true&width=500`} width="500" height="466" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe> 
    <CCardBody>
      <CCardTitle>{element.permalink_url}</CCardTitle>
      <CCardTitle>{element.id}</CCardTitle>
    {element.insights.data.map((element,key)=>
    
          <CCardTitle  key={key}>{element.name}: {
            

            element.values["0"]["value"]? element.values["0"]["value"] : 0}

            </CCardTitle>

    )}

      <CCardText>
      </CCardText>

    </CCardBody>
  </CCard>

</CCol>



</CRow>
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
     
                  {data}
              
        </div>
       
      </div>
    </div>
  )
}

export default Getpost
