const formFind = document.querySelector('[data-form-find]');

const AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer Token`,
    'X-Api-Key': 'abc',
  },
});

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  AxiosInstance.get(url).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
