import { datas } from "../js/data/index.js";
console.log(datas);
/** Fonction permettant d'injecter un élement dans le DOM
 * @param element 
 */

function injectedSectionElement(element) {
    return document.querySelector("section:nth-child(2)")
        .appendChild(document.createElement(element));
}

/**Fonction permettant d'injecter des éléments dans l'article directement
 * 
 * @param element 
 */
function injectedArticleElement(element) {
    return document.querySelector("article")
        .appendChild(document.createElement(element));
}

function domHandlerSection() {

    injectedSectionElement("h2").textContent = `${datas.section.title.join(" ")}`;

    for (let i in datas.section) {
        console.log(datas.section[i+1]);
        injectedSectionElement("article").setAttribute("class", `${datas.section[i + 1]}`);
        injectedArticleElement("h3").textContent = `${datas.section[i + 1].title}`;
        injectedArticleElement("img").textContent = `${datas.section[i + 1].img}`;
        for (const par of datas.section.para) {
            injectedArticleElement("p").textContent = `${datas.section[i + 1].para[par]}`;
        }
        injectedArticleElement("a").textContent = `${datas.section[i + 1].a}`;

    }

}
//On attends que le DOM se charge pour injectier les éléments dans la section

document.addEventListener("DOMContentLoaded", function () {

    domHandlerSection();

})