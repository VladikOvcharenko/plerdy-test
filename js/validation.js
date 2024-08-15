//phone
const phone = document.querySelector('#phone');
const iti = window.intlTelInput(phone, {
  initialCountry: 'auto',
  separateDialCode: true,
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json')
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data && data.country ? data.country : 'us';
        callback(countryCode);
      });
  },
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.pop-up__form');

  const validateForm = new JustValidate('.pop-up__form', {
    errorFieldCssClass: 'error',
  });

  validateForm
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Minimum 3 characters',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter your name!',
      },
    ])
    .addField('#phone', [
      {
        rule: 'custom',
        validator: (value) => {
          const reg = /[A-Za-zА-Яа-яЁё]/g;
          const phoneInput = document.querySelector('#phone');
          phoneInput.addEventListener('input', function () {
            this.value = this.value.replace(reg, '');
          });
          const phone = phoneInput.value;
          const phoneLength = phone.replace(reg, '').length;
          return phoneLength >= 9 && phoneLength <= 13;
        },
        errorMessage: 'Enter a valid phone number',
      },
    ]);

  form.reset();
});
