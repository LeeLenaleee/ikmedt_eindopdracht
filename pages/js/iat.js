function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');
const cursor = $('js--cursor');
let colorPaint = "none";

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
    switch (colorPaint) {
        case "none":
            $('js--door').setAttribute('mtl', '#deur-mtl');
            break;
        case "yellow":
            $('js--door').setAttribute('mtl', '#deurYellow-mtl');
            break;
        case "blue":
            $('js--door').setAttribute('mtl', '#deurBlue-mtl');
            break;
        case "red":
            $('js--door').setAttribute('mtl', '#deurRed-mtl');
            break;
        default:
            $('js--door').setAttribute('mtl', '#deur-mtl');
    }

};

colorSmallWall = () =>{
    switch (colorPaint) {
        case "none":
            $('js--smollWall').setAttribute('mtl', '#muurZonderDeur-mtl');
            break;
        case "yellow":
            $('js--smollWall').setAttribute('mtl', '#muurZonderDeurYellow-mtl');
            break;
        case "blue":
            $('js--smollWall').setAttribute('mtl', '#muurZonderDeurBlue-mtl');
            break;
        case "red":
            $('js--smollWall').setAttribute('mtl', '#muurZonderDeurRed-mtl');
            break;
        default:
            $('js--smollWall').setAttribute('mtl', '#muurZonderDeur-mtl');
    }
};

colorSmollSmollWall = () =>{
    switch (colorPaint) {
        case "none":
            $('js--smollSmollWall').setAttribute('mtl', '#korteMuur1-mtl');
            break;
        case "yellow":
            $('js--smollSmollWall').setAttribute('mtl', '#muurZijkantenYellow-mtl');
            break;
        case "blue":
            $('js--smollSmollWall').setAttribute('mtl', '#muurZijkantenBlue-mtl');
            break;
        case "red":
            $('js--smollSmollWall').setAttribute('mtl', '#muurZijkantenRed-mtl');
            break;
        default:
            $('js--smollSmollWall').setAttribute('mtl', '#korteMuur1-mtl');
    }
};

colorSmollSmollWall2 = () =>{
    switch (colorPaint) {
        case "none":
            $('js--smollSmollWall2').setAttribute('mtl', '#korteMuur1-mtl');
            break;
        case "yellow":
            $('js--smollSmollWall2').setAttribute('mtl', '#muurZijkantenYellow-mtl');
            break;
        case "blue":
            $('js--smollSmollWall2').setAttribute('mtl', '#muurZijkantenBlue-mtl');
            break;
        case "red":
            $('js--smollSmollWall2').setAttribute('mtl', '#muurZijkantenRed-mtl');
            break;
        default:
            $('js--smollSmollWall2').setAttribute('mtl', '#korteMuur1-mtl');
    }
};

colorBigWall = () =>{
    switch (colorPaint) {
        case "none":
            $('js--bigWall').setAttribute('mtl', '#muur-mtl');
            break;
        case "yellow":
            $('js--bigWall').setAttribute('mtl', '#muurYellow-mtl');
            break;
        case "blue":
            $('js--bigWall').setAttribute('mtl', '#muurBlue-mtl');
            break;
        case "red":
            $('js--bigWall').setAttribute('mtl', '#muurRed-mtl');
            break;
        default:
            $('js--bigWall').setAttribute('mtl', '#muur-mtl');
    }
};

colorRoof = () =>{
    $('js--roof').setAttribute('mtl', '#rietDak-mtl');
    switch (colorPaint) {
        case "none":
            $('js--roof').setAttribute('mtl', '#rietDak-mtl');
            break;
        case "yellow":
            $('js--roof').setAttribute('mtl', '#rietDakYellow-mtl');
            break;
        case "blue":
            $('js--roof').setAttribute('mtl', '#rietDakBlue-mtl');
            break;
        case "red":
            $('js--roof').setAttribute('mtl', '#rietDakRed-mtl');
            break;
        default:
            $('js--roof').setAttribute('mtl', '#rietDak-mtl');
    }
};

selectDefault = () =>{
    colorPaint = "none";
    cursor.setAttribute('material', 'color: black; shader: flat')
};

selectRed = () =>{
    colorPaint = "red";
    cursor.setAttribute('material', 'color: red; shader: flat')
};

selectBlue = () =>{
    colorPaint = "blue";
    cursor.setAttribute('material', 'color: blue; shader: flat')
};

selectYellow = () =>{
    colorPaint = "yellow";
    cursor.setAttribute('material', 'color: yellow; shader: flat')
};
