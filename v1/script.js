const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://duyyufcpscvfukyuvcrm.supabase.co/rest/v1/facts",
    {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eXl1ZmNwc2N2ZnVreXV2Y3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5ODYxMzksImV4cCI6MTk5NTU2MjEzOX0.YgkmrVXGo6O1MIUCyUIhVsnqMrVgYjftAqqHFPe-b3U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eXl1ZmNwc2N2ZnVreXV2Y3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5ODYxMzksImV4cCI6MTk5NTU2MjEzOX0.YgkmrVXGo6O1MIUCyUIhVsnqMrVgYjftAqqHFPe-b3U",
      },
    }
  );
  const data = await res.json();

  createFactsList(data);
}

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a 
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category)?.color
    }">${fact.category}</span>

    <div class="vote-buttons">
      <button>👍 24</button>
      <button>🤯 9</button>
      <button>⛔️ 4</button>
    </div>
  </li>`
  );

  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
