import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1 className='bg-red-500'>A blog app with appwrite</h1>
    </>
  )
}

export default App
