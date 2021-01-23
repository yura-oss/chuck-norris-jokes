const weather = () => {
    fetch('http://api.icndb.com/jokes/random')
        .then(w => w.json())
        .then(w => {
            const generate = document.querySelector('#generate');
            let jokeResources = w.value;
            let realJokes = jokeResources.joke;

            generate.addEventListener('click', function () {
                let output = '';
                output += `
                    ${realJokes}
                `

                document.querySelector('.text-fill').innerHTML = output;
            })

        })
}

weather()
