import React,{useEffect, useState} from 'react'

export default function ExHook(){

    const [isLoggined,setIsLoggined] = useState(false);
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("react hook")
    const [user,setUser] = useState({id:1,name:"kotbass"});
    const [userLists,setUserLists] = useState([{id:1,name:"Tony"},{id:2,name:"Payut"}]);


    useEffect(() => { console.log("จะทำงานแค่ครั้งเดียว") },[])
    useEffect(() => { console.log("ทุก state") })
    useEffect(() => { console.log("จะทำงานแค่ state count ") },[count])
    

    return (
        <React.Fragment>
            <p>isLoggined: {isLoggined ? 'Loggined':'Logout'}</p>
            <button onClick={() => setIsLoggined(!isLoggined)}>
                {isLoggined ? 'Logout':'Login'}
            </button>
            <hr />
            <p>count: {count}</p>
            <button onClick={() => setCount(prev => prev+1)}>
                Count {count}
            </button>
            <hr />
            <p>title: {title}</p>
            <button onClick={() => setTitle("react hook change text")}>
                click
            </button>
            <hr />
            <p>user: {JSON.stringify(user)}</p>
            <button onClick={() => setUser({...user,name:"kotdev"})}>
                click
            </button>
            <hr />
            <p>userLists: {JSON.stringify(userLists)}</p>
            <button onClick={() => setUserLists([...userLists,{id:3,name:"PraWit"}])}>
                click
            </button>
            <hr />
        </React.Fragment>
    );
}