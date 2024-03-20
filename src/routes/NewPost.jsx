import React from "react";
import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const post = {
      title: title,
      body: body,
      userId: 1,
    };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            type="text"
            id="body"
            name="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input type="submit" value="Criar Post" className="btn"></input>
      </form>
    </div>
  );
};

export default NewPost;
