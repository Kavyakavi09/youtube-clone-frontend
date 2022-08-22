/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Channel,
  ChannelInfo,
  Subscribe,
  Hr,
  ChannelCounter,
  ChannelName,
  Description,
  ChannelDetail,
  VideoFrame,
} from './style';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../../components/Comments/Comments';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  dislike,
  fetchFailure,
  fetchSuccess,
  like,
} from '../../redux/videoSlice';
import { format } from 'timeago.js';
import { subscription } from '../../redux/userSlice';
import Recommendation from '../../components/Recommendation/Recommendation';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  console.log(currentVideo);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split('/')[2];
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        dispatch(fetchFailure);
      }
    };
    fetchData();
  }, [path, dispatch]);

  useEffect(() => {
    const fetchView = async () => {
      try {
        await axios.put(`/videos/view/${path}`);
      } catch (err) {
        dispatch(fetchFailure);
      }
    };
    fetchView();
  }, []);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo?._id}`);
    dispatch(like(currentUser?._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo?._id}`);
    dispatch(dislike(currentUser?._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views • {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{' '}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{' '}
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Avatar
              src={`${channel?.img}`}
              sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
              {channel?.name?.charAt(0)}
            </Avatar>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>
                {channel?.subscribers} subscribers
              </ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe
            onClick={handleSub}
            id={currentUser?.subscribedUsers.includes(channel?._id)}>
            {currentUser?.subscribedUsers?.includes(channel?._id)
              ? 'SUBSCRIBED'
              : 'SUBSCRIBE'}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  );
};

export default Video;
