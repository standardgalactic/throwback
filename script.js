// Retro visitor counter (persisted in localStorage, GeoCities-style odometer)
(function () {
  var key = "throwback-visitor-count";
  var count = parseInt(localStorage.getItem(key) || "0", 10) + 1;
  localStorage.setItem(key, count);
  var el = document.getElementById("hit-counter");
  if (el) {
    el.textContent = String(count).padStart(6, "0");
  }
})();

// Guestbook (stored locally, no server needed)
function signGuestbook(evt) {
  evt.preventDefault();
  var input = document.getElementById("guest-name");
  var name = input.value.trim();
  if (!name) return false;

  var key = "throwback-guestbook";
  var entries = JSON.parse(localStorage.getItem(key) || "[]");
  entries.unshift({ name: name, date: new Date().toLocaleDateString() });
  localStorage.setItem(key, JSON.stringify(entries));

  renderGuestbook();
  input.value = "";
  return false;
}

function renderGuestbook() {
  var key = "throwback-guestbook";
  var entries = JSON.parse(localStorage.getItem(key) || "[]");
  var list = document.getElementById("guest-list");
  if (!list) return;
  list.innerHTML = "";
  entries.forEach(function (entry) {
    var li = document.createElement("li");
    li.textContent = entry.name + " — signed on " + entry.date;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderGuestbook);

// Retro 8-bit "MIDI" background track player (Web Audio synth, no external files)
// Melody: Ode to Joy (Beethoven, public domain), quarter-note beats.
var midiPlayer = (function () {
  var NOTE_FREQ = {
    C3: 130.81, D3: 146.83, F3: 174.61, G3: 196.00,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
    G4: 392.00, A4: 440.00, B4: 493.88, C5: 523.25
  };
  // Full "Ode to Joy" theme (Beethoven, public domain), four phrases.
  var MELODY = [
    // Phrase 1
    "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
    "C4", "C4", "D4", "E4", "E4", "D4", "D4",
    // Phrase 2
    "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
    "C4", "C4", "D4", "E4", "D4", "C4", "C4",
    // Phrase 3
    "D4", "D4", "E4", "C4", "D4", "E4", "F4", "E4", "C4",
    "D4", "E4", "F4", "E4", "D4", "C4", "D4", "G3",
    // Phrase 4 (recap of phrase 1)
    "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4",
    "C4", "C4", "D4", "E4", "D4", "C4", "C4"
  ];
  var BEAT_SEC = 0.38;
  var BASS_GROUP_SIZE = 4;
  // Simple I-I-IV-V root progression under the melody, cycled every bar.
  var BASS_ROOTS = ["C3", "C3", "F3", "G3"];

  var audioCtx = null;
  var timerId = null;
  var noteIndex = 0;
  var playing = false;

  function playNote(freq, duration, type, peakGain) {
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(peakGain, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }

  function scheduleNext() {
    var note = MELODY[noteIndex % MELODY.length];
    playNote(NOTE_FREQ[note], BEAT_SEC * 0.9, "square", 0.15);

    // Trigger a sustained bass note at the start of every bar.
    if (noteIndex % BASS_GROUP_SIZE === 0) {
      var barIndex = Math.floor(noteIndex / BASS_GROUP_SIZE);
      var root = BASS_ROOTS[barIndex % BASS_ROOTS.length];
      playNote(NOTE_FREQ[root], BEAT_SEC * BASS_GROUP_SIZE * 0.95, "triangle", 0.08);
    }

    noteIndex++;
    timerId = setTimeout(scheduleNext, BEAT_SEC * 1000);
  }

  function start() {
    if (playing) return;
    if (!audioCtx) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    playing = true;
    noteIndex = 0;
    scheduleNext();
  }

  function stop() {
    playing = false;
    if (timerId) clearTimeout(timerId);
    timerId = null;
  }

  function toggle() {
    if (playing) stop(); else start();
    return playing;
  }

  return { toggle: toggle, isPlaying: function () { return playing; } };
})();

function toggleMidi() {
  var isPlaying = midiPlayer.toggle();
  var btn = document.getElementById("midi-play-btn");
  var status = document.getElementById("midi-status");
  if (btn) btn.textContent = isPlaying ? "■ Stop MIDI" : "▶ Play MIDI";
  if (status) {
    status.textContent = isPlaying ? "▶ PLAYING" : "■ STOPPED";
    status.classList.toggle("blink", !isPlaying);
  }
}

// Twinkling starfield background, drawn on a canvas
document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".stars");
  if (!container) return;
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container.appendChild(canvas);
  var ctx = canvas.getContext("2d");

  var stars = [];
  for (var i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      phase: Math.random() * Math.PI * 2
    });
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach(function (star) {
      var twinkle = 0.5 + 0.5 * Math.sin(time / 500 + star.phase);
      ctx.globalAlpha = twinkle;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
