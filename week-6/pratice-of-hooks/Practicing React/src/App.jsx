import './App.css'

function App(){

  const cards= [
    {
      id:1,title:"Card 1",content:"content 1"
       
    },{
      id:2,title:"Card 2",content:"content 2"
    },{
      id:3,title:"Card 3",content:"content 3"
    }
  ] 


  return <> 
    <div className='card-container'>
    <div className='card'>
      {cards.map((card)=>{
        return <div key={card.id} className='card'>
            <h1>{card.title}</h1>
            <h2>{card.content}</h2>
        </div>
      })}
    </div>
    </div>
  </>
}

export default App;