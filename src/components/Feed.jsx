// @ts-nocheck
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Feed = () => {
  const [users, setusers] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(apiUrl)
      .then((results) => results.json())
      .then((data) => {
        setusers(data);
      });
  }, [apiUrl]);

  return (
    <Box
      flex={4}
      p={1}
      sx={{
        maxHeight: 'calc(100vh - 72px)',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      {users.map((user) => (
        <Post
          key={user.id}
          title={user.name}
          subheader={user.website}
          pic={`https://picsum.photos/seed/${user.username}${Math.floor(Math.random() * 10)}/400/200`}
          content={user.company}
        />
      ))}
    </Box>
  );
};

export default Feed;
