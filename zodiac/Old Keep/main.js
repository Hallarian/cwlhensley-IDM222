//
// Declare global variables outside of functions here
var firstName;
var birthDayObj;
//
var WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//
var lastName;


function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("whiteScreen");
}

function calZodiac() {
  //
  // Name and date error checking not needed when using Chrome browser

  firstName = document.getElementById('fname').value;
  birthDayObj = new Date(document.getElementById('bday').value);

  //
  // DATE CHECKER FOR SAFARI! This check will NOT catch Feb 30
  console.log('birthDayObj parsed is ' + Date.parse(birthDayObj));
  if (isNaN(Date.parse(birthDayObj))) {
    alert('Invalid date. Please retry');
    // Exit/Jump out of this function
    return false;
  }

  var whichDayNdx = birthDayObj.getUTCDay();
  console.log('whichDayNdx is ' + whichDayNdx);

  //
  // Calculate zodic sign

  var whichMonth = birthDayObj.getUTCMonth();
  console.log('whichMonth is ' + whichMonth);

  var whichDayOfMonth = birthDayObj.getUTCDate();
  console.log('whichDayOfMonth is ' + whichDayOfMonth);

  //
  // Add 1 for readabilty
  whichMonth++;
  whichDayOfMonth++;

var AstroSign;

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "treebeard";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Merry";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Legolas";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Gandalf";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Samwise";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "theoden";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Pippin";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Borormir";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Frodo";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Gimli";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Faramir";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aragorn";
  }

  //
  // Figure out user age, call a function, pass parameters, return result
  var currAge = calculate_age(birthDayObj.getUTCMonth(), birthDayObj.getUTCDate(), birthDayObj.getUTCFullYear());

  var outputArea = document.getElementById('displayMsg');
  var msg = '';
  msg += '<p>Hello, ' + firstName + '.</p>';
	msg+= '<p>In Middle Earth you would be known as ' + AstroSign; '.</p>';

  msg += '</p>';
  outputArea.innerHTML = msg;

  //
  //  return false to prevent form from resetting
  return false;
}


function calculate_age(bMonth, bDay, bYear) {
  var today_date = new Date();
  var today_year = today_date.getUTCFullYear();
  var today_month = today_date.getUTCMonth();
  var today_day = today_date.getUTCDate();

  console.log('bMonth is ' + bMonth);
  console.log('today_month is ' + today_month);

  console.log('bDay is ' + bDay);
  console.log('today_day is ' + today_day);

  console.log('bYear is ' + bYear);
  console.log('today_year is ' + today_year);

  var age = today_year - bYear;

  console.log('age is ' + age);

  if (today_month < bMonth) {
    age--;
  }
  if ((today_month == bMonth) && (today_day < bDay)) {
    age--;
  }

  console.log('adjusted age is ' + age);

  return age;
} // Close calculate_age

// Middle Earth Character Variables
var treebeardObj = document.getElementById('treebeard');
var merryObj = document.getElementById('merry');
var legolasObj = document.getElementById('legolas');
var gandalfObj = document.getElementById('gandalf');
var samwiseObj = document.getElementById('samwise');
var theodenObj = document.getElementById('theoden');
var pippinObj = document.getElementById('pippin');
var boromirObj = document.getElementById('boromir');
var frodoObj = document.getElementById('frodo');
var gimliObj = document.getElementById('gimli');
var faramirObj = document.getElementById('faramir');
var aragornObj = document.getElementById('aragorn');


// alltxtObj / alltxtObj for getting Element by ID name (CSS)
var alltxtObj = document.getElementById('alltxt');
var allPicsObj = document.getElementById('allpics');

// Charcter Var Event listeners to display on click
treebeardObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'treebeard');
}, false);

merryObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'merry');
}, false);

legolasObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'legolas');
}, false);

gandalfObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'gandalf');
}, false);

samwiseObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'samwise');
}, false);

theodenObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'theoden');
}, false);

pippinObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'pippin');
}, false);

boromirObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'boromir');
}, false);

frodoObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'frodo');
}, false);

gimliObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'gimli');
}, false);

faramirObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'faramir');
}, false);

aragornObj.addEventListener('click', function(evt) {
  displayZodSign(evt, 'aragorn');
}, false);

