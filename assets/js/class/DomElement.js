import { datas } from "../data.js";

class DomElement {
    constructeur(selectedElement, addedNodeElement, ...attributes) {
        this.selectedElement = selectedElement;
        this.addNode = addedNodeElement;
        this.attributes = attributes;
    }

    injectedElement() {
        const domElement = document.querySelector(this.selectedElement)
                            .appendChild(document.createElement(this.addedNodeElement));
        // this.attributes = [{ id: value }, ...{ id: value }];
        if (Array.isArray(this.attributes) && this.attributes.length) {
            this.attributes.forEach(attribute => attribute = document.querySelector(domElement)
                .setAttribute(`${attribute.key}`, attribute.value));
        }
        return domElement;
    }

    injectedText() {
        return document.querySelector(this.selectedElement)
            .appendChild(document.createTexteNode(this.addedNodeElement));
    }


    /**Fonction permettant d'injecter la section avec ses enfants en utilisant l'objet datas
    * 
    */
    static domHandlerSection() {

        /*Initialisation d'un tableau de l'objet section dans datas*/
        const data = Object.entries(datas.section);

        /*Création du Titre de section*/
        const h2 = new DomElement("section:nth-child(2)", "h2").injectedElement();
        const span = new DomElement(h2, "span",[{ class : "secondary-color" }]).injectedElement();
        const spanText = new DomElement(span, `${data[0].at(1)[0]}`).injectedText();
        const h2Text = new DomElement(h2, `${data[0].at(1)[1]}`).injectedText();

        /*Création des articles dans section*/
        const articles = [];

        articles.forEach((article,i) => { 
            article = new DomElement("section:nth-child(2)", "article",[{id :`${data[i + 1].at(0)}`}])
        
            /*Création de l'élément h3 dans l'article*/

            const h3 = new DomElement("article", "h3").injectedElement();
            const icon1 = new DomElement("article > h3","i",[{class : "fa-solid fa-droplet"},{ariaHidden : "true"}]).injectedElement();
            const h3Text = new DomElement("article h3",`${data[i + 1].at(1).title}`).injectedText();
            const icon2 = new DomElement("article > h3","i",[{class : "fa-solid fa-droplet"},{ariaHidden : "true"}]).injectedElement();

    
            const image = new DomElement("article", "img");
            const para = [];
    
            para.forEach(p => p = new DomElement("article", "p"));
    
            const a = new DomElement("article", "a");
    
            const sectionToDisplay = new Display("section:nth-child(2)", "", "flex", "btn-section");
            const asideToDisplay = new Display("aside", "none", "inline-block", "btn-aside");
    
        
        
        
        
        });

        /*Injection des éléments des articles*/
        //élément h3


        // this.injectedElement("section:nth-child(2)", "h2").append(document.createElement("span"), `${data[0].at(1)[1]}`);
        // document.querySelector("span").textContent = `${data[0].at(1)[0]}`;
        // document.querySelector("span").setAttribute("class", "secondary-color");
        // const icon = [document.createElement("icon"), document.createElement("icon")];
        // for (const ic of icon) {
        //     ic.setAttribute("class", "fa-solid fa-droplet");
        //     ic.setAttribute("aria-hidden", "true");

        // }
        // icon.splice(1, 0, "");

        /*Boucle sur le tableau de data pour récupérer les données*/

        for (let i = 0; i < data.length - 1; i++) {

            // injectedElement("section:nth-child(2)", "article").id = `${data[i + 1].at(0)}`;
            // const h3Content = data[i + 1].at(1).title;
            // icon.splice(1, 1, h3Content);
            // injectedArticleElement(`#${data[i + 1].at(0)}`, "h3").append(icon[0],icon[1],icon[2]);
            // document.querySelector("h3").append(icon.splice(1, 0, data[i + 1].at(1).title).join(" "))

            injectedElement(`#${data[i + 1].at(0)}`, "h3")
                .innerHTML = `<i class="fa-solid fa-droplet" aria-hidden = "true"></i>
                    ${data[i + 1].at(1).title}
                    <i class="fa-solid fa-droplet" aria-hidden = "true"></i>`;
            // injectedElement(`#${data[i + 1].at(0)}`, "h3").append(icon[0],`${data[i + 1].at(1).title}`,icon[1]) ;
            let imageDatas = injectedElement(`#${data[i + 1].at(0)}`, "img");
            imageDatas.setAttribute("src", data[i + 1].at(1).img.url);
            imageDatas.setAttribute("alt", data[i + 1].at(1).img.alt);


            injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[0].p1} `;
            injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[1].p2} `;
            injectedElement(`#${data[i + 1].at(0)}`, "p").textContent = `${data[i + 1].at(1).para[2].p3} `;

            injectedElement(`#${data[i + 1].at(0)}`, "a").textContent = `${data[i + 1].at(1).a} `;

        }

    }

}
export default DomElement;