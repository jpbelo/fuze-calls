module.exports = (req, res, next) => {
  const delay = Math.floor(Math.random() * 2000) + 100;
  setTimeout(next, delay);
}