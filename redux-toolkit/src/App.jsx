import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout"
import { Payment, ShoeItem } from "./components"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ShoeItem />}/>
        <Route path='payment' element={<Payment />}/>
      </Route>
    )
  )
  

  return (
    <>
    <div className="min-w-full flex md:flex-row">
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
