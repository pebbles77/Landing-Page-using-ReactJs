import 'tailwindcss/tailwind.css';

function App() {
  
  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-r from-green-400 to-blue-500">
      <main className='container mx-auto px-6 pt-16 flex-1 text-center'>

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          WELCOME to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-6xl font-black mb-8">
          The Crocheting Club
        </h1>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-20 w-fit mx-auto mb-8 rounded-full">
          10,000 members
        </div>

          <form 
            action="https://www.getrevue.co/profile/Roopsy/add_subscriber" 
            method="post" 
            target="_blank">

            <div className="flex flex-col md:flex-row justify-center mb-4">
              <input 
                className="text-lg md:text-2xl placeholder:text-gray-200 placeholder:italic py-4 px-6
                md:px-10 md:py-3 lg:py-4 lg:px-10 bg-black outline-none bg-opacity-10 focus:bg-opacity-20 duration-150 
                rounded-full md:rounded-tr-none md:rounded-br-none mb-2 md:mb-0" 
                placeholder="Your email address..." 
                type="email" 
                name="member[email]"/>  
              
              <input 
              className='bg-blue-700 rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6
              md:px-10 md:py-3 lg:py-4 lg:px-10 cursor-pointer hover:opacity-70 duration-150'
              type="submit" 
              value="Join us today" 
              name="member[subscribe]" />
            </div>
            <div className="opacity-75 italic">
                By subscribing, you agree with Revue’s <nbsp/>
                <a target="_blank" href="https://www.getrevue.co/terms" 
                className=" hover:opacity-80 hover:text-black duration-150">Terms of Service</a> and <nbsp/>
                <a target="_blank" href="https://www.getrevue.co/privacy" 
                className=" hover:opacity-80 hover:text-black duration-150">Privacy Policy</a>.
            </div>
          </form>

      </main>
      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <p className='font-bold'>💚 RUPA </p>
        <div className='flex -mx-6'>
          <a href="#" className="mx-3 hover:opacity-80 hover:text-black duration-150">About us</a>|
          <a href="#" className="mx-3 hover:opacity-80 hover:text-black duration-150">Privacy</a>|
          <a href="#" className="mx-3 hover:opacity-80 hover:text-black duration-150">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
