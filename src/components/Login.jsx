import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

function Login() {
	const [user, setUser] = useState('admin'); // admin default

	const onUserChange = (e) => {
		setUser(e.target.value);
	};

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
							onChange={(e) => onUserChange(e)}
							value={user}
							required
						/>
					</label>
					<label htmlFor=''>
						Password
						<input
							className='input-text'
							type='password'
							placeholder='At least 8 characters'
							required
						/>
					</label>
					<Link className='input-submit' to='/home'>
						Log in
					</Link>
				</form>
			</div>
		</div>
	);
}

export { Login };
