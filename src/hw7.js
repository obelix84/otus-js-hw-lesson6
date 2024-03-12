function addParagraph() {
  const newPar = document.querySelector('#new_text').value;
  if (newPar != '') {
    const p = document.createElement('p');
    p.innerHTML = newPar;
    const node = document.querySelector('#all_par');
    node.append(p);
    const nodes = document.querySelectorAll('#all_par > p');
    if (nodes.length > 5) node.removeChild(nodes[0]);
  }
}

function makeButtonVisible() {
  const newPar = document.querySelector('#new_text').value;
  if (newPar != '') {
    const inp = document.querySelector('input[type="submit"]');
    inp.removeAttribute('disabled');
  } else {
    document.querySelector('input[type="submit"]').setAttribute('disabled', '');
  }
}

module.exports = { addParagraph, makeButtonVisible };
