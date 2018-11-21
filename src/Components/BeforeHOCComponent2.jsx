import React from 'react';
import styled from 'styled-components';
import Component2 from './Component2';
const Form=styled.form`
        text-align : center;
`;
const initialState = {
    name: "",
    age : ""
}
const Span =styled.span`
    color : red
`;

const Label =styled.span`
    color : blue
`;
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
                <Component2 data={this.state}/>
            </React.Fragment>
        )
    }
}
export default BeforeHOCComponent2;