const formFind = document.querySelector('[data-form-find]');
const formUser = document.querySelector('[data-form-user]');

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);

  axios.get(url).then(printResponse).then(populate);
};

const handleUserSubmit = (e) => {
  e.preventDefault();
  const data = getFormData(formUser);
  const id = data.get('id');
  const url = apiUser(id);

  axios.delete(url).then(printResponse);
};

formFind.addEventListener('submit', handleFindSubmit);
formUser.addEventListener('submit', handleUserSubmit);
