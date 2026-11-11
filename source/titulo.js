export const mudar_titulo = () => {
    if (document.title === "Site") {
        document.title = "Site ta doido";
        if (document.title === "Site ta doido") {
            document.title = "Sita tá um caos, renicie";
        }
    } else {
        document.title = "Site";
    }
};