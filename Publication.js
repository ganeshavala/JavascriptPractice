function Publication(title,author,pubDate){
    
    console.log(`Title: ${title}
    Author: ${author}
    PublishedDate: ${pubDate}`);
    
}

export function create(title,author,pubDate){
var PublicAPI = {
    print(){
        Publication(title,author,pubDate);
        let txt = "Title: "+title+" Author: "+author+" PunlishedDate: "+pubDate;
    return txt;
    }
}
return PublicAPI;
}