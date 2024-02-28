const codigo = {
    "a": "k", "b": "q", "c": "x", "d": "f", "e": "m", "f": "w", "g": "o",
    "h": "r", "i": "b", "j": "p", "k": "t", "l": "z", "m": "i", "n": "v",
    "o": "s", "p": "g", "q": "j", "r": "c", "s": "a", "t": "y", "u": "n",
    "v": "d", "w": "u", "x": "h", "y": "l", "z": "e"
};

function btnEncriptar() {
    const textArea = document.querySelector(".text-area");
    const mensagem = document.querySelector(".mensagem");

    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    return stringEncriptada.toLowerCase().split("").map(char => codigo[char] || char).join("");
}

function btnDesencriptar() {
    const textArea = document.querySelector(".text-area");
    const mensagem = document.querySelector(".mensagem");

    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    const inversoCodigo = Object.fromEntries(Object.entries(codigo).map(([k, v]) => [v, k]));
    return stringDesencriptada.split("").map(char => inversoCodigo[char] || char).join("");
}