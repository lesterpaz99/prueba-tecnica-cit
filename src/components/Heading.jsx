import { Link } from 'react-router-dom';
import { ImBoxAdd } from 'react-icons/im';

function Heading() {
	return (
		<header className='bg-gray-800 flex items-center justify-between'>
			<div className='grid place-items-center pl-4'>
				<Link to='/home'>
					<h5 className='text-gray-100 font-bold text-2xl'>Product App</h5>
				</Link>
			</div>
			<div className='flex text-right px-4 py-2 m-2'>
				<Link to='/add'>
					<button className='bg-green-300 hover:bg-green-400 px-4 py-2 rounded-lg flex items-center gap-2'>
						Add new product <ImBoxAdd />
					</button>
				</Link>
			</div>
		</header>
	);
}

export { Heading };
