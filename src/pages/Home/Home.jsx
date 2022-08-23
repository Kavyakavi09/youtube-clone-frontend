import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { Container } from './style';
import axios from 'axios';

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://kavyatube.herokuapp.com/api/videos/${type}`
      );
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
