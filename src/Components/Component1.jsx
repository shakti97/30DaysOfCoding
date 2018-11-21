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

const Component1=(props)=>{
    return (
        <React.Fragment>
            {/* you can also  use <> for shorter syntax of react fragment */}
            <Form >
                <div>
                    <Label >Name</Label>
                    <Span>{props.data.name}</Span>
                </div>
                <div>
                    <Label>Address</Label>
                    <Span>{props.data.address}</Span>
                </div>
                <div>
                    <Label >Mobile</Label>
                    <Span>{props.data.mobile}</Span>
                </div>
            </Form>
        </React.Fragment>
    )
}
export default Component1;