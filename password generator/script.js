function generate() {
    let dictionary = "";
    if (document.getElementById('lowerCase').checked) {
        dictionary += 'qwertyuiopasdfghjklzxcvbnm';
      }
      if (document.getElementById('lowerCase').checked) {
        dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
      }
      if (document.getElementById('numberCase').checked) {
        dictionary += '1234567890';
      }
      if (document.getElementById('specialCharCase').checked) {
        dictionary += '!@#$%^&*()_+-={}[];<>:';
      }

      const length = document.querySelector('input[type="range"]').value;

    //   if the value of the length is less than 1 or password length is 0 then don't do anything
      
  if (length < 1 || dictionary.length === 0) {
    return;
  }

  let password ="";
  for (let i = 0; i < length; i++) {
    const position=Math.floor(Math.random()*dictionary.length);
    password+=dictionary[position];
    
  }

  document.querySelector('input[type="text"]').value = password;

}
        // made this an array
        [...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
            elem.addEventListener('click', generate);
        });

        // as soon as the input range changes the password will change and the generate functin will be called
        document.querySelector('input[type="range"]').addEventListener('input', e => {
            document.querySelector('div.range span').innerHTML = e.target.value;
            generate();
          });

          
          

generate();