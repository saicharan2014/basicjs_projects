let quotes=[
    {
      "q": "The more something scares you, the more you should do it.",
      "a": "Mark Manson",
      "c": "57",
      "h": "<blockquote>&ldquo;The more something scares you, the more you should do it.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"
    },
    {
      "q": "You are never too old to set another goal or to dream a new dream.",
      "a": "Les Brown",
      "c": "66",
      "h": "<blockquote>&ldquo;You are never too old to set another goal or to dream a new dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
    },
    {
      "q": "Courage is knowing what not to fear.",
      "a": "Plato",
      "c": "36",
      "h": "<blockquote>&ldquo;Courage is knowing what not to fear.&rdquo; &mdash; <footer>Plato</footer></blockquote>"
    },
    {
      "q": "Realize deeply that the present moment is all you ever have. ",
      "a": "Eckhart Tolle",
      "c": "61",
      "h": "<blockquote>&ldquo;Realize deeply that the present moment is all you ever have. &rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
    },
    {
      "q": "Enjoy when you can, and endure when you must.",
      "a": "Johann Wolfgang von Goethe",
      "c": "45",
      "h": "<blockquote>&ldquo;Enjoy when you can, and endure when you must.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
    },
    {
      "q": "It is safer to search in the maze than to remain in a cheeseless situation.",
      "a": "Spencer Johnson",
      "c": "75",
      "h": "<blockquote>&ldquo;It is safer to search in the maze than to remain in a cheeseless situation.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
    },
    {
      "q": "Loyalty and friendship are the most precious possessions a man can have.",
      "a": "Herbert Hoover",
      "c": "72",
      "h": "<blockquote>&ldquo;Loyalty and friendship are the most precious possessions a man can have.&rdquo; &mdash; <footer>Herbert Hoover</footer></blockquote>"
    },
    {
      "q": "Health is the greatest of all possessions.",
      "a": "Jonathan Swift",
      "c": "42",
      "h": "<blockquote>&ldquo;Health is the greatest of all possessions.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>"
    },
    {
      "q": "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
      "a": "Shunryu Suzuki",
      "c": "92",
      "h": "<blockquote>&ldquo;In the beginner's mind there are many possibilities, but in the expert's mind there are few.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"
    },

  ]

  let sdiv=document.querySelector("div")


 function action(){
console.log();


sdiv.textContent= quotes[(Math.floor(Math.random()*quotes.length))].q
 }
