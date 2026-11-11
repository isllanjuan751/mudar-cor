const texto_inner = document.getElementById("Texto");

export const mudar_texto = () => {
    if (texto_inner.textContent === "O site tá um caos") {
        texto_inner.textContent = "O site esta pior";
    } else {
        texto_inner.textContent = "O site tá um caos";
    }
};