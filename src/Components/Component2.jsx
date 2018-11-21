import React from 'react';
import styled from 'styled-components';

const Form=styled.form`
        text-align : center;
`;
// const initialState = {
//     name: "",
//     age : ""
// }
const Span =styled.span`
    color : red
`;

const Label =styled.span`
    color : blue
`;

const Component2=(props)=>{
    return (
        <React.Fragment>
            {/* you can also  use <> for shorter syntax of react fragment */}
            <Form >
                <div>
                    <Label >Name </Label>
                    <Span>{props.data.name}</Span>
                </div>
                <div>
                    <Label>Age </Label>
                    <Span>{props.data.age}</Span>
                </div>
            </Form>
        </React.Fragment>
    )
}
export default Component2;