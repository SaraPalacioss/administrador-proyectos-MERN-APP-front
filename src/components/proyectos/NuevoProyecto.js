import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //extraer nombre de proyecto
    const {nombre} = proyecto;

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo proyecto
            </button>
            <form
                className="formulario-nuevo-proyecto"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
               <input
                    type="submit"
                    className="btn btn-primario btn-blok"
                    value="Agregar proyecto"
                />
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;