const formFind = document.querySelector('[data-form-find]');

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id, 'slow');

  const options = {
    timeout: 3000,
  };

  axios
    .get(url, options)
    .then(printResponse)
    .catch((e) => {
      console.log(e.message);
    });
};

formFind.addEventListener('submit', handleFindSubmit);
