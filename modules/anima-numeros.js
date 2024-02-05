export default AnimaNumeros {
  constructor(numeros, observeClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observeClass = observeClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static() {
  incrementarNumero(numero) {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
     const timer = setInterval(() => {
       start += incremento;
       numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
         clearInterval(timer);
      }
      }, 25 * Math.random());
    }

     animaNumeros() {

      this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
    }
  }

  let observer;
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserve() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numero.length && this.observerTarget) {
      this.addMutationObserve();
    }
  return this;
  }
 
}
