import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
function Main() {
    return <BrowserRouter>
        <Routes>
        <Route element={Login} path="/login"/>
        <Route element={Home} path="/"/>
        <Route element={Register} path="/register"/>
        </Routes>
        </BrowserRouter>
}
export default Main