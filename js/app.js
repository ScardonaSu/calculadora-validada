function operaciones() {
  let operaciones = document.getElementById("operacion").value;
  const numero1 = parseInt(document.getElementById("num1").value);
  const numero2 = parseInt(document.getElementById("num2").value);

  if (operaciones == "suma") {
    resultado = `${numero1} + ${numero2} = ${numero1 + numero2}`;
  } else if (operaciones === "resta") {
    resultado = `${numero1} - ${numero2} = ${numero1 - numero2}`;
  } else if (operaciones === "multi") {
    resultado = `${numero1} x ${numero2} = ${numero1 * numero2}`;
  } else if (operaciones === "divi") {
    resultado = `${numero1} / ${numero2} = ${numero1 / numero2}`;
  } else if (operaciones === "potencia") {
    resultado = `${numero1} potencia ${numero2} = ${numero1 ** numero2}`;
  }
  document.getElementById("resultado").innerHTML = resultado;



/* Validacion de inputs */

  let operacion = document.getElementById("operacion").value;
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;

  if (operacion != "") {
    document.getElementById("operacion").classList.add("is-valid");
    document.getElementById("operacion").classList.remove("is-invalid");
    document.getElementById("respuesta-2").innerText =
      "Todo esta muy bien por aqui :)";
  } else {
    document.getElementById("operacion").classList.remove("is-valid");
    document.getElementById("operacion").classList.add("is-invalid");
    document.getElementById("respuesta-1").innerText = "Todo mal :)";
  }

  if (input1 != "") {
    document.getElementById("num1").classList.add("is-valid");
    document.getElementById("num1").classList.remove("is-invalid");
    document.getElementById("respuesta-4").innerText =
      "Todo esta muy bien por aqui :)";
  } else {
    document.getElementById("num1").classList.remove("is-valid");
    document.getElementById("num1").classList.add("is-invalid");
    document.getElementById("respuesta-3").innerText =
      "Ingrese el primer numero";
  }

  if (input2 != "") {
    document.getElementById("num2").classList.add("is-valid");
    document.getElementById("num2").classList.remove("is-invalid");
    document.getElementById("respuesta-6").innerText =
      "Todo esta muy bien por aqui :)";
  } else {
    document.getElementById("num2").classList.remove("is-valid");
    document.getElementById("num2").classList.add("is-invalid");
  }

  // document.getElementById('reset').reset()
}


const condicionalObject = () =>{

  const adversario = 'Lovezno'
  const loki_disfraces = {

    'Iron-man': 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thanos',
    Lovezno: 'Magneto'
  }

  const default_disfraz = 'Loki'

  const loki = loki_disfraces[adversario] || default_disfraz

  console.log(loki);

}



