import React from 'react';
import Button from './components/Button/Button.jsx'
import Nuvbar from './components/Nuvbar/Nuvbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
	return (
		<>
			<Nuvbar name='Andrey' type='normal'  size='small'/>
			<Button text='111' type='outline' size='big'/>
		</>	
		)
}

export default App;