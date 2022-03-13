const formFind = document.querySelector('[data-form-find]');

// const handleFindSubmit = async (e) => {
//   e.preventDefault();

//   console.log('handleFindSubmit');
//   const data = getFormData(formFind);
//   const id = data.get('id');
//   console.log('handleFindSubmit.id', id);

//   const url = apiUser(id);
//   console.log('handleFindSubmit.url', url);

//   try {
//     const result = await axios.get(url);
//     console.log('handleFindSubmit.result', result);
//   } catch (e) {
//     console.log('handleFindSubmit.error', e);
//   }
// };

// const handleFindSubmit = (e) => {
//   e.preventDefault();
//   const data = getFormData(formFind);
//   const id = data.get('id');
//   const url = apiUser(id);

//   const options = {
//     method: 'GET',
//     url: url,
//   };

//   axios(options)
//     .then((result) => {
//       console.log('restult', result);
//     })
//     .catch((error) => {
//       console.log('error', error);
//     });
// };

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  axios.get(url).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
