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
import { UserContext } from "./context/UserContext"
import Edit from "./components/edit/Edit"
import Logout from "./components/logout/Logout"
import usePersistedState from "./hooks/usePersistedState"


function App() {

  const [authData, setAuthData] = usePersistedState('auth', {});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData)

  };

  const userLogoutHandler = () => {
    setAuthData({});
  }


  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vinyls" element={<Catalog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/vinyls/create" element={<Create />}></Route>
          <Route path="/vinyls/:vinylId/details" element={<Details />}></Route>
          <Route path="/vinyls/:vinylId/edit" element={<Edit />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </main>
      < Footer />
    </div>
    </UserContext.Provider>
  )
}

export default App
