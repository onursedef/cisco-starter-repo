import { Component } from "react";


class Banner extends Component {
    render() {
        return (
            <div className="banner">
                {this.props.children}
            </div>
        )
    }
}

export default Banner;