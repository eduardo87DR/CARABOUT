export default function Imagenes({nombre, imagen}){
    return (
        <div className="h-40 p-4 rounded-2xl" style={{background:`url(${imagen})`, backgroundsize: `cover`}}>
            <h2 className="text-2xl">{nombre}</h2>
        </div>
    )
}