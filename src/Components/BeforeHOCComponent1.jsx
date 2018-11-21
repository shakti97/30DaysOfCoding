import React from 'react';
import styled from 'styled-components';
import Component1 from './Component1';

const Form=styled.form`
        text-align : center;
`;
const Span =styled.span`
    color : red
`;

const Label =styled.span`
    color : blue
    margin-right : 0.2em
`;

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
            <Component1 data={this.state}/>
        )
    }
}
export default BeforeHOCComponent1;