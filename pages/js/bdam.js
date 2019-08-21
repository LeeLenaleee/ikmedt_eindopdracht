function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');
const cursor = $('js--cursor');
const placed = [false, false, false, false, false, false, false];
let lastBox = "";

pickPink = () =>{
    // check if already holding something
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--pink1', '#FF0084'));
};

pickPink1 = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--pink2', '#FF0084'));
};

pickPink2 = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--pink3', '#FF0084'));
};

pickGold = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--gold', '#FFD700'));
};

pickSilver = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--silver1', '#C0C0C0'));
};

pickSilver1 = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--silver2', '#C0C0C0'));
};

pickBronze = () =>{
    if (camera.children[1]) return;
    camera.appendChild(makeBox('js--bronze', '#774f2e'));
};

makeBox = (id, color, width = '0.1', height = '0.1', depth = '0.1', position = '-0.1 0 -0.3') =>{
    if ($(id)) $(id).remove();

    let box = document.createElement('a-box');
    box.setAttribute('id', id);
    box.setAttribute('color', color);
    box.setAttribute('position', position);
    box.setAttribute('width', width);
    box.setAttribute('height', height);
    box.setAttribute('depth', depth);
    return box;
};

placeBronze = () =>{
    if (camera.children[1].id === 'js--bronze'){
        scene.appendChild(makeBox("js--bronze", '#774f2e', '1', '1', '1', '3 0.7 -5'));
        placed[0] = true;
    }
    checkDone();
};

placeSilver = () =>{
    if (camera.children[1].id === 'js--silver1'){
        if (!placed[3]){
            let box = makeBox("js--silver1", '#C0C0C0', '1', '1', '1', '1 0.7 -5');
            box.setAttribute('onclick', 'placeSilver()');
            scene.appendChild(box);
            placed[2] = true
        }else{
            scene.appendChild(makeBox("js--silver1", '#C0C0C0', '1', '2', '1', '1 1.7 -5'));
            placed[2] = true
        }
    }
    if (camera.children[1].id === 'js--silver2'){
        if (!placed[2]){
            let box = makeBox("js--silver2", '#C0C0C0', '1', '1', '1', '1 0.7 -5');
            box.setAttribute('onclick', 'placeSilver()');
            scene.appendChild(box);
            placed[3] = true
        } else{
            scene.appendChild(makeBox("js--silver2", '#C0C0C0', '1', '2', '1', '1 1.7 -5'));
            placed[3] = true
        }
    }
    checkDone();
};

placeGold = () =>{
    if (camera.children[1].id === 'js--gold'){
        scene.appendChild(makeBox("js--gold", '#FFD700', '1', '1', '1', '-1 0.7 -5'));
        placed[1] = true;
    }
    checkDone();
};

placePink = () =>{
    if (camera.children[1].id === 'js--pink1'){
        if (!placed[5] && !placed[6]){
            let box = makeBox("js--pink1", '#FF0084', '1', '1', '1', '-3 0.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[4] = true
        }else if (!placed[5] || !placed[6]){
            let box = makeBox("js--pink1", '#FF0084', '1', '2', '1', '-3 1.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[4] = true
        } else{
            scene.appendChild(makeBox("js--pink1", '#FF0084', '1', '3', '1', '-3 2.7 -5'));
            placed[4] = true
        }
    }

    if (camera.children[1].id === 'js--pink2'){
        if (!placed[4] && !placed[6]){
            let box = makeBox("js--pink2", '#FF0084', '1', '1', '1', '-3 0.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[5] = true
        }else if (!placed[4] || !placed[6]){
            let box = makeBox("js--pink2", '#FF0084', '1', '2', '1', '-3 1.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[5] = true
        } else{
            scene.appendChild(makeBox("js--pink2", '#FF0084', '1', '3', '1', '-3 2.7 -5'));
            placed[5] = true
        }
    }

    if (camera.children[1].id === 'js--pink3'){
        if (!placed[5] && !placed[4]){
            let box = makeBox("js--pink3", '#FF0084', '1', '1', '1', '-3 0.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[6] = true
        }else if (!placed[5] || !placed[4]){
            let box = makeBox("js--pink3", '#FF0084', '1', '2', '1', '-3 1.7 -5');
            box.setAttribute('onclick', 'placePink()');
            scene.appendChild(box);
            placed[6] = true
        } else{
            scene.appendChild(makeBox("js--pink3", '#FF0084', '1', '3', '1', '-3 2.7 -5'));
            placed[6] = true
        }
    }
    checkDone();
};

checkDone = () =>{
    if (placed[0] && placed[1] && placed[2] && placed[3] && placed[4] && placed[5] && placed[6]) setTimeout(function(){ location.replace("../../index.html") }, 4000)
};
