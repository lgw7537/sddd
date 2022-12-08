import profile from "./profile.png";
import {
  faAppStore,
  faFacebook,
  faGithub,
  faGooglePlay,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "이건우",
  links: [
    {
      title: "소개",
      link: "#about",
    },
    {
      title: "프로젝트",
      link: "#projects",
    },
    {
      title: "SNS",
      link: "#contact",
    },
  ],
};
export const intro = {
  title: "Hi, I'm LeeGunWoo",
  description: "정보보호학과 2학년 이건우",
  image: profile.src,
  buttons: [
    {
      title: "See more...",
      link: "#contact",
      isPrimary: true,
    },
  ],
};

export const about = {
  title: "자기소개",
  description: [
    "",
    "이름: 이건우(LeeGunWoo).",
    "사는곳: 인천  ",
    "생년월일: 2000.01.26",
    "E-mail: wiasuk12@naver.com",
    "Call: 010-2930-7537",
    "웹보안프로그래밍 개인 포트폴리오",
  ],
};

export const work = {
  title: "Introducing Team Project",
  cards: [
    {
      title: "Team name",
      description: "5조",
    },
    {
      title: "Team members",
      description: [
        "이건우",
        " | ",
        "이종민",
        " | ",
        "박성진",
        " | ",
        "어영민",
      ],
    },

    {
      title: "Project Topic",
      description: "블로그형식 사이트",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "My GitHub",
      description: "My Project for github and vercel",
      icons: [
        {
          link: "https://github.com/lgw7537",
        },
        {
          icon: faGithub,
          link: "https://github.com/lgw7537",
        },
      ],
    },
    {
      title: "My Instargram and FaceBook",
      description:
        "place to leave small daily life and records 소소한 일상과 기록을 남겨두는 곳",
      icons: [
        {
          icon: faFacebook,
          link: "https://ko-kr.facebook.com/",
        },
        {
          icon: faInstagram,
          link: "https://www.instagram.com/lgw_0126",
        },
      ],
    },
    {
      title: "Team Projects",
      description: "A blog-style website containing My favorite contents",
      icons: [
        {
          icon: faAngleUp,
          link: "",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Connect Social(SNS연결하기)",
  description: "연결을 원하면 아래 두 버튼을 눌러주세요",
  buttons: [
    {
      title: "GO INSTARGRAM",
      link: "https://www.instagram.com/lgw_0126",
      isPrimary: true,
    },
    {
      title: "GO FACEBOOK",
      link: "https://ko-kr.facebook.com/",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "",
  description: "",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "",
  description: "",
  cards: [
    {
      title: "My website",
      link: "",
    },
    {
      title: "1",
      link: "",
    },
    {
      title: "2",
      link: "",
    },
    {
      title: "My GitHub",
      link: "",
    },
    {
      title: "3",
      link: "",
    },
  ],
};
