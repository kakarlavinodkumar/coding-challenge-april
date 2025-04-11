var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// API to display a Tic Tac Toe game with no winner
router.get('/tictactoe', function(req, res, next) {
  const game = [
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O']
  ];
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Tic Tac Toe</title>
      <style>
        table {
          border-collapse: collapse;
          margin: 20px auto;
        }
        td {
          width: 50px;
          height: 50px;
          text-align: center;
          vertical-align: middle;
          border: 1px solid black;
          font-size: 24px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1 style="text-align: center;">Tic Tac Toe</h1>
      <table>
        ${game.map(row => `
          <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </table>
      <script>
        document.querySelectorAll('td').forEach(cell => {
          cell.addEventListener('click', () => {
            alert('Cell clicked: ' + cell.textContent);
          });
        });
      </script>
    </body>
    </html>
  `;
  res.send(html);
});
module.exports = router;
