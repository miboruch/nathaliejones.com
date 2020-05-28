import React from 'react';
import styled, { css } from 'styled-components';
import YoutubeIcon from '../src/assets/icons/youtube-icon.svg';
import InstagramIcon from '../src/assets/icons/instagram-icon.svg';
import FacebookIcon from '../src/assets/icons/facebook-icon.svg';
import ImdbIcon from '../src/assets/icons/imdb-icon.svg';

const iconStyle = css`
  width: 25px;
  height: 25px;
  margin: 0 1rem;
  fill: #626262;
  transition: all 0.5s ease;

  &:hover {
    fill: #2d2d2d;
  }
`;

const Youtube = styled(YoutubeIcon)`
  ${iconStyle}
`;

const Instagram = styled(InstagramIcon)`
  ${iconStyle}
`;

const Facebook = styled(FacebookIcon)`
  ${iconStyle}
`;

const Imdb = styled(ImdbIcon)`
  ${iconStyle}
`;

export const convertObjectToArray = object => {
  const array = [];
  for (const item in object) {
    array.push(object[item]);
  }
  return array;
};

export const navigation = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/acting',
    name: 'Acting'
  },
  {
    link: '/modeling',
    name: 'Modeling'
  },
  {
    link: '/demoreels',
    name: 'Demo reels'
  },
  {
    link: '/contact',
    name: 'Contact'
  }
];

export const social = [
  {
    link: 'https://www.facebook.com/natalia.boruch.16',
    component: <Facebook />
  },
  {
    link: 'https://www.instagram.com/delphrezia/',
    component: <Instagram />
  },
  {
    link:
      'https://www.youtube.com/channel/UCvZu9v2uiExUonC1swEH64g?view_as=subscriber',
    component: <Youtube />
  },
  {
    link: 'https://www.imdb.com/name/nm10412750/',
    component: <Imdb />
  }
];

export const demoArray = [
  'https://www.youtube.com/embed/K9ShlHKGRZc',
  'https://www.youtube.com/embed/g6AN8mNDs8I',
  'https://www.youtube.com/embed/7PxVaam09Kk',
  'https://www.youtube.com/embed/e45_Cn1p2aE'
];
