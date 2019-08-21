function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');
let color = "green";

cameraToSouthEast = () => {
    camera.setAttribute('position', '15 2 15');
};

cameraToSouthWest = () => {
    camera.setAttribute('position', '-8 2 15');
};

cameraToNorthEast = () => {
    camera.setAttribute('position', '15 2 -5');
};

cameraToNorthwest = () => {
    camera.setAttribute('position', '-8 2 -5');
};

colorDoor = () => {
    $('js--door').setAttribute('mtl', '#deurBlue-mtl');
};

colorSmallWall = () =>{
    $('js--smollWall').setAttribute('mtl', '#muurZonderDeur-mtl');
};

colorSmollSmollWall = () =>{
    $('js--smollSmollWall').setAttribute('mtl', '#korteMuur1-mtl');
};

colorSmollSmollWall2 = () =>{
    $('js--smollSmollWall2').setAttribute('mtl', '#korteMuur1-mtl');
};

colorBigWall = () =>{
    $('js--bigWall').setAttribute('mtl', '#muur-mtl');
};

colorRoof = () =>{
    $('js--roof').setAttribute('mtl', '#rietDak-mtl');
};
