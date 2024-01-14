  
function App() {
    return (
     <div>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
      </div>
    )
  }

    //it needs to accept some React component as an input
function CardWrapper({innerComponent}){
  //create a div which has a border
  return <div style={{border: "2px solid black"}}>
{innerComponent}
   </div>
}


  function TextComponent(){
    return <div>
      hi there
    </div>
  }



  export default App
