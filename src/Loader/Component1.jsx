import React,{Component} from 'react';
import Spinner from './loader';

class Component1 extends Component{
    constructor(props){
        super(props);
        this.state={
            posts : ""
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            response.json().then(data=>{
                console.log("data",data);
                this.setState({
                    posts : data
                })
            })
        }).catch(error=>{
            console.log("error ",error);
        })
    }
    render(){
        return(
            <div>
                {this.state.posts ? this.state.posts.map(element=>{
                    return <div>
                    <ul>
                        <li >{element.id}</li>
                        <li >{element.title}</li>
                        <li >{element.body}</li>
                    </ul>
                    <br/>
                    </div>
                }) : <center><Spinner/></center>}
            </div>
        )
    }
}
export default Component1;