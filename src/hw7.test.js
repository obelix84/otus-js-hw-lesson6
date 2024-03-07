/**
 * @jest-environment jsdom
 */
const {addParagraph, makeButtonVisible} = require("./hw7.js");

describe("Testing DOM adding via events", () => {

    let div = document.createElement("div");
    div.setAttribute("id", "all_par");
    let p = document.createElement("p");
    p.innerHTML = "First";
    div.appendChild(p);
    let p1 = document.createElement("p");
    p1.innerHTML = "Second";
    div.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerHTML = "Third";
    div.appendChild(p2);
    let form = document.createElement("form");
    form.setAttribute("id", "form_id");
    let textarea = document.createElement("textarea");
    textarea.setAttribute("id", "new_text");
    form.appendChild(textarea);
    let input = document.createElement("input");
    input.type = "submit";
    input.id = "submit";
    input.disabled = true;
    form.appendChild(input);
    document.body.append(div);
    document.body.append(form);
    document.getElementById('form_id').addEventListener("submit", addParagraph, false);
    document.getElementById('new_text').addEventListener("change", makeButtonVisible, false);


    it("Adding paragraph after click", () => {
            let event = new Event('submit');
            let textArea = document.getElementById('new_text');
            textArea.value = "Fourth";
            document.getElementById('form_id').dispatchEvent(event);
            expect(document.querySelector("#all_par").innerHTML)
                .toEqual("<p>First</p><p>Second</p><p>Third</p><p>Fourth</p>");
    });

    it("Remove first element after 5 elements", () => {
        let event = new Event('submit');
        let textArea = document.getElementById('new_text');
        textArea.value = "Five";
        document.getElementById('form_id').dispatchEvent(event);
        textArea.value = "Six";
        document.getElementById('form_id').dispatchEvent(event);
        expect(document.querySelector("#all_par").innerHTML)
            .toEqual("<p>Second</p><p>Third</p><p>Fourth</p><p>Five</p><p>Six</p>");
    });

    it("Remove disabled attr after onChange", () => {
        let event = new Event('change');
        let textArea = document.getElementById('new_text');
        textArea.value = "something";
        document.getElementById('new_text').dispatchEvent(event);
        expect(document.getElementById('submit').hasAttribute("disabled")).not.toBeTruthy();
    });


});