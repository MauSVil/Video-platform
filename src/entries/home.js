import React from 'react';
import { render } from 'react-dom';
import data from '../api.json'
import Home from '../pages/containers/home'

const app = document.getElementById('app');
render(<Home data={data}/>, app)