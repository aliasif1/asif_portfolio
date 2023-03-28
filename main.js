// Setting light dark theme
let darkTheme = true;
const themeElement = document.querySelector(".theme-icon");
themeElement.addEventListener("click", () => {
    // change dark theme to light theme
    if(darkTheme){
        darkTheme = false;
        themeElement.classList.remove('fa-sun');
        themeElement.classList.add('fa-moon');
        document.body.classList.remove("dark");
    }
    else{
        darkTheme = true;
        themeElement.classList.remove('fa-moon');
        themeElement.classList.add('fa-sun');
        document.body.classList.add("dark");
    }

})

// Setting options display
const handleDisplay = (option) => {
    console.log(option);
    if(option === display){
        return;
    }
    // hide the last display 
    if(display === 'info'){
        infoButton.classList.toggle('selected');
        infoSection.classList.toggle('hide');
    }
    else if(display === 'projects'){
        projectsButton.classList.toggle('selected');
        projectsSection.classList.toggle('hide');
    }
    else if(display === 'skills'){
        SkillsButton.classList.toggle('selected');
        skillsSection.classList.toggle('hide');
    }

    // show the new display 
    if(option === 'info'){
        infoButton.classList.toggle('selected');
        infoSection.classList.toggle('hide');
    }
    else if(option === 'projects'){
        projectsButton.classList.toggle('selected');
        projectsSection.classList.toggle('hide');
    }
    else if(option === 'skills'){
        SkillsButton.classList.toggle('selected');
        skillsSection.classList.toggle('hide');
    }
    display = option
}

let display = 'projects';
const infoSection = document.getElementById('info')
const projectsSection = document.getElementById('projects')
const skillsSection = document.getElementById('skills')

// Buttons
const infoButton = document.getElementById('infoButton')
const projectsButton = document.getElementById('projectsButton')
const SkillsButton = document.getElementById('skillsButton')


infoButton.addEventListener("click", () => handleDisplay('info'))
projectsButton.addEventListener("click", () => handleDisplay('projects'))
SkillsButton.addEventListener("click", () => handleDisplay('skills'))