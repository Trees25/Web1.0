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

export default Services;