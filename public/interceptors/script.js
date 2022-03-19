const formFind = document.querySelector('[data-form-find]');

axios.interceptors.request.use(
  function (config) {
    config.url = config.url + '?emerson=broga';

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  function (response) {
    response.data.data_nascimento = response.data.dob;
    delete response.data.dob;

    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  axios.get(url).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
