import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"

const AppRouter = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Register/>}/>
          <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<About />} />
            <Route path="sales" element={<Newb />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
          </Route>
        </Route>
        </Routes>
      </Router> */}
      {/* <Register /> */}
      <Dashboard />
    </div>
  )
}

export default AppRouter