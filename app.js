
"use strict";

const recipes = [
  {
    id: "telur-dadar",
    name: "Telur Dadar",
    category: "sarapan",
    duration: "10 menit",
    servings: "1 porsi",
    ingredients: [
      "2 butir telur",
      "1 batang daun bawang",
      "Sejumput garam",
      "1 sendok makan minyak goreng"
    ],
    steps: [
      {
        title: "Siapkan bahan",
        instruction: "Pecahkan telur ke dalam mangkuk. Iris daun bawang dan masukkan bersama garam.",
        cue: "Gunakan garpu untuk mengocok hingga putih dan kuning telur tercampur.",
        safety: "Cuci tangan dan peralatan setelah menyentuh telur mentah."
      },
      {
        title: "Panaskan wajan",
        instruction: "Letakkan wajan di atas kompor. Tambahkan minyak secukupnya dan gunakan api sedang.",
        cue: "Minyak mulai terasa panas. Jangan mengandalkan suara minyak sebagai satu-satunya indikator suhu.",
        safety: "Jangan meninggalkan wajan yang berisi minyak panas."
      },
      {
        title: "Masukkan telur",
        instruction: "Tuangkan adonan telur perlahan ke tengah wajan.",
        cue: "Adonan mulai mengeras dari bagian tepi. Gunakan spatula untuk memeriksa kekokohan.",
        safety: "Tuangkan perlahan untuk menghindari percikan minyak."
      },
      {
        title: "Matangkan telur",
        instruction: "Balik telur dengan spatula dan masak sampai matang menyeluruh.",
        cue: "Telur yang matang memiliki tekstur kokoh dan tidak lagi cair. Suhu bagian tengah telur perlu mencapai 71 derajat Celsius bila diperiksa menggunakan termometer pangan.",
        safety: "Jangan menyajikan telur yang masih mentah atau setengah matang."
      },
      {
        title: "Sajikan",
        instruction: "Matikan kompor, pindahkan telur ke piring menggunakan spatula, dan diamkan sebentar.",
        cue: "Uap panas akan berkurang setelah beberapa saat.",
        safety: "Waspadai wajan dan piring yang masih panas."
      }
    ],
    allergens: "Mengandung telur.",
    safety: "Pastikan telur matang menyeluruh sebelum dikonsumsi."
  },

  {
    id: "nasi-goreng",
    name: "Nasi Goreng Sederhana",
    category: "sarapan",
    duration: "15 menit",
    servings: "1–2 porsi",
    ingredients: [
      "1 piring nasi matang",
      "1 butir telur",
      "2 siung bawang putih",
      "1 sendok makan kecap manis",
      "1 sendok makan minyak",
      "Garam secukupnya"
    ],
    steps: [
      {
        title: "Persiapkan bahan",
        instruction: "Siapkan nasi, telur, bawang putih, kecap, garam, dan peralatan.",
        cue: "Pisahkan bahan dalam wadah yang mudah dikenali.",
        safety: "Nasi sisa harus disimpan dengan benar dalam lemari pendingin."
      },
      {
        title: "Masak telur",
        instruction: "Panaskan sedikit minyak. Masukkan telur dan orak-arik sampai matang.",
        cue: "Telur berubah menjadi gumpalan yang kokoh.",
        safety: "Hindari kontak antara telur mentah dan makanan matang."
      },
      {
        title: "Tumis bawang",
        instruction: "Masukkan bawang putih dan tumis sebentar.",
        cue: "Aroma bawang mulai tercium. Jika tercium bau gosong, matikan atau kecilkan api.",
        safety: "Jangan meninggalkan wajan saat minyak dipanaskan."
      },
      {
        title: "Masukkan nasi",
        instruction: "Masukkan nasi, kecap, dan garam. Aduk secara perlahan hingga tercampur.",
        cue: "Gunakan spatula untuk memisahkan gumpalan nasi.",
        safety: "Aduk perlahan agar bahan tidak terlempar dari wajan."
      },
      {
        title: "Panaskan dan sajikan",
        instruction: "Masukkan kembali telur dan panaskan nasi hingga seluruh bagian panas merata.",
        cue: "Uap panas dapat menjadi petunjuk pendukung. Untuk nasi sisa, panaskan ulang sampai 74 derajat Celsius.",
        safety: "Jangan menggunakan nasi yang terlalu lama dibiarkan pada suhu ruang."
      }
    ],
    allergens: "Mengandung telur dan kemungkinan kedelai dari kecap.",
    safety: "Perhatikan penyimpanan nasi matang dan hindari pemanasan ulang berulang kali."
  },

  {
    id: "sayur-sop",
    name: "Sayur Sop Sederhana",
    category: "sayur",
    duration: "25 menit",
    servings: "2 porsi",
    ingredients: [
      "1 buah wortel",
      "1 buah kentang",
      "5 batang buncis",
      "2 siung bawang putih",
      "500 ml air",
      "Garam secukupnya"
    ],
    steps: [
      {
        title: "Siapkan sayuran",
        instruction: "Cuci wortel, kentang, dan buncis. Potong menggunakan talenan yang stabil.",
        cue: "Potong sayuran dengan ukuran relatif seragam.",
        safety: "Gunakan pisau secara hati-hati dan jauhkan jari dari mata pisau."
      },
      {
        title: "Rebus air",
        instruction: "Masukkan air ke panci dan panaskan sampai mendidih.",
        cue: "Didihan terdengar dan uap mulai muncul.",
        safety: "Gunakan panci yang stabil dan arahkan gagangnya ke dalam."
      },
      {
        title: "Masukkan sayuran",
        instruction: "Masukkan wortel dan kentang secara perlahan. Masak sampai mulai lunak.",
        cue: "Kentang dapat diperiksa dengan garpu ketika cukup lunak.",
        safety: "Waspadai cipratan air panas."
      },
      {
        title: "Tambahkan buncis",
        instruction: "Masukkan buncis, bawang putih, dan garam. Masak sampai sayuran matang.",
        cue: "Aroma sayuran mulai tercium dan tekstur berubah menjadi lebih lunak.",
        safety: "Jangan mendekatkan wajah ke atas panci."
      },
      {
        title: "Sajikan",
        instruction: "Matikan kompor dan pindahkan sup menggunakan sendok sayur.",
        cue: "Diamkan sebentar agar uap panas berkurang.",
        safety: "Gunakan mangkuk tahan panas dan letakkan pada permukaan stabil."
      }
    ],
    allergens: "Periksa kaldu atau bumbu tambahan jika digunakan.",
    safety: "Hati-hati ketika memindahkan cairan panas."
  },

  {
    id: "teh-jahe",
    name: "Teh Jahe Hangat",
    category: "minuman",
    duration: "10 menit",
    servings: "1–2 gelas",
    ingredients: [
      "500 ml air",
      "3 iris jahe",
      "1 kantong teh",
      "Gula atau madu secukupnya"
    ],
    steps: [
      {
        title: "Siapkan jahe",
        instruction: "Cuci jahe, iris, lalu memarkan menggunakan alat yang stabil.",
        cue: "Aroma jahe akan semakin kuat setelah dimemarkan.",
        safety: "Gunakan pisau di atas talenan yang tidak mudah bergeser."
      },
      {
        title: "Rebus jahe",
        instruction: "Masukkan air dan jahe ke dalam panci. Panaskan sampai mendidih.",
        cue: "Didihan terdengar dan aroma jahe mulai tercium.",
        safety: "Waspadai uap panas dari panci."
      },
      {
        title: "Seduh teh",
        instruction: "Matikan kompor dan masukkan kantong teh. Diamkan sesuai petunjuk kemasan.",
        cue: "Aroma teh mulai tercium.",
        safety: "Hindari kontak langsung dengan air panas."
      },
      {
        title: "Sajikan",
        instruction: "Tambahkan pemanis, aduk, lalu tuangkan ke gelas tahan panas.",
        cue: "Pastikan pemanis larut sebelum diminum.",
        safety: "Tuangkan cairan panas secara perlahan."
      }
    ],
    allergens: "Perhatikan bahan tambahan. Madu tidak boleh diberikan kepada bayi di bawah 12 bulan.",
    safety: "Pastikan minuman tidak terlalu panas sebelum diminum."
  }
];

