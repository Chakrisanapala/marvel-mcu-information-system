// ============================================================
// MARVEL CINEMATIC UNIVERSE — INFORMATION SYSTEM
// Complete JavaScript: Data + Rendering + Compare + Quiz
// ============================================================

// ══════════════════════════════════════════════════════════════
//  DATABASE — 20 Characters + 27 Movies
// ══════════════════════════════════════════════════════════════

const characters = [
  { name:"Iron Man",         real:"Tony Stark",        type:"Hero",     team:"Avengers",    power:88, intelligence:95, speed:70, durability:85, energy:90, image:"images/iron-man.jpg",         desc:"Genius billionaire who built a powered suit of armor to become Earth's greatest defender.",              dialogue:"I am Iron Man." },
  { name:"Captain America",  real:"Steve Rogers",      type:"Hero",     team:"Avengers",    power:78, intelligence:70, speed:65, durability:90, energy:40, image:"images/captain-america.jpg",  desc:"A super-soldier from WWII frozen in ice and awakened to lead the Avengers.",                             dialogue:"I can do this all day." },
  { name:"Thor",             real:"Thor Odinson",       type:"Hero",     team:"Avengers",    power:95, intelligence:65, speed:80, durability:95, energy:98, image:"images/thor.jpg",             desc:"The Asgardian God of Thunder who wields the mighty Mjolnir and Stormbreaker.",                           dialogue:"Bring me Thanos!" },
  { name:"Hulk",             real:"Bruce Banner",       type:"Hero",     team:"Avengers",    power:98, intelligence:90, speed:55, durability:99, energy:50, image:"images/hulk.jpg",             desc:"Brilliant scientist whose gamma-ray exposure transforms him into a green rage monster.",                 dialogue:"That's my secret, Captain. I'm always angry." },
  { name:"Black Widow",      real:"Natasha Romanoff",   type:"Hero",     team:"Avengers",    power:55, intelligence:80, speed:70, durability:55, energy:30, image:"images/black-widow.jpg",     desc:"Former KGB spy turned S.H.I.E.L.D. agent and founding Avenger with unmatched combat skills.",            dialogue:"I've got red in my ledger. I'd like to wipe it out." },
  { name:"Hawkeye",          real:"Clint Barton",       type:"Hero",     team:"Avengers",    power:50, intelligence:72, speed:60, durability:50, energy:25, image:"images/hawkeye.jpg",          desc:"World's greatest marksman armed with a trick-arrow quiver and unwavering loyalty.",                      dialogue:"You step out that door, you're an Avenger." },
  { name:"Spider-Man",       real:"Peter Parker",       type:"Hero",     team:"Avengers",    power:82, intelligence:88, speed:80, durability:75, energy:55, image:"images/spider-man.jpg",      desc:"Teenager bitten by a radioactive spider, balancing high-school life with heroics.",                      dialogue:"With great power comes great responsibility." },
  { name:"Doctor Strange",   real:"Stephen Strange",    type:"Hero",     team:"Avengers",    power:85, intelligence:92, speed:60, durability:70, energy:95, image:"images/doctor-strange.jpg",  desc:"Former neurosurgeon turned Sorcerer Supreme, guardian of the Time Stone.",                               dialogue:"We're in the endgame now." },
  { name:"Black Panther",    real:"T'Challa",           type:"Hero",     team:"Avengers",    power:80, intelligence:85, speed:78, durability:88, energy:45, image:"images/black-panther.jpg",   desc:"King of Wakanda empowered by the Heart-Shaped Herb, protector of his hidden nation.",                    dialogue:"Wakanda forever!" },
  { name:"Scarlet Witch",    real:"Wanda Maximoff",     type:"Hero",     team:"Avengers",    power:92, intelligence:70, speed:55, durability:60, energy:99, image:"images/scarlet-witch.jpg",   desc:"Enhanced being with chaos magic capable of warping reality itself.",                                     dialogue:"You took everything from me." },
  { name:"Loki",             real:"Loki Laufeyson",     type:"Villain",  team:"Asgard",      power:78, intelligence:90, speed:65, durability:75, energy:82, image:"images/loki.jpg",            desc:"Asgardian God of Mischief and adoptive brother of Thor with shape-shifting powers.",                     dialogue:"I am burdened with glorious purpose." },
  { name:"Thanos",           real:"Thanos",             type:"Villain",  team:"None",        power:99, intelligence:88, speed:60, durability:98, energy:95, image:"images/thanos.jpg",          desc:"The Mad Titan who sought the Infinity Stones to reshape the universe.",                                  dialogue:"I am inevitable." },
  { name:"Captain Marvel",   real:"Carol Danvers",      type:"Hero",     team:"Avengers",    power:95, intelligence:72, speed:90, durability:92, energy:96, image:"images/captain-marvel.jpg",  desc:"Air Force pilot imbued with Kree energy, one of the most powerful beings in the universe.",              dialogue:"I don't need to prove anything to you." },
  { name:"Ant-Man",          real:"Scott Lang",         type:"Hero",     team:"Avengers",    power:60, intelligence:68, speed:55, durability:55, energy:65, image:"images/ant-man.jpg",         desc:"Ex-con turned size-shifting hero who can shrink to subatomic levels or grow to giant size.",             dialogue:"I do some dumb things, and the people I love the most pay the price." },
  { name:"Wasp",             real:"Hope van Dyne",      type:"Hero",     team:"Avengers",    power:62, intelligence:82, speed:68, durability:58, energy:60, image:"images/wasp.jpg",            desc:"Brilliant scientist and fierce combatant who partnered with Ant-Man as the Wasp.",                      dialogue:"It's about time." },
  { name:"Winter Soldier",   real:"Bucky Barnes",       type:"Hero",     team:"Avengers",    power:75, intelligence:68, speed:65, durability:78, energy:35, image:"images/winter-soldier.jpg",  desc:"Cap's best friend, brainwashed into a deadly assassin before reclaiming his identity.",                 dialogue:"I'm not gonna fight you. You're my friend." },
  { name:"Vision",           real:"Vision",             type:"Hero",     team:"Avengers",    power:85, intelligence:95, speed:72, durability:80, energy:88, image:"images/vision.jpg",          desc:"Synthetic being powered by the Mind Stone with the ability to phase through matter.",                   dialogue:"I just feel you." },
  { name:"Star-Lord",        real:"Peter Quill",        type:"Hero",     team:"Guardians",   power:65, intelligence:60, speed:58, durability:60, energy:50, image:"images/star-lord.jpg",       desc:"Space outlaw turned Guardian of the Galaxy, half-human and half-Celestial.",                             dialogue:"I'm Star-Lord, man. Legendary outlaw?" },
  { name:"Gamora",           real:"Gamora",             type:"Hero",     team:"Guardians",   power:78, intelligence:75, speed:72, durability:80, energy:35, image:"images/gamora.jpg",          desc:"Deadliest woman in the galaxy and adopted daughter of Thanos turned Guardian.",                          dialogue:"I'm going to die surrounded by the biggest idiots in the galaxy." },
  { name:"Rocket Raccoon",   real:"Rocket",             type:"Hero",     team:"Guardians",   power:55, intelligence:88, speed:58, durability:45, energy:50, image:"images/rocket-raccoon.jpg",  desc:"Genetically modified raccoon and weapons expert with a sharp wit and sharper aim.",                      dialogue:"Oh, I'm gettin' that arm." },
];

