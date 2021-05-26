const setOfWords = [
  "My name is manmeet singh virdi and i am a student in Shri Shankaracharya College",
  "Hope you all are safe in this pandemic coronavirus",
  "If you want the source code the link ius given in the description so you can create your own version of this challenge",
];

const msg = document.getElementById("msg");
const typedWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playgame = () => {
  let randomNum = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNum];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(Math.trunc(totalTime));

  let totalstr = typedWords.value;
  let wordCount = wordCounter(totalstr);

  //words written per seconds
  let speed = Math.round((wordCount / totalTime) * 60);

  let finalMsg = `You typed total ${wordCount} words at ${speed} per minute `;
  console.log(finalMsg);

  finalMsg = finalMsg + compareWords(msg.innerText, totalstr);

  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      count++;
    }
  });

  let errorWords = words1.length - count;
  return ` 
          ${count} words are correct out of ${words1.length} words And total number of error words are ${errorWords}
          `;
};

const wordCounter = (str) => {
  let words = str.split(" ").length;
  return words;
};

btn.addEventListener("click", function () {
  console.log(this);
  if (this.innerText == "Start") {
    typedWords.disabled = false;
    playgame();
  } else if (this.innerText == "Done") {
    typedWords.disabled = true;
    this.innerText = "Start";
    endPlay();
  }
});
