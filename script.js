const form = document.querySelector('#cepForm')
const formInput = document.querySelector('#inputForm')
const infoStreet = document.querySelector('.infoStreet')
const returnInfo = document.querySelector('#returnInfo')
const spin = document.querySelector('.spin')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const cep = formInput.value
    
    viaCep(cep)
})




const viaCep = async (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            openSpin()

            setTimeout(() => {
                infoStreet.innerHTML = ''
                if(data.erro === 'true') {
                    returnInfo.innerText = `Rua não encontrada`
                    console.log('teste');
                    
                } else {
    
                    createElement(data)
                }
                
                openSpin()
            }, 2000)
        })
}

function createElement(data) {
    returnInfo.innerText = 'Rua Encontrada Encontrada'
    infoStreet.innerHTML = `
    <div>
        <div>
            <span class="spanName">Rua: </span>
            <span class="streetName span">${data.logradouro}</span>
        </div>
        <div>
            <span class="spanName">Cidade: </span>
            <span class="cityName span">${data.localidade}</span>
        </div>
        <div>
            <span class="spanName">Bairo: </span>
            <span class="neighborhood span">${data.bairro}</span>
        </div>
        <div>
            <span class="spanName">UF: </span>
            <span class="uf span">${data.uf}</span>

        </div>
    </div>
    `
}

function openSpin() {
    spin.classList.toggle('openSpin')
}