const movies = [
  { title:"Iron Man",                          year:2008, phase:1, director:"Jon Favreau",         poster:"posters/ironman.jpg",         desc:"Billionaire Tony Stark builds a high-tech suit of armor and becomes the superhero Iron Man." },
  { title:"The Incredible Hulk",               year:2008, phase:1, director:"Louis Leterrier",     poster:"posters/incredible_hulk.jpg",                  desc:"Bruce Banner searches for a cure to his gamma radiation condition while being pursued by the military." },
  { title:"Iron Man 2",                         year:2010, phase:1, director:"Jon Favreau",         poster:"posters/ironman2.jpg",                       desc:"Tony Stark deals with his Iron Man legacy while a new enemy rises from his father's past." },
  { title:"Thor",                               year:2011, phase:1, director:"Kenneth Branagh",     poster:"posters/thor.jpg",                             desc:"The powerful god Thor is cast out of Asgard and must prove himself worthy on Earth." },
  { title:"Captain America: The First Avenger", year:2011, phase:1, director:"Joe Johnston",        poster:"posters/captain_america_first_avenger.jpg", desc:"A frail young man is transformed into the super-soldier Captain America during World War II." },
  { title:"The Avengers",                       year:2012, phase:1, director:"Joss Whedon",         poster:"posters/avengers.jpg",      desc:"Earth's mightiest heroes must come together to stop Loki and an alien army from enslaving humanity." },
  { title:"Iron Man 3",                         year:2013, phase:2, director:"Shane Black",         poster:"posters/ironman3.jpg",                       desc:"Tony Stark faces the mysterious Mandarin and must rely on his ingenuity to protect those he loves." },
  { title:"Thor: The Dark World",               year:2013, phase:2, director:"Alan Taylor",         poster:"posters/thor_dark_world.jpg",             desc:"Thor fights to save the Nine Realms from the Dark Elf Malekith who seeks to plunge the universe into darkness." },
  { title:"Captain America: The Winter Soldier",year:2014, phase:2, director:"Anthony & Joe Russo", poster:"posters/captain_america_winter_soldier.jpg",       desc:"Steve Rogers struggles to adapt to the modern world while uncovering a conspiracy within S.H.I.E.L.D." },
  { title:"Guardians of the Galaxy",            year:2014, phase:2, director:"James Gunn",          poster:"posters/guardians_of_galaxy.jpg",           desc:"A group of intergalactic misfits band together to stop a fanatical warrior from destroying the galaxy." },
  { title:"Avengers: Age of Ultron",            year:2015, phase:2, director:"Joss Whedon",         poster:"posters/avengers_age_of_ultron.jpg",            desc:"The Avengers must stop Ultron, an AI peacekeeping program gone rogue, from destroying humanity." },
  { title:"Ant-Man",                            year:2015, phase:2, director:"Peyton Reed",         poster:"posters/antman.jpg",                          desc:"Armed with a suit that shrinks in scale but increases in strength, a thief must help his mentor pull off a heist." },
  { title:"Captain America: Civil War",         year:2016, phase:3, director:"Anthony & Joe Russo", poster:"posters/captain_america_civil_war.jpg",         desc:"Political interference divides the Avengers into opposing factions — one led by Cap, the other by Iron Man." },
  { title:"Doctor Strange",                     year:2016, phase:3, director:"Scott Derrickson",    poster:"posters/doctor_strange.jpg",                    desc:"A brilliant neurosurgeon discovers the hidden world of mysticism and alternate dimensions after an accident." },
  { title:"Guardians of the Galaxy Vol. 2",     year:2017, phase:3, director:"James Gunn",          poster:"posters/guardians_of_galaxy_2.jpg",    desc:"The Guardians travel the cosmos as Peter Quill learns the truth about his mysterious parentage." },
  { title:"Spider-Man: Homecoming",             year:2017, phase:3, director:"Jon Watts",           poster:"posters/spiderman_homecoming.jpg",             desc:"Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture." },
  { title:"Thor: Ragnarok",                     year:2017, phase:3, director:"Taika Waititi",       poster:"posters/thor_ragnarok.jpg",                    desc:"Thor must escape the planet Sakaar and save Asgard from Hela, the goddess of death." },
  { title:"Black Panther",                      year:2018, phase:3, director:"Ryan Coogler",        poster:"posters/black_panther.jpg",          desc:"T'Challa returns home to Wakanda to take his rightful place as king, but a powerful enemy threatens his nation." },
  { title:"Avengers: Infinity War",             year:2018, phase:3, director:"Anthony & Joe Russo", poster:"posters/avengers_infinity_war.jpg",             desc:"The Avengers and their allies must sacrifice everything to stop Thanos from collecting all six Infinity Stones." },
  { title:"Avengers: Endgame",                  year:2019, phase:3, director:"Anthony & Joe Russo", poster:"posters/avengers_endgame.jpg",                 desc:"After Thanos' devastating snap, the remaining Avengers assemble one last time to undo his actions and restore the universe." },
  { title:"Spider-Man: Far From Home",          year:2019, phase:3, director:"Jon Watts",           poster:"posters/spiderman_far_from_home.jpg",          desc:"Peter Parker goes on a European vacation but is recruited by Nick Fury to face new elemental threats." },
  { title:"Black Widow",                        year:2021, phase:4, director:"Cate Shortland",      poster:"posters/black_widow.jpg",       desc:"Natasha Romanoff confronts her past and the dark conspiracy of the Red Room." },
  { title:"Shang-Chi and the Legend of the Ten Rings", year:2021, phase:4, director:"Destin Daniel Cretton", poster:"posters/shang_chi.jpg", desc:"Shang-Chi must confront his father's criminal organization and the power of the Ten Rings." },
  { title:"Eternals",                           year:2021, phase:4, director:"Chloé Zhao",          poster:"posters/eternals.jpg",               desc:"The ancient Eternals reunite to protect humanity from their evil counterparts, the Deviants." },
  { title:"Spider-Man: No Way Home",            year:2021, phase:4, director:"Jon Watts",           poster:"posters/spiderman_no_way_home.jpg",            desc:"When Spider-Man's identity is revealed, Doctor Strange's spell tears open the multiverse." },
  { title:"Doctor Strange in the Multiverse of Madness", year:2022, phase:4, director:"Sam Raimi", poster:"posters/doctor_strange_mom.jpg", desc:"Doctor Strange must travel into the multiverse to face a mysterious new adversary." },
  { title:"Deadpool & Wolverine",               year:2024, phase:5, director:"Shawn Levy",          poster:"posters/deadpool_wolverine.jpg",            desc:"Deadpool teams up with Wolverine in a multiversal adventure across the Marvel Cinematic Universe." },
];

