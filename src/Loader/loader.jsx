import Loader from 'react-loader-spinner'
export default class Spinner extends React.component {
 //other logic
   render() {
    return(
     <Loader 
        type="Puff"
        color="#00BFFF"
        height="100"	
        width="100"
     />   
    );
   }
}