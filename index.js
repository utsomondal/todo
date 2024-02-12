const addBtn = document.getElementById('add-btn').addEventListener('click', function () {
    const title = document.getElementById('title');
    const details = document.getElementById('details');

    // data validation
    if (title.value.length === 0 || details.value.length === 0){
        return alert('Please Input Data');
    }

        // div creation
        const divTag = document.createElement('div');
    const newTag = document.createElement('p');
    const anotherTag = document.createElement('p');
    // value set
    newTag.textContent = title.value;
    anotherTag.textContent = details.value;

    // styles in div
    divTag.style.backgroundColor = 'white';
    divTag.style.padding = '16px';
    divTag.style.borderRadius = '6px';

    // style in new tag p
    newTag.style.fontSize = '20px';
    newTag.style.fontWeight = 'bold';

    // append to div
    divTag.appendChild(newTag);
    divTag.appendChild(anotherTag);

    // append to notes
    const notes = document.getElementById('notes');
    notes.appendChild(divTag);

    // input clearing
    title.value = '';
    details.value = '';
});