// ══════════════════════════════════════════════════════════════
//  QUIZ QUESTIONS — 15 questions
// ══════════════════════════════════════════════════════════════

const quizQuestions = [
  { q:"What is the first film in the MCU?", options:["Captain America","Iron Man","Thor","The Avengers"], answer:1, diff:"easy" },
  { q:"Who snapped half the universe away in Infinity War?", options:["Loki","Ultron","Thanos","Hela"], answer:2, diff:"easy" },
  { q:"What is Captain America's shield made of?", options:["Adamantium","Uru","Vibranium","Titanium"], answer:2, diff:"easy" },
  { q:"Which Infinity Stone was hidden on Vormir?", options:["Power Stone","Soul Stone","Time Stone","Space Stone"], answer:1, diff:"medium" },
  { q:"Who directed Thor: Ragnarok?", options:["James Gunn","Taika Waititi","Jon Favreau","Joss Whedon"], answer:1, diff:"medium" },
  { q:"What is Thanos' home planet?", options:["Xandar","Titan","Sakaar","Ego"], answer:1, diff:"medium" },
  { q:"Which MCU film introduced Spider-Man?", options:["Spider-Man: Homecoming","The Avengers","Captain America: Civil War","Iron Man 2"], answer:2, diff:"medium" },
  { q:"Who said 'I am Iron Man' first?", options:["Pepper Potts","James Rhodes","Tony Stark","Nick Fury"], answer:2, diff:"easy" },
  { q:"What is the name of Thor's hammer?", options:["Stormbreaker","Gungnir","Mjolnir","Hofund"], answer:2, diff:"easy" },
  { q:"Who killed Thanos in Endgame?", options:["Captain America","Thor","Iron Man","Hulk"], answer:2, diff:"medium" },
  { q:"In what year was Avengers: Endgame released?", options:["2018","2019","2020","2021"], answer:1, diff:"easy" },
  { q:"What organization does Nick Fury lead?", options:["HYDRA","A.I.M.","S.W.O.R.D.","S.H.I.E.L.D."], answer:3, diff:"medium" },
  { q:"Which character is known as the Sorcerer Supreme?", options:["Scarlet Witch","Loki","Doctor Strange","Vision"], answer:2, diff:"easy" },
  { q:"What metal are Wolverine's claws coated with?", options:["Vibranium","Uru","Carbonadium","Adamantium"], answer:3, diff:"hard" },
  { q:"Which infinity stone does Vision have in his forehead?", options:["Mind Stone","Power Stone","Soul Stone","Reality Stone"], answer:0, diff:"hard" },
];


