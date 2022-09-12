const addNameJob = (newName, newJob) => {

    const table = document.getElementById('table')
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerHTML = newName;
    td2.innerHTML = newJob;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
});

const fetchData = () => {

    const status = document.getElementById('status');
    const newName = document.getElementById('add-name').value;
    const newJob = document.getElementById('add-job').value;

    if(!newName || !newJob) {
        alert('Blank form');
        return false;
    }
    
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            job: newJob 
        })
        })
        .then(res => {
            if(!res.ok){
                throw Error('Error!');
            }
            status.innerHTML = `Status: ${res.status}`;
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })

        addNameJob(newName, newJob);
}


