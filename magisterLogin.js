const error = document.querySelector('a');
const login = window[1]?.frames.document.querySelectorAll('a')[2];

if (error && error.innerHTML === "Sessão Expirada, efetue o login por favor.") {
  window.location.href = 'https://wwws.facipe.edu.br/Portal/Index.jsp'
}

if (login && login.innerHTML === 'OK') {
  setTimeout(() => {
    login.click();
  }, 2000)
}