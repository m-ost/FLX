var inputs = process.argv.slice(2);
   var result = inputs.map(el => el[0]).reduce((inputs,el) => inputs+el);
   console.log(result);
