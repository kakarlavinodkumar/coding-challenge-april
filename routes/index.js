var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// API to display a Tic Tac Toe game with no winner
router.get('/tictactoe', function(req, res, next) {
  const game = [
    ['G', 'B', 'G'],
    ['G', 'G', 'B'],
    ['B', 'G', 'B']
  ];
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Gender Reveal</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        h1, h2 {
          color: #333;
        }
        table {
          border-collapse: collapse;
          margin: 20px auto;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        td {
          width: 60px;
          height: 60px;
          text-align: center;
          vertical-align: middle;
          border: 1px solid #ddd;
          font-size: 24px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        td.hidden {
          color: transparent;
          background-color: #f0f0f0;
        }
        td:not(.hidden):hover {
          background-color: #e0e0e0;
        }
        #success-dialog {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 20px;
          background-color: #4CAF50;
          color: white;
          font-size: 18px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1 style="text-align: center;">Gender Reveal Party!!</h1>
      <h2 style="text-align: center;">Play Tic Tac Toe</h2>
      <table>
        ${game.map((row, rowIndex) => `
          <tr>
            ${row.map((cell, colIndex) => `<td class="hidden" data-value="${cell}" data-row="${rowIndex}" data-col="${colIndex}"></td>`).join('')}
          </tr>
        `).join('')}
      </table>
      <div id="success-dialog">I am Single!! 😊</div>
      <script>
        document.querySelectorAll('td').forEach(cell => {
          cell.addEventListener('click', () => {
            if (cell.classList.contains('hidden')) {
              cell.textContent = cell.getAttribute('data-value');
              cell.classList.remove('hidden');
            }
            const allRevealed = Array.from(document.querySelectorAll('td')).every(td => !td.classList.contains('hidden'));
            if (allRevealed) {
              const dialog = document.getElementById('success-dialog');
              dialog.style.display = 'block';
            }
          });
        });
      </script>
    </body>
    </html>
  `;
  res.send(html);
});
module.exports = router;
