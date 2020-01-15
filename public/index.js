const clickButton = document.getElementById('getSearchedLocation');
document.addEventListener('click', (event) => {
    event.stopPropagation;
    const input = document.getElementById('searchedLocation').value;
    if(event.target.id === 'getSearchedLocation') {
        const locationParam = input.split(' ').join('-');
        const searchParams = `?location=${locationParam}`;
        window.location.replace('/weather' + searchParams)
    }
})

document.addEventListener('keypress', (event) => {
    event.stopPropagation;
    const input = document.getElementById('searchedLocation').value;
    if(event.charCode === 13 && input) {
        const locationParam = input.split(' ').join('-');
        const searchParams = `?location=${locationParam}`;
        window.location.replace('/weather' + searchParams)
    }
})