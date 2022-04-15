import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

const Post = ({ title, subheader, pic, content }) => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
            {title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia component='img' height='20%' image={pic} alt={title} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {content.name} - {content.bs}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {content.catchPhrase}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
