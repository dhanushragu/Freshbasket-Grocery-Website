const products = [
 {id:1,name:"Royal Gala Apples",category:"Fruits",weight:"500 g • 4–5 pieces",price:129,oldPrice:149,tag:"FRESH PICK",emoji:"🍎",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"},
 {id:2,name:"Sweet Bananas",category:"Fruits",weight:"6 pieces",price:49,oldPrice:59,tag:"BESTSELLER",emoji:"🍌",image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"},
 {id:3,name:"Fresh Strawberries",category:"Fruits",weight:"200 g pack",price:99,oldPrice:119,tag:"SEASONAL",emoji:"🍓",image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"},
 {id:4,name:"Farm Fresh Avocado",category:"Fruits",weight:"2 pieces",price:89,oldPrice:109,tag:"FRESH PICK",emoji:"🥑",image:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"},
 {id:5,name:"Green Broccoli",category:"Vegetables",weight:"1 piece • approx. 300 g",price:59,oldPrice:69,tag:"FARM FRESH",emoji:"🥦",image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"},
 {id:6,name:"Vine Tomatoes",category:"Vegetables",weight:"500 g",price:39,oldPrice:49,tag:"DAILY ESSENTIAL",emoji:"🍅",image:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"},
 {id:7,name:"Crunchy Carrots",category:"Vegetables",weight:"500 g bunch",price:45,oldPrice:55,tag:"FARM FRESH",emoji:"🥕",image:"https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80"},
 {id:8,name:"Baby Spinach",category:"Vegetables",weight:"250 g pack",price:35,oldPrice:45,tag:"FRESH PICK",emoji:"🥬",image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80"},
 {id:9,name:"Whole Milk",category:"Dairy",weight:"1 litre",price:60,oldPrice:68,tag:"DAILY ESSENTIAL",emoji:"🥛",image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80"},
 {id:10,name:"Farm Eggs",category:"Dairy",weight:"6 pieces",price:55,oldPrice:65,tag:"PROTEIN PICK",emoji:"🥚",image:"https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80"},
 {id:11,name:"Creamy Butter",category:"Dairy",weight:"100 g pack",price:58,oldPrice:65,tag:"POPULAR",emoji:"🧈",image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80"},
 {id:12,name:"Basmati Rice",category:"Pantry",weight:"1 kg pack",price:119,oldPrice:139,tag:"PANTRY PICK",emoji:"🍚",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"},
 {id:13,name:"Rolled Oats",category:"Pantry",weight:"500 g pack",price:99,oldPrice:119,tag:"HEALTHY PICK",emoji:"🌾",image:"https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80"},
 {id:14,name:"Mixed Nuts",category:"Snacks",weight:"200 g pack",price:159,oldPrice:189,tag:"CUSTOMER FAVE",emoji:"🥜",image:"https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80"},
 {id:15,name:"Dark Chocolate",category:"Snacks",weight:"100 g bar",price:89,oldPrice:99,tag:"A LITTLE TREAT",emoji:"🍫",image:"https://images.unsplash.com/photo-1548907040-4d42cfc8a6f3?auto=format&fit=crop&w=600&q=80"},
 {id:16,name:"Potato Chips",category:"Snacks",weight:"150 g pack",price:40,oldPrice:49,tag:"CRUNCH TIME",emoji:"🥔",image:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80"}
];
const state = {category:"All",search:"",sort:"featured",cart:{},favorites:new Set()};
const $ = selector => document.querySelector(selector);
const money = amount => "₹" + amount.toLocaleString("en-IN");
const productGrid = $("#productGrid");

function renderProducts(){
 let list = products.filter(p => (state.category==="All" || p.category===state.category) && (p.name+" "+p.category+" "+p.weight).toLowerCase().includes(state.search.toLowerCase()));
 if(state.sort==="low") list.sort((a,b)=>a.price-b.price);
 if(state.sort==="high") list.sort((a,b)=>b.price-a.price);
 if(state.sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
 productGrid.innerHTML = list.map(p=>`<article class="product-card">
  <div class="product-photo"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;font-size:55px&quot;>${p.emoji}</span>')"><span class="product-tag ${p.price<p.oldPrice?'sale':''}">${p.tag}</span><button class="wishlist ${state.favorites.has(p.id)?'liked':''}" data-favorite="${p.id}" aria-label="Add ${p.name} to wishlist">${state.favorites.has(p.id)?"♥":"♡"}</button></div>
  <div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><span class="product-weight">${p.weight}</span><div class="product-bottom"><div class="price"><strong>${money(p.price)}</strong> <del>${money(p.oldPrice)}</del></div><button class="add-btn" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button></div></div></article>`).join("");
 $("#emptyState").hidden = list.length !== 0;
}
function setCategory(category){
 state.category=category;
 document.querySelectorAll("[data-category]").forEach(el=>el.classList.toggle("active",el.dataset.category===category) || el.classList.toggle("selected",el.dataset.category===category));
 renderProducts();
}
function addToCart(id){state.cart[id]=(state.cart[id]||0)+1;renderCart();showToast(`${products.find(p=>p.id===id).name} added to basket`);}
function changeQty(id,delta){state.cart[id]=(state.cart[id]||0)+delta;if(state.cart[id]<=0)delete state.cart[id];renderCart();}
function cartCount(){return Object.values(state.cart).reduce((sum,qty)=>sum+qty,0);}
function subtotal(){return products.reduce((sum,p)=>sum+p.price*(state.cart[p.id]||0),0);}
function renderCart(){
 const count=cartCount(), total=subtotal();
 $("#cartCount").textContent=count;$("#drawerCount").textContent=`(${count})`;$("#cartSubtotal").textContent=money(total);
 const items=products.filter(p=>state.cart[p.id]);
 $("#cartItems").innerHTML=items.length?items.map(p=>`<div class="cart-line"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"><div><h3>${p.name}</h3><small>${money(p.price)} / ${p.weight}</small><div class="qty-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease ${p.name} quantity">−</button><span>${state.cart[p.id]}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase ${p.name} quantity">+</button></div></div><span class="cart-line-price">${money(p.price*state.cart[p.id])}</span></div>`).join(""):`<div class="cart-empty"><span>🧺</span><b>Your basket is looking fresh and empty</b><small>Add a few favourites to get started.</small></div>`;
 const remaining=Math.max(0,499-total);
 $("#deliveryText").textContent=total===0?"Add items to start your basket":remaining===0?"🎉 You've unlocked free delivery!":`Add ${money(remaining)} more for free delivery`;
 $("#progressBar").style.width=Math.min(100,total/499*100)+"%";
}
let toastTimer;
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300);}
function openCart(){ $("#cartOverlay").hidden=false;requestAnimationFrame(()=>$("#cartOverlay").classList.add("visible"));$("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeCart(){ $("#cartOverlay").classList.remove("visible");$("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.style.overflow="";setTimeout(()=>{$("#cartOverlay").hidden=true},250);}

productGrid.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");if(add)addToCart(Number(add.dataset.add));
 const fav=e.target.closest("[data-favorite]");if(fav){const id=Number(fav.dataset.favorite);state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);renderProducts();showToast(state.favorites.has(id)?"Added to your wishlist":"Removed from wishlist");}
});
$("#cartItems").addEventListener("click",e=>{const btn=e.target.closest("[data-qty]");if(btn)changeQty(Number(btn.dataset.qty),Number(btn.dataset.delta));});
document.querySelectorAll("#categoryGrid [data-category],#filterPills [data-category]").forEach(btn=>btn.addEventListener("click",()=>{setCategory(btn.dataset.category);$("#products").scrollIntoView({behavior:"smooth",block:"start"});}));
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();state.search=$("#searchInput").value.trim();renderProducts();$("#products").scrollIntoView({behavior:"smooth"});});
$("#searchInput").addEventListener("input",()=>{state.search=$("#searchInput").value.trim();renderProducts();});
$("#sortSelect").addEventListener("change",e=>{state.sort=e.target.value;renderProducts();});
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#cartOverlay").addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart();});
$("#checkoutBtn").addEventListener("click",()=>{if(cartCount()===0){showToast("Your basket is empty — add some groceries first.");return;}showToast("Frontend demo: checkout will be added with the backend.");});
$("#locationBtn").addEventListener("click",()=>{const location=prompt("Enter your delivery area or PIN code:");if(location&&location.trim()){$("#locationText").textContent=location.trim();showToast("Delivery location updated");}});
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Thanks for subscribing! (Demo only)";$("#newsletterEmail").value="";});
renderProducts();renderCart();
