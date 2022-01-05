import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

    const match = useMatch(to);

    /*console.log(useMatch)*/

    return (
        <Link
            to={to}
            style={{
                color: match ? 'indigo' : 'white'
            }}
        >
            {children}
        </Link>
    );
}

export default CustomLink;