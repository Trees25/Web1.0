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

export default Navbar;