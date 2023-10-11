//Crear una interfaz, que el usuario elija entre sacar area de rectangulo, cuadro, triangulo - 

//Declaración de variables.
let result;
let output = document.getElementById('area');
let selector = document.getElementById('figureSelection');
let selected = selector.value;
const btn = document.getElementById('calc');

//Función para calcular el area de un triangulo.
const triangleArea = () => {
    let height = parseFloat(document.getElementById('height').value);
    let base = (document.getElementById('base').value);

    result = (base * height) / 2;


};

//Función para calcular el area de un cuadrado.
const squareArea = () => {

    let side = document.getElementById('lado').value;

    result = (side * side);

};

//Función para calcular el area de un rectangulo.
const rectangleArea = () => {
    let height = document.getElementById('height').value;
    let base = document.getElementById('base').value;

    result = (base * height);

};

//Evento que escucha cuando se cambia o elige una opción el elemento 'select'
selector.addEventListener('change', () => {
    selected = selector.value;

    if (selected == 'Cuadrado') {
        document.getElementById('height').style.visibility = 'hidden';
        document.getElementById('base').style.visibility = 'hidden';
        document.getElementById('lado').style.visibility = 'visible';
    } else {
        document.getElementById('height').style.visibility = 'visible';
        document.getElementById('base').style.visibility = 'visible';
        document.getElementById('lado').style.visibility = 'hidden';
    }

    output.value = "";

});

//Evento que escucha cuando se hace 'click' en el boton calcular
btn.addEventListener('click', () => {

    if (selected === 'Triangulo') {
        triangleArea();
    } else if (selected === 'Rectangulo') {
        rectangleArea();
    } else {
        squareArea();
    }

    output.value = result;

    height.value = "";
    base.value = "";

});
