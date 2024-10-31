import { faDatabase, faDollar, faFileAlt, faGear } from "@fortawesome/free-solid-svg-icons"
import ButtonNavbar from "../element/ButtonNavbar";

const Navbar = () => {

    return (
        <div className={`
            w-full h-12 border-b flex items-center gap-3 px-4 font-poppins text-sm`}>
            <ButtonNavbar 
                icons={faDollar}
                title="Transaksi"
                url="/"
            />
            <ButtonNavbar 
                icons={faDatabase}
                title="Master"
                url="/database"
            />
            <ButtonNavbar 
                icons={faFileAlt}
                title="Laporan"
                url="/database"
            />
            <ButtonNavbar 
                icons={faGear}
                title="Pengaturan"
                url="/database"
            />
        </div>
    )
}

export default Navbar