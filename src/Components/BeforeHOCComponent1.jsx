import React from 'react';
import styled from 'styled-components';

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
            <React.Fragment>
                {/* you can also  use <> for shorter syntax of react fragment */}
                <Form >
                    <div>
                        <Label >Name</Label>
                        <Span>{this.state.name}</Span>
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Span>{this.state.address}</Span>
                    </div>
                    <div>
                        <Label >Mobile</Label>
                        <Span>{this.state.mobile}</Span>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}
export default BeforeHOCComponent1;