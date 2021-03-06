import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

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
        if(nombre === '') {
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto);

        //reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    //mostrar el formulario
    const onClickFormulario =()=> {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo proyecto
            </button>
            {
                formulario
                ?(
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
                )
                : null
            }
            {errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>: null}
        </Fragment>
     );
}
 
export default NuevoProyecto;