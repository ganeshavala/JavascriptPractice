import {create as createPub} from "Publication.js"

function BookDetails(pub, URL){
    pub.print();
    console.log(`URL: ${URL}`);
}

export function create(title,author,pubDate,URL){
    var Pub = createPub(title,author,pubDate);
    var publicaAPI ={
        print(){
            BookDetails(Pub,URL);
        }
    }

    return publicaAPI;
}
