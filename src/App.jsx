import SubscribeForm from './components/SubscribeForm';

const App = () => {
	return (
		<>
			<section className='relative py-12 lg:py-24 after:block after:content-[""] after:w-screen after:lg:w-[65vw] after:h-full after:absolute after:left-0 after:top-0 after:-z-50 after:bg-gradient-to-r after:from-[#FDFFFE] after:via-[#EEF9FF] after:to-[#D7E7FE] after:rounded-br-[70px] after:lg:rounded-br-3xl'>
				<div className='container grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16'>
					{/* Hero text */}
					<div>
						<h1 className='text-4xl font-bold text-blue-950 mb-6 lg:text-5xl lg:mb-8'>
							Ayo belajar bareng!
						</h1>

						<p className='text-base mb-4 text-slate-900 lg:text-lg lg:mb-5'>
							Yuk belajar bareng kalau kamu butuh temen belajar,
							mentor, atau tulisan yang menginspirasi. Kita akan
							sharing insight bermanfaat seputar:
						</p>

						<ul className='max-w-md text-slate-900 list-inside'>
							<li className='flex items-center text-base lg:text-lg font-normal text-slate-900 mb-3'>
								<svg
									className='w-5 h-5 me-2 text-blue-500 flex-shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
								</svg>
								Motivasi menemukan passion terbaik
							</li>
							<li className='flex items-center text-base lg:text-lg font-normal text-slate-900 mb-3'>
								<svg
									className='w-5 h-5 me-2 text-blue-500 flex-shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
								</svg>
								Tips dan Trik seputar pendidikan
							</li>
							<li className='flex items-center text-base lg:text-lg font-normal text-slate-900 mb-3'>
								<svg
									className='w-5 h-5 me-2 text-blue-500 flex-shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
								</svg>
								Dan masih banyak lagi!
							</li>
						</ul>
					</div>

					{/* Hero form */}
					<div>
						<SubscribeForm />

						{/* <img
							className='w-full object-cover'
							src='/undraw_creative_thinking_re_9k71.svg'
							alt='Belajar dan sharing bareng'
						/> */}
					</div>
				</div>
			</section>

			<section className='py-12 lg:py-24'>
				<div className='container grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16'>
					<div>
						<span className='inline-block p-3 mb-5 bg-[#FDDCEF] rounded-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#D55A90'
								class='w-8 h-8'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
								/>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
								/>
							</svg>
						</span>
						<p className='text-xl font-semibold text-blue-950 mb-3 lg:text-2xl lg:mb-4'>
							Motivasi sukses
						</p>
						<p>
							Mendapatkan motivasi dan tambahan energi untuk terus
							bertumbuh dan sukses.
						</p>
					</div>
					<div>
						<span className='inline-block p-3 mb-5 bg-[#FAEEE2] rounded-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#EFAD70'
								class='w-8 h-8'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9'
								/>
							</svg>
						</span>
						<p className='text-xl font-semibold text-blue-950 mb-3 lg:text-2xl lg:mb-4'>
							Insight bermanfaat
						</p>
						<p>
							Insight dan informasi bermanfaat akan membantu kita
							menjadi pelajar yang unggul.
						</p>
					</div>
					<div>
						<span className='inline-block p-3 mb-5 bg-[#D7F5F5] rounded-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#70C0BE'
								class='w-8 h-8'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
								/>
							</svg>
						</span>
						<p className='text-xl font-semibold text-blue-950 mb-3 lg:text-2xl lg:mb-4'>
							Komunitas sosial
						</p>
						<p>
							Komunitas sosial kebaikan akan membantu untuk terus
							belajar bareng-bareng.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default App;
