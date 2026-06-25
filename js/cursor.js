document.addEventListener("mousemove", (e) => {

    const cursor = document.querySelector(".cursor-glow");

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});