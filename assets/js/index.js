import { datas } from "../js/data/index.js";
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
function injectedArticleElement(article, element) {
    return document.querySelector(article)
        .appendChild(document.createElement(element));
}

function domHandlerSection() {

    /*Initialisation d'un tableau de l'objet section dans datas*/
    const data = Object.entries(datas.section);

    injectedSectionElement("h2").textContent = `${data[0].at(1).join(" ")}`;

    /*Boucle sur le tableau de data pour récupérer les données*/

    for (let i = 0; i < data.length - 1; i++) {

        injectedSectionElement("article").setAttribute("class", `${data[i + 1].at(0)}`);
        injectedArticleElement(`.${data[i + 1].at(0)}`, "h3").textContent = `${data[i + 1].at(1).title}`;
        let imageDatas = injectedArticleElement(`.${data[i + 1].at(0)}`, "img");
        imageDatas.setAttribute("src", data[i + 1].at(1).img.url);
        imageDatas.setAttribute("alt", data[i + 1].at(1).img.alt);


        injectedArticleElement(`.${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[0].p1} `;
        injectedArticleElement(`.${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[1].p2} `;
        injectedArticleElement(`.${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[2].p3} `;

        injectedArticleElement(`.${data[i + 1].at(0)}`, "a").textContent = `${data[+1].at(1).a} `;

    }

}
//On attends que le DOM se charge pour injectier les éléments dans la section

document.addEventListener("DOMContentLoaded", function () {

    domHandlerSection();
    

})