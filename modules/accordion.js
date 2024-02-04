export default class Accordion {

  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass ='ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.toggleClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  /* adiciona os eventos ao accordion */
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.activeAccordion(item));
    });
  }
 
  /* iniciar fução */
  init() {
    if (this.accordionList.length) {
      /* ativar primeiro item */
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
