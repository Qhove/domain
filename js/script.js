    /* === Domain list === */
    const DOMAINS = [
      {name:"9362006.xyz",  desc:"The core of all my ambitious Projects"},
      {name:"09032006.xyz", desc:"Not yet used and still in the experimental stage"},
      {name:"bug.my.id",    desc:"Not yet used and still in the experimental stage"},
      {name:"nox.my.id",    desc:"Not yet used and still in the experimental stage"},
      {name:"quo.pp.ua",    desc:"Not yet used and still in the experimental stage"},
      {name:"dox.pp.ua",    desc:"Not yet used and still in the experimental stage"}
    ];

    const grid = document.getElementById('domainGrid');
    const isAndroid = /android/i.test(navigator.userAgent);

    DOMAINS.forEach(d=>{
      const card = document.createElement(isAndroid ? 'a' : 'div');
      if(isAndroid){ card.href=`https://${d.name}`; card.rel='noopener'; }
      card.className='card';
      card.innerHTML=`<h3>${d.name}</h3><p>${d.desc}</p>`;
      if(!isAndroid){
        card.addEventListener('click',()=>location.href=`https://${d.name}`);
      }
      grid.appendChild(card);
    });

    document.getElementById('year').textContent = new Date().getFullYear();