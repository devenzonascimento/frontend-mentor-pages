fetch("https://api.adviceslip.com/advice").then((response) => {
    response.json().then(function(slip){
        console.log(slip.slip.advice)
    })
})




