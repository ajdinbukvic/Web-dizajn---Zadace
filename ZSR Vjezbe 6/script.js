fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => processData(data));

const processData = data => {

    const parent = document.getElementById('main-div');

    data.forEach(element => {

        const firstDiv = document.createElement('div'); 
        firstDiv.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-lg-0');
        firstDiv.style = 'padding: 20px';

        const secondDiv = document.createElement('div');
        secondDiv.classList.add('card', 'shadow-sm', 'border-0', 'rounded');

        const thirdDiv = document.createElement('div'); 
        thirdDiv.classList.add('card-body', 'p-0');

        const img = document.createElement('img');
        img.classList.add('w-100', 'card-img-top');
        img.src = 'https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg';

        const fourthDiv = document.createElement('div');  
        fourthDiv.classList.add('p-4');

        const h6 = document.createElement('h6');
        h6.classList.add('mb-0');
        h6.innerHTML = element.name;

        const p1 = document.createElement('p');
        p1.classList.add('text-muted');
        p1.innerHTML = element.username;

        const p2 = document.createElement('p');
        p2.classList.add('text-muted');
        p2.innerHTML = element.company.name;

        fourthDiv.appendChild(h6);
        fourthDiv.appendChild(p1);
        fourthDiv.appendChild(p2);
        thirdDiv.appendChild(img);
        thirdDiv.appendChild(fourthDiv);
        secondDiv.appendChild(thirdDiv);
        firstDiv.appendChild(secondDiv);
        parent.appendChild(firstDiv);
        
    });
}
