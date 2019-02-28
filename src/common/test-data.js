import USERS from './testdata.json';

let timeout;

const toast = (text) => {
  if (timeout != null) clearTimeout(timeout);

  const toast = document.getElementsByClassName('toast')[0];
  toast.textContent = text;
  toast.classList.add('ching');

  timeout = setTimeout(() => {
    toast.classList.remove('ching');
  }, 2000);
};

window.pourIn = (counts = USERS.length) => {
  localStorage.setItem('users', JSON.stringify(USERS.slice(0, counts)));
  toast(`${counts} 件のデータを投入したよ`);
};

window.discard = () => {
  localStorage.removeItem('users');
  toast('データを全部消したよ');
};
