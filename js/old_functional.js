function loadAllHtml() {
    
    let img = createImage('img/going.gif', '20%');
    document.body.insertBefore(img, document.body.firstChild);

    let dvContainer = createContainer();
    document.body.insertBefore(dvContainer, document.getElementById('scr'));

    let btn1 = createButton('Start', ['btn', 'btn-start']);

    let btn2 = createButton('Stop', ['btn', 'btn-stop']);

    let btn3 = createButton('Reset', ['btn', 'btn-reset']);


    dvContainer.appendChild(btn1);
    dvContainer.appendChild(btn2);
    dvContainer.appendChild(btn3);
}

function createButton(txt, classList) {
    let btn = document.createElement('button');
    btn.innerText = txt;
    for (let f of classList) {
        btn.classList.add(f);
    }
    return btn;
}


function createImage(src, width) {
    let img = document.createElement('img');
    img.src = src;
    img.style.width = width;
    return img;
}

function createContainer() {
    let dvContainer = document.createElement('div');
    dvContainer.className = 'controls';
    return dvContainer;
}



function activeAllElements() {
    let interval = null;
    let isRunning = false;
    document.getElementsByClassName('btn-start')[0]
        .addEventListener('click', function () {
            if (!isRunning) {
                interval = setInterval(() => {
                    let img = document.querySelector('img');
                    let iml = parseInt(getComputedStyle(img).marginLeft);
                    iml += 2;
                    isRunning = true;
                    img.style.marginLeft = `${iml}px`;
                }, 20);
            }

        });

    document.getElementsByClassName('btn-stop')[0]
        .addEventListener('click', function () {
            if (interval != null) {
                clearInterval(interval);
                isRunning = false;
            }

        });



    document.getElementsByClassName('btn-reset')[0]
        .addEventListener('click', function () {
            if (interval != null) {
                clearInterval(interval);
                isRunning = false;
                document.querySelector('img').style.marginLeft = 0;
            }

        });
}