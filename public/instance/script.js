const formFind = document.querySelector('[data-form-find]');

const AxiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 1000,
  headers: {
    Authorization: 'Bearer Token',
    'X-Project': 'Curso de Axios',
  },
});

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');

  AxiosInstance.get(`users/${id}`).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
