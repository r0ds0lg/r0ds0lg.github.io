
const alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Symbol parts reference
const symbolPart1 = document.querySelector('.symbolBigC');
const symbolPart2 = document.querySelector('.symbolSmallC');
const symbolPart3 = document.querySelector('.symbolTriangle1');
const symbolPart4 = document.querySelector('.symbolTriangle2');
const symbolPart5 = document.querySelector('.symbolPenta');

//Planchette and Play button Reference
const planchette = document.querySelector('.planchette');
const playBtn = document.querySelector('.play');
const boardContainer = document.querySelector('.board');
let boardRef = boardContainer.getBoundingClientRect();
let boardCenterW = (boardContainer.offsetWidth*.5);
let boardCenterH = (boardContainer.offsetHeight*.5);
// console.log(boardCenterH, boardCenterW)

//initial position of PlayBtn and Planchette
playBtn.style.top = ((window.innerHeight*.5) - 115) + 'px';
playBtn.style.left = ((window.innerWidth*.5) - 100) + 'px';
planchette.style.top = ((window.innerHeight*.5) - 100) + 'px';
planchette.style.left = ((window.innerWidth*.5) - 63) + 'px';
// playBtn.style.top = (boardCenterH - 78) + 'px';
// playBtn.style.left = (boardCenterW + 87) + 'px';
// planchette.style.top = (boardCenterH - 63) + 'px';
// planchette.style.left = (boardCenterW  + 126) + 'px';
    

playBtn.addEventListener("click", startGame);

//word variables
let selectedWord, lengthWord, splitWord, targetLetter, letterBtn, letterSpans;
let spanArray = [];

function startGame () {
    PlayBtnClicked()
    //to active letter buttons
    setTimeout(function () {
        boardContainer.classList.add('active')}, 1700);
    setTimeout(function () {
    //words
        displayWord()}, 2500);
  
}


function displayWord () {
    selectedWord = wordSelector();
    lengthWord = selectedWord.length;
    console.log(lengthWord);
    splitWord = selectedWord.split("");
    console.log(splitWord)
    spanArray = [];
    splitWord.forEach( function(){
       letterSpans = document.createElement('span');
       letterSpans.innerText = '_';
       letterSpans.classList.add('wordLetter');
       document.getElementById('wordCont').appendChild(letterSpans);
       spanArray.push(letterSpans);
    })

}

//Create letter buttons
alphabetLetters.forEach ( function(letra, index) {
 letterBtn = document.createElement('button');
 letterBtn.innerText = letra;
 letterBtn.classList.add("letters");
 letterBtn.dataset.push = (index);
 document.getElementById('buttonLetters').appendChild(letterBtn);

//Click on letters
letterBtn.addEventListener('click', function(e){
    movePlanchette(e);
    //text Content of cliked button
        targetLetter = e.target.textContent;
        boardContainer.classList.remove('active');
        console.log(targetLetter);
        for(let i=0; i< splitWord.length; i++){
            if (splitWord[i] === targetLetter) {
                setTimeout(function () {
                    movePlanchetteYes ()
                }, 2300);
                setTimeout(function () {
                    spanArray[i].innerText = targetLetter; 
                    // boardContainer.classList.add('active'); 
                    addActiveLetters ();
                }, 7800);   
            }
            else if (splitWord[i] != targetLetter) {
                // boardContainer.classList.remove('active');
                setTimeout(function () {
                    movePlanchetteNo () 
                    addActiveLetters ()  
                    errorSymbol ()
                }, 2700);
            }
        }

        function addActiveLetters () {
            setTimeout(function () {
                boardContainer.classList.add('active');
            }, 3300);
            
        }
        
        // checkLetters(letter);
           
    })
})


