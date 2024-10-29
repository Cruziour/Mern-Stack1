import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import { Dashboard, Login, Signup, Home } from './components'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}> 
        <Route path='/' element={<Home />}/>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
      </Route>

    )
  )


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
