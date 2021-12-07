import React ,{useState,useEffect}from 'react'
import {  AppSidebar,AppHeader } from '../../components/index'
import  * as Instagram  from '../../services/Instagram'
import {
  CCardBody,
  CCardTitle,
  CCardText,
  CTableRow,
  CCard,
  CCol,
  CRow,

 

} from '@coreui/react'

const Instapostmore = () => {
  const [inst, setinst] = useState();

  useEffect(async() => {
    setinst(await displayTableau());
  },[]);

  const displayTableau = async() => {
  
    const info=await Instagram.Instapostmore();
console.log(info);
 if(info){
  return <>
    {  info.data[0].data.map((element, key) => 
       


<CRow cols="1" colsMd="3" className="g-2"  key={key}>
<CCol xs>
<CCard className="h-100">
  <CCardBody>

  <CCardTitle>{element.name}</CCardTitle>
  <CCardTitle>{element.tilte}</CCardTitle>

    <CCardTitle>{element.descition}</CCardTitle>

    <CCardTitle>{element.values[0].value}</CCardTitle>

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
        <button onClick={ () => { window.location.href = '/getpost'; } }>detailspage</button>

        { inst}

        </div>
       
      </div>
    </div>
  )
}

export default Instapostmore
