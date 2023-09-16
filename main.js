let menu = document.getElementById("menu");
let sideMenu = document.getElementById("sideMenu");
let icon = document.getElementById("icon");

menu.addEventListener('click', ()=>{
    sideMenu.classList.remove('hidden');
});
icon.addEventListener('click', ()=>{
    sideMenu.classList.add('hidden');
});