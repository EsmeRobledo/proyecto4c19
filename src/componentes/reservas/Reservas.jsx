import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import TablaReservas from './TablaReservas';
import './reservas.css'
import { Button } from 'react-bootstrap';


function Reservas() {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        fecha: "",
        hora: "",
        comensales: "",
        email: ""
    })
    function onSave(event) {
        /*Guardar la reservacion*/
        event.preventDefault();
        console.log("Este es el formulario a guardar", form);
    }

    function onChange(event) {
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function muestraReservas() {
        console.log("Log Hola");
    }

    useEffect(() => {
        muestraReservas();
    }, [])


    return (
        <>
            <div className="wrap">
                <div className="formContent">
                    <div className="Column">
                        <Form className='form-reserva' onSubmit={onSave}>
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control type="text" name='nombre' value={form.nombre} onChange={onChange} placeholder="Escribe tu nombre completo" />
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="text" name='telefono' value={form.telefono} onChange={onChange} placeholder="Escribe tu telefono" />
                            <Form.Label>Fecha de Reservacion:</Form.Label>
                            <Form.Control type="date" name='fecha' value={form.fecha} onChange={onChange} />
                            <Form.Label>Hora de Reservacion</Form.Label>
                            <Form.Control type="time" name='hora' value={form.hora} onChange={onChange} />
                            <Form.Label>Comensales</Form.Label>
                            <Form.Control type="text" name='comensales' value={form.comensales} onChange={onChange} />
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Escribe tu correo electronico" />

                            <Form.Text className="text-muted">
                                Tu informacion es privada y no sera compartida o reutilizada.
                            </Form.Text>
                            <Button type="submit" className='formButton'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                {/* <TablaReservas/> */}
            </div>
        </>
    )
}

export default Reservas;
