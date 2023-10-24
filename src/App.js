import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(props) {
	let inputF = React.createRef()
	const test = (ar) => {
		console.log(inputF.current.value);
		console.log('123');
		console.log(ar);
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<input type="text" ref={inputF}></input>
				<button onClick={test}>click</button>
			</header>
		</div>
	);
}

export default App;
