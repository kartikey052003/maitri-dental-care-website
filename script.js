const NUM="918267997067",BASE="Hello, I would like to enquire about Dental Trauma Treatment or Maxillofacial Surgery consultation at Maitri Dental Care, Vrindavan.";
const wa=t=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(t);
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(BASE));
const ADDR="002, Radha-3A, Ground Floor, Opposite Shiv Mandir, Circle Market, Omaxe Eternity, Sunrakh Bangar, Vrindavan, Mathura, Uttar Pradesh 281121";
/* Replace with the clinic's verified Google Maps place URL when available */
const MAPS_URL="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Maitri Dental Care, "+ADDR);
document.getElementById("dir").href=MAPS_URL;
const I={
tooth:'<path d="M7 4c-2.500 0-4 2-4 4.500 0 3 1.500 4 2 7 .4 2.500 1 4.500 2.500 4.500 1.700 0 1.500-4 3-4s1.300 4 3 4c1.500 0 2.100-2 2.500-4.500.5-3 2-4 2-7C20 6 18.500 4 16 4c-1.500 0-2.200.8-4 .8S8.500 4 7 4z"/>',
den:'<path d="M4 9c2-3 14-3 16 0M5 9v2c0 2 2 3 3 3h8c1 0 3-1 3-3V9M9 14v2M15 14v2"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.700 2.500 2.500 4 2.500s3-.8 4-2.500M9 9.500h.01M15 9.500h.01"/>',
root:'<path d="M7 3c-2 0-3 1.500-3 3.500S5 10 5 13M17 3c2 0 3 1.500 3 3.500S19 10 19 13M9 8l-1 13M15 8l1 13M10 3h4"/>',
wis:'<path d="M5 6c0-1.500 1-3 3-3h8c2 0 3 1.500 3 3v4c0 3-2 5-4 5l-1 5M9 15l-1 5"/>',
brace:'<rect x="3" y="8" width="18" height="8" rx="3"/><path d="M8 12h.01M12 12h.01M16 12h.01M3 12h18"/>',
align:'<path d="M3 14c0-4 4-7 9-7s9 3 9 7c0 2-2 3-4 3H7c-2 0-4-1-4-3z"/>',
white:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.600 5.600l2 2M16.400 16.400l2 2M5.600 18.400l2-2M16.400 7.600l2-2"/><circle cx="12" cy="12" r="3"/>',
imp:'<path d="M8 3h8l-1 5H9zM9 8l1 4M15 8l-1 4M10 12h4M10.500 15h3M11 18h2l-.5 3h-1z"/>',
 kids:'<circle cx="12" cy="9" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6M9.500 9h.01M14.500 9h.01"/>',
 trauma:'<path d="M8 3c-2 0-3 1.5-3 3.5S6 10 6 13l1 6c.2 1.3 1 2 2 2s1.4-.7 1.7-2l1.3-5 1.3 5c.3 1.3.7 2 1.7 2s1.8-.7 2-2l1-6c0-3 1-4 1-6.5S17.5 3 16 3c-1.5 0-2.2.8-4 .8S9.5 3 8 3z"/><path d="m13 7-2 3h2l-2 4"/>',
 jaw:'<path d="M5 5c1.5 5 1.5 9 3 14 1 .8 2.2 1 4 1s3-.2 4-1c1.5-5 1.5-9 3-14"/><path d="M8 8h8M9 12h6M10 16h4"/>'};
