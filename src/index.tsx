import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import Timer from './components/Timer';

const App = () => (
	<main>
		<Timer />
	</main>
);

ReactDOM.render(<App />, document.getElementById('app'));