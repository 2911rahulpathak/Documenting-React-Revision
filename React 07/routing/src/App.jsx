import { countAtom, evenSelector } from "./store/atoms/Count";
import { RecoilRoot,useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  
  return (
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    
    <CountRenderer/>
    <Buttons />
  </div>
}
//when you need both of them you use:
// const [count,setCount] = useRecoilState(countAtom)

function CountRenderer() {
    const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer></EvenCountRenderer>
    </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? null : "it is even"}
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(countAtom)
 return <div>
    <button onClick={() => {
      setCount(count => count +1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}
function Even(){
  const count = useRecoilValue(countAtom);
  return <div>
    {(count %2 == 0 ? "It is even" : null)}
  </div>
}

export default App;