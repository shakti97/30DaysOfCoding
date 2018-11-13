import React from 'react';
import styled from 'styled-components';

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
                <Form >
                    <div>
                        <Label >Name </Label>
                        <Span>{this.state.name}</Span>
                    </div>
                    <div>
                        <Label>Age </Label>
                        <Span>{this.state.age}</Span>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}
export default BeforeHOCComponent2;