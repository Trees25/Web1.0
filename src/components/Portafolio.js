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

export default Portfolio;