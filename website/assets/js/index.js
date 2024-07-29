

const counter = document.querySelector('.p_view');



async function updateCounter() {
    const response = await fetch("https://62d47f12qc.execute-api.us-east-1.amazonaws.com/live-stage");
    const data = await response.json();
    
    counter.textContent = `Page Views: ${data}`
    console.log(counter.textContent);

}

updateCounter();


  