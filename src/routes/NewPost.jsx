import React from "react";

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o titulo"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            type="text"
            id="body"
            name="body"
            placeholder="Digite o conteúdo"
          />
        </div>
        <input type="submit" value="Criar Post" className="btn"></input>
      </form>
    </div>
  );
};

export default NewPost;
