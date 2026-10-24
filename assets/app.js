(() => {
  const filters = [...document.querySelectorAll('.filter')];
  const projects = [...document.querySelectorAll('.project')];
  const input = document.querySelector('#search');
  const count = document.querySelector('#count');
  const empty = document.querySelector('.empty');
  let category = 'all';
  function update() {
    const query = input.value.trim().toLocaleLowerCase();
    let total = 0;
    for (const project of projects) {
      const visible = (category === 'all' || project.dataset.category === category) && project.dataset.search.toLocaleLowerCase().includes(query);
      project.hidden = !visible;
      if (visible) total++;
    }
    count.textContent = total;
    empty.hidden = total !== 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    update();
  }));
  input.addEventListener('input', update);
  const language = document.querySelector('.language');
  document.addEventListener('click', event => { if (!language.contains(event.target)) language.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && language.open) { language.open = false; language.querySelector('summary').focus(); } });
})();
