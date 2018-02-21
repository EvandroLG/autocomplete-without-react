import Search from '../lib/search';
import debounce from '../lib/debounce';

const doc = document;

class Autocomplete {
  constructor(root) {
    this.search = new Search();
    this.memoize = {};

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

  _cleanList() {
    this.elements.list.innerHTML = '';
  }

  _onLiClick(e) {
    e.preventDefault();

    this.elements.input.value = e.target.innerText;
    this._cleanList();
  }

  _getItem(value) {
    let li = doc.createElement('li');
    li.innerText = value;

    return li;
  }

  _createItem(li) {
    this.elements.list.appendChild(li);
    li.addEventListener('click', this._onLiClick.bind(this));
  }

  _onInputKeyUp(e) {
    this._cleanList();

    const value = e.target.value;
    const that = this;

    if (value && !this.memoize[value]) {
      console.log('again?');
      this.memoize[value] = [];

      this.search.getItems(value).forEach((item) => {
        that.memoize[value].push(that._getItem(item));
      });
    }

    (this.memoize[value] || []).forEach((li) => {
      that._createItem(li);
    });
  }

  _events() {
    this.elements.input.addEventListener('keyup',
      debounce(this._onInputKeyUp.bind(this), 300), false);
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
