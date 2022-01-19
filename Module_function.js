function Publication(title,author,pubDate){
var publicAPI = {
    print(){
        console.log(`Title: ${title}
        Author: ${author}
        PublishedDate: ${pubDate}`);
    }
}

return publicAPI;
}

function Book(bookDetails){
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.pubDate
    )

    var publicAPI = {
        print(){
            pub.print();
            console.log(`Publisher: ${bookDetails.publisher}
            ISDN: ${bookDetails.ISDN}`)
        }
    }
    return publicAPI; 

}

function blogpost(title,author,pubDate,URL){
    var pub = Publication(title,author,pubDate);

    var publicAPI = {
        print(){
            pub.print();
            console.log(`URL: ${URL}`);
        }
    }

    return publicAPI;
}

var Mybook = Book({title: "YDKJSYT",author: "Kyle",pubDate: "12/04/2020",publisher: "Orielly",ISDN: 379235790027359});

Mybook.print();

var blog = blogpost("YDKJSYT","Kyle","12/04/2020","www.google.com");

// define('mymodule',{version : 1, value: "Testing"});
// console.log(testing);
blog.print();

