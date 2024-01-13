const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Kobel', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    }
  };
  
  // Bai 1
  const [players1, players2] = game.players;
  
  // bai 2
  const [gk, ...fieldPlayers] = players1;
  const [gk2, ...fieldPlayers2] = players2;
  
  // bai 3
  const allPlayers = [...players1, ...players2];
  
  // bai 4
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // bai 5
  const { team1, x: draw, team2 } = game.odds;
  
  // bai 6
  const printGoals = function (...players) {
    players.forEach(player => {
      console.log(`${player} đã ghi bàn!`);
    });
  };
  
  // Chạy hàm với dữ liệu từ game.scored
  printGoals(...game.scored);
  
  // bai 7
  const winner = team1 < team2 && game.team1 || game.team2;
  console.log(`Đội chiến thắng là: ${winner}`);


  //////////////////
  // Bai 2

  // Nhiệm vụ 1
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // Nhiệm vụ 2
  let sum = 0;
  for (const odd of Object.values(game.odds)) {
    sum += odd;
  }
  const average = sum / Object.values(game.odds).length;
  console.log(`Tỉ lệ trung bình: ${average}`);
  
  // Nhiệm vụ 3
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = game[team];
    console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
  }
  
  // Nhiệm vụ 4
  const scorers = {};
  game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  console.log('Đối tượng scorers:', scorers);