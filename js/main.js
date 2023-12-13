
var quotes = ["“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“A friend is someone who knows all about you and still loves you.”",
]

var authors = ["― Oscar Wilde",
    "― Albert Einstein",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― Dr. Seuss",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Mark Twain",
    "― Elbert Hubbard",
]


function showQuote() {
    var x = Math.floor(Math.random() * 10);
    document.getElementById('the-quote').innerHTML = quotes[x];
    document.getElementById('the-author').innerHTML = authors[x];

/*     var y = [];
    y.push(x);
  
    if (x === y[0]) {
        function showQuote() {
            document.getElementById('the-quote').innerHTML = quotes[x];
            document.getElementById('the-author').innerHTML = authors[x];

        }



    } */


}
