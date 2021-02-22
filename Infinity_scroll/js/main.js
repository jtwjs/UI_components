import renderList from "./listRenderer.js";
import {debounce} from './util';

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
}

/*intersection observer (Web API) 사용하는 경우 */
const fetchMoreObserver = new IntersectionObserver(
  ([{isIntersecting}]) => {
    if(isIntersecting)
      fetchMore();
  }
);
fetchMoreObserver.observe(fetchMoreTrigger);
/*
스크롤링 이벤트를 사용하는 경우

const onScroll = e => {
  const {
    clientHeight,
    scrollTop,
    scrollHeight
   } = e.target.scrollingElement;
   console.log(scrollTop);
   console.log(scrollHeight - clientHeight);
   if(scrollHeight - (scrollTop + clientHeight) <= 1) {
     fetchMore();
   }

}

window.addEventListener('scroll', debounce(onScroll,300));
*/
fetchMore();