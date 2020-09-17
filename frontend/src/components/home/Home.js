import React, { Fragment, useState, useEffect } from "react";

import clienteAxios from '../../config/axios';

import Post from './Post';

const Home = () => {

  const [posts,guardarPosts] = useState([]);

  useEffect(() =>{
    let isMounted = true
    const consultarAPI = async () =>{
        const respuesta = await clienteAxios.get('/posts');
        if(isMounted){
          guardarPosts(respuesta.data);
        }
        return () => { isMounted = false };
    }
    consultarAPI();
  },[]);


  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            
            {posts.map( post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
          
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
