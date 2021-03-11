import React from 'react';

const Comment = (props) => {
      const {name,email} =props.comment
      return (
            <div>
                  <p>Name: {name} Email: {email}</p>
            </div>
      );
};

export default Comment;