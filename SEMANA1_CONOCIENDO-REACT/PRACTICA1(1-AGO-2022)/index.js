const create = React.createElement

const h1 = create('h1', {}, 'Con lo visto hasta ahora');
const h2 = create('h2', {}, 'Replica este HTML');
const h3 = create('h3', {}, 'Usando');
const h4 = create('h4', {}, 'React.js')
const pie_pagina = create('footer', {}, 'Suerte!')

const main = create("main", {}, [h1, h2, h3, h4]);

ReactDOM.render([main, pie_pagina], document.body)