let ram;
const collection = Array.from(document.querySelectorAll('.menu__link'));
function start(el) {
    collection.forEach((el) => {
        el.onclick = () => {
            let neighbour = el.nextElementSibling;
            if (neighbour) {
                if (ram) {
                    ram.classList.remove('menu_active');
                }
                neighbour.classList.add('menu_active');
                ram = neighbour;
                return false
            } else {
                if (ram) {
                    ram.classList.remove('menu_active');
                }
            }
        }
    })
}
start(collection)
