//Task-1
function assign(targetObj) {
  for(var i = 1; i < arguments.length; i++) {
    Object.keys(arguments[i]).forEach((key) => {
      targetObj[key] = arguments[i][key];
    });
  }

  return targetObj;
};

// var defaults = { a: 123, b: 777 };
// var options = { a: 456 };
// var configs = assign({}, defaults, options);

//Task - 2
function Bot(obj) {
  this.name = obj.name;
  let speed = obj.speed;
  this.defaultSpeed = obj.speed;
  this.x = obj.x;
  this.y = obj.y;
  this.type = 'Bot';
}

Bot.prototype.getSpeed = function() {
  return this.speed;
};

Bot.prototype.setSpeed = function(speed) {
  this.speed = speed;
};

Bot.prototype.getDefaultSpeed = function() {
  return this.defaultSpeed;
};

Bot.prototype.getCoordinates = function () {
  return {x: this.x, y: this.y};
};

Bot.prototype.setCoordinates = function(x,y) {
  this.x = x;
  this.y = y;
};

Bot.prototype.move = function(direction) {
  this.changeCoords(direction);
};

Bot.prototype.changeCoords = function(direction) {
  switch(direction) {
    case 'down':
    this.y -= this.speed;
    break;
    case 'up':
    this.y += this.speed;
    break;
    case 'right':
    this.x += this.speed;
    break;
    case 'left':
    this.x -= this.speed;
    break;
    default:
    console.log(`Oops! I know only basic moves. Please, choose the one from 'up/down/left/right' options.`);
  }
};

Bot.prototype.showPosition = function() {
  console.log(`My name is ${this.type} ${this.name}. I am located at ${this.x}, ${this.y}.`);
};

function Racebot(obj) {
  Bot.call(this, obj);
  this.previousMove = null;
  this.type = 'Racebot';
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(direction) {
  if(direction === this.previousMove) {
    this.speed++;
  } else {
    this.speed = this.defaultSpeed;
    this.previousMove = direction;
  }
  this.changeCoords(direction);
};

function Speedbot(obj) {
  Bot.call(this, obj);
  this.type = 'Speedbot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function() {
  this.speed += 2;
};

Speedbot.prototype.move = function(direction) {
  this.changeCoords(direction);
  if(tdirection && this.speed > this.defaultSpeed) {
    this.speed--;
  }
};

// let Botty = new Bot({name: "Betty", speed: 2, x: 0, y: 1});
// let Racy = new Racebot({name:'Racy', speed: 4, x: 2, y:6});
// let Speedy = new Speedbot({name:"Spe", speed:3, x:5, y:2});
