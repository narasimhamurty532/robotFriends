import React, { Component } from 'react';
import 'tachyons';

const Hello = (props) => {
			return (
		<div className = "f1 tc">
		<h1>Hello World</h1>
		<p>{props.greeting}</p>
		<p>{props.greet}</p>
		</div>
		);
		
	
}


export default Hello;