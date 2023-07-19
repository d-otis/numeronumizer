function numeronymizer(str) {
  if (str.length > 3) {
    const firstLetter = str[0]
    const middleNumber = str.length - 2
    const lastLetter = str[str.length - 1]
    
    return `${firstLetter}${middleNumber}${lastLetter}`
  } else {
    return str
  }

  // numeronymize each word in a sentence
  // const words = str.split(' ')
  // const numeronymizedWords = words.map(word => numeronymizer(word))
  // return numeronymizedWords.join(' ')

}

module.exports = numeronymizer