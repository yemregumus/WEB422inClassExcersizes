import React, {useState} from 'react'
import Button from './components/Button';
import Text from './components/Text';


export default function Home() {

  const [count, setCount] = useState(0);

  return(
    <>
    <h1> Week 4</h1>
    <p>Click Counter {count}</p>
    <Button setCount={setCount} count={count}/>
    <Text count={count}/>
  
    </>
  );


}
