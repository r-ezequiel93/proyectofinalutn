import Juan from './f.elconfidencial.com_original_62c_e5d_314_62ce5d3141c0b670144a692b7f6a21fa.jpg';
import Orlando from './Orlando.webp';
import './../styles/nosotros.css';



const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Nuestra historia: de una idea sobre ruedas a una empresa en movimiento.

                    Todo comenzó con una necesidad simple y cotidiana: ayudar a un amigo a mudarse. Sin grandes recursos, pero con muchas ganas, pusimos en marcha una camioneta prestada y un par de manos dispuestas a trabajar duro. Esa primera experiencia, aunque improvisada, dejó algo claro: había una enorme demanda de servicios de transporte que fueran puntuales, responsables y, sobre todo, humanos.

                    Así nació TransportesX, una empresa familiar que comenzó desde abajo, recorriendo kilómetros y aprendiendo en el camino. Lo que empezó con una sola camioneta pronto se transformó en una pequeña flota equipada para cubrir desde mudanzas locales hasta transportes de larga distancia.

                    Con el tiempo, sumamos camiones, personal capacitado y la infraestructura necesaria para brindar un servicio cada vez más completo. Pero lo que nunca cambió fue nuestro compromiso con la seriedad, el cuidado de cada carga y el trato directo con nuestros clientes. Porque más allá del traslado, sabemos que estamos moviendo proyectos, historias y momentos importantes en la vida de las personas.

                    Hoy seguimos creciendo, impulsados por la confianza de quienes nos eligen. Y lo hacemos con la misma convicción que nos acompañó desde el primer viaje: mover lo que necesitás, con la responsabilidad que merecés.</p>

            </div>
            <div className="staff">
                <h2>Fundadores de la empresa</h2>
                <div className="personas">
                    <div className="persona">
                        <img src={Juan} alt="Juan Gomez" style={{ width: '50%' }} />
                        <h5>Martin Zarlenga</h5>
                        <h6>CEO de transportesX</h6>
                        <p>TransportesX nació de una idea sencilla y una convicción firme: que el transporte de cargas no tenía por qué ser complicado ni impersonal. Mi nombre es Martin Zarlenga, y después de años viendo cómo amigos, familiares y conocidos luchaban por encontrar un servicio de mudanza o traslado que fuera realmente confiable, decidí dejar de pensarlo y poner manos a la obra.

                            No vengo del mundo empresarial tradicional. Empecé con una camioneta usada, haciendo viajes los fines de semana, con la ayuda de un par de amigos. Con cada viaje, aprendí algo nuevo: cómo cuidar mejor una carga, cómo hablar con los clientes, cómo optimizar rutas. Así fui construyendo una visión que hoy se transformó en una empresa en pleno crecimiento.</p>
                    </div>
                    <div className="persona">
                        <img src={Orlando} alt="Orlando Grisu" style={{ width: '50%' }} />
                        <h5>Fabian Lozada</h5>
                        <h6>CTO de TransportesX</h6>
                        <p>Desde el principio, entendí que para que una empresa de transporte se mantenga competitiva, no basta con tener buenos vehículos: hay que moverse al ritmo de la tecnología. Mi nombre es Fabián Lozada y como CTO de TransportesX, mi rol es justamente ese: integrar innovación y eficiencia en cada parte del proceso.

                            Me uní al proyecto cuando recién empezaba a tomar forma, convencido de que la tecnología podía marcar la diferencia en un rubro donde muchas veces todo se hace "a la vieja usanza". Hoy, gracias al trabajo en equipo, desarrollamos soluciones que nos permiten optimizar rutas, mejorar la comunicación con los clientes y garantizar un seguimiento más preciso de cada envío.</p>
                    </div>

                </div>
            </div>

        </main>
    );
}

export default NosotrosPage;