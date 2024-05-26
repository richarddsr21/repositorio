export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-full bg-background py-16 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">
          Projetos
        </h2>
        {/* Adicione os projetos aqui */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de um projeto */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-text">Projeto</h3>
            <p className="mt-2 text-text">Descrição do projeto</p>
          </div>
          {/* Adicione mais projetos conforme necessário */}
        </div>
      </div>
    </section>
  );
};
