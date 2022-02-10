import React,{useState,useEffect} from 'react' 
import ExHook from './components/ExHook';
export default function App() {
  const [isOnline,setIsOnline] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsOnline(true)
    }, 1000);
  },[]);

  if(!isOnline) return <h1>Loading...</h1>

  return (
    <React.Fragment>
      <h1>React Hook</h1>
      <ExHook />
    </React.Fragment>
  );
}