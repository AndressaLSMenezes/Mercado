const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.20,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];


function frutas(arr) {

  //Criar as tag Section, h1, main e Ul da seção Frutas
  const sectionFrutas = document.createElement('section')
  const h1Frutas      = document.createElement('h1')
  const mainFrutas    = document.createElement('main')
  const ulFrutas      = document.createElement('ul')

  //card com os itens
  for(let i = 0; i < arr.length; i++) {

    const liCardsFrutas   = document.createElement('li')
    const imgCardsFrutas  = document.createElement('img')
    const mainCardsFrutas = document.createElement('main')
    //tags que ficarão dentro do main
    const h1CardsFrutas     = document.createElement('h1')
    const h5CardsFrutas     = document.createElement('h5')
    const strongCardsFrutas = document.createElement('strong')
  
    //Dar valor a imagem
    if(arr[i].image == undefined) {
      imgCardsFrutas.src       = "./img/products/no-img.svg"
      imgCardsFrutas.alt       = arr[i].imageDescription
      imgCardsFrutas.classList = 'product-img'
    } else {
      imgCardsFrutas.src       = arr[i].image
      imgCardsFrutas.alt       = arr[i].imageDescription
      imgCardsFrutas.classList = 'product-img'
    }
    liCardsFrutas.appendChild(imgCardsFrutas)
  
    //dar valor as tags do main e adicionalos ao main
    h1CardsFrutas.innerText = arr[i].title
    h1CardsFrutas.classList = "product-title" 
    mainCardsFrutas.appendChild(h1CardsFrutas)
  
    h5CardsFrutas.innerText = arr[i].category
    h5CardsFrutas.classList = "product-category"
    mainCardsFrutas.appendChild(h5CardsFrutas)
  
    strongCardsFrutas.innerText = `R$ ${arr[i].price}`
    strongCardsFrutas.classList = "product-price"
    mainCardsFrutas.appendChild(strongCardsFrutas)

    mainCardsFrutas.classList = "product-main"
  
    //Adicionar  o main a li
    liCardsFrutas.appendChild(mainCardsFrutas)
    liCardsFrutas.classList = "product"

    ulFrutas.appendChild(liCardsFrutas)
  }
  h1Frutas.innerText = "Frutas"
  mainFrutas.appendChild(ulFrutas)
  mainFrutas.classList = "products-content fruits"

  sectionFrutas.appendChild(h1Frutas)
  sectionFrutas.appendChild(mainFrutas)
  sectionFrutas.classList = "products-section"

  return sectionFrutas

}

function bebidas(arr) {
  
  //Criar as tag Section, h1, main e Ul da seção Bebidas
  const sectionBebidas = document.createElement('section')
  const h1Bebidas      = document.createElement('h1')
  const mainBebidas    = document.createElement('main')
  const ulBebidas      = document.createElement('ul')

  //card com os itens
  for(let i = 0; i < arr.length; i++) {

    const liCardsBebidas   = document.createElement('li')
    const imgCardsBebidas  = document.createElement('img')
    const mainCardsBebidas = document.createElement('main')
    //tags que ficarão dentro do main
    const h1CardsBebidas     = document.createElement('h1')
    const h5CardsBebidas     = document.createElement('h5')
    const strongCardsBebidas = document.createElement('strong')
  
    //Dar valor a imagem
    if(arr[i].image == undefined) {
      imgCardsBebidas.src       = "./img/products/no-img.svg"
      imgCardsBebidas.alt       = arr[i].imageDescription
      imgCardsBebidas.classList = 'product-img'
    } else {
      imgCardsBebidas.src       = arr[i].image
      imgCardsBebidas.alt       = arr[i].imageDescription
      imgCardsBebidas.classList = 'product-img'
    }
    liCardsBebidas.appendChild(imgCardsBebidas)
  
    //dar valor as tags do main e adicionalos ao main
    h1CardsBebidas.innerText = arr[i].title
    h1CardsBebidas.classList = "product-title" 
    mainCardsBebidas.appendChild(h1CardsBebidas)
  
    h5CardsBebidas.innerText = arr[i].category
    h5CardsBebidas.classList = "product-category"
    mainCardsBebidas.appendChild(h5CardsBebidas)
  
    strongCardsBebidas.innerText = `R$ ${arr[i].price}`
    strongCardsBebidas.classList = "product-price"
    mainCardsBebidas.appendChild(strongCardsBebidas)

    mainCardsBebidas.classList = "product-main"
  
    //Adicionar  o main a li
    liCardsBebidas.appendChild(mainCardsBebidas)
    liCardsBebidas.classList = "product"

    ulBebidas.appendChild(liCardsBebidas)
  }
  h1Bebidas.innerText = "Bebidas"
  mainBebidas.appendChild(ulBebidas)
  mainBebidas.classList = "products-content fruits"

  sectionBebidas.appendChild(h1Bebidas)
  sectionBebidas.appendChild(mainBebidas)
  sectionBebidas.classList = "products-section"

  return sectionBebidas

}

