    /* === Domain list === */
    const DOMAINS = [
      {name:"9362006.xyz",  desc:"Primary brand portal"},
      {name:"09032006.xyz", desc:"Archive & mirror"},
      {name:"bug.my.id",    desc:"Bug-tracker playground"},
      {name:"nox.my.id",    desc:"VPN gateway"},
      {name:"quo.pp.ua",    desc:"Quote micro-service"},
      {name:"dox.pp.ua",    desc:"Documentation hub"}
    ];

    /* === Render cards === */
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