// ══════════════════════════════════════════════════════════════
//  RENDERING — Characters
// ══════════════════════════════════════════════════════════════

let charFilter = 'All';
let snappedCards = [];

function getTeams() {
  const teams = new Set(characters.map(c => c.team));
  return ['All', ...teams];
}

function renderCharFilters() {
  const bar = document.getElementById('charFilterBar');
  const types = ['All','Hero','Villain','Anti-Hero'];
  bar.innerHTML = types.map(t =>
    `<button class="filter-btn ${t === charFilter ? 'active' : ''}" data-filter="${t}">${t}</button>`
  ).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      charFilter = btn.dataset.filter;
      renderCharFilters();
      renderCharacters();
    });
  });
}

function renderCharacters() {
  snappedCards = [];
  const grid = document.getElementById('charactersGrid');
  const filtered = charFilter === 'All' ? characters : characters.filter(c => c.type === charFilter);

  grid.innerHTML = filtered.map((c, i) => `
    <div class="char-card" data-name="${c.name}" style="animation-delay:${0.04 + i * 0.04}s">
      <div class="char-card-img">
        <img class="character-img" src="${c.image}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer">
        <span class="char-badge ${c.type.toLowerCase()}">${c.type}</span>
      </div>
      <div class="char-card-body">
        <h3>${c.name.toUpperCase()}</h3>
        <p class="char-real">${c.real}</p>
        <p class="char-team">${c.team}</p>
        <p class="char-desc">${c.desc}</p>
        <div class="char-dialogue">
          <span class="dialogue-icon">💬</span>
          <p class="dialogue-text">"${c.dialogue}"</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
//  RENDERING — Movies
// ══════════════════════════════════════════════════════════════

let movieFilter = 'All';

function renderMovieFilters() {
  const bar = document.getElementById('movieFilterBar');
  const phases = ['All','Phase 1','Phase 2','Phase 3','Phase 4','Phase 5'];
  bar.innerHTML = phases.map(p =>
    `<button class="filter-btn ${p === movieFilter ? 'active' : ''}" data-filter="${p}">${p}</button>`
  ).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      movieFilter = btn.dataset.filter;
      renderMovieFilters();
      renderMovies();
    });
  });
}

function renderMovies() {
  const list = document.getElementById('moviesList');
  const filtered = movieFilter === 'All'
    ? movies
    : movies.filter(m => `Phase ${m.phase}` === movieFilter);

  list.innerHTML = filtered.map((m, i) => `
    <div class="movie-card" style="animation-delay:${0.05 + i * 0.06}s">
      <div class="movie-card-poster">
        ${m.poster
          ? `<img src="${m.poster}" alt="${m.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <div class="poster-placeholder" ${m.poster ? 'style="display:none"' : ''}>🎬</div>
        <span class="movie-phase-badge phase-${m.phase}">Phase ${m.phase}</span>
      </div>
      <div class="movie-card-body">
        <h3>${m.title.toUpperCase()}</h3>
        <p class="movie-year">${m.year}</p>
        <p class="movie-desc">${m.desc}</p>
        <div class="movie-meta">
          <span>🎬 <strong>${m.director}</strong></span>
          <span>📅 <strong>${m.year}</strong></span>
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
//  COMPARE
// ══════════════════════════════════════════════════════════════

function setupCompare() {
  const sel1 = document.getElementById('compare1');
  const sel2 = document.getElementById('compare2');
  const opts = '<option value="">-- Select --</option>' +
    characters.map((c, i) => `<option value="${i}">${c.name}</option>`).join('');
  sel1.innerHTML = opts;
  sel2.innerHTML = opts;

  const update = () => {
    const i1 = sel1.value, i2 = sel2.value;
    if (i1 === '' || i2 === '' || i1 === i2) {
      document.getElementById('compareResult').innerHTML =
        '<p class="compare-placeholder">Select two different characters to compare</p>';
      return;
    }
    renderCompare(characters[+i1], characters[+i2]);
  };
  sel1.addEventListener('change', update);
  sel2.addEventListener('change', update);
}

function renderCompare(a, b) {
  const stats = ['power','intelligence','speed','durability','energy'];
  let aWins = 0, bWins = 0;
  stats.forEach(s => { if(a[s] > b[s]) aWins++; else if(b[s] > a[s]) bWins++; });

  const winner = aWins > bWins ? a : bWins > aWins ? b : null;

  const barsHTML = stats.map(s => {
    const aW = a[s] >= b[s] ? 'winner' : 'loser';
    const bW = b[s] >= a[s] ? 'winner' : 'loser';
    return `
      <div class="compare-stat-row">
        <span class="cs-val ${aW}">${a[s]}</span>
        <div class="cs-bars">
          <div class="cs-bar bar-red" style="width:${a[s]}%;margin-left:auto"></div>
        </div>
        <span class="cs-label">${s}</span>
        <div class="cs-bars">
          <div class="cs-bar bar-blue" style="width:${b[s]}%"></div>
        </div>
        <span class="cs-val ${bW}">${b[s]}</span>
      </div>`;
  }).join('');

  document.getElementById('compareResult').innerHTML = `
    <div class="compare-card">
      <div class="compare-fighter">
        <img class="cf-avatar" src="${a.image}" alt="${a.name}" referrerpolicy="no-referrer">
        <h3>${a.name.toUpperCase()}</h3>
        <p class="cf-real">${a.real}</p>
        <p class="cf-type">${a.type}</p>
      </div>
      <div class="compare-middle">
        ${stats.map(s => `<span class="compare-stat-label">${s.slice(0,3).toUpperCase()}</span>`).join('')}
      </div>
      <div class="compare-fighter">
        <img class="cf-avatar" src="${b.image}" alt="${b.name}" referrerpolicy="no-referrer">
        <h3>${b.name.toUpperCase()}</h3>
        <p class="cf-real">${b.real}</p>
        <p class="cf-type">${b.type}</p>
      </div>
    </div>
    <div class="compare-stats">${barsHTML}</div>
    <div class="compare-winner">
      <h4>${winner ? '🏆 ' + winner.name.toUpperCase() + ' WINS!' : "IT'S A TIE!"}</h4>
      <p>${winner ? `${winner.name} wins ${Math.max(aWins,bWins)}-${Math.min(aWins,bWins)} in stat categories` : 'Both characters are equally matched!'}</p>
    </div>
  `;
}

// ══════════════════════════════════════════════════════════════
//  QUIZ
// ══════════════════════════════════════════════════════════════

let quizState = { current: 0, score: 0, questions: [], answered: false };

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  quizState = { current: 0, score: 0, questions: shuffleArray(quizQuestions).slice(0, 10), answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const cont = document.getElementById('quizContainer');
  const q = quizState.questions[quizState.current];
  const n = quizState.current + 1;
  const total = quizState.questions.length;
  const letters = ['A','B','C','D'];
  const diffClass = q.diff === 'easy' ? 'diff-easy' : q.diff === 'medium' ? 'diff-medium' : 'diff-hard';

  cont.innerHTML = `
    <div class="quiz-progress">
      <span class="quiz-progress-text">${n} / ${total}</span>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(n/total)*100}%"></div></div>
      <span class="quiz-progress-text">Score: ${quizState.score}</span>
    </div>
    <div class="quiz-question-card">
      <span class="quiz-q-difficulty ${diffClass}">${q.diff}</span>
      <p class="quiz-question-text">${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((o, i) => `
          <button class="quiz-option" data-index="${i}">
            <span class="opt-letter">${letters[i]}</span>
            <span>${o}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  quizState.answered = false;
  cont.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(+btn.dataset.index));
  });
}

function handleAnswer(selected) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const correct = q.answer;
  const buttons = document.querySelectorAll('.quiz-option');

  buttons.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('wrong');
  });

  if (selected === correct) quizState.score++;

  setTimeout(() => {
    quizState.current++;
    if (quizState.current < quizState.questions.length) {
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  }, 1200);
}

function renderQuizResult() {
  const cont = document.getElementById('quizContainer');
  const s = quizState.score;
  const t = quizState.questions.length;
  const pct = Math.round((s / t) * 100);
  let icon, title, msg;

  if (pct >= 90) { icon = '🏆'; title = 'LEGENDARY!'; msg = 'You are a true Marvel expert!'; }
  else if (pct >= 70) { icon = '⭐'; title = 'HEROIC!'; msg = 'Impressive Marvel knowledge!'; }
  else if (pct >= 50) { icon = '👍'; title = 'NOT BAD!'; msg = 'You know your Marvel basics!'; }
  else { icon = '📚'; title = 'KEEP STUDYING!'; msg = 'Time to rewatch the MCU films!'; }

  cont.innerHTML = `
    <div class="quiz-result">
      <div class="qr-icon">${icon}</div>
      <h3>${title}</h3>
      <div class="qr-score">${s} / ${t}</div>
      <p class="qr-msg">${msg}</p>
      <button class="btn-primary" id="quizRetryBtn">Try Again</button>
    </div>
  `;
  document.getElementById('quizRetryBtn').addEventListener('click', startQuiz);
}

// ══════════════════════════════════════════════════════════════
//  NAVBAR  — scroll, active link, mobile menu
// ══════════════════════════════════════════════════════════════

function handleScroll() {
  const nb = document.getElementById('navbar');
  nb.classList.toggle('scrolled', window.scrollY > 20);

  // active link
  const sections = document.querySelectorAll('.hero, .section');
  const links = document.querySelectorAll('.nav-link');
  let current = 'home';
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 100) current = sec.id; });
  links.forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
  }));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ══════════════════════════════════════════════════════════════
//  INFINITY STONES — Data & Interaction
// ══════════════════════════════════════════════════════════════

const infinityStones = [
  { name:'Space Stone', color:'#0077ff', glow:'rgba(0,119,255,0.6)', wielder:'Loki, Red Skull, Thanos', powers:'Teleportation, portal creation, cosmic awareness, instant travel across the universe', appearance:'Captain America: The First Avenger (2011)', flashColor:'rgba(0,119,255,0.45)', freq:300, image:'images/stones/space.jpg' },
  { name:'Mind Stone', color:'#FFD700', glow:'rgba(255,215,0,0.6)', wielder:'Loki, Ultron, Vision, Thanos', powers:'Mind control, enhanced intelligence, energy projection, creation of sentient beings', appearance:'The Avengers (2012)', flashColor:'rgba(255,215,0,0.45)', freq:400, image:'images/stones/mind.jpg' },
  { name:'Reality Stone', color:'#DC143C', glow:'rgba(220,20,60,0.6)', wielder:'Malekith, Jane Foster, The Collector, Thanos', powers:'Reality warping, matter transformation, illusion generation, physics alteration', appearance:'Thor: The Dark World (2013)', flashColor:'rgba(220,20,60,0.45)', freq:350, image:'images/stones/reality.jpg' },
  { name:'Power Stone', color:'#9B30FF', glow:'rgba(155,48,255,0.6)', wielder:'Ronan the Accuser, Star-Lord, Thanos', powers:'Immense destructive energy, planetary devastation, enhanced strength, energy manipulation', appearance:'Guardians of the Galaxy (2014)', flashColor:'rgba(155,48,255,0.45)', freq:250, image:'images/stones/power.jpg' },
  { name:'Time Stone', color:'#00CC00', glow:'rgba(0,204,0,0.6)', wielder:'The Ancient One, Doctor Strange, Thanos', powers:'Time manipulation, time loops, age reversal, future sight, temporal isolation', appearance:'Doctor Strange (2016)', flashColor:'rgba(0,204,0,0.45)', freq:500, image:'images/stones/time.jpg' },
  { name:'Soul Stone', color:'#FF8C00', glow:'rgba(255,140,0,0.6)', wielder:'Thanos, Hawkeye (Endgame)', powers:'Soul manipulation, pocket soul dimension, resurrection awareness, spiritual connection', appearance:'Avengers: Infinity War (2018)', flashColor:'rgba(255,140,0,0.45)', freq:450, image:'images/stones/soul.jpg' },
];



// ══════════════════════════════════════════════════════════════
//  INFINITY STONES — Rendering
// ══════════════════════════════════════════════════════════════

function renderStones() {
  const grid = document.getElementById('stonesGrid');
  if (!grid) return;
  grid.innerHTML = infinityStones.map((s, i) => `
    <div class="stone-card" data-index="${i}" style="--stone-color:${s.color};--stone-glow:${s.glow};animation-delay:${i * 0.1}s">
      <div class="stone-card-img">
        <img src="${s.image}" alt="${s.name}" loading="lazy">
      </div>
      <div class="stone-card-body">
        <h3>${s.name}</h3>
      </div>
      <div class="stone-card-glow"></div>
    </div>
  `).join('');
  grid.querySelectorAll('.stone-card').forEach(item => {
    item.addEventListener('click', () => {
      const s = infinityStones[+item.dataset.index];
      showStoneDetail(s);
      triggerScreenFlash(s.flashColor);
    });
  });
}

function showStoneDetail(stone) {
  const panel = document.getElementById('stoneDetailPanel');
  panel.innerHTML = `
    <div class="stone-detail" style="--stone-color:${stone.color};--stone-glow:${stone.glow}">
      <button class="stone-detail-close" id="stoneDetailClose">&times;</button>
      <div class="stone-detail-header">
        <div class="stone-detail-gem"><img src="${stone.image}" alt="${stone.name}"></div>
        <div>
          <h3>${stone.name}</h3>
          <span class="stone-color-label">${stone.color.toUpperCase()}</span>
        </div>
      </div>
      <div class="stone-detail-grid">
        <div class="stone-info-card"><span class="stone-info-label">⚡ Powers &amp; Abilities</span><p>${stone.powers}</p></div>
        <div class="stone-info-card"><span class="stone-info-label">👤 Known Wielders</span><p>${stone.wielder}</p></div>
        <div class="stone-info-card"><span class="stone-info-label">🎬 First MCU Appearance</span><p>${stone.appearance}</p></div>
      </div>
    </div>`;
  panel.classList.add('active');
  document.getElementById('stoneDetailClose').addEventListener('click', () => panel.classList.remove('active'));
}

function triggerScreenFlash(color) {
  const flash = document.getElementById('screenFlash');
  flash.style.background = color;
  flash.classList.remove('active');
  void flash.offsetWidth;
  flash.classList.add('active');
  setTimeout(() => flash.classList.remove('active'), 600);
}

// ══════════════════════════════════════════════════════════════
//  THANOS SNAP
// ══════════════════════════════════════════════════════════════

const SNAPPED_HEROES = [
  'Spider-Man','Doctor Strange','Black Panther','Star-Lord',
  'Drax','Mantis','Groot','Scarlet Witch',
  'Winter Soldier','Falcon','Nick Fury'
];

let hasSnapped = false;

function performSnap() {
  const allCards = document.querySelectorAll('.char-card:not(.snapped)');
  if (allCards.length === 0) return;
  const targets = Array.from(allCards).filter(card => {
    const name = card.getAttribute('data-name');
    return SNAPPED_HEROES.includes(name);
  });
  if (targets.length === 0) return;

  const isFirstSnap = !hasSnapped;
  hasSnapped = true;

  // Cinematic screen darken
  let darken = document.querySelector('.snap-screen-darken');
  if (!darken) { darken = document.createElement('div'); darken.className = 'snap-screen-darken'; document.body.appendChild(darken); }
  void darken.offsetWidth;
  darken.classList.add('active');

  // First-snap-only cinematic effects: ripple + overlay flash
  if (isFirstSnap) {
    const ripple = document.createElement('div');
    ripple.className = 'snap-ripple';
    ripple.style.left = '50%'; ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1200);

    const overlay = document.getElementById('snapOverlay');
    setTimeout(() => {
      overlay.classList.add('active');
      setTimeout(() => overlay.classList.remove('active'), 1200);
    }, 300);
  }

  // Dissolve characters with staggered delay
  targets.forEach((card, i) => {
    setTimeout(() => {
      if (isFirstSnap) {
        createButterflyDust(card);
      }
      card.classList.add('snapped');
      snappedCards.push(card);
    }, i * 250 + 800);
  });

  // Remove darken after all dissolves finish
  setTimeout(() => darken.classList.remove('active'), targets.length * 250 + 2800);
}

function createButterflyDust(el) {
  const rect = el.getBoundingClientRect();
  const count = 60;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const isButterfly = Math.random() > 0.4;
    p.className = isButterfly ? 'snap-butterfly' : 'snap-particle';
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;
    const tx = (Math.random() - 0.5) * 350;
    const ty = -(Math.random() * 250 + 40);
    const dur = Math.random() * 2000 + 1200;
    const delay = Math.random() * 600;
    const hue = 25 + Math.random() * 30;
    const lightness = 45 + Math.random() * 35;
    if (isButterfly) {
      const w = Math.random() * 8 + 4;
      const h = Math.random() * 5 + 3;
      p.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;--tx:${tx}px;--ty:${ty}px;--hue:${hue};background:hsl(${hue},70%,${lightness}%);box-shadow:0 0 ${w}px hsl(${hue},80%,${lightness+10}%);animation:butterflyFloat ${dur}ms ${delay}ms ease-out forwards;opacity:0;`;
    } else {
      const size = Math.random() * 4 + 1;
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:hsl(${hue},70%,${lightness}%);box-shadow:0 0 ${size*2}px hsl(${hue},80%,${lightness+10}%);--tx:${tx}px;--ty:${ty}px;animation:dustFloat ${dur}ms ${delay}ms ease-out forwards;opacity:0;`;
    }
    document.body.appendChild(p);
    requestAnimationFrame(() => p.style.opacity = '1');
    setTimeout(() => p.remove(), dur + delay);
  }
}

function reverseSnap() {
  if (snappedCards.length === 0) return;

  // Green-white overlay flash
  const overlay = document.getElementById('snapOverlay');
  overlay.style.background = 'radial-gradient(circle,rgba(255,255,255,0.7) 0%,rgba(0,204,0,0.4) 100%)';
  overlay.classList.add('active');
  setTimeout(() => { overlay.classList.remove('active'); overlay.style.background = ''; }, 1200);

  // Create reassembly particles for each card, then fade card back in
  snappedCards.forEach((card, i) => {
    setTimeout(() => {
      createReverseParticles(card);
      card.classList.remove('snapped');
      card.classList.add('unsnapped');
      setTimeout(() => card.classList.remove('unsnapped'), 1200);
    }, i * 150);
  });
  snappedCards = [];
}

function createReverseParticles(el) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'snap-particle';
    const size = Math.random() * 4 + 1;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const startX = cx + (Math.random() - 0.5) * 400;
    const startY = cy - Math.random() * 300;
    const dur = Math.random() * 600 + 400;
    p.style.cssText = `left:${startX}px;top:${startY}px;width:${size}px;height:${size}px;background:rgba(0,220,80,${0.5+Math.random()*0.5});box-shadow:0 0 ${size*3}px rgba(0,220,80,0.6);transition:all ${dur}ms ease-in;opacity:1;`;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.left = (rect.left + Math.random() * rect.width) + 'px';
      p.style.top = (rect.top + Math.random() * rect.height) + 'px';
      p.style.opacity = '0';
    });
    setTimeout(() => p.remove(), dur + 100);
  }
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Render all sections
  renderCharFilters();
  renderCharacters();
  renderMovieFilters();
  renderMovies();
  setupCompare();
  renderStones();

  // Quiz start button
  document.getElementById('quizStartBtn').addEventListener('click', startQuiz);

  // Snap effect
  document.getElementById('snapBtn').addEventListener('click', performSnap);
  document.getElementById('reverseSnapBtn').addEventListener('click', reverseSnap);

  // Navigation
  setupMobileMenu();
  setupSmoothScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Update hero stats
  document.getElementById('statChars').textContent = characters.length;
  document.getElementById('statMovies').textContent = movies.length;
});

