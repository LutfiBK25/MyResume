window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiurl = 'https://resumecounterlutfibk.azurewebsites.net/api/ResumeCounter?';
const localfunctionApi = 'http://localhost:7071/api/ResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiurl)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        count =  res.count
        document.getElementById("counter").innerText = count
    })

    .catch(function(error){console.log(error);})

    return count;
    
}