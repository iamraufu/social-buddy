import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
      const{id,title,body} = props.post
      const history = useHistory();
      const showComments = id=>{
            const url = `post/${id}`;
            history.push(url)
      }
      return (
            <div>
                  <h1>{title}</h1>
                  <h5>{id}</h5>
                  <p>{body}</p>
                  <button onClick={()=>showComments(id)}>Show Post Details</button>
            </div>
      );
};

export default Posts;