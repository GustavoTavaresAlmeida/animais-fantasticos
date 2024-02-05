export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistances() {
    this.distance = [this.sections].map((section) => {
    const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    console.log();
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        item.element.section.classList.add('ativo');
      } else if (item.element.section.classList.contains('ativo')) {
        item.element.section.classList.remove('ativo');
        }
    });
  }

    init() {
      if (this.sections.length){
      this.getDistances();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }  
   return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
