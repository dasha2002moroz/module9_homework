function KitchenAppliances(name, onoff, power){
    this.name = name;
    this.onoff = onoff;
  }
  
  KitchenAppliances.prototype.turn = function(onoff){
    if(this.onoff === 'on'){
      this.onoff = 'off';
      console.log('устройство ' + this.name + ' выключено');
    }else{
      this.onoff = 'on';
      console.log('устройство ' + this.name + ' включено');
    }
  }
  
  Appliances.prototype = new KitchenAppliances();
  
  function Appliances(name, color, onoff, power){
    this.name = name;
    this.color = color;
    this.onoff = onoff;
    this.power = power;
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