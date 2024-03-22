const input = document.querySelector("[name='dataEncrypt']");
const elementResult = document.querySelector("#container__result");
const messageValidation = document.querySelector("#messageValidation");
const validarTextoExpReg = /^[a-z\s]+$/;


const keys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};
const reverseKeys = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
};

function textEncrypt() {
  messageValidation.classList.remove("alert-validation");
  if (validarTextoExpReg.test(input.value) === true) {
      let resultEncryption = input.value.replace(/[aeiou]/g, vocal => keys[vocal]);
      elementResult.innerHTML = `
      <div class='container__text__encrypt' id='text__encrypt'>
      ${resultEncryption}
      </div>
      <div class='container__button__copy'>
          <button class='btn btn-grey' onclick='copyEncryption()'>
          Copiar
          </button>
      </div>`;
  } else {
      messageValidation.classList.add("alert-validation");
  }
}

function descrifrarTexto() {
  let decryptorRegExp = new RegExp(Object.keys(reverseKeys).join("|"), "g");
  let decryptedText = input.value.replace(decryptorRegExp, vocal => reverseKeys[vocal]);
  elementResult.innerHTML = `
    <div class='container__text__encrypt' id='text__encrypt'>
    ${decryptedText}
    </div>
    <div class='container__button__copy'>
      <button class='btn btn-grey' onclick='copyEncryption()'>
      Copiar
      </button>
    </div>`;
}

async function copyEncryption() {
  let text = document.getElementById("text__encrypt").innerText;
  try {
      await navigator.clipboard.writeText(text);
  } catch (err) {
      console.error("Error al copiar texto: ", err);
  }
}