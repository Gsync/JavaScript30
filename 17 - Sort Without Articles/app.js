const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//Removes the starting words(a, the, an) in the string str
function strip(str) {
    return str.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => {
    return strip(a) > strip(b) ? 1 : -1; 

});

document.querySelector('#bands').innerHTML = sortedBands.map(d=> {
    return `<li>${d}</li>`
}).join('');
