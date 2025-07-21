const { useState, Suspense } = React;

const Hero = () => (
  <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-r from-[#296CF2] to-[#3D8BF2] text-white">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Soluciones Innovadoras en Software y Hardware</h1>
      <p className="text-lg md:text-xl mb-6">Desarrollo web, software a medida y mantenimiento de hardware para tu negocio.</p>
      <a href="#contacto" className="bg-[#5EADF2] text-[#101726] px-6 py-3 rounded-full font-semibold hover:bg-[#3D8BF2] transition">Contáctanos</a>
    </div>
  </section>
);

const Services = () => (
  <section id="servicios" className="py-16 bg-[#202E40] text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <i className="fas fa-globe text-[#5EADF2] text-4xl mb-4 block text-center" aria-hidden="true"></i>
          <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Desarrollo Web</h3>
          <p className="mb-4">Creamos sitios web modernos, responsivos y optimizados, adaptados a las necesidades de tu negocio.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Conoce más</a>
        </article>
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <i className="fas fa-code text-[#5EADF2] text-4xl mb-4 block text-center" aria-hidden="true"></i>
          <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Software a Medida</h3>
          <p className="mb-4">Desarrollamos soluciones de software personalizadas para optimizar procesos y mejorar la eficiencia.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Conoce más</a>
        </article>
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <i className="fas fa-tools text-[#5EADF2] text-4xl mb-4 block text-center" aria-hidden="true"></i>
          <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Mantenimiento de Hardware</h3>
          <p className="mb-4">Ofrecemos servicios de mantenimiento y reparación de hardware para garantizar el rendimiento de tus equipos.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Conoce más</a>
        </article>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="nosotros" className="py-16 bg-[#202E40] text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Nosotros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Misión y Visión</h3>
          <p className="mb-4">Nuestra misión transformar los desafíos tecnológicos de nuestros clientes en soluciones innovadoras y eficientes, integrando desarrollo de software, hardware y servicios de soporte. Nos comprometemos a ofrecer calidad, confiabilidad y atención personalizada, generando impacto positivo en sus procesos y proyectos.</p>
          <p>Buscamos ser reconocidos como referentes en el desarrollo de soluciones tecnológicas integrales, fusionando software y hardware de calidad superior. Aspiramos a impulsar la transformación digital de nuestros clientes, brindándoles herramientas innovadoras que potencien su crecimiento, eficiencia y competitividad en el mercado.</p>
        </div>
        <div className="bg-[#101726] rounded-lg p-4 flex items-center justify-center">
          <img src="assets/Trees_logo.png" alt="Equipo de desarrollo de software y hardware" className="w-[400px] h-[300px] rounded-lg" loading="lazy" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-center mb-8 text-[#5EADF2]">Nuestro Equipo</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="assets/Juan_Mondre.jpeg" alt="Foto de Juan Mondre" className="w-32 h-auto mx-auto rounded-full mb-4 border-2 border-[#3D8BF2]" loading="lazy" />
          <h4 className="team-name text-xl font-semibold text-center mb-2 text-[#5EADF2]">Juan Mondre</h4>
          <p className="text-center mb-0">Técnico programador universitario</p>
        </article>
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="assets/Nicolas_Andreolli.jpeg" alt="Foto de Nicolás Andreolli" className="w-32 h-auto mx-auto rounded-full mb-4 border-2 border-[#3D8BF2]" loading="lazy" />
          <h4 className="team-name text-xl font-semibold text-center mb-2 text-[#5EADF2]">Nicolás Andreolli</h4>
          <p className="text-center mb-0">Técnico programador universitario</p>
        </article>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portafolio" className="py-16 bg-[#202E40] text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestro Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="https://via.placeholder.com/300x200" alt="Proyecto de desarrollo web para cliente" className="w-full h-auto rounded-lg mb-4" loading="lazy" />
          <h3 className="text-2xl font-semibold mb-2 text-[#5EADF2]">Plataforma E-commerce</h3>
          <p className="mb-4">Desarrollo de una tienda en línea personalizada con integración de pagos y diseño responsivo.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Ver Proyecto</a>
        </article>
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="https://via.placeholder.com/300x200" alt="Sistema de gestión empresarial personalizado" className="w-full h-auto rounded-lg mb-4" loading="lazy" />
          <h3 className="text-2xl font-semibold mb-2 text-[#5EADF2]">Sistema ERP</h3>
          <p className="mb-4">Solución de software a medida para optimizar procesos empresariales y gestión de datos.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Ver Proyecto</a>
        </article>
        <article className="bg-[#101726] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="https://via.placeholder.com/300x200" alt="Mantenimiento de servidores empresariales" className="w-full h-auto rounded-lg mb-4" loading="lazy" />
          <h3 className="text-2xl font-semibold mb-2 text-[#5EADF2]">Mantenimiento de Servidores</h3>
          <p className="mb-4">Servicio de mantenimiento y optimización de servidores para máxima disponibilidad.</p>
          <a href="#contacto" className="text-[#296CF2] font-semibold hover:underline">Ver Proyecto</a>
        </article>
      </div>
    </div>
  </section>
);

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clients = [
    { name: "MiPañalera", logo: "assets/MiPañalera_logo.jpg" },
    { name: "Molinautos", logo: "assets/molinautos_logo.png" },
    { name: "Ilcapitano", logo: "assets/Ilcapitano_logo.jpg" },
    { name: "Biscui", logo: "assets/Biscui_logo.jpg" },
  ];
  const itemsPerPage = 4;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleClients = clients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="clientes" className="py-16 bg-[#202E40] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nuestros Clientes</h2>
        <p className="text-center mb-12 text-lg">Empresas que confían en nuestras soluciones tecnológicas para su éxito.</p>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#101726] text-white p-2 rounded-full hover:bg-[#3D8BF2] z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {visibleClients.map((client, index) => (
                <article
                  key={index}
                  className="bg-[#101726] p-4 rounded-lg shadow-lg hover:shadow-xl transition flex-1 min-w-[25%]"
                >
                  <img
                    src={client.logo}
                    alt={`Logotipo de ${client.name}, socio de Trees Tech`}
                    className="w-full h-auto mx-auto"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#101726] text-white p-2 rounded-full hover:bg-[#3D8BF2] z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const whatsappNumber = "+542645851326";
    const messageText = `Hola Trees Tech, me gustaría contactarlos:\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-[#202E40] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Envíanos un Mensaje</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#101726] text-white border border-[#3D8BF2] focus:outline-none focus:border-[#5EADF2]"
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#101726] text-white border border-[#3D8BF2] focus:outline-none focus:border-[#5EADF2]"
              />
              <textarea
                placeholder="Mensaje"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#101726] text-white border border-[#3D8BF2] focus:outline-none focus:border-[#5EADF2]"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#296CF2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3D8BF2] transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Información de Contacto</h3>
            <p className="mb-2"><i className="fas fa-envelope mr-2 text-[#5EADF2]" aria-hidden="true"></i> trees.sanjuan@gmail.com</p>
            <p className="mb-2"><i className="fas fa-phone mr-2 text-[#5EADF2]" aria-hidden="true"></i> +54 2645851326</p>
            <p><i className="fas fa-map-marker-alt mr-2 text-[#5EADF2]" aria-hidden="true"></i> Los Tilos 1664 N, San Juan, Capital.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#101726] text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#5EADF2]">Trees Tech</h3>
          <p>Soluciones innovadoras en desarrollo de software y hardware para tu negocio.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#5EADF2]">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:text-[#3D8BF2]">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-[#3D8BF2]">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-[#3D8BF2]">Nosotros</a></li>
            <li><a href="#portafolio" className="hover:text-[#3D8BF2]">Portafolio</a></li>
            <li><a href="#clientes" className="hover:text-[#3D8BF2]">Clientes</a></li>
            <li><a href="#contacto" className="hover:text-[#3D8BF2]">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#5EADF2]">Síguenos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://wa.me/+542645851326" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Trees Tech">
              <i className="fab fa-whatsapp text-[#5EADF2] text-2xl hover:text-[#3D8BF2]" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/trees.tech" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Trees Tech">
              <i className="fab fa-instagram text-[#5EADF2] text-2xl hover:text-[#3D8BF2]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© 2025 Trees Tech. Desarrollo de software y hardware. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const Navbar = () => (
  <nav className="bg-[#101726] text-white p-4 sticky top-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Trees Tech</h1>
      <ul className="flex space-x-6">
        <li><a href="#inicio" className="hover:text-[#5EADF2]">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-[#5EADF2]">Servicios</a></li>
        <li><a href="#nosotros" className="hover:text-[#5EADF2]">Nosotros</a></li>
        <li><a href="#portafolio" className="hover:text-[#5EADF2]">Portafolio</a></li>
        <li><a href="#clientes" className="hover:text-[#5EADF2]">Clientes</a></li>
        <li><a href="#contacto" className="hover:text-[#5EADF2]">Contacto</a></li>
      </ul>
    </div>
  </nav>
);

const App = () => (
  <Suspense fallback={<div className="text-center py-16 text-white">Cargando...</div>}>
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));