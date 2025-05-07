

document.getElementById('yesNoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;

const interest = document.querySelector('select[name="int"]').value;

const fname = localStorage.getItem('fname')
const lname = localStorage.getItem('lname')
const phone = localStorage.getItem('phone')
const email = localStorage.getItem('email')
const data = {
  fname: fname,
  lname: lname,
  phone: phone,
  email: email,
  interest: interest,
  q1: form.q1.value,
  q2: form.q2.value,
  q3: form.q3.value,
  q4: form.q4.value,
  q5: form.q5.value,
  q6: form.q6.value
};

fetch('https://script.google.com/macros/s/AKfycbx7f6GcpUsYZDgdLgVb-rM65pK-zFY5vsCHFmluZ_jHAIPQW8Bxdt_CVHekkEV7CGlT/exec', {
    method: 'POST',
    mode:'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(text => alert(text))
  .catch(error => alert('Error: ' + error));
  window.location.href='../html/end.html'
});
