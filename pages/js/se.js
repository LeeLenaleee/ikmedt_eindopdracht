function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');

cameraToSouthEast = () => {
    camera.setAttribute('position', '15 2 15');
};

cameraToSouthWest = () => {
    camera.setAttribute('position', '-15 2 15');
};

cameraToNorthEast = () => {
    camera.setAttribute('position', '15 2 -15');
};

cameraToNorthwest = () => {
    camera.setAttribute('position', '-15 2 -15');
};