const $ = (id) => document.getElementById(id);

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }
};

let selectedRecipe = null;
let currentStep = 0;
let timerInterval = null;
let timerDeadline = null;
let deferredInstall = null;

let favorites = storage.get("dbb-favorites", []);
let kitchenItems = storage.get("dbb-kitchen", []);

function announce(message) {
  const region = $("live-region");
  region.textContent = "";

  window.setTimeout(() => {
    region.textContent = message;
  }, 50);
}

function speak(message) {
  if (!$("speech").checked) return;

  if (!("speechSynthesis" in window)) {
    announce("Fitur suara tidak didukung browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "id-ID";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}

function createElement(tag, text, className) {
  const element = document.createElement(tag);

  if (text !== undefined) {
    element.textContent = text;
  }

  if (className) {
    element.className = className;
  }

  return element;
}

function renderRecipes() {
  const list = $("recipe-list");
  const keyword = $("search").value.trim().toLowerCase();
  const category = $("category").value;
  const onlyFavorites = $("favorite-filter").checked;

  list.replaceChildren();

  const filtered = recipes.filter((recipe) => {
    const searchable = [
      recipe.name,
      ...recipe.ingredients
    ].join(" ").toLowerCase();

    const matchesKeyword = searchable.includes(keyword);
    const matchesCategory =
      category === "all" || recipe.category === category;
    const matchesFavorite =
      !onlyFavorites || favorites.includes(recipe.id);

    return matchesKeyword && matchesCategory && matchesFavorite;
  });

  $("recipe-count").textContent =
    `${filtered.length} resep ditemukan.`;

  if (filtered.length === 0) {
    list.append(
      createElement("p", "Tidak ada resep yang sesuai.")
    );
    return;
  }

  filtered.forEach((recipe) => {
    const button = createElement("button", undefined, "recipe-button");
    button.type = "button";
    button.setAttribute(
      "aria-pressed",
      String(selectedRecipe?.id === recipe.id)
    );

    const name = createElement("strong", recipe.name);
    const information = createElement(
      "span",
      `${recipe.duration} · ${recipe.servings}`
    );

    button.append(name, information);

    button.addEventListener("click", () => {
      selectRecipe(recipe.id);
    });

    list.append(button);
  });
}

function selectRecipe(id) {
  selectedRecipe = recipes.find((recipe) => recipe.id === id);

  if (!selectedRecipe) return;

  renderRecipeDetail();
  renderRecipes();

  $("cooking-name").textContent = selectedRecipe.name;
  $("step-count").textContent = "Siap dimulai";

  $("current-step").textContent =
    "Lengkapi pemeriksaan kesiapan dapur, kemudian mulai langkah memasak.";

  currentStep = 0;

  $("previous").disabled = true;
  $("repeat").disabled = true;
  $("next").disabled = false;
  $("stop").disabled = true;

  $("progress-fill").style.width = "0%";

  announce(`Resep ${selectedRecipe.name} dipilih.`);
}

function renderRecipeDetail() {
  const recipe = selectedRecipe;
  const detail = $("recipe-detail");

  detail.replaceChildren();

  const title = createElement("h2", recipe.name);
  const description = createElement(
    "p",
    `${recipe.duration} · ${recipe.servings}`
  );

  detail.append(title, description);

  detail.append(createElement("h3", "Bahan-bahan"));

  const ingredients = document.createElement("ul");

  recipe.ingredients.forEach((ingredient) => {
    ingredients.append(createElement("li", ingredient));
  });

  detail.append(ingredients);
  detail.append(createElement("h3", "Langkah memasak"));

  const steps = document.createElement("ol");

  recipe.steps.forEach((step) => {
    const item = document.createElement("li");
    const heading = createElement("strong", step.title);
    const instruction = createElement("p", step.instruction);
    const cue = createElement("p", `Petunjuk nonvisual: ${step.cue}`);
    const safety = createElement("p", `Keselamatan: ${step.safety}`);

    item.append(heading, instruction, cue, safety);
    steps.append(item);
  });

  detail.append(steps);

  detail.append(
    createElement("h3", "Informasi alergen"),
    createElement("p", recipe.allergens),
    createElement("h3", "Catatan keselamatan"),
    createElement("p", recipe.safety)
  );

  const actions = createElement("div", undefined, "recipe-actions");

  const favoriteButton = createElement(
    "button",
    favorites.includes(recipe.id)
      ? "Hapus dari favorit"
      : "Tambahkan ke favorit",
    "btn btn-secondary"
  );

  favoriteButton.type = "button";

  favoriteButton.addEventListener("click", () => {
    toggleFavorite(recipe.id);
    renderRecipeDetail();
  });

  const startButton = createElement(
    "button",
    "Mulai memasak resep ini",
    "btn btn-primary"
  );

  startButton.type = "button";

  startButton.addEventListener("click", () => {
    document.querySelectorAll("#safety-checks input")
      .forEach((checkbox) => {
        checkbox.checked = false;
      });

    $("safety-status").textContent =
      "Periksa seluruh kondisi dapur sebelum memulai.";

    $("memasak").scrollIntoView({ behavior: "smooth" });

    announce("Silakan periksa kesiapan dapur.");
  });

  actions.append(favoriteButton, startButton);
  detail.append(actions);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
    announce("Resep dihapus dari favorit.");
  } else {
    favorites.push(id);
    announce("Resep ditambahkan ke favorit.");
  }

  storage.set("dbb-favorites", favorites);
  renderRecipes();
}

function safetyCompleted() {
  const checks = [
    ...document.querySelectorAll("#safety-checks input")
  ];

  return checks.length > 0 &&
    checks.every((checkbox) => checkbox.checked);
}

function updateSafetyStatus() {
  const checks = [
    ...document.querySelectorAll("#safety-checks input")
  ];

  const completed = checks.filter((item) => item.checked).length;

  $("safety-status").textContent =
    `${completed} dari ${checks.length} pemeriksaan telah diselesaikan.`;
}

function showStep() {
  if (!selectedRecipe) return;

  const step = selectedRecipe.steps[currentStep];
  const panel = $("current-step");

  panel.replaceChildren();

  panel.append(
    createElement("h3", `Langkah ${currentStep + 1}: ${step.title}`),
    createElement("p", step.instruction),
    createElement("p", `Petunjuk nonvisual: ${step.cue}`),
    createElement("p", `Keselamatan: ${step.safety}`)
  );

  $("step-count").textContent =
    `Langkah ${currentStep + 1} dari ${selectedRecipe.steps.length}`;

  const progress =
    ((currentStep + 1) / selectedRecipe.steps.length) * 100;

  $("progress-fill").style.width = `${progress}%`;

  $("previous").disabled = currentStep === 0;
  $("next").disabled =
    currentStep === selectedRecipe.steps.length - 1;

  $("repeat").disabled = false;
  $("stop").disabled = false;

  announce(`Langkah ${currentStep + 1}. ${step.title}. ${step.instruction}`);

  speak(
    `Langkah ${currentStep + 1}. ${step.title}. ${step.instruction}. Petunjuk nonvisual: ${step.cue}. Keselamatan: ${step.safety}`
  );
}

function startCooking() {
  if (!selectedRecipe) {
    announce("Silakan pilih resep terlebih dahulu.");
    return;
  }

  if (!safetyCompleted()) {
    $("safety-status").textContent =
      "Lengkapi seluruh pemeriksaan keselamatan terlebih dahulu.";

    announce("Pemeriksaan kesiapan dapur belum lengkap.");
    return;
  }

  currentStep = 0;
  showStep();
  $("stop").disabled = false;
}

function stopCooking() {
  currentStep = 0;

  $("current-step").textContent =
    "Mode memasak telah diakhiri.";

  $("step-count").textContent = "Tidak aktif";
  $("progress-fill").style.width = "0%";

  $("previous").disabled = true;
  $("next").disabled = true;
  $("repeat").disabled = true;
  $("stop").disabled = true;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  announce("Mode memasak telah diakhiri.");
}

function nextStep() {
  if (!selectedRecipe) return;

  if (currentStep < selectedRecipe.steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    $("current-step").textContent =
      "Seluruh langkah telah selesai. Periksa kembali makanan sebelum disajikan.";

    $("step-count").textContent = "Selesai";
    $("progress-fill").style.width = "100%";

    $("next").disabled = true;
    $("stop").disabled = false;

    announce("Seluruh langkah resep telah selesai.");
    speak("Seluruh langkah memasak telah selesai.");
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
}

function repeatStep() {
  if (selectedRecipe) showStep();
}

/* Peta Dapur Personal */

function renderKitchen() {
  const list = $("kitchen-list");
  const keyword = $("map-search").value.trim().toLowerCase();

  list.replaceChildren();

  const filtered = kitchenItems.filter((item) =>
    `${item.name} ${item.location}`.toLowerCase().includes(keyword)
  );

  $("map-count").textContent =
    `${filtered.length} lokasi ditemukan.`;

  if (filtered.length === 0) {
    list.append(createElement("li", "Belum ada lokasi yang sesuai."));
    return;
  }

  filtered.forEach((item) => {
    const li = document.createElement("li");

    const description = createElement(
      "span",
      `${item.name}: ${item.location}. `
    );

    const deleteButton = createElement(
      "button",
      "Hapus",
      "btn btn-danger"
    );

    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      kitchenItems = kitchenItems.filter(
        (entry) => entry.id !== item.id
      );

      storage.set("dbb-kitchen", kitchenItems);
      renderKitchen();
      announce(`Lokasi ${item.name} dihapus.`);
    });

    li.append(description, deleteButton);
    list.append(li);
  });
}

$("kitchen-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("item-name").value.trim();
  const location = $("item-location").value.trim();

  if (!name || !location) {
    announce("Nama dan lokasi harus diisi.");
    return;
  }

  const item = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`,
    name,
    location
  };

  kitchenItems.push(item);

  if (!storage.set("dbb-kitchen", kitchenItems)) {
    kitchenItems.pop();
    announce("Penyimpanan gagal. Periksa pengaturan browser.");
    return;
  }

  $("kitchen-form").reset();
  renderKitchen();

  announce(`Lokasi ${name} berhasil disimpan. ${location}`);
});

$("map-search").addEventListener("input", renderKitchen);

/* Timer */

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

function updateTimer() {
  const remaining = Math.max(
    0,
    Math.ceil((timerDeadline - Date.now()) / 1000)
  );

  $("timer-display").textContent = formatTime(remaining);

  if (remaining <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerDeadline = null;

    $("timer-start").disabled = false;
    $("timer-stop").disabled = true;

    $("timer-status").textContent = "Waktu memasak telah selesai.";

    announce("Waktu timer telah selesai.");

    if ("speechSynthesis" in window) {
      const message = new SpeechSynthesisUtterance(
        "Waktu memasak telah selesai."
      );
      message.lang = "id-ID";
      window.speechSynthesis.speak(message);
    }
  }
}

$("timer-start").addEventListener("click", () => {
  if (timerInterval) return;

  const minutes = Number($("minutes").value);
  const seconds = Number($("seconds").value);

  if (
    !Number.isInteger(minutes) ||
    !Number.isInteger(seconds) ||
    minutes < 0 ||
    minutes > 180 ||
    seconds < 0 ||
    seconds > 59 ||
    minutes * 60 + seconds <= 0
  ) {
    announce("Masukkan durasi timer yang valid.");
    return;
  }

  timerDeadline = Date.now() + (minutes * 60 + seconds) * 1000;

  $("timer-start").disabled = true;
  $("timer-stop").disabled = false;
  $("timer-status").textContent = "Timer sedang berjalan.";

  updateTimer();

  timerInterval = setInterval(updateTimer, 250);

  announce("Timer dimulai.");
});

$("timer-stop").addEventListener("click", () => {
  clearInterval(timerInterval);

  timerInterval = null;
  timerDeadline = null;

  $("timer-display").textContent = "00:00";
  $("timer-start").disabled = false;
  $("timer-stop").disabled = true;
  $("timer-status").textContent = "Timer dihentikan.";

  announce("Timer dihentikan.");
});

/* Navigasi Memasak */

$("next").addEventListener("click", () => {
  if (!selectedRecipe) {
    startCooking();
    return;
  }

  if ($("step-count").textContent === "Siap dimulai") {
    startCooking();
    return;
  }

  nextStep();
});

$("previous").addEventListener("click", previousStep);
$("repeat").addEventListener("click", repeatStep);
$("stop").addEventListener("click", stopCooking);

document.querySelectorAll("#safety-checks input")
  .forEach((checkbox) => {
    checkbox.addEventListener("change", updateSafetyStatus);
  });

/* Pencarian dan Favorit */

$("search").addEventListener("input", renderRecipes);
$("category").addEventListener("change", renderRecipes);
$("favorite-filter").addEventListener("change", renderRecipes);

/* Pengaturan Aksesibilitas */

const accessSettings = [
  ["high-contrast", "high-contrast"],
  ["large-text", "large-text"],
  ["reduce-motion", "reduce-motion"]
];

accessSettings.forEach(([inputId, className]) => {
  const input = $(inputId);
  const saved = storage.get(`dbb-${inputId}`, false);

  input.checked = saved;
  document.body.classList.toggle(className, saved);

  input.addEventListener("change", () => {
    document.body.classList.toggle(className, input.checked);
    storage.set(`dbb-${inputId}`, input.checked);
  });
});

/* Narasi Suara */

$("speech").addEventListener("change", () => {
  if (!$("speech").checked && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  announce(
    $("speech").checked
      ? "Narasi suara tambahan diaktifkan."
      : "Narasi suara tambahan dimatikan."
  );
});

$("welcome").addEventListener("click", () => {
  const message =
    "Selamat datang di Dapur Bisa Bilitas. " +
    "Aplikasi ini membantu Anda mengenali dapur, " +
    "memahami resep nonvisual, dan memasak secara bertahap.";

  announce(message);

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "id-ID";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
});

/* Perintah Suara */

let recognition = null;

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "id-ID";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript
      .toLowerCase()
      .trim();

    $("voice-status").textContent = `Perintah diterima: ${command}`;

    if (command.includes("berikutnya")) {
      if ($("step-count").textContent === "Siap dimulai") {
        startCooking();
      } else {
        nextStep();
      }
    } else if (command.includes("sebelumnya")) {
      previousStep();
    } else if (command.includes("ulangi")) {
      repeatStep();
    } else if (command.includes("akhiri")) {
      stopCooking();
    } else if (command.includes("timer")) {
      $("voice-status").textContent =
        "Untuk menjalankan timer, gunakan tombol mulai timer.";
    } else {
      announce("Perintah belum dikenali.");
    }
  };

  recognition.onerror = () => {
    $("voice-status").textContent =
      "Perintah suara mengalami kendala. Periksa izin mikrofon.";
  };

  recognition.onend = () => {
    $("voice-command").disabled = false;
  };
}

$("voice-command").addEventListener("click", () => {
  if (!recognition) {
    $("voice-status").textContent =
      "Browser ini belum mendukung pengenalan suara.";
    return;
  }

  $("voice-command").disabled = true;
  $("voice-status").textContent =
    "Silakan ucapkan: berikutnya, sebelumnya, ulangi, atau akhiri.";

  try {
    recognition.start();
  } catch {
    $("voice-command").disabled = false;
    $("voice-status").textContent =
      "Mikrofon sedang digunakan atau belum siap.";
  }
});

/* Status koneksi */

function updateConnection() {
  $("connection").textContent = navigator.onLine
    ? "Status: terhubung ke internet."
    : "Status: offline. Fitur lokal tetap dapat digunakan.";
}

window.addEventListener("online", updateConnection);
window.addEventListener("offline", updateConnection);
updateConnection();

/* Instalasi PWA */

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstall = event;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-secondary";
  button.textContent = "Pasang aplikasi";
  button.id = "install-button";

  const heroActions = document.querySelector(".hero-actions");
  heroActions.append(button);

  button.addEventListener("click", async () => {
    if (!deferredInstall) return;

    deferredInstall.prompt();
    await deferredInstall.userChoice;

    deferredInstall = null;
    button.remove();
  });
});

/* Service Worker */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => {
        console.info("Layanan offline tersedia.");
      })
      .catch(() => {
        console.warn("Layanan offline belum dapat diaktifkan.");
      });
  });
}

/* Inisialisasi */

renderRecipes();
renderKitchen();
updateSafetyStatus();
