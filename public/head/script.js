const formFind = document.querySelector('[data-form-find]');

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  axios.head(url).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
