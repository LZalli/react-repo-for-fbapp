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

const PostIntsgram = () => {
  const [inst, setinst] = useState();
  // const [info, setinfo] = useState();


  useEffect(async() => {
    setinst(await displayTableau());
  },[]);

  const displayTableau = async() => {
 
 const info=await Instagram.Instapostinfo();
console.log(info)
 if(info){
  return <>
    {  info.data[0].data.map((element, key) => 
       


<CRow cols="1" colsMd="3" className="g-2"  key={key}>
<CCol xs>
<CCard className="h-100">
  <CCardBody>
  <iframe src={element.permalink+"embed"} width="400" height="480"  scrolling="no" allowtransparency="true"></iframe>

    <CCardTitle>{element.caption}</CCardTitle>
    
  <CCardTitle>media_type:{element.media_type}</CCardTitle>

    <CCardTitle>comments_count:{element.comments_count}</CCardTitle>

    <CCardTitle>like_count:{element.like_count}</CCardTitle>

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
        <button onClick={ () => { window.location.href = '/Instapostmore'; } }>detailspage</button>

        { inst}
        <script  src="//www.instagram.com/embed.js"></script>

        </div>
       
      </div>
    </div>
  )
}

export default PostIntsgram
