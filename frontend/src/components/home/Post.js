import React from "react";
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
const Post = ({post}) => {

    const {title,id} = post;

    const onClick = id =>{
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Un Post eliminado no se puede recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar'
      }).then((result) => {
        if (result.value) {
          //eliminar con axios
          clienteAxios.delete(`/posts/${id}`)
            .then(res =>{
              console.log(res);
              if(res.status === 200){
                Swal.fire(
                  'Eliminado!',
                  'El Post fue eliminado',
                  'success'
                )
              }
            })
        }
      })
    }

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
        onClick={() => onClick(id)}
      >Eliminar</button>
    </div>
  );
};

export default Post;
