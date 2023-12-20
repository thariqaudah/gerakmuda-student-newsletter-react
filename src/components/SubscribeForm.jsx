import { useRef, useState } from 'react';
import { db } from '../firebase/app';
import { collection, addDoc } from 'firebase/firestore';

const SubscribeForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNo, setPhoneNo] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const formRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setSuccess(false);

		const newDoc = {
			name,
			email,
			phoneNo,
		};

		try {
			await addDoc(collection(db, 'students'), newDoc);

			setSuccess(true);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			setName('');
			setEmail('');
			setPhoneNo(null);

			formRef.current?.reset();
		}
	};

	return (
		<form
			className='w-full mx-auto p-6 bg-white rounded-lg shadow-lg lg:max-w-md'
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<h3 className='text-xl font-semibold mb-6 lg:text-2xl'>
				Dapatkan Sekarang
			</h3>

			{/* Success message */}
			{success && (
				<div className='py-2 px-3 rounded-md bg-[#D7F5F5] mb-6'>
					<p className='text-sm font-medium text-[#0F4745] lg:text-base'>
						Welcome! Silahkan cek email kamu untuk mendapatkan
						newsletter.
					</p>
				</div>
			)}

			<div className='mb-4 lg:mb-5'>
				<label
					htmlFor='name'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Nama Lengkap
				</label>
				<input
					type='text'
					id='name'
					className='bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-blue-50 focus:border-blue-500 block w-full p-2.5'
					placeholder='Nama Lengkap'
					required
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='mb-4 lg:mb-5'>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-blue-50 focus:border-blue-500 block w-full p-2.5'
					placeholder='name@example.com'
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='mb-4 lg:mb-5'>
				<label
					htmlFor='phoneNo'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					No Handphone
				</label>
				<input
					type='number'
					id='phoneNo'
					className='bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-blue-50 focus:border-blue-500 block w-full p-2.5'
					placeholder='XXX XXX XXX'
					required
					onChange={(e) => setPhoneNo(e.target.value)}
				/>
			</div>

			<button
				type='submit'
				disabled={loading}
				className='inline-block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-blue-300 disabled:cursor-default'
			>
				{!loading ? 'Kirimkan Newsletter' : 'Mengirim...'}
			</button>
		</form>
	);
};

export default SubscribeForm;
