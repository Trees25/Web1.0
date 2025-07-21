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

export default Footer;