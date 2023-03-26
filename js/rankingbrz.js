const tierIcons = {
  Valhallan: 'https://corehalla.com/_next/image?url=%2Fimages%2Ficons%2Franked%2FValhallan.webp&w=1920&q=75',
  Diamond: 'https://corehalla.com/_next/image?url=%2Fimages%2Ficons%2Franked%2FDiamond.png&w=1920&q=75',
  Platinum: 'https://corehalla.com/_next/image?url=%2Fimages%2Ficons%2Franked%2FPlatinum%200.png&w=1920&q=75',
  Gold: 'https://corehalla.com/_next/image?url=%2Fimages%2Ficons%2Franked%2FGold%201.png&w=1920&q=75',
};

const apiKey = "C2KZNXSHOPILAEPYOVH6";
const apiUrl = "https://api.brawlhalla.com/rankings/1v1/brz/";

const tableBody = document.querySelector('#my-table tbody');
const searchBox = document.querySelector('#search-box');

let playersData = [];

function filterResults(query) {
  const rows = document.querySelectorAll('#my-table tbody tr');

  rows.forEach(row => {
    const name = row.querySelector('td:nth-child(4)').textContent;

    if (name.toLowerCase().includes(query.toLowerCase())) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function renderPlayersData(data) {
  data.forEach(row => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${row.rank}</td>
      <td>${row.region}</td>
      <td><img src="${tierIcons[row.tier]}" alt="${row.tier}" width="40" height="40"></td>
      <td>${row.name}</td>
      <td>${row.rating}</td>
      <td>${row.games}</td>
      <td>${row.wins}</td>
      <td>${row.peak_rating}</td>
    `;

    tableBody.appendChild(tr);
  });
}

function fetchRankings(page = 1) {
  fetch(`${apiUrl}${page}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      playersData = playersData.concat(data);

      if (data.length == 50) {
        fetchRankings(page + 1);
      } else {
        renderPlayersData(playersData);

        searchBtn.addEventListener('click', () => {
          const query = searchBox.value;
          filterResults(query);
        });

        searchBox.addEventListener('input', () => {
          const query = searchBox.value;
          filterResults(query);
        });
      }
    })
    .catch(error => console.error(error));
}

fetchRankings();

