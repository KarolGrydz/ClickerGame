export const endGame = count => {
  let text;
  if (count >= 50) {
    text = `Koniec Czasu!!! Kliknąłeś ${count}!Jesteś najlepszy!`;
  } else if (count < 50 && count >= 25) {
    text = `Koniec Czasu!!! Kliknąłeś ${count}!Nieźle ale możesz lepiej!`;
  } else {
    text = `Koniec Czasu!!! Kliknąłeś ${count}!Kiepsko, na pewno możesz lepiej!`;
  }
  return alert(text);
};
