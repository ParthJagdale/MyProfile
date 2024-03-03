function togglemenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function embedPDF() {
    var pdfContainer = document.getElementById("pdfContainer");
    var embedCode = '<embed src="./assets/parth_res" type="application/pdf" width="100%" height="600px" />';
    pdfContainer.innerHTML = embedCode;
}