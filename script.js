
console.log("hello")

//loadNASAData()

function loadNASAData() {

    console.log("loadNASAData");

    //before we call, show a loading image

    let loadingimage1 = "https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp";
    let loadingimage2 = "https://thumbs.gfycat.com/BigheartedVagueFoal-size_restricted.gif";
    document.getElementById("image").src = loadingimage2;

    //fetch call 

    //we need to provide the NASA API ENDPOINT.

    //JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 

    let apikey = "llwY7E6dgVAmRFdIGwGd8218lV8hsKEKiQ6lpzTQ";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

    console.log(url);

    // fetch(url2). //waits for the api to resolve and returns a response
    //     then(response => response.json())  //convert response to json, wait for conversion to happen
    //     .then(data => { //wait for the data to arrive as json
    //         console.log(data); //do whatever you want with it.           
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //       });  

    fetch(url).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        //console.log(json);

        let title = json.title;
        let date = json.date;
        let explanation = json.explanation;
        let url = json.url;
        let media_type = json.media_type;
        let hdurl = json.hdurl;

        console.log(`title: ${title}`);
        console.log(`date: ${date}`);
        console.log(`explanation: ${explanation}`);
        console.log(`url: ${url}`);
        console.log(`media_type: ${media_type}`);
        console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;

        document.getElementById("image").src = hdurl;



        // let html = `<h1>${title}</h1>
        //             <p>${date}</p>
        //             <p>${explanation}</p>
        //             <img src="${url}" alt="${title}">`

        // document.getElementById("nasa").innerHTML = html;

    }).catch(function (error) {
        console.log(error);
    });



}



























