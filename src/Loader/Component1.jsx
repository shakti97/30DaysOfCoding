import React from 'react';

class Component1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts : []
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            response.json().then(data=>{
                console.log("data",data);
            })
        }).catch(error=>{
            console.log("error ",error);
        })
    }
    render(){
        return(
            <div>
                this.state.posts.map(element=>{
                    <div>
                    <ul>
                        <li>{element.userId}</li>
                        <li>{element.id}</li>
                        <li>{element.title}</li>
                        <li>{element.body}</li>
                    </ul>
                    <br/>
                    </div>
                })
            </div>
        )
    }
}
export default Component1;