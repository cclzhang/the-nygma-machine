



const getRandomAdvice = () => {
  axios({
    url: `https://api.adviceslip.com/advice`,
    method:'GET',
    responseType: 'json'
  }).then((response) => {
    console.log(response);
  })
}


const getAdviceSearch = (searchTerm) => {
  axios({
    url: `https://api.adviceslip.com/advice/search/${searchTerm}`,
    method:'GET',
    responseType: 'json'
  }).then((response) => {
    console.log(response);
  })
}