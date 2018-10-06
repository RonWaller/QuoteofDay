let request = new XMLHttpRequest();
let url = 'https://quotes.rest/qod.json';

request.onload = function() {
    if (this.status === 200) {
        let response = JSON.parse(this.responseText);
        // console.log(response);
        getElements(response);
    }
}

request.open("GET", url, true);
request.send();

getElements = function(response) {
    let author = response.contents.quotes[0].author;
    let quote = response.contents.quotes[0].quote;
    let background = response.contents.quotes[0].background;
    let link = response.contents.quotes[0].permalink;
    let title = response.contents.quotes[0].title;
    // let styleElem = document.head.appendChild(document.createElement("style"));
    // console.log(author);




    document.querySelector('.heading').innerHTML = title;
    document.querySelector('.quote').innerHTML = '"' + quote + '"';
    document.querySelector('.author').innerHTML = '-- ' + author;
    document.querySelector('.cite').setAttribute('cite', link);
    // styleElem.innerHTML = ".wrapper::before {background-image: url(" + background + ");}";
    document.querySelector('.wrapper').style.backgroundImage = 'url(' + background + ')';


}