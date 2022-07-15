const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const add = document.querySelector('#add')
const cards= document.querySelector('.cards')


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title= title
  this.author= author
  this.pages = pages
  this.read= read

  }

const popUp = document.querySelector('.input-popup')
const bgc = document.querySelector('.bgc')

function openPopUp () {
  popUp.classList.add('open-popup')
  bgc.classList.add('show-bg')

}
function closePopUp () {
  popUp.classList.remove('open-popup')
  bgc.classList.remove('show-bg')

}

const newBook = new Book ('Book', 'someone', 1000, 'Read')

const card = document.createElement('div')
const liT = document.createElement('h3')
const liA = document.createElement('h3')
const liP = document.createElement('h3')
const liR = document.createElement('h3')
card.setAttribute('class', 'card')

liT.innerText= 'Title: ' + newBook.title;
liA.innerText= 'Author: ' + newBook.author;
liP.innerText= 'Pages: ' + newBook.pages;
liR.innerText= 'Read Status: ' + newBook.read;

cards.appendChild(card);
card.appendChild(liT)
card.appendChild(liA)
card.appendChild(liP)
card.appendChild(liR)

const btns = document.createElement('div')
btns.classList.add('change-btns')
card.appendChild(btns)
const readBtn = document.createElement('button')
readBtn.innerText="change"
btns.appendChild(readBtn)
readBtn.addEventListener('click', function changeRead () {
  if(newBook.read=="Read") {
    newBook.read="Not Read"
  }
  else if (newBook.read=="Not Read") {
    newBook.read="Read"
  }
  liR.innerText= 'Read Status: ' + newBook.read;
})

const delBtn = document.createElement('button')
delBtn.innerText="Remove Book"
delBtn.classList.add('del-btn')
btns.appendChild(delBtn)

delBtn.addEventListener('click', function removeElement() {
  cards.removeChild(card);
})


add.addEventListener('click', function addObject () {
  if (title.value!="" && author.value!="" && pages.value!="") {
    const newBook = new Book (title.value, author.value, pages.value, read.value)

    const card = document.createElement('div')
    const liT = document.createElement('h3')
    const liA = document.createElement('h3')
    const liP = document.createElement('h3')
    const liR = document.createElement('h3')
    card.setAttribute('class', 'card')
    
    cards.appendChild(card);
    card.appendChild(liT)
    card.appendChild(liA)
    card.appendChild(liP)
    card.appendChild(liR)

    const btns = document.createElement('div')
    btns.classList.add('change-btns')
    card.appendChild(btns)
    const readBtn = document.createElement('button')
    readBtn.innerText="change"
    btns.appendChild(readBtn)
    readBtn.addEventListener('click', function changeRead () {
      if(newBook.read=="Read") {
        newBook.read="Not Read"
      }
      else if (newBook.read=="Not Read") {
        newBook.read="Read"
      }
      liR.innerText= 'Read Status: ' + newBook.read;
    })


    liT.innerText= 'Title: ' + newBook.title;
    liA.innerText= 'Author: ' + newBook.author;
    liP.innerText= 'Pages: ' + newBook.pages;
    liR.innerText= 'Read Status: ' + newBook.read;

    

    const delBtn = document.createElement('button')
    delBtn.innerText="Remove Book"
    delBtn.classList.add('del-btn')
    btns.appendChild(delBtn) 

    delBtn.addEventListener('click', function removeElement() {
      cards.removeChild(card);
   })

    title.value=null;
    author.value=null;
    pages.value=null;
    read.value=null;
}
})

