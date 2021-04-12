
import React, {useState,useEffect} from 'react'
import {graphql} from 'gatsby'
import Lightbox from 'react-spring-lightbox'
import { FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import Img from 'gatsby-image/withIEPolyfill'
import titel from './metsch.json'

import {Heading} from '@chakra-ui/react'




const GWerner = ({data}) => {
  

  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [images,setImages]=useState(null)
  const [light,setLight]=useState(false)
  
 const sketchdaten=titel.sketchdaten
  console.log(sketchdaten[0].titel)
    function los(daten){
      let mdat=[]
       daten.map((item,index) => {
       
      //   let a=item.src
      //   let b=a.lastIndexOf('/')
      //   let c = a.slice(b+1,a.length)
      //   let d=c.split('.')
      // let arr= parseInt(d[0])
              return mdat.push({src:item.src,id:index}) 
       })
     // mdat.sort((a,b) => (parseInt(a.id) > parseInt(b.id)) ? 1: -1)
     
      return mdat
      
    }

  const gotoPrevious = () =>
      currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
      currentImageIndex + 1 < images.length-1 &&
      setCurrentIndex(currentImageIndex + 1);

   useEffect(()=>{
       function makeImg(){
        const myImages= data.sketch.nodes.map((item,index)=> {
     
          return item.childImageSharp.fluid
         })
        
         let daten = los(myImages)
        
         return setImages(daten)
        
      }
      makeImg()
      
      
   },[data])   

   function handleClose(){
       setLight(!light)
   }
   function handleClose2(index){
   
    setCurrentIndex(index)
    
    setLight(!light)
 
    
}
   function mach(){
     
       setCurrentIndex(currentImageIndex<images.length?currentImageIndex+1:0)
     
   }
   function lmach(){
     
      currentImageIndex>=1 &&
      setCurrentIndex(currentImageIndex-1)
  }
 
  const CustomFooter =()=> {
    
      return <span style={{padding:4,left:'2%',zIndex:55000,color:'white',textAlign:'center',}}>
           {sketchdaten[currentImageIndex].titel}<br/>{currentImageIndex+1} / {images.length} </span>
  }

   const CustomLeftArrowButton =()=> {
     
   return <button style={{border:"blue",position:'fixed',top:'50%',right:'1%',zIndex:2000}} 
   onClick={()=>mach()}><span style={{color:'white',cursor:'pointer',fontSize:'1.4rem'}}>
     {currentImageIndex<images.length-1?<FaArrowCircleRight />:null}</span></button>
  }
  const CustomRightArrowButton =()=> {
    
      return <button style={{position:'fixed',top:'50%',left:'1%',zIndex:2000}} 
      onClick={()=>lmach()}>
        <span style={{backgroundColor:"black", color:'white',cursor:'pointer',fontSize:'1.4rem'}}>
          {currentImageIndex>0?<FaArrowCircleLeft />:null}</span></button>
  }
 
  const CustomCloseButton =()=> {
      return <button style={{position:'fixed',top:'30px',right:'1%',zIndex:20000}} 
      onClick={()=>handleClose()}>
        <span style={{color:'white',display:"block",fontSize:'1.9rem', cursor:'pointer'}}>
          x </span>
      </button>
  }
  return (
      <>
         <div
        style={{
          display:"flex",
          flexDirection:"column",
          width:"100%",
          margin:"0px auto 0px auto",
          padding:0,
          maxWidth:"960px"
          
        }}>
       <Heading
         fontSize="25px"
        fontWeight="500"
         textAlign="center"
         paddingTop="30px"
         margin="0"
       >Dokumente zum Wernerkult</Heading>
         
       
       <h2
          style={{
             textAlign:"center",
             padding:"0",
             margin:"0 0 30px 0",
             fontSize:"20px",
             
          }}
       
        >   Eine Auswahl</h2>
       
       {typeof window && images &&
       <button style={{
        backgroundColor:"transparent",
        marginBottom:'20px',
       }}
       onClick={()=>{
        setCurrentIndex(0)
        handleClose()
        return 
      }} 
      onKeyPress={()=>{
        setCurrentIndex(0)
        handleClose()
        return 
      }} 
       >

<Img 
       style={{
          objectFit:'cover',
          width:'100%',
          height:'auto',
          maxHeight:'500px',
          objectPositionX:'50%',
          objectPositionY: '50%',
       }} fluid={data.sketch.nodes[27].childImageSharp.fluid} alt="Bildergalerie" />
</button>

}
</div>
{
  images ?
  <div style={{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    maxWidth: 960,
    margin:'auto'
  }}>
  { images.map((item,index)=> {
    return <div key={index} 
    onKeyPress={()=>handleClose2(index)}
    onClick={()=>handleClose2(index)}
    style={{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      margin:1,
      backgroundImage:`url(${item.src})`,
      backgroundRepeat:`no-repeat`,
      height:"150px",
      width:"150px",
      backgroundPositionX:"1",
      backgroundPositionY:"1",
      backgroundSize:'cover',
      cursor:'pointer'
   
    }}
    > 
 

    </div>
  })}
</div>
:<div className="mybounce">
<span>...lade Fotos</span>
</div>
}
       
       { light?
           <Lightbox
           isOpen={true}
           onPrev={gotoPrevious}
           onNext={gotoNext}
           images={images}
           currentIndex={currentImageIndex}
           style={{background:'black'}}
           /* Add your own UI */
           //renderHeader={() => <CustomHeader />}
           renderFooter={() => <CustomFooter />}
           renderPrevButton={() => <CustomLeftArrowButton />}
           renderNextButton={() => <CustomRightArrowButton />}
           renderCloseButton={() => <CustomCloseButton />}
          // singleClickToZoom
 
           
          //  pageTransitionConfig={{
          //     from: { transform: "scale(0.75)", opacity: 0 },
          //     enter: { transform: "scale(1)", opacity: 1 },
          //     leave: { transform: "scale(0.75)", opacity: 0 },
          //     config: { mass: 1, tension: 320, friction: 32 }
          //   }}
       />
       

           :null

       }
       {
          light && <div>
            <CustomCloseButton />
       
        <CustomFooter/>
        
        </div>
          }
         
    
      </>
  );
};

export default GWerner;  

export const sketchQuery = graphql`
    query {
        
        sketch: allFile (filter: {sourceInstanceName: {eq: "werner"}}){
          nodes {
           relativePath
           childImageSharp {
            fluid (maxWidth: 1200) {
             ...GatsbyImageSharpFluid
            }
           } 
          
           
         }
         }
    }
    `


   