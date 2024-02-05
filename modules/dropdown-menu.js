import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events =events;
    
    this.events = ['touchstart', 'click']
    this.activeClass = 'active';
    this.activeDropdownMenu =this.activeDropdownMenu.bind(this);
  }
  

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      this.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }

}
