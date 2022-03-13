const formUser = document.querySelector('[data-form-user]');

const handleFormUser = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const url = apiUser();

  axios.post(url, data).then(printResponse);
};

// const handleFormUser = (e) => {
//   e.preventDefault();

//   const data = getFormData(formUser);
//   const url = apiUser();

//   const options = {
//     method: 'POST',
//     url,
//     data,
//   };

//   axios(options).then(printResponse);
// };

formUser.addEventListener('submit', handleFormUser);