function higiene(arr) {
  
  //Criar as tag Section, h1, main e Ul da seção Higiene
  const sectionHigiene = document.createElement('section')
  const h1Higiene      = document.createElement('h1')
  const mainHigiene    = document.createElement('main')
  const ulHigiene      = document.createElement('ul')

  //card com os itens
  for(let i = 0; i < arr.length; i++) {

    const liCardsHigiene   = document.createElement('li')
    const imgCardsHigiene  = document.createElement('img')
    const mainCardsHigiene = document.createElement('main')
    //tags que ficarão dentro do main
    const h1CardsHigiene     = document.createElement('h1')
    const h5CardsHigiene     = document.createElement('h5')
    const strongCardsHigiene = document.createElement('strong')
  
    //Dar valor a imagem
    if(arr[i].image == undefined) {
      imgCardsHigiene.src       = "./img/products/no-img.svg"
      imgCardsHigiene.alt       = arr[i].imageDescription
      imgCardsHigiene.classList = 'product-img'
    } else {
      imgCardsHigiene.src       = arr[i].image
      imgCardsHigiene.alt       = arr[i].imageDescription
      imgCardsHigiene.classList = 'product-img'
    }
    liCardsHigiene.appendChild(imgCardsHigiene)
  
    //dar valor as tags do main e adicionalos ao main
    h1CardsHigiene.innerText = arr[i].title
    h1CardsHigiene.classList = "product-title" 
    mainCardsHigiene.appendChild(h1CardsHigiene)
  
    h5CardsHigiene.innerText = arr[i].category
    h5CardsHigiene.classList = "product-category"
    mainCardsHigiene.appendChild(h5CardsHigiene)
  
    strongCardsHigiene.innerText = `R$ ${arr[i].price}`
    strongCardsHigiene.classList = "product-price"
    mainCardsHigiene.appendChild(strongCardsHigiene)

    mainCardsHigiene.classList = "product-main"
  
    //Adicionar  o main a li
    liCardsHigiene.appendChild(mainCardsHigiene)
    liCardsHigiene.classList = "product"

    ulHigiene.appendChild(liCardsHigiene)
  }
  h1Higiene.innerText = "Higiene"
  mainHigiene.appendChild(ulHigiene)
  mainHigiene.classList = "products-content fruits"

  sectionHigiene.appendChild(h1Higiene)
  sectionHigiene.appendChild(mainHigiene)
  sectionHigiene.classList = "products-section"

  return sectionHigiene

}

// Irei criar uma função para separar os objetos do array por categoria 
function container(arr) {
  //Chamando o main container
  const mainContainer = document.querySelector('.container')
  mainContainer.classList = "container"
  
  //Criando o array para cada categoria
  let arrfrutas  = []
  let arrbebidas = []
  let arrhigiene = []

  // Separando os itens
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].category == 'Frutas') {
      arrfrutas.push(arr[i])
    } else if(arr[i].category == "Bebidas") {
      arrbebidas.push(arr[i])
    } else if(arr[i].category == "Higiene") {
      arrhigiene.push(arr[i])
    }
  }

  mainContainer.appendChild(frutas(arrfrutas)) 
  mainContainer.appendChild(bebidas(arrbebidas))
  mainContainer.appendChild(higiene(arrhigiene))

  return mainContainer
}

container(products)