import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {
  SiBootstrap,
  SiJavascript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiVuejsFill } from 'react-icons/ri';

export const KnowledgeProps = [
  { id: '0', name: 'HTML 5', icon: <AiFillHtml5 color="#dd3e24" /> },
  { id: '1', name: 'CSS 3', icon: <DiCss3 color="#2965f1" /> },
  { id: '2', name: 'Java Scrpit', icon: <SiJavascript color="yellow" /> },
  { id: '3', name: 'Type Scrpit', icon: <SiTypescript color="#007acc" /> },
  { id: '4', name: 'React Js', icon: <FaReact color="#61dafb" /> },
  { id: '5', name: 'Next Js', icon: <SiNextdotjs /> },
  { id: '6', name: 'Vue Js', icon: <RiVuejsFill color="#2dfe30" /> },
  { id: '7', name: 'Bootstrap', icon: <SiBootstrap color="#59287a" /> },
  {id: '8',name: 'Styled Components',icon: <SiStyledcomponents color="pink"/>},
];

export const OnlineCourses = [
  {
    id: '0',
    courses: 'Curso de HTML 5 e CSS3',
    platform: 'Curso em vídeo/Youtube',
    href: 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
  },
  {
    id: '1',
    courses: 'Dicas de JavaScript',
    platform: 'Matheus Battisti - Hora de Codar/ Youtube',
    href: 'https://www.youtube.com/watch?v=Njj02elisVs&list=PLnDvRpP8Bnewiqo_La2z29dtxGyuNf94y',
  },
  {
    id: '2',
    courses: 'Curso de Botstrap',
    platform: 'Matheus Battisti - Hora de Codar/ Youtube',
    href: 'https://www.youtube.com/watch?v=SmQMZ36hJJY&list=PLnDvRpP8Bnexu5wvxogy6N49_S5Xk8Cze',
  },
  {
    id: '3',
    courses: 'Curso de Vue 3',
    platform: 'Matheus Battisti - Hora de Codar/ Youtube',
    href: 'https://www.youtube.com/watch?v=wsAQQioPIJs&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL',
  },
  {
    id: '4',
    courses: 'Curso de React',
    platform: 'Matheus Battisti - Hora de Codar/ Youtube',
    href: 'https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO',
  },
  {
    id: '5',
    courses: 'Next.js e React',
    platform: 'Cod3r Cursos Online/ Udemy',
    href: 'https://www.udemy.com/course/nextjs-e-react/',
  },
  {
    id: '6',
    courses: 'Curso Vue JS 2',
    platform: 'Cod3r Cursos Online/ Udemy',
    href: 'https://www.udemy.com/course/vue-js-completo/',
  },
];
