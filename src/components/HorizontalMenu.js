import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';




export default class HorizontalMenu extends React.Component{

	render(){
	
		return(
		
			
			<Row className="horizontalMenuContainer" >

				<Col xs={1} sm={3} md={3} lg={12} className="horizontalMenuContainerDiv">
				  
					<div >
						MENU 1 | MENU 2 | MENU 3 | MENU 4 | MENU 5 | MENU 6
					</div>
				  

				</Col>

				
			</Row>			
						

		)
	
	}
	
}


/*

<ul class="sidenav">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>


*/
