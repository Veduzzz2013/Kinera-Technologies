const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.textContent = 'Inquiry Sent';
  button.disabled = true;
});
