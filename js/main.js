const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const cadastrarBtn = document.getElementById("cadastrarBtn");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeInput.value;
  const email = emailInput.value;

  adicionarContato(nome, email);

  nomeInput.value = "";
  emailInput.value = "";
  cadastrarBtn.disabled = true;
});

nomeInput.addEventListener("input", validarInputs);
emailInput.addEventListener("input", validarInputs);

function validarInputs() {
  cadastrarBtn.disabled =
    nomeInput.value.trim() === "" || emailInput.value.trim() === "";
}

function adicionarContato(nome, email) {
  const li = document.createElement("li");
  li.className = "w-full bg-white rounded shadow-md border-gray-50 p-4 mb-4 last:mb-0";
  li.innerHTML = `<h5 class='text-2xl font-bold capitalize'>${nome}</h5><p class='text-gray-700 text-sm'>${email}</p>`;

  document.getElementById("contatos-list").appendChild(li);
  nomeInput.focus();
}