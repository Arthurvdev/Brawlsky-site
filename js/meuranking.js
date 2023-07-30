const searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener('click', searchPlayer);


function searchPlayer() {
  const playerName = document.getElementById('player-name').value;
  const url = `https://api.brawlhalla.com/rankings/1v1/brz/1?name=${playerName}&api_key=C2KZNXSHOPILAEPYOVH6`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#my-table tbody');
      tableBody.innerHTML = '';

      const playerData = data.filter(row => row.name.toLowerCase().includes(playerName.toLowerCase()));

      if (playerData.length > 0) {
        playerData.forEach(playerRow => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${playerRow.rank}</td>
            <td>${playerRow.name}</td>
            <td>${playerRow.rating}</td>
            <td>${playerRow.tier}</td>
            <td>${playerRow.games}</td>
            <td>${playerRow.wins}</td>
            <td>${playerRow.region}</td>
            <td>${playerRow.peak_rating}</td>
          `;
          tableBody.appendChild(tr);
        });
      } else {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="8">Jogador não encontrado</td>';
        tableBody.appendChild(tr);
      }
    })
    .catch(error => console.error(error));
}

const searchInput = document.getElementById('player-name');
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    searchPlayer();
  }
});
