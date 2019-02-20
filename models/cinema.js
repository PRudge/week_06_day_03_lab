const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const filmTitles = [];
  this.films.forEach(function(film) {
    filmTitles.push(film.title);
  });
  return filmTitles;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const filmTitle = this.films.find( film => film.title === title);
  return filmTitle.title;
};

Cinema.prototype.getFilmByGenre = function (genre) {
  let filmsOfGenre = [];
  filmsOfGenre = this.films.filter(film => film.genre === genre);
  return filmsOfGenre;
};

Cinema.prototype.getFilmByYear = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.checkFilmByLength = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.accumulateFilmLength = function () {
  return this.films.reduce((accumulator, film) => accumulator + film.length);
};

Cinema.prototype.getFilmByProperty = function (name, value) {
  let filmsOfGenre = [];
  filmsOfGenre = this.films.filter(film => film[name] === value);
  return filmsOfGenre;
};

module.exports = Cinema;