function PlayBtnClicked(){
    document.querySelector('.play').classList.toggle('hidden');
    let top= planchette.style.top = (boardCenterH -185) + '%';
    let left = planchette.style.left = (boardCenterW - 304.5) + '%';
    // planchette.style.top = ((window.innerHeight) - 290) + 'px';
    // planchette.style.left = ((window.innerWidth) - 540) + 'px';
    planchette.style.transform = 'rotate(-25deg)';
    setTimeout(function () {
        document.querySelector('.iWord').style.display = 'none'}, 2050);
    }


//ANIMATION: Change Planchette's transform property 
function movePlanchette (e) {
    let pos = e.target.getBoundingClientRect();
     planchette.style.top = (pos.y-46) + 'px';
     let left = planchette.style.left = (pos.x - 37.5) + 'px';
     let mitad = window.innerWidth*.5;
     console.log(mitad, left)
    let rot = mitad - pos.x;
    console.log(rot)
    if (rot <= 5.5) {
        planchette.style.transform = 'rotate(-35deg)';
    } else if (left >= ((mitad - 75) + 'px')) {   
        planchette.style.transform = 'rotate(0deg)';
    } else {
        planchette.style.transform = 'rotate(35deg)';
    }
}

function movePlanchetteYes () {
    // planchette.style.transition = 's all';
    setTimeout(function () {
        planchette.style.transform = 'rotate(35deg)' 
        planchette.style.top = (boardRef.y +362) + 'px';
        planchette.style.left = (boardRef.x) -20 + 'px';
    }, 2250);
  
}

function movePlanchetteNo () {
    planchette.style.transition = '3.5s all';
    setTimeout(function () {
        planchette.style.transform = 'rotate(-35deg)' 
        planchette.style.top = (boardRef.y +362) + 'px';
        planchette.style.left = (boardRef.x) + 600 + 'px';
    }, 1800);
}

