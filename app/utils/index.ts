// **REFERENCE: https://gistlib.com/javascript/sort-an-array-by-last-name-in-javascript

// **REFERENCE: https://stackoverflow.com/questions/61525030/match-initials-from-name-string-ignoring-titles-using-regex

// **REFERENCE: https://en.wikipedia.org/wiki/English_honorifics

const sortedByLastName = function (people: Array<string>) {
  // @ts-ignore
  return [...people].sort((a, b) => {
    const aLastName = a
      .replace(/^(?:Dcn|Fr|Rev|Mrs|Miss|Dr|Lord)\.? ?/, "")
      .split(" ")[1];
    const bLastName = b
      .replace(/^(?:Dcn|Fr|Rev|Mrs|Miss|Dr|Lord)\.? ?/, "")
      .split(" ")[1];
    return aLastName?.localeCompare(bLastName);
  });
};

export { sortedByLastName };
