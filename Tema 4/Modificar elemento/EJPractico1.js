const MARCOS = {
  '1': { border: '8px solid #b8860b', borderRadius: '4px',  boxShadow: '0 4px 10px rgba(0,0,0,.4)' },
  '2': { border: '8px double #222',   borderRadius: '0',    boxShadow: '4px 4px 0 #888' },
  '3': { border: '8px ridge #8b4513', borderRadius: '12px', boxShadow: '0 0 12px #8b4513' },
  '4': { border: '8px dashed #c0392b', borderRadius: '50px 4px', boxShadow: '0 0 8px #c0392b' }
};

function estilizarImagen(img) {
  const marco = MARCOS[img.className];

  img.style.width = '120px';
  img.style.aspectRatio = '4 / 5';
  img.style.objectFit = 'cover';
  img.style.boxSizing = 'border-box';

  if (marco) Object.assign(img.style, marco);
}

function crearCuadricula() {
  Object.assign(document.body.style, {
    display: 'grid',
    gridTemplateRows: 'repeat(4, auto)',
    gridTemplateColumns: 'repeat(5, 120px)',
    gridAutoFlow: 'column',
    gap: '16px',
    justifyContent: 'center'
  });
}


document.querySelectorAll('img').forEach(estilizarImagen);