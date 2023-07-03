import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="bg-white text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center">
                <div>
                    <h1 className="text 2xl font-semibold ">
                        <Link to={"/"}>
                            <span className="text-black ">Mente Mejor</span>
                        </Link>
                    </h1>
                </div>
                <div>
                    <ul className="flex flex-row gap-8 ">
                        <Link to={"/"}>
                            <span className="text-black">Inicio</span>
                        </Link>
                        <li>Categorias</li>
                        <li>Ingresa</li>
                        <li>
                            <Link to="/acercade">
                                <span className="text-black ">Acerca de nosotros</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row border-2 p-2 rounded-xl gap-2">
                        <box-icon name='search' color="gray"></box-icon>
                        <input
                            className="bg-white outline-none " type="search" placeholder="Buscar"></input>
                    </div>
                    <div className="flex flex-row items-center px-4 gap-4">
                        <box-icon name='cart' color="gray"></box-icon>
                        <box-icon name='user-circle' color="gray"></box-icon>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}
