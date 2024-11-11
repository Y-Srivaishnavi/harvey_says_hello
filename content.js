chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "showQuote") {
    showHarveyQuote();
  }
});

function showHarveyQuote() {
  const quotes = [
    "I don't play the odds; I play the man.",
    "Win a no-win situation by rewriting the rules.",
    "I don't take meetings. I set them. And my respect isn't demanded, It's earned",
    "If they think you care, They'll walk all over you",
    "Loyalty is a two way street. If I'm asking for it from you, Then you are getting it from me",
    "Your promises are only as good as your priorities",
    "People only treat you one way. The way that you allow them to",
    "Forget prince charming. Go for the wolf. He can see you better. Have your back better. Hear you better",
    "I respect those who keep their heads held high even when they're on the verge of breaking",
    "People get really mad when you don't let them use you",
    "If you don't value your time, Neither will others. Stop giving it like it's free",
    "You can do 99 things for someone and all they will remember is the one thing you didn't do",
    "Don't raise your voice. Improve your argument",
    "Confidence comes from keeping the promises you made to yourself",
    "Have goals so big you get uncomfortable telling small minded people",
    "Let them hate you. Just make sure they spell your name right",
    "Stay away from negative people. They have a problem for every solution",
    "Knowledge is knowing what to say, Wisdom is knowing when to say it",
    "The only thing you need is an unshakeable belief in yourself",
    "You sleep to see your dreams. I stay awake and live mine",
    "Anyone can do my job, But no one can be me",
    "Win a no win situation by rewriting the rules",
    "Whoever is trying to bring you down is already below you",
    "I don't Play the odds, I play the man",
    "Anyone can do my job, But no one can be me",
    "It's going to happen because I'm going to make it happen",
    "Win a no win situation by rewriting the rules",
    "Winners don't make excuses when the other side plays the game",
    "97% of people who gave up are employed by the 3% who never gave up",
    "If you kinda sorta try, Then you kinda sorta fail",
    "When achieving your goal is more important than partying, Welcome to the 1%",
    "You're never going to win big if you're only going to minimize your your losses",
    "Have goals so big you get uncomfortable telling small-minded people",
    "Never blame a clown for acting like a clown, Blame yourself for visiting the circus",
    "The funny thing is, When you start feeling happy alone, That's when everyone decides to be with you",
    "Create a situation where failure isn't even a possibility",
    "People may not tell you how they feel about you, But They always show you. Pay attention",
    "If you can't manage time for what you want. You're not a man with goals, You're a kid with wishes",
    "People who get hit the hardest are the ones who come back the most successful",
    "You can't go to the big leagues with average-minded people",
    "When you're a winner, You come back no matter what happened the day before",
    "Don't get comfortable comfort kills growth",
    "Never Chase love, Affection or attention. If it isn't given freely by another person, It isn't worth having",
    "The loudest guy in the room is the weakest guy in the room. Confidence is silent",
    "Destiny is for losers. The rest of us just go out and make it happen",
    "Pray as if it's up to god. Work as if it's up to you",
    "It's what you do in the dark that puts you in the light",
    "Ask yourself, Is this storm happening to me or for me?",
    "Don't raise your voice. Improve your argument",
    "Never agree to be average.",
    "I always tell the truth, even when I lie.",
    "I'm a closer. If you want to play the odds, you go to Vegas. If you want to play to win, you come to me."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "0";
  container.style.right = "0";
  container.style.zIndex = "1000";
  container.style.width = "250px";
  container.style.height = "50px";
  container.style.padding = "20px";
  container.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  container.style.color = "white";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.borderRadius = "10px";
  container.style.transition = "transform 0.5s ease";
  container.style.transform = "translateX(100%)"; // Start off-screen

  const text = document.createElement("p");
  text.textContent = quote;
  text.style.margin = "10px 0 0";

  container.appendChild(text);
  document.body.appendChild(container);

  // Slide in
  setTimeout(() => {
    container.style.transform = "translateX(0)";
  }, 100);

  // Slide out after 5 seconds
  setTimeout(() => {
    container.style.transform = "translateX(100%)";
    setTimeout(() => container.remove(), 500);
  }, 5000);
}
