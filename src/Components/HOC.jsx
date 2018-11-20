import React from 'react';

function HOC(WrappedComponent,Data){
    return class extends React.Component{
        constructor(props){
        super(props)
        this.state={
            data : ""
            }
        }
        componentWillMount(){
            this.setState({
                data : Data
            })
        }
        componentWillUnmount(){
            this.setState({
                data: ""
            })
        }
        render(){
            return(
                <WrappedComponent data={this.state.data} />
            )
        }

    }
}