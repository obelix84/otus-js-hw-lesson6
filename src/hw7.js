function addParagraph() {
    let newPar = document.querySelector("#new_text").value;
    if(newPar != "") {
        let p = document.createElement("p");
        p.innerHTML = newPar;
        let node = document.querySelector("#all_par");
        node.append(p);
        let nodes = document.querySelectorAll("#all_par > p");
        if (nodes.length > 5) node.removeChild(nodes[0]);
    }
    return false;
}

function makeButtonVisible() {
    let newPar = document.querySelector("#new_text").value;
    if (newPar != "") {
        let inp = document.querySelector('input[type="submit"]');
        inp.removeAttribute("disabled");
    } else {
        document.querySelector('input[type="submit"]').setAttribute("disabled", "");
    }
}

module.exports = {addParagraph, makeButtonVisible};