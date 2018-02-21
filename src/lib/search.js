import FuzzySearch from 'fuzzy-search';

class Search {

  getItems(value) {
    const fruits = [ 'Apple', 'Apricot', 'Avocado', 'Banana',
                     'Bilberry', 'Blackberry', 'Blackcurrant',
                     'Blueberry' ];

    const searcher = new FuzzySearch(fruits, [], {
      caseSensitive: false,
    });

    return searcher.search(value);
  }
};

export default Search;
