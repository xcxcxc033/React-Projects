export function selectBook1(book) {
  //selectbook is an action creator, it need to return an action
  //an object with type property
  //console.log('a book has been selected:', book.title);
  return {
    type: 'BOOK_SELECTED',
    playload: book
  };

}
