const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
})


const hideElements =document.querySelectorAll('.hide');
hideElements.forEach((el) => observer.observe(el));