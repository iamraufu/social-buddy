import React from 'react';

const Comment = (props) => {
      const {name,email,body} =props.comment
      return (
            <div>
                  <p>Name: {name} <br/> Email: {email}</p>
                  <p><u>Comment detail:</u> {body}</p>
            </div>
      );
};

export default Comment;