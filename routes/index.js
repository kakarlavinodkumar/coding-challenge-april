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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f8ff;
          margin: 0;
          padding: 0;
        }
        h1, h2 {
          color: #2c3e50;
          text-align: center;
        }
        h1 {
          margin-top: 20px;
          font-size: 2.5em;
        }
        h2 {
          margin-bottom: 20px;
          font-size: 1.8em;
        }
        table {
          border-collapse: collapse;
          margin: 20px auto;
          background-color: #ffffff;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          overflow: hidden;
        }
        td {
          width: 70px;
          height: 70px;
          text-align: center;
          vertical-align: middle;
          border: 1px solid #ddd;
          font-size: 28px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        td.hidden {
          color: transparent;
          background-color: #ecf0f1;
        }
        td:not(.hidden):hover {
          background-color: #bdc3c7;
          transform: scale(1.1);
        }
        td.hidden:hover {
          background-color: #dfe6e9;
        }
        #success-dialog {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 20px 30px;
          background-color: #27ae60;
          color: white;
          font-size: 20px;
          font-weight: bold;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      </style>
    </head>
    <body>
      <h1>Gender Reveal Party!!</h1>
      <h2>Play Tic Tac Toe</h2>
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
