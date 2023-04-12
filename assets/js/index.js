import { datas } from "../js/data/index.js";
import Display from "./class/Display.js";
import DomElement from "./class/domElement.js";


const sectionToDisplay = new Display("section:nth-child(2)","","flex","btn-section");
const asideToDisplay = new Display("aside","inline-block","none","btn-aside");

/** Fonction permettant d'injecter un élement dans le DOM
 * @param element 
 */

// function injectedElement(selectedElement,addElement) {
//     return document.querySelector(selectedElement)
//         .appendChild(document.createElement(addElement));
// }

/**Fonction permettant d'injecter la section avec ses enfants en utilisant l'objet datas
 * 
 */
// function domHandlerSection() {

//     /*Initialisation d'un tableau de l'objet section dans datas*/
//     const data = Object.entries(datas.section);
//     injectedElement("section:nth-child(2)","h2").append(document.createElement("span"), `${data[0].at(1)[1]}`);
//     document.querySelector("span").textContent = `${data[0].at(1)[0]}`;
//     document.querySelector("span").setAttribute("class", "secondary-color");
//     // const icon = [document.createElement("icon"), document.createElement("icon")];
//     // for (const ic of icon) {
//     //     ic.setAttribute("class", "fa-solid fa-droplet");
//     //     ic.setAttribute("aria-hidden", "true");

//     // }
//     // icon.splice(1, 0, "");

//     /*Boucle sur le tableau de data pour récupérer les données*/

//     for (let i = 0; i < data.length - 1; i++) {

//         injectedElement("section:nth-child(2)","article").id = `${data[i + 1].at(0)}`;
//         // const h3Content = data[i + 1].at(1).title;
//         // icon.splice(1, 1, h3Content);
//         // injectedArticleElement(`#${data[i + 1].at(0)}`, "h3").append(icon[0],icon[1],icon[2]);
//         // document.querySelector("h3").append(icon.splice(1, 0, data[i + 1].at(1).title).join(" "))

//         injectedElement(`#${data[i + 1].at(0)}`, "h3")
//             .innerHTML = `<i class="fa-solid fa-droplet" aria-hidden = "true"></i>
//                     ${data[i + 1].at(1).title}
//                     <i class="fa-solid fa-droplet" aria-hidden = "true"></i>`;
//         // injectedElement(`#${data[i + 1].at(0)}`, "h3").append(icon[0],`${data[i + 1].at(1).title}`,icon[1]) ;
//         let imageDatas = injectedElement(`#${data[i + 1].at(0)}`, "img");
//         imageDatas.setAttribute("src", data[i + 1].at(1).img.url);
//         imageDatas.setAttribute("alt", data[i + 1].at(1).img.alt);


//         injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[0].p1} `;
//         injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[1].p2} `;
//         injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[2].p3} `;

//         injectedElement(`#${data[i + 1].at(0)}`, "a").textContent = `${data[i + 1].at(1).a} `;

//     }

// }

/**Fonction utilitaire de cache-cache pour les éléments
 * @param element 
 */

// function switchDisplayHide(element, valueDisplayInitial, newValueDisplay) {
//     if (document.querySelector(element).style.display === valueDisplayInitial) {
//         document.querySelector(element).style.display = newValueDisplay;
//     }
//     else {
//         document.querySelector(element).style.display = valueDisplayInitial;
//     }
// }

// Fonction de cache-cache des éléments


function onClickDisplayHide(e) {
    e.preventDefault();
    if (e.target.id === sectionToDisplay.idButton) {
        sectionToDisplay.switchDisplayHide();
    }
    else {
        asideToDisplay.switchDisplayHide();

    }
}

//On attends que le DOM se charge pour injectier les éléments dans la section

document.addEventListener("DOMContentLoaded", function () {

    DomElement.domHandlerSection();

    document.querySelectorAll(sectionToDisplay.idButton,asideToDisplay.idButton).
        forEach(btn => btn.addEventListener("click", onClickDisplayHide));

});
