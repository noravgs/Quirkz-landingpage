function App() {
	return (
					<div className="min-h-screen flex flex-col text-white">
									<main className="container mx-auto px-6 pt-16 flex-1 text-center">
													<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
															Coming Soon
													</h2>
													<h1 className="text-3xl md:text-6xl lg:text-8xl font-black mb-8">
															Quirkz: inspiring individuality with one t-shirt at a time.
													</h1>

													<form action="https://www.getrevue.co/profile/noravgs/add_subscriber" 
													method="post"  
													target="_blank">
													<div className="flex flex-col md:flex-row justify-center mb4">
													<input 
													className="revue-form-field" 
													placeholder="E.g. bob@bobson.com" 
													type="email" 
													name="member[email]" 
													className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-40 focus:bg-opacity-60 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none" />
													<input 
													type="submit" 
													value="Join Today" 
													name="member[subscribe]"
													className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150" />
											</div>
											
											<div className="opacity-75 italic">
													By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
	</form>
									</main>
									<footer className="container mx-6 p-6">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<p className="mb-4 md:mb-0 md:text-xl">Built by Nora Vargas</p>

				<div className="flex -mx-6">
					<a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
					<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
					<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
				</div>
			</div>
		</footer>
					</div>
	)
}

export default App
