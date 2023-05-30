import Notiflix from 'notiflix';

function createPromise(position, delay) {
  
return new Promise((resolve, reject) => {const shouldResolve = Math.random() > 0.3;

  setTimeout(()=> {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
});
};

const form = document.querySelector(".form");
const delayInput = document.querySelector("input[name = delay]");
const stepInput = document.querySelector("input[name = step]");
const amountInput = document.querySelector("input[name = amount]");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  let currentPosition = delay;

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    createPromise(position, currentPosition)
    .then((result) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${result.delay}ms`);
     
      })
      .catch((error) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${error.delay}ms`);
     
      });

    currentPosition += step;
  }
});


