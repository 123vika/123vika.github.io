import React from 'react';
import { createRoot } from 'react-dom/client';

const Login = () => {
	return (
		<div>
			<h1>Login in your application</h1>
			<input type='text' placeholder='enter login' />
			<input type='text' placeholder='enter password' />
			<button>log-in</button>
		</div>
	);
};
export default Login;

const wrapper = document.getElementById('container');
const rootWrapper = createRoot(wrapper);
rootWrapper ? rootWrapper.render(<Login tab='home' />) : false;
