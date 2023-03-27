export class SingletonCounterService {
  PAGES = {};

  constructor() {
    if (!SingletonCounterService.instance) {
      SingletonCounterService.instance = this;
    }

    return SingletonCounterService.instance;
  }

  getSingleton(page) {
    return this.PAGES[page] ?? 0;
  }

  incSingleton(page) {
    this.PAGES[page] ??= 0;
    this.PAGES[page]++;
  }

  static instance = null;
}
