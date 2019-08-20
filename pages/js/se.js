function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');
let objectsPlaced = 0;

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

pickDoor = () => {
    $('js--door').remove();
    let doorCamera = document.createElement('a-obj-model');
    doorCamera.setAttribute('id', 'js--door');
    doorCamera.setAttribute('src', '#deur-obj');
    doorCamera.setAttribute('mtl', '#deur-mtl');
    doorCamera.setAttribute('position', '-0.1 0 -0.3');
    doorCamera.setAttribute('scale', '0.05 0.05 0.05');
    doorCamera.setAttribute('rotation', '0 90');
    camera.appendChild(doorCamera)
};

placeDoor = () =>{
    if (camera.children[1].id === 'js--door'){
        $('js--door').remove();
        let doorFinalPlace = document.createElement('a-obj-model');
        doorFinalPlace.setAttribute('id', 'js--door');
        doorFinalPlace.setAttribute('src', '#deur-obj');
        doorFinalPlace.setAttribute('mtl', '#deur-mtl');
        doorFinalPlace.setAttribute('position', '10 0 10');
        doorFinalPlace.setAttribute('scale', '1 1 1');
        doorFinalPlace.setAttribute('rotation', '0 90');
        scene.appendChild(doorFinalPlace);
        $('js--doorPlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

pickSmallWall = () =>{
    $('js--smollWall').remove();
    let smoolWallCamera = document.createElement('a-obj-model');
    smoolWallCamera.setAttribute('id', 'js--smollWall');
    smoolWallCamera.setAttribute('src', '#muurZonderDeur-obj');
    smoolWallCamera.setAttribute('mtl', '#muurZonderDeur-mtl');
    smoolWallCamera.setAttribute('position', '-0.25 0 -0.3');
    smoolWallCamera.setAttribute('scale', '0.03 0.03 0.03');
    smoolWallCamera.setAttribute('rotation', '0 90');
    camera.appendChild(smoolWallCamera)
};

placeShortWall = () =>{
    if (camera.children[1].id === 'js--smollWall'){
        $('js--smollWall').remove();
        let smollWallFinalPlace = document.createElement('a-obj-model');
        smollWallFinalPlace.setAttribute('id', 'js--smollWall');
        smollWallFinalPlace.setAttribute('src', '#muurZonderDeur-obj');
        smollWallFinalPlace.setAttribute('mtl', '#muurZonderDeur-mtl');
        smollWallFinalPlace.setAttribute('position', '3.8 0 10');
        smollWallFinalPlace.setAttribute('scale', '1 1 1');
        smollWallFinalPlace.setAttribute('rotation', '0 90');
        scene.appendChild(smollWallFinalPlace);
        $('js--shortWallPlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

pickSmollSmollWall = () =>{
    $('js--smollSmollWall').remove();
    let smoolWallCamera = document.createElement('a-obj-model');
    smoolWallCamera.setAttribute('id', 'js--smollSmollWall');
    smoolWallCamera.setAttribute('src', '#korteMuur1-obj');
    smoolWallCamera.setAttribute('mtl', '#korteMuur1-mtl');
    smoolWallCamera.setAttribute('position', '-0.25 0 -0.3');
    smoolWallCamera.setAttribute('scale', '0.03 0.03 0.03');
    smoolWallCamera.setAttribute('rotation', '0 90');
    camera.appendChild(smoolWallCamera)
};

placeSmollSmollWall = () =>{
    if (camera.children[1].id === 'js--smollSmollWall'){
        $('js--smollSmollWall').remove();
        let smollWallFinalPlace = document.createElement('a-obj-model');
        smollWallFinalPlace.setAttribute('id', 'js--smollSmollWall');
        smollWallFinalPlace.setAttribute('src', '#korteMuur1-obj');
        smollWallFinalPlace.setAttribute('mtl', '#korteMuur1-mtl');
        smollWallFinalPlace.setAttribute('position', '11.35 0 6.27');
        smollWallFinalPlace.setAttribute('scale', '1 1 1');
        smollWallFinalPlace.setAttribute('rotation', '0 0');
        scene.appendChild(smollWallFinalPlace);
        $('js--sideWallPlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

pickSmollSmollWall2 = () =>{
    $('js--smollSmollWall2').remove();
    let smoolWallCamera = document.createElement('a-obj-model');
    smoolWallCamera.setAttribute('id', 'js--smollSmollWall2');
    smoolWallCamera.setAttribute('src', '#korteMuur1-obj');
    smoolWallCamera.setAttribute('mtl', '#korteMuur1-mtl');
    smoolWallCamera.setAttribute('position', '-0.25 0 -0.3');
    smoolWallCamera.setAttribute('scale', '0.03 0.03 0.03');
    smoolWallCamera.setAttribute('rotation', '0 90');
    camera.appendChild(smoolWallCamera)
};

placeSmollSmollWall2 = () =>{
    if (camera.children[1].id === 'js--smollSmollWall2'){
        $('js--smollSmollWall2').remove();
        let smollWallFinalPlace = document.createElement('a-obj-model');
        smollWallFinalPlace.setAttribute('id', 'js--smollSmollWall2');
        smollWallFinalPlace.setAttribute('src', '#korteMuur2-obj');
        smollWallFinalPlace.setAttribute('mtl', '#korteMuur2-mtl');
        smollWallFinalPlace.setAttribute('position', '-1.5 0 6.3');
        smollWallFinalPlace.setAttribute('scale', '1 1 1');
        smollWallFinalPlace.setAttribute('rotation', '0 0');
        scene.appendChild(smollWallFinalPlace);
        $('js--sideWal2PlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

pickBigWall = () =>{
    $('js--bigWall').remove();
    let smoolWallCamera = document.createElement('a-obj-model');
    smoolWallCamera.setAttribute('id', 'js--bigWall');
    smoolWallCamera.setAttribute('src', '#muur-obj');
    smoolWallCamera.setAttribute('mtl', '#muur-mtl');
    smoolWallCamera.setAttribute('position', '-0.25 0 -0.3');
    smoolWallCamera.setAttribute('scale', '0.03 0.03 0.03');
    smoolWallCamera.setAttribute('rotation', '0 90');
    camera.appendChild(smoolWallCamera)
};

placeBigWall = () =>{
    if (camera.children[1].id === 'js--bigWall'){
        $('js--bigWall').remove();
        let smollWallFinalPlace = document.createElement('a-obj-model');
        smollWallFinalPlace.setAttribute('id', 'js--bigWall');
        smollWallFinalPlace.setAttribute('src', '#muur-obj');
        smollWallFinalPlace.setAttribute('mtl', '#muur-mtl');
        smollWallFinalPlace.setAttribute('position', '4.5 0 2.7');
        smollWallFinalPlace.setAttribute('scale', '1 1 1');
        smollWallFinalPlace.setAttribute('rotation', '0 90');
        scene.appendChild(smollWallFinalPlace);
        $('js--longWallPlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

pickRoof = () =>{
    $('js--roof').remove();
    let smoolWallCamera = document.createElement('a-obj-model');
    smoolWallCamera.setAttribute('id', 'js--roof');
    smoolWallCamera.setAttribute('src', '#rietDak-obj');
    smoolWallCamera.setAttribute('mtl', '#rietDak-mtl');
    smoolWallCamera.setAttribute('position', '-0.25 0 -0.3');
    smoolWallCamera.setAttribute('scale', '0.015 0.015 0.015');
    smoolWallCamera.setAttribute('rotation', '90');
    camera.appendChild(smoolWallCamera);
};

placeRoof = () =>{
    if (camera.children[1].id === 'js--roof'){
        $('js--roof').remove();
        let smollWallFinalPlace = document.createElement('a-obj-model');
        smollWallFinalPlace.setAttribute('id', 'js--roof');
        smollWallFinalPlace.setAttribute('src', '#rietDak-obj');
        smollWallFinalPlace.setAttribute('mtl', '#rietDak-mtl');
        smollWallFinalPlace.setAttribute('position', '5 1.3 6');
        smollWallFinalPlace.setAttribute('scale', '0.8 1.5 1.2');
        smollWallFinalPlace.setAttribute('rotation', '0 ');
        scene.appendChild(smollWallFinalPlace);
        $('js--roofPlaceHolder').remove();
        checkDone();
    }else alert('dit stuk huis hoort hier niet')
};

checkDone = () =>{
    console.log(objectsPlaced);
    if (objectsPlaced === 5){
        setTimeout(function(){ location.replace("../../index.html") }, 4000);
    }else objectsPlaced ++;
};
