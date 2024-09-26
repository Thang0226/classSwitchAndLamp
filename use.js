function showState(boolean) {
  if (boolean) return "On";
  else return "Off";
}

let switch_button = new SwitchButton();
let lamp = new ElectricLamp();

switch_button.connectToLamp(lamp);

for (let i = 0; i < 10; i++) {
  let s = "";
  switch_button.switchOff();
  s += `Switch state after switch off: ${showState(switch_button.status)} <br>`;
  s += `Lamp state after switch off: ${showState(lamp.status)} <br>`;
  switch_button.switchOn();
  s += `Switch state after switch on: ${showState(switch_button.status)} <br>`;
  s += `Lamp state after switch on: ${showState(lamp.status)} <br>`;
  s += "<br>";
  document.write(s);
}
