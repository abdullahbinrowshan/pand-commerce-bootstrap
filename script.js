const h2LightBlue = document.getElementsByTagName('h2');
for (const colors of h2LightBlue) {
    colors.style.color = 'lightblue'
}

const backPack = document.getElementById('backpack').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}

function handle(e) {
    console.log('Alhamdulillah ami perechi');
}

const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', function () {
        button.style.display = 'none'
    })
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.className = ''

const inputEmail = document.getElementById('input-email');


inputEmail.addEventListener('keyup', function () {
    const hello = inputEmail.value;
    if (hello == 'email') {
        document.getElementById('submit-btn').removeAttribute('disabled');
        document.getElementById('submit-btn').className='panda-btn-bg py-2 px-4'
      } else {
        document.getElementById('submit-btn').className = "";
        document.getElementById('submit-btn').disabled = true;
      }
})