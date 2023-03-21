// 1- En el documento sobra el h2 con la clase subtitle. Debes eliminarlo.
const subtitle = document.getElementById('subtitle');
subtitle.remove();

// 2- Los span con la clase bold deben aparecer en negrita. Hazlo sin tocar el documento de CSS: dale los estilos inline.
const spanBold = document.getElementsByClassName('bold');
for(let i = 0; i < spanBold.length; i++) {
    const span = spanBold[i];
    span.style.fontWeight = 'bold';
}

// 3- Los span con la clase italics deben ir en cursiva. Hazlo sin tocar el documento de CSS: dale los estilos inline.
const spanItalic = document.getElementsByClassName('italics');
for(let i = 0; i < spanItalic.length; i++) {
    const span = spanItalic[i];
    span.style.fontStyle = 'italic';
}

// 4- En el article con la id="index" hay dentro una lista que ha perdido sus elementos. Te proporcionamos aquí el array con el texto de dichos elementos en orden; itera sobre la lista y ve creando los li necesarios con el texto apropiado: ["Introducción", "Biografía", "Obras"].
const elementList = ["Introducción", "Biografía", "Obras"]

const articleIndex = document.getElementById('index');
const ulIndex = articleIndex.lastElementChild;

for(let i = 0; i < elementList.length; i++) {

    const li = document.createElement('li');

    li.innerText = elementList[i];

    ulIndex.appendChild(li);
}


// 5- Todos los elementos de las listas dentro de la section con las obras deben tener la clase "work-item".
const workSection = document.getElementById('works-section');
const childsSection = workSection.children;

for(let i = 0; i < childsSection.length; i++) {
    const child = childsSection[i];

    child.classList.add('work-item');
}



// 6- A todos los link del documento les faltan sus url. Aquí tienes un array con las mismas, en orden; itera sobre la lista y da a cada elemento su atributo href con la url correspondiente:

const urls = [
    "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27",
    "https://es.wikipedia.org/wiki/Albert_Einstein",
    "https://es.wikipedia.org/wiki/John_Maynard_Keynes",
    "https://es.wikipedia.org/wiki/Marie_Curie",
    "https://es.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
    "https://es.wikipedia.org/wiki/Rafael_Alberti",
    "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
];

const a = document.getElementsByTagName('a');

/* for(const url of urls) {
    for(const index of a) {
        index.href = url;
        index.setAttribute('target', '_blank');
    }
} */

for (const index in urls) {
    console.log(urls[index], a[index]);
    a[index].href = urls[index];
    a[index].setAttribute('target', '_blank');
}