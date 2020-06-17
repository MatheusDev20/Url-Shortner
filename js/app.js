const form = document.getElementById('url-form');
const ShareSection = document.getElementById('short-result');
let req;
let url;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    url = form['url-input'].value
    req = {
        url: url
    }
    shortLink(req);
})
    const shortLink = (req) => {
        let finalLink;
        console.log('Fetching...')
        fetch('https://rel.ink/api/links/', {
        method:'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json()).then(json => {
        let hashid = json.hashid
        finalLink = `https://rel.ink/${hashid}`
        console.log(finalLink)
        createShortnedDiv(url,finalLink);
    })
    }

    function createShortnedDiv(url,link) {
        ShareSection.insertAdjacentHTML('afterbegin', `
        <div class="result-div">
        <span>${url}</span>
        <div>
        <span class="minified-link">${link}</span>
        <button class="copy-button">Copy</button>
        
        </div> 
        </div>`)
    }