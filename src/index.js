import _ from 'lodash';
import './style.css';
import image from './image.jpg';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myImage = new Image();
    myImage.src = image;
    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());