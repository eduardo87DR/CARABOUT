export default function Card({nombre, imagen}){
    return(
        <div className="h-40 p-4 rounded-2xl" style={{background:`url(${imagen})`, backgroundSize: `cover`}}>
            <h2 className="text-2xl">{nombre}</h2>
        </div>
    )
}