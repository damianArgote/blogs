import React from "react";
import {Link} from 'react-router-dom';
const Post = ({post}) => {

    const {title,id} = post;

  return (
    <div className="post-preview">
      <Link to={`/detalles/${id}`}>
        <h2 className="post-title">
          {title}
        </h2>
      </Link>
      <p className="post-meta">
        <Link to={`/editar-post/${id}`}>Editar</Link>
      </p>
      <button
        className="btn btn-danger"
      >Eliminar</button>
    </div>
  );
};

export default Post;
