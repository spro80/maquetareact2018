import React, { Component } from 'react';
import logo from './logo.svg';

//import { Header } from './components'


import './App.css';
import './styles.css'



class Header extends Component {

	render() {
	
		return (
		
			<header className="headerContainer">
				<h1 className="headerContainer_h1"> HEADER! </h1>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			
		
		);
	
	}

}



class MenuHorizontal extends Component {

	render() {
	
		return (
		
			<div className="menuHorizontalContainer">
				<h1> Menu! </h1> 
			</div>
			
		
		);
	
	}

}


class Contenido extends Component {

	render() {
	
		return (
		
			<div className="contenidoContainer">
				<h1> Contenido del Sistema! </h1> 
			</div>
			
		
		);
	
	}

}



class Footer extends Component {

	render() {
	
		return (
		
			<div className="footerContainer"> 
				<p>
				Todos Los Derechos Reservados!!! 
				</p>
			</div>
		
		)
	
	}

}





class App extends Component {
  render() {
    return (
      <div className="App">
		
        
        <Header>
			
        </Header>
        
        
        
        <MenuHorizontal>
        
        </MenuHorizontal>
        
        
        
        <Contenido>
        
        </Contenido>
        
        
        <Footer>
        
        </Footer>


      </div>
    );
  }
}

export default App;
