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

export default Contact;