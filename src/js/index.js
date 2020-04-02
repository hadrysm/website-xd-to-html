import '../scss/index.scss';

import { burger, toogleNav } from './menu';
import { scroll } from './scroll';

const init = () => {
    burger.addEventListener('click', toogleNav);
    window.addEventListener('scroll', scroll);
};

window.addEventListener('DOMContentLoaded', init);
