import profile from './profile.png'
import {
  faAppStore,
  faFacebook,
  faGithub,
  faGooglePlay,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faAdjust, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const navigation = {
  name: '이건우',
  links: [
    {
      title: '',
      link: '#about',
    },
    {
      title: '프로젝트',
      link: '#projects',
    },
    {
      title: '깃허브가기',
      link: 'https://github.com/lgw7537',
    },
  ],
}
export const intro = {
  title: '웹어플리케이션보안(캡스톤 디자인)',
  description: '정보보호학과 3학년 이건우',
  image: profile.src,
  buttons: [
    {
      title: '프로젝트 보러가기',
      link: '#contact',
      isPrimary: true,
    },
  ],
}

export const about = {
  title: '진행한 프로젝트',
  description: [
    '',
    'Clerk-auth (소셜로그인기능).',
    'Counter  ',
    'ContactBook',
    'CounterDAPP',
    'TokenDrop',
    'ERC721-DROP',
    'NFT Market Place',
  ],
}

export const work = {
  title: '소개 ',
  cards: [
    {
      title: '이건우',
      description: '91812775',
    },
    {
      title: '정보보호학과 3학년',
      description: ['중부대학교 고양캠퍼스'],
    },

    {
      title: '웹어플리케이션보안',
      description: '캡스톤디자인',
      icons: null,
    },
  ],
}

export const projects = {
  title: 'Projects 2',
  cards: [
    {
      title: 'Clerk-Auth',
      description: 'Social Login',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/clerk-auth',
        },
        {
          icon: faAdjust,
          link: 'https://clerk-auth-bbhj.vercel.app/',
        },
      ],
    },
    {
      title: 'Counter',
      description: 'Counter Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/counter',
        },
        {
          icon: faAdjust,
          link: 'https://counter-lgw7537.vercel.app/',
        },
      ],
    },
    {
      title: 'Contact BOOK',
      description: 'Contact BOOK Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/contactbook',
        },
        {
          icon: faAdjust,
          link: 'https://contactbook-nine.vercel.app/',
        },
      ],
    },
    {
      title: 'CounterDAPP',
      description: 'CounterDAPP Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/counterf',
        },
        {
          icon: faAdjust,
          link: 'https://counterf.vercel.app/',
        },
      ],
    },
    {
      title: 'TokenDrop',
      description: 'TokenDrop Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/tokendrop',
        },
        {
          icon: faAdjust,
          link: 'https://tokendrop-coral.vercel.app/',
        },
      ],
    },
    {
      title: 'ERC721-DROP',
      description: 'ERC721-DROP Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/erc721-drop',
        },
        {
          icon: faAdjust,
          link: 'https://erc721-drop.vercel.app/',
        },
      ],
    },
    {
      title: 'NFT Market Place',
      description: 'Market Place Project',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/lgw7537/marketplace-nft',
        },
        {
          icon: faAdjust,
          link: 'https://marketplace-nft-ebon.vercel.app/',
        },
      ],
    },
  ],
}

export const contact = {
  title: '감사합니다',
  description: '',
  buttons: [,],
}

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: '',
  description: '',
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: '',
  description: '',
  cards: [
    {
      title: 'My website',
      link: '',
    },
    {
      title: '1',
      link: '',
    },
    {
      title: '2',
      link: '',
    },
    {
      title: 'My GitHub',
      link: '',
    },
    {
      title: '3',
      link: '',
    },
  ],
}
