import Navbar from "../components/layout/Navbar"
import { IconsPayment } from "../assets"
import { CardHeader } from "../components/element/cardHeader"
import { Route, Routes } from "react-router-dom"
import Penjualan from "./Feature/Transaksi/Penjualan"

export const Pages = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="mx-7 h-20">
                <div className="flex items-center justify-between my-7">
                    <div className="flex items-center gap-4">
                        <CardHeader 
                            images={IconsPayment}
                            title="Penjualan"
                            url="/"
                        />
                        <CardHeader 
                            images={IconsPayment}
                            title="Pemasukan"
                            url="/pemasukan"
                        />
                        <CardHeader 
                            images={IconsPayment}
                            title="Cashflow"
                            url="/cashflow"
                        />
                    </div>
                    <p className="text-2xl font-bold text-blue-500">
                        Nama Apotek Anda
                    </p>
                </div>
                <hr />
                <div className="my-5">
                    <Routes>
                        <Route path="/" element={<Penjualan />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
