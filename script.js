async function get_data(index) {

    var grid = document.getElementById('mnist_grid');
    
    var og_height = grid.clientHeight;
    var og_width = grid.clientWidth;
    grid.innerHTML = "";
    var gifPath = './apple_loading.gif'; // Replace with the path to your GIF file
    var altText = 'Description of GIF'; // Replace with appropriate alternative text

    grid.innerHTML = `<img src="${gifPath}" alt="${altText}" width="${og_width}" height="${og_height}">`;

    // replaceWithLoadingGif('mnist_grid', 'globe.gif');
    var input_ = document.getElementById('mnist_id')
    index = input_.value;

    var data_type = document.getElementById('data_type').value;
    let url = `https://13.127.228.42:8088/mnist/${data_type}/${index}`
    const data = await fetch(url);
    const data_json = await data.json();
    const mnist_data = data_json.data;
    const label = data_json.label;
    createMNISTGrid(mnist_data);

    console.log(label)
    var label_ = document.getElementById("label");
    label_.innerText = `Label: ${label}`;

}

function createMNISTGrid(data) {

    var grid = document.getElementById('mnist_grid');
    grid.innerHTML = '';

    for (let i = 0; i < 28; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 28; j++) {
            const cell = document.createElement('td');
            const pixelValue = data[i * 28 + j];
            cell.style.backgroundColor = `rgb(${pixelValue}, ${pixelValue}, ${pixelValue})`;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
var index = 0

window.onload = function () {
    get_data(index);
}


// Call the function to replace the element with the loading GIF
