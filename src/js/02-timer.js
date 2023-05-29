import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const datePicker = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
btnStart.disabled = true;

const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");

const flexbox = document.querySelector(".timer");
flexbox.style.display = "flex";

const indent = document.querySelectorAll(".field");
indent.forEach((element) => {
    element.style.marginRight = "10px";});

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {

if(selectedDates[0] <= new Date()) {
    Notiflix.Notify.failure("Please choose a date in the future")
        } else {
            btnStart.disabled = false;
        };
      }
     };

     const flatPicker = flatpickr(datePicker, options);

     btnStart.addEventListener("click", () => {
        const selectedDate = flatPicker.selectedDates[0];
        const endDate = new Date(selectedDate);
        endDate.setSeconds(0);
        btnStart.disabled = true;

        const interval = setInterval(() => {
const timeDif = endDate.getTime() - Date.now();

if (timeDif <= 0) {
    clearInterval(interval);

    daysValue.textContent = "00";
    hoursValue.textContent = "00";
    minutesValue.textContent = "00";
    secondsValue.textContent = "00";

    return;
}

const { days, hours, minutes, seconds } = convertMs(timeDif);

daysValue.textContent = addLeadingZero(days);
hoursValue.textContent = addLeadingZero(hours);
minutesValue.textContent = addLeadingZero(minutes);
secondsValue.textContent = addLeadingZero(seconds);

        }, 1000);
     });


     function convertMs(ms) {
   
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      };

      function addLeadingZero(value) {
        return value.toString().padStart(2, "0");
      };
