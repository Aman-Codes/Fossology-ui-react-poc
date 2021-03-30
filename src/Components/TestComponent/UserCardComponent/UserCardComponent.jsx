import React, {Component} from "react"

class UserCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card border-success m-2" style={{maxWidth: "40rem"}}>
                    <div className="card-header">
                        <a href="#" className="text-dark">User: </a>
                        {this.props.user.id}
                    </div>
                    <div className="card-body text-success">
                        <p>
                            <a href="#" className="text-dark">UserName: </a>
                            {this.props.user.name}
                        </p>
                        <p>
                            <a href="#" className="text-dark">Description: </a>
                            {this.props.user.description}
                        </p>
                        <p>
                            <a href="#" className="text-dark">AccessLevel: </a>
                            {this.props.user.accessLevel}
                        </p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UserCardComponent;