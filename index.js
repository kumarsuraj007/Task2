var enlargeFun = () => {
    document.querySelector('#image').setAttribute('width','400px');
    document.querySelector('#image').setAttribute('height','400px');
    document.querySelector('#btn').textContent = 'Undo';
    document.querySelector('#btn').setAttribute('onClick', 'undoFun()');
    
}

var undoFun = () => {
    document.querySelector('#image').setAttribute('width','250px');
    document.querySelector('#image').setAttribute('height','250px');
    document.querySelector('#btn').textContent = 'Enlarge';
    document.querySelector('#btn').setAttribute('onClick', 'enlargeFun()');
}

var showFun = () => {
    document.querySelector('#image').style.display = 'none';
    document.querySelector('#btnShow').textContent = 'Show';
    document.querySelector('#btnShow').setAttribute('onClick', 'hideFun()');
}

var hideFun = () => {
    document.querySelector('#image').style.display = 'block';
    document.querySelector('#btnShow').textContent = 'Hide';
    document.querySelector('#btnShow').setAttribute('onClick', 'showFun()');
}

var darkFun = () => {
    document.body.style.backgroundColor = 'black';
    document.querySelector('#btnTheme').textContent = 'Light';
    document.querySelector('#btnTheme').setAttribute('onClick', 'lightFun()');
}

var lightFun = () => {
    document.body.style.backgroundColor = '';
    document.querySelector('#btnTheme').textContent = 'Dark';
    document.querySelector('#btnTheme').setAttribute('onClick', 'darkFun()');
}
