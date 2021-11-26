import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

function Login() {
	return (
		<div className='login-page'>
			<div className='wrapper'>
				<div className='form-header'>
					<h2>Log in</h2>
					<button>
						<FcGoogle />
						Login with Google
					</button>
					<div className='divider'></div>
				</div>
				<form className='form-container' action='#'>
					<label htmlFor='user'>
						User
						<input
							className='input-text'
							type='text'
							placeholder='Leslie Alexander'
							required
						/>
					</label>
					<label htmlFor=''>
						Password
						<input
							className='input-text'
							type='password'
							placeholder='At least 8characters'
						/>
					</label>
					<Link to='/home'>
						<input className='input-submit' type='button' value='Log in' />
					</Link>
				</form>
			</div>
		</div>
	);
}

export { Login };
