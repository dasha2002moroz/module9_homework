class KitchenAppliances{
  constructor(name, onoff){
    this.name = name;
    this.onoff = onoff;
  }
  turn(onoff){
    if(this.onoff === 'on'){
      this.onoff = 'off';
      console.log('устройство ' + this.name + ' выключено');
    }else{
      this.onoff = 'on';
      console.log('устройство ' + this.name + ' включено');
    }
  }
}

class Appliances extends KitchenAppliances{
  constructor(name, color, onoff, power){
    super(name, onoff);
    this.color = color;
    this.power = power;
  }
}

const microwave = new Appliances('microwave', 'black', 'off', 220);
const kettle = new Appliances('kettle', 'red', 'off', 330);

console.log(microwave);
console.log(kettle);

microwave.turn();
kettle.turn();

function generalpower(arr){
  let value = 0;
  arr.forEach((item) => {
    if(item.onoff === 'on'){
      value += item.power;
    }
  })
  console.log('общая мощность электроприборов '+value);
}
 generalpower([microwave, kettle]);