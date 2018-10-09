import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';

import './../styles.css'


export default class Header extends React.Component{

	render(){
	
		return(


			<Row className="headerContainer" >

				<Col xs={12} sm={8} md={6} lg={1} >
				  
					<div >
						HEADER!!!!!!
					</div>
				  
				</Col>

			</Row>
		
		
		)
	
	}
	
}


