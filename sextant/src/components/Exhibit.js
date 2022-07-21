import { Component } from "react";

class Exhibit extends Component {
    render() {
        return (
            <div className="exhibit">
                <h3>{this.props.cardText}</h3>
                <div className="exhibitChild">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Exhibit;