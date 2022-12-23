let container = document.getElementById("container");
const inputEl = document.getElementById("input")
const btn = document.getElementById("button")
let JSONobj = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async(response) => {
        const data = await response.json();
           window.jsOB = {...data}
   
        for (key in data) {
            if (data[key].userId == 1) {
                container.innerHTML += `<div class='blocks'> <p>UserId:${data[key].userId}</p> 
                <p>Id:${data[key].id}</p>
                <p>Title:${data[key].title}</p> <p>Body:${data[key].body}</p> </div> `
            }
        }

    })
 
let functs = function () {
    let containers = document.getElementById("containers")
 
    for (key in jsOB) {
         
        if (jsOB[key].userId == inputEl.value) {
          
            containers.innerHTML += `<div class='blocks'> <p>UserId:${jsOB[key].userId}</p> 
            <p>Id:${jsOB[key].id}</p>
            <p>Title:${jsOB[key].title}</p> <p>Body:${jsOB[key].body}</p> </div> `
        
        }
    }
};

btn.addEventListener("click", functs);