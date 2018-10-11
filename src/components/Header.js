import React from 'react'
import logo from './../logo.svg';

//Responsive
import { Grid, Row, Col } from 'react-bootstrap';



export default class Header extends React.Component{

	render(){
	
		return(
		
		
			<Row className="headerContainer" >

				<Col xs={1} sm={6} md={6} lg={12} >
				  
					<div >
						HEADER!!!!!!
					</div>
				  
				</Col>

			</Row>		
		
		
		)
	
	}
	
}


