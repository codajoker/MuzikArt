import refs from '../refs';
import getCollection from './get-local-storage';
import popularTpl from '../../templates/movies.hbs';
import storageKey from './storage-key';
import notification from './notification';
import fixData from '../fix-data';
import { startPopup } from './popup-library';

addEvents(); // устанавливаем слушатели
setLastTab();

//проверяем, есть ли запись в localstorage о последней используемой вкладке, если нет,
//то считаем, что пользователь впервые перешел в библиотеку и устанавливаем последнюю вкладку как watched
export function setLastTab() {
  if (localStorage.getItem('last-tab') === null)
    localStorage.setItem('last-tab', storageKey.WATCHEDKEY);

  renderPage(localStorage.getItem('last-tab'));
}

async function renderPage(page) {
  setPage(page);
  const films = await getCollection(page);
  if (films.length < 1) {
    notification(page);
    return;
  }

  const fixDataFilms = fixData(films);

  refs.moviesContainer.innerHTML = popularTpl(fixDataFilms);
}

function setPage(page) {
  if (page === storageKey.WATCHEDKEY) {
    refs.watchedBtn.classList.add('activBtn');
    refs.queueBtn.classList.remove('activBtn');
  }
  if (page === storageKey.QUEUEKEY) {
    refs.queueBtn.classList.add('activBtn');
    refs.watchedBtn.classList.remove('activBtn');
  }
}

function addEvents() {
  refs.moviesContainer.addEventListener('click', checkClick);

  refs.watchedBtn.addEventListener('click', () => {
    renderPage(storageKey.WATCHEDKEY);
    localStorage.setItem('last-tab', storageKey.WATCHEDKEY);
  });
  refs.queueBtn.addEventListener('click', () => {
    renderPage(storageKey.QUEUEKEY);
    localStorage.setItem('last-tab', storageKey.QUEUEKEY);
  });
}

function checkClick(evt) {
  if (evt.target.tagName === 'IMG') {
    startPopup(evt.target.dataset.id);
  }
}

