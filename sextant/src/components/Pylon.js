import {useState } from "react";

function Pylon() {
    const [latency, setLatency] = useState();

    const ws = new WebSocket('ws://localhost:55455/');

    ws.onmessage = function (event) {
        const date = new Date();
        const json = JSON.parse(event.data)
        setLatency(date - json)
    }

    console.log(latency)

    return (
        <p>{latency} ms</p>
    )
}

export default Pylon;
