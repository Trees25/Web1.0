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

export default Clients;