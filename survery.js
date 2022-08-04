const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {

  rl.question("What's an activity you like doing? ", (activity) => {

    rl.question("What do you listen to while doing that? ", (listen) => {

      rl.question("Which meal is your favorite? (ie. breakfast? supper? etc.) ", (meal) => {

        rl.question("What's your favorite thing to eat for that meal? ", (favMeal) => {

          rl.question("Which sport is your absolute favorite? ", (sport) => {

            rl.question("What is your superpower? ", (superpower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${favMeal} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


