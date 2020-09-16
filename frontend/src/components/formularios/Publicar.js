import React, {useState,useEffect} from 'react';
const Publicar = () => {

    const [ post, guardarPost] = useState({
        userId:0,
        id:0,
        title:'',
        body:''
    });

    const {userId,id,title,body} = post;

    const onChange = e =>{

        guardarPost({
            ...post,
            [e.target.name] : e.target.value
        })

    };

    const onSubmit = e =>{

        //validar

    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h2>Publicar nuevo Post</h2>
                    <form
                        onSubmit={onSubmit}
                    >

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>User</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="user id" 
                                name="userId"
                                onChange={onChange}
                                
                                />
                                
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>ID</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="id" 
                                name="id"
                                onChange={onChange}
                                
                                />
                                
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Titulo</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Titulo" 
                                name="title"
                                onChange={onChange}
                                
                                />
                                
                            </div>
                        </div>

                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Contenido</label>
                                <textarea 
                                rows="5" 
                                class="form-control" 
                                placeholder="Contenido" 
                                name="body"
                                onChange={onChange}
                                ></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Publicar</button>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Publicar;