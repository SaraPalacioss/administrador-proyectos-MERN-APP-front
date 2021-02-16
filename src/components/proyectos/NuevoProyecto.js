import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer nombre de proyecto
    const {nombre} = proyecto;

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    };

    //cuando el usuario envía un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto

        //agregar al state

        //reiniciar el form
    }


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
                onSubmit={onSubmitProyecto}
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