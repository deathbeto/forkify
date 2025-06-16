function e(e){return e&&e.__esModule?e.default:e}const t="https://forkify-api.herokuapp.com/api/v2/recipes/",i=async function(e){try{let t=fetch(e),i=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error(`La petici\xf3n tard\xf3 demasiado. Timeout tras 5 segundos`))},5e3)})]),n=await i.json();if(!i.ok)throw Error(`${n.message} (${i.status})`);return n}catch(e){throw e}},n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},s=async function(e){try{let s=(await i(`${t}${e}`)).data.recipe;n.recipe={id:s.id,title:s.title,publisher:s.publisher,sourceUrl:s.source_url,image:s.image_url,servings:s.servings,cookTime:s.cooking_time,ingredients:s.ingredients},console.log("Receta cargada en state:",n.recipe)}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},r=async function(e){try{n.search.query=e;let s=await i(`${t}?search=${e}`);n.search.results=s.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},a=function(e=n.search.page){n.search.page=e;let t=(e-1)*n.search.resultsPerPage,i=e*n.search.resultsPerPage;return n.search.results.slice(t,i)};class o{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let t=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${{}}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${{}}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${{}}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var l={};!function(e){function t(){return Error("Parameters must be integer")}function i(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function s(e,s){var a=d,o=f;let l=f;if(null!=e)if(void 0!==s){if("bigint"==typeof e)a=e;else{if(isNaN(e))throw i();if(0!=e%1)throw t();a=BigInt(e)}if("bigint"==typeof s)o=s;else{if(isNaN(s))throw i();if(0!=s%1)throw t();o=BigInt(s)}l=a*o}else if("object"==typeof e){if("d"in e&&"n"in e)a=BigInt(e.n),o=BigInt(e.d),"s"in e&&(a*=BigInt(e.s));else if(0 in e)a=BigInt(e[0]),1 in e&&(o=BigInt(e[1]));else if("bigint"==typeof e)a=e;else throw i();l=a*o}else if("number"==typeof e){if(isNaN(e))throw i();if(0>e&&(l=-f,e=-e),0==e%1)a=BigInt(e);else{s=1;var c=0,u=1,h=1;let t=1;for(1<=e&&(s=10**Math.floor(1+Math.log10(e)),e/=s);1e7>=u&&1e7>=t;)if(e===(o=(c+h)/(u+t))){1e7>=u+t?(a=c+h,o=u+t):t>u?(a=h,o=t):(a=c,o=u);break}else e>o?(c+=h,u+=t):(h+=c,t+=u),1e7<u?(a=h,o=t):(a=c,o=u);a=BigInt(a)*BigInt(s),o=BigInt(o)}}else if("string"==typeof e){if(o=0,c=s=a=d,u=h=f,null===(e=e.replace(/_/g,"").match(/\d+|./g)))throw i();if("-"===e[o]?(l=-f,o++):"+"===e[o]&&o++,e.length===o+1?s=r(e[o++],l):"."===e[o+1]||"."===e[o]?("."!==e[o]&&(a=r(e[o++],l)),(++o+1===e.length||"("===e[o+1]&&")"===e[o+3]||"'"===e[o+1]&&"'"===e[o+3])&&(s=r(e[o],l),h=_**BigInt(e[o].length),o++),("("===e[o]&&")"===e[o+2]||"'"===e[o]&&"'"===e[o+2])&&(c=r(e[o+1],l),u=_**BigInt(e[o+1].length)-f,o+=3)):"/"===e[o+1]||":"===e[o+1]?(s=r(e[o],l),h=r(e[o+2],f),o+=3):"/"===e[o+3]&&" "===e[o+1]&&(a=r(e[o],l),s=r(e[o+2],l),h=r(e[o+4],f),o+=5),e.length<=o)l=a=c+(o=h*u)*a+u*s;else throw i()}else if("bigint"==typeof e)l=a=e,o=f;else throw i();if(o===d)throw n();v.s=l<d?-f:f,v.n=a<d?-a:a,v.d=o<d?-o:o}function r(e,t){try{e=BigInt(e)}catch(e){throw i()}return e*t}function a(e){return"bigint"==typeof e?e:Math.floor(e)}function o(e,t){if(t===d)throw n();let i=Object.create(h.prototype);i.s=e<d?-f:f;let s=u(e=e<d?-e:e,t);return i.n=e/s,i.d=t/s,i}function c(e){let t={},i=e,n=g,s=p-f;for(;s<=i;){for(;i%n===d;)i/=n,t[n]=(t[n]||d)+f;s+=f+g*n++}return i!==e?1<i&&(t[i]=(t[i]||d)+f):t[e]=(t[e]||d)+f,t}function u(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function h(e,t){if(s(e,t),!(this instanceof h))return o(v.s*v.n,v.d);e=u(v.d,v.n),this.s=v.s,this.n=v.n/e,this.d=v.d/e}"undefined"==typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let d=BigInt(0),f=BigInt(1),g=BigInt(2),p=BigInt(5),_=BigInt(10),v={s:f,n:d,d:f};h.prototype={s:f,n:d,d:f,abs:function(){return o(this.n,this.d)},neg:function(){return o(-this.s*this.n,this.d)},add:function(e,t){return s(e,t),o(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(e,t){return s(e,t),o(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(e,t){return s(e,t),o(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(e,t){return s(e,t),o(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return o(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return o(this.s*this.n%this.d,f);if(s(e,t),d===v.n*this.d)throw n();return o(this.s*v.d*this.n%(v.n*this.d),v.d*this.d)},gcd:function(e,t){return s(e,t),o(u(v.n,this.n)*u(v.d,this.d),v.d*this.d)},lcm:function(e,t){return s(e,t),v.n===d&&this.n===d?o(d,f):o(v.n*this.n,u(v.n,this.n)*u(v.d,this.d))},inverse:function(){return o(this.s*this.d,this.n)},pow:function(e,t){if(s(e,t),v.d===f)return v.s<d?o((this.s*this.d)**v.n,this.n**v.n):o((this.s*this.n)**v.n,this.d**v.n);if(this.s<d)return null;e=c(this.n),t=c(this.d);let i=f,n=f;for(let t in e)if("1"!==t){if("0"===t){i=d;break}if(e[t]*=v.n,e[t]%v.d!==d)return null;e[t]/=v.d,i*=BigInt(t)**e[t]}for(let e in t)if("1"!==e){if(t[e]*=v.n,t[e]%v.d!==d)return null;t[e]/=v.d,n*=BigInt(e)**t[e]}return v.s<d?o(n,i):o(i,n)},log:function(e,t){if(s(e,t),this.s<=d||v.s<=d)return null;var i={};e=c(v.n);let n=c(v.d);t=c(this.n);let r=c(this.d);for(var a in n)e[a]=(e[a]||d)-n[a];for(var l in r)t[l]=(t[l]||d)-r[l];for(var h in e)"1"!==h&&(i[h]=!0);for(var f in t)"1"!==f&&(i[f]=!0);for(let n in l=a=null,i)if(h=e[n]||d,i=t[n]||d,h===d){if(i!==d)return null}else if(f=u(i,h),i/=f,h/=f,null===a&&null===l)a=i,l=h;else if(i*l!=a*h)return null;return null!==a&&null!==l?o(a,l):null},equals:function(e,t){return s(e,t),this.s*this.n*v.d==v.s*v.n*this.d},lt:function(e,t){return s(e,t),this.s*this.n*v.d<v.s*v.n*this.d},lte:function(e,t){return s(e,t),this.s*this.n*v.d<=v.s*v.n*this.d},gt:function(e,t){return s(e,t),this.s*this.n*v.d>v.s*v.n*this.d},gte:function(e,t){return s(e,t),this.s*this.n*v.d>=v.s*v.n*this.d},compare:function(e,t){return s(e,t),(d<(e=this.s*this.n*v.d-v.s*v.n*this.d))-(e<d)},ceil:function(e){return e=_**BigInt(e||0),o(a(this.s*e*this.n/this.d)+(e*this.n%this.d>d&&this.s>=d?f:d),e)},floor:function(e){return e=_**BigInt(e||0),o(a(this.s*e*this.n/this.d)-(e*this.n%this.d>d&&this.s<d?f:d),e)},round:function(e){return e=_**BigInt(e||0),o(a(this.s*e*this.n/this.d)+this.s*((this.s>=d?f:d)+e*this.n%this.d*g>this.d?f:d),e)},roundTo:function(e,t){s(e,t);var i=this.n*v.d;return t=i%(e=this.d*v.n),i=a(i/e),t+t>=e&&i++,o(this.s*i*v.n,v.d)},divisible:function(e,t){return s(e,t),!(!(v.n*this.d)||this.n*v.d%(v.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e){let t=this.n,i=this.d;e=e||15;e:{for(n=i;n%g===d;n/=g);for(;n%p===d;n/=p);if(n===f)n=d;else{for(var n,s=_%n,r=1;s!==f;r++)if(s=s*_%n,2e3<r){n=d;break e}n=BigInt(r)}}e:{s=f,r=_;var o=n;let e=f;for(;o>d;r=r*r%i,o>>=f)o&f&&(e=e*r%i);for(o=0,r=e;300>o;o++){if(s===r){s=BigInt(o);break e}s=s*_%i,r=r*_%i}s=0}if(r=s,s=(this.s<d?"-":"")+a(t/i),(t=t%i*_)&&(s+="."),n){for(e=r;e--;)s+=a(t/i),t%=i,t*=_;for(s+="(",e=n;e--;)s+=a(t/i),t%=i,t*=_;s+=")"}else for(;t&&e--;)s+=a(t/i),t%=i,t*=_;return s},toFraction:function(e){let t=this.n,i=this.d,n=this.s<d?"-":"";if(i===f)n+=t;else{let s=a(t/i);e&&s>d&&(n+=s,n+=" ",t%=i),n=n+t+"/"+i}return n},toLatex:function(e){let t=this.n,i=this.d,n=this.s<d?"-":"";if(i===f)n+=t;else{let s=a(t/i);e&&s>d&&(n+=s,t%=i),n=n+"\\frac{"+t+"}{"+i+"}"}return n},toContinued:function(){let e=this.n,t=this.d,i=[];do{i.push(a(e/t));let n=e%t;e=t,t=n}while(e!==f)return i},simplify:function(e){e=BigInt(1/(e||.001)|0);let t=this.abs(),i=t.toContinued();for(let s=1;s<i.length;s++){let r=o(i[s-1],f);for(var n=s-2;0<=n;n--)r=r.inverse().add(i[n]);if((n=r.sub(t)).n*e<n.d)return r.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return h}):(Object.defineProperty(h,"__esModule",{value:!0}),h.default=h,h.Fraction=h,l=h)}(0);class c extends o{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>
        </div>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(t=>`
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${{}}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">
                  ${t.quantity?new(e(l))(t.quantity).toFraction(!0):""}
                </div>
                <div class="recipe__description">
                  <span class="recipe__unit">${t.unit||""}</span>
                  ${t.description}
                </div>
              </li>`).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}}var u=new c;class h{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var d=new h;class f extends o{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}var g=new f,p={};p=import.meta.resolve("eyyUD");class _ extends o{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let i=t.target.closest(".btn--inline");i&&e(+i.dataset.goto)})}_generateMarkup(){let t=this._data.page,i=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&i>1?`
      <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
          <use href="${e(p)}#icon-arrow-right"></use>
        </svg>
      </button>
    `:t===i&&i>1?`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${e(p)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${t-1}</span>
      </button>
    `:t>1&&t<i?`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${e(p)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${t-1}</span>
      </button>
      <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
          <use href="${e(p)}#icon-arrow-right"></use>
        </svg>
      </button>
    `:""}}var v=new _;async function m(){try{let e=window.location.hash.slice(1);if(!e)return;u.renderSpinner(),await s(e),u.render(n.recipe)}catch(e){u.renderError()}}async function b(){try{g.renderSpinner();let e=d.getQuery();if(!e)return;await r(e),g.render(a()),v.render(n.search)}catch(e){console.error(e)}}u.addHandlerRender(m),d.addHandlerSearch(b),v.addHandlerClick(function(e){g.render(a(e)),v.render(n.search)});
//# sourceMappingURL=forkify.977e37b0.js.map
