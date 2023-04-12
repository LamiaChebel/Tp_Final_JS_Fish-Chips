class Display {
    constructor(element, valueInit, newValue, idButton) {
        this.element = element;
        this.valueInit = valueInit;
        this.newValue = newValue;
        this.idButton = idButton;
    }

    switchDisplayHide() {
        if (document.querySelector(this.element).style.display === this.valueDisplayInitial) {
            document.querySelector(this.element).style.display = this.newValueDisplay;
        }
        else {
            document.querySelector(this.element).style.display = this.valueDisplayInitial;
        }
    }


};

// sectiondisplay = new Display("section", "","flex") ; //this.element=section, "",flex
// sectionDisplay.onClickDisplayHide(e);// 
export default Display;