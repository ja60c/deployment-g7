import { useState } from 'react';

function TarjetaPost() {
    const [ contador, setContador ] = useState(0)
    const incrementarContador = () => setContador(contador+1);
    const decrementarContador = () => setContador(contador-1);

    return(
        <div className="tarjeta-post">
            <h3 className="tarjeta-titulo">Un post de Jacqueline Callejas</h3>
            <p className="tarjeta-descripcion">Hola, soy Jacqueline y estoy aprendiendo a crear apps en react y subirlas a través de Netlify ✨</p>
            <div className="tarjeta-botones">
                <button className="tarjeta-boton" onClick= {decrementarContador}>-</button>
                <span className="contador"> {contador} </span>
                <button className="tarjeta-boton" onClick= {incrementarContador}>+</button>
            </div>
            
        </div>

    )
}

export default TarjetaPost