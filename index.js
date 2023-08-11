document.querySelectorAll(".nav-item").forEach(item=> {
    item.addEventListener('click', event => {
        document.getElementById("current").removeAttribute("id", "current");
        event.target.setAttribute("id", "current");
    })
})