let animation = {
    _isRunning: false,
    _interval: null,
    _animatableElementInstance: null,
    animate: function (elementId, sec) {
        this._animatableElementInstance = document.getElementById(elementId);
        if (!this._isRunning) {
            this._interval = setInterval(function () {
                let element = document.getElementById(elementId);
                let imgML = parseInt(getComputedStyle(element).marginLeft);
                imgML += 1;
                element.style.marginLeft = `${imgML}px`;
            }, sec);
            this._isRunning = true;
        }
    },
    stopAnimate: function () {
        if (this._interval != null) {
            this._isRunning = false;
            clearInterval(this._interval);
        }
    },
    resetAnimate: function (elementId) {
        this.stopAnimate();
        let element = document.getElementById(elementId);
        element.style.marginLeft = 0;
    }
}


let dom = {
    createElement: function (tagName, className, cssProps) {
        //create dom element
        let element = document.createElement(tagName);
        //check if this element is valid html element
        if (element != null) {
            //if so, then validate classname existance
            if (this._isValidValue(className)) {
                element.className = className;
            }

            //enumerate all css properties given as  object
            for (let f in cssProps) {
                //check if object key is valid attribute
                if (this._isValidAttr(f)) {
                    //then use it as attribute
                    element[f] = cssProps[f];
                }
                //otherwise,it is just style.Use it as style..
                else {
                    element.style[f] = cssProps[f];
                }
            }
        }
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}

function loadAllHtmlContent() {

    //create img
    let img = dom.createElement('img', 'img-basic', {
        'src': "going.gif",
        'width': "20%",
        'id': 'animetableImage'
    })

    //add it before script
    document.body.insertBefore(img, document.getElementById('scr'));

    //create container
    let divContainer = dom.createElement('div', 'controls');

    //with buttons
    let btn_start = dom.createElement('button', 'btn btn-start', {
        'innerText': 'start'
    });
    let btn_stop = dom.createElement('button', 'btn btn-stop', {
        'innerText': 'stop'
    });
    let btn_reset = dom.createElement('button', 'btn btn-reset', {
        'innerText': 'reset'
    });

    //add buttons to container
    divContainer.appendChild(btn_start);
    divContainer.appendChild(btn_stop);
    divContainer.appendChild(btn_reset);

    //append container after img
    document.body.after(img, divContainer);

}