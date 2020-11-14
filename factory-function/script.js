function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    }

    function on(onevent, callback) {
        elements.forEach(element => {
            element.addEventListener(onevent, callback);
        });
        return this;
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className)
        });
        return this;
    }


    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}

const btns = $$('button');
console.log(btns.hide().show());

function handleClick(event) {
    console.log(event.target);
    btns.addClass('thiago');
}

btns.on('click', handleClick);
btns.removeClass('thiago');