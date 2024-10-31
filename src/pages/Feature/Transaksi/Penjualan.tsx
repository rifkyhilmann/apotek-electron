import { faAdd, faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Penjualan() {
    return (
        <div className="w-full h-max flex flex-col">
            <div className="flex items-center justify-between h-20 w-full ">
                <p className="text-2xl font-semibold">Penjualan</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                        <div className="w-32 h-max flex items-center">
                            <p className="text-sm font-medium">Mulai Tanggal</p>
                        </div>
                        <input type="date" className="px-2 border rounded text-sm" />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-32 h-max flex items-center">
                            <p className="text-sm font-medium">Sampai Tanggal</p>
                        </div>
                        <input type="date" className="px-2 border rounded text-sm" />
                    </div>
                </div>
            </div>
            <div className="my-4 border h-max  min-h-80 w-full rounded">

            </div>
            <div className="h-12 w-full flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 h-12  w-full text-gray-600 ">
                    <div className="h-10 w-32 border rounded-lg flex items-center cursor-pointer hover:bg-primary transition-all">
                        <FontAwesomeIcon icon={faAdd} className="mx-3" />
                        <p className="text-sm font-medium">Tambah</p>
                    </div>
                    <div className="h-10 w-32 border rounded-lg flex items-center cursor-pointer hover:bg-primary transition-all">
                        <FontAwesomeIcon icon={faFile} className="mx-3" />
                        <p className="text-sm font-medium">Detail</p>
                    </div>
                    <div className="h-10 w-32 border rounded-lg flex items-center cursor-pointer hover:bg-primary transition-all">
                        <FontAwesomeIcon icon={faTrash} className="mx-3 " />
                        <p className="text-sm font-medium">Hapus</p>
                    </div>
                </div>
                <p className="text-sm font-medium">@zerivo.technology</p>
            </div>
        </div>
    )
}
