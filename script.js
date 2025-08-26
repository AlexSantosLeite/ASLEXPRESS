window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.classList.add('loader-hidden');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(otherItem => {
                    if (otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    const formOrcamento = document.getElementById('form-orcamento');

    if (formOrcamento) {
        formOrcamento.addEventListener('submit', function(e) {
            e.preventDefault();

            const numeroWhatsapp = "5511949207386"; 

            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('servico').value;
            const coleta = document.getElementById('ponto-coleta').value;
            const entrega = document.getElementById('ponto-entrega').value;
            const telefone = document.getElementById('telefone').value;
            const descricao = document.getElementById('descricao').value;

            const textoMensagem = `Olá! Gostaria de um orçamento da ASL EXPRESS.\n\n` +
                                  `*Nome:* ${nome}\n` +
                                  `*Tipo de Serviço:* ${servico}\n` +
                                  (telefone ? `*Telefone para Contato:* ${telefone}\n` : '') +
                                  `*Ponto de Coleta:* ${coleta}\n` +
                                  `*Ponto de Entrega:* ${entrega}\n` +
                                  `*Descrição do Item:* ${descricao}`;
            
            const mensagemUrl = encodeURIComponent(textoMensagem);
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemUrl}`;

            window.open(linkWhatsapp, '_blank' );
        });
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Opcional: remove a classe para animar toda vez que rolar
            // reveals[i].classList.remove("active"); 
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) {
        return;
    }

    const track = carousel.querySelector('.testimonial-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.next-button');
    const prevButton = carousel.querySelector('.prev-button');

    if (slides.length === 0) {
        return;
    }

    let currentIndex = 0;

    const moveToSlide = (index) => {
 
        if (index < 0) {
            index = slides.length - 1; 
        } else if (index >= slides.length) {
            index = 0;
        }

        const targetSlide = slides[index];
        const scrollPosition = targetSlide.offsetLeft - (track.offsetWidth / 2) + (targetSlide.offsetWidth / 2);

        track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        currentIndex = index;

        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('is-selected');
            } else {
                slide.classList.remove('is-selected');
            }
        });
    };

    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    moveToSlide(0);
});
