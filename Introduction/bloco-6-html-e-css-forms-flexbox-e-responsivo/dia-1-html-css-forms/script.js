//Json de estados
const estados = dados.estados;
const formEstados = document.getElementById('user-state');

for (const key in estados) {
  let estado = document.createElement('Option');
  estado.innerText = estados[key].nome;
  let valorDoEstado = estados[key].nome.split(" ").join("-").toLowerCase();
  estado.value = valorDoEstado;
  formEstados.appendChild(estado);
}

//Variáveis Globais
let errors = 0;

const submitButton = document.getElementById('submit-button');
const ResetButton = document.getElementById('reset-button');

const userName = document.getElementById('user-name');
const userNameMaxLength = 40;//userName.maxLength;
const userNameMinLength = 1;//userName.maxLength;

const userEmail = document.getElementById('user-email');
const userEmailMaxLength = 50;
const userEmailMinLength = 1;

const userCpf = document.getElementById('user-cpf');
const userCpfMaxLength = 11;
const userCpfMinLength = 11;

const userAddress = document.getElementById('home-address');
const userAddressMaxLength = 200;
const userAddressMinLength = 1;

const userCity = document.getElementById('user-city');
const userCityMaxLength = 28;
const userCityMinLength = 1;

const userResume = document.getElementById('resume-summary');
const userResumeMaxLength = 1000;
const userResumeMinLength = 1;

const userJob = document.getElementById('job');
const userJobMaxLength = 40;
const userJobMinLength = 1;

const userJobDescription = document.getElementById('job-description');
const userJobDescriptionMaxLength = 500;
const userJobDescriptionMinLength = 1;

const startData = document.getElementById('start-data'); 
const dataError = document.getElementById('data-error'); 

function checkLength (input, lengthTarget, minLengthTarget) {
  let errors = 0;
  const wordLength = input.value.length;
  const wordId = input.id;

  if (wordLength === 0) {
    input.classList.add('alert-warning');
    errors += 1;
  } else if (wordLength > lengthTarget || wordLength < minLengthTarget){
    input.classList.add('alert-danger');
    errors += 1; 
  }
  return errors;
}

// function checkBissexto (year) {
//   if ((year%400 == 0) || (year%4==0 && year%100 !== 0)) {
//     return true;
//   }
//   return false;
// }

// function checkDataDay(days) {
//   console.log(days);
// }

// function checkDataMonth() {
//   console.log('teste');
// }

// function checkDataYear() {
//   console.log('teste');
// }

// function checkData() {
//   let dia = parseInt(startData.value[0] + startData.value[1], 10);
//   let mes = (`${startData.value[3]}${startData.value[4]}`);
//   let ano = parseInt(startData.value[6] + startData.value[7] + startData.value[8] + startData.value[9], 10);

//   if (mes === 2 && `${ano}`.length === 4) {
//     let fevDays = (checkBissexto(ano) === true) ? 29 : 28;
//     checkDataDay(fevDays);
//   } else {
//     if (mes % 2 === 0 && `${mes}`.length > 1) {
//       checkDataDay(30);
//     } else {
//       checkDataDay(31);
//     }
//   }


//   (startData.value.length === 2) ? (startData.value += '/') : true ;
//   (startData.value.length === 5) ? (startData.value += '/') : true ;
// }



window.onload = function () {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let errorCounter = 0;
    errorCounter += checkLength(userName, userNameMaxLength, userNameMinLength);
    errorCounter += checkLength(userEmail, userEmailMaxLength, userEmailMinLength);
    errorCounter += checkLength(userCpf, userCpfMaxLength, userCpfMinLength);
    errorCounter += checkLength(userAddress, userAddressMaxLength, userAddressMinLength);
    errorCounter += checkLength(userCity, userCityMaxLength, userCityMinLength);
    const userState = document.getElementById('user-state').value;
    document.getElementsByName('home').forEach(radio => {
      if (radio.checked) {
        errorCounter -= 0.5;
      } else {
        console.log(radio)
        radio.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        errorCounter += 0.5;
      }
    })
    errorCounter += checkLength(userResume, userResumeMaxLength, userResumeMinLength);
    errorCounter += checkLength(userJob, userJobMaxLength, userJobMinLength);
    errorCounter += checkLength(userJobDescription, userJobDescriptionMaxLength, userJobDescriptionMinLength);
    alert('foram encontrados ' + errorCounter + ' erros')
  });
  // startData.addEventListener('input', checkData);
}
