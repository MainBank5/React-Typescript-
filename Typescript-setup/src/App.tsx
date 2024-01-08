import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
import Reducer from "./components/Reducer"
import { useState } from "react"
import Effect from "./components/Effect"
import Ref from "./components/Ref"
function App() {

  const [count, setCount] = useState <number>(2)
  
  return (
    <>
     <Heading title="Hello Eliud"/>
     <Section title=" My provided title">
      This is my section - passed as children
     </Section>

     <Counter setCount ={setCount}>Count is: {count}</Counter>
     <List items ={["coffee", "taco", "rice"]} render={(item:string) => <span>{item}</span>}/>
     <Reducer/>
     <Effect/>
     <Ref/>
    </>
  )
}

export default App
