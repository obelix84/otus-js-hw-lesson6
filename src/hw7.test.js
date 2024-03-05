/**
 * @jest-environment jsdom
 */
const {addParagraph, makeButtonVisible} = require("./hw7.js");

describe("Testing DOM adding via events", () => {
    document.body.innerHTML = '<div id="all_par">' +
        "<p>First</p>" +
        "<p>Second</p>" +
        "<p>Third</p>" +
        "</div>" +
        "<form action=''>" +
        "<p><textarea name='comment' cols='40' rows='3' id='new_text' onchange=''></textarea></p> " +
        "<p><input type='submit' onclick='' id='submit' disabled></p>" +   "</form>";
    document.getElementById('submit').addEventListener("click", addParagraph, false);
    document.getElementById('new_text').addEventListener("change", makeButtonVisible, false);


    it("Adding paragraph after click", () => {
            let event = new Event('click');
            let textArea = document.getElementById('new_text');
            textArea.value = "Fourth";
            document.getElementById('submit').dispatchEvent(event);
            expect(document.querySelector("#all_par").innerHTML)
                .toEqual("<p>First</p><p>Second</p><p>Third</p><p>Fourth</p>");
    });

    it("Remove first element after 5 elements", () => {
        let event = new Event('click');
        let textArea = document.getElementById('new_text');
        textArea.value = "Five";
        document.getElementById('submit').dispatchEvent(event);
        textArea.value = "Six";
        document.getElementById('submit').dispatchEvent(event);
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