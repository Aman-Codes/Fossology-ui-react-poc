import React, { Component } from 'react';
import { environment } from "../../environments/environment";
import TestAPIService from "../../_services/TestAPIService.js";
import LaodingSpinnerComponent from '../Common-tools/LoadingSpinnerComponent/LoadingSpinnerComponent';
import LicenseCardComponent from './LicenseCardComponent/LicenseCardComponent';
import UserCardComponent from './UserCardComponent/UserCardComponent';
// import User from "../../../interfaces/User.js"

class TestComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            testAPIService: new TestAPIService(),
            users: [],
            loader: false
        };
    }
    componentDidMount() {
        let loader = true;
        this.setState({ loader });
        const url = environment.apiurl + "users";
        const headers = {
            'Authorization': environment.apiToken,
        };

        this.state.testAPIService.sendHttpCall(url, headers).then((result) => {
            // console.log(result.data);
            const users = result.data;
            loader = false;
            this.setState({ loader });
            this.setState({users})
        }).catch((error) => {
            loader = false;
            this.setState({ loader });
            console.log(error);
        });
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="row pt-3">
                    <div className="col">
                        {this.state.loader === false && this.state.users.map((user) => <UserCardComponent key={user.id} user={user} />)}
                        {this.state.loader === true && <LaodingSpinnerComponent />}
                    </div>
                    <div className="col">
                        <LicenseCardComponent />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TestComponent;
