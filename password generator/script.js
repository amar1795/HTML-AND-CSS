function generate() {
    let dictionary = "";
    if (document.getElementById('lowerCase').checked) {
        dictionary += 'qwertyuiopasdfghjklzxcvbnm';
      }
      if (document.getElementById('upperCase').checked) {
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
        // made this an array,if clicked on any checkbx or generate button password will be updated
        [...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
            elem.addEventListener('click', generate);
        });

        // as soon as the input range changes the password will change and the generate functin will be called
        document.querySelector('input[type="range"]').addEventListener('input', e => {
            document.querySelector('div.range span').innerHTML = e.target.value;
            generate();
          });

          document.querySelector('div.password button').addEventListener('click', () => {
            const pass = document.querySelector('input[type="text"]').value;
            // to copy the password from the input and it returns a promise
            navigator.clipboard.writeText(pass).then(() => {
              document.querySelector('div.password button').innerHTML = 'copied!';
              setTimeout(() => {
                document.querySelector('div.password button').innerHTML = 'copy';
              }, 1000);
            })
          });
          
          
          

generate();