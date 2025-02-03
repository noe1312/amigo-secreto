let amigos = [];
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
  mostrarAmigos();
}
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos dos participantes para el sorteo.");
    return;
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let mezclar = amigos.slice();
  mezclar.sort(() => Math.random() - 0.5);

  for (let i = 0; i < mezclar.length; i++) {
    let amigo1 = mezclar[i];
    let amigo2 = mezclar[(i + 1) % mezclar.length];
    let item = document.createElement("li");
    item.textContent = `${amigo1} → ${amigo2}`;
    resultado.appendChild(item);
  }
}
