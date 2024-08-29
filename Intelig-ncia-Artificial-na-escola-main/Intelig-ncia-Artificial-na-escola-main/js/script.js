const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "Você acredita que o futuro do marketing está na inovação digital ou nas estratégias tradicionais?",
        alternativas: [
            {
                texto: "Inovação digital.",
                afirmacao:[ 
                "No iA inovação digital está remodelando o marketing, capacitando as empresas a se adaptarem às mudanças rápidas no comportamento do consumidor, aproveitando tecnologias emergentes para alcançar e engajar seu público de novas maneiras.nício ficou com medo do que essa tecnologia pode fazer. ",
                "A revolução da inovação digital está transformando o panorama do marketing, permitindo que as empresas se ajustem dinamicamente às evoluções rápidas nos hábitos dos consumidores. Ao integrar plataformas avançadas e análise de dados preditiva, as marcas podem personalizar suas estratégias de modo a alcançar e envolver os consumidores de maneiras profundamente impactantes"
             ]
            },
            {
                texto: "Estratégias tradicionais.",
                afirmacao: [ 
                    " As estratégias tradicionais de marketing ainda têm seu lugar, oferecendo uma base sólida e confiável para alcançar certos segmentos do mercado e estabelecer uma presença consistente em mídias como televisão, rádio e impressos.",
                    "Apesar do avanço da tecnologia, estratégias de marketing tradicionais continuam a desempenhar um papel crucial na construção de confiança e lealdade entre os consumidores. O uso de métodos comprovados como publicidade impressa e eventos presenciais ainda oferece um valor tangível ao proporcionar uma conexão pessoal que pode ser fundamental para algumas marcas."
            ]
            }
        ]
    },
    {
        enunciado: "Qual você considera ser mais crucial para o futuro do marketing: a personalização ou a segmentação ampla?",
        alternativas: [
            {
                texto: "Personalização.",
                afirmacao: [ 
                    " A personalização é fundamental para o futuro do marketing, permitindo que as marcas se conectem individualmente com os consumidores, oferecendo experiências únicas e relevantes que impulsionam a fidelidade e a satisfação do cliente.",
                    "No contexto atual, a personalização emerge como a pedra angular do marketing eficaz. Ao adaptar mensagens, ofertas e experiências com base nos interesses e comportamentos individuais dos consumidores, as marcas não apenas melhoram as taxas de conversão, mas também fortalecem os laços emocionais com seu público-alvo, promovendo um engajamento mais profundo e duradouro."
            ]
            },
            {
                texto: "Segmentação ampla.",
                afirmacao: [
                    "A segmentação ampla continua sendo importante para o marketing, permitindo que as marcas alcancem grandes audiências e aumentem a conscientização sobre seus produtos ou serviços em diversos mercados e plataformas.",
                    "Apesar da crescente ênfase na personalização, a segmentação ampla ainda desempenha um papel crucial no marketing estratégico. Ao alcançar uma audiência mais ampla, as marcas têm a oportunidade de aumentar sua visibilidade e influência em múltiplos segmentos de mercado, ampliando assim suas oportunidades de crescimento e penetração em novas geografias e demografias."
                ]
            }
        ]
    },
    {
        enunciado: "Você vê mais potencial no marketing de influência ou no marketing de conteúdo?",
        alternativas: [
            {
                texto: "Marketing de influência.",
                afirmacao: [
                    " O marketing de influência oferece oportunidades únicas para as marcas se conectarem com seu público-alvo por meio de figuras influentes e autênticas, aumentando a credibilidade e a confiança na marca.",
                    "O marketing de influência está redefinindo as estratégias de engajamento das marcas ao capitalizar o poder das personalidades influentes nas redes sociais. Ao colaborar com influenciadores que compartilham os mesmos valores e interesses de seu público-alvo, as marcas podem alcançar uma conexão autêntica e significativa, gerando um impacto positivo nas decisões de compra dos consumidores."
                ]
            },
            {
                texto: "Marketing de conteúdo.",
                afirmacao: [
                    "O marketing de conteúdo é essencial para o futuro do marketing, fornecendo valor agregado aos consumidores por meio de conteúdo relevante e envolvente, que educa, inspira e informa, construindo relacionamentos duradouros com a marca. ",
                    "No cenário atual, o marketing de conteúdo se destaca como uma ferramenta poderosa para construir autoridade e estabelecer uma presença digital robusta. Ao criar e distribuir conteúdo valioso e educativo, as marcas não só melhoram a visibilidade online, mas também cultivam um relacionamento de confiança com seu público-alvo, posicionando-se como líderes de pensamento em seus setores."
                ]
            }
        ]
    },
    {
        enunciado: "O futuro do marketing será moldado mais pela análise de dados ou pela criatividade?",
        alternativas: [
            {
                texto: "Análise de dados.",
                afirmacao: [
                    "A análise de dados é crucial para o futuro do marketing, fornecendo insights valiosos sobre o comportamento do consumidor, orientando decisões estratégicas e garantindo um ROI mais eficaz para as campanhas de marketing.",
                    "A análise de dados está na vanguarda da evolução do marketing moderno, proporcionando às marcas uma compreensão profunda das preferências e comportamentos dos consumidores em tempo real. Ao aplicar análises avançadas e modelagem preditiva, as empresas podem não apenas otimizar suas estratégias de segmentação e personalização, mas também antecipar tendências emergentes e ajustar suas campanhas com precisão cirúrgica, maximizando assim o impacto de cada investimento em marketing."
            ]
            },
            {
                texto: "Criatividade.",
                afirmacao: [
                    "A criatividade continuará a desempenhar um papel fundamental no marketing, permitindo que as marcas se destaquem em um mercado saturado, gerando emoção e conexão com os consumidores por meio de campanhas inovadoras e memoráveis.",
                    "Mesmo com os avanços na análise de dados, a criatividade continua sendo a alma do marketing eficaz. Ao inspirar e engajar emocionalmente os consumidores através de narrativas envolventes e designs inovadores, as marcas podem construir conexões profundas e duradouras. A criatividade não só diferencia uma marca da concorrência, mas também cria experiências memoráveis que impulsionam a lealdade do cliente e promovem o boca a boca positivo."
                ]
            }
        ]
    },
    {
        enunciado: "Você acredita que o futuro do marketing será dominado pela interação em tempo real ou pela automação de processos?",
        alternativas: [
            {
                texto: "Interação em tempo real.",
                afirmacao: [
                    " A interação em tempo real será uma parte essencial do futuro do marketing, permitindo que as marcas se envolvam instantaneamente com os consumidores, respondendo às suas necessidades e desejos de forma rápida e relevante.Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo.",
                    "A interação em tempo real está moldando o futuro do marketing ao proporcionar às marcas a capacidade de se conectar instantaneamente com os consumidores em diversos pontos de contato. Ao aproveitar tecnologias como chatbots, redes sociais e plataformas de mensagens instantâneas, as empresas podem oferecer suporte imediato, personalizar ofertas e resolver problemas rapidamente, criando experiências de cliente mais satisfatórias e aumentando a fidelidade à marca."
                ]
            },
            {
                texto: "Automação de processos.",
                afirmacao: [
                    " A automação de processos está transformando o marketing, aumentando a eficiência e a escalabilidade das operações de marketing, permitindo que as marcas se concentrem em estratégias mais avançadas e na criação de conteúdo de alta qualidade.",
                    "A automação de processos continua a ser um componente crucial para o avanço do marketing moderno. Ao eliminar tarefas repetitivas e demoradas, as marcas podem otimizar recursos, melhorar a consistência na entrega de campanhas e insights, e liberar tempo para que equipes criativas se concentrem na inovação estratégica e na criação de conteúdo de alto impacto. Isso não só aumenta a eficiência operacional, mas também impulsiona o crescimento e a escalabilidade das iniciativas de marketing."
                ]
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes =   aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
const nomes = ["Antonio", "Gilmar", "Carlos"]
function aleatorio (lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

const nome=aleatorio(nomes);

function jogaNovamente(){
    atual = 0;
    historiaFinal ="";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function substituiNome(){
    pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
}

mostraPergunta();


