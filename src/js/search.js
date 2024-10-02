import DOMPurify from "dompurify";
import Fuse from "fuse.js";
let SEARCH_DATA;
let FUSE_INSTANCE;
const FUSE_OPTIONS ={
    includeScore: true,
    shouldSort: true,
    threshold: 0.3,
    minMatchCharLength: 3,
    keys: [
        {
            name: "title",
            weight: 1,
        },
        {
            name:"desc",
            weight: 0.75,
        },
    ],
   
}
const SPINNER = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" id="spinner"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
    <style>
    #spinner{
        animation: spin 1s linear infinite;
    }    
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
    </style></svg>`
const search = document.querySelector("#search");
const searchReadout = document.querySelector("#searchReadout");
const searchNumber = document.querySelector("#searchNumber");
const resultsList = document.querySelector("#resultsList");

function updateDocumentTitle(search){
    document.title = search ? `Search results for "${search}"`:`Search`
}
function updateSearchNumber(resultsNumber){
    searchNumber.textContent = resultsNumber > 0 ? ` ${resultsNumber} Found`:``
 }
function updateSearchReadout(search){
   searchReadout.textContent = search ? `Search on "${search}". `:``
}
function updateSearchPageURL(search){
    const url = new URL(window.location.href);
    url.searchParams.set("q", search);
    window.history.replaceState(null, "", url);
}

function generateSearchList(results){
    
    if(results.length == 0){
       
        return;
    } 
    
    return results.map((r) => {
        //console.log(r);
        const {title, desc, slug, cat} = r.item;
        return `<li>
                    <p>${desc}</p>
                    <a href="/${cat}/${slug}">${title}</a>
                </li>`;
    }).join("");
}
async function fetchSearchResults(search){
    if(search.length === 0){
        resultsList.innerHTML = "";
        updateSearchNumber(0);
        return;
    }
    resultsList.innerHTML = SPINNER;
    if(!SEARCH_DATA){
        try{
            const res = await fetch("/search.json");
            if(!res.ok){throw new Error("something is wrong???")}
            const data = await res.json();
            SEARCH_DATA =  data;
        } catch (e){
            console.error(e);
        }
    }
   
    if(SEARCH_DATA && !FUSE_INSTANCE){
        //console.log("generting new fuse")
        FUSE_INSTANCE = new Fuse(SEARCH_DATA, FUSE_OPTIONS);
    }
    if(!FUSE_INSTANCE)return;
    //console.log("before fuse: "+search.length)
    const searchResult = FUSE_INSTANCE.search(search); 
    resultsList.innerHTML = searchResult.length > 0 ? generateSearchList(searchResult) : "No samples found…";
    updateSearchNumber(searchResult.length);
    //console.log(searchResult)
}
// event listeners
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = DOMPurify.sanitize(new URLSearchParams(window.location.search).get("q"));
    fetchSearchResults(urlParams);
    updateDocumentTitle(urlParams);
    updateSearchReadout(urlParams); 
    search.value = urlParams;
    search.focus();
});
window.addEventListener("input", () => {
    const searchTerm = DOMPurify.sanitize(search.value);
    updateDocumentTitle(searchTerm);
    updateSearchReadout(searchTerm); 
    fetchSearchResults(searchTerm);
    updateSearchPageURL(searchTerm);
});