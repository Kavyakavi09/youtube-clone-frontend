import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, NewComment, Input } from './style';
import Comment from './Comment/Comment';
import axios from 'axios';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Avatar
          src={`${currentUser?.img}`}
          sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
          {currentUser?.name?.charAt(0)}
        </Avatar>
        <Input placeholder='Add a comment...' />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
