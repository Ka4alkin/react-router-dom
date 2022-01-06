import {Routes, Route, Link} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from "./components/layout";
import Singlepage from "./pages/Singlepage";

const App = () => {
    return (
        <div className="App">

            {/*<div>
                <h1>React router</h1>
            </div>*/}
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='about' element={<Aboutpage/>}/>
                    <Route path='posts' element={<Blogpage/>}/>
                    <Route path='posts/:id' element={<Singlepage/>}/>
                    <Route path='*' element={<Notfoundpage/>}/>
                </Route>

            </Routes>
        </div>
    )
}

export default App;