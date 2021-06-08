let links = ['https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg']
let units = {
    "brightness" : '%',
    "blur" : "px",
    "contrast" : "%",
    "grayscale" : "%",
    "hue-rotate" : "deg",
    "invert" : "%",
    "opacity" : "%",
    "saturate" : "%",
    "sepia" : "%"
}

function init() {
    let random = Math.floor(Math.random() * links.length);

    let img = document.createElement('img')

    img.id = 'dataimage';

    img.setAttribute('src', links[random])

    document.querySelector('.img-container').append(img)
}

function applyStyles() {
    let img = document.querySelector('.img-container > img')
    let slider = document.querySelectorAll('.styles > p > label > input')
    let data = []
    let filters;

    for(let i of Array.from(slider)) {
        data.push(`${i.id}(${i.value}${units[i.id]})`)
        i.addEventListener('input', (e) => {
            data[Array.from(slider).indexOf(i)] = `${i.id}(${i.value}${units[i.id]})`
            filters = data.join(' ')
            img.style.filter = filters;
        })
    }
}

function saveIt() {
    let div = document.querySelector('.image-container');
    let saveBtn = document.querySelector(".download");

    saveBtn.addEventListener('click', () => {
        html2canvas(div).then(
            function (canvas) {
                var link = document.createElement('a');
                link.download = 'draw.png';
                link.href = canvas.toDataURL()
                link.click();
            }
        )
    })
}


init()
applyStyles()
