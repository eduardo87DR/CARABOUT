import { Link } from "react-router-dom";
import Card from "./components/card";
import Navbar from "./components/navbar";
import 'boxicons'
import CardCelulares from "./components/card.Celulares";

export default function App() {
  return (
    <div className="">
      <div className="bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        <h1 className="text-black font-bold text-center">Compra buenos productos a<br /> buenos precios</h1>
        <button className="bg-gray-500 ">Comprar</button>
      </div>

      <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto text-black">
        <Card nombre="Celulares" imagen={"https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} />
        <Card nombre="Laptops" imagen={"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"} />
        <Card nombre="Tablets" imagen={"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} />
        <Card nombre="Accesorios" imagen={"https://images.unsplash.com/photo-1625467096769-fefb5ebdb54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80"} />
        <Card nombre="Audifonos" imagen={"https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} />
        <Card nombre="Cargadores" imagen={"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"} />
      </div>

      <div className="flex items-center justify-center h-96 pt-20 max-w-6xl m-auto text-black">
        <h2 className="text-6xl font-semibold text-center">Accesorios. Busca los <br /> accesorios que necesitas <br /> para tu celular</h2>
      </div>

      <div className="flex flex-row max-w-6xl m-auto">
        <div>
          <img className="rounded-[10px_0px_0x_10px]" src="https://blog.schoolspecialty.com/wp-content/uploads/2023/03/wiggle-room-with-logos.png"></img>
        </div>
        <div className="bg-[#242424] flex flex-col items-start justify-center p-8 gap-8 rounded-[0px_10px_10x_0px]">
          <h3 className="text-4xl"><span className="text-">Tienda.</span> <span className="text-gray-300">Compra tus productos de manera online.</span></h3>
          <button>Ver más</button>
        </div>
      </div>

      <div className="max-w-6xl m-auto">
        <h2 className="text-2xl font-semibold text-start pt-8">Los mejores celulares</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
          <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
          <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
          <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />

        </div>
      </div>

      <div className="bg-[#eef0f2] w-full p-8 mt-20 flex flex-col items-center justify-center gap-8 h-[] text-black">
        <h2 className="text-5xl text-center">Crea tu cuenta, empieza a buscar el producto que más te guste y empieza a comprar.</h2>
        <button className="bg-[#242424] text-white">Registrate</button>
      </div>

      <footer>
        <div className="bg-[#242424] flex flex-col items-center justify-center gap-8 p-8 w-full bottom-0">

        </div>
      </footer>



      {/* <h1 className="text-6xl">React App</h1>
      <p>Noelle Holiday from Deltarune</p>
      <Link to={"/acercade"} className="text-white hover:text-red-500">Acerca de</Link>

      <Card nombre={"Eduardo"} descripcion={"Esto es un componente desde otro lugar"}/>
      <Card nombre={"Adios"} descripcion={"Potaxio"}/> */}

    </div>
  );
}