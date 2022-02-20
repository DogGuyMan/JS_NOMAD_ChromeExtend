const quotesData = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
];

const colorSet = [
    {first : "#0F2027", second :"#2c5364"},
    {first : "#12c2e9", second :"#c471ed"},
    {first : "#6DD5FA", second :"#FFF"},
    {first : "#1f4037", second :"#99f2c8"},
    {first : "#f12711", second :"#f5af19"},
    {first : "#3e5151", second :"#decba4"},
    {first : "#000", second : "#FFF" }
];

const imagesData = [
    "img_(1).png",
    "img_(2).PNG",
    "img_(3).jpg",
    "img_(4).PNG",
    "img_(5).PNG",
    "img_(6).PNG",
    "img_(7).PNG",
    "img_(8).PNG"
];

class idMap {
    constructor(_todoValue) {
        this.todo = _todoValue;
        this.id = Date.now();
    }
    Set(_todoValue){
        this.todo = _todoValue;
        this.id = Date.now();
    }
    Get(){
        return {todo : this.todo, id : this.id};
    }
};

let todosData = [];