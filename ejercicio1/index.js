// Ejercicios DOM I

// Ejercicio 1: 100 Buttons

// Dado el siguiente HTML inicial:

// <body>

// <section></section>

// </body>

// El ejercicio consiste en crear, usando exclusivamente JavaScript, 100 botones e introducirlos en la section.

// Estos botones tendrán como texto su número: el primer botón tendrá 1, el segundo 2, etc.
// El primer botón tendrá un color de fondo rojo, el segundo azul, el tercero rojo, el cuarto azul, etc.
// Una vez hayas creado los botones, da a cada quinto botón un color de texto verde.

const section = document.getElementById('section');

for(let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.style.width = '100px';
    button.style.height = '100px';
    button.style.margin = '4px';
    button.style.fontSize = '20px';
    if(i % 2 === 0) {
        button.style.backgroundColor = 'lightblue';
    } else if(i % 2 === 1) {
        button.style.backgroundColor = '#ffcccb';
    }

    if(i % 5 === 0) {
        button.style.color = '#00B01D';
    }
    section.appendChild(button);
}



// Ejercicio 2: Rainbow text
// Tienes el siguiente HTML:

// <div>
// 	<span>R</span>
// 	<span>A</span>
// 	<span>I</span>
// 	<span>N</span>
// 	<span>B</span>
// 	<span>O</span>
// 	<span>W</span>
// </div>
// En tu archivo .js tienes el siguiente array:

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// La tarea consiste en seleccionar todos los span, iterar sobre ellos y asignarle cada uno de los colores del array tal que las letras formen el arcoiris.

const span = document.getElementsByTagName('span');

for(let i = 0; i < span.length; i++) {
    let spanElement = span[i];
    for(let j = -1; j < i; j++) {
        let color = colors[i]
        spanElement.style.color = color;
    }
}