import './sass/main.scss';
import { Markup } from './js/markup';
import FetchAPI from './js/fetch';
import { refs } from './js/refs'; // DOM Elements references
import { openHomePage, openLibraryPage } from './js/alternate-pages';
import { openWatchedList, openQueueList } from './js/library-lists';

// pagination markup and styles

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as TUI from './js/pagination';
import { MarkTrending } from './js/markup';

import { openModalRef } from './js/movieModal';

const pagination = new Pagination('pagination', TUI.getOptions(500));
pagination.on('afterMove', event => {
  console.log('knock knock');
});

// HOME & MY LIBRARY pages openning + Library Lists alternation (Watched, Queue)

refs.libraryPage.addEventListener('click', openLibraryPage);
refs.homePage.addEventListener('click', openHomePage);

refs.watchedBtn.addEventListener('click', openWatchedList);
refs.queueBtn.addEventListener('click', openQueueList);

// try fetch

// console.log(FetchAPI.fetchTrendingMovies(1).then(data => console.log(data.data.results)));

// console.log(fetchAPI.fetchGenres().then(data => console.log(data.data.genres)));
