import { useLocation } from "react-router-dom";

interface propsPage {
    title : string;
    images : string;
    url : string;
}

export const CardHeader:React.FC<propsPage> = ({title, images, url}) => {
    const location = useLocation();

    return (
        <div className={`${location.pathname === url ? 'bg-primary' : 'bg-transparent'}
            h-14 px-4 cursor-pointer rounded border flex items-center shadow hover:bg-primary`}>
            <img src={images} alt="" className="h-7 w-7 mr-4" />
            <p className="font-medium text-sm">{title}</p>
        </div>
    )
}
