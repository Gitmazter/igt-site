import axios from "axios"
import { useEffect, useState } from "react"


export const Main = () => {
    const [pubkey, setPubkey] = useState('')
    const [response, setResponse] = useState()

    const handleChange = (e) => {
        setPubkey(e.target.value)
    }

    useEffect(() => {
        console.log(pubkey);
    },[pubkey])

    useEffect(() =>{
        console.log(response);
    }, [response])

    const onSubmit = async () => {
        let HelloUrl = `https://985a-1-53-221-161.ngrok-free.app/user/?address=${pubkey}`
        console.log('getting');
        axios
            .post(HelloUrl)
                .then((response) => {
                    setResponse(response.data)
                })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        response === undefined 
        ? 
            <main className="App-main">
                <img src="./ISC.jpg" className="logo"></img>
                <h1>IGT Demo Page Beta v.0.2.0</h1>
                <p>Input Pubkey To Get Current IGT rewards</p>
                <form>
                    <input type="text" onChange={handleChange}></input>
                    <br/>
                    <button type="button" onClick={onSubmit}>OK</button>
                </form>
            </main>
        :
            <main className="App-main">
                <img src="./ISC.jpg" className="logo"></img>
                <h1>IGT Demo Page Beta v.0.2.0</h1>
                <p>Input Pubkey To Get Current IGT rewards</p>
                <form>
                    <input type="text" onChange={handleChange}></input>
                    <br/>
                    <button type="button" onClick={onSubmit}>OK</button>
                </form>
                <p>User: {response.User}</p>
                <p> IGT balance: {response.IGT_balance}</p>
            </main>
    )
}