import React,{useState,useEffect} from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

const Editar = (props) => {

    const [post,guardarPost] = useState({
        title:'',
        body:''
    });

    const {title,body} = post;

    const [error,guardarError] = useState(false);

    const { id } = props.match.params;

    useEffect(() =>{
        let isMounted = true
        const consultarAPI = async () =>{

            const respuesta = await clienteAxios.get(`/posts/${id}`);
            if(isMounted){
                guardarPost(respuesta.data);
              }
              return () => { isMounted = false };
        }
        consultarAPI();
    },[id]);

    const onChange = e =>{

        guardarPost({
            ...post,
            [e.target.name] : e.target.value
        })

    };

    const onSubmit = e =>{
        e.preventDefault();

        //validar
        if(title.trim() === '' || body.trim() === ''){
            guardarError(true);
        }

        setTimeout(() => {
            guardarError(false);
        }, 3000);

        //hacer peticion API
        const consultarAPI = async () =>{
            const respuesta = await clienteAxios.patch(`/posts/${id}`,post);
            guardarPost(respuesta.data);
            if(respuesta.status === 200){
                Swal.fire(
                    'Editado!',
                    'El Post fue editado',
                    'success'
                  )
            }
            

         }
         consultarAPI();
    }


    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h2>Editar Post</h2>
                    {error ? <div className="p-3 mb-2 bg-danger text-white text-center">Faltan completar campos obligatorios</div> : null}

                    <form
                        onSubmit={onSubmit}
                    >

                         <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Titulo</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Titulo" 
                                name="title"
                                value={title}
                                onChange={onChange}
                                
                                />
                                
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Contenido</label>
                                <textarea 
                                rows="5" 
                                className="form-control" 
                                placeholder="Contenido" 
                                name="body"
                                value={body}
                                onChange={onChange}
                                ></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Guardar</button>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Editar;