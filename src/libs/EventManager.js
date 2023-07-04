export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    const listeners = this.listeners[event]
    if (!listeners) return;

    listeners.forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event]
    if (!listeners) return;

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove)

    this.listeners = filteredListeners
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addevent', (payload) => {
  console.log(payload);
});
