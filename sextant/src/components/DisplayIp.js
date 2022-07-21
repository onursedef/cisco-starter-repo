import { Component } from "react";

class DisplayIp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        }
    }
    
    componentDidMount(){
        fetch(this.state.url)
        .then(reponse => reponse.json())
        .then(data => this.setState({ipAddress: data.ip}))
    }


    render () {
        return (
            <p>{this.state.ipAddress}</p>
        )
    }
}

export default DisplayIp;