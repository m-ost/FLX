function formatTime(time) {
  var converted = '';
  var d = Math.floor(time / 1440);
  var h = Math.floor((time % 1440) / 60);
  var m = time % 60;
  converted = d + ' day(s) '+ h + ' hour(s) ' + m + ' minute(s) ';
  return converted;
}

formatTime(120);
formatTime(59);
formatTime(3601);
