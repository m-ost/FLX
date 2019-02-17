var data =
[
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];


function findTypes(...el) {
  var res = [];
  for(var i=0;i<el.length;i++) {
    res.push(typeof el[i]);
  }
  return res;
}

findTypes('number');
findTypes(null, 5, 'hello');


function executeForEach(arr,func) {
  for(var i=0;i<arr.length;i++) {
    func(arr[i]);
  }
}

executeForEach([1,2,3],function(el) {
  console.log(el)
});


function mapArray(arr,funcMap) {
  var newArr = [];
  executeForEach(arr,function(el) {
    newArr.push(funcMap(el));
  });
  return newArr;
}

mapArray([2,5,8], function(el) {
  return el + 3
});


function filterArray(arr,func) {
  var newFilterArray = [];
  executeForEach(arr,function(el) {
    if(func(el)) {
      newFilterArray.push(el);
    }
  });
  return newFilterArray;
}

filterArray([2,5,8], function(el) {
  return el < 3
});


function getAmountOfAdultPeople(data) {
  return filterArray(data, function(el) {
    return el.age>18
  }).length;
}

getAmountOfAdultPeople(data);


function getGreenAdultBananaLovers(data) {
  var filteredData = filterArray(data, function(el) {
    return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'
  });
  return mapArray(filteredData, function(el) {
    return el.name
  });
}

getGreenAdultBananaLovers(data);


function keys(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key);
  }
  return arr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});


function values(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});


function showFormattedDate(date) {
  var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = date.getDate();
  var month = monthArr[date.getMonth()];
  var year = date.getFullYear();
  return `Date: ${day} of ${month}, ${year})`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));


function isEvenYear(date) {
  return !(date.getFullYear() % 2);
}

isEvenYear(new Date('2019-01-27T01:10:00'));


function isEvenMonth(date) {
  return !!(date.getMonth() % 2);
}

isEvenMonth(new Date('2019-02-27T01:10:00'));
