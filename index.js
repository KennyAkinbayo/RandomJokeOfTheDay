 

 const arrJokes = ['Jokes1', 'Jokes 2', 'Jokes 3', 'Jokes 4', 'Jokes 5']
 let numOfJokes = arrJokes.length;




const jokeDay = document.querySelector("#joke-day")

console.log(jokeDay)  
console.log(arrJokes)
 const btnJoke =  document.querySelector('#btn-joke');

 jokeDay.textContent = ""
  



// get the joke from the following Api!
 const jokeUrl = 'https://api.icndb.com/jokes/random'

 
 // run an anonymous function when the button is clicked to generate a random Joke!

  btnJoke.addEventListener('click', async function fetchJoke(){
          const response = await fetch(jokeUrl)
            
          // if there is an error fecthing the joke Api!!!
          
          if (!response.ok) {
              const message = `An error has occured: ${response.status}`;
              throw new Error(message);
            }
          console.log(response)
        
          const data = await response.json();
          jokeDay.textContent = data.value.joke;
        }
 )

 
  

 