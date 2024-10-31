import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface navProps {
    title : string;
    icons : IconDefinition;
    url : string;
}

const ButtonNavbar:React.FC<navProps> = ({icons, title, url}) => {
    return (
        <Link to={url}>
            <div className={` ${location.pathname === url ? 'text-white bg-blue-500' : 'bg-transparent text-gray-600'} border 
                border-gray-600 hover:bg-blue-500 hover:text-white flex items-center gap-2 cursor-pointer h-8 px-3 rounded `}>
                <FontAwesomeIcon icon={icons} />
                <p className="font-medium">{title}</p>
            </div>
        </Link>
    )
}   

export default ButtonNavbar