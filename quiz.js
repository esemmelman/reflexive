const byId = id => document.getElementById(id);
let order, current, score, answered;
const reflexiveDescriptions = {
  me: 'yo (I)',
  te: 'tú (you, one person informally)',
  se: 'él, ella, usted, ellos, ellas, or ustedes',
  nos: 'nosotros or nosotras (we)',
  os: 'vosotros or vosotras (you all, informally in Spain)'
};
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function showQuestion(focus = false) {
  answered = false;
  const item = order[current];
  byId('hint').textContent = `Hint: ${item.hint}`;
  const blank = document.createElement('span');
  blank.className = 'blank';
  blank.textContent = '___';
  blank.setAttribute('aria-label', 'blank');
  const [before, after] = item.sentence.split('___');
  byId('question-title').replaceChildren(document.createTextNode(before), blank, document.createTextNode(after));
  byId('explanation').hidden = true;
  byId('explanation').textContent = '';
  byId('translation').hidden = true;
  byId('translation').textContent = '';
  byId('next').hidden = true;
  byId('choices').replaceChildren();
  shuffle(item.choices).forEach(choice => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.lang = 'es';
    button.textContent = choice;
    button.addEventListener('click', () => grade(choice));
    byId('choices').append(button);
  });
  if (focus) byId('question-title').focus();
}
function grade(choice) {
  if (answered) return;
  answered = true;
  const item = order[current];
  const correct = choice === item.answer;
  if (correct) score++;
  else {
    byId('explanation').textContent = `Not quite. ${choice} goes with ${reflexiveDescriptions[choice]}. This sentence needs ${item.answer}: ${item.explanation}`;
    byId('explanation').hidden = false;
  }
  const blank = byId('question-title').querySelector('.blank');
  blank.textContent = item.answer;
  blank.removeAttribute('aria-label');
  byId('translation').textContent = item.translation;
  byId('translation').hidden = false;
  [...byId('choices').children].forEach(button => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add('correct');
    else if (button.textContent === choice) button.classList.add('incorrect');
  });
  byId('next').textContent = current === order.length - 1 ? 'See results →' : 'Next question →';
  byId('next').hidden = false;
  byId('next').focus({ preventScroll: true });
}
byId('next').addEventListener('click', () => {
  if (!answered) return;
  current++;
  if (current < order.length) return showQuestion(true);
  byId('question-area').hidden = true;
  byId('results').hidden = false;
  byId('results').append(byId('restart'));
  byId('result-score').textContent = `You scored ${score} out of ${order.length} (${Math.round(score / order.length * 100)}%).`;
  byId('result-title').focus();
});
function restart(focus = false) {
  order = shuffle(questions);
  current = 0;
  score = 0;
  byId('controls').append(byId('restart'));
  byId('results').hidden = true;
  byId('question-area').hidden = false;
  showQuestion(focus);
}
byId('restart').addEventListener('click', () => restart(true));
restart();
