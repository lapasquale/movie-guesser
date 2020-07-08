const movies = [
  {
    title: "Clueless",
    explanation: "Jane Austen but make it '90s",
    hint: "Ugh as if!",
  },
  {
    title: "Cats",
    explanation: "Humans sing and dance in animal costumes",
    hint: "Not dogs",
  },
  {
    title: "Good Will Hunting",
    explanation:
      "The janitor is smart in this one",
    hint: "Matt Damon",
  },
  {
    title: "Jaws",
    explanation: "Scary fish eats people",
    hint: "You're gonna need a bigger boat",
  },
  {
    title: "Moana",
    explanation: "The Rock battles a mountain",
    hint: "Disney Princess Musical",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Scary Movie",
    explanation:
      "People get murdered but, like, its a parody",
    hint: "Brenda is the best part",
  },
  {
    title: "Toy Story",
    explanation:
      "Cowboy and astronaut become friends",
    hint: "ANDY",
  },
  {
    title: "Star Wars",
    explanation: "People fight in space with big glow sticks",
    hint: "I am your father",
  },
  {
    title: "Annie",
    explanation:
      "Girl with red hair has no parents",
    hint: "The sun will come out tomorrow",
  },
  {
    title: "The Shining",
    explanation: "Man goes crazy after quarantining for a few months",
    hint: "All work and no play makes Jack a dull boy",
  },
];

let min = 0,
  max = 9,
  mymovie = movies[getRandomNum(min, max)],
  mytitle = mymovie.title,
  myhint = mymovie.hint,
  myexpl = mymovie.explanation,
  guessesLeft = 3;

document.getElementById("explanation").innerHTML = `${myexpl}`;

const game = document.querySelector("#game"),
  guessBtn = document.querySelector(".input-group-text"),
  guessInput = document.querySelector("#guess-movie"),
  message = document.querySelector(".message");

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "input-group-text play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = guessInput.value;

  if (guess == mytitle) {
    gameOver(true, `${mytitle} is correct! You win!`);
  } else {
    guessesLeft--;

    if (guessesLeft === 0) {
      gameOver(false, `Game over, you lost! Correct answer: ${mytitle}`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        `red`
      );
    }
  }
});

function hint() {
  document.getElementById("hint").innerHTML = `${myhint}`;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;

  guessInput.style.borderColor = color;

  message.style.color = color;

  setMessage(msg);

  guessBtn.innerHTML = "Play again?";
  guessBtn.className += " play-again";
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