//Get random word from de list
let wordSelector = function (){
    let wordList = 
[
    'ability',
    'about',
    'above',
    'accept',
    'according',
    'account',
    'across',
    'action',
    'activity',
    'actually',
    'address',
    'administration',
    'admit',
    'adult',
    'affect',
    'after',
    'again',
    'against',
    'agency',
    'agent',
    'agree',
    'agreement',
    'ahead',
    'allow',
    'almost',
    'alone',
    'along',
    'already',
    'although',
    'always',
    'American',
    'among',
    'amount',
    'analysis',
    'animal',
    'another',
    'answer',
    'anyone',
    'anything',
    'appear',
    'apply',
    'approach',
    'argue',
    'around',
    'arrive',
    'article',
    'artist',
    'assume',
    'attack',
    'attention',
    'attorney',
    'audience',
    'author',
    'authority',
    'available',
    'avoid',
    'beautiful',
    'because',
    'become',
    'before',
    'begin',
    'behavior',
    'behind',
    'believe',
    'benefit',
    'better',
    'between',
    'beyond',
    'billion',
    'black',
    'blood',
    'board',
    'break',
    'bring',
    'brother',
    'budget',
    'build',
    'building',
    'business',
    'camera',
    'campaign',
    'cancer',
    'candidate',
    'capital',
    'career',
    'carry',
    'catch',
    'cause',
    'center',
    'central',
    'century',
    'certain',
    'certainly',
    'chair',
    'challenge',
    'chance',
    'change',
    'character',
    'charge',
    'check',
    'child',
    'choice',
    'choose',
    'church',
    'citizen',
    'civil',
    'claim',
    'class',
    'clear',
    'clearly',
    'close',
    'coach',
    'collection',
    'college',
    'color',
    'commercial',
    'common',
    'community',
    'company',
    'compare',
    'computer',
    'concern',
    'condition',
    'conference',
    'Congress',
    'consider',
    'consumer',
    'contain',
    'continue',
    'control',
    'could',
    'country',
    'couple',
    'course',
    'court',
    'cover',
    'create',
    'crime',
    'cultural',
    'culture',
    'current',
    'customer',
    'daughter',
    'death',
    'debate',
    'decade',
    'decide',
    'decision',
    'defense',
    'degree',
    'Democrat',
    'democratic',
    'describe',
    'design',
    'despite',
    'detail',
    'determine',
    'develop',
    'development',
    'difference',
    'different',
    'difficult',
    'dinner',
    'direction',
    'director',
    'discover',
    'discuss',
    'discussion',
    'disease',
    'doctor',
    'dream',
    'drive',
    'during',
    'early',
    'economic',
    'economy',
    'education',
    'effect',
    'effort',
    'eight',
    'either',
    'election',
    'employee',
    'energy',
    'enjoy',
    'enough',
    'enter',
    'entire',
    'environment',
    'environmental',
    'especially',
    'establish',
    'evening',
    'event',
    'every',
    'everybody',
    'everyone',
    'everything',
    'evidence',
    'exactly',
    'example',
    'executive',
    'exist',
    'expect',
    'experience',
    'expert',
    'explain',
    'factor',
    'family',
    'father',
    'federal',
    'feeling',
    'field',
    'fight',
    'figure',
    'final',
    'finally',
    'financial',
    'finger',
    'finish',
    'first',
    'floor',
    'focus',
    'follow',
    'force',
    'foreign',
    'forget',
    'former',
    'forward',
    'friend',
    'front',
    'future',
    'garden',
    'general',
    'generation',
    'glass',
    'government',
    'great',
    'green',
    'ground',
    'group',
    'growth',
    'guess',
    'happen',
    'happy',
    'health',
    'heart',
    'heavy',
    'herself',
    'himself',
    'history',
    'hospital',
    'hotel',
    'house',
    'however',
    'human',
    'hundred',
    'husband',
    'identify',
    'image',
    'imagine',
    'impact',
    'important',
    'improve',
    'include',
    'including',
    'increase',
    'indeed',
    'indicate',
    'individual',
    'industry',
    'information',
    'inside',
    'instead',
    'institution',
    'interest',
    'interesting',
    'international',
    'interview',
    'investment',
    'involve',
    'issue',
    'itself',
    'kitchen',
    'knowledge',
    'language',
    'large',
    'later',
    'laugh',
    'lawyer',
    'leader',
    'learn',
    'least',
    'leave',
    'legal',
    'letter',
    'level',
    'light',
    'likely',
    'listen',
    'little',
    'local',
    'machine',
    'magazine',
    'maintain',
    'major',
    'majority',
    'manage',
    'management',
    'manager',
    'market',
    'marriage',
    'material',
    'matter',
    'maybe',
    'measure',
    'media',
    'medical',
    'meeting',
    'member',
    'memory',
    'mention',
    'message',
    'method',
    'middle',
    'might',
    'military',
    'million',
    'minute',
    'mission',
    'model',
    'modern',
    'moment',
    'money',
    'month',
    'morning',
    'mother',
    'mouth',
    'movement',
    'movie',
    'music',
    'myself',
    'nation',
    'national',
    'natural',
    'nature',
    'nearly',
    'necessary',
    'network',
    'never',
    'newspaper',
    'night',
    'north',
    'nothing',
    'notice',
    'number',
    'occur',
    'offer',
    'office',
    'officer',
    'official',
    'often',
    'operation',
    'opportunity',
    'option',
    'order',
    'organization',
    'other',
    'others',
    'outside',
    'owner',
    'painting',
    'paper',
    'parent',
    'participant',
    'particular',
    'particularly',
    'partner',
    'party',
    'patient',
    'pattern',
    'peace',
    'people',
    'perform',
    'performance',
    'perhaps',
    'period',
    'person',
    'personal',
    'phone',
    'physical',
    'picture',
    'piece',
    'place',
    'plant',
    'player',
    'point',
    'police',
    'policy',
    'political',
    'politics',
    'popular',
    'population',
    'position',
    'positive',
    'possible',
    'power',
    'practice',
    'prepare',
    'present',
    'president',
    'pressure',
    'pretty',
    'prevent',
    'price',
    'private',
    'probably',
    'problem',
    'process',
    'produce',
    'product',
    'production',
    'professional',
    'professor',
    'program',
    'project',
    'property',
    'protect',
    'prove',
    'provide',
    'public',
    'purpose',
    'quality',
    'question',
    'quickly',
    'quite',
    'radio',
    'raise',
    'range',
    'rather',
    'reach',
    'ready',
    'reality',
    'realize',
    'really',
    'reason',
    'receive',
    'recent',
    'recently',
    'recognize',
    'record',
    'reduce',
    'reflect',
    'region',
    'relate',
    'relationship',
    'religious',
    'remain',
    'remember',
    'remove',
    'report',
    'represent',
    'Republican',
    'require',
    'research',
    'resource',
    'respond',
    'response',
    'responsibility',
    'result',
    'return',
    'reveal',
    'right',
    'scene',
    'school',
    'science',
    'scientist',
    'score',
    'season',
    'second',
    'section',
    'security',
    'senior',
    'sense',
    'series',
    'serious',
    'serve',
    'service',
    'seven',
    'several',
    'sexual',
    'shake',
    'share',
    'shoot',
    'short',
    'should',
    'shoulder',
    'significant',
    'similar',
    'simple',
    'simply',
    'since',
    'single',
    'sister',
    'situation',
    'skill',
    'small',
    'smile',
    'social',
    'society',
    'soldier',
    'somebody',
    'someone',
    'something',
    'sometimes',
    'sound',
    'source',
    'south',
    'southern',
    'space',
    'speak',
    'special',
    'specific',
    'speech',
    'spend',
    'sport',
    'spring',
    'staff',
    'stage',
    'stand',
    'standard',
    'start',
    'state',
    'statement',
    'station',
    'still',
    'stock',
    'store',
    'story',
    'strategy',
    'street',
    'strong',
    'structure',
    'student',
    'study',
    'stuff',
    'style',
    'subject',
    'success',
    'successful',
    'suddenly',
    'suffer',
    'suggest',
    'summer',
    'support',
    'surface',
    'system',
    'table',
    'teach',
    'teacher',
    'technology',
    'television',
    'thank',
    'their',
    'themselves',
    'theory',
    'there',
    'these',
    'thing',
    'think',
    'third',
    'those',
    'though',
    'thought',
    'thousand',
    'threat',
    'three',
    'through',
    'throughout',
    'throw',
    'today',
    'together',
    'tonight',
    'total',
    'tough',
    'toward',
    'trade',
    'traditional',
    'training',
    'travel',
    'treat',
    'treatment',
    'trial',
    'trouble',
    'truth',
    'under',
    'understand',
    'until',
    'usually',
    'value',
    'various',
    'victim',
    'violence',
    'visit',
    'voice',
    'watch',
    'water',
    'weapon',
    'weight',
    'western',
    'whatever',
    'where',
    'whether',
    'which',
    'while',
    'white',
    'whole',
    'whose',
    'window',
    'within',
    'without',
    'woman',
    'wonder',
    'worker',
    'world',
    'worry',
    'would',
    'write',
    'writer',
    'wrong',
    'young',
    'yourself'
]
    let randomW = Math.floor(Math.random() * wordList.length);
    let word = wordList[randomW];
    return word
}

function reload () {
    setTimeout (window.location.reload(), 800);
}

function errorSymbol () {
    setTimeout(function () {
        for(let e=0; e<5; e++)
        if (e === 1) {
            symbolPart1.style.opacity = '1';
        }
        if (e === 2) {
            symbolPart2.style.opacity = '1';
        }
        if (e === 3) {
            symbolPart3.style.opacity = '1';
        }
        if (e === 4) {
            symbolPart4.style.opacity = '1';
        }
        if (e === 5) {
            symbolPart5.style.opacity = '1';
        }
    }, 4000);
}


    

