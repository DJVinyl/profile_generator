const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerArr = [];
//further help found here:
//https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js

rl.question("Whats your name? (nicknames are also great!)\t", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  answerArr.push(answer1);
  console.log();
  rl.question("What's an activity you like doing?\t", (answer2) => {
    console.log(`That sound terribly fun!`);
    answerArr.push(answer2);
    console.log();
    rl.question("What do you listen to while doing that?:\t", (answer3) => {
      console.log(`Amazing, I'm entering callback hell`);
      answerArr.push(answer3);
      console.log();
      rl.question(
        "whats your one food you can't live without?\t",
        (answer4) => {
          console.log(`Cool`);
          answerArr.push(answer4);
          console.log();
          rl.question("whats your favourtie sport\t", (answer5) => {
            console.log(`Cool`);
            answerArr.push(answer5);
            console.log();
            rl.question("whats your superpower\t", (answer6) => {
              console.log(
                `Alright I'm designing your super fun profile description`
              );
              answerArr.push(answer6);
              //console.log(answerArr);
              console.clear();
              console.log("Here is your new profile description:");
              console.log();
              console.log(
                `Hi my name is ${answerArr[0]} which you can definitely call me by! FULL Disclaimer: `
              );
              console.log(
                `May or may not be my nickname. I personally enjoy ${answerArr[1]} which means that on my spare `
              );
              console.log(
                `time, while listening to: ${answerArr[2]}. So if I dont respond assume I am doing just that.`
              );
              console.log(
                `After my favourite activity, I would probably eat ${answerArr[3]} but dont let that discourage you.`
              );
              console.log(
                `My favourtie sport is ${answerArr[4]} which means nothing in the grand scheme of things and `
              );
              console.log(
                `my super power is ${answerArr[5]}. No more context. Swipe Right.`
              );
              console.log();
              rl.close();
            });
          });
        }
      );
    });
  });
});

//console.log(answerArr);
