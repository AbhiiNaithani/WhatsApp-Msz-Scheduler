import { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import axios from "axios";
import {io} from "socket.io-client";


const socket = io("http://localhost:3000",{});

function App() {
  const [qrCode, setQrCode] = useState("");
  const [session, setSession] = useState(0);

  const startSession = async () => {
    console.log('starting session');
    socket.emit('startSession', { id : '8383903099'});
    setSession(1);
  }
  
  useEffect(() => {
    // generateSession();
    socket.emit('connected', 'Hello from the Client');
    
    if(session){
      socket.on('qr', (data) => {
        console.log('qr ', data.qr);
        setQrCode(data.qr);
      })

      socket.on('ready',(data) => {
        console.log(data?.userId);
        setSession(0);
      })
    }
    
  },[session])

  return (
    <>
      <div>
        <button onClick={startSession}>Start</button>
  <QRCode
    value={qrCode}
  />
</div>
    </>
  )
}

export default App
