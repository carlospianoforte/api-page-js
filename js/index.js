import { getUsuarios } from "./api/usuariosInfo.js";
import { mostrarInfo } from "./utils/usuarios.utils.js";

(async () => {
  const body = document.querySelector("body");

  const h1Cargando = document.createElement("h1");
  h1Cargando.textContent = "CARGANDO...";
  body.appendChild(h1Cargando);

  const usuarios = await getUsuarios();//espere a que se resuelva el awat para seguir

  body.removeChild(h1Cargando);

  for (let i = 0; i < usuarios.length; i++) {
    const divContenedor = document.createElement("div");
    divContenedor.setAttribute("class", "tarjeta");
    divContenedor.setAttribute("id", "usuario-" + usuarios[i].nombre);

    const h3Nombre = document.createElement("h3");
    h3Nombre.textContent = usuarios[i].nombre;

    const pEdad = document.createElement("p");
    pEdad.textContent = `Edad: ${usuarios[i].edad}`;

    const pOcupacion = document.createElement("p");
    pOcupacion.textContent = `Ocupación: ${usuarios[i].ocupacion}`;

    const imgFoto = document.createElement("img");
    imgFoto.setAttribute("src", usuarios[i].imgSrc);

    const buttonMostrar = document.createElement("button");
    buttonMostrar.innerHTML = "Mostrar info";
    buttonMostrar.addEventListener("click", () => mostrarInfo(usuarios, i));

    divContenedor.appendChild(h3Nombre);
    divContenedor.appendChild(pEdad);
    divContenedor.appendChild(pOcupacion);
    divContenedor.appendChild(imgFoto);
    divContenedor.appendChild(buttonMostrar);

    body.appendChild(divContenedor);
  }
})();
