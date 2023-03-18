/** @format */
let div = document.getElementById('div'),
    h2 = document.querySelector('#div h2'),
    sizeForm = document.getElementById('sizeForm'),
    textForm = document.getElementById('textForm'),
    contentForm = document.getElementById('contentForm'),
    visualForm = document.getElementById('visualForm'),
    css = document.getElementById('css'),
    cssBttn = document.getElementById('bttn'),
    cssText = 'class',
    cssWidth = 100 + 'px',
    cssHeight = 100 + 'px',
    cssFontSize = 16 + 'px',
    cssColor = 'black',
    cssBckColor = 'white',
    cssBorderRadius = '0';

// --- control function ---
let control = function () {
    let elements = document.querySelectorAll('.alert');
    if (elements !== null) {
        elements.forEach(function (num) {
            num.remove();
        });
    }
};
// --- trigger function ---
const alert = (element, message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');

    element.append(wrapper);
};

// --- size ---
sizeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    control();
    let width = document.getElementById('width'),
        height = document.getElementById('height');

    // --- alert triggers ---
    const widthAlert = document.getElementById('widthAlert'),
        heightAlert = document.getElementById('heightAlert');

    if (width.value > 500) {
        alert(widthAlert, 'max 500px', 'danger');
        width.style.backgroundColor = 'coral';
    } else {
        div.style.width = width.value + 'px';
        cssWidth = width.value;
        console.log(cssWidth);
    }
    if (height.value > 500) {
        alert(heightAlert, 'max 510px', 'danger');
        height.style.backgroundColor = 'coral';
    } else {
        div.style.height = height.value + 'px';
        cssHeight = height.value + 'px';
    }
});

// --- text ---
textForm.addEventListener('submit', function (event) {
    event.preventDefault();
    control();
    let text = document.getElementById('text'),
        size = document.getElementById('size');

    // --- alert triggers ---
    const textAlert = document.getElementById('textAlert'),
        sizeAlert = document.getElementById('sizeAlert');

    if (text.value.length > 10) {
        alert(textAlert, 'max 10 chars', 'danger');
    } else if (text.value.length === 0) {
        alert(textAlert, 'enter some text', 'primary');
    } else {
        h2.textContent = text.value;
        cssText = text.value;
    }

    if (size.value > 50) {
        alert(sizeAlert, 'max 50 px', 'danger');
    } else {
        h2.style.fontSize = size.value + 'px';
        cssFontSize = size.value + 'px';
    }
});

// --- color ---
contentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    control();
    let font = document.getElementById('font'),
        bckColor = document.getElementById('bckGround');
    h2.style.color = font.value;
    div.style.backgroundColor = bckColor.value;
    cssColor = font.value;
    cssBckColor = bckColor.value;
});

// --- border ---
visualForm.addEventListener('submit', function (event) {
    event.preventDefault();
    control();
    let border = document.getElementById('border');
    const borderAlert = document.getElementById('borderAlert');

    if (border.value > 100) {
        alert(borderAlert, 'max 100px', 'danger');
    } else {
        div.style.borderRadius = border.value + 'px';
        cssBorderRadius = border.value + 'px';
    }
});
cssBttn.addEventListener('click', function (event) {
    css.style.border = '1px solid white;';
    css.style.boxShadow = '1px 1px 5px black';
    css.innerHTML = `.${cssText} {<br>
    width: ${cssWidth};<br>
    height: ${cssHeight};<br>
    font-size: ${cssFontSize};<br>
    color :${cssColor};<br>
    background-color: ${cssBckColor};<br>
    border-radius: ${cssBorderRadius};
}`;
});
