const observerH2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-h2')
        } else {
            entry.target.classList.remove('animate-h2')
        }
    });
});

const toAnimateElementsH2 = document.querySelectorAll('.to-animate-h2');

toAnimateElementsH2.forEach((el) => observerH2.observe(el));



const observerSeq = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-seq')
        } else {
            entry.target.classList.remove('animate-seq')
        }
    });
});

const toAnimateElementsSeq = document.querySelectorAll('.to-animate-seq');

toAnimateElementsSeq.forEach((el) => observerSeq.observe(el));


const observerTextBlock = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-text-block')
        } else {
            entry.target.classList.remove('animate-text-block')
        }
    });
});

const toAnimateElementsTextBlock = document.querySelectorAll('.to-animate-text-block');

toAnimateElementsTextBlock.forEach((el) => observerTextBlock.observe(el));