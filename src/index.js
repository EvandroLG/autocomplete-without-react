import Autocomplete from './components/autocomplete';

const doc = document;

const onReady = () => {
  const autocomplete = new Autocomplete(doc.getElementById('root'));
  autocomplete.render();
};

doc.addEventListener('DOMContentLoaded', onReady);
