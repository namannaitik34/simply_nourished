// Minimal interactivity: mobile nav toggle and subscription handling
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav (more robust) with backdrop and body lock
  const toggle = document.querySelector('.nav-toggle');
  let navList = null;
  let navBackdrop = null;
  if(toggle){
    // Prefer the element referenced by aria-controls when available
    const ctrl = toggle.getAttribute('aria-controls');
    navList = ctrl ? document.getElementById(ctrl) : document.querySelector('.nav-list');
    // Ensure toggle behaves as a button
    if(!toggle.hasAttribute('type')) toggle.setAttribute('type','button');

    function closeNav(){
      if(!navList) return;
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.classList.remove('nav-open');
      if(navBackdrop){
        navBackdrop.classList.remove('visible');
        // remove after transition
        setTimeout(()=>{ navBackdrop && navBackdrop.remove(); navBackdrop = null }, 200);
      }
    }

    function openNav(){
      if(!navList) return;
      navList.classList.add('open');
      toggle.setAttribute('aria-expanded','true');
      document.body.classList.add('nav-open');
      // create backdrop
      if(!navBackdrop){
        navBackdrop = document.createElement('div');
        navBackdrop.className = 'nav-backdrop';
        document.body.appendChild(navBackdrop);
        // allow CSS transition to run
        requestAnimationFrame(()=>navBackdrop.classList.add('visible'));
        navBackdrop.addEventListener('click', closeNav);
      }
    }

    toggle.addEventListener('click', (e)=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if(expanded){ closeNav(); } else { openNav(); }
      e.stopPropagation();
    });

    // Close menu when a link is clicked (mobile)
    if(navList){
      navList.addEventListener('click', (e)=>{
        if(e.target.tagName === 'A' && window.innerWidth <= 900){
          closeNav();
        }
      });
    }

    // Close via Escape key
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && navList && navList.classList.contains('open')){
        closeNav();
      }
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    },{rootMargin:'-10% 0px -10% 0px', threshold:0.05});
    reveals.forEach(r=>obs.observe(r));
  } else {
    reveals.forEach(r=>r.classList.add('revealed'));
  }

  // Simple testimonial slider (auto-advance)
  const slider = document.querySelector('.testimonials-slider');
  if(slider){
    let pos = 0;
    const items = slider.querySelectorAll('.testimonial');
    if(items.length>1){
      setInterval(()=>{
        pos = (pos+1) % items.length;
        const offset = -(pos * (items[0].offsetWidth + 16));
        slider.scrollTo({left: Math.max(0, offset), behavior:'smooth'});
      }, 4500);
    }
  }

  // Newsletter modal (show after a delay) — suppressed on small screens
  const MODAL_KEY = 'sn_modal_shown';
  function showModal(){
    if(localStorage.getItem(MODAL_KEY)) return;
    if(window.innerWidth < 640) return; // avoid intrusive modal on phones
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true">
      <button class="close" aria-label="Close">✕</button>
      <h3>Join our monthly notes</h3>
      <p class="muted">Short, thoughtful emails — recipes, reflections, and gentle prompts.</p>
      <form id="modal-subscribe" class="subscribe-form" action="#">
        <input name="email" type="email" placeholder="your email" required />
        <button class="btn btn-primary" type="submit">Subscribe</button>
      </form>
    </div>`;
    document.body.appendChild(backdrop);
    backdrop.querySelector('.close').addEventListener('click', ()=>backdrop.remove());
    backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) backdrop.remove(); });
    const mform = backdrop.querySelector('#modal-subscribe');
    mform.addEventListener('submit', function(e){
      e.preventDefault();
      const em = mform.querySelector('input[name="email"]').value.trim();
      if(!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){
        alert('Please enter a valid email');
        return;
      }
      localStorage.setItem(MODAL_KEY, '1');
      alert('Thanks — subscription saved (placeholder). Replace with a real provider in README.');
      backdrop.remove();
    });
  }
  // show after delay only on desktop/tablet
  setTimeout(showModal, 12000);

  // Subscribe form fallback on pages
  const form = document.getElementById('subscribe-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value.trim();
      if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Please enter a valid email address');
        return;
      }
      alert('Thanks — subscription saved (placeholder). See README for integration steps.');
      form.reset();
    });
  }

  // Footer subscribe form
  const footerForm = document.getElementById('footer-subscribe');
  if(footerForm){
    footerForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = footerForm.querySelector('input[name="email"]').value.trim();
      if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Please enter a valid email address');
        return;
      }
      alert('Thanks — subscription saved (placeholder). See README for integration steps.');
      footerForm.reset();
    });
  }
});
