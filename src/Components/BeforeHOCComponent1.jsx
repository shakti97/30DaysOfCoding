import React from 'react';

const initialState = {
    name: "",
    address: "",
    mobile: ""
}
class BeforeHOCComponent1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState
    }
    componentWillMount() {
        //you can fetch some data fromm some data source, I'm filling some dummy data
        this.setState({ name: "shakti singh", address: "XYZ,New Delhi", mobile: "971718XXXX" })
    }
    componentWillUnmount() {
        this.setState(initialState);
    }
    render() {
        return (
            <React.Fragment>
                {/* you can also  use <> for shorter syntax of react fragment */}
                <form >
                    <div>
                        <label >Name</label>
                        <div>{this.state.name}</div>
                    </div>
                    <div>
                        <label>Address</label>
                        <div>{this.state.address}</div>
                    </div>
                    <div>
                        <label >Mobile</label>
                        <div>{this.state.mobile}</div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default BeforeHOCComponent1;