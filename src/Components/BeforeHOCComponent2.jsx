import React from 'react';

const initialState = {
    name: "",
    age : ""
}
class BeforeHOCComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState
    }
    componentWillMount() {
        //you can fetch some data fromm some data source, I'm filling some dummy data
        this.setState({ name: "shakti singh", age : "21"})
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
                        <label>Age</label>
                        <div>{this.state.age}</div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default BeforeHOCComponent2;