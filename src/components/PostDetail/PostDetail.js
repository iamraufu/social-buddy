import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
      const {id} = useParams()
      const [post,setPost] = useState({});
      const [comment,setComment]  =useState([]);
      const {title,body} = post
      useEffect (()=>{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data => setPost(data))
            //eslint-disable-next-line
      },[]) 

      useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>setComment(data))
            //eslint-disable-next-line
      },[])

      return (
            <div>
                  <h1>User Posted: {id}</h1>
                  <p>Title: {title}</p>
                  <p>Body: {body}</p>
                  <h5>Number of Comments: {comment.length}</h5>
                  {
                        comment.map(comment=><Comment comment={comment}></Comment>)
                  }
            </div>
      );
};

export default PostDetail;