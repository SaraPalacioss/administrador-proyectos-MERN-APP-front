import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS}from '../../types';


const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de Sitio Web'},
        {id: 4, nombre: 'MERN'}
    ]

    const initialState = {
        proyectos: [],
        formulario: false
    };

    //dispach para ejecutar las acciones
    const [state, dispach] = useReducer(proyectoReducer, initialState);

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispach({
            type: FORMULARIO_PROYECTO
        })
    };

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispach({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    };

    //agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;