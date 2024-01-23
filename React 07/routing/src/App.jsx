import { countAtom } from "./store/atoms/Count";
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
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("rendered")
 return <div>
    <button onClick={() => {
      setCount(count => count +1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App;