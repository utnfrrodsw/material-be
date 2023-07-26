'use strict';

const canBeShown = true;
const repeat = 2;
const markTwain = {
  firstName: 'Samuel',
  lastName: 'Clemens',
};
show(canBeShown, repeat, markTwain);

function show(showInConsole, times, objectToShow) {
  if (showInConsole) {
    for (let i = 1; i <= times; i++) {
      console.log(`${i} of ${times}: ${JSON.stringify(objectToShow)}`);
    }
  }
}