const S=[
["General Dentistry","tooth","Check-ups, cleaning, fillings and everyday care to keep your teeth and gums healthy.","Routine check-ups, cleaning, tooth pain or sensitivity"],
["Dentures","den","Complete or partial dentures to replace missing teeth, fitted for comfort and everyday use.","Missing teeth or loose existing dentures"],
["Smile Designing","smile","A personalised plan to improve the look of your teeth, planned together with you.","Uneven, chipped or discoloured teeth"],
["Root Canal Treatment (RCT)","root","Treatment to save a badly infected or painful tooth instead of removing it.","Lingering toothache or deep decay"],
["Wisdom Tooth Problems","wis","Assessment and care for painful, impacted or troublesome wisdom teeth.","Pain or swelling at the back of the mouth"],
["Braces","brace","Fixed braces to straighten teeth and correct bite alignment.","Crowded, spaced or misaligned teeth"],
["Aligners","align","Clear, removable aligners as a discreet alternative for suitable cases.","Mild alignment concerns and a wish for a discreet option"],
["Teeth Whitening","white","Safe whitening to lift stains and brighten your smile.","Stained or yellowed teeth"],
["Dental Implants","imp","A long-term way to replace missing teeth, assessed after examination.","One or more missing teeth"],
["Kids Dentistry","kids","Friendly, gentle dental care for children, from first visits onward.","A first dental visit or regular check-ups for children"]];
S.push(["Dental Trauma Treatment","trauma","Assessment and care guidance for chipped, fractured, displaced or injured teeth after an accident or impact.","Broken, chipped or injured teeth", "dental-trauma-treatment-vrindavan"]);
S.push(["Maxillofacial Surgery Consultation","jaw","Consultation and guidance for oral, jaw and facial conditions, with treatment or referral based on clinical assessment.","Jaw concerns, facial injuries or impacted teeth", "maxillofacial-surgery-vrindavan"]);
const g=document.getElementById("svcGrid");
const ID={"General Dentistry": "general-dentistry-vrindavan", "Dentures": "dentures-vrindavan", "Smile Designing": "smile-makeover-vrindavan", "Root Canal Treatment (RCT)": "root-canal-treatment-vrindavan", "Wisdom Tooth Problems": "wisdom-tooth-removal-vrindavan", "Braces": "braces-treatment-vrindavan", "Aligners": "aligners-vrindavan", "Teeth Whitening": "teeth-whitening-vrindavan", "Dental Implants": "dental-implants-vrindavan", "Kids Dentistry": "kids-dentist-vrindavan", "Dental Trauma Treatment":"dental-trauma-treatment-vrindavan", "Maxillofacial Surgery Consultation":"maxillofacial-surgery-vrindavan"};
S.forEach(([n,i,d,c,slug])=>{const href=slug?slug+"/":"#";const cta=n==="Dental Trauma Treatment"?"Get Dental Trauma Consultation":n==="Maxillofacial Surgery Consultation"?"Enquire About a Consultation":"Learn more";g.insertAdjacentHTML("beforeend",`<article class="card svc rv" id="${ID[n]}"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${I[i]}</svg></div><h3>${slug?`<a href="${href}">${n}</a>`:n}</h3><p>${d}</p><p class="for"><b>Often asked about:</b> ${c}</p>${slug?`<a class="btn sm" href="${href}">${cta}</a>`:""}</article>`)});
const F=[
["What services are available?","General dentistry, dentures, smile designing, root canal treatment (RCT), wisdom tooth problems, braces, aligners, teeth whitening, dental implants, kids dentistry, dental trauma treatment and maxillofacial surgery consultation."],
["How can I book an appointment?","Message us on WhatsApp or call during clinic hours. The WhatsApp buttons open a ready-to-send message."],
["Where is Maitri Dental Care located?","Maitri Dental Care is in Omaxe Eternity, Vrindavan, Mathura district, Uttar Pradesh. We serve patients from Vrindavan, Sunrakh Bangar, Chhatikara Road, Mathura and nearby areas. See the Contact section for the full address and directions."],
["What are the clinic timings?","Opening hours are listed in the Contact section. We are open six days a week, with a shorter morning session on Sunday."],
["Do you provide dentures?","Yes. Dr. Goyal is a prosthodontist, the specialty concerned with replacing and restoring teeth."],
["Do you provide braces and aligners?","Yes, both are offered. Which one suits you depends on an examination."],
["Do you provide dental implants?","Yes. Suitability is decided after a consultation."],
["Do you provide kids dentistry?","Yes. Children are welcome and treated gently."],
["Is the clinic wheelchair accessible?","Yes: wheelchair-accessible entrance, parking and restroom."],
["How much does treatment cost?","The cost depends on the treatment you need and what the examination shows. For an estimate, message or call the clinic."],
["How long does a treatment take?","It varies by treatment and by patient. Your dentist will explain the expected number of visits after examining you."],
["Will my treatment be painful?","Your comfort matters to us. Tell the dentist about any worry or discomfort at any time, and ask about your options before treatment begins."],
["What should I do in a dental emergency?","If you have severe tooth pain, call the clinic during opening hours and describe the problem. For heavy bleeding, spreading facial swelling, or difficulty breathing or swallowing, go to the nearest hospital emergency department."]];
document.getElementById("faqList").innerHTML=F.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");
const $=id=>document.getElementById(id);

(function(){const t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",weekday:"short",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(new Date());
const g=k=>t.find(x=>x.type===k).value,d=g("weekday"),m=(+g("hour")%24)*60+ +g("minute");
const R=d==="Sun"?[[600,780]]:[[600,840],[990,1230]];const on=R.some(([a,b])=>m>=a&&m<b);
document.getElementById("openNow").innerHTML='<span class="dot'+(on?' on':'')+'"></span>'+(on?"Open now":"Currently closed")+" · <a href=\"#contact\">See hours</a>";})();
const mb=document.querySelector(".menu"),ul=$("links");
mb.onclick=()=>{const o=ul.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
ul.addEventListener("click",()=>{ul.classList.remove("open");mb.setAttribute("aria-expanded",false)});
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.05}):null;
if("IntersectionObserver"in window){document.documentElement.classList.add("js");document.querySelectorAll(".rv").forEach(el=>io.observe(el));setTimeout(()=>document.querySelectorAll(".rv").forEach(el=>el.classList.add("in")),4000)}

/* Deployment helpers: canonical + og:url use whatever domain the site is served from */
(function(){if(!/^https?:$/.test(location.protocol))return;var u=location.origin+location.pathname.replace(/index\.html$/,"");
var c=document.createElement("link");c.rel="canonical";c.href=u;document.head.appendChild(c);
var o=document.createElement("meta");o.setAttribute("property","og:url");o.content=u;document.head.appendChild(o)})();
