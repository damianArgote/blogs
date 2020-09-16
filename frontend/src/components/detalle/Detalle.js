import React,{useState,useEffect} from 'react';

import clienteAxios from '../../config/axios';

const Detalle = (props) => {

    const [post,guardarPost] = useState({});

    const { id } = props.match.params;

    useEffect(() =>{
        const consultarAPI = async () =>{
            const respuesta = await clienteAxios.get(`posts/${id}`);
            guardarPost(respuesta.data);
        }

        consultarAPI();
    },[id]);

    console.log(post);


    return ( 

        <article>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                
                    {post ? (
                        <>
                        <h2 className="section-heading">{post.title}</h2>
                        <blockquote className="blockquote">{post.body}</blockquote>
                        </>
                    ) : <div class="p-3 mb-2 bg-danger text-white text-center">El post no existe</div>}
                </div>
                </div>
            </div>
        </article>

     );
}
 
export default Detalle;