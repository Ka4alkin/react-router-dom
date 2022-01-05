import {Outlet, NavLink} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {

    const active = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <div className="Layout">
            <header>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/posts'>Blog</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {/*<NavLink className={active} to="/">Home</NavLink>
                <NavLink className={active} to="/posts">Blog</NavLink>
                <NavLink className={active} to="/about">About</NavLink>*/}
            </header>
            <main className="container">
                <Outlet/>
            </main>
            <footer>footer 2022</footer>
        </div>
    )
}

export default Layout;