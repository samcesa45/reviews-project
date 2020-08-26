//reference all the items
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const img = document.getElementById('person-img')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

const reviews=[
    {
      id: 1,
      img:"http://127.0.0.1:5500/images/hero-img.jpeg",
    author:'andrew james', 
    job:'intern',
    info:`Hey am a recent graduate looking for an intern position
    in your company.I am also very hardworking and creative.`
      },

      {
        id: 2,
        img:"http://127.0.0.1:5500/images/tour-2.jpeg",
        author:'sam chris', 
        job:'the boss',
        info:`i want to thank everyone for the contribution made so far
        in other to put our company at the top`
          },

          {
            id: 3,
            img:"http://127.0.0.1:5500/images/tour-3.jpeg",
            author:'dave wisel', 
            job:'The ceo',
            info:`we can now celebrate today as our company share just grew
            once again i want to congratulate everyone who's contributed their
            quota to the growth of our company`
              },

              {
                id: 4,
                img:"http://127.0.0.1:5500/images/tour-4.jpeg",
                author:'joy simpson', 
                job:'the secretary',
                info:`hello everyone ,i want to inform everyone that theres going to
                be a meeting between the executives and the board of directors
                by 4pm.`
                  },

                 { 
                  id: 5,
                  img:"http://127.0.0.1:5500/images/person-1.jpeg",
                   author:'angela david', 
                  job:'the typist',
                  info:`hello everyone ,i want to inform everyone that theres going to
                  be a meeting between the executives and the board of directors
                  by 4pm.`
                    }
]

//set starting item
let counter = 0

//load the ui/window with the DOMContent
window.addEventListener('DOMContentLoaded', function(){
  const item = reviews[counter]
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
})

//show person

function showPerson(person){
  const item = reviews[person]
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
}

//show the previous person
prevBtn.addEventListener('click', showPrevPerson)

function showPrevPerson(){
  counter--;
  if(counter < 0){
    counter = reviews.length - 1;
  }
  showPerson(counter)
}

//show the nextPerson
nextBtn.addEventListener('click', showNextPerson)

function showNextPerson(){
  counter++;
  if(counter > reviews.length - 1){
    counter = 0
  }
  showPerson(counter)
}

//show randomPerson
randomBtn.addEventListener('click', showRandomPerson)

function showRandomPerson(){
  const rand = Math.floor(Math.random() * reviews.length)
  showPerson(rand)
}