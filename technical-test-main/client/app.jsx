// Implement your react app here

import React from 'react';
import { connect } from 'react-redux';
import { getData, deletePersonData, sortPersonData } from './actions/index.jsx';
class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.props.getData();
    }
    deleteData(referance) {
		this.props.deletePersonData(referance);
	}
	render() {
		if(this.props.personnel.loading){
			return(<div>Hello</div>)
		} else {
			const {personnel} = this.props.personnel;
			return(
			<React.Fragment>
				<h2>Personnel Data</h2>
				<button onClick={this.props.sortPersonData}>Sort By Name</button>
				<table>
				  <tr>
				    <th>Reference</th>
				    <th>Given Name</th>
				    <th>Family Name</th>
				    <th>Date Of Birth</th>
				    <th>Action</th>
				  </tr>
				  {personnel.map((person,index) => 
				  	<tr id="{person.Reference}">
				  		<td>{person.Reference}</td>
				  		<td>{person.GivenName}</td>
				  		<td>{person.FamilyName}</td>
				  		<td>{person.DateOfBirth}</td>
				  		<td><button onClick={() => this.deleteData(person.Reference)}>Delete</button></td>
				  	</tr>
				  )}
				</table>
			</React.Fragment>	
			)	
		}
		
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    deletePersonData: (Reference) => dispatch(deletePersonData(Reference)),
    sortPersonData: () => dispatch(sortPersonData())
  }
}
/*const mapDispatchToProps = {
  getData
 //deletePersonData: Reference => dispatch(deletePersonData(Reference))
}*/
const mapStateToProps  = (state) => ({personnel:state.personnel})
export default connect(mapStateToProps, mapDispatchToProps)(App);
