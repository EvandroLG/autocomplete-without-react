import Search from '../lib/search';
import debounce from '../lib/debounce';

const doc = document;

class Autocomplete {
  constructor(root) {
    this.search = new Search();

    this.elements = {};
    this.elements.root = root;
  }

  _createInputElement() {
    let input = doc.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'autocomplete');

    return input;
  }

  _createListElement() {
    let list = doc.createElement('ul');
    list.className = 'autocomplete-list';

    return list;
  }

  _onInputKeyUp(e) {
    console.log(this.search.getItems(e.target.value));
  }

  _events() {
    this.elements.input.addEventListener('keyup', debounce(this._onInputKeyUp.bind(this), 300));
  }

  render() {
    this.elements.input = this._createInputElement(); 
    this.elements.root.appendChild(this.elements.input);

    this.elements.list = this._createListElement();
    this.elements.root.appendChild(this.elements.list);

    this._events();
  }
}

export default Autocomplete;
