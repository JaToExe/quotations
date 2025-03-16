"use scrict"

// set default language
let language = 'eng';

// inicalize variables
const textBox = document.querySelector('.quote');
const authorBox = document.querySelector('.author');
const pl = document.querySelector('.pl');
const eng = document.querySelector('.en');
const reload = document.querySelector('.reload');

// add click event
pl.addEventListener('click', () => {
    language = 'pl';  

    eng.classList.remove('active');
    pl.classList.add('active')

    
    fetchQuote(language);  
});

eng.addEventListener('click', () => {
    language = 'eng'; 

    pl.classList.remove('active'); 
    eng.classList.add('active');   

    fetchQuote(language);  
});

// run query
fetchQuote(language);

function fetchQuote(language) {
    fetch(`http://localhost:8080/api/quote?lang=${language}`).then(response => response.json()).then(data => {
            textBox.style.transition = 'opacity 0.5s ease';
            textBox.style.opacity = '0';  
            authorBox.style.transition = 'opacity 0.5s ease';
            authorBox.style.opacity = '0'; 


            setTimeout(() => {
                textBox.textContent = data.quote;   
                authorBox.textContent = '~' + data.author; 

                textBox.style.opacity = '1';  
                authorBox.style.opacity = '1';  
            }, 500); 

            console.log(data);
        });
}

// set internal
setInterval(() => {
    fetchQuote(language);  
}, 5000);
