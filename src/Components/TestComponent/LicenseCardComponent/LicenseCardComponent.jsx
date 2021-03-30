import React, { Component } from "react";
import { environment } from "../../../environments/environment";
import TestAPIService from "../../../_services/TestAPIService.js";
import License from "../../../interfaces/License.js"
import LaodingSpinnerComponent from "../../Common-tools/LoadingSpinnerComponent/LoadingSpinnerComponent";

class LicenseCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            testAPIService: new TestAPIService(),
            license: new License(),
            shortName: "",
            loader: false,
            dataAvailable: false,
         }
    }

    fetchLicenseData = () => {
        let loader = true;
        this.setState({ loader });

        const url = environment.apiurl + "license";
        const shortName = this.state.shortName;
        const headers = {
            'Authorization': environment.apiToken,
            'Content-Type': 'application/json',
            'shortName': shortName
        };

        this.state.testAPIService.sendHttpCall(url, headers).then((result) => {
            console.log(result.data);
            const license = result.data;
            loader = false;
            this.setState({ license });
            this.setState({ loader });

            const dataAvailable = true;
            this.setState({ dataAvailable });
        }).catch((error) => {
            loader = false;
            this.setState({ loader });
            console.log(error);
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="card border-success" style={{maxWidth: "40rem"}}>
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-2"><a href="#">License</a> </div>
                                <div className="col-md-10">
                                <input itemType="text" itemID="shortName" value={this.state.shortName ? this.state.shortName : ''} onChange={event => this.setState({ shortName: event.target.value })} />
                                        <button onClick={this.fetchLicenseData} className="btn btn-primary ml-2">Fetch License</button>
                                </div>
                            </div>
                        </div>
                        {this.state.dataAvailable == true && <div className="card-body">
                            <p className="card-text"> <a href="#">License ID:</a> {this.state.license.id}</p> 
                            <p className="card-text"> <a href="#">License shortName:</a> {this.state.license.shortName}</p>
                            <p className="card-text"> <a href="#">License FullName:</a> {this.state.license.fullName}</p>
                            <p className="card-text"> <a href="#">License Risk:</a> {this.state.license.risk}</p>
                            <a href="#">License Text:</a>
                            <p>{this.state.license.text}</p>
                        </div>}
                    { this.state.loader == true && <LaodingSpinnerComponent /> }
                </div>
            </React.Fragment>
         );
    }
}
 
export default LicenseCardComponent;