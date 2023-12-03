let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#darkmodeswitch')

const enableDarkMode = () =>{
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode','enabled')
};

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode',null);
};


darkModeToggle.addEventListener('click', ()=>{
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode(darkMode);
    }
    
});