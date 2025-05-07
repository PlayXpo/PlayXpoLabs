function getIp(callback) {
fetch('ipinfo.io/140.82.183.34?token=66e2f39b20a2bd', { headers: { 'Accept': 'application/json' }})
.then((resp) => resp.json())
.catch(() => {
return {
country: 'us',
};
})
.then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
utilsScript:
"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});



document.getElementById('bas').addEventListener('submit', function(e) {
      e.preventDefault();
      
     

      
      const fname = document.querySelector('input[name="fname"]').value;
     const lname = document.querySelector('input[name="lname"]').value;
     const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    localStorage.setItem("fname", fname);
localStorage.setItem("lname",lname);
     localStorage.setItem("phone", phone);
localStorage.setItem("email", email);

      window.location.href='../html/About_Job.html'
})


