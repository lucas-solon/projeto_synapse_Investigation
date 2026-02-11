/*
 * ======================================================
 * AUTOR: Lucas Marcus Solon
 * GRAU: Licenciatura - 2º Ano
 * DATA: 05/12/2025
 * PROJETO: Instituto Synapse ( PWC)
 * ======================================================
 */

/* ==========================================================================
   GLOBAL SCRIPTS
   ========================================================================== */

/* FUNCIONALIDADE: LOAD MORE (CARREGAR MAIS)
   Gerencia a exibição progressiva dos cards ocultos e controle do botão.
*/
document.addEventListener('DOMContentLoaded', function() { /*Garante que nenhum código js vai rodar até carregar o html completo*/
    
    const btnLoadMore = document.getElementById('btn-load-more');
    const hiddenCards = document.querySelectorAll('.hidden-card');

    if (btnLoadMore) {
        
        console.log("Sistema de Load More inicializado.");

        btnLoadMore.addEventListener('click', function() {
            // Revela os cards ocultos
            hiddenCards.forEach(card => {
                card.classList.remove('hidden-card');
                card.style.display = 'block'; 
                
                // Animação de fade-in
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50);
            });

            // Remove o botão após a ação
            btnLoadMore.style.display = 'none';
        });

    } else {
        console.warn("Aviso: Elemento #btn-load-more não encontrado no DOM.");
    }
});

/* FUNCIONALIDADE: HOTSPOTS DO CÉREBRO
   Gerencia a interação de hover nos pontos do mapa cerebral (Science Section).
*/
const hotspots = document.querySelectorAll('.hotspot');
const cards = document.querySelectorAll('.info-card');

hotspots.forEach(botao => {
    botao.addEventListener('mouseenter', () => {
        
        // Reset de estado ativo para todos os elementos
        cards.forEach(card => card.classList.remove('active'));
        hotspots.forEach(btn => btn.classList.remove('active-spot'));

        // Ativação do card correspondente ao data-target
        const alvoId = botao.getAttribute('data-target');
        const cardAlvo = document.getElementById(alvoId);
        
        if (cardAlvo) {
            cardAlvo.classList.add('active');
        }
        
        // Estado ativo no próprio hotspot
        botao.classList.add('active-spot');
    });
});

/* FUNCIONALIDADE: MOLÉCULA INTERATIVA
   Controla os eventos de hover nos grupos químicos e exibição dos fatos científicos.
*/
document.addEventListener('DOMContentLoaded', function() {
    
    const chemGroups = document.querySelectorAll('.chemical-group');
    const facts = document.querySelectorAll('.fact-content');
    
    // Helper para resetar estados visuais
    function resetMolecule() {
        chemGroups.forEach(g => g.classList.remove('active-chem'));
        facts.forEach(f => f.classList.remove('active'));
    }

    chemGroups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            resetMolecule();
            
            // Ativa visual do grupo químico
            group.classList.add('active-chem');

            // Exibe o fato correspondente
            const factId = group.getAttribute('data-fact');
            const targetFact = document.getElementById(factId);
            
            if (targetFact) {
                targetFact.classList.add('active');
            }
        });
    });
});

/* FUNCIONALIDADE: INTERSECTION OBSERVER
   Gatilho para animação do SVG (círculo desenhado) quando entra na Viewport.
*/
document.addEventListener("DOMContentLoaded", () => {
    
    const alvo = document.querySelector('.wrapper-destaque');

    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5 
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Inicia animação CSS
          entry.target.classList.add('animar');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    if (alvo) {
      observer.observe(alvo);
    }
});