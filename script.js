const text='Anh đã chờ rất lâu để nói điều này...\nEm đồng ý làm người yêu anh nhé? ❤️';
let i=0,p=document.getElementById('typing');
(function t(){if(i<text.length){p.innerHTML+=(text[i]=='\n'?'<br>':text[i]);i++;setTimeout(t,60)}})();
const c=document.getElementById('stars'),ctx=c.getContext('2d');
function rs(){c.width=innerWidth;c.height=innerHeight}rs();onresize=rs;
let s=[...Array(400)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2,v:0.2+Math.random()}));
(function d(){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle='white';for(const a of s){ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,6.3);ctx.fill();a.y+=a.v;if(a.y>c.height)a.y=0;}requestAnimationFrame(d)})();
function hearts(){setInterval(()=>{let h=document.createElement('div');h.className='heart';h.textContent='💖';h.style.left=Math.random()*100+'vw';h.style.bottom='-30px';h.style.fontSize=(20+Math.random()*30)+'px';document.body.appendChild(h);setTimeout(()=>h.remove(),5000)},150)}
document.getElementById('yes').onclick=()=>{hearts();document.getElementById('overlay').innerHTML='<h1>💞 Cảm ơn em! 💞</h1><p>Từ hôm nay mình cùng nhau viết tiếp câu chuyện nhé.</p>';}
const no=document.getElementById('no');
no.addEventListener('mouseenter',()=>{no.style.position='fixed';no.style.left=Math.random()*80+'vw';no.style.top=Math.random()*80+'vh';});
