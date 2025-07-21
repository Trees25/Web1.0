const About = () => (
  <section id="nosotros" className="py-16 bg-[#202E40] text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Nosotros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#5EADF2]">Misión y Visión</h3>
          <p className="mb-4">Nuestra misión transformar los desafíos tecnológicos de nuestros clientes en soluciones innovadoras y eficientes, integrando desarrollo de software, hardware y servicios de soporte. Nos comprometemos a ofrecer calidad, confiabilidad y atención personalizada, generando impacto positivo en sus procesos y proyectos..</p>
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

export default About;