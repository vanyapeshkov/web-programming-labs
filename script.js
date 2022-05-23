let products = [
    {href: 'product1.html', text: 'Гитара обычная', images: ['git1.jpg',"ak47.jpg", "kaka.jpg"], price: '5000 &#8381', info: 'Моя любимая гитара'},
    {href: 'product2.html', text: 'Гитара для любителя', images: ['git2.jpg', "G55.jpg"], price:'2500 &#8381; за штуку', info: 'Так себе гитара'},
    {href: 'product3.html', text: 'Гитара, мечта фаната',images: ['git3.jpg',"gra1.jpeg"], price: '50000 &#8381', info: 'Гитара, мечта каждого фаната' },
 ];



console.log('Всем привет)');
         console.error('Сообщение об ошибке)');
         console.warn('Сообщение предупреждение)');

         function notReadyAlert() {
    alert('Sorry, not ready yet!<br>Извинте, еще не готово!', 'Эх, жаль');
    return false;
    }

function search(){
    let name = document.getElementById('search').value;
    let productNumber = null;
if (name == 'Гитара обычная') {
   productNumber = 0;
} else if (name == 'Гитара для любителя') {
   productNumber = 1;
} else if (name == 'Гитара мечта фаната') {
   productNumber = 2;
} 
else {
   alert('Товар не найден');
}
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundcolor = 'yellow';
     setTimeout(function() {
         card.style.border = 'none'
         card.style.backgroundcolor = ''
     }, 2000);
 }

 function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    let items = [
       {href: 'index.html', text: 'Товары'},
       {href: '', text: 'Контакты'},
       {href: '', text: 'Доставка'},
       {href: '', text: 'Акции'},
       {href: '', text: 'О нас'},
    ];
 
    for(let i = 0; i<items.length; i++){
       let link = document.createElement('a');
       link.innerText = items[i].text;
       link.href = items[i].href;
       if (items[i].href == '') {
          link.addEventListener('click', notReadyAlert);
       }
 
       let menuItem = document.createElement('li');
       menuItem.appendChild(link);
 
       menu.appendChild(menuItem);
    }
 }
 function generateCard() {
    let main = document.querySelector('main');
    for(let i = 0; i<products.length; i++){
       let product = document.createElement('div');
       product.className= 'card';
       product.innerHTML = `
       <a href="#">
          <div class="image"><img src="${products[i].images[0]}"></div>
          <div class="product-name">"${products[i].text}"</div>
          <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
          </a>
          `;
       product.querySelector('a').addEventListener('click', function(){
          showProductInfo(products[i]);
       });
 
       main.appendChild(product);
    }
 }

 function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function(key){
       if(key.key == 'Enter')
           search();
    });

    generateMenu();
    generateCard();
}