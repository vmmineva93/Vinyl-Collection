import "./App.css"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from './components/header/Header'
import Home from "./components/home/Home"
import { Route, Routes } from 'react-router'
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/create/Create"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Logout from "./components/logout/Logout"
import UserProvider from "./providers/UserProvider"
import AuthGuard from "./guards/AuthGuard"
import GuestGuard from "./guards/GuestGuard"

function App() {

  return (
    <UserProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vinyls" element={<Catalog />}></Route>
            <Route path="/vinyls/:vinylId/details" element={<Details />}></Route>
            <Route element={<AuthGuard />}>
              <Route path="/vinyls/create" element={<Create />}></Route>
              <Route path="/vinyls/:vinylId/edit" element={<Edit />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Route>
            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
          </Routes>
        </main>
        < Footer />
      </div>
    </UserProvider>
  )
}

export default App
