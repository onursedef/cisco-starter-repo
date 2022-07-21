import {useState } from "react";

function Pylon() {
    const [latency, setLatency] = useState();

    const ws = new WebSocket('ws://localhost:55455/');

    ws.onmessage = function (event) {
        const json = JSON.stringify(event.data)
        setLatency(json)
    }

    console.log(latency)

    return (
        <p>{latency}</p>
    )
}

export default Pylon;
