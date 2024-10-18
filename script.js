function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const resultDiv = document.getElementById('result');

  if (name1 === '' || name2 === '') {
    resultDiv.textContent = 'Please enter both names!';
    return;
  }

  // Generate a random love percentage between 50-100%
  const lovePercentage = Math.floor(Math.random() * 51) + 50;

  resultDiv.innerHTML = `❤️ ${name1} & ${name2} are ${lovePercentage}% compatible! ❤️`;
}

