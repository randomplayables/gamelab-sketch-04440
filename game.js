// Inject CSS styles
const styles = `
  #game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  h1 {
    color: #333;
    margin-bottom: 10px;
  }
  #score-display {
    font-size: 2rem;
    margin: 20px 0;
    color: #111;
  }
  button {
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 15px 30px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }
  button:hover {
    background-color: #1e40af;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Main game logic
const container = document.getElementById("game-container");
let score = 0;

if (container) {
  const title = document.createElement("h1");
  title.textContent = "Vanilla JS Clicker Game";

  const scoreDisplay = document.createElement("p");
  scoreDisplay.id = "score-display";
  scoreDisplay.textContent = "Score: 0";

  const clickButton = document.createElement("button");
  clickButton.textContent = "Click Me!";

  container.appendChild(title);
  container.appendChild(scoreDisplay);
  container.appendChild(clickButton);

  clickButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    if (typeof window.sendDataToGameLab === "function") {
      window.sendDataToGameLab({
        event: "click",
        newScore: score,
        timestamp: new Date().toISOString()
      });
    }
  });
}