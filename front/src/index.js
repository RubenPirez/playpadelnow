import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import App from './pages/panel';
import Login from './pages/login';
import Registro from './pages/registro';

ReactDOM.render(
	<div className = "container mt-5">
		<BrowserRouter>
			<Route exact path='/' component={Login}></Route>
			<Route path='/registro' component={Registro}></Route>
			<Route path="/app/:category?/:subcategory?/:id?" component={App}></Route>
		</BrowserRouter>
	</div>,
  document.getElementById('root')
);

