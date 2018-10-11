import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';

import './../styles.css'


export default class Contenido extends React.Component{

	render(){
	
		return(
		
			
			<Row className="contenidoContainer" >

				<Col xs={1} sm={6} md={6} lg={12} >
				  
					<div >
						CONTENIDO!!!!!!
					</div>
				  
				</Col>

			</Row>
			
						

		)
	
	}
	
}


