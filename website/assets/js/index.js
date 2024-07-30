

const counter = document.querySelector('.p_view');



async function updateCounter() {
    const response = await fetch("https://bvwalakr562en5cqcvoyyhwuxa0rfugq.lambda-url.us-east-1.on.aws");
    const data = await response.json();
    
    counter.textContent = `Page Views: ${data}`
    console.log(counter.textContent);

}

updateCounter();


  