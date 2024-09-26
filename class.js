class SwitchButton {
  constructor() {
    this.status = false;
    this.lamp = {};
  }

  switchOff() {
    this.status = false;
    this.lamp.turnOff();
  }

  switchOn() {
    this.status = true;
    this.lamp.turnOn();
  }

  connectToLamp(ElectricLamp) {
    this.lamp = ElectricLamp;
  }
}

class ElectricLamp {
  constructor() {
    this.status = false;
  }

  turnOff() {
    this.status = false;
  }

  turnOn() {
    this.status = true;
  }
}
