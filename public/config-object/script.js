const formFind = document.querySelector('[data-form-find]');

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');

  // https://github.com/axios/axios#request-config
  const configObject = {
    baseURL: API_BASE,
    url: `users/${id}`,
    method: 'GET',
  };

  axios(configObject).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
