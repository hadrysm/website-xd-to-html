import '../scss/index.scss';

import { burger, toogleNav } from './menu';
import { debounce, scroll } from './scroll';

const init = () => {
  burger.addEventListener('click', toogleNav);
  window.addEventListener('scroll', debounce(scroll));
};

window.addEventListener('DOMContentLoaded', init);
