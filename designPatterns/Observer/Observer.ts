class ObservedElement {
  el: HTMLInputElement;
  observers: any[];
  constructor(el) {
    this.el = el;
    this.el.addEventListener("input", () => {
      this.notify(this.el.value);
    });
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const elementToUnsubscribe = this.observers.findIndex(
      (element) => element === observer
    );
    this.observers.splice(elementToUnsubscribe, 1);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class ObserverElement {
  el: HTMLElement;
  constructor(el) {
    this.el = el;
  }

  update(data) {
    this.el.innerText = data;
  }
}

const elObserved = document.querySelector("#subject");
const elObserver = document.querySelector("#observer");
const elObserver2 = document.querySelector("#observer2");

const observed = new ObservedElement(elObserved);
const observer = new ObserverElement(elObserver);
const observer2 = new ObserverElement(elObserver2);

observed.subscribe(observer);
observed.subscribe(observer2);

setTimeout(() => observed.unsubscribe(observer2), 5000);
