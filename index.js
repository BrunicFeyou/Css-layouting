const btnmenu = document.querySelector('.fa-solid');
const sidebar = document.querySelector(".navBar1");
const navbar = document.querySelector(".navBar");

btnmenu.addEventListener('click', function() {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
})

    
if(navbar.style.display === 'block') {
    sidebar.style.display = 'none';
} 
   
