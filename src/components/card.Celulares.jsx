export default function CardCelulares({nombre, imagen, precio}){
    return(
        <div className="bg-[#eef0f2] rounded-xl flex flex-col items-center gap-4 p-4">
        <img src={imagen} className="w-50 h-60 bg-cover rounded-xl" style={{backgroundSize: "contain"}}/>
        <h1 className="text-center text-2xl">{nombre}</h1>
        <h1>${precio}</h1>
        </div>
    );
    }
    