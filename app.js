let button = document.querySelector('#show')
        let characterName = document.querySelector('#fetch')
        let birthDay = document.querySelector('#birth')
        let height = document.querySelector('#height')
        let characterGender = document.querySelector('#gender')
        let skinColor = document.querySelector('#skincolor')

        // console.log(characterId);

        const getInfo = () => {
            let characterId = Math.floor(Math.random() * 83) + 1;
            let url = `https://swapi.dev/api/people/${characterId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    displayDetails(data);
                });
        }

        function displayDetails(data) {
            characterName.innerText = `Name: ${data.name}`;
            if (data.birth_year != 'undefined') {
                birthDay.innerText = `Birth Day: ${data.birth_year}`;
            }
            height.innerText = `Height: ${data.height}`;
            characterGender.innerText = `Gender: ${data.gender}`;
            skinColor.innerText = `Skin Color: ${data.skin_color}`;
        }

        button.addEventListener('click', getInfo);