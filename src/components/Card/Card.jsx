import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  Title,
  ChannelName,
  Info,
} from './style';
import { format } from 'timeago.js';
import axios from 'axios';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type}>
            <Avatar
              src={`${channel?.img}`}
              sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
              {channel?.name?.charAt(0)}
            </Avatar>
          </ChannelImage>

          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
