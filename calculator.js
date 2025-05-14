function add(input) {
    if (input === '') return 0;
  
    let delimiters = [',', '\n'];
    let numbersPart = input;
    let maxNumVal = 1000;
  
    if (input.startsWith('//')) { // checks for custom delimiters
      const delimiterEnd = input.indexOf('\n');
      const delimiterSection = input.slice(2, delimiterEnd);
  
      if (delimiterSection.includes('[')) {
        delimiters = [];
        let temp = '';
        let isInside = false;
        for (let ch of delimiterSection) {
          if (ch === '[') {
            isInside = true;
            temp = '';
          } else if (ch === ']') {
            isInside = false;
            delimiters.push(temp);
          } else if (isInside) {
            temp += ch;
          }
        }
      } else {
        delimiters = [delimiterSection]; // Single delimiter
      }
  
      numbersPart = input.slice(delimiterSectionEnd + 1);
    }
  
    for (let delimiter of delimiters) {
      // Replace all delimiters with comma, before split
      numbersPart = numbersPart.split(delimiter).join(',');
    }
  
    const numbers = numbersPart.split(',').map(Number);
  
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  
    return numbers.filter(num => num <= maxNumVal).reduce((sum, n) => sum + n, 0);
  }
  
  module.exports = { add };
  