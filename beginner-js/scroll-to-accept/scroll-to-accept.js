const terms = document.querySelector('.terms-and-conditions');
const acceptButton = document.querySelector('button');
// METHOD 1:
// terms.addEventListener('scroll', (event) => {
//     const scrollTop = event.currentTarget.scrollTop;
//     const scrollHeight = event.currentTarget.scrollHeight;
//     if (scrollTop >= 0.89 * scrollHeight) {
//         acceptButton.disabled = false;
//     } else {
//         acceptButton.disabled = true;
//     }
// });
function intersectionCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        acceptButton.disabled = false;
    } else {
        acceptButton.disabled = true;
    }
}
const ob = new IntersectionObserver(intersectionCallback);
ob.observe(terms.lastElementChild);
// Learnings
// Scroll event doesnot bubble
// on scroll event, e.target = e.currentTarget
// e.scrollTop = current position from top
// e.scrollHeight = max height of scroll
// instantiate an intersection observer => new IntersectionObserver(callback, options)
// options -> root, threshold
// using the observer const ob = new  IntersectionObserver(callback);
// ob.observe(nodeElement)