import Search from '../lib/search';
import debounce from '../lib/debounce';

const doc = document;

class Autocomplete {
  constructor(root) {
    this.search = new Search();

    this.elements = {};
    this.elements.root = root;
  }

  _getInputElement() {
    let input = doc.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'autocomplete');

    return input;
  }

  _getListElement() {
    let list = doc.createElement('ul');
    list.className = 'autocomplete-list';

    return list;
  }

  _createItem(value) {
    let li = doc.createElement('li');
    li.innerText = value;

    this.elements.list.appendChild(li);
  }

  _cleanList() {
    this.elements.list.innerHTML = '';
  }

  _onInputKeyUp(e) {
    this._cleanList();

    const value = e.target.value;
    const that = this;

    this.search.getItems(value).forEach((item) => {
      that._createItem(item);
    });
  }

  _events() {
    this.elements.input.addEventListener('keyup',
      debounce(this._onInputKeyUp.bind(this), 300));
  }

  render() {
    this.elements.input = this._getInputElement();
    this.elements.root.appendChild(this.elements.input);

    this.elements.list = this._getListElement();
    this.elements.root.appendChild(this.elements.list);

    this._events();
  }
}

export default Autocomplete;
