export const ContactForm = () => {
  return (
    <section
      id="contact"
      className="w-full bg-primary text-white py-16 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              id="message"
              name="message"
              placeholder="Sua mensagem"
              rows={4}
            ></textarea>
          </div>
          <button
            className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
