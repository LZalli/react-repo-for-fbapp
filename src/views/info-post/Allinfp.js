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
  CRow,

 

} from '@coreui/react'
import Iframe from 'react-iframe';

const Allinfp = () => {

  const [data, setData] = useState();
 

  useEffect(async() => {
    setData(await displayTableau());
  },[]);



  const displayTableau = async() => {
    
    const info= await facebook.postfacebook();
console.log(info.data)
  if( info){
    return <>
      {   info.data.map((element, key) => 
         


<CRow cols="1" colsMd="3" className="g-2"  key={key}>
<CCol xs>
  <CCard className="h-100">
  <Iframe src={`https://www.facebook.com/plugins/post.php?href=${element.permalink_url}&show_text=true&width=500`} width="500" height="466" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe> 

    {/* <Iframe  src="https://www.facebook.com/plugins/post.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FBubbleHouseEnasser%2Fvideos%2F220708366607526%2F&show_text=false&width=560&t=0" width="560" height="315" style="border:none;overflow:hidden" scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></Iframe> */}
    <CCardBody>
      <CCardTitle>{element.permalink_url}</CCardTitle>

      <CCardTitle>{element?.likes?.summary?.total_count ? element?.likes?.summary?.total_count :0}</CCardTitle>
      <CCardTitle>{element?.shares?.count ? element?.shares?.count:0 }</CCardTitle>

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

                  {data}
              
        </div>
       
      </div>
    </div>
  )
}

export default Allinfp
