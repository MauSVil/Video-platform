import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
render(<Media type= "video" title= "¿Que es responsive Design?" author="Mauricio Sanchez" image="./images/covers/responsive.jpg"/>, app)