// Function for displaying Variables when called
function displayZodSign(evt, whichOne) {
  console.log('displayZodSign called ' + whichOne);

  var imgArray = allPicsObj.children;
  console.log('imgArray is ' + imgArray);
  console.log('imgArray length is ' + imgArray.length);
  console.log('imgArray 2 is ' + imgArray[2].tagName);


      // Loop through array and remove display class from everything
  for (lp = 0; lp < imgArray.length; lp++) {
      imgArray[lp].classList.remove('display');

    switch(whichOne) {
      case 'treebeard':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Treebeard (Ent)<p>Dec 22 - Jan 19<br>Also known as Fangorn, the oldest of the ents, shepards of the trees. An ancient tree-like being who resided in Fangorn Forest, and taking no part in the affairs of Men, Elves and Wizards. However, Treebeard was brought into the War of the Ring once Saruman the White began cutting down the forest to power his war effort. An angry Treebeard called all the ents together to attack Isengard, in an event known as the Last March of the Ents.";
        imgArray[12].classList.add('display');
        break;

      case 'merry':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';

        msg= "Meriadoc Brandybuck (Hobbit)<p>Nov 22 - Dec 21<br>Lived in: Brandy Hall, Buckland<br>Meriadoc, or Merry, Brandybuck, son of Saradoc Brandybuck and Esmeralda Took, was a Hobbit of the Shire. He rose to fame as one of the members of the Fellowship of the Ring. After the War of the Ring ha was called The Magnificent and became the Master of Buckland after his father.";
        imgArray[11].classList.add('display');

        break;

      case 'legolas':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Legolas (Elf, Sindar)<p>Oct 24 - Nov 21<br>Legolas was a member of the Fellowship of the Ring. His father was Thranduil, King of the Elves of Northern Mirkwood. He represented his father at the Council of Elrond and became one of the Nine Walkers. He departed from the Ring-bearer at Amon Hen, and was later involved in the Battle at Helms Deep, the Battle of the Pelennor Fields, and the Battle of the Morannon.";
        imgArray[10].classList.add('display');
        break;

      case 'gandalf':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Gandalf the Grey (Istar, wizard)<p>Sep 23 - Oct 23<br>Later known as Gandalf the White, also named originally Olórin, was sent from the West in the Third Age to combat the threat of Sauron. He joined Thorin and his company to reclaim the Lonely Mountain from Smaug, the Dragon; convoked the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.";
        imgArray[9].classList.add('display');
        break;

      case 'samwise':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Samwise Gamgee (Hobbit)<p>Aug 23 - Sep 22<br>Also known as Sam, of the Shire. He was Frodo Baggins, The Ring-Bearer's, gardener and best friend. Sam proved himself to be Frodo's closest and most dependable companion during the War of the Ring. The most loyal member of the Fellowship of the Ring, and only one to remain at Frodo's side to the end of the journey to destroy the One Ring of Power in fires of Mount Doom.";
        imgArray[8].classList.add('display');
        break;

      case 'theoden':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Theoden, King of Rohan (Human)<p>Jul 23 - Aug 22<br>Theoden, son of Thengel and Morwen, and the seventeenth King of Rohan. Theoden defended Rohan from the forces of Saruman in the Battle of Helm's Deep and subsequently led a host to the aid of Gondor in the Battle of Pelennor Fields. During the battle he was mortally wounded by the Witch-king of Angmar.";
        imgArray[7].classList.add('display');
        break;

      case 'pippin':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Peregrin Took (Hobbit)<p>Jun 22 - Jul 22<br>More commonly known as Pippin, a Hobbit of the Shire, and one of Frodo Baggins, The Ring-bearer's youngest, but closest friends. He was a member of the Fellowship of the Ring. After the Fellowship fractured at Amon Hen, Pippin, along with Merry, found themselves lost in Fangorn Forest where they met Treebeard, and were intergral in convinving the Ent to take up arms against Saruman and his evil mechinations.";
        imgArray[6].classList.add('display');
        break;

      case 'boromir':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Boromir, Steward Prince of Gondor (Human)<p>May 21.. Jun 21<br>Was a valiant warrior known in Gondor for his greatness, having already achieved great merit in Gondor prior to the Council of Elrond, where he joined the Fellowship of the Ring. He was the eldest son of Denethor II, Steward of Gondor during the War of the Ring, and brother to Faramir. Boromir gave is life defending Hobbits, Merry and Pippin during the Battle o Amon Hen.";
        imgArray[5].classList.add('display');
        break;

      case 'frodo':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Frodo Baggins, The Ring-bearer, (Hobbit)<p>Apr 20 - May 20<br>Arguably the most important and most famous Hobbit in the history of Middle-earth for his involvement in the War of the Ring. He bore the One Ring to Mount Doom where it was destroyed and thus causing the final defeat of Sauron. He was also notable for being one of the three Hobbits, along with Samwise Gamgee and Bilbo Baggins, who sailed west to Aman, in the Undying Lands.";
        imgArray[4].classList.add('display');
        break;

      case 'gimli':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Gimli, Lord of the Glittering Caves (Dwarf)<p>Mar 21 - Apr 19<br>A well-respected dwarf warrior in Middle-earth during the Great Years. He was a member of the Fellowship of the Ring, and played a critical role in the defeat of the forces of Isengard at Helms Deep. Gimli was the only one of the dwarves to readily fight alongside elves in the war against Sauron at the end of the Third Age. After the defeat of Sauron, he was given lordship of the Glittering Caves at Helm's Deep.";
        imgArray[3].classList.add('display');
        break;

      case 'faramir':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Faramir, Prince of Ithilien (Human)<p>Feb 19 - Mar 20<br>The Captain of the Rangers of Ithilien and Captain of the White Tower of Gondor after his brother's death. Faramir was also the last Ruling Steward of Gondor. Upon the arrival of the true king, King Aragorn Elessar, he laid down his office, but Elessar renewed the hereditary appointment of Steward as the advisor to the King. After the War of the Ring, Faramir was also appointed the first Prince of Ithilien.";
        imgArray[2].classList.add('display');
        break;

      case 'aragorn':
        // Display Big Image for Pis
        // displayObj.src = 'img/ful_pisces.png';
        msg= "Aragorn Elessar, King of Gondor<p>Jan 20 -  Feb 18<br>Also known as Strider; the true heir to the throne of Gondor; and a Chieftain of the Dunedain. At the end of the Third Age, Aragorn helped destroy the One Ring and defeat Sauron and subsequently reunited the Kingdoms of Arnor and Gondor. He was part of the Fellowship of the Ring, and along with Gimli, Legolas and Gandolf helped defend Helms Deep, and came to the aid of Gondor and Rohan forces during the battle of Pelennor Fields.";
        imgArray[1].classList.add('display');
        break;
        
      default:
      // displayObj.src = 'img/ful_blank.png';
      imgArray[0].classList.add('display');
    } // Switch End
  
    alltxtObj.innerHTML = msg;
  } // For Loop Closed
} // Function Closed

// When the user clicks on <div>, open the Help Menu
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
} // Function Closed


function playAudio (whichSound) {
  // play sound based on whichSound par
  document.getElementById(whichSound).play();
} // Function Closed