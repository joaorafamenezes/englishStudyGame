import type { Question } from "../types.js";

export const QUESTIONS: Question[] = [
  {
    "id": "q-user-along-with-iphone",
    "prompt": "When you buy a new iPhone, you need to buy the charger separately. It won't come _____ the phone.",
    "options": [
      {
        "id": "a",
        "text": "along with"
      },
      {
        "id": "b",
        "text": "instead of"
      },
      {
        "id": "c",
        "text": "because of"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "'Along with' indica que algo acompanha ou vem anexado a outro item.",
    "fullSentence": "When you buy a new iPhone, you need to buy the charger separately. It won't come along with the phone.",
    "sentenceTranslation": "Quando você compra um novo iPhone, precisa comprar o carregador separadamente. Ele não virá junto com o telefone.",
    "whyCorrect": "'Along with' expressa inclusão e acompanhamento físico ou conceitual ('junto com o telefone').",
    "whyOthersFail": "'Instead of' significa 'em vez de'. 'Because of' indica causa ('por causa de'). 'In order to' expressa finalidade ('a fim de').",
    "proTip": "Lembre-se: 'Along with' funciona como 'together with'. Muito usado para pacotes, acessórios e entregas conjuntas."
  },
  {
    "id": "q-user-along-with-scrum",
    "prompt": "The Scrum Master made the Retrospective _____ the developers and the QAs.",
    "options": [
      {
        "id": "a",
        "text": "apart from"
      },
      {
        "id": "b",
        "text": "along with"
      },
      {
        "id": "c",
        "text": "due to"
      },
      {
        "id": "d",
        "text": "instead of"
      }
    ],
    "correctOptionId": "b",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "'Along with' indica colaboração e realização conjunta de uma cerimônia ágil.",
    "fullSentence": "The Scrum Master made the Retrospective along with the developers and the QAs.",
    "sentenceTranslation": "O Scrum Master realizou a Retrospectiva junto com os desenvolvedores e os QAs.",
    "whyCorrect": "'Along with' conecta os participantes da reunião, mostrando que a Retrospectiva foi conduzida em conjunto.",
    "whyOthersFail": "'Apart from' excluiria os devs e QAs ('exceto os devs'). 'Due to' indicaria causa. 'Instead of' indicaria que fez com um em substituição a outro.",
    "proTip": "No vocabulário ágil, use 'along with' para enfatizar colaboração entre diferentes papéis da squad!"
  },
  {
    "id": "q-user-along-with-cinthia",
    "prompt": "I made an appointment in a restaurant, and Cinthia will go _____ me.",
    "options": [
      {
        "id": "a",
        "text": "rather than"
      },
      {
        "id": "b",
        "text": "along with"
      },
      {
        "id": "c",
        "text": "in case"
      },
      {
        "id": "d",
        "text": "even if"
      }
    ],
    "correctOptionId": "b",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "'Along with' expressa companhia ('along with me' = junto comigo).",
    "fullSentence": "I made an appointment in a restaurant, and Cinthia will go along with me.",
    "sentenceTranslation": "Fiz uma reserva em um restaurante, e a Cinthia vai junto comigo.",
    "whyCorrect": "'Along with me' é a forma natural de dizer que alguém vai como sua companhia.",
    "whyOthersFail": "'Rather than' indicaria preferência ('em vez de mim'). 'In case' expressa hipótese/precaução. 'Even if' expressa condição extrema.",
    "proTip": "'Go along with someone' é superexpressivo no dia a dia. Também pode significar concordar com uma ideia!"
  },
  {
    "id": "q-user-as-a-result-gremio",
    "prompt": "Grêmio lost one more match on Saturday, and _____, the manager was fired.",
    "options": [
      {
        "id": "a",
        "text": "however"
      },
      {
        "id": "b",
        "text": "as a result"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "instead of"
      }
    ],
    "correctOptionId": "b",
    "connector": "as a result",
    "family": "cause",
    "translation": "Como resultado",
    "explanation": "'As a result' conecta a causa anterior (a derrota) à sua consequência lógica direta (a demissão).",
    "fullSentence": "Grêmio lost one more match on Saturday, and as a result, the manager was fired.",
    "sentenceTranslation": "O Grêmio perdeu mais uma partida no sábado e, como resultado, o técnico foi demitido.",
    "whyCorrect": "A demissão é o efeito direto e a consequência da derrota sucessiva. 'As a result' é o conector exato de causa e efeito.",
    "whyOthersFail": "'However' expressaria oposição (como se perder fosse bom). 'Unless' introduz condição negativa. 'Instead of' requer gerúndio ou substantivo.",
    "proTip": "Dica de Ouro: [Causa no passado] + 'and, as a result,' + [Consequência]. Estrutura imbatível em relatórios e conversas!"
  },
  {
    "id": "q-user-as-far-as-rebeca",
    "prompt": "_____ I know, Rebeca delivered the project on time.",
    "options": [
      {
        "id": "a",
        "text": "As far as"
      },
      {
        "id": "b",
        "text": "In order to"
      },
      {
        "id": "c",
        "text": "Because of"
      },
      {
        "id": "d",
        "text": "As well as"
      }
    ],
    "correctOptionId": "a",
    "connector": "As far as",
    "family": "condition",
    "translation": "Pelo que / Até onde",
    "explanation": "'As far as I know' é a expressão consagrada para 'até onde eu sei / pelo que eu sei'.",
    "fullSentence": "As far as I know, Rebeca delivered the project on time.",
    "sentenceTranslation": "Até onde eu sei, a Rebeca entregou o projeto no prazo.",
    "whyCorrect": "'As far as' limita a afirmação ao alcance do conhecimento de quem fala ('As far as I know').",
    "whyOthersFail": "'In order to' exige verbo no infinitivo de finalidade. 'Because of' exige substantivo causal. 'As well as' adiciona elementos.",
    "proTip": "Grave essa expressão para reuniões corporativas: 'As far as I know...' demonstra segurança sem prometer o que você não checou pessoalmente."
  },
  {
    "id": "q-user-as-far-as-screen",
    "prompt": "_____ the client said to me, the problem is that the screen doesn't work.",
    "options": [
      {
        "id": "a",
        "text": "As far as"
      },
      {
        "id": "b",
        "text": "Due to"
      },
      {
        "id": "c",
        "text": "Even if"
      },
      {
        "id": "d",
        "text": "Rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "As far as",
    "family": "condition",
    "translation": "Pelo que / Pelo que disse",
    "explanation": "'As far as [person] said' introduz o relato de acordo com o que foi informado.",
    "fullSentence": "As far as the client said to me, the problem is that the screen doesn't work.",
    "sentenceTranslation": "Pelo que o cliente me disse, o problema é que a tela não funciona.",
    "whyCorrect": "'As far as' relata a informação recebida de terceiros com precisão profissional.",
    "whyOthersFail": "'Due to' exige substantivo direto de causa ('due to the screen failure'). 'Even if' é condicional. 'Rather than' expressa preferência.",
    "proTip": "'As far as the client is concerned' ou 'As far as they told me' são locuções chave em suporte e sustentação!"
  },
  {
    "id": "q-user-as-well-as-qa",
    "prompt": "The team needs a software developer _____ a QA.",
    "options": [
      {
        "id": "a",
        "text": "as well as"
      },
      {
        "id": "b",
        "text": "although"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "in case"
      }
    ],
    "correctOptionId": "a",
    "connector": "as well as",
    "family": "addition",
    "translation": "Assim como / Bem como",
    "explanation": "'As well as' liga duas necessidades complementares em uma equipe ágil.",
    "fullSentence": "The team needs a software developer as well as a QA.",
    "sentenceTranslation": "O time precisa de um desenvolvedor de software bem como de um QA.",
    "whyCorrect": "'As well as' adiciona o QA ao desenvolvedor de forma elegante e equilibrada.",
    "whyOthersFail": "'Although' expressa concessão. 'Unless' expressa exceção/condição. 'In case' expressa precaução.",
    "proTip": "Use 'as well as' em descrições de vagas e composição de squads: soa muito mais profissional do que apenas repetir 'and'."
  },
  {
    "id": "q-user-at-last-gremio",
    "prompt": "Renato Gaúcho signed with Grêmio _____.",
    "options": [
      {
        "id": "a",
        "text": "at all"
      },
      {
        "id": "b",
        "text": "at last"
      },
      {
        "id": "c",
        "text": "due to"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "b",
    "connector": "at last",
    "family": "time",
    "translation": "Por fim / Finalmente",
    "explanation": "'At last' indica que algo muito esperado finalmente se concretizou após longa negociação.",
    "fullSentence": "Renato Gaúcho signed with Grêmio at last.",
    "sentenceTranslation": "O Renato Gaúcho assinou com o Grêmio finalmente / por fim.",
    "whyCorrect": "'At last' traz o sentimento de alívio e conclusão de uma longa espera.",
    "whyOthersFail": "'At all' é usado para ênfase negativa ou intensidade ('not at all'). 'Due to' precisa de substantivo de causa. 'In order to' precisa de infinitivo.",
    "proTip": "Diferença do Professor: 'At last' = Finalmente! (com emoção e alívio). 'Lastly' = Em último lugar numa lista."
  },
  {
    "id": "q-user-at-least-math",
    "prompt": "Although I didn’t study enough, _____ I studied Math, the hardest one.",
    "options": [
      {
        "id": "a",
        "text": "at last"
      },
      {
        "id": "b",
        "text": "at least"
      },
      {
        "id": "c",
        "text": "instead of"
      },
      {
        "id": "d",
        "text": "as well"
      }
    ],
    "correctOptionId": "b",
    "connector": "at least",
    "family": "emphasis",
    "translation": "Pelo menos",
    "explanation": "'At least' destaca o lado positivo ou consolador em meio a uma situação desfavorável.",
    "fullSentence": "Although I didn’t study enough, at least I studied Math, the hardest one.",
    "sentenceTranslation": "Embora eu não tenha estudado o suficiente, pelo menos estudei Matemática, a mais difícil.",
    "whyCorrect": "'At least' valoriza a conquista mínima alcançada diante de um cenário imperfeito.",
    "whyOthersFail": "'At last' significa 'finalmente'. 'Instead of' precisa de gerúndio. 'As well' ficaria no final com sentido de 'também'.",
    "proTip": "Pares expressivos: 'Although [adversidade], at least [vitória mínima]'. Perfeito para retrospectivas de sprints difíceis!"
  },
  {
    "id": "q-user-definitely-poc",
    "prompt": "My team made a POC (Proof of Concept) and, _____, we can build the program.",
    "options": [
      {
        "id": "a",
        "text": "definitely"
      },
      {
        "id": "b",
        "text": "scarcely"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "instead"
      }
    ],
    "correctOptionId": "a",
    "connector": "definitely",
    "family": "emphasis",
    "translation": "Definitivamente / Com certeza",
    "explanation": "'Definitely' expressa certeza absoluta e validação técnica comprovada pela POC.",
    "fullSentence": "My team made a POC (Proof of Concept) and, definitely, we can build the program.",
    "sentenceTranslation": "Meu time fez uma POC (Prova de Conceito) e, com certeza, nós conseguimos construir o programa.",
    "whyCorrect": "'Definitely' reforça que o teste de viabilidade deu 100% de segurança técnica para avançar.",
    "whyOthersFail": "'Scarcely' significa 'quase não / malmente'. 'Unless' indica condição negativa. 'Instead' requer alternativa anterior.",
    "proTip": "Lembre-se da escrita: D-E-F-I-N-I-T-E-L-Y. Dica de pronúncia: a sílaba tônica é na primeira: 'DE-fi-nit-ly'."
  },
  {
    "id": "q-user-meanwhile-tech",
    "prompt": "The frontend engineers started building the user interface. _____, the backend team set up the database schemas and authentication endpoints.",
    "options": [
      {
        "id": "a",
        "text": "Meanwhile"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Despite"
      },
      {
        "id": "d",
        "text": "Because"
      }
    ],
    "correctOptionId": "a",
    "connector": "Meanwhile",
    "family": "time",
    "translation": "Enquanto isso / Nesse meio tempo",
    "explanation": "'Meanwhile' marca ações simultâneas e paralelas coordenadas entre dois times.",
    "fullSentence": "The frontend engineers started building the user interface. Meanwhile, the backend team set up the database schemas and authentication endpoints.",
    "sentenceTranslation": "Os engenheiros frontend começaram a construir a interface de usuário. Enquanto isso, o time backend configurou os esquemas de banco e endpoints de autenticação.",
    "whyCorrect": "'Meanwhile' é a palavra de transição perfeita para orações consecutivas narrando atividades em paralelo.",
    "whyOthersFail": "'Unless' introduz uma condição negativa. 'Despite' requer substantivo. 'Because' exige oração causal subordinada.",
    "proTip": "'Meanwhile' escreve-se tudo junto em uma única palavra. Sempre seguido de vírgula quando inicia a frase!"
  },
  {
    "id": "q-user-nor-tech",
    "prompt": "We like neither Java _____ Spring frameworks.",
    "options": [
      {
        "id": "a",
        "text": "or"
      },
      {
        "id": "b",
        "text": "nor"
      },
      {
        "id": "c",
        "text": "and"
      },
      {
        "id": "d",
        "text": "but"
      }
    ],
    "correctOptionId": "b",
    "connector": "nor",
    "family": "contrast",
    "translation": "Nem",
    "explanation": "'Nor' é o par correlativo obrigatório de 'Neither' (Neither... nor).",
    "fullSentence": "We like neither Java nor Spring frameworks.",
    "sentenceTranslation": "Nós não gostamos nem de Java nem dos frameworks Spring.",
    "whyCorrect": "A regra gramatical é estrita: 'Either' faz par com 'or'; 'Neither' faz par com 'nor'.",
    "whyOthersFail": "'Neither... or' é um erro gramatical muito comum em testes. O par correto de 'neither' é exclusivamente 'nor'.",
    "proTip": "Mnemônica de Ouro do Professor: N com N (Neither... Nor). Sem N com sem N (Either... Or)!"
  },
  {
    "id": "q-user-only-if-cinthia",
    "prompt": "I’m going to the party, _____ Cinthia goes too.",
    "options": [
      {
        "id": "a",
        "text": "only if"
      },
      {
        "id": "b",
        "text": "instead of"
      },
      {
        "id": "c",
        "text": "in spite of"
      },
      {
        "id": "d",
        "text": "whereas"
      }
    ],
    "correctOptionId": "a",
    "connector": "only if",
    "family": "condition",
    "translation": "Apenas se / Só se",
    "explanation": "'Only if' estabelece uma condição estrita e inegociável.",
    "fullSentence": "I’m going to the party, only if Cinthia goes too.",
    "sentenceTranslation": "Eu vou à festa, apenas se a Cinthia for também.",
    "whyCorrect": "'Only if' mostra que a ida à festa depende exclusivamente da presença da Cinthia.",
    "whyOthersFail": "'Instead of' exigiria gerúndio. 'In spite of' expressaria concessão. 'Whereas' contrasta dois fatos.",
    "proTip": "'Only if' = 'SÓ SE'. Se a condição não acontecer, a ação principal não acontece de jeito nenhum!"
  },
  {
    "id": "q-user-otherwise-joke",
    "prompt": "First, I’ll call the flight attendant, _____ I will call 911 and they fight (eles que lutem)!",
    "options": [
      {
        "id": "a",
        "text": "otherwise"
      },
      {
        "id": "b",
        "text": "likewise"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "otherwise",
    "family": "condition",
    "translation": "Senão / Caso contrário",
    "explanation": "'Otherwise' introduz a alternativa ou consequência direta caso o primeiro passo não resolva.",
    "fullSentence": "First, I’ll call the flight attendant, otherwise I will call 911 and they fight!",
    "sentenceTranslation": "Primeiro vou chamar o comissário de bordo, senão vou ligar para o 911 e eles que lutem!",
    "whyCorrect": "'Otherwise' funciona como 'do contrário / senão', estabelecendo o plano B imediato.",
    "whyOthersFail": "'Likewise' expressa 'da mesma forma'. 'As well as' expressa 'assim como'. 'Due to' expressa 'devido a'.",
    "proTip": "Use 'Otherwise' sempre que quiser expressar: 'Faça X, do contrário vai acontecer Y'."
  },
  {
    "id": "q-user-since-gft",
    "prompt": "I have been working at GFT _____ 2022.",
    "options": [
      {
        "id": "a",
        "text": "for"
      },
      {
        "id": "b",
        "text": "since"
      },
      {
        "id": "c",
        "text": "during"
      },
      {
        "id": "d",
        "text": "while"
      }
    ],
    "correctOptionId": "b",
    "connector": "since",
    "family": "cause",
    "translation": "Desde",
    "explanation": "'Since' marca o ponto de partida específico no tempo acompanhado de Present Perfect Continuous.",
    "fullSentence": "I have been working at GFT since 2022.",
    "sentenceTranslation": "Eu venho trabalhando na GFT desde 2022.",
    "whyCorrect": "Com ano exato (2022), usamos 'since' para indicar quando a ação começou.",
    "whyOthersFail": "'For' seria usado para a duração total calculada ('for 4 years'), não para o ano específico. 'During' e 'while' não marcam ponto de início com Present Perfect.",
    "proTip": "Regra clássica de entrevista: Ponto de partida específico (2022, yesterday, last month) = SINCE. Período de tempo corrido (3 years, 2 months) = FOR."
  },
  {
    "id": "q-user-so-career",
    "prompt": "Actually, I’m not working as a software developer, _____ I don’t code anymore.",
    "options": [
      {
        "id": "a",
        "text": "so"
      },
      {
        "id": "b",
        "text": "although"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "so",
    "family": "cause",
    "translation": "Então / Por isso",
    "explanation": "'So' conecta uma circunstância à sua decorrência lógica direta na vida profissional.",
    "fullSentence": "Actually, I’m not working as a software developer, so I don’t code anymore.",
    "sentenceTranslation": "Na verdade, não estou trabalhando como desenvolvedor de software, por isso não programo mais.",
    "whyCorrect": "'So' introduz o resultado natural da mudança de cargo.",
    "whyOthersFail": "'Although' expressaria contraste. 'Unless' expressaria condição negativa. 'In order to' expressaria finalidade com verbo no infinitivo.",
    "proTip": "'So' é o conector de causa e consequência mais natural e direto da conversa cotidiana!"
  },
  {
    "id": "q-user-such-as-frameworks",
    "prompt": "When we manage projects, it’s necessary to use some frameworks _____ Scrum and SAFe.",
    "options": [
      {
        "id": "a",
        "text": "such as"
      },
      {
        "id": "b",
        "text": "as far as"
      },
      {
        "id": "c",
        "text": "in spite of"
      },
      {
        "id": "d",
        "text": "instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "such as",
    "family": "example",
    "translation": "Tal como / Como por exemplo",
    "explanation": "'Such as' é a locução padrão para listar exemplos dentro de uma categoria de ferramentas ou metodologias.",
    "fullSentence": "When we manage projects, it’s necessary to use some frameworks such as Scrum and SAFe.",
    "sentenceTranslation": "Quando gerenciamos projetos, é necessário utilizar alguns frameworks tais como Scrum e SAFe.",
    "whyCorrect": "'Such as' introduz Scrum e SAFe como exemplos concretos da categoria 'frameworks'.",
    "whyOthersFail": "'As far as' indica limitação de conhecimento ('as far as I know'). 'In spite of' expressa concessão. 'Instead of' indicaria exclusão.",
    "proTip": "Use 'such as' ao invés de apenas 'like' em relatórios e documentações técnicas para elevar o nível do seu inglês escrito."
  },
  {
    "id": "q-user-thats-why-mongodb",
    "prompt": "You didn’t fix the table on MongoDB. _____ the problem wasn’t solved.",
    "options": [
      {
        "id": "a",
        "text": "Even though"
      },
      {
        "id": "b",
        "text": "That's why"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "b",
    "connector": "That's why",
    "family": "cause",
    "translation": "Por isso / É por isso que",
    "explanation": "'That's why' liga a causa (não corrigir a collection no MongoDB) diretamente ao problema persistente.",
    "fullSentence": "You didn’t fix the table on MongoDB. That's why the problem wasn’t solved.",
    "sentenceTranslation": "Você não corrigiu a tabela no MongoDB. É por isso que o problema não foi resolvido.",
    "whyCorrect": "'That's why' enfatiza o motivo pelo qual o resultado indesejado aconteceu.",
    "whyOthersFail": "'Even though' exigiria contraste na mesma oração. 'Unless' é condicional. 'Instead of' requer substantivo ou gerúndio.",
    "proTip": "'That's why...' é a forma mais empática e clara de explicar causas em post-mortems e revisões de bugs com a squad!"
  },
  {
    "id": "q-user-then-sprint",
    "prompt": "We held the Sprint Planning meeting. _____, the team began working on the stories.",
    "options": [
      {
        "id": "a",
        "text": "Then"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Because of"
      },
      {
        "id": "d",
        "text": "Despite"
      }
    ],
    "correctOptionId": "a",
    "connector": "Then",
    "family": "time",
    "translation": "Então / Em seguida",
    "explanation": "'Then' marca o próximo passo cronológico no fluxo de trabalho ágil.",
    "fullSentence": "We held the Sprint Planning meeting. Then, the team began working on the stories.",
    "sentenceTranslation": "Realizamos a reunião de Sprint Planning. Em seguida, a equipe começou a trabalhar nas histórias.",
    "whyCorrect": "'Then' estabelece a ordem temporal imediata: planejamento primeiro, desenvolvimento depois.",
    "whyOthersFail": "'Unless' introduz condição. 'Because of' e 'Despite' exigem substantivo e não iniciam orações independentes desse modo.",
    "proTip": "A sequência clássica de processos em TI: 'First [passo 1], then [passo 2], finally [conclusão]'."
  },
  {
    "id": "q-user-though-tough-day",
    "prompt": "It was a very tough day. I did everything that I needed to, _____.",
    "options": [
      {
        "id": "a",
        "text": "although"
      },
      {
        "id": "b",
        "text": "though"
      },
      {
        "id": "c",
        "text": "because"
      },
      {
        "id": "d",
        "text": "so that"
      }
    ],
    "correctOptionId": "b",
    "connector": "though",
    "family": "contrast",
    "translation": "No entanto / Porém (no fim da frase)",
    "explanation": "No inglês falado e informal, 'though' no final da frase significa 'however / mas'.",
    "fullSentence": "It was a very tough day. I did everything that I needed to, though.",
    "sentenceTranslation": "Foi um dia muito difícil. Eu fiz tudo o que precisava, porém.",
    "whyCorrect": "'Though' no fim de frase é extremamente natural em inglês nativo para dar o tom de superação e contraste.",
    "whyOthersFail": "'Although' NÃO é usado sozinho no fim da frase. 'Because' e 'so that' exigem oração subsequente.",
    "proTip": "Dica de Ouro de Fluência: Colocar 'though' no fim da frase ('I'm tired. I'll go, though') faz você soar fluente como um nativo!"
  },
  {
    "id": "q-user-thus-automation",
    "prompt": "The squad increased automation coverage. _____, manual effort was reduced.",
    "options": [
      {
        "id": "a",
        "text": "Thus"
      },
      {
        "id": "b",
        "text": "Whereas"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "In spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "Thus",
    "family": "cause",
    "translation": "Dessa forma / Portanto",
    "explanation": "'Thus' é um conector formal que expressa decorrência direta em relatórios de métricas.",
    "fullSentence": "The squad increased automation coverage. Thus, manual effort was reduced.",
    "sentenceTranslation": "A squad aumentou a cobertura de automação. Dessa forma, o esforço manual foi reduzido.",
    "whyCorrect": "'Thus' expressa o resultado técnico positivo alcançado pela ação.",
    "whyOthersFail": "'Whereas' estabelece contraste analítico. 'Unless' expressa condição negativa. 'In spite of' expressa concessão.",
    "proTip": "'Thus' é extremamente valorizado em apresentações executivas e métricas de DevOps (DORA metrics)!"
  },
  {
    "id": "q-user-to-sum-up-prod",
    "prompt": "_____, after all that you said, you finished the deployment in production.",
    "options": [
      {
        "id": "a",
        "text": "To sum up"
      },
      {
        "id": "b",
        "text": "In case"
      },
      {
        "id": "c",
        "text": "Due to"
      },
      {
        "id": "d",
        "text": "Because of"
      }
    ],
    "correctOptionId": "a",
    "connector": "To sum up",
    "family": "summary",
    "translation": "Para resumir / Em suma",
    "explanation": "'To sum up' conclui uma explicação longa sintetizando o desfecho principal.",
    "fullSentence": "To sum up, after all that you said, you finished the deployment in production.",
    "sentenceTranslation": "Para resumir, depois de tudo o que você disse, você concluiu o deploy em produção.",
    "whyCorrect": "'To sum up' condensa a conversa e vai direto ao ponto central que importava.",
    "whyOthersFail": "'In case' expressa precaução. 'Due to' e 'Because of' exigiriam um substantivo causal.",
    "proTip": "Use 'To sum up...' ao liderar reuniões de fechamento para alinhar todos no plano de ação final."
  },
  {
    "id": "q-user-unlike-remote",
    "prompt": "_____ my previous job, my current job is fully remote.",
    "options": [
      {
        "id": "a",
        "text": "Unlike"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Instead of"
      },
      {
        "id": "d",
        "text": "Although"
      }
    ],
    "correctOptionId": "a",
    "connector": "Unlike",
    "family": "contrast",
    "translation": "Diferentemente de / Ao contrário de",
    "explanation": "'Unlike' compara duas situações ou empregos destacando a dessemelhança fundamental entre eles.",
    "fullSentence": "Unlike my previous job, my current job is fully remote.",
    "sentenceTranslation": "Diferentemente do meu trabalho anterior, meu trabalho atual é totalmente remoto.",
    "whyCorrect": "'Unlike' recebe um substantivo ('my previous job') para contrapor diretamente ao sujeito seguinte.",
    "whyOthersFail": "'Unless' significa 'a menos que'. 'Instead of' indicaria que você escolheu um em vez de outro no mesmo momento. 'Although' precisaria de oração com verbo conjugado.",
    "proTip": "Lembre-se: UNLIKE = Different from. Muito útil em entrevistas para comparar arquiteturas ou experiências passadas!"
  },
  {
    "id": "q-user-whereas-scrum-kanban",
    "prompt": "Scrum focuses on short iterations, _____ Kanban focuses on continuous flow.",
    "options": [
      {
        "id": "a",
        "text": "whereas"
      },
      {
        "id": "b",
        "text": "so that"
      },
      {
        "id": "c",
        "text": "due to"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "whereas",
    "family": "contrast",
    "translation": "Ao passo que / Enquanto que",
    "explanation": "'Whereas' contrapõe duas abordagens metodológicas distintas na mesma oração.",
    "fullSentence": "Scrum focuses on short iterations, whereas Kanban focuses on continuous flow.",
    "sentenceTranslation": "O Scrum foca em iterações curtas, ao passo que o Kanban foca em fluxo contínuo.",
    "whyCorrect": "'Whereas' é o conector clássico para confrontar duas filosofias de trabalho paralelas.",
    "whyOthersFail": "'So that' e 'in order to' expressam objetivo/finalidade. 'Due to' exige substantivo de causa.",
    "proTip": "'Whereas' é perfeito para perguntas conceituais de entrevistas de arquitetura ágil!"
  },
  {
    "id": "q-user-whether-decide",
    "prompt": "We need to decide _____ to stay or leave.",
    "options": [
      {
        "id": "a",
        "text": "whether"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "because"
      },
      {
        "id": "d",
        "text": "despite"
      }
    ],
    "correctOptionId": "a",
    "connector": "whether",
    "family": "condition",
    "translation": "Se (duas opções em escolha)",
    "explanation": "'Whether' é usado quando há duas alternativas explícitas ligadas por 'or' com infinitivo 'to'.",
    "fullSentence": "We need to decide whether to stay or leave.",
    "sentenceTranslation": "Precisamos decidir se ficamos ou vamos embora.",
    "whyCorrect": "Antes de verbos no infinitivo ('to stay or leave'), usa-se obrigatoriamente 'whether', nunca 'if'.",
    "whyOthersFail": "'If to stay' é incorreto em inglês formal. 'Unless' significa 'a menos que'. 'Because' expressa causa.",
    "proTip": "Regra de Ouro: Viu 'to + verbo' após o conector ou 'or not' explícito? Escolha sempre 'WHETHER'!"
  },
  {
    "id": "q-user-while-expensive",
    "prompt": "_____ the project was successful, it was very expensive.",
    "options": [
      {
        "id": "a",
        "text": "While"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Instead of"
      },
      {
        "id": "d",
        "text": "Because of"
      }
    ],
    "correctOptionId": "a",
    "connector": "While",
    "family": "time",
    "translation": "Embora / Enquanto",
    "explanation": "'While' no início de frase pode atuar como conector concessivo de contraste equivalente a 'although'.",
    "fullSentence": "While the project was successful, it was very expensive.",
    "sentenceTranslation": "Embora o projeto tenha sido bem-sucedido, foi muito caro.",
    "whyCorrect": "'While' reconhece o sucesso inicial antes de contrapor com o custo elevado.",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Instead of' e 'Because of' exigem substantivos.",
    "proTip": "'While' tem dupla função: 1) Temporal ('while I code'); 2) Concessiva ('while I agree, we cannot proceed')."
  },
  {
    "id": "q-user-yet-task",
    "prompt": "The task was difficult, _____ we managed to finish it.",
    "options": [
      {
        "id": "a",
        "text": "yet"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "because"
      },
      {
        "id": "d",
        "text": "so that"
      }
    ],
    "correctOptionId": "a",
    "connector": "yet",
    "family": "contrast",
    "translation": "Contudo / No entanto",
    "explanation": "'Yet' funciona como conjunção adversativa conectando a dificuldade ao triunfo final.",
    "fullSentence": "The task was difficult, yet we managed to finish it.",
    "sentenceTranslation": "A tarefa era difícil, contudo conseguimos finalizá-la.",
    "whyCorrect": "'Yet' traz elegância adversativa equivalente a 'nevertheless' ou 'but'.",
    "whyOthersFail": "'Unless' indicaria condição negativa. 'Because' indicaria que a dificuldade causou o término. 'So that' expressa objetivo.",
    "proTip": "'Yet' como conjunção liga duas orações contrastantes com sofisticação: 'simple, yet effective'."
  },
  {
    "id": "q-user-in-fact-paola",
    "prompt": "_____, I’m not Paola Bracho; I’m an Usurpadora.",
    "options": [
      {
        "id": "a",
        "text": "In fact"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Due to"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "In fact",
    "family": "emphasis",
    "translation": "Na verdade / De fato",
    "explanation": "'In fact' revela a verdade oculta por trás da aparência com tom enfático e divertido.",
    "fullSentence": "In fact, I’m not Paola Bracho; I’m an Usurpadora.",
    "sentenceTranslation": "Na verdade, eu não sou a Paola Bracho; sou uma Usurpadora.",
    "whyCorrect": "'In fact' introduz o desmascaramento factual de uma situação.",
    "whyOthersFail": "'Unless' indica condição. 'Due to' precisa de substantivo de causa. 'Instead of' precisa de gerúndio.",
    "proTip": "Use 'In fact' para introduzir a realidade quando outros têm uma impressão equivocada!"
  },
  {
    "id": "q-user-so-messi",
    "prompt": "I can’t come in advance, _____ I called Leo Messi to inform you. Do you know him?",
    "options": [
      {
        "id": "a",
        "text": "so"
      },
      {
        "id": "b",
        "text": "although"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "despite"
      }
    ],
    "correctOptionId": "a",
    "connector": "so",
    "family": "cause",
    "translation": "Por isso / Então",
    "explanation": "'So' conecta a impossibilidade de comparecer à atitude divertida de mandar o Messi avisar.",
    "fullSentence": "I can’t come in advance, so I called Leo Messi to inform you. Do you know him?",
    "sentenceTranslation": "Não posso ir com antecedência, por isso chamei o Leo Messi para te avisar. Você conhece ele?",
    "whyCorrect": "'So' introduz a consequência direta do impedimento anterior.",
    "whyOthersFail": "'Although' expressa concessão. 'Unless' expressa condição negativa. 'Despite' exige substantivo direto.",
    "proTip": "Uma piada inteligente e descontraída em inglês para quebrar o gelo em reuniões descontraídas!"
  },
  {
    "id": "q-tech-above-all-security",
    "prompt": "_____ all, the engineering squad must ensure that customer data is securely encrypted at rest.",
    "options": [
      {
        "id": "a",
        "text": "Above"
      },
      {
        "id": "b",
        "text": "Over"
      },
      {
        "id": "c",
        "text": "Beyond"
      },
      {
        "id": "d",
        "text": "Beside"
      }
    ],
    "correctOptionId": "a",
    "connector": "Above all",
    "family": "emphasis",
    "translation": "Acima de tudo",
    "explanation": "'Above all' destaca a prioridade inegociável número um na arquitetura de software.",
    "fullSentence": "Above all, the engineering squad must ensure that customer data is securely encrypted at rest.",
    "sentenceTranslation": "Acima de tudo, a squad de engenharia deve garantir que os dados dos clientes estejam criptografados com segurança em repouso.",
    "whyCorrect": "'Above all' é a locução idiomática de maior ênfase para estabelecer o requisito prioritário.",
    "whyOthersFail": "'Over all' (ou overall) significa 'em geral / no cômputo geral'. 'Beyond all' e 'Beside all' não são locuções válidas neste contexto.",
    "proTip": "Em alinhamentos executivos de segurança e conformidade, abra com 'Above all, ...' para capturar total atenção!"
  },
  {
    "id": "q-tech-afterwards-migration",
    "prompt": "We will execute the database migration script first; _____, we will verify table indexes and cache consistency.",
    "options": [
      {
        "id": "a",
        "text": "meanwhile"
      },
      {
        "id": "b",
        "text": "afterwards"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "because"
      }
    ],
    "correctOptionId": "b",
    "connector": "afterwards",
    "family": "time",
    "translation": "Posteriormente / Depois",
    "explanation": "'Afterwards' estabelece a etapa técnica que ocorre logo após a conclusão da anterior.",
    "fullSentence": "We will execute the database migration script first; afterwards, we will verify table indexes and cache consistency.",
    "sentenceTranslation": "Executaremos o script de migração de banco primeiro; depois, verificaremos os índices das tabelas e a consistência do cache.",
    "whyCorrect": "'Afterwards' conecta o passo sequencial imediato de validação pós-migração.",
    "whyOthersFail": "'Meanwhile' indicaria que as duas ações ocorreriam ao mesmo tempo (o que corromperia os índices). 'Unless' é condicional. 'Because' é causal.",
    "proTip": "Padrão de documentação de Runbook: '[Ação de risco] first; afterwards, [etapa de validação]'."
  },
  {
    "id": "q-tech-all-in-all-sprint",
    "prompt": "We faced two flaky automated tests, but _____ in all, the squad met every single sprint goal.",
    "options": [
      {
        "id": "a",
        "text": "all"
      },
      {
        "id": "b",
        "text": "most"
      },
      {
        "id": "c",
        "text": "overall"
      },
      {
        "id": "d",
        "text": "at"
      }
    ],
    "correctOptionId": "a",
    "connector": "All in all",
    "family": "summary",
    "translation": "Em suma / De tudo em tudo",
    "explanation": "'All in all' introduz a conclusão geral equilibrada da Sprint.",
    "fullSentence": "We faced two flaky automated tests, but all in all, the squad met every single sprint goal.",
    "sentenceTranslation": "Enfrentamos dois testes automatizados instáveis, mas no geral, a squad atingiu cada uma das metas da sprint.",
    "whyCorrect": "A locução idiomática fixa é 'all in all'.",
    "whyOthersFail": "'Most in all' não existe. 'Overall in all' é redundante. 'At in all' é agramatical.",
    "proTip": "Use 'All in all' na abertura da Retrospectiva para reconhecer os desafios antes de celebrar as entregas!"
  },
  {
    "id": "q-tech-apart-from-pr",
    "prompt": "_____ from a minor CSS formatting issue on the navbar, the pull request looks clean and ready to merge.",
    "options": [
      {
        "id": "a",
        "text": "Apart"
      },
      {
        "id": "b",
        "text": "Instead"
      },
      {
        "id": "c",
        "text": "Unlike"
      },
      {
        "id": "d",
        "text": "Despite"
      }
    ],
    "correctOptionId": "a",
    "connector": "Apart from",
    "family": "substitution",
    "translation": "Excetuando / À parte de",
    "explanation": "'Apart from' isola a única pendência irrelevante de um código que está excelente.",
    "fullSentence": "Apart from a minor CSS formatting issue on the navbar, the pull request looks clean and ready to merge.",
    "sentenceTranslation": "Excetuando uma pequena questão de formatação CSS na barra de navegação, o pull request está limpo e pronto para o merge.",
    "whyCorrect": "'Apart from' é a locução consagrada para indicar exceção pontual antes de aprovar um PR.",
    "whyOthersFail": "'Instead from' não existe (é 'instead of'). 'Unlike' compara diferenças entre entidades. 'Despite' não leva preposição 'from'.",
    "proTip": "Ao fazer Code Review no GitHub, use 'Apart from [detalhe], LGTM (Looks Good To Me)!' para dar feedback construtivo e rápido."
  },
  {
    "id": "q-tech-as-long-as-deploy",
    "prompt": "You can push your hotfix to staging, _____ as all automated smoke tests pass successfully.",
    "options": [
      {
        "id": "a",
        "text": "as far"
      },
      {
        "id": "b",
        "text": "as long"
      },
      {
        "id": "c",
        "text": "as well"
      },
      {
        "id": "d",
        "text": "so far"
      }
    ],
    "correctOptionId": "b",
    "connector": "As long as",
    "family": "condition",
    "translation": "Contanto que / Desde que",
    "explanation": "'As long as' define a condição obrigatória para permitir o deploy contínuo.",
    "fullSentence": "You can push your hotfix to staging, as long as all automated smoke tests pass successfully.",
    "sentenceTranslation": "Você pode subir seu hotfix para staging, contanto que todos os testes de fumaça automatizados passem com sucesso.",
    "whyCorrect": "'As long as' expressa a condição prévia mantida ativa durante todo o processo.",
    "whyOthersFail": "'As far as' limita conhecimento ('as far as I know'). 'As well as' significa 'assim como'. 'So far as' não é o padrão condicional aqui.",
    "proTip": "Definição de Pronto (Definition of Done): 'Features can be merged as long as code coverage stays above 80%'."
  },
  {
    "id": "q-tech-because-of-env",
    "prompt": "The Docker container failed to start _____ a missing environment variable in the production config.",
    "options": [
      {
        "id": "a",
        "text": "because"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "as well as"
      }
    ],
    "correctOptionId": "b",
    "connector": "because of",
    "family": "cause",
    "translation": "Por causa de",
    "explanation": "'Because of' é seguido diretamente de um sintagma nominal ('a missing environment variable').",
    "fullSentence": "The Docker container failed to start because of a missing environment variable in the production config.",
    "sentenceTranslation": "O container Docker falhou ao iniciar por causa de uma variável de ambiente ausente na configuração de produção.",
    "whyCorrect": "Como não temos um verbo conjugado logo após a lacuna (temos apenas o substantivo 'a missing environment variable'), exige-se 'because of'.",
    "whyOthersFail": "'Because' exigiria oração completa com verbo ('because an environment variable was missing'). 'In order to' expressa objetivo. 'As well as' adiciona.",
    "proTip": "Regra infalível do Professor: [Substantivo puro após a lacuna]? Use 'Because of'! [Sujeito + Verbo]? Use 'Because'!"
  },
  {
    "id": "q-tech-beforehand-backlog",
    "prompt": "The Product Owner refines complex user stories _____ so that developers face zero ambiguity during sprint planning.",
    "options": [
      {
        "id": "a",
        "text": "afterwards"
      },
      {
        "id": "b",
        "text": "beforehand"
      },
      {
        "id": "c",
        "text": "meanwhile"
      },
      {
        "id": "d",
        "text": "instead"
      }
    ],
    "correctOptionId": "b",
    "connector": "beforehand",
    "family": "time",
    "translation": "De antemão / Previamente",
    "explanation": "'Beforehand' indica preparação prévia para evitar gargalos na Sprint.",
    "fullSentence": "The Product Owner refines complex user stories beforehand so that developers face zero ambiguity during sprint planning.",
    "sentenceTranslation": "O Product Owner refina histórias de usuário complexas de antemão para que os desenvolvedores não enfrentem ambiguidades durante o planejamento da sprint.",
    "whyCorrect": "'Beforehand' sinaliza que o refinamento ocorreu com antecedência ao evento principal.",
    "whyOthersFail": "'Afterwards' significaria depois da reunião (tarde demais). 'Meanwhile' indicaria simultaneidade. 'Instead' indicaria substituição.",
    "proTip": "No vocabulário de Product Management: 'Grooming backlog stories beforehand saves hours of planning meetings!'"
  },
  {
    "id": "q-tech-besides-cache",
    "prompt": "This Redis caching layer reduces database load; _____, it slashes API response times from 400ms down to 18ms.",
    "options": [
      {
        "id": "a",
        "text": "besides"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "despite"
      },
      {
        "id": "d",
        "text": "instead"
      }
    ],
    "correctOptionId": "a",
    "connector": "besides",
    "family": "addition",
    "translation": "Além disso",
    "explanation": "'Besides' adiciona um benefício técnico ainda mais expressivo ao que já foi citado.",
    "fullSentence": "This Redis caching layer reduces database load; besides, it slashes API response times from 400ms down to 18ms.",
    "sentenceTranslation": "Esta camada de cache Redis reduz a carga do banco de dados; além disso, ela reduz o tempo de resposta da API de 400ms para 18ms.",
    "whyCorrect": "'Besides' conecta argumentos aditivos de reforço ('além do mais / por cima').",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Despite' exige substantivo concessivo. 'Instead' exigiria substituição de alternativa.",
    "proTip": "Ao defender uma proposta de arquitetura: cite o benefício primário e adicione 'besides, ...' com as métricas secundárias!"
  },
  {
    "id": "q-tech-consequently-tests",
    "prompt": "The squad did not mock external payment endpoints; _____, the automated pipeline timed out during unit testing.",
    "options": [
      {
        "id": "a",
        "text": "consequently"
      },
      {
        "id": "b",
        "text": "however"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "in spite"
      }
    ],
    "correctOptionId": "a",
    "connector": "consequently",
    "family": "cause",
    "translation": "Consequentemente",
    "explanation": "'Consequently' expressa a relação causal estrita entre a ausência de mocks e o timeout da pipeline.",
    "fullSentence": "The squad did not mock external payment endpoints; consequently, the automated pipeline timed out during unit testing.",
    "sentenceTranslation": "A squad não mockou os endpoints externos de pagamento; consequentemente, a pipeline automatizada deu timeout durante os testes unitários.",
    "whyCorrect": "'Consequently' é a palavra de transição formal ideal para relatórios técnicos de falhas e post-mortems.",
    "whyOthersFail": "'However' expressaria oposição. 'Unless' expressa condição negativa. 'In spite' exige 'of' e tem sentido de concessão.",
    "proTip": "Use 'Consequently' na redação de incidentes de produção para conectar a causa-raiz (root cause) ao impacto sofrido pelo usuário."
  },
  {
    "id": "q-tech-currently-cloud",
    "prompt": "Our engineering organization is _____ migrating all on-premise microservices to a managed Kubernetes cluster.",
    "options": [
      {
        "id": "a",
        "text": "currently"
      },
      {
        "id": "b",
        "text": "actually"
      },
      {
        "id": "c",
        "text": "eventually"
      },
      {
        "id": "d",
        "text": "hardly"
      }
    ],
    "correctOptionId": "a",
    "connector": "currently",
    "family": "time",
    "translation": "Atualmente",
    "explanation": "'Currently' indica que o processo de migração está em andamento no momento presente.",
    "fullSentence": "Our engineering organization is currently migrating all on-premise microservices to a managed Kubernetes cluster.",
    "sentenceTranslation": "Nossa organização de engenharia está atualmente migrando todos os microsserviços locais para um cluster Kubernetes gerenciado.",
    "whyCorrect": "'Currently' descreve uma ação em andamento no presente ('neste momento').",
    "whyOthersFail": "'Actually' é um falso amigo clássico e significa 'na verdade', não 'atualmente'. 'Eventually' significa 'com o tempo / no final das contas'. 'Hardly' significa 'quase não'.",
    "proTip": "Atenção máxima de fluência: NUNCA diga 'We are actually migrating' quando quiser dizer 'Estamos atualmente migrando'. Diga 'We are CURRENTLY migrating'!"
  },
  {
    "id": "q-tech-due-to-black-friday",
    "prompt": "The release freeze was enforced _____ high traffic volume expected during Black Friday week.",
    "options": [
      {
        "id": "a",
        "text": "due to"
      },
      {
        "id": "b",
        "text": "because"
      },
      {
        "id": "c",
        "text": "even if"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "due to",
    "family": "cause",
    "translation": "Devido a",
    "explanation": "'Due to' liga o congelamento de código (release freeze) à sua causa direta substantiva ('high traffic volume').",
    "fullSentence": "The release freeze was enforced due to high traffic volume expected during Black Friday week.",
    "sentenceTranslation": "O congelamento de releases foi aplicado devido ao alto volume de tráfego esperado durante a semana da Black Friday.",
    "whyCorrect": "'Due to' é seguido diretamente de substantivo ('high traffic volume') para apontar a causa oficial.",
    "whyOthersFail": "'Because' exigiria uma oração completa com verbo ('because high traffic volume was expected'). 'Even if' é condicional. 'In order to' expressa finalidade com infinitivo.",
    "proTip": "'Due to + [substantivo]' é a linguagem padrão em memorandos de Change Management e estabilidade de sistemas."
  },
  {
    "id": "q-tech-even-if-auth",
    "prompt": "_____ if the primary authentication provider goes down, our service maintains session validation via JWT signatures.",
    "options": [
      {
        "id": "a",
        "text": "Even"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Because"
      }
    ],
    "correctOptionId": "a",
    "connector": "Even if",
    "family": "condition",
    "translation": "Mesmo se (hipotético)",
    "explanation": "'Even if' introduz uma condição adversa extrema que a arquitetura resiliente consegue suportar.",
    "fullSentence": "Even if the primary authentication provider goes down, our service maintains session validation via JWT signatures.",
    "sentenceTranslation": "Mesmo se o provedor primário de autenticação cair, nosso serviço mantém a validação de sessão por meio de assinaturas JWT.",
    "whyCorrect": "'Even if' é a locução condicional perfeita para cenários de resiliência e alta disponibilidade.",
    "whyOthersFail": "'Despite if' não existe na gramática inglesa. 'Unless if' é redundante e incorreto. 'Because if' geraria sentido confuso.",
    "proTip": "Ao desenhar arquiteturas tolerantes a falhas: use 'Even if [componente] fails, our system still [comportamento seguro]'."
  },
  {
    "id": "q-tech-even-though-legacy",
    "prompt": "_____ though the codebase was written in legacy PHP, the developers succeeded in building automated CI tests.",
    "options": [
      {
        "id": "a",
        "text": "Even"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Instead"
      },
      {
        "id": "d",
        "text": "Unless"
      }
    ],
    "correctOptionId": "a",
    "connector": "Even though",
    "family": "contrast",
    "translation": "Embora / Apesar de que (fato real)",
    "explanation": "'Even though' forma o conector concessivo enfático que introduz o fato histórico real do código legado.",
    "fullSentence": "Even though the codebase was written in legacy PHP, the developers succeeded in building automated CI tests.",
    "sentenceTranslation": "Embora a base de código tenha sido escrita em PHP legado, os desenvolvedores tiveram sucesso em criar testes automatizados de CI.",
    "whyCorrect": "'Even though' é o par consagrado de concessão enfática seguido de sujeito e verbo.",
    "whyOthersFail": "'Despite though' é agramatical. 'Instead though' não existe. 'Unless though' é incorreto.",
    "proTip": "Diferença vital: 'Even though' trata de um fato real conhecido ('o código ERA legado'). 'Even if' trata de uma hipótese futura incerta."
  },
  {
    "id": "q-tech-furthermore-cluster",
    "prompt": "The new cloud cluster automatically scales pods on demand; _____, it isolates sensitive tenant data in separate namespaces.",
    "options": [
      {
        "id": "a",
        "text": "furthermore"
      },
      {
        "id": "b",
        "text": "however"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "furthermore",
    "family": "addition",
    "translation": "Além disso / Ademais",
    "explanation": "'Furthermore' adiciona um segundo argumento arquitetural de igual relevância técnica.",
    "fullSentence": "The new cloud cluster automatically scales pods on demand; furthermore, it isolates sensitive tenant data in separate namespaces.",
    "sentenceTranslation": "O novo cluster em nuvem escala automaticamente os pods sob demanda; além disso, ele isola dados sensíveis de clientes em namespaces separados.",
    "whyCorrect": "'Furthermore' é um conector formal aditivo que agrega valor técnico em relatórios de arquitetura.",
    "whyOthersFail": "'However' indicaria contradição. 'Unless' indicaria condição negativa. 'Rather than' expressa preferência.",
    "proTip": "'Furthermore' e 'Moreover' são os conectores formais de ouro para redação de RFCs (Request for Comments) e ADRs!"
  },
  {
    "id": "q-tech-hence-legacy",
    "prompt": "The monolithic backend reached its horizontal scaling limit, _____ the architecture team decided to split it into domain services.",
    "options": [
      {
        "id": "a",
        "text": "hence"
      },
      {
        "id": "b",
        "text": "despite"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "whereas"
      }
    ],
    "correctOptionId": "a",
    "connector": "hence",
    "family": "cause",
    "translation": "Portanto / Por isso",
    "explanation": "'Hence' introduz a decisão de arquitetura como consequência inevitável da limitação física do monólito.",
    "fullSentence": "The monolithic backend reached its horizontal scaling limit, hence the architecture team decided to split it into domain services.",
    "sentenceTranslation": "O backend monolítico atingiu seu limite de escalabilidade horizontal, por isso o time de arquitetura decidiu dividi-lo em serviços de domínio.",
    "whyCorrect": "'Hence' é a palavra de transição causal concisa e de prestígio em engenharia de software.",
    "whyOthersFail": "'Despite' requer substantivo concessivo. 'Unless' expressa exceção. 'Whereas' contrapõe duas realidades divergentes.",
    "proTip": "'Hence' pode ser seguido de oração completa ou diretamente de substantivo: 'The service was slow, hence the rewrite'."
  },
  {
    "id": "q-tech-in-advance-migration",
    "prompt": "Please inform the on-call DevOps squad _____ if you plan to execute a bulk database schema migration.",
    "options": [
      {
        "id": "a",
        "text": "in advance"
      },
      {
        "id": "b",
        "text": "at all"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "in advance",
    "family": "time",
    "translation": "Com antecedência / De antemão",
    "explanation": "'In advance' instrui o time a realizar o aviso prévio para preparar o plantão de suporte.",
    "fullSentence": "Please inform the on-call DevOps squad in advance if you plan to execute a bulk database schema migration.",
    "sentenceTranslation": "Por favor informe a squad de DevOps de plantão com antecedência se você planeja executar uma migração em massa de esquema de banco.",
    "whyCorrect": "'In advance' denota antecedência temporal em procedimentos operacionais padrão (SOP).",
    "whyOthersFail": "'At all' é partícula enfática de fim de frase negativa. 'As well as' conecta termos aditivos. 'Due to' introduz causas.",
    "proTip": "Boas práticas de engenharia: 'Always notify the on-call engineer in advance before running database drops or index rebuilds!'"
  },
  {
    "id": "q-tech-in-case-outage",
    "prompt": "We configured multi-region cross-cloud database backups, _____ the primary AWS region suffers an unexpected outage.",
    "options": [
      {
        "id": "a",
        "text": "in case"
      },
      {
        "id": "b",
        "text": "even if"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "in case",
    "family": "condition",
    "translation": "Para o caso de / No caso de",
    "explanation": "'In case' expressa precaução preventiva tomada ANTES de um desastre em potencial.",
    "fullSentence": "We configured multi-region cross-cloud database backups, in case the primary AWS region suffers an unexpected outage.",
    "sentenceTranslation": "Configuramos backups de banco de dados entre regiões e nuvens, para o caso de a região primária da AWS sofrer uma interrupção inesperada.",
    "whyCorrect": "'In case' explica a razão da precaução (disaster recovery).",
    "whyOthersFail": "'Even if' significaria 'mesmo se sofrer', alterando o propósito da frase preventiva. 'In order to' exige verbo no infinitivo. 'Rather than' expressa preferência.",
    "proTip": "Diferença vital: Você configura o backup 'IN CASE' houver desastre (por precaução preventiva prévia)."
  },
  {
    "id": "q-tech-in-order-to-security",
    "prompt": "The squad implemented strict input sanitization _____ prevent SQL injection attacks.",
    "options": [
      {
        "id": "a",
        "text": "in order to"
      },
      {
        "id": "b",
        "text": "so that"
      },
      {
        "id": "c",
        "text": "because of"
      },
      {
        "id": "d",
        "text": "as far as"
      }
    ],
    "correctOptionId": "a",
    "connector": "in order to",
    "family": "purpose",
    "translation": "A fim de / Para",
    "explanation": "'In order to' expressa propósito seguido de verbo na sua forma base (infinitivo 'prevent').",
    "fullSentence": "The squad implemented strict input sanitization in order to prevent SQL injection attacks.",
    "sentenceTranslation": "A squad implementou uma higienização rigorosa de entradas a fim de prevenir ataques de injeção SQL.",
    "whyCorrect": "'In order to' conecta a ação técnica diretamente à sua finalidade expressa pelo infinitivo 'prevent'.",
    "whyOthersFail": "'So that' exigiria uma oração completa com sujeito e modal ('so that they could prevent'). 'Because of' exige substantivo. 'As far as' limita conhecimento.",
    "proTip": "Viu verbo no infinitivo logo após a lacuna ('prevent', 'improve', 'deploy')? O conector de finalidade correto é 'IN ORDER TO'!"
  },
  {
    "id": "q-tech-instead-of-polling",
    "prompt": "The architect recommended using WebSockets _____ polling the HTTP server every two seconds.",
    "options": [
      {
        "id": "a",
        "text": "instead of"
      },
      {
        "id": "b",
        "text": "apart"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "instead of",
    "family": "substitution",
    "translation": "Em vez de / Ao invés de",
    "explanation": "'Instead of' introduz a abordagem técnica descartada em favor de uma alternativa superior, seguida de gerúndio ('polling').",
    "fullSentence": "The architect recommended using WebSockets instead of polling the HTTP server every two seconds.",
    "sentenceTranslation": "O arquiteto recomendou usar WebSockets em vez de fazer polling no servidor HTTP a cada dois segundos.",
    "whyCorrect": "'Instead of' rege verbos terminados em -ing ('polling') para indicar a substituição de uma prática por outra.",
    "whyOthersFail": "'Apart' exige 'from'. 'Unless' é condicional. 'Due to' expressa causa.",
    "proTip": "Ao sugerir refatorações: 'We should adopt [boa prática] instead of [anti-padrão com -ing]'."
  },
  {
    "id": "q-tech-likewise-standards",
    "prompt": "Senior software engineers must write clean unit tests. _____, junior developers are expected to maintain the same quality standards.",
    "options": [
      {
        "id": "a",
        "text": "Likewise"
      },
      {
        "id": "b",
        "text": "Whereas"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Instead"
      }
    ],
    "correctOptionId": "a",
    "connector": "Likewise",
    "family": "addition",
    "translation": "Semelhantemente / Da mesma forma",
    "explanation": "'Likewise' estabelece que a mesma regra de excelência técnica se aplica com igual rigor a outro grupo.",
    "fullSentence": "Senior software engineers must write clean unit tests. Likewise, junior developers are expected to maintain the same quality standards.",
    "sentenceTranslation": "Engenheiros de software seniores devem escrever testes unitários limpos. Da mesma forma, espera-se que desenvolvedores juniores mantenham os mesmos padrões de qualidade.",
    "whyCorrect": "'Likewise' é o conector formal para transferir o mesmo dever a um elemento análogo.",
    "whyOthersFail": "'Whereas' criaria contraste ou distinção oposta. 'Unless' expressaria condição negativa. 'Instead' indicaria substituição.",
    "proTip": "Use 'Likewise' em guias de cultura de engenharia e diretrizes de desenvolvimento do time!"
  },
  {
    "id": "q-tech-no-longer-legacy",
    "prompt": "Our platform _____ supports legacy TLS 1.0 protocols due to critical security deprecations.",
    "options": [
      {
        "id": "a",
        "text": "no longer"
      },
      {
        "id": "b",
        "text": "at all"
      },
      {
        "id": "c",
        "text": "as well"
      },
      {
        "id": "d",
        "text": "so far"
      }
    ],
    "correctOptionId": "a",
    "connector": "no longer",
    "family": "time",
    "translation": "Não mais",
    "explanation": "'No longer' declara a descontinuação definitiva de um recurso ou protocolo antes suportado.",
    "fullSentence": "Our platform no longer supports legacy TLS 1.0 protocols due to critical security deprecations.",
    "sentenceTranslation": "Nossa plataforma não mais suporta protocolos legados TLS 1.0 devido a descontinuações críticas de segurança.",
    "whyCorrect": "'No longer' posiciona-se naturalmente antes do verbo principal ('supports') para indicar cessação.",
    "whyOthersFail": "'At all' ficaria no final da frase após negação ('does not support... at all'). 'As well' significa 'também'. 'So far' significa 'até agora'.",
    "proTip": "Padrão de Changelog de APIs: 'Endpoint /v1/users is no longer supported. Please migrate to /v2/users'."
  },
  {
    "id": "q-tech-on-the-other-hand-monolith",
    "prompt": "Monolithic architectures are simpler to set up initially. On the _____ hand, microservices allow decoupled team deployments.",
    "options": [
      {
        "id": "a",
        "text": "other"
      },
      {
        "id": "b",
        "text": "second"
      },
      {
        "id": "c",
        "text": "different"
      },
      {
        "id": "d",
        "text": "next"
      }
    ],
    "correctOptionId": "a",
    "connector": "On the other hand",
    "family": "contrast",
    "translation": "Por outro lado",
    "explanation": "'On the other hand' pondera o contraponto clássico entre prós e contras de escolhas arquiteturais.",
    "fullSentence": "Monolithic architectures are simpler to set up initially. On the other hand, microservices allow decoupled team deployments.",
    "sentenceTranslation": "Arquiteturas monolíticas são mais simples de configurar inicialmente. Por outro lado, microsserviços permitem deploys desacoplados entre equipes.",
    "whyCorrect": "A locução fixa de contraposição de perspectivas é 'On the other hand'.",
    "whyOthersFail": "'On the second hand', 'On the different hand' e 'On the next hand' não existem em inglês.",
    "proTip": "Em discussões técnicas de arquitetura: pondere primeiro as vantagens ('On the one hand...'), e em seguida os trade-offs ('On the other hand...')."
  },
  {
    "id": "q-tech-only-if-production",
    "prompt": "The pipeline will trigger the production release _____ if all SonarQube quality gates pass with zero vulnerabilities.",
    "options": [
      {
        "id": "a",
        "text": "only"
      },
      {
        "id": "b",
        "text": "just"
      },
      {
        "id": "c",
        "text": "merely"
      },
      {
        "id": "d",
        "text": "mostly"
      }
    ],
    "correctOptionId": "a",
    "connector": "Only if",
    "family": "condition",
    "translation": "Apenas se / Só se",
    "explanation": "'Only if' estabelece a restrição estrita de qualidade exigida antes do deploy produtivo.",
    "fullSentence": "The pipeline will trigger the production release only if all SonarQube quality gates pass with zero vulnerabilities.",
    "sentenceTranslation": "A pipeline disparará a release de produção apenas se todos os quality gates do SonarQube passarem com zero vulnerabilidades.",
    "whyCorrect": "'Only if' define a barreira de aprovação obrigatória sem exceções.",
    "whyOthersFail": "'Just if' e 'merely if' não formam locuções condicionais estritas na gramática padrão. 'Mostly if' não faz sentido lógico aqui.",
    "proTip": "CI/CD Guardrails: 'Production deployment occurs only if test coverage is >= 85% and security scans are green'."
  },
  {
    "id": "q-tech-otherwise-credentials",
    "prompt": "Store the AWS secret keys in a secure secrets manager; _____, your credentials might be exposed in public repositories.",
    "options": [
      {
        "id": "a",
        "text": "otherwise"
      },
      {
        "id": "b",
        "text": "likewise"
      },
      {
        "id": "c",
        "text": "furthermore"
      },
      {
        "id": "d",
        "text": "moreover"
      }
    ],
    "correctOptionId": "a",
    "connector": "otherwise",
    "family": "condition",
    "translation": "Caso contrário / Senão",
    "explanation": "'Otherwise' introduz a grave consequência negativa de vazamento de segurança caso o procedimento correto não seja adotado.",
    "fullSentence": "Store the AWS secret keys in a secure secrets manager; otherwise, your credentials might be exposed in public repositories.",
    "sentenceTranslation": "Armazene as chaves secretas da AWS em um gerenciador seguro de segredos; caso contrário, suas credenciais podem ser expostas em repositórios públicos.",
    "whyCorrect": "'Otherwise' funciona como 'if you do not do this' para alertar sobre o risco eminente.",
    "whyOthersFail": "'Likewise' expressa analogia positiva. 'Furthermore' e 'moreover' adicionam argumentos, não consequências de desobediência.",
    "proTip": "Excelente conector para instruções de onboarding e guias de segurança da empresa!"
  },
  {
    "id": "q-tech-so-that-ddos",
    "prompt": "We configured API gateway rate limiting _____ the servers can handle unexpected traffic spikes without crashing.",
    "options": [
      {
        "id": "a",
        "text": "so that"
      },
      {
        "id": "b",
        "text": "in order to"
      },
      {
        "id": "c",
        "text": "because of"
      },
      {
        "id": "d",
        "text": "as far as"
      }
    ],
    "correctOptionId": "a",
    "connector": "so that",
    "family": "purpose",
    "translation": "A fim de que / De modo que",
    "explanation": "'So that' é seguido de oração completa com sujeito ('the servers') e verbo modal ('can handle').",
    "fullSentence": "We configured API gateway rate limiting so that the servers can handle unexpected traffic spikes without crashing.",
    "sentenceTranslation": "Configuramos rate limiting no gateway da API a fim de que os servidores possam lidar com picos inesperados de tráfego sem cair.",
    "whyCorrect": "'So that' introduz o propósito quando a segunda oração tem seu próprio sujeito e verbo modal.",
    "whyOthersFail": "'In order to' exigiria infinitivo direto ('in order to handle'), sem o sujeito 'the servers'. 'Because of' exige substantivo. 'As far as' indica alcance de conhecimento.",
    "proTip": "Dica Mestra do Professor: Tem sujeito novo + 'can/could/may/might' logo depois? A resposta é 'SO THAT'!"
  },
  {
    "id": "q-tech-such-as-observability",
    "prompt": "Our DevOps engineers leverage observability tools _____ Grafana, Prometheus, and Datadog to monitor cluster latency.",
    "options": [
      {
        "id": "a",
        "text": "such as"
      },
      {
        "id": "b",
        "text": "as well"
      },
      {
        "id": "c",
        "text": "as far as"
      },
      {
        "id": "d",
        "text": "in spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "such as",
    "family": "example",
    "translation": "Tal como / Como por exemplo",
    "explanation": "'Such as' é a locução prepositiva exata para enumerar exemplos de ferramentas dentro de uma classe.",
    "fullSentence": "Our DevOps engineers leverage observability tools such as Grafana, Prometheus, and Datadog to monitor cluster latency.",
    "sentenceTranslation": "Nossos engenheiros DevOps utilizam ferramentas de observabilidade tais como Grafana, Prometheus e Datadog para monitorar a latência do cluster.",
    "whyCorrect": "'Such as' introduz a lista exemplificativa de tecnologias.",
    "whyOthersFail": "'As well' vai no final da frase com sentido de 'também'. 'As far as' limita conhecimento. 'In spite of' expressa concessão.",
    "proTip": "Em reuniões técnicas internacionais: 'We use modern cloud stacks such as AWS, Docker, and Terraform'."
  },
  {
    "id": "q-tech-then-ci",
    "prompt": "First, the developer opens a pull request. _____, the GitHub Actions workflow triggers automated static code analysis.",
    "options": [
      {
        "id": "a",
        "text": "Then"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Because"
      },
      {
        "id": "d",
        "text": "Despite"
      }
    ],
    "correctOptionId": "a",
    "connector": "Then",
    "family": "time",
    "translation": "Então / Em seguida",
    "explanation": "'Then' marca o passo automático que se segue imediatamente na esteira de integração contínua.",
    "fullSentence": "First, the developer opens a pull request. Then, the GitHub Actions workflow triggers automated static code analysis.",
    "sentenceTranslation": "Primeiro, o desenvolvedor abre um pull request. Em seguida, o fluxo do GitHub Actions dispara a análise estática automatizada de código.",
    "whyCorrect": "'Then' estabelece a ordem cronológica clara de eventos encadeados.",
    "whyOthersFail": "'Unless' é condicional. 'Because' e 'Despite' exigem complementação sintática diferente.",
    "proTip": "A regra de ouro de fluxogramas em inglês: 'First... Then... Next... Finally...'."
  },
  {
    "id": "q-tech-towards-soc2",
    "prompt": "The security team is working diligently _____ achieving SOC 2 Type II compliance before the third quarter audit.",
    "options": [
      {
        "id": "a",
        "text": "towards"
      },
      {
        "id": "b",
        "text": "against"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "in case"
      }
    ],
    "correctOptionId": "a",
    "connector": "towards",
    "family": "purpose",
    "translation": "Rumo a / Em direção a",
    "explanation": "'Towards' expressa movimento de esforço conjunto orientado a uma meta ou certificação corporativa.",
    "fullSentence": "The security team is working diligently towards achieving SOC 2 Type II compliance before the third quarter audit.",
    "sentenceTranslation": "A equipe de segurança está trabalhando diligentemente rumo a obter a conformidade SOC 2 Tipo II antes da auditoria do terceiro trimestre.",
    "whyCorrect": "'Work towards [goal]' é a colocação verbal padrão no mundo corporativo para metas estratégicas.",
    "whyOthersFail": "'Against' indicaria oposição. 'Unless' expressa condição negativa. 'In case' expressa precaução.",
    "proTip": "'Working towards our goals / OKRs' é a frase ideal para apresentações de progresso com gerentes e diretores!"
  },
  {
    "id": "q-tech-unless-cto",
    "prompt": "Never bypass automated pipeline security checks _____ the CTO explicitly approves an emergency production override.",
    "options": [
      {
        "id": "a",
        "text": "unless"
      },
      {
        "id": "b",
        "text": "if"
      },
      {
        "id": "c",
        "text": "because"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "unless",
    "family": "condition",
    "translation": "A menos que / A não ser que",
    "explanation": "'Unless' estabelece a única exceção admissível a uma regra de segurança mandatória ('UNLESS = IF NOT').",
    "fullSentence": "Never bypass automated pipeline security checks unless the CTO explicitly approves an emergency production override.",
    "sentenceTranslation": "Nunca ignore as verificações de segurança da pipeline automatizada a menos que o CTO aprove explicitamente uma autorização emergencial em produção.",
    "whyCorrect": "'Unless' introduz a condição excepcional que quebra a regra proibitiva.",
    "whyOthersFail": "'If' inverteria o sentido para 'nunca ignore se o CTO aprovar' (o que seria o oposto do pretendido). 'Because' atribuiria causa. 'In order to' expressa finalidade.",
    "proTip": "Lembre-se: 'Never do X UNLESS Y happens' = 'Só faça X se Y acontecer'!"
  },
  {
    "id": "q-tech-unlike-kafka",
    "prompt": "_____ synchronous REST endpoints, Apache Kafka message topics decouple producer and consumer services completely.",
    "options": [
      {
        "id": "a",
        "text": "Unlike"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Instead"
      },
      {
        "id": "d",
        "text": "Although"
      }
    ],
    "correctOptionId": "a",
    "connector": "Unlike",
    "family": "contrast",
    "translation": "Ao contrário de / Diferentemente de",
    "explanation": "'Unlike' contrapõe diretamente as características de comunicação síncrona vs mensageria assíncrona.",
    "fullSentence": "Unlike synchronous REST endpoints, Apache Kafka message topics decouple producer and consumer services completely.",
    "sentenceTranslation": "Ao contrário de endpoints REST síncronos, os tópicos de mensagens do Apache Kafka desacoplam completamente os serviços produtores e consumidores.",
    "whyCorrect": "'Unlike' recebe o sintagma nominal ('synchronous REST endpoints') para estabelecer o contraste inicial.",
    "whyOthersFail": "'Unless' é condicional. 'Instead' exige 'of' para receber substantivo. 'Although' exige oração completa com verbo conjugado.",
    "proTip": "Brilhe em entrevistas de arquitetura de software: 'Unlike Monoliths, Microservices allow independent scaling...'!"
  },
  {
    "id": "q-tech-whenever-push",
    "prompt": "_____ a developer merges code into the master branch, the CI/CD pipeline triggers an automated container build.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "Whereas"
      },
      {
        "id": "c",
        "text": "Whatever"
      },
      {
        "id": "d",
        "text": "Wherever"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whenever",
    "family": "time",
    "translation": "Sempre que / Quando quer que seja",
    "explanation": "'Whenever' indica uma regra de automação que dispara a cada ocorrência do evento de merge.",
    "fullSentence": "Whenever a developer merges code into the master branch, the CI/CD pipeline triggers an automated container build.",
    "sentenceTranslation": "Sempre que um desenvolvedor faz o merge de código na branch master, a pipeline de CI/CD dispara a compilação automatizada do container.",
    "whyCorrect": "'Whenever' equivale a 'every time that' para descrever gatilhos de eventos e webhooks.",
    "whyOthersFail": "'Whereas' contrapõe duas realidades. 'Whatever' significa 'o que quer que seja'. 'Wherever' refere-se a lugar.",
    "proTip": "Terminologia clássica de DevOps: 'Whenever an event triggers, the webhook executes the listener function'."
  },
  {
    "id": "q-tech-whether-database",
    "prompt": "The engineering squad is evaluating _____ to migrate to DynamoDB or optimize our existing PostgreSQL instance.",
    "options": [
      {
        "id": "a",
        "text": "whether"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "because"
      },
      {
        "id": "d",
        "text": "although"
      }
    ],
    "correctOptionId": "a",
    "connector": "whether",
    "family": "condition",
    "translation": "Se (duas alternativas em avaliação)",
    "explanation": "'Whether' é o conector formal para orações substantivas que pesam duas opções explícitas conectadas por 'or'.",
    "fullSentence": "The engineering squad is evaluating whether to migrate to DynamoDB or optimize our existing PostgreSQL instance.",
    "sentenceTranslation": "A squad de engenharia está avaliando se deve migrar para o DynamoDB ou otimizar nossa instância PostgreSQL existente.",
    "whyCorrect": "'Whether to [verb] or [verb]' é a estrutura gramatical precisa para análise de alternativas.",
    "whyOthersFail": "'If to migrate' é incorreto na gramática culta inglesa. 'Unless' significa 'a menos que'. 'Because' expressa causa.",
    "proTip": "Sempre que houver alternativas técnicas em debate ('whether X or Y'), use 'Whether'!"
  },
  {
    "id": "q-tech-while-async",
    "prompt": "_____ the backend engineer refactored the database queries, the frontend team built the interactive dashboards.",
    "options": [
      {
        "id": "a",
        "text": "While"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Instead of"
      },
      {
        "id": "d",
        "text": "Due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "While",
    "family": "time",
    "translation": "Enquanto",
    "explanation": "'While' indica duas tarefas técnicas desenvolvidas em paralelo com a mesma duração temporal.",
    "fullSentence": "While the backend engineer refactored the database queries, the frontend team built the interactive dashboards.",
    "sentenceTranslation": "Enquanto o engenheiro backend refatorava as consultas do banco de dados, o time frontend construía os dashboards interativos.",
    "whyCorrect": "'While' rege orações temporais de ações contínuas e simultâneas.",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Instead of' e 'Due to' exigem substantivo ou gerúndio, não oração completa.",
    "proTip": "Use 'While' na Daily Standup para relatar trabalho simultâneo da equipe: 'While John was working on the API, I tested the endpoints'!"
  },
  {
    "id": "q-tech-yet-throughput",
    "prompt": "The architectural refactoring was risky and complex, _____ it yielded an immediate 4x increase in API throughput.",
    "options": [
      {
        "id": "a",
        "text": "yet"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "so that"
      },
      {
        "id": "d",
        "text": "in case"
      }
    ],
    "correctOptionId": "a",
    "connector": "yet",
    "family": "contrast",
    "translation": "Contudo / No entanto",
    "explanation": "'Yet' contrapõe o risco inicial ao ganho impressionante de performance obtido.",
    "fullSentence": "The architectural refactoring was risky and complex, yet it yielded an immediate 4x increase in API throughput.",
    "sentenceTranslation": "A refatoração arquitetural foi arriscada e complexa, contudo proporcionou um aumento imediato de 4x no throughput da API.",
    "whyCorrect": "'Yet' funciona como uma conjunção adversativa concisa e expressiva para destacar um resultado compensador.",
    "whyOthersFail": "'Unless' expressaria condição negativa. 'So that' expressa finalidade. 'In case' expressa precaução.",
    "proTip": "Ao defender projetos de pagamento de dívida técnica (Tech Debt): 'It was hard, yet it solved our scalability bottleneck'!"
  },
  {
    "id": "q-although-1",
    "prompt": "_____ it's raining, I'm going to the beach.",
    "options": [
      {
        "id": "a",
        "text": "Although"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Because of"
      },
      {
        "id": "d",
        "text": "In order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "Although",
    "family": "contrast",
    "translation": "Embora",
    "explanation": "Although introduces a full clause (subject + verb). Despite needs a noun: despite the rain.",
    "fullSentence": "Although it's raining, I'm going to the beach.",
    "sentenceTranslation": "Embora esteja chovendo, eu vou à praia.",
    "whyCorrect": "Usamos 'Although' porque temos uma oração completa (sujeito 'it' + verbo 'is raining') introduzindo uma concessão ou contraste que não impede a ação principal.",
    "whyOthersFail": "'Despite' e 'Because of' exigiriam um substantivo direto ('despite the rain'). 'In order to' expressa finalidade com verbo no infinitivo, não contraste.",
    "proTip": "Regra de Ouro: Viu [Sujeito + Verbo] logo após a lacuna indicando contraste? Use 'Although' ou 'Even though'. Viu substantivo puro? Use 'Despite' ou 'In spite of'."
  },
  {
    "id": "q-as-a-result-1",
    "prompt": "You didn't do your job correctly. _____, our clients are calling us with many problems.",
    "options": [
      {
        "id": "a",
        "text": "However"
      },
      {
        "id": "b",
        "text": "As a result"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "b",
    "connector": "As a result",
    "family": "cause",
    "translation": "Como resultado",
    "explanation": "As a result links a cause to its consequence.",
    "fullSentence": "You didn't do your job correctly. As a result, our clients are calling us with many problems.",
    "sentenceTranslation": "Você não fez seu trabalho corretamente. Como resultado, nossos clientes estão nos ligando com muitos problemas.",
    "whyCorrect": "'As a result' funciona como um conector de transição que introduz o efeito direto ou consequência da ação descrita na frase anterior.",
    "whyOthersFail": "'However' indicaria oposição/contraste, mas aqui temos uma consequência lógica. 'Unless' significa 'a menos que' (condição). 'Instead of' significa 'em vez de'.",
    "proTip": "Memorize: 'As a result' = 'Portanto / Em decorrência disso'. É muito comum no início de uma nova oração após ponto final."
  },
  {
    "id": "q-as-long-as-1",
    "prompt": "_____ you do your homework, you will pass the exam.",
    "options": [
      {
        "id": "a",
        "text": "Because of"
      },
      {
        "id": "b",
        "text": "At last"
      },
      {
        "id": "c",
        "text": "As long as"
      },
      {
        "id": "d",
        "text": "In spite of"
      }
    ],
    "correctOptionId": "c",
    "connector": "As long as",
    "family": "condition",
    "translation": "Contanto que",
    "explanation": "As long as sets a condition that must stay true.",
    "fullSentence": "As long as you do your homework, you will pass the exam.",
    "sentenceTranslation": "Contanto que você faça sua lição de casa, você passará na prova.",
    "whyCorrect": "'As long as' expressa uma condição indispensável e contínua ('contanto que / desde que').",
    "whyOthersFail": "'Because of' exige substantivo e não oração. 'At last' indica tempo decorrido ('finalmente'). 'In spite of' expressa contraste, não condição.",
    "proTip": "'As long as' equivale a 'Provided that' ou 'Only if'. Dica: pense nele como 'com a condição de que'."
  },
  {
    "id": "q-hence-1",
    "prompt": "The feature wasn't done in time, _____ we need to reschedule the project.",
    "options": [
      {
        "id": "a",
        "text": "hence"
      },
      {
        "id": "b",
        "text": "although"
      },
      {
        "id": "c",
        "text": "along with"
      },
      {
        "id": "d",
        "text": "at all"
      }
    ],
    "correctOptionId": "a",
    "connector": "hence",
    "family": "cause",
    "translation": "Portanto / por isso",
    "explanation": "Hence means 'for that reason' and introduces the logical next step.",
    "fullSentence": "The feature wasn't done in time, hence we need to reschedule the project.",
    "sentenceTranslation": "A funcionalidade não ficou pronta a tempo, por isso precisamos reagendar o projeto.",
    "whyCorrect": "'Hence' é um conector formal que expressa decorrência lógica e direta ('por essa razão / por isso / daí').",
    "whyOthersFail": "'Although' expressa concessão. 'Along with' expressa companhia/inclusão. 'At all' é usado para ênfase no fim da frase.",
    "proTip": "'Hence' é amplamente usado em relatórios técnicos e na área de exatas/engenharia como sinônimo elegante de 'therefore' ou 'that's why'."
  },
  {
    "id": "q-even-if-1",
    "prompt": "I will go to the party, _____ you won't go.",
    "options": [
      {
        "id": "a",
        "text": "because of"
      },
      {
        "id": "b",
        "text": "even if"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "as well as"
      }
    ],
    "correctOptionId": "b",
    "connector": "even if",
    "family": "condition",
    "translation": "Mesmo se",
    "explanation": "Even if introduces a hypothetical that does not change the decision.",
    "fullSentence": "I will go to the party, even if you won't go.",
    "sentenceTranslation": "Eu vou à festa, mesmo se você não for.",
    "whyCorrect": "'Even if' introduz uma condição hipotética extrema que não altera em nada o desfecho da ação principal.",
    "whyOthersFail": "'Because of' precisa de substantivo ('because of the rain'). 'In order to' expressa objetivo ('a fim de'). 'As well as' adiciona itens ('assim como').",
    "proTip": "Diferença essencial: 'Even if' é hipotético ('mesmo que aconteça'). 'Even though' é um fato real que já acontece ('embora aconteça')."
  },
  {
    "id": "q-instead-of-1",
    "prompt": "Maybe you should stay home _____ going out tonight.",
    "options": [
      {
        "id": "a",
        "text": "instead of"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "in case"
      }
    ],
    "correctOptionId": "a",
    "connector": "instead of",
    "family": "substitution",
    "translation": "Em vez de",
    "explanation": "Instead of is followed by a noun or -ing form, not a full contrasting clause.",
    "fullSentence": "Maybe you should stay home instead of going out tonight.",
    "sentenceTranslation": "Talvez você deva ficar em casa em vez de sair hoje à noite.",
    "whyCorrect": "'Instead of' introduz uma substituição ou escolha alternativa e é seguido obrigatoriamente de verbo com terminação -ing ('going') ou substantivo.",
    "whyOthersFail": "'Because of' indicaria motivo. 'As well as' significaria que a pessoa faria as duas coisas juntas. 'In case' indicaria precaução.",
    "proTip": "Lembre-se da preposição 'of': depois de preposição em inglês, qualquer verbo subsequente deve levar '-ing' (instead of going, instead of buying)."
  },
  {
    "id": "q-even-though-1",
    "prompt": "_____ I don't have much money, I will go out tonight.",
    "options": [
      {
        "id": "a",
        "text": "Due to"
      },
      {
        "id": "b",
        "text": "Therefore"
      },
      {
        "id": "c",
        "text": "Even though"
      },
      {
        "id": "d",
        "text": "Likewise"
      }
    ],
    "correctOptionId": "c",
    "connector": "Even though",
    "family": "contrast",
    "translation": "Embora",
    "explanation": "Even though + clause shows a surprising contrast. Due to needs a noun.",
    "fullSentence": "Even though I don't have much money, I will go out tonight.",
    "sentenceTranslation": "Embora eu não tenha muito dinheiro, eu vou sair hoje à noite.",
    "whyCorrect": "'Even though' é a forma mais enfática e expressiva de 'although', perfeita para contrastar um fato real com uma atitude surpreendente.",
    "whyOthersFail": "'Due to' exige substantivo. 'Therefore' expressaria consequência, não contraste. 'Likewise' expressaria semelhança.",
    "proTip": "'Even though' tem tom de 'apesar de ser verdade que...'. Use quando quiser dar bastante ênfase à oposição entre as duas ideias."
  },
  {
    "id": "q-in-advance-1",
    "prompt": "Please let me know _____ if you can't attend.",
    "options": [
      {
        "id": "a",
        "text": "at last"
      },
      {
        "id": "b",
        "text": "in advance"
      },
      {
        "id": "c",
        "text": "no longer"
      },
      {
        "id": "d",
        "text": "for instance"
      }
    ],
    "correctOptionId": "b",
    "connector": "in advance",
    "family": "time",
    "translation": "Com antecedência",
    "explanation": "In advance means before something happens.",
    "fullSentence": "Please let me know in advance if you can't attend.",
    "sentenceTranslation": "Por favor, me avise com antecedência se você não puder comparecer.",
    "whyCorrect": "'In advance' é uma locução temporal fixa que significa 'previamente' ou 'com antecedência'.",
    "whyOthersFail": "'At last' significa 'finalmente após espera'. 'No longer' significa 'não mais'. 'For instance' introduz um exemplo.",
    "proTip": "Super comum no ambiente corporativo e em chats (Slack/Teams): 'Thank you in advance' = 'Agradeço antecipadamente'."
  },
  {
    "id": "q-no-longer-1",
    "prompt": "He _____ works at the consultancy.",
    "options": [
      {
        "id": "a",
        "text": "at all"
      },
      {
        "id": "b",
        "text": "as well"
      },
      {
        "id": "c",
        "text": "in fact"
      },
      {
        "id": "d",
        "text": "no longer"
      }
    ],
    "correctOptionId": "d",
    "connector": "no longer",
    "family": "emphasis",
    "translation": "Não mais",
    "explanation": "No longer means a past situation has stopped. It sits before the main verb.",
    "fullSentence": "He no longer works at the consultancy.",
    "sentenceTranslation": "Ele não trabalha mais na consultoria.",
    "whyCorrect": "'No longer' é colocado antes do verbo principal para indicar que um estado ou hábito passado cessou e não é mais verdadeiro hoje.",
    "whyOthersFail": "'At all' geralmente fica no fim da frase. 'As well' significa 'também'. 'In fact' significa 'na verdade'.",
    "proTip": "Posição: 'He no longer works here' = 'He doesn't work here anymore'. Com 'no longer' a frase fica afirmativa na gramática, mas com sentido negativo!"
  },
  {
    "id": "q-meanwhile-1",
    "prompt": "The frontend engineers started building the UI. _____, the backend team set up the database.",
    "options": [
      {
        "id": "a",
        "text": "Meanwhile"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Despite"
      },
      {
        "id": "d",
        "text": "Hence"
      }
    ],
    "correctOptionId": "a",
    "connector": "Meanwhile",
    "family": "time",
    "translation": "Enquanto isso",
    "explanation": "Meanwhile shows two actions happening at the same time.",
    "fullSentence": "The frontend engineers started building the UI. Meanwhile, the backend team set up the database.",
    "sentenceTranslation": "Os engenheiros frontend começaram a construir a interface. Enquanto isso, o time de backend configurou o banco de dados.",
    "whyCorrect": "'Meanwhile' é um advérbio de transição que conecta duas atividades distintas acontecendo no mesmo período de tempo em paralelo.",
    "whyOthersFail": "'Unless' é condição negativa ('a menos que'). 'Despite' exige substantivo. 'Hence' indica resultado/consequência.",
    "proTip": "Pense em 'Meanwhile' como a tradução perfeita de 'No meio tempo' ou 'Enquanto isso'. Essencial para reuniões de sincronização ágil (Dailies)."
  },
  {
    "id": "q-along-with-1",
    "prompt": "When you send your project report, _____ it you can share your graphics.",
    "options": [
      {
        "id": "a",
        "text": "because of"
      },
      {
        "id": "b",
        "text": "along with"
      },
      {
        "id": "c",
        "text": "even if"
      },
      {
        "id": "d",
        "text": "so that"
      }
    ],
    "correctOptionId": "b",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "Along with means together with something else.",
    "fullSentence": "When you send your project report, along with it you can share your graphics.",
    "sentenceTranslation": "Quando você enviar seu relatório do projeto, junto com ele você pode compartilhar seus gráficos.",
    "whyCorrect": "'Along with' significa 'junto com / acompanhado de', indicando inclusão de algo extra.",
    "whyOthersFail": "'Because of' indicaria causa. 'Even if' indicaria hipótese. 'So that' expressa finalidade ('para que').",
    "proTip": "Uso corporativo frequente: 'Please find the document attached along with my feedback' (Segue anexo o documento junto com meus comentários)."
  },
  {
    "id": "q-as-well-1",
    "prompt": "I know that's a hard subject. I need to study more _____.",
    "options": [
      {
        "id": "a",
        "text": "as well"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "in spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "as well",
    "family": "addition",
    "translation": "Também",
    "explanation": "As well usually comes at the end and means 'also'.",
    "fullSentence": "I know that's a hard subject. I need to study more as well.",
    "sentenceTranslation": "Eu sei que esse é um assunto difícil. Eu preciso estudar mais também.",
    "whyCorrect": "'As well' é o sinônimo perfeito de 'too' e é posicionado naturalmente no final da oração afirmativa.",
    "whyOthersFail": "'Because of', 'unless' e 'in spite of' são conectores subordinativos que exigem complemento, não podem simplesmente fechar a oração desse jeito.",
    "proTip": "No inglês falado e escrito natural, 'as well' no final substitui 'also' com muita elegância: 'I like coffee as well!'."
  },
  {
    "id": "q-at-last-1",
    "prompt": "It's late, but we found the problem _____.",
    "options": [
      {
        "id": "a",
        "text": "at last"
      },
      {
        "id": "b",
        "text": "at least"
      },
      {
        "id": "c",
        "text": "in case"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "at last",
    "family": "time",
    "translation": "Por fim / finalmente",
    "explanation": "At last means after a long wait. At least means 'no less than' or 'the good part'.",
    "fullSentence": "It's late, but we found the problem at last.",
    "sentenceTranslation": "Está tarde, mas nós encontramos o problema por fim.",
    "whyCorrect": "'At last' expressa alívio por algo finalmente ter sido resolvido ou alcançado após demora ou dificuldade.",
    "whyOthersFail": "'At least' significa 'pelo menos / no mínimo'. 'In case' significa 'no caso de'. 'Due to' significa 'devido a'.",
    "proTip": "Cuidado com os falsos cognatos auditivos: 'At last' = finalmente (tempo). 'At least' = pelo menos (quantidade ou aspecto positivo)."
  },
  {
    "id": "q-at-least-1",
    "prompt": "Although I didn't study enough, _____ I studied Math, the hardest subject.",
    "options": [
      {
        "id": "a",
        "text": "at last"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "at least"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "c",
    "connector": "at least",
    "family": "emphasis",
    "translation": "Pelo menos",
    "explanation": "At least highlights a small positive inside a worse situation.",
    "fullSentence": "Although I didn't study enough, at least I studied Math, the hardest subject.",
    "sentenceTranslation": "Embora eu não tenha estudado o suficiente, pelo menos estudei Matemática, a matéria mais difícil.",
    "whyCorrect": "'At least' ressalta um aspecto positivo atenuante ou quantidade mínima em meio a um cenário que não foi ideal.",
    "whyOthersFail": "'At last' significaria 'finalmente'. 'Unless' significaria 'a menos que'. 'In order to' expressaria finalidade.",
    "proTip": "Use 'At least' sempre que quiser ver o copo meio cheio: 'It rained, but at least we had fun!' (Choveu, mas pelo menos nos divertimos!)."
  },
  {
    "id": "q-because-1",
    "prompt": "The developer will be late today _____ the traffic is awful.",
    "options": [
      {
        "id": "a",
        "text": "because of"
      },
      {
        "id": "b",
        "text": "because"
      },
      {
        "id": "c",
        "text": "despite"
      },
      {
        "id": "d",
        "text": "instead of"
      }
    ],
    "correctOptionId": "b",
    "connector": "because",
    "family": "cause",
    "translation": "Porque",
    "explanation": "Because is followed by a clause (the traffic is awful). Because of needs a noun.",
    "fullSentence": "The developer will be late today because the traffic is awful.",
    "sentenceTranslation": "O desenvolvedor vai se atrasar hoje porque o trânsito está horrível.",
    "whyCorrect": "'Because' é uma conjunção causal seguida de uma oração completa (sujeito 'the traffic' + verbo 'is').",
    "whyOthersFail": "'Because of' precisaria de um substantivo direto ('because of the traffic'), sem o verbo 'is'. 'Despite' daria sentido oposto. 'Instead of' significa 'em vez de'.",
    "proTip": "Grande regra de prova e certificação: 'Because' + [oração com verbo]. 'Because of' + [substantivo puro]."
  },
  {
    "id": "q-because-of-1",
    "prompt": "I'm crying _____ what you said.",
    "options": [
      {
        "id": "a",
        "text": "because"
      },
      {
        "id": "b",
        "text": "so that"
      },
      {
        "id": "c",
        "text": "because of"
      },
      {
        "id": "d",
        "text": "even if"
      }
    ],
    "correctOptionId": "c",
    "connector": "because of",
    "family": "cause",
    "translation": "Por causa de",
    "explanation": "Because of + noun/pronoun. 'What you said' acts as a noun phrase here.",
    "fullSentence": "I'm crying because of what you said.",
    "sentenceTranslation": "Eu estou chorando por causa do que você disse.",
    "whyCorrect": "'Because of' é uma locução prepositiva seguida de um sintagma nominal ('what you said' funciona como substantivo aqui).",
    "whyOthersFail": "'Because' precisaria de uma oração independente imediata. 'So that' e 'even if' têm sentidos completamente distintos (finalidade e hipótese).",
    "proTip": "Compare: 'I was late because it was raining' (com verbo 'was') vs 'I was late because of the rain' (apenas substantivo)."
  },
  {
    "id": "q-besides-1",
    "prompt": "I don't want to go out tonight; it's freezing. _____, I have an early meeting tomorrow.",
    "options": [
      {
        "id": "a",
        "text": "Besides"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Although"
      },
      {
        "id": "d",
        "text": "In case"
      }
    ],
    "correctOptionId": "a",
    "connector": "Besides",
    "family": "addition",
    "translation": "Além disso",
    "explanation": "Besides adds an extra reason, not a contrast.",
    "fullSentence": "I don't want to go out tonight; it's freezing. Besides, I have an early meeting tomorrow.",
    "sentenceTranslation": "Eu não quero sair hoje à noite; está congelando lá fora. Além disso, tenho uma reunião cedo amanhã.",
    "whyCorrect": "'Besides' adiciona um segundo argumento convincente que reforça o primeiro motivo já mencionado.",
    "whyOthersFail": "'Unless' estabelece condição negativa. 'Although' expressa concessão. 'In case' expressa precaução.",
    "proTip": "Cuidado com a grafia: 'Beside' (sem s) significa 'ao lado de' ('Sit beside me'). 'Besides' (com s) significa 'além disso'."
  },
  {
    "id": "q-but-1",
    "prompt": "It was hard to fix that problem, _____ I could handle it.",
    "options": [
      {
        "id": "a",
        "text": "so that"
      },
      {
        "id": "b",
        "text": "but"
      },
      {
        "id": "c",
        "text": "therefore"
      },
      {
        "id": "d",
        "text": "along with"
      }
    ],
    "correctOptionId": "b",
    "connector": "but",
    "family": "contrast",
    "translation": "Mas / porém",
    "explanation": "But introduces a contrast in the same sentence.",
    "fullSentence": "It was hard to fix that problem, but I could handle it.",
    "sentenceTranslation": "Foi difícil consertar aquele problema, mas eu consegui resolver.",
    "whyCorrect": "'But' é a conjunção adversativa clássica mais direta para contrapor uma dificuldade inicial a uma superação final.",
    "whyOthersFail": "'So that' expressa finalidade. 'Therefore' expressa dedução lógica. 'Along with' expressa inclusão.",
    "proTip": "'But' é informal e direto; 'However' é o seu equivalente mais formal e polido para e-mails e relatórios corporativos."
  },
  {
    "id": "q-currently-1",
    "prompt": "_____, our clients are satisfied with our products.",
    "options": [
      {
        "id": "a",
        "text": "Currently"
      },
      {
        "id": "b",
        "text": "Otherwise"
      },
      {
        "id": "c",
        "text": "Even if"
      },
      {
        "id": "d",
        "text": "In spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "Currently",
    "family": "time",
    "translation": "Atualmente",
    "explanation": "Currently means 'at the present time'.",
    "fullSentence": "Currently, our clients are satisfied with our products.",
    "sentenceTranslation": "Atualmente, nossos clientes estão satisfeitos com nossos produtos.",
    "whyCorrect": "'Currently' significa 'no momento presente / atualmente', situando o estado temporal da frase.",
    "whyOthersFail": "'Otherwise' significa 'caso contrário'. 'Even if' significa 'mesmo se'. 'In spite of' significa 'apesar de'.",
    "proTip": "Falso amigo clássico! 'Actually' NÃO significa atualmente (significa 'na verdade'). Para dizer 'atualmente', use 'Currently' ou 'Nowadays'."
  },
  {
    "id": "q-due-to-1",
    "prompt": "_____ an outage, all the programs were stopped.",
    "options": [
      {
        "id": "a",
        "text": "Although"
      },
      {
        "id": "b",
        "text": "Due to"
      },
      {
        "id": "c",
        "text": "Even if"
      },
      {
        "id": "d",
        "text": "As well as"
      }
    ],
    "correctOptionId": "b",
    "connector": "Due to",
    "family": "cause",
    "translation": "Devido a",
    "explanation": "Due to + noun (an outage). It does not take a full clause by itself.",
    "fullSentence": "Due to an outage, all the programs were stopped.",
    "sentenceTranslation": "Devido a uma interrupção nos servidores, todos os programas foram paralisados.",
    "whyCorrect": "'Due to' é seguido de um substantivo ('an outage') e introduz a causa determinante do problema.",
    "whyOthersFail": "'Although' exigiria oração completa com verbo. 'Even if' introduz hipótese. 'As well as' introduz adição.",
    "proTip": "Em comunicados corporativos e de incidentes de TI (post-mortems), 'due to' é a expressão padrão para citar a causa raiz."
  },
  {
    "id": "q-even-1",
    "prompt": "You should go to England, _____ alone.",
    "options": [
      {
        "id": "a",
        "text": "hence"
      },
      {
        "id": "b",
        "text": "even"
      },
      {
        "id": "c",
        "text": "therefore"
      },
      {
        "id": "d",
        "text": "as a result"
      }
    ],
    "correctOptionId": "b",
    "connector": "even",
    "family": "emphasis",
    "translation": "Mesmo",
    "explanation": "Even emphasizes something surprising or extreme.",
    "fullSentence": "You should go to England, even alone.",
    "sentenceTranslation": "Você deveria ir à Inglaterra, até mesmo sozinho.",
    "whyCorrect": "'Even' atua como advérbio de intensidade para enfatizar algo surpreendente, incomum ou extremo ('até mesmo / mesmo').",
    "whyOthersFail": "'Hence' e 'therefore' expressam dedução. 'As a result' expressa resultado.",
    "proTip": "Use 'even' para destacar o extremo de uma escala: 'Not even the senior dev knew how to fix it' (Nem mesmo o sênior sabia como arrumar)."
  },
  {
    "id": "q-for-1",
    "prompt": "We stopped testing, _____ the server was down.",
    "options": [
      {
        "id": "a",
        "text": "instead of"
      },
      {
        "id": "b",
        "text": "along with"
      },
      {
        "id": "c",
        "text": "for"
      },
      {
        "id": "d",
        "text": "unless"
      }
    ],
    "correctOptionId": "c",
    "connector": "for",
    "family": "cause",
    "translation": "Pois",
    "explanation": "For can mean 'because' in more formal English, followed by a clause.",
    "fullSentence": "We stopped testing, for the server was down.",
    "sentenceTranslation": "Nós interrompemos os testes, pois o servidor estava fora do ar.",
    "whyCorrect": "'For' é uma conjunção coordenativa formal do grupo FANBOYS (For, And, Nor, But, Or, Yet, So) que significa 'pois / visto que'.",
    "whyOthersFail": "'Instead of' exigiria -ing. 'Along with' significa 'junto com'. 'Unless' significa 'a menos que'.",
    "proTip": "Embora 'because' seja muito mais comum na fala diária, 'for' como conjunção é altamente valorizado em redações formais e literatura em inglês."
  },
  {
    "id": "q-for-instance-1",
    "prompt": "Let me explain again. _____, when the developer finishes the program, he can start something else.",
    "options": [
      {
        "id": "a",
        "text": "For instance"
      },
      {
        "id": "b",
        "text": "Even though"
      },
      {
        "id": "c",
        "text": "No longer"
      },
      {
        "id": "d",
        "text": "In spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "For instance",
    "family": "example",
    "translation": "Por exemplo",
    "explanation": "For instance introduces an example.",
    "fullSentence": "Let me explain again. For instance, when the developer finishes the program, he can start something else.",
    "sentenceTranslation": "Deixe-me explicar novamente. Por exemplo, quando o desenvolvedor termina o programa, ele pode começar outra coisa.",
    "whyCorrect": "'For instance' introduz um caso prático ilustrativo, funcionando como sinônimo idêntico a 'For example'.",
    "whyOthersFail": "'Even though' expressa contraste. 'No longer' significa 'não mais'. 'In spite of' expressa concessão.",
    "proTip": "'For instance' e 'For example' são intercambiáveis. 'For instance' soa muito natural em apresentações e reuniões técnicas."
  },
  {
    "id": "q-however-1",
    "prompt": "There's heavy traffic ahead; _____, I don't have another way.",
    "options": [
      {
        "id": "a",
        "text": "therefore"
      },
      {
        "id": "b",
        "text": "however"
      },
      {
        "id": "c",
        "text": "as long as"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "b",
    "connector": "however",
    "family": "contrast",
    "translation": "Contudo / entretanto",
    "explanation": "However contrasts two ideas. Therefore would show a result, not a contrast.",
    "fullSentence": "There's heavy traffic ahead; however, I don't have another way.",
    "sentenceTranslation": "Há um trânsito pesado à frente; contudo, eu não tenho outro caminho.",
    "whyCorrect": "'However' contrasta duas realidades de maneira elegante e formal, frequentemente precedido de ponto-e-vírgula ou ponto final.",
    "whyOthersFail": "'Therefore' indicaria conclusão. 'As long as' indicaria condição. 'In order to' indicaria finalidade.",
    "proTip": "Pontuação típica em inglês formal: Frase A; however, Frase B. A vírgula após 'however' é indispensável!"
  },
  {
    "id": "q-if-1",
    "prompt": "_____ you go there, I'll go too.",
    "options": [
      {
        "id": "a",
        "text": "If"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Because of"
      },
      {
        "id": "d",
        "text": "Meanwhile"
      }
    ],
    "correctOptionId": "a",
    "connector": "If",
    "family": "condition",
    "translation": "Se",
    "explanation": "If introduces a simple condition.",
    "fullSentence": "If you go there, I'll go too.",
    "sentenceTranslation": "Se você for lá, eu vou também.",
    "whyCorrect": "'If' introduz uma condição simples na primeira condicional (If + presente simples, futuro com will).",
    "whyOthersFail": "'Despite' e 'Because of' exigem substantivo. 'Meanwhile' expressa tempo paralelo.",
    "proTip": "Estrutura padrão da First Conditional: 'If + Present Simple, will + verb'. Exemplo: 'If it rains, we will stay home'."
  },
  {
    "id": "q-in-case-1",
    "prompt": "Take this exam to your doctor, just _____.",
    "options": [
      {
        "id": "a",
        "text": "in case"
      },
      {
        "id": "b",
        "text": "as a result"
      },
      {
        "id": "c",
        "text": "on the other hand"
      },
      {
        "id": "d",
        "text": "instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "in case",
    "family": "condition",
    "translation": "No caso de / por precaução",
    "explanation": "In case prepares for a possible future problem.",
    "fullSentence": "Take this exam to your doctor, just in case.",
    "sentenceTranslation": "Leve este exame ao seu médico, só por precaução.",
    "whyCorrect": "'In case' (e a expressão 'just in case') é usado para preparar-se preventivamente para uma possibilidade futura.",
    "whyOthersFail": "'As a result' indicaria consequência consumada. 'On the other hand' expressa contraponto. 'Instead of' indica substituição.",
    "proTip": "'In case' não é sinônimo direto de 'if': 'I will take an umbrella in case it rains' (Levo o guarda-chuva antes, para me prevenir, chova ou não!)."
  },
  {
    "id": "q-in-fact-1",
    "prompt": "_____, Brazil is the only country that is a five-time World Cup champion.",
    "options": [
      {
        "id": "a",
        "text": "Unless"
      },
      {
        "id": "b",
        "text": "In fact"
      },
      {
        "id": "c",
        "text": "Even if"
      },
      {
        "id": "d",
        "text": "Rather than"
      }
    ],
    "correctOptionId": "b",
    "connector": "In fact",
    "family": "emphasis",
    "translation": "Na verdade / de fato",
    "explanation": "In fact strengthens or corrects a statement with a stronger truth.",
    "fullSentence": "In fact, Brazil is the only country that is a five-time World Cup champion.",
    "sentenceTranslation": "Na verdade, o Brasil é o único país pentacampeão de futebol.",
    "whyCorrect": "'In fact' reforça a veracidade de uma informação ou apresenta um dado real e contundente ('de fato / na verdade').",
    "whyOthersFail": "'Unless' expressa condição negativa. 'Even if' expressa hipótese. 'Rather than' expressa preferência.",
    "proTip": "'In fact' é excelente para introduzir uma estatística, curiosidade ou confirmação de peso em conversas profissionais."
  },
  {
    "id": "q-in-order-to-1",
    "prompt": "I came to work in person _____ finish the project.",
    "options": [
      {
        "id": "a",
        "text": "because of"
      },
      {
        "id": "b",
        "text": "even though"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "as far as"
      }
    ],
    "correctOptionId": "c",
    "connector": "in order to",
    "family": "purpose",
    "translation": "A fim de",
    "explanation": "In order to + base verb shows purpose.",
    "fullSentence": "I came to work in person in order to finish the project.",
    "sentenceTranslation": "Eu vim trabalhar presencialmente a fim de concluir o projeto.",
    "whyCorrect": "'In order to' expressa propósito claro e é seguido diretamente pelo verbo na sua forma base infinitiva ('finish').",
    "whyOthersFail": "'Because of' exige substantivo. 'Even though' exige oração completa de contraste. 'As far as' delimita conhecimento.",
    "proTip": "Fórmula de memorização: 'In order to + VERBO' (propósito direto). Exemplo: 'I practice every day in order to become fluent'."
  },
  {
    "id": "q-in-spite-of-1",
    "prompt": "_____ what you said, he could understand.",
    "options": [
      {
        "id": "a",
        "text": "Although"
      },
      {
        "id": "b",
        "text": "In spite of"
      },
      {
        "id": "c",
        "text": "So that"
      },
      {
        "id": "d",
        "text": "Hence"
      }
    ],
    "correctOptionId": "b",
    "connector": "In spite of",
    "family": "contrast",
    "translation": "Apesar de",
    "explanation": "In spite of / despite + noun or -ing. Although needs a clause.",
    "fullSentence": "In spite of what you said, he could understand.",
    "sentenceTranslation": "Apesar do que você disse, ele conseguiu entender.",
    "whyCorrect": "'In spite of' expressa concessão e exige substantivo ou oração substantiva ('what you said').",
    "whyOthersFail": "'Although' exigiria oração sem 'of'. 'So that' indica finalidade. 'Hence' indica resultado.",
    "proTip": "'In spite of' tem exatamente o mesmo significado de 'Despite'. Atenção: NUNCA diga 'despite of' — é 'despite' puro ou 'in spite of' com 'of'!"
  },
  {
    "id": "q-indeed-1",
    "prompt": "The team made significant progress this sprint. _____, they completed all high-priority items ahead of schedule.",
    "options": [
      {
        "id": "a",
        "text": "Indeed"
      },
      {
        "id": "b",
        "text": "Otherwise"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "Indeed",
    "family": "emphasis",
    "translation": "De fato",
    "explanation": "Indeed confirms and strengthens the previous sentence.",
    "fullSentence": "The team made significant progress this sprint. Indeed, they completed all high-priority items ahead of schedule.",
    "sentenceTranslation": "A equipe fez um progresso significativo nesta sprint. De fato, eles completaram todos os itens de alta prioridade antes do prazo.",
    "whyCorrect": "'Indeed' atua como conector de confirmação e fortalecimento da ideia apresentada na frase anterior ('de fato / com efeito').",
    "whyOthersFail": "'Otherwise' indica consequência negativa. 'Unless' indica condição negativa. 'Instead of' indica substituição.",
    "proTip": "Use 'indeed' para validar fortemente uma afirmação prévia com uma evidência concreta logo em seguida."
  },
  {
    "id": "q-likewise-1",
    "prompt": "Senior engineers must review their pull requests. _____, junior developers are expected to follow the same testing standards.",
    "options": [
      {
        "id": "a",
        "text": "Otherwise"
      },
      {
        "id": "b",
        "text": "Even though"
      },
      {
        "id": "c",
        "text": "Likewise"
      },
      {
        "id": "d",
        "text": "Because of"
      }
    ],
    "correctOptionId": "c",
    "connector": "Likewise",
    "family": "addition",
    "translation": "Da mesma forma / igualmente",
    "explanation": "Likewise shows a similar action or rule in a second group.",
    "fullSentence": "Senior engineers must review their pull requests. Likewise, junior developers are expected to follow the same testing standards.",
    "sentenceTranslation": "Engenheiros seniores devem revisar seus pull requests. Da mesma forma, espera-se que desenvolvedores juniores sigem os mesmos padrões de teste.",
    "whyCorrect": "'Likewise' expressa analogia direta, reciprocidade ou paralelismo de conduta entre dois sujeitos ('da mesma forma / igualmente').",
    "whyOthersFail": "'Otherwise' indicaria alerta/consequência. 'Even though' indicaria oposição. 'Because of' indicaria causa.",
    "proTip": "Em conversas cotidianas, responder simplesmente 'Likewise!' é uma forma polida e simpática de dizer 'Para você também!' ou 'Digo o mesmo!'."
  },
  {
    "id": "q-actually-1",
    "prompt": "You said the project was on time. _____, it is running out of time.",
    "options": [
      {
        "id": "a",
        "text": "Actually"
      },
      {
        "id": "b",
        "text": "In order to"
      },
      {
        "id": "c",
        "text": "As well as"
      },
      {
        "id": "d",
        "text": "So that"
      }
    ],
    "correctOptionId": "a",
    "connector": "Actually",
    "family": "emphasis",
    "translation": "Na verdade",
    "explanation": "Actually often corrects or reveals the real situation.",
    "fullSentence": "You said the project was on time. Actually, it is running out of time.",
    "sentenceTranslation": "Você disse que o projeto estava no prazo. Na verdade, o prazo está se esgotando.",
    "whyCorrect": "'Actually' serve para revelar a realidade fática de uma situação, corrigindo delicadamente uma premissa equivocada.",
    "whyOthersFail": "'In order to' expressa objetivo. 'As well as' expressa adição. 'So that' expressa finalidade.",
    "proTip": "Lembrete fundamental: 'Actually' = 'Na verdade / Para falar a verdade'. Não confunda com 'Currently' (atualmente)."
  },
  {
    "id": "q-despite-1",
    "prompt": "_____ the rain, I'm going to the beach.",
    "options": [
      {
        "id": "a",
        "text": "Although"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Because"
      },
      {
        "id": "d",
        "text": "Even if"
      }
    ],
    "correctOptionId": "b",
    "connector": "Despite",
    "family": "contrast",
    "translation": "Apesar de",
    "explanation": "Despite + noun. Although the rain is wrong because although needs a clause.",
    "fullSentence": "Despite the rain, I'm going to the beach.",
    "sentenceTranslation": "Apesar da chuva, eu vou à praia.",
    "whyCorrect": "'Despite' é seguido diretamente de substantivo ('the rain') sem verbo conjugado.",
    "whyOthersFail": "'Although' exigiria verbo ('Although it is raining'). 'Because' daria o sentido absurdo de ir à praia por causa da chuva. 'Even if' exige oração com verbo.",
    "proTip": "Par de ouro: 'Despite the rain' (com substantivo) = 'Although it is raining' (com verbo). Memorize esse contraste!"
  },
  {
    "id": "q-therefore-1",
    "prompt": "The server was down. _____, we stopped testing.",
    "options": [
      {
        "id": "a",
        "text": "Although"
      },
      {
        "id": "b",
        "text": "On the other hand"
      },
      {
        "id": "c",
        "text": "Therefore"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "c",
    "connector": "Therefore",
    "family": "cause",
    "translation": "Portanto",
    "explanation": "Therefore introduces a logical result.",
    "fullSentence": "The server was down. Therefore, we stopped testing.",
    "sentenceTranslation": "O servidor estava fora do ar. Portanto, nós paramos os testes.",
    "whyCorrect": "'Therefore' conecta uma premissa à sua conclusão lógica inevitável com tom formal ('portanto / por esta razão').",
    "whyOthersFail": "'Although' e 'On the other hand' expressam contraste. 'Instead of' expressa substituição.",
    "proTip": "'Therefore' é a palavra-chave de conclusões em inglês acadêmico e corporativo. Equivale a 'Assim sendo'."
  },
  {
    "id": "q-unless-1",
    "prompt": "You will not pass the exam _____ you study tonight.",
    "options": [
      {
        "id": "a",
        "text": "unless"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "in spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "unless",
    "family": "condition",
    "translation": "A menos que",
    "explanation": "Unless means 'if not'. Do not mix it with at least.",
    "fullSentence": "You will not pass the exam unless you study tonight.",
    "sentenceTranslation": "Você não vai passar na prova a menos que estude hoje à noite.",
    "whyCorrect": "'Unless' equivale exatamente a 'if not' (se não), introduzindo a única condição capaz de reverter o resultado negativo.",
    "whyOthersFail": "'Because of', 'as well as' e 'in spite of' não introduzem condição negativa.",
    "proTip": "Pense sempre: 'Unless you study' = 'If you do not study'. Como 'unless' já é negativo, não use 'not' junto com ele!"
  },
  {
    "id": "q-so-that-1",
    "prompt": "I'm here _____ I can study.",
    "options": [
      {
        "id": "a",
        "text": "so that"
      },
      {
        "id": "b",
        "text": "despite"
      },
      {
        "id": "c",
        "text": "however"
      },
      {
        "id": "d",
        "text": "no longer"
      }
    ],
    "correctOptionId": "a",
    "connector": "so that",
    "family": "purpose",
    "translation": "A fim de que",
    "explanation": "So that + clause shows purpose. In order to + verb is the close cousin.",
    "fullSentence": "I'm here so that I can study.",
    "sentenceTranslation": "Eu estou aqui a fim de que eu possa estudar.",
    "whyCorrect": "'So that' expressa finalidade acompanhado de oração com verbo modal ('so that I can study').",
    "whyOthersFail": "'Despite' expressa oposição. 'However' expressa contraste. 'No longer' expressa término de hábito.",
    "proTip": "Diferença entre 'In order to' e 'So that': 'In order to' vem seguido de verbo puro ('in order to study'). 'So that' vem com sujeito e modal ('so that I can study')."
  },
  {
    "id": "q-though-1",
    "prompt": "I'm tired. I'll go to the party, _____.",
    "options": [
      {
        "id": "a",
        "text": "therefore"
      },
      {
        "id": "b",
        "text": "though"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "as a result"
      }
    ],
    "correctOptionId": "b",
    "connector": "though",
    "family": "contrast",
    "translation": "Embora (no fim da frase)",
    "explanation": "Though can go at the end of a sentence with the same idea as although.",
    "fullSentence": "I'm tired. I'll go to the party, though.",
    "sentenceTranslation": "Eu estou cansado. Vou à festa, embora.",
    "whyCorrect": "Em inglês coloquial e fluente, 'though' no final da oração é extremamente comum para dar uma nuance de 'apesar disso / no entanto'.",
    "whyOthersFail": "'Therefore', 'in order to' e 'as a result' não têm essa propriedade sintática de fechar a frase com sentido de concessão.",
    "proTip": "Quer soar como um nativo fluente? Coloque 'though' no final da frase para relativizar algo: 'It's expensive. I like it, though!' (É caro. Mas eu gosto!)."
  },
  {
    "id": "q-on-the-other-hand-1",
    "prompt": "The plan is cheaper. _____, it will take much longer.",
    "options": [
      {
        "id": "a",
        "text": "On the other hand"
      },
      {
        "id": "b",
        "text": "As long as"
      },
      {
        "id": "c",
        "text": "In order to"
      },
      {
        "id": "d",
        "text": "For instance"
      }
    ],
    "correctOptionId": "a",
    "connector": "On the other hand",
    "family": "contrast",
    "translation": "Por outro lado",
    "explanation": "On the other hand introduces a contrasting point, often a trade-off.",
    "fullSentence": "The plan is cheaper. On the other hand, it will take much longer.",
    "sentenceTranslation": "O plano é mais barato. Por outro lado, vai demorar muito mais.",
    "whyCorrect": "'On the other hand' introduz o outro lado da moeda em uma análise ou comparação ('por outro lado').",
    "whyOthersFail": "'As long as' expressa condição. 'In order to' expressa finalidade. 'For instance' expressa exemplo.",
    "proTip": "Par de contraste: 'On the one hand, X... On the other hand, Y...' (Por um lado X... por outro lado Y...)."
  },
  {
    "id": "q-otherwise-1",
    "prompt": "Submit the report today. _____, the client will cancel the meeting.",
    "options": [
      {
        "id": "a",
        "text": "Likewise"
      },
      {
        "id": "b",
        "text": "Otherwise"
      },
      {
        "id": "c",
        "text": "Meanwhile"
      },
      {
        "id": "d",
        "text": "Along with"
      }
    ],
    "correctOptionId": "b",
    "connector": "Otherwise",
    "family": "condition",
    "translation": "Senão",
    "explanation": "Otherwise means 'if not' and shows a negative consequence.",
    "fullSentence": "Submit the report today. Otherwise, the client will cancel the meeting.",
    "sentenceTranslation": "Envie o relatório hoje. Caso contrário, o cliente vai cancelar a reunião.",
    "whyCorrect": "'Otherwise' aponta a consequência desfavorável caso a instrução anterior não seja cumprida ('senão / caso contrário').",
    "whyOthersFail": "'Likewise' expressa semelhança. 'Meanwhile' expressa simultaneidade. 'Along with' expressa companhia.",
    "proTip": "'Otherwise' equivale a 'or else' ('ou então'). É essencial em avisos e SLAs de suporte ao cliente."
  },
  {
    "id": "q-whereas-1",
    "prompt": "The backend is ready, _____ the frontend is still in progress.",
    "options": [
      {
        "id": "a",
        "text": "whereas"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "as a result"
      }
    ],
    "correctOptionId": "a",
    "connector": "whereas",
    "family": "contrast",
    "translation": "Ao passo que",
    "explanation": "Whereas contrasts two facts in one sentence.",
    "fullSentence": "The backend is ready, whereas the frontend is still in progress.",
    "sentenceTranslation": "O backend está pronto, ao passo que o frontend ainda está em andamento.",
    "whyCorrect": "'Whereas' compara duas realidades paralelas que estão em estados opostos ou divergentes ('ao passo que / enquanto que').",
    "whyOthersFail": "'Because of', 'in order to' e 'as a result' indicam causa, finalidade e consequência, não comparação contrastante.",
    "proTip": "'Whereas' é excelente em reuniões de status report para pontuar o que já foi feito versus o que ainda falta."
  },
  {
    "id": "q-thats-why-1",
    "prompt": "The traffic was awful. _____ the developer was late.",
    "options": [
      {
        "id": "a",
        "text": "Even though"
      },
      {
        "id": "b",
        "text": "That's why"
      },
      {
        "id": "c",
        "text": "Instead of"
      },
      {
        "id": "d",
        "text": "In case"
      }
    ],
    "correctOptionId": "b",
    "connector": "That's why",
    "family": "cause",
    "translation": "É por isso",
    "explanation": "That's why links a cause already stated to its result.",
    "fullSentence": "The traffic was awful. That's why the developer was late.",
    "sentenceTranslation": "O trânsito estava horrível. É por isso que o desenvolvedor se atrasou.",
    "whyCorrect": "'That's why' liga a causa prévia ao seu desfecho de forma natural na conversação ('é por isso que / por isso').",
    "whyOthersFail": "'Even though' expressa concessão. 'Instead of' expressa substituição. 'In case' expressa precaução.",
    "proTip": "'That's why' é o conector de causa e efeito mais frequente no inglês oral do dia a dia."
  },
  {
    "id": "q-while-1",
    "prompt": "_____ the QA team tested the API, the developers fixed the UI bugs.",
    "options": [
      {
        "id": "a",
        "text": "While"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Due to"
      },
      {
        "id": "d",
        "text": "Rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "While",
    "family": "time",
    "translation": "Enquanto",
    "explanation": "While can show two actions at the same time, or a contrast.",
    "fullSentence": "While the QA team tested the API, the developers fixed the UI bugs.",
    "sentenceTranslation": "Enquanto o time de QA testava a API, os desenvolvedores corrigiam os bugs da interface.",
    "whyCorrect": "'While' denota simultaneidade no tempo contínuo ('enquanto duas ações transcorriam ao mesmo tempo').",
    "whyOthersFail": "'Unless' expressa condição. 'Due to' expressa causa. 'Rather than' expressa preferência.",
    "proTip": "'While' pode significar 'enquanto' (tempo) ou 'ao passo que' (contraste). Ambos funcionam muito bem em comunicação técnica."
  },
  {
    "id": "q-rather-than-1",
    "prompt": "We can hire one more backend developer _____ a frontend developer.",
    "options": [
      {
        "id": "a",
        "text": "because"
      },
      {
        "id": "b",
        "text": "rather than"
      },
      {
        "id": "c",
        "text": "so that"
      },
      {
        "id": "d",
        "text": "even if"
      }
    ],
    "correctOptionId": "b",
    "connector": "rather than",
    "family": "substitution",
    "translation": "Em vez de / preferível a",
    "explanation": "Rather than shows a preference between two options.",
    "fullSentence": "We can hire one more backend developer rather than a frontend developer.",
    "sentenceTranslation": "Nós podemos contratar mais um desenvolvedor backend em vez de um desenvolvedor frontend.",
    "whyCorrect": "'Rather than' expressa preferência deliberada de uma alternativa sobre outra ('em vez de / preferível a').",
    "whyOthersFail": "'Because' indicaria causa. 'So that' indicaria objetivo. 'Even if' indicaria condição extrema.",
    "proTip": "Use 'rather than' para expor escolhas arquiteturais ponderadas: 'We chose TypeScript rather than plain JavaScript'."
  },
  {
    "id": "q-gremio-portalupi-1",
    "prompt": "The Grêmio squad is training now; _____, coach Renato Portalupi is at the press conference.",
    "options": [
      {
        "id": "a",
        "text": "meanwhile"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "because of"
      },
      {
        "id": "d",
        "text": "in case"
      }
    ],
    "correctOptionId": "a",
    "connector": "meanwhile",
    "family": "time",
    "translation": "Enquanto isso",
    "explanation": "Meanwhile highlights two events happening in parallel at the same time.",
    "fullSentence": "The Grêmio squad is training now; meanwhile, coach Renato Portalupi is at the press conference.",
    "sentenceTranslation": "Tradução: \"The Grêmio squad is training now; meanwhile, coach Renato Portalupi is at the press conference.\"",
    "whyCorrect": "Meanwhile highlights two events happening in parallel at the same time.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'meanwhile' expressa time. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-scrum-master-1",
    "prompt": "The Scrum Master conducted the Retrospective _____ the developers and the QAs.",
    "options": [
      {
        "id": "a",
        "text": "along with"
      },
      {
        "id": "b",
        "text": "instead of"
      },
      {
        "id": "c",
        "text": "even if"
      },
      {
        "id": "d",
        "text": "because of"
      }
    ],
    "correctOptionId": "a",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "Along with expresses togetherness, inclusion, or company.",
    "fullSentence": "The Scrum Master conducted the Retrospective along with the developers and the QAs.",
    "sentenceTranslation": "Tradução: \"The Scrum Master conducted the Retrospective along with the developers and the QAs.\"",
    "whyCorrect": "Along with expresses togetherness, inclusion, or company.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'along with' expressa addition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-iphone-1",
    "prompt": "When you buy a new iPhone, the charger won't come _____ the phone.",
    "options": [
      {
        "id": "a",
        "text": "along with"
      },
      {
        "id": "b",
        "text": "as well"
      },
      {
        "id": "c",
        "text": "whereas"
      },
      {
        "id": "d",
        "text": "unless"
      }
    ],
    "correctOptionId": "a",
    "connector": "along with",
    "family": "addition",
    "translation": "Junto com",
    "explanation": "Along with indicates something accompanying or bundled with another item.",
    "fullSentence": "When you buy a new iPhone, the charger won't come along with the phone.",
    "sentenceTranslation": "Tradução: \"When you buy a new iPhone, the charger won't come along with the phone.\"",
    "whyCorrect": "Along with indicates something accompanying or bundled with another item.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'along with' expressa addition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-above-all-1",
    "prompt": "_____, we must ensure our production databases are secured against unauthorized access.",
    "options": [
      {
        "id": "a",
        "text": "Above all"
      },
      {
        "id": "b",
        "text": "In contrast"
      },
      {
        "id": "c",
        "text": "Nor"
      },
      {
        "id": "d",
        "text": "Rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "Above all",
    "family": "emphasis",
    "translation": "Acima de tudo",
    "explanation": "Above all stresses the top priority or most crucial element.",
    "fullSentence": "Above all, we must ensure our production databases are secured against unauthorized access.",
    "sentenceTranslation": "Tradução: \"Above all, we must ensure our production databases are secured against unauthorized access.\"",
    "whyCorrect": "Above all stresses the top priority or most crucial element.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Above all' expressa emphasis. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-afterwards-1",
    "prompt": "We will conduct the daily standup first; _____, we can pair program on the critical bug.",
    "options": [
      {
        "id": "a",
        "text": "afterwards"
      },
      {
        "id": "b",
        "text": "although"
      },
      {
        "id": "c",
        "text": "due to"
      },
      {
        "id": "d",
        "text": "as well as"
      }
    ],
    "correctOptionId": "a",
    "connector": "afterwards",
    "family": "time",
    "translation": "Posteriormente / depois",
    "explanation": "Afterwards points to a subsequent point in time after the prior action.",
    "fullSentence": "We will conduct the daily standup first; afterwards, we can pair program on the critical bug.",
    "sentenceTranslation": "Tradução: \"We will conduct the daily standup first; afterwards, we can pair program on the critical bug.\"",
    "whyCorrect": "Afterwards points to a subsequent point in time after the prior action.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'afterwards' expressa time. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-all-in-all-1",
    "prompt": "_____, the sprint was a success despite the unexpected infrastructure downtime.",
    "options": [
      {
        "id": "a",
        "text": "All in all"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Instead of"
      },
      {
        "id": "d",
        "text": "Whereas"
      }
    ],
    "correctOptionId": "a",
    "connector": "All in all",
    "family": "summary",
    "translation": "De tudo em tudo / em suma",
    "explanation": "All in all expresses an overall judgment when taking everything into consideration.",
    "fullSentence": "All in all, the sprint was a success despite the unexpected infrastructure downtime.",
    "sentenceTranslation": "Tradução: \"All in all, the sprint was a success despite the unexpected infrastructure downtime.\"",
    "whyCorrect": "All in all expresses an overall judgment when taking everything into consideration.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'All in all' expressa summary. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-apart-from-1",
    "prompt": "_____ a few minor styling quirks on mobile, the web application is ready for deploy.",
    "options": [
      {
        "id": "a",
        "text": "Apart from"
      },
      {
        "id": "b",
        "text": "Because"
      },
      {
        "id": "c",
        "text": "Although"
      },
      {
        "id": "d",
        "text": "Even if"
      }
    ],
    "correctOptionId": "a",
    "connector": "Apart from",
    "family": "substitution",
    "translation": "Excetuando / excluindo",
    "explanation": "Apart from excludes something specific from a general statement.",
    "fullSentence": "Apart from a few minor styling quirks on mobile, the web application is ready for deploy.",
    "sentenceTranslation": "Tradução: \"Apart from a few minor styling quirks on mobile, the web application is ready for deploy.\"",
    "whyCorrect": "Apart from excludes something specific from a general statement.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Apart from' expressa substitution. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-beforehand-1",
    "prompt": "Please review the pull request _____ so our sync call can be fast and productive.",
    "options": [
      {
        "id": "a",
        "text": "beforehand"
      },
      {
        "id": "b",
        "text": "at all"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "so that"
      }
    ],
    "correctOptionId": "a",
    "connector": "beforehand",
    "family": "time",
    "translation": "De antemão / previamente",
    "explanation": "Beforehand means prior to an agreed event or meeting.",
    "fullSentence": "Please review the pull request beforehand so our sync call can be fast and productive.",
    "sentenceTranslation": "Tradução: \"Please review the pull request beforehand so our sync call can be fast and productive.\"",
    "whyCorrect": "Beforehand means prior to an agreed event or meeting.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'beforehand' expressa time. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-consequently-1",
    "prompt": "The build pipeline failed; _____, no new artifacts were deployed to staging.",
    "options": [
      {
        "id": "a",
        "text": "consequently"
      },
      {
        "id": "b",
        "text": "whereas"
      },
      {
        "id": "c",
        "text": "instead of"
      },
      {
        "id": "d",
        "text": "even though"
      }
    ],
    "correctOptionId": "a",
    "connector": "consequently",
    "family": "cause",
    "translation": "Consequentemente",
    "explanation": "Consequently is a formal transitional connector indicating a logical outcome.",
    "fullSentence": "The build pipeline failed; consequently, no new artifacts were deployed to staging.",
    "sentenceTranslation": "Tradução: \"The build pipeline failed; consequently, no new artifacts were deployed to staging.\"",
    "whyCorrect": "Consequently is a formal transitional connector indicating a logical outcome.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'consequently' expressa cause. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-definitely-1",
    "prompt": "My team built a POC (Proof of Concept) and, _____, we can deliver the program.",
    "options": [
      {
        "id": "a",
        "text": "definitely"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "instead"
      },
      {
        "id": "d",
        "text": "in spite of"
      }
    ],
    "correctOptionId": "a",
    "connector": "definitely",
    "family": "emphasis",
    "translation": "Definitivamente",
    "explanation": "Definitely expresses absolute certainty and confidence.",
    "fullSentence": "My team built a POC (Proof of Concept) and, definitely, we can deliver the program.",
    "sentenceTranslation": "Tradução: \"My team built a POC (Proof of Concept) and, definitely, we can deliver the program.\"",
    "whyCorrect": "Definitely expresses absolute certainty and confidence.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'definitely' expressa emphasis. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-equally-1",
    "prompt": "Writing clean code and writing comprehensive automated tests are _____ important.",
    "options": [
      {
        "id": "a",
        "text": "equally"
      },
      {
        "id": "b",
        "text": "rather"
      },
      {
        "id": "c",
        "text": "otherwise"
      },
      {
        "id": "d",
        "text": "meanwhile"
      }
    ],
    "correctOptionId": "a",
    "connector": "equally",
    "family": "addition",
    "translation": "Igualmente",
    "explanation": "Equally indicates identical value or parity between two components.",
    "fullSentence": "Writing clean code and writing comprehensive automated tests are equally important.",
    "sentenceTranslation": "Tradução: \"Writing clean code and writing comprehensive automated tests are equally important.\"",
    "whyCorrect": "Equally indicates identical value or parity between two components.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'equally' expressa addition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-furthermore-1",
    "prompt": "The new component architecture is cleaner; _____, it renders twice as fast.",
    "options": [
      {
        "id": "a",
        "text": "furthermore"
      },
      {
        "id": "b",
        "text": "despite"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "because of"
      }
    ],
    "correctOptionId": "a",
    "connector": "furthermore",
    "family": "addition",
    "translation": "Além do mais / de mais a mais",
    "explanation": "Furthermore adds another strong supporting argument to the topic.",
    "fullSentence": "The new component architecture is cleaner; furthermore, it renders twice as fast.",
    "sentenceTranslation": "Tradução: \"The new component architecture is cleaner; furthermore, it renders twice as fast.\"",
    "whyCorrect": "Furthermore adds another strong supporting argument to the topic.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'furthermore' expressa addition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-in-contrast-1",
    "prompt": "_____ legacy monolithic applications, microservices scale independently.",
    "options": [
      {
        "id": "a",
        "text": "In contrast to"
      },
      {
        "id": "b",
        "text": "In order to"
      },
      {
        "id": "c",
        "text": "As long as"
      },
      {
        "id": "d",
        "text": "So that"
      }
    ],
    "correctOptionId": "a",
    "connector": "In contrast to",
    "family": "contrast",
    "translation": "Em contraste com / ao contrário de",
    "explanation": "In contrast to explicitly contrasts two opposite architectural paradigms.",
    "fullSentence": "In contrast to legacy monolithic applications, microservices scale independently.",
    "sentenceTranslation": "Tradução: \"In contrast to legacy monolithic applications, microservices scale independently.\"",
    "whyCorrect": "In contrast to explicitly contrasts two opposite architectural paradigms.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'In contrast to' expressa contrast. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-in-short-1",
    "prompt": "The security audit was thorough. _____, all vulnerability tests passed without issue.",
    "options": [
      {
        "id": "a",
        "text": "In short"
      },
      {
        "id": "b",
        "text": "Due to"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Although"
      }
    ],
    "correctOptionId": "a",
    "connector": "In short",
    "family": "summary",
    "translation": "Para resumir / em suma",
    "explanation": "In short condenses detailed information into a brief bottom line.",
    "fullSentence": "The security audit was thorough. In short, all vulnerability tests passed without issue.",
    "sentenceTranslation": "Tradução: \"The security audit was thorough. In short, all vulnerability tests passed without issue.\"",
    "whyCorrect": "In short condenses detailed information into a brief bottom line.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'In short' expressa summary. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-nevertheless-1",
    "prompt": "The performance bottleneck was tricky to isolate; _____, our team resolved it before release.",
    "options": [
      {
        "id": "a",
        "text": "nevertheless"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "as well as"
      },
      {
        "id": "d",
        "text": "so that"
      }
    ],
    "correctOptionId": "a",
    "connector": "nevertheless",
    "family": "contrast",
    "translation": "Contudo / todavia / não obstante",
    "explanation": "Nevertheless introduces a contrast with a formal tone.",
    "fullSentence": "The performance bottleneck was tricky to isolate; nevertheless, our team resolved it before release.",
    "sentenceTranslation": "Tradução: \"The performance bottleneck was tricky to isolate; nevertheless, our team resolved it before release.\"",
    "whyCorrect": "Nevertheless introduces a contrast with a formal tone.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'nevertheless' expressa contrast. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-nonetheless-1",
    "prompt": "The refactoring was risky; _____, it decreased technical debt substantially.",
    "options": [
      {
        "id": "a",
        "text": "nonetheless"
      },
      {
        "id": "b",
        "text": "due to"
      },
      {
        "id": "c",
        "text": "for instance"
      },
      {
        "id": "d",
        "text": "in order to"
      }
    ],
    "correctOptionId": "a",
    "connector": "nonetheless",
    "family": "contrast",
    "translation": "Não obstante / ainda assim",
    "explanation": "Nonetheless signals that a positive result happened despite high difficulty.",
    "fullSentence": "The refactoring was risky; nonetheless, it decreased technical debt substantially.",
    "sentenceTranslation": "Tradução: \"The refactoring was risky; nonetheless, it decreased technical debt substantially.\"",
    "whyCorrect": "Nonetheless signals that a positive result happened despite high difficulty.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'nonetheless' expressa contrast. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-nor-1",
    "prompt": "The database cluster did not crash, _____ did it lose any user transactions.",
    "options": [
      {
        "id": "a",
        "text": "nor"
      },
      {
        "id": "b",
        "text": "or"
      },
      {
        "id": "c",
        "text": "although"
      },
      {
        "id": "d",
        "text": "because"
      }
    ],
    "correctOptionId": "a",
    "connector": "nor",
    "family": "addition",
    "translation": "Nem",
    "explanation": "Nor coordinates two negative ideas, triggering subject-auxiliary inversion (nor did it...).",
    "fullSentence": "The database cluster did not crash, nor did it lose any user transactions.",
    "sentenceTranslation": "Tradução: \"The database cluster did not crash, nor did it lose any user transactions.\"",
    "whyCorrect": "Nor coordinates two negative ideas, triggering subject-auxiliary inversion (nor did it...).",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'nor' expressa addition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-on-the-whole-1",
    "prompt": "There were minor bumps during onboarding, but _____, the new developers are performing brilliantly.",
    "options": [
      {
        "id": "a",
        "text": "on the whole"
      },
      {
        "id": "b",
        "text": "instead of"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "on the whole",
    "family": "summary",
    "translation": "No todo / de modo geral",
    "explanation": "On the whole expresses an overall assessment overlooking minor exceptions.",
    "fullSentence": "There were minor bumps during onboarding, but on the whole, the new developers are performing brilliantly.",
    "sentenceTranslation": "Tradução: \"There were minor bumps during onboarding, but on the whole, the new developers are performing brilliantly.\"",
    "whyCorrect": "On the whole expresses an overall assessment overlooking minor exceptions.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'on the whole' expressa summary. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-only-if-1",
    "prompt": "We will trigger the production release _____ all automated end-to-end checks succeed.",
    "options": [
      {
        "id": "a",
        "text": "only if"
      },
      {
        "id": "b",
        "text": "rather than"
      },
      {
        "id": "c",
        "text": "in spite of"
      },
      {
        "id": "d",
        "text": "meanwhile"
      }
    ],
    "correctOptionId": "a",
    "connector": "only if",
    "family": "condition",
    "translation": "Apenas se",
    "explanation": "Only if enforces an essential, strict condition.",
    "fullSentence": "We will trigger the production release only if all automated end-to-end checks succeed.",
    "sentenceTranslation": "Tradução: \"We will trigger the production release only if all automated end-to-end checks succeed.\"",
    "whyCorrect": "Only if enforces an essential, strict condition.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'only if' expressa condition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-particularly-1",
    "prompt": "We need to optimize memory usage, _____ when processing large CSV files.",
    "options": [
      {
        "id": "a",
        "text": "particularly"
      },
      {
        "id": "b",
        "text": "otherwise"
      },
      {
        "id": "c",
        "text": "unless"
      },
      {
        "id": "d",
        "text": "instead"
      }
    ],
    "correctOptionId": "a",
    "connector": "particularly",
    "family": "emphasis",
    "translation": "Particularmente / especialmente",
    "explanation": "Particularly isolates and highlights a noteworthy specific instance.",
    "fullSentence": "We need to optimize memory usage, particularly when processing large CSV files.",
    "sentenceTranslation": "Tradução: \"We need to optimize memory usage, particularly when processing large CSV files.\"",
    "whyCorrect": "Particularly isolates and highlights a noteworthy specific instance.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'particularly' expressa emphasis. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-since-1",
    "prompt": "_____ you are already proficient in TypeScript, learning React 19 will be very fast.",
    "options": [
      {
        "id": "a",
        "text": "Since"
      },
      {
        "id": "b",
        "text": "Unless"
      },
      {
        "id": "c",
        "text": "Despite"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "Since",
    "family": "cause",
    "translation": "Visto que / já que",
    "explanation": "Since can express causality ('given that / because') when placed at the clause start.",
    "fullSentence": "Since you are already proficient in TypeScript, learning React 19 will be very fast.",
    "sentenceTranslation": "Tradução: \"Since you are already proficient in TypeScript, learning React 19 will be very fast.\"",
    "whyCorrect": "Since can express causality ('given that / because') when placed at the clause start.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Since' expressa cause. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-such-as-1",
    "prompt": "Modern frontend libraries, _____ React and Vue, utilize virtual DOM or fine-grained reactivity.",
    "options": [
      {
        "id": "a",
        "text": "such as"
      },
      {
        "id": "b",
        "text": "so that"
      },
      {
        "id": "c",
        "text": "whereas"
      },
      {
        "id": "d",
        "text": "nevertheless"
      }
    ],
    "correctOptionId": "a",
    "connector": "such as",
    "family": "example",
    "translation": "Tal como / como por exemplo",
    "explanation": "Such as introduces concrete examples belonging to a group.",
    "fullSentence": "Modern frontend libraries, such as React and Vue, utilize virtual DOM or fine-grained reactivity.",
    "sentenceTranslation": "Tradução: \"Modern frontend libraries, such as React and Vue, utilize virtual DOM or fine-grained reactivity.\"",
    "whyCorrect": "Such as introduces concrete examples belonging to a group.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'such as' expressa example. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-summing-up-1",
    "prompt": "_____, our unit test coverage hit 90% and all sprint goals were reached.",
    "options": [
      {
        "id": "a",
        "text": "Summing up"
      },
      {
        "id": "b",
        "text": "Because of"
      },
      {
        "id": "c",
        "text": "Even if"
      },
      {
        "id": "d",
        "text": "Rather than"
      }
    ],
    "correctOptionId": "a",
    "connector": "Summing up",
    "family": "summary",
    "translation": "Resumindo",
    "explanation": "Summing up introduces a concise wrap-up of preceding points.",
    "fullSentence": "Summing up, our unit test coverage hit 90% and all sprint goals were reached.",
    "sentenceTranslation": "Tradução: \"Summing up, our unit test coverage hit 90% and all sprint goals were reached.\"",
    "whyCorrect": "Summing up introduces a concise wrap-up of preceding points.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Summing up' expressa summary. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-thus-1",
    "prompt": "We enabled response caching on the reverse proxy, _____ cutting API latency by half.",
    "options": [
      {
        "id": "a",
        "text": "thus"
      },
      {
        "id": "b",
        "text": "unless"
      },
      {
        "id": "c",
        "text": "although"
      },
      {
        "id": "d",
        "text": "whereas"
      }
    ],
    "correctOptionId": "a",
    "connector": "thus",
    "family": "cause",
    "translation": "Dessa forma / portanto",
    "explanation": "Thus shows the manner or direct technical consequence of an action.",
    "fullSentence": "We enabled response caching on the reverse proxy, thus cutting API latency by half.",
    "sentenceTranslation": "Tradução: \"We enabled response caching on the reverse proxy, thus cutting API latency by half.\"",
    "whyCorrect": "Thus shows the manner or direct technical consequence of an action.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'thus' expressa cause. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-to-sum-up-1",
    "prompt": "_____, mastering English connectors is critical for clear international engineering collaboration.",
    "options": [
      {
        "id": "a",
        "text": "To sum up"
      },
      {
        "id": "b",
        "text": "Due to"
      },
      {
        "id": "c",
        "text": "Unless"
      },
      {
        "id": "d",
        "text": "Even if"
      }
    ],
    "correctOptionId": "a",
    "connector": "To sum up",
    "family": "summary",
    "translation": "Para resumir",
    "explanation": "To sum up introduces a formal final takeaway.",
    "fullSentence": "To sum up, mastering English connectors is critical for clear international engineering collaboration.",
    "sentenceTranslation": "Tradução: \"To sum up, mastering English connectors is critical for clear international engineering collaboration.\"",
    "whyCorrect": "To sum up introduces a formal final takeaway.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'To sum up' expressa summary. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-towards-1",
    "prompt": "The engineering squad made major strides _____ shipping the new microservice.",
    "options": [
      {
        "id": "a",
        "text": "towards"
      },
      {
        "id": "b",
        "text": "instead of"
      },
      {
        "id": "c",
        "text": "although"
      },
      {
        "id": "d",
        "text": "because"
      }
    ],
    "correctOptionId": "a",
    "connector": "towards",
    "family": "purpose",
    "translation": "Em direção a / rumo a",
    "explanation": "Towards indicates direction or progress heading toward a goal.",
    "fullSentence": "The engineering squad made major strides towards shipping the new microservice.",
    "sentenceTranslation": "Tradução: \"The engineering squad made major strides towards shipping the new microservice.\"",
    "whyCorrect": "Towards indicates direction or progress heading toward a goal.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'towards' expressa purpose. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-unlike-1",
    "prompt": "_____ dynamic languages, TypeScript catches typos and type mismatches at compile time.",
    "options": [
      {
        "id": "a",
        "text": "Unlike"
      },
      {
        "id": "b",
        "text": "In order to"
      },
      {
        "id": "c",
        "text": "Because"
      },
      {
        "id": "d",
        "text": "So that"
      }
    ],
    "correctOptionId": "a",
    "connector": "Unlike",
    "family": "contrast",
    "translation": "Diferentemente de",
    "explanation": "Unlike points out the key contrast or differentiation between two subjects.",
    "fullSentence": "Unlike dynamic languages, TypeScript catches typos and type mismatches at compile time.",
    "sentenceTranslation": "Tradução: \"Unlike dynamic languages, TypeScript catches typos and type mismatches at compile time.\"",
    "whyCorrect": "Unlike points out the key contrast or differentiation between two subjects.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Unlike' expressa contrast. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-whatever-1",
    "prompt": "_____ occurs during the live demonstration, maintain your focus and note any edge cases.",
    "options": [
      {
        "id": "a",
        "text": "Whatever"
      },
      {
        "id": "b",
        "text": "Because"
      },
      {
        "id": "c",
        "text": "Rather"
      },
      {
        "id": "d",
        "text": "Unless"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whatever",
    "family": "emphasis",
    "translation": "O que quer que seja / seja o que for",
    "explanation": "Whatever covers any arbitrary condition or scenario without restriction.",
    "fullSentence": "Whatever occurs during the live demonstration, maintain your focus and note any edge cases.",
    "sentenceTranslation": "Tradução: \"Whatever occurs during the live demonstration, maintain your focus and note any edge cases.\"",
    "whyCorrect": "Whatever covers any arbitrary condition or scenario without restriction.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Whatever' expressa emphasis. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-whenever-1",
    "prompt": "_____ you push new commits to GitHub, GitHub Actions runs the automated test suite.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "Despite"
      },
      {
        "id": "c",
        "text": "Rather than"
      },
      {
        "id": "d",
        "text": "Instead of"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whenever",
    "family": "time",
    "translation": "Sempre que / quando quer que seja",
    "explanation": "Whenever refers to every time an action or event occurs.",
    "fullSentence": "Whenever you push new commits to GitHub, GitHub Actions runs the automated test suite.",
    "sentenceTranslation": "Tradução: \"Whenever you push new commits to GitHub, GitHub Actions runs the automated test suite.\"",
    "whyCorrect": "Whenever refers to every time an action or event occurs.",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'Whenever' expressa time. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-whether-1",
    "prompt": "The architect must decide _____ to optimize the existing database schema or migrate to NoSQL.",
    "options": [
      {
        "id": "a",
        "text": "whether"
      },
      {
        "id": "b",
        "text": "despite"
      },
      {
        "id": "c",
        "text": "meanwhile"
      },
      {
        "id": "d",
        "text": "along with"
      }
    ],
    "correctOptionId": "a",
    "connector": "whether",
    "family": "condition",
    "translation": "Se (escolha entre alternativas)",
    "explanation": "Whether is used when presenting alternatives (whether X or Y).",
    "fullSentence": "The architect must decide whether to optimize the existing database schema or migrate to NoSQL.",
    "sentenceTranslation": "Tradução: \"The architect must decide whether to optimize the existing database schema or migrate to NoSQL.\"",
    "whyCorrect": "Whether is used when presenting alternatives (whether X or Y).",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'whether' expressa condition. Preste atenção na relação lógica entre as orações para acertar sempre!"
  },
  {
    "id": "q-yet-1",
    "prompt": "The code structure is minimal and simple, _____ remarkably resilient under heavy load.",
    "options": [
      {
        "id": "a",
        "text": "yet"
      },
      {
        "id": "b",
        "text": "because of"
      },
      {
        "id": "c",
        "text": "in order to"
      },
      {
        "id": "d",
        "text": "due to"
      }
    ],
    "correctOptionId": "a",
    "connector": "yet",
    "family": "contrast",
    "translation": "Ainda assim / contudo",
    "explanation": "Yet contrasts two properties in a concise, refined manner (simple yet resilient).",
    "fullSentence": "The code structure is minimal and simple, yet remarkably resilient under heavy load.",
    "sentenceTranslation": "Tradução: \"The code structure is minimal and simple, yet remarkably resilient under heavy load.\"",
    "whyCorrect": "Yet contrasts two properties in a concise, refined manner (simple yet resilient).",
    "whyOthersFail": "As outras alternativas alteram o sentido pretendido ou violam a regência gramatical exigida nesta oração.",
    "proTip": "Dica do Professor: O conector 'yet' expressa contrast. Preste atenção na relação lógica entre as orações para acertar sempre!"
  }
];
