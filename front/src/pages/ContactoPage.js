import './../styles/contacto.css'; 
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value // forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  }



    return (
    <main className="holder contacto">
    <div>
        <h2>Contacto rapido</h2>
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">

            <p>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

            </p>
            <p>
                <label for="nombre">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />

            </p>
            <p>
                <label for="nombre">Telefono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />

            </p>
            <p>
                <label for="nombre">Mensaje</label>
                <label htmlFor="mensaje"></label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>

            </p>
            <p className="acciones"><input type="submit" value="Enviar" /></p>

        </form>
        {sending ? <p>Enviando...</p> : null}
      {msg ? <p>{msg}</p> : null}




            </div>
            <div className="datos">
                <h2> Vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 4589-5844</li>
                    <li>Email:contacto@transportex.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
                </div>
    </main>
    )
      }


export default ContactoPage;
