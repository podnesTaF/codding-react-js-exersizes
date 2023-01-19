/** @format */

function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  let years = Math.floor(seconds / 60 / 60 / 24 / 365);
  let days = Math.floor(seconds / 60 / 60 / 24) % 365;
  let hours = Math.floor(seconds / 60 / 60) % 24;
  let minutes = Math.floor(seconds / 60) % 60;
  let sec = seconds % 60;

  let obj = {
    year: years,
    day: days,
    hour: hours,
    minute: minutes,
    second: sec,
  };

  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 0) {
      delete obj[keys[i]];
    }
  }

  let updated = Object.keys(obj);

  let finalStr = '';

  for (let i = 0; i < updated.length; i++) {
    let currKey = updated[i];
    if (obj[updated[i]] > 1) {
      currKey += 's';
    }
    if (i !== updated.length - 1 && i !== updated.length - 2) {
      finalStr += `${obj[updated[i]]} ${currKey}, `;
    } else if (i === updated.length - 2) {
      finalStr += `${obj[updated[i]]} ${currKey} and `;
    } else {
      finalStr += `${obj[updated[i]]} ${currKey}`;
    }
  }

  return finalStr;
}

console.log(formatDuration(1000000000));
