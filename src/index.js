/*---------- Counting blocks ---------------------------*/
const $countblock = document.querySelectorAll('.countblock');

$countblock.forEach(block => {
    block.querySelector('.btn-minus')
        .addEventListener('click', (btn) => {
            btn.target
                .closest('.countblock')
                .querySelector('.counter')
                .innerHTML--;
        });
    block.querySelector('.btn-plus')
        .addEventListener('click', (btn) => {
            btn.target
                .closest('.countblock')
                .querySelector('.counter')
                .innerHTML++;
        });
});

/*---------- Changing color blocks ---------------------*/
const $colorblock = document.querySelectorAll('.colorblock');
const colors = ['blue', 'green', 'yellow'];

$colorblock.forEach(block => {
    block.addEventListener('click', function() {
        const color = colors.shift();

        colors.push(color);
        this.style.background = color;

        document.getElementById('colorblocks').append(this);
    });
});