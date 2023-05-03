let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode')


//enabling the dark mode
const enableDarkMode = () =>{
    toggleBtn.classList.replace('fa-sun', 'fa-moon');  //replacing the icon 
    body.classList.add('dark');                       //adding a <div> with class name with class=dark
    localStorage.setItem('dark-mode', 'enabled');     //static transition after refresh

}
//disabling the dark mode
const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon', 'fa-sun');   //replacing the icon back to sun
    body.classList.remove('dark');                      //removing the class class name with class=dark
    localStorage.setItem('dark-mode', 'disabled');      //disable static transition after refresh
}

if(darkMode == 'enabled'){
    enableDarkMode();                 //to check for static transition after refresh
}

//on click arrow function to call enable/disable function for the transition
toggleBtn.onclick = (e) =>{
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode == 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}

