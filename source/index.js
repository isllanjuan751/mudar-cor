import "./index.css";

const mudar_btn = document.getElementById("mudar-cor");

mudar_btn.addEventListener("click", async() => {
    const {mudar_texto} = await import("./texto.js");
    const {mudar_titulo} = await import("./titulo.js");

    setInterval(() => {
        mudar_texto();
        mudar_titulo();
        if (document.body.style.backgroundColor === "blue") {
            document.body.style.backgroundColor = "green";
        } else {
            document.body.style.backgroundColor = "blue";
        }
    }, 1000);
});