import React, { Fragment, useState, useEffect } from "react";

import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';

import Post from './Post';

const Home = () => {

  const [posts,guardarPosts] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () =>{
        const respuesta = await clienteAxios.get('/posts');
        guardarPosts(respuesta.data);
    }

    consultarAPI();
  },[posts]);


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
          
            <div className="clearfix">
              <Link className="btn btn-primary float-right" to={'#'}>
                Older Posts &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
