// Anotações pedagógicas detalhadas elaboradas por Professor de Inglês Fluente
// Foco em aprendizado profundo, contexto real e ausência de julgamento

export type TeacherNote = {
  sentenceTranslation: string;
  whyCorrect: string;
  whyOthersFail: string;
  proTip: string;
};

export const TEACHER_NOTES: Record<string, TeacherNote> = {
  "q-user-along-with-iphone": {
    "sentenceTranslation": "Quando você compra um novo iPhone, precisa comprar o carregador separadamente. Ele não virá junto com o telefone.",
    "whyCorrect": "'Along with' expressa inclusão e acompanhamento físico ou conceitual ('junto com o telefone').",
    "whyOthersFail": "'Instead of' significa 'em vez de'. 'Because of' indica causa ('por causa de'). 'In order to' expressa finalidade ('a fim de').",
    "proTip": "Lembre-se: 'Along with' funciona como 'together with'. Muito usado para pacotes, acessórios e entregas conjuntas."
  },
  "q-user-along-with-scrum": {
    "sentenceTranslation": "O Scrum Master realizou a Retrospectiva junto com os desenvolvedores e os QAs.",
    "whyCorrect": "'Along with' conecta os participantes da reunião, mostrando que a Retrospectiva foi conduzida em conjunto.",
    "whyOthersFail": "'Apart from' excluiria os devs e QAs ('exceto os devs'). 'Due to' indicaria causa. 'Instead of' indicaria que fez com um em substituição a outro.",
    "proTip": "No vocabulário ágil, use 'along with' para enfatizar colaboração entre diferentes papéis da squad!"
  },
  "q-user-along-with-cinthia": {
    "sentenceTranslation": "Fiz uma reserva em um restaurante, e a Cinthia vai junto comigo.",
    "whyCorrect": "'Along with me' é a forma natural de dizer que alguém vai como sua companhia.",
    "whyOthersFail": "'Rather than' indicaria preferência ('em vez de mim'). 'In case' expressa hipótese/precaução. 'Even if' expressa condição extrema.",
    "proTip": "'Go along with someone' é superexpressivo no dia a dia. Também pode significar concordar com uma ideia!"
  },
  "q-user-as-a-result-gremio": {
    "sentenceTranslation": "O Grêmio perdeu mais uma partida no sábado e, como resultado, o técnico foi demitido.",
    "whyCorrect": "A demissão é o efeito direto e a consequência da derrota sucessiva. 'As a result' é o conector exato de causa e efeito.",
    "whyOthersFail": "'However' expressaria oposição (como se perder fosse bom). 'Unless' introduz condição negativa. 'Instead of' requer gerúndio ou substantivo.",
    "proTip": "Dica de Ouro: [Causa no passado] + 'and, as a result,' + [Consequência]. Estrutura imbatível em relatórios e conversas!"
  },
  "q-user-as-far-as-rebeca": {
    "sentenceTranslation": "Até onde eu sei, a Rebeca entregou o projeto no prazo.",
    "whyCorrect": "'As far as' limita a afirmação ao alcance do conhecimento de quem fala ('As far as I know').",
    "whyOthersFail": "'In order to' exige verbo no infinitivo de finalidade. 'Because of' exige substantivo causal. 'As well as' adiciona elementos.",
    "proTip": "Grave essa expressão para reuniões corporativas: 'As far as I know...' demonstra segurança sem prometer o que você não checou pessoalmente."
  },
  "q-user-as-far-as-screen": {
    "sentenceTranslation": "Pelo que o cliente me disse, o problema é que a tela não funciona.",
    "whyCorrect": "'As far as' relata a informação recebida de terceiros com precisão profissional.",
    "whyOthersFail": "'Due to' exige substantivo direto de causa ('due to the screen failure'). 'Even if' é condicional. 'Rather than' expressa preferência.",
    "proTip": "'As far as the client is concerned' ou 'As far as they told me' são locuções chave em suporte e sustentação!"
  },
  "q-user-as-well-as-qa": {
    "sentenceTranslation": "O time precisa de um desenvolvedor de software bem como de um QA.",
    "whyCorrect": "'As well as' adiciona o QA ao desenvolvedor de forma elegante e equilibrada.",
    "whyOthersFail": "'Although' expressa concessão. 'Unless' expressa exceção/condição. 'In case' expressa precaução.",
    "proTip": "Use 'as well as' em descrições de vagas e composição de squads: soa muito mais profissional do que apenas repetir 'and'."
  },
  "q-user-at-last-gremio": {
    "sentenceTranslation": "O Renato Gaúcho assinou com o Grêmio finalmente / por fim.",
    "whyCorrect": "'At last' traz o sentimento de alívio e conclusão de uma longa espera.",
    "whyOthersFail": "'At all' é usado para ênfase negativa ou intensidade ('not at all'). 'Due to' precisa de substantivo de causa. 'In order to' precisa de infinitivo.",
    "proTip": "Diferença do Professor: 'At last' = Finalmente! (com emoção e alívio). 'Lastly' = Em último lugar numa lista."
  },
  "q-user-at-least-math": {
    "sentenceTranslation": "Embora eu não tenha estudado o suficiente, pelo menos estudei Matemática, a mais difícil.",
    "whyCorrect": "'At least' valoriza a conquista mínima alcançada diante de um cenário imperfeito.",
    "whyOthersFail": "'At last' significa 'finalmente'. 'Instead of' precisa de gerúndio. 'As well' ficaria no final com sentido de 'também'.",
    "proTip": "Pares expressivos: 'Although [adversidade], at least [vitória mínima]'. Perfeito para retrospectivas de sprints difíceis!"
  },
  "q-user-definitely-poc": {
    "sentenceTranslation": "Meu time fez uma POC (Prova de Conceito) e, com certeza, nós conseguimos construir o programa.",
    "whyCorrect": "'Definitely' reforça que o teste de viabilidade deu 100% de segurança técnica para avançar.",
    "whyOthersFail": "'Scarcely' significa 'quase não / malmente'. 'Unless' indica condição negativa. 'Instead' requer alternativa anterior.",
    "proTip": "Lembre-se da escrita: D-E-F-I-N-I-T-E-L-Y. Dica de pronúncia: a sílaba tônica é na primeira: 'DE-fi-nit-ly'."
  },
  "q-user-meanwhile-tech": {
    "sentenceTranslation": "Os engenheiros frontend começaram a construir a interface de usuário. Enquanto isso, o time backend configurou os esquemas de banco e endpoints de autenticação.",
    "whyCorrect": "'Meanwhile' é a palavra de transição perfeita para orações consecutivas narrando atividades em paralelo.",
    "whyOthersFail": "'Unless' introduz uma condição negativa. 'Despite' requer substantivo. 'Because' exige oração causal subordinada.",
    "proTip": "'Meanwhile' escreve-se tudo junto em uma única palavra. Sempre seguido de vírgula quando inicia a frase!"
  },
  "q-user-nor-tech": {
    "sentenceTranslation": "Nós não gostamos nem de Java nem dos frameworks Spring.",
    "whyCorrect": "A regra gramatical é estrita: 'Either' faz par com 'or'; 'Neither' faz par com 'nor'.",
    "whyOthersFail": "'Neither... or' é um erro gramatical muito comum em testes. O par correto de 'neither' é exclusivamente 'nor'.",
    "proTip": "Mnemônica de Ouro do Professor: N com N (Neither... Nor). Sem N com sem N (Either... Or)!"
  },
  "q-user-only-if-cinthia": {
    "sentenceTranslation": "Eu vou à festa, apenas se a Cinthia for também.",
    "whyCorrect": "'Only if' mostra que a ida à festa depende exclusivamente da presença da Cinthia.",
    "whyOthersFail": "'Instead of' exigiria gerúndio. 'In spite of' expressaria concessão. 'Whereas' contrasta dois fatos.",
    "proTip": "'Only if' = 'SÓ SE'. Se a condição não acontecer, a ação principal não acontece de jeito nenhum!"
  },
  "q-user-otherwise-joke": {
    "sentenceTranslation": "Primeiro vou chamar o comissário de bordo, senão vou ligar para o 911 e eles que lutem!",
    "whyCorrect": "'Otherwise' funciona como 'do contrário / senão', estabelecendo o plano B imediato.",
    "whyOthersFail": "'Likewise' expressa 'da mesma forma'. 'As well as' expressa 'assim como'. 'Due to' expressa 'devido a'.",
    "proTip": "Use 'Otherwise' sempre que quiser expressar: 'Faça X, do contrário vai acontecer Y'."
  },
  "q-user-since-gft": {
    "sentenceTranslation": "Eu venho trabalhando na GFT desde 2022.",
    "whyCorrect": "Com ano exato (2022), usamos 'since' para indicar quando a ação começou.",
    "whyOthersFail": "'For' seria usado para a duração total calculada ('for 4 years'), não para o ano específico. 'During' e 'while' não marcam ponto de início com Present Perfect.",
    "proTip": "Regra clássica de entrevista: Ponto de partida específico (2022, yesterday, last month) = SINCE. Período de tempo corrido (3 years, 2 months) = FOR."
  },
  "q-user-so-career": {
    "sentenceTranslation": "Na verdade, não estou trabalhando como desenvolvedor de software, por isso não programo mais.",
    "whyCorrect": "'So' introduz o resultado natural da mudança de cargo.",
    "whyOthersFail": "'Although' expressaria contraste. 'Unless' expressaria condição negativa. 'In order to' expressaria finalidade com verbo no infinitivo.",
    "proTip": "'So' é o conector de causa e consequência mais natural e direto da conversa cotidiana!"
  },
  "q-user-such-as-frameworks": {
    "sentenceTranslation": "Quando gerenciamos projetos, é necessário utilizar alguns frameworks tais como Scrum e SAFe.",
    "whyCorrect": "'Such as' introduz Scrum e SAFe como exemplos concretos da categoria 'frameworks'.",
    "whyOthersFail": "'As far as' indica limitação de conhecimento ('as far as I know'). 'In spite of' expressa concessão. 'Instead of' indicaria exclusão.",
    "proTip": "Use 'such as' ao invés de apenas 'like' em relatórios e documentações técnicas para elevar o nível do seu inglês escrito."
  },
  "q-user-thats-why-mongodb": {
    "sentenceTranslation": "Você não corrigiu a tabela no MongoDB. É por isso que o problema não foi resolvido.",
    "whyCorrect": "'That's why' enfatiza o motivo pelo qual o resultado indesejado aconteceu.",
    "whyOthersFail": "'Even though' exigiria contraste na mesma oração. 'Unless' é condicional. 'Instead of' requer substantivo ou gerúndio.",
    "proTip": "'That's why...' é a forma mais empática e clara de explicar causas em post-mortems e revisões de bugs com a squad!"
  },
  "q-user-then-sprint": {
    "sentenceTranslation": "Realizamos a reunião de Sprint Planning. Em seguida, a equipe começou a trabalhar nas histórias.",
    "whyCorrect": "'Then' estabelece a ordem temporal imediata: planejamento primeiro, desenvolvimento depois.",
    "whyOthersFail": "'Unless' introduz condição. 'Because of' e 'Despite' exigem substantivo e não iniciam orações independentes desse modo.",
    "proTip": "A sequência clássica de processos em TI: 'First [passo 1], then [passo 2], finally [conclusão]'."
  },
  "q-user-though-tough-day": {
    "sentenceTranslation": "Foi um dia muito difícil. Eu fiz tudo o que precisava, porém.",
    "whyCorrect": "'Though' no fim de frase é extremamente natural em inglês nativo para dar o tom de superação e contraste.",
    "whyOthersFail": "'Although' NÃO é usado sozinho no fim da frase. 'Because' e 'so that' exigem oração subsequente.",
    "proTip": "Dica de Ouro de Fluência: Colocar 'though' no fim da frase ('I'm tired. I'll go, though') faz você soar fluente como um nativo!"
  },
  "q-user-thus-automation": {
    "sentenceTranslation": "A squad aumentou a cobertura de automação. Dessa forma, o esforço manual foi reduzido.",
    "whyCorrect": "'Thus' expressa o resultado técnico positivo alcançado pela ação.",
    "whyOthersFail": "'Whereas' estabelece contraste analítico. 'Unless' expressa condição negativa. 'In spite of' expressa concessão.",
    "proTip": "'Thus' é extremamente valorizado em apresentações executivas e métricas de DevOps (DORA metrics)!"
  },
  "q-user-to-sum-up-prod": {
    "sentenceTranslation": "Para resumir, depois de tudo o que você disse, você concluiu o deploy em produção.",
    "whyCorrect": "'To sum up' condensa a conversa e vai direto ao ponto central que importava.",
    "whyOthersFail": "'In case' expressa precaução. 'Due to' e 'Because of' exigiriam um substantivo causal.",
    "proTip": "Use 'To sum up...' ao liderar reuniões de fechamento para alinhar todos no plano de ação final."
  },
  "q-user-unlike-remote": {
    "sentenceTranslation": "Diferentemente do meu trabalho anterior, meu trabalho atual é totalmente remoto.",
    "whyCorrect": "'Unlike' recebe um substantivo ('my previous job') para contrapor diretamente ao sujeito seguinte.",
    "whyOthersFail": "'Unless' significa 'a menos que'. 'Instead of' indicaria que você escolheu um em vez de outro no mesmo momento. 'Although' precisaria de oração com verbo conjugado.",
    "proTip": "Lembre-se: UNLIKE = Different from. Muito útil em entrevistas para comparar arquiteturas ou experiências passadas!"
  },
  "q-user-whereas-scrum-kanban": {
    "sentenceTranslation": "O Scrum foca em iterações curtas, ao passo que o Kanban foca em fluxo contínuo.",
    "whyCorrect": "'Whereas' é o conector clássico para confrontar duas filosofias de trabalho paralelas.",
    "whyOthersFail": "'So that' e 'in order to' expressam objetivo/finalidade. 'Due to' exige substantivo de causa.",
    "proTip": "'Whereas' é perfeito para perguntas conceituais de entrevistas de arquitetura ágil!"
  },
  "q-user-whether-decide": {
    "sentenceTranslation": "Precisamos decidir se ficamos ou vamos embora.",
    "whyCorrect": "Antes de verbos no infinitivo ('to stay or leave'), usa-se obrigatoriamente 'whether', nunca 'if'.",
    "whyOthersFail": "'If to stay' é incorreto em inglês formal. 'Unless' significa 'a menos que'. 'Because' expressa causa.",
    "proTip": "Regra de Ouro: Viu 'to + verbo' após o conector ou 'or not' explícito? Escolha sempre 'WHETHER'!"
  },
  "q-user-while-expensive": {
    "sentenceTranslation": "Embora o projeto tenha sido bem-sucedido, foi muito caro.",
    "whyCorrect": "'While' reconhece o sucesso inicial antes de contrapor com o custo elevado.",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Instead of' e 'Because of' exigem substantivos.",
    "proTip": "'While' tem dupla função: 1) Temporal ('while I code'); 2) Concessiva ('while I agree, we cannot proceed')."
  },
  "q-user-yet-task": {
    "sentenceTranslation": "A tarefa era difícil, contudo conseguimos finalizá-la.",
    "whyCorrect": "'Yet' traz elegância adversativa equivalente a 'nevertheless' ou 'but'.",
    "whyOthersFail": "'Unless' indicaria condição negativa. 'Because' indicaria que a dificuldade causou o término. 'So that' expressa objetivo.",
    "proTip": "'Yet' como conjunção liga duas orações contrastantes com sofisticação: 'simple, yet effective'."
  },
  "q-user-in-fact-paola": {
    "sentenceTranslation": "Na verdade, eu não sou a Paola Bracho; sou uma Usurpadora.",
    "whyCorrect": "'In fact' introduz o desmascaramento factual de uma situação.",
    "whyOthersFail": "'Unless' indica condição. 'Due to' precisa de substantivo de causa. 'Instead of' precisa de gerúndio.",
    "proTip": "Use 'In fact' para introduzir a realidade quando outros têm uma impressão equivocada!"
  },
  "q-user-so-messi": {
    "sentenceTranslation": "Não posso ir com antecedência, por isso chamei o Leo Messi para te avisar. Você conhece ele?",
    "whyCorrect": "'So' introduz a consequência direta do impedimento anterior.",
    "whyOthersFail": "'Although' expressa concessão. 'Unless' expressa condição negativa. 'Despite' exige substantivo direto.",
    "proTip": "Uma piada inteligente e descontraída em inglês para quebrar o gelo em reuniões descontraídas!"
  },
  "q-tech-above-all-security": {
    "sentenceTranslation": "Acima de tudo, a squad de engenharia deve garantir que os dados dos clientes estejam criptografados com segurança em repouso.",
    "whyCorrect": "'Above all' é a locução idiomática de maior ênfase para estabelecer o requisito prioritário.",
    "whyOthersFail": "'Over all' (ou overall) significa 'em geral / no cômputo geral'. 'Beyond all' e 'Beside all' não são locuções válidas neste contexto.",
    "proTip": "Em alinhamentos executivos de segurança e conformidade, abra com 'Above all, ...' para capturar total atenção!"
  },
  "q-tech-afterwards-migration": {
    "sentenceTranslation": "Executaremos o script de migração de banco primeiro; depois, verificaremos os índices das tabelas e a consistência do cache.",
    "whyCorrect": "'Afterwards' conecta o passo sequencial imediato de validação pós-migração.",
    "whyOthersFail": "'Meanwhile' indicaria que as duas ações ocorreriam ao mesmo tempo (o que corromperia os índices). 'Unless' é condicional. 'Because' é causal.",
    "proTip": "Padrão de documentação de Runbook: '[Ação de risco] first; afterwards, [etapa de validação]'."
  },
  "q-tech-all-in-all-sprint": {
    "sentenceTranslation": "Enfrentamos dois testes automatizados instáveis, mas no geral, a squad atingiu cada uma das metas da sprint.",
    "whyCorrect": "A locução idiomática fixa é 'all in all'.",
    "whyOthersFail": "'Most in all' não existe. 'Overall in all' é redundante. 'At in all' é agramatical.",
    "proTip": "Use 'All in all' na abertura da Retrospectiva para reconhecer os desafios antes de celebrar as entregas!"
  },
  "q-tech-apart-from-pr": {
    "sentenceTranslation": "Excetuando uma pequena questão de formatação CSS na barra de navegação, o pull request está limpo e pronto para o merge.",
    "whyCorrect": "'Apart from' é a locução consagrada para indicar exceção pontual antes de aprovar um PR.",
    "whyOthersFail": "'Instead from' não existe (é 'instead of'). 'Unlike' compara diferenças entre entidades. 'Despite' não leva preposição 'from'.",
    "proTip": "Ao fazer Code Review no GitHub, use 'Apart from [detalhe], LGTM (Looks Good To Me)!' para dar feedback construtivo e rápido."
  },
  "q-tech-as-long-as-deploy": {
    "sentenceTranslation": "Você pode subir seu hotfix para staging, contanto que todos os testes de fumaça automatizados passem com sucesso.",
    "whyCorrect": "'As long as' expressa a condição prévia mantida ativa durante todo o processo.",
    "whyOthersFail": "'As far as' limita conhecimento ('as far as I know'). 'As well as' significa 'assim como'. 'So far as' não é o padrão condicional aqui.",
    "proTip": "Definição de Pronto (Definition of Done): 'Features can be merged as long as code coverage stays above 80%'."
  },
  "q-tech-because-of-env": {
    "sentenceTranslation": "O container Docker falhou ao iniciar por causa de uma variável de ambiente ausente na configuração de produção.",
    "whyCorrect": "Como não temos um verbo conjugado logo após a lacuna (temos apenas o substantivo 'a missing environment variable'), exige-se 'because of'.",
    "whyOthersFail": "'Because' exigiria oração completa com verbo ('because an environment variable was missing'). 'In order to' expressa objetivo. 'As well as' adiciona.",
    "proTip": "Regra infalível do Professor: [Substantivo puro após a lacuna]? Use 'Because of'! [Sujeito + Verbo]? Use 'Because'!"
  },
  "q-tech-beforehand-backlog": {
    "sentenceTranslation": "O Product Owner refina histórias de usuário complexas de antemão para que os desenvolvedores não enfrentem ambiguidades durante o planejamento da sprint.",
    "whyCorrect": "'Beforehand' sinaliza que o refinamento ocorreu com antecedência ao evento principal.",
    "whyOthersFail": "'Afterwards' significaria depois da reunião (tarde demais). 'Meanwhile' indicaria simultaneidade. 'Instead' indicaria substituição.",
    "proTip": "No vocabulário de Product Management: 'Grooming backlog stories beforehand saves hours of planning meetings!'"
  },
  "q-tech-besides-cache": {
    "sentenceTranslation": "Esta camada de cache Redis reduz a carga do banco de dados; além disso, ela reduz o tempo de resposta da API de 400ms para 18ms.",
    "whyCorrect": "'Besides' conecta argumentos aditivos de reforço ('além do mais / por cima').",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Despite' exige substantivo concessivo. 'Instead' exigiria substituição de alternativa.",
    "proTip": "Ao defender uma proposta de arquitetura: cite o benefício primário e adicione 'besides, ...' com as métricas secundárias!"
  },
  "q-tech-consequently-tests": {
    "sentenceTranslation": "A squad não mockou os endpoints externos de pagamento; consequentemente, a pipeline automatizada deu timeout durante os testes unitários.",
    "whyCorrect": "'Consequently' é a palavra de transição formal ideal para relatórios técnicos de falhas e post-mortems.",
    "whyOthersFail": "'However' expressaria oposição. 'Unless' expressa condição negativa. 'In spite' exige 'of' e tem sentido de concessão.",
    "proTip": "Use 'Consequently' na redação de incidentes de produção para conectar a causa-raiz (root cause) ao impacto sofrido pelo usuário."
  },
  "q-tech-currently-cloud": {
    "sentenceTranslation": "Nossa organização de engenharia está atualmente migrando todos os microsserviços locais para um cluster Kubernetes gerenciado.",
    "whyCorrect": "'Currently' descreve uma ação em andamento no presente ('neste momento').",
    "whyOthersFail": "'Actually' é um falso amigo clássico e significa 'na verdade', não 'atualmente'. 'Eventually' significa 'com o tempo / no final das contas'. 'Hardly' significa 'quase não'.",
    "proTip": "Atenção máxima de fluência: NUNCA diga 'We are actually migrating' quando quiser dizer 'Estamos atualmente migrando'. Diga 'We are CURRENTLY migrating'!"
  },
  "q-tech-due-to-black-friday": {
    "sentenceTranslation": "O congelamento de releases foi aplicado devido ao alto volume de tráfego esperado durante a semana da Black Friday.",
    "whyCorrect": "'Due to' é seguido diretamente de substantivo ('high traffic volume') para apontar a causa oficial.",
    "whyOthersFail": "'Because' exigiria uma oração completa com verbo ('because high traffic volume was expected'). 'Even if' é condicional. 'In order to' expressa finalidade com infinitivo.",
    "proTip": "'Due to + [substantivo]' é a linguagem padrão em memorandos de Change Management e estabilidade de sistemas."
  },
  "q-tech-even-if-auth": {
    "sentenceTranslation": "Mesmo se o provedor primário de autenticação cair, nosso serviço mantém a validação de sessão por meio de assinaturas JWT.",
    "whyCorrect": "'Even if' é a locução condicional perfeita para cenários de resiliência e alta disponibilidade.",
    "whyOthersFail": "'Despite if' não existe na gramática inglesa. 'Unless if' é redundante e incorreto. 'Because if' geraria sentido confuso.",
    "proTip": "Ao desenhar arquiteturas tolerantes a falhas: use 'Even if [componente] fails, our system still [comportamento seguro]'."
  },
  "q-tech-even-though-legacy": {
    "sentenceTranslation": "Embora a base de código tenha sido escrita em PHP legado, os desenvolvedores tiveram sucesso em criar testes automatizados de CI.",
    "whyCorrect": "'Even though' é o par consagrado de concessão enfática seguido de sujeito e verbo.",
    "whyOthersFail": "'Despite though' é agramatical. 'Instead though' não existe. 'Unless though' é incorreto.",
    "proTip": "Diferença vital: 'Even though' trata de um fato real conhecido ('o código ERA legado'). 'Even if' trata de uma hipótese futura incerta."
  },
  "q-tech-furthermore-cluster": {
    "sentenceTranslation": "O novo cluster em nuvem escala automaticamente os pods sob demanda; além disso, ele isola dados sensíveis de clientes em namespaces separados.",
    "whyCorrect": "'Furthermore' é um conector formal aditivo que agrega valor técnico em relatórios de arquitetura.",
    "whyOthersFail": "'However' indicaria contradição. 'Unless' indicaria condição negativa. 'Rather than' expressa preferência.",
    "proTip": "'Furthermore' e 'Moreover' são os conectores formais de ouro para redação de RFCs (Request for Comments) e ADRs!"
  },
  "q-tech-hence-legacy": {
    "sentenceTranslation": "O backend monolítico atingiu seu limite de escalabilidade horizontal, por isso o time de arquitetura decidiu dividi-lo em serviços de domínio.",
    "whyCorrect": "'Hence' é a palavra de transição causal concisa e de prestígio em engenharia de software.",
    "whyOthersFail": "'Despite' requer substantivo concessivo. 'Unless' expressa exceção. 'Whereas' contrapõe duas realidades divergentes.",
    "proTip": "'Hence' pode ser seguido de oração completa ou diretamente de substantivo: 'The service was slow, hence the rewrite'."
  },
  "q-tech-in-advance-migration": {
    "sentenceTranslation": "Por favor informe a squad de DevOps de plantão com antecedência se você planeja executar uma migração em massa de esquema de banco.",
    "whyCorrect": "'In advance' denota antecedência temporal em procedimentos operacionais padrão (SOP).",
    "whyOthersFail": "'At all' é partícula enfática de fim de frase negativa. 'As well as' conecta termos aditivos. 'Due to' introduz causas.",
    "proTip": "Boas práticas de engenharia: 'Always notify the on-call engineer in advance before running database drops or index rebuilds!'"
  },
  "q-tech-in-case-outage": {
    "sentenceTranslation": "Configuramos backups de banco de dados entre regiões e nuvens, para o caso de a região primária da AWS sofrer uma interrupção inesperada.",
    "whyCorrect": "'In case' explica a razão da precaução (disaster recovery).",
    "whyOthersFail": "'Even if' significaria 'mesmo se sofrer', alterando o propósito da frase preventiva. 'In order to' exige verbo no infinitivo. 'Rather than' expressa preferência.",
    "proTip": "Diferença vital: Você configura o backup 'IN CASE' houver desastre (por precaução preventiva prévia)."
  },
  "q-tech-in-order-to-security": {
    "sentenceTranslation": "A squad implementou uma higienização rigorosa de entradas a fim de prevenir ataques de injeção SQL.",
    "whyCorrect": "'In order to' conecta a ação técnica diretamente à sua finalidade expressa pelo infinitivo 'prevent'.",
    "whyOthersFail": "'So that' exigiria uma oração completa com sujeito e modal ('so that they could prevent'). 'Because of' exige substantivo. 'As far as' limita conhecimento.",
    "proTip": "Viu verbo no infinitivo logo após a lacuna ('prevent', 'improve', 'deploy')? O conector de finalidade correto é 'IN ORDER TO'!"
  },
  "q-tech-instead-of-polling": {
    "sentenceTranslation": "O arquiteto recomendou usar WebSockets em vez de fazer polling no servidor HTTP a cada dois segundos.",
    "whyCorrect": "'Instead of' rege verbos terminados em -ing ('polling') para indicar a substituição de uma prática por outra.",
    "whyOthersFail": "'Apart' exige 'from'. 'Unless' é condicional. 'Due to' expressa causa.",
    "proTip": "Ao sugerir refatorações: 'We should adopt [boa prática] instead of [anti-padrão com -ing]'."
  },
  "q-tech-likewise-standards": {
    "sentenceTranslation": "Engenheiros de software seniores devem escrever testes unitários limpos. Da mesma forma, espera-se que desenvolvedores juniores mantenham os mesmos padrões de qualidade.",
    "whyCorrect": "'Likewise' é o conector formal para transferir o mesmo dever a um elemento análogo.",
    "whyOthersFail": "'Whereas' criaria contraste ou distinção oposta. 'Unless' expressaria condição negativa. 'Instead' indicaria substituição.",
    "proTip": "Use 'Likewise' em guias de cultura de engenharia e diretrizes de desenvolvimento do time!"
  },
  "q-tech-no-longer-legacy": {
    "sentenceTranslation": "Nossa plataforma não mais suporta protocolos legados TLS 1.0 devido a descontinuações críticas de segurança.",
    "whyCorrect": "'No longer' posiciona-se naturalmente antes do verbo principal ('supports') para indicar cessação.",
    "whyOthersFail": "'At all' ficaria no final da frase após negação ('does not support... at all'). 'As well' significa 'também'. 'So far' significa 'até agora'.",
    "proTip": "Padrão de Changelog de APIs: 'Endpoint /v1/users is no longer supported. Please migrate to /v2/users'."
  },
  "q-tech-on-the-other-hand-monolith": {
    "sentenceTranslation": "Arquiteturas monolíticas são mais simples de configurar inicialmente. Por outro lado, microsserviços permitem deploys desacoplados entre equipes.",
    "whyCorrect": "A locução fixa de contraposição de perspectivas é 'On the other hand'.",
    "whyOthersFail": "'On the second hand', 'On the different hand' e 'On the next hand' não existem em inglês.",
    "proTip": "Em discussões técnicas de arquitetura: pondere primeiro as vantagens ('On the one hand...'), e em seguida os trade-offs ('On the other hand...')."
  },
  "q-tech-only-if-production": {
    "sentenceTranslation": "A pipeline disparará a release de produção apenas se todos os quality gates do SonarQube passarem com zero vulnerabilidades.",
    "whyCorrect": "'Only if' define a barreira de aprovação obrigatória sem exceções.",
    "whyOthersFail": "'Just if' e 'merely if' não formam locuções condicionais estritas na gramática padrão. 'Mostly if' não faz sentido lógico aqui.",
    "proTip": "CI/CD Guardrails: 'Production deployment occurs only if test coverage is >= 85% and security scans are green'."
  },
  "q-tech-otherwise-credentials": {
    "sentenceTranslation": "Armazene as chaves secretas da AWS em um gerenciador seguro de segredos; caso contrário, suas credenciais podem ser expostas em repositórios públicos.",
    "whyCorrect": "'Otherwise' funciona como 'if you do not do this' para alertar sobre o risco eminente.",
    "whyOthersFail": "'Likewise' expressa analogia positiva. 'Furthermore' e 'moreover' adicionam argumentos, não consequências de desobediência.",
    "proTip": "Excelente conector para instruções de onboarding e guias de segurança da empresa!"
  },
  "q-tech-so-that-ddos": {
    "sentenceTranslation": "Configuramos rate limiting no gateway da API a fim de que os servidores possam lidar com picos inesperados de tráfego sem cair.",
    "whyCorrect": "'So that' introduz o propósito quando a segunda oração tem seu próprio sujeito e verbo modal.",
    "whyOthersFail": "'In order to' exigiria infinitivo direto ('in order to handle'), sem o sujeito 'the servers'. 'Because of' exige substantivo. 'As far as' indica alcance de conhecimento.",
    "proTip": "Dica Mestra do Professor: Tem sujeito novo + 'can/could/may/might' logo depois? A resposta é 'SO THAT'!"
  },
  "q-tech-such-as-observability": {
    "sentenceTranslation": "Nossos engenheiros DevOps utilizam ferramentas de observabilidade tais como Grafana, Prometheus e Datadog para monitorar a latência do cluster.",
    "whyCorrect": "'Such as' introduz a lista exemplificativa de tecnologias.",
    "whyOthersFail": "'As well' vai no final da frase com sentido de 'também'. 'As far as' limita conhecimento. 'In spite of' expressa concessão.",
    "proTip": "Em reuniões técnicas internacionais: 'We use modern cloud stacks such as AWS, Docker, and Terraform'."
  },
  "q-tech-then-ci": {
    "sentenceTranslation": "Primeiro, o desenvolvedor abre um pull request. Em seguida, o fluxo do GitHub Actions dispara a análise estática automatizada de código.",
    "whyCorrect": "'Then' estabelece a ordem cronológica clara de eventos encadeados.",
    "whyOthersFail": "'Unless' é condicional. 'Because' e 'Despite' exigem complementação sintática diferente.",
    "proTip": "A regra de ouro de fluxogramas em inglês: 'First... Then... Next... Finally...'."
  },
  "q-tech-towards-soc2": {
    "sentenceTranslation": "A equipe de segurança está trabalhando diligentemente rumo a obter a conformidade SOC 2 Tipo II antes da auditoria do terceiro trimestre.",
    "whyCorrect": "'Work towards [goal]' é a colocação verbal padrão no mundo corporativo para metas estratégicas.",
    "whyOthersFail": "'Against' indicaria oposição. 'Unless' expressa condição negativa. 'In case' expressa precaução.",
    "proTip": "'Working towards our goals / OKRs' é a frase ideal para apresentações de progresso com gerentes e diretores!"
  },
  "q-tech-unless-cto": {
    "sentenceTranslation": "Nunca ignore as verificações de segurança da pipeline automatizada a menos que o CTO aprove explicitamente uma autorização emergencial em produção.",
    "whyCorrect": "'Unless' introduz a condição excepcional que quebra a regra proibitiva.",
    "whyOthersFail": "'If' inverteria o sentido para 'nunca ignore se o CTO aprovar' (o que seria o oposto do pretendido). 'Because' atribuiria causa. 'In order to' expressa finalidade.",
    "proTip": "Lembre-se: 'Never do X UNLESS Y happens' = 'Só faça X se Y acontecer'!"
  },
  "q-tech-unlike-kafka": {
    "sentenceTranslation": "Ao contrário de endpoints REST síncronos, os tópicos de mensagens do Apache Kafka desacoplam completamente os serviços produtores e consumidores.",
    "whyCorrect": "'Unlike' recebe o sintagma nominal ('synchronous REST endpoints') para estabelecer o contraste inicial.",
    "whyOthersFail": "'Unless' é condicional. 'Instead' exige 'of' para receber substantivo. 'Although' exige oração completa com verbo conjugado.",
    "proTip": "Brilhe em entrevistas de arquitetura de software: 'Unlike Monoliths, Microservices allow independent scaling...'!"
  },
  "q-tech-whenever-push": {
    "sentenceTranslation": "Sempre que um desenvolvedor faz o merge de código na branch master, a pipeline de CI/CD dispara a compilação automatizada do container.",
    "whyCorrect": "'Whenever' equivale a 'every time that' para descrever gatilhos de eventos e webhooks.",
    "whyOthersFail": "'Whereas' contrapõe duas realidades. 'Whatever' significa 'o que quer que seja'. 'Wherever' refere-se a lugar.",
    "proTip": "Terminologia clássica de DevOps: 'Whenever an event triggers, the webhook executes the listener function'."
  },
  "q-tech-whether-database": {
    "sentenceTranslation": "A squad de engenharia está avaliando se deve migrar para o DynamoDB ou otimizar nossa instância PostgreSQL existente.",
    "whyCorrect": "'Whether to [verb] or [verb]' é a estrutura gramatical precisa para análise de alternativas.",
    "whyOthersFail": "'If to migrate' é incorreto na gramática culta inglesa. 'Unless' significa 'a menos que'. 'Because' expressa causa.",
    "proTip": "Sempre que houver alternativas técnicas em debate ('whether X or Y'), use 'Whether'!"
  },
  "q-tech-while-async": {
    "sentenceTranslation": "Enquanto o engenheiro backend refatorava as consultas do banco de dados, o time frontend construía os dashboards interativos.",
    "whyCorrect": "'While' rege orações temporais de ações contínuas e simultâneas.",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Instead of' e 'Due to' exigem substantivo ou gerúndio, não oração completa.",
    "proTip": "Use 'While' na Daily Standup para relatar trabalho simultâneo da equipe: 'While John was working on the API, I tested the endpoints'!"
  },
  "q-tech-yet-throughput": {
    "sentenceTranslation": "A refatoração arquitetural foi arriscada e complexa, contudo proporcionou um aumento imediato de 4x no throughput da API.",
    "whyCorrect": "'Yet' funciona como uma conjunção adversativa concisa e expressiva para destacar um resultado compensador.",
    "whyOthersFail": "'Unless' expressaria condição negativa. 'So that' expressa finalidade. 'In case' expressa precaução.",
    "proTip": "Ao defender projetos de pagamento de dívida técnica (Tech Debt): 'It was hard, yet it solved our scalability bottleneck'!"
  },
  "q-although-1": {
    "sentenceTranslation": "Embora esteja chovendo, eu vou à praia.",
    "whyCorrect": "Usamos 'Although' porque temos uma oração completa (sujeito 'it' + verbo 'is raining') introduzindo uma concessão ou contraste que não impede a ação principal.",
    "whyOthersFail": "'Despite' e 'Because of' exigiriam um substantivo direto ('despite the rain'). 'In order to' expressa finalidade com verbo no infinitivo, não contraste.",
    "proTip": "Regra de Ouro: Viu [Sujeito + Verbo] logo após a lacuna indicando contraste? Use 'Although' ou 'Even though'. Viu substantivo puro? Use 'Despite' ou 'In spite of'."
  },
  "q-as-a-result-1": {
    "sentenceTranslation": "Você não fez seu trabalho corretamente. Como resultado, nossos clientes estão nos ligando com muitos problemas.",
    "whyCorrect": "'As a result' funciona como um conector de transição que introduz o efeito direto ou consequência da ação descrita na frase anterior.",
    "whyOthersFail": "'However' indicaria oposição/contraste, mas aqui temos uma consequência lógica. 'Unless' significa 'a menos que' (condição). 'Instead of' significa 'em vez de'.",
    "proTip": "Memorize: 'As a result' = 'Portanto / Em decorrência disso'. É muito comum no início de uma nova oração após ponto final."
  },
  "q-as-long-as-1": {
    "sentenceTranslation": "Contanto que você faça sua lição de casa, você passará na prova.",
    "whyCorrect": "'As long as' expressa uma condição indispensável e contínua ('contanto que / desde que').",
    "whyOthersFail": "'Because of' exige substantivo e não oração. 'At last' indica tempo decorrido ('finalmente'). 'In spite of' expressa contraste, não condição.",
    "proTip": "'As long as' equivale a 'Provided that' ou 'Only if'. Dica: pense nele como 'com a condição de que'."
  },
  "q-hence-1": {
    "sentenceTranslation": "A funcionalidade não ficou pronta a tempo, por isso precisamos reagendar o projeto.",
    "whyCorrect": "'Hence' é um conector formal que expressa decorrência lógica e direta ('por essa razão / por isso / daí').",
    "whyOthersFail": "'Although' expressa concessão. 'Along with' expressa companhia/inclusão. 'At all' é usado para ênfase no fim da frase.",
    "proTip": "'Hence' é amplamente usado em relatórios técnicos e na área de exatas/engenharia como sinônimo elegante de 'therefore' ou 'that's why'."
  },
  "q-even-if-1": {
    "sentenceTranslation": "Eu vou à festa, mesmo se você não for.",
    "whyCorrect": "'Even if' introduz uma condição hipotética extrema que não altera em nada o desfecho da ação principal.",
    "whyOthersFail": "'Because of' precisa de substantivo ('because of the rain'). 'In order to' expressa objetivo ('a fim de'). 'As well as' adiciona itens ('assim como').",
    "proTip": "Diferença essencial: 'Even if' é hipotético ('mesmo que aconteça'). 'Even though' é um fato real que já acontece ('embora aconteça')."
  },
  "q-instead-of-1": {
    "sentenceTranslation": "Talvez você deva ficar em casa em vez de sair hoje à noite.",
    "whyCorrect": "'Instead of' introduz uma substituição ou escolha alternativa e é seguido obrigatoriamente de verbo com terminação -ing ('going') ou substantivo.",
    "whyOthersFail": "'Because of' indicaria motivo. 'As well as' significaria que a pessoa faria as duas coisas juntas. 'In case' indicaria precaução.",
    "proTip": "Lembre-se da preposição 'of': depois de preposição em inglês, qualquer verbo subsequente deve levar '-ing' (instead of going, instead of buying)."
  },
  "q-even-though-1": {
    "sentenceTranslation": "Embora eu não tenha muito dinheiro, eu vou sair hoje à noite.",
    "whyCorrect": "'Even though' é a forma mais enfática e expressiva de 'although', perfeita para contrastar um fato real com uma atitude surpreendente.",
    "whyOthersFail": "'Due to' exige substantivo. 'Therefore' expressaria consequência, não contraste. 'Likewise' expressaria semelhança.",
    "proTip": "'Even though' tem tom de 'apesar de ser verdade que...'. Use quando quiser dar bastante ênfase à oposição entre as duas ideias."
  },
  "q-in-advance-1": {
    "sentenceTranslation": "Por favor, me avise com antecedência se você não puder comparecer.",
    "whyCorrect": "'In advance' é uma locução temporal fixa que significa 'previamente' ou 'com antecedência'.",
    "whyOthersFail": "'At last' significa 'finalmente após espera'. 'No longer' significa 'não mais'. 'For instance' introduz um exemplo.",
    "proTip": "Super comum no ambiente corporativo e em chats (Slack/Teams): 'Thank you in advance' = 'Agradeço antecipadamente'."
  },
  "q-no-longer-1": {
    "sentenceTranslation": "Ele não trabalha mais na consultoria.",
    "whyCorrect": "'No longer' é colocado antes do verbo principal para indicar que um estado ou hábito passado cessou e não é mais verdadeiro hoje.",
    "whyOthersFail": "'At all' geralmente fica no fim da frase. 'As well' significa 'também'. 'In fact' significa 'na verdade'.",
    "proTip": "Posição: 'He no longer works here' = 'He doesn't work here anymore'. Com 'no longer' a frase fica afirmativa na gramática, mas com sentido negativo!"
  },
  "q-meanwhile-1": {
    "sentenceTranslation": "Os engenheiros frontend começaram a construir a interface. Enquanto isso, o time de backend configurou o banco de dados.",
    "whyCorrect": "'Meanwhile' é um advérbio de transição que conecta duas atividades distintas acontecendo no mesmo período de tempo em paralelo.",
    "whyOthersFail": "'Unless' é condição negativa ('a menos que'). 'Despite' exige substantivo. 'Hence' indica resultado/consequência.",
    "proTip": "Pense em 'Meanwhile' como a tradução perfeita de 'No meio tempo' ou 'Enquanto isso'. Essencial para reuniões de sincronização ágil (Dailies)."
  },
  "q-along-with-1": {
    "sentenceTranslation": "Quando você enviar seu relatório do projeto, junto com ele você pode compartilhar seus gráficos.",
    "whyCorrect": "'Along with' significa 'junto com / acompanhado de', indicando inclusão de algo extra.",
    "whyOthersFail": "'Because of' indicaria causa. 'Even if' indicaria hipótese. 'So that' expressa finalidade ('para que').",
    "proTip": "Uso corporativo frequente: 'Please find the document attached along with my feedback' (Segue anexo o documento junto com meus comentários)."
  },
  "q-as-well-1": {
    "sentenceTranslation": "Eu sei que esse é um assunto difícil. Eu preciso estudar mais também.",
    "whyCorrect": "'As well' é o sinônimo perfeito de 'too' e é posicionado naturalmente no final da oração afirmativa.",
    "whyOthersFail": "'Because of', 'unless' e 'in spite of' são conectores subordinativos que exigem complemento, não podem simplesmente fechar a oração desse jeito.",
    "proTip": "No inglês falado e escrito natural, 'as well' no final substitui 'also' com muita elegância: 'I like coffee as well!'."
  },
  "q-at-last-1": {
    "sentenceTranslation": "O Renato Gaúcho assinou com o Grêmio finalmente / por fim.",
    "whyCorrect": "'At last' indica que algo muito esperado finalmente se concretizou após longa negociação e espera.",
    "whyOthersFail": "'At all' é usado para ênfase negativa ('not at all'). 'At least' significa 'pelo menos'. 'In advance' significa 'com antecedência'.",
    "proTip": "Diferença do Professor: 'At last' = Finalmente! (com emoção e alívio). 'Lastly' = Em último lugar numa lista."
  },
  "q-at-least-1": {
    "sentenceTranslation": "Embora eu não tenha estudado o suficiente, pelo menos estudei Matemática, a matéria mais difícil.",
    "whyCorrect": "'At least' ressalta um aspecto positivo atenuante ou quantidade mínima em meio a um cenário que não foi ideal.",
    "whyOthersFail": "'At last' significaria 'finalmente'. 'Unless' significaria 'a menos que'. 'In order to' expressaria finalidade.",
    "proTip": "Use 'At least' sempre que quiser ver o copo meio cheio: 'It rained, but at least we had fun!' (Choveu, mas pelo menos nos divertimos!)."
  },
  "q-because-1": {
    "sentenceTranslation": "O desenvolvedor vai se atrasar hoje porque o trânsito está horrível.",
    "whyCorrect": "'Because' é uma conjunção causal seguida de uma oração completa (sujeito 'the traffic' + verbo 'is').",
    "whyOthersFail": "'Because of' precisaria de um substantivo direto ('because of the traffic'), sem o verbo 'is'. 'Despite' daria sentido oposto. 'Instead of' significa 'em vez de'.",
    "proTip": "Grande regra de prova e certificação: 'Because' + [oração com verbo]. 'Because of' + [substantivo puro]."
  },
  "q-because-of-1": {
    "sentenceTranslation": "Eu estou chorando por causa do que você disse.",
    "whyCorrect": "'Because of' é uma locução prepositiva seguida de um sintagma nominal ('what you said' funciona como substantivo aqui).",
    "whyOthersFail": "'Because' precisaria de uma oração independente imediata. 'So that' e 'even if' têm sentidos completamente distintos (finalidade e hipótese).",
    "proTip": "Compare: 'I was late because it was raining' (com verbo 'was') vs 'I was late because of the rain' (apenas substantivo)."
  },
  "q-besides-1": {
    "sentenceTranslation": "Eu não quero sair hoje à noite; está congelando lá fora. Além disso, tenho uma reunião cedo amanhã.",
    "whyCorrect": "'Besides' adiciona um segundo argumento convincente que reforça o primeiro motivo já mencionado.",
    "whyOthersFail": "'Unless' estabelece condição negativa. 'Although' expressa concessão. 'In case' expressa precaução.",
    "proTip": "Cuidado com a grafia: 'Beside' (sem s) significa 'ao lado de' ('Sit beside me'). 'Besides' (com s) significa 'além disso'."
  },
  "q-but-1": {
    "sentenceTranslation": "Foi difícil consertar aquele problema, mas eu consegui resolver.",
    "whyCorrect": "'But' é a conjunção adversativa clássica mais direta para contrapor uma dificuldade inicial a uma superação final.",
    "whyOthersFail": "'So that' expressa finalidade. 'Therefore' expressa dedução lógica. 'Along with' expressa inclusão.",
    "proTip": "'But' é informal e direto; 'However' é o seu equivalente mais formal e polido para e-mails e relatórios corporativos."
  },
  "q-currently-1": {
    "sentenceTranslation": "Atualmente, nossos clientes estão satisfeitos com nossos produtos.",
    "whyCorrect": "'Currently' significa 'no momento presente / atualmente', situando o estado temporal da frase.",
    "whyOthersFail": "'Otherwise' significa 'caso contrário'. 'Even if' significa 'mesmo se'. 'In spite of' significa 'apesar de'.",
    "proTip": "Falso amigo clássico! 'Actually' NÃO significa atualmente (significa 'na verdade'). Para dizer 'atualmente', use 'Currently' ou 'Nowadays'."
  },
  "q-due-to-1": {
    "sentenceTranslation": "Devido a uma interrupção nos servidores, todos os programas foram paralisados.",
    "whyCorrect": "'Due to' é seguido de um substantivo ('an outage') e introduz a causa determinante do problema.",
    "whyOthersFail": "'Although' exigiria oração completa com verbo. 'Even if' introduz hipótese. 'As well as' introduz adição.",
    "proTip": "Em comunicados corporativos e de incidentes de TI (post-mortems), 'due to' é a expressão padrão para citar a causa raiz."
  },
  "q-even-1": {
    "sentenceTranslation": "Você deveria ir à Inglaterra, até mesmo sozinho.",
    "whyCorrect": "'Even' atua como advérbio de intensidade para enfatizar algo surpreendente, incomum ou extremo ('até mesmo / mesmo').",
    "whyOthersFail": "'Hence' e 'therefore' expressam dedução. 'As a result' expressa resultado.",
    "proTip": "Use 'even' para destacar o extremo de uma escala: 'Not even the senior dev knew how to fix it' (Nem mesmo o sênior sabia como arrumar)."
  },
  "q-for-1": {
    "sentenceTranslation": "Nós interrompemos os testes, pois o servidor estava fora do ar.",
    "whyCorrect": "'For' é uma conjunção coordenativa formal do grupo FANBOYS (For, And, Nor, But, Or, Yet, So) que significa 'pois / visto que'.",
    "whyOthersFail": "'Instead of' exigiria -ing. 'Along with' significa 'junto com'. 'Unless' significa 'a menos que'.",
    "proTip": "Embora 'because' seja muito mais comum na fala diária, 'for' como conjunção é altamente valorizado em redações formais e literatura em inglês."
  },
  "q-for-instance-1": {
    "sentenceTranslation": "Deixe-me explicar novamente. Por exemplo, quando o desenvolvedor termina o programa, ele pode começar outra coisa.",
    "whyCorrect": "'For instance' introduz um caso prático ilustrativo, funcionando como sinônimo idêntico a 'For example'.",
    "whyOthersFail": "'Even though' expressa contraste. 'No longer' significa 'não mais'. 'In spite of' expressa concessão.",
    "proTip": "'For instance' e 'For example' são intercambiáveis. 'For instance' soa muito natural em apresentações e reuniões técnicas."
  },
  "q-however-1": {
    "sentenceTranslation": "Há um trânsito pesado à frente; contudo, eu não tenho outro caminho.",
    "whyCorrect": "'However' contrasta duas realidades de maneira elegante e formal, frequentemente precedido de ponto-e-vírgula ou ponto final.",
    "whyOthersFail": "'Therefore' indicaria conclusão. 'As long as' indicaria condição. 'In order to' indicaria finalidade.",
    "proTip": "Pontuação típica em inglês formal: Frase A; however, Frase B. A vírgula após 'however' é indispensável!"
  },
  "q-if-1": {
    "sentenceTranslation": "Se você for lá, eu vou também.",
    "whyCorrect": "'If' introduz uma condição simples na primeira condicional (If + presente simples, futuro com will).",
    "whyOthersFail": "'Despite' e 'Because of' exigem substantivo. 'Meanwhile' expressa tempo paralelo.",
    "proTip": "Estrutura padrão da First Conditional: 'If + Present Simple, will + verb'. Exemplo: 'If it rains, we will stay home'."
  },
  "q-in-case-1": {
    "sentenceTranslation": "Leve este exame ao seu médico, só por precaução.",
    "whyCorrect": "'In case' (e a expressão 'just in case') é usado para preparar-se preventivamente para uma possibilidade futura.",
    "whyOthersFail": "'As a result' indicaria consequência consumada. 'On the other hand' expressa contraponto. 'Instead of' indica substituição.",
    "proTip": "'In case' não é sinônimo direto de 'if': 'I will take an umbrella in case it rains' (Levo o guarda-chuva antes, para me prevenir, chova ou não!)."
  },
  "q-in-fact-1": {
    "sentenceTranslation": "Na verdade, o Brasil é o único país pentacampeão de futebol.",
    "whyCorrect": "'In fact' reforça a veracidade de uma informação ou apresenta um dado real e contundente ('de fato / na verdade').",
    "whyOthersFail": "'Unless' expressa condição negativa. 'Even if' expressa hipótese. 'Rather than' expressa preferência.",
    "proTip": "'In fact' é excelente para introduzir uma estatística, curiosidade ou confirmação de peso em conversas profissionais."
  },
  "q-in-order-to-1": {
    "sentenceTranslation": "Eu vim trabalhar presencialmente a fim de concluir o projeto.",
    "whyCorrect": "'In order to' expressa propósito claro e é seguido diretamente pelo verbo na sua forma base infinitiva ('finish').",
    "whyOthersFail": "'Because of' exige substantivo. 'Even though' exige oração completa de contraste. 'As far as' delimita conhecimento.",
    "proTip": "Fórmula de memorização: 'In order to + VERBO' (propósito direto). Exemplo: 'I practice every day in order to become fluent'."
  },
  "q-in-spite-of-1": {
    "sentenceTranslation": "Apesar do que você disse, ele conseguiu entender.",
    "whyCorrect": "'In spite of' expressa concessão e exige substantivo ou oração substantiva ('what you said').",
    "whyOthersFail": "'Although' exigiria oração sem 'of'. 'So that' indica finalidade. 'Hence' indica resultado.",
    "proTip": "'In spite of' tem exatamente o mesmo significado de 'Despite'. Atenção: NUNCA diga 'despite of' — é 'despite' puro ou 'in spite of' com 'of'!"
  },
  "q-indeed-1": {
    "sentenceTranslation": "A equipe fez um progresso significativo nesta sprint. De fato, eles completaram todos os itens de alta prioridade antes do prazo.",
    "whyCorrect": "'Indeed' atua como conector de confirmação e fortalecimento da ideia apresentada na frase anterior ('de fato / com efeito').",
    "whyOthersFail": "'Otherwise' indica consequência negativa. 'Unless' indica condição negativa. 'Instead of' indica substituição.",
    "proTip": "Use 'indeed' para validar fortemente uma afirmação prévia com uma evidência concreta logo em seguida."
  },
  "q-likewise-1": {
    "sentenceTranslation": "Engenheiros seniores devem revisar seus pull requests. Da mesma forma, espera-se que desenvolvedores juniores sigem os mesmos padrões de teste.",
    "whyCorrect": "'Likewise' expressa analogia direta, reciprocidade ou paralelismo de conduta entre dois sujeitos ('da mesma forma / igualmente').",
    "whyOthersFail": "'Otherwise' indicaria alerta/consequência. 'Even though' indicaria oposição. 'Because of' indicaria causa.",
    "proTip": "Em conversas cotidianas, responder simplesmente 'Likewise!' é uma forma polida e simpática de dizer 'Para você também!' ou 'Digo o mesmo!'."
  },
  "q-actually-1": {
    "sentenceTranslation": "Você disse que o projeto estava no prazo. Na verdade, o prazo está se esgotando.",
    "whyCorrect": "'Actually' serve para revelar a realidade fática de uma situação, corrigindo delicadamente uma premissa equivocada.",
    "whyOthersFail": "'In order to' expressa objetivo. 'As well as' expressa adição. 'So that' expressa finalidade.",
    "proTip": "Lembrete fundamental: 'Actually' = 'Na verdade / Para falar a verdade'. Não confunda com 'Currently' (atualmente)."
  },
  "q-despite-1": {
    "sentenceTranslation": "Apesar da chuva, eu vou à praia.",
    "whyCorrect": "'Despite' é seguido diretamente de substantivo ('the rain') sem verbo conjugado.",
    "whyOthersFail": "'Although' exigiria verbo ('Although it is raining'). 'Because' daria o sentido absurdo de ir à praia por causa da chuva. 'Even if' exige oração com verbo.",
    "proTip": "Par de ouro: 'Despite the rain' (com substantivo) = 'Although it is raining' (com verbo). Memorize esse contraste!"
  },
  "q-therefore-1": {
    "sentenceTranslation": "O servidor estava fora do ar. Portanto, nós paramos os testes.",
    "whyCorrect": "'Therefore' conecta uma premissa à sua conclusão lógica inevitável com tom formal ('portanto / por esta razão').",
    "whyOthersFail": "'Although' e 'On the other hand' expressam contraste. 'Instead of' expressa substituição.",
    "proTip": "'Therefore' é a palavra-chave de conclusões em inglês acadêmico e corporativo. Equivale a 'Assim sendo'."
  },
  "q-unless-1": {
    "sentenceTranslation": "Você não vai passar na prova a menos que estude hoje à noite.",
    "whyCorrect": "'Unless' equivale exatamente a 'if not' (se não), introduzindo a única condição capaz de reverter o resultado negativo.",
    "whyOthersFail": "'Because of', 'as well as' e 'in spite of' não introduzem condição negativa.",
    "proTip": "Pense sempre: 'Unless you study' = 'If you do not study'. Como 'unless' já é negativo, não use 'not' junto com ele!"
  },
  "q-so-that-1": {
    "sentenceTranslation": "Eu estou aqui a fim de que eu possa estudar.",
    "whyCorrect": "'So that' expressa finalidade acompanhado de oração com verbo modal ('so that I can study').",
    "whyOthersFail": "'Despite' expressa oposição. 'However' expressa contraste. 'No longer' expressa término de hábito.",
    "proTip": "Diferença entre 'In order to' e 'So that': 'In order to' vem seguido de verbo puro ('in order to study'). 'So that' vem com sujeito e modal ('so that I can study')."
  },
  "q-though-1": {
    "sentenceTranslation": "Eu estou cansado. Vou à festa, embora.",
    "whyCorrect": "Em inglês coloquial e fluente, 'though' no final da oração é extremamente comum para dar uma nuance de 'apesar disso / no entanto'.",
    "whyOthersFail": "'Therefore', 'in order to' e 'as a result' não têm essa propriedade sintática de fechar a frase com sentido de concessão.",
    "proTip": "Quer soar como um nativo fluente? Coloque 'though' no final da frase para relativizar algo: 'It's expensive. I like it, though!' (É caro. Mas eu gosto!)."
  },
  "q-on-the-other-hand-1": {
    "sentenceTranslation": "O plano é mais barato. Por outro lado, vai demorar muito mais.",
    "whyCorrect": "'On the other hand' introduz o outro lado da moeda em uma análise ou comparação ('por outro lado').",
    "whyOthersFail": "'As long as' expressa condição. 'In order to' expressa finalidade. 'For instance' expressa exemplo.",
    "proTip": "Par de contraste: 'On the one hand, X... On the other hand, Y...' (Por um lado X... por outro lado Y...)."
  },
  "q-otherwise-1": {
    "sentenceTranslation": "Envie o relatório hoje. Caso contrário, o cliente vai cancelar a reunião.",
    "whyCorrect": "'Otherwise' aponta a consequência desfavorável caso a instrução anterior não seja cumprida ('senão / caso contrário').",
    "whyOthersFail": "'Likewise' expressa semelhança. 'Meanwhile' expressa simultaneidade. 'Along with' expressa companhia.",
    "proTip": "'Otherwise' equivale a 'or else' ('ou então'). É essencial em avisos e SLAs de suporte ao cliente."
  },
  "q-whereas-1": {
    "sentenceTranslation": "O backend está pronto, ao passo que o frontend ainda está em andamento.",
    "whyCorrect": "'Whereas' compara duas realidades paralelas que estão em estados opostos ou divergentes ('ao passo que / enquanto que').",
    "whyOthersFail": "'Because of', 'in order to' e 'as a result' indicam causa, finalidade e consequência, não comparação contrastante.",
    "proTip": "'Whereas' é excelente em reuniões de status report para pontuar o que já foi feito versus o que ainda falta."
  },
  "q-thats-why-1": {
    "sentenceTranslation": "O trânsito estava horrível. É por isso que o desenvolvedor se atrasou.",
    "whyCorrect": "'That's why' liga a causa prévia ao seu desfecho de forma natural na conversação ('é por isso que / por isso').",
    "whyOthersFail": "'Even though' expressa concessão. 'Instead of' expressa substituição. 'In case' expressa precaução.",
    "proTip": "'That's why' é o conector de causa e efeito mais frequente no inglês oral do dia a dia."
  },
  "q-while-1": {
    "sentenceTranslation": "Enquanto o time de QA testava a API, os desenvolvedores corrigiam os bugs da interface.",
    "whyCorrect": "'While' denota simultaneidade no tempo contínuo ('enquanto duas ações transcorriam ao mesmo tempo').",
    "whyOthersFail": "'Unless' expressa condição. 'Due to' expressa causa. 'Rather than' expressa preferência.",
    "proTip": "'While' pode significar 'enquanto' (tempo) ou 'ao passo que' (contraste). Ambos funcionam muito bem em comunicação técnica."
  },
  "q-rather-than-1": {
    "sentenceTranslation": "Nós podemos contratar mais um desenvolvedor backend em vez de um desenvolvedor frontend.",
    "whyCorrect": "'Rather than' expressa preferência deliberada de uma alternativa sobre outra ('em vez de / preferível a').",
    "whyOthersFail": "'Because' indicaria causa. 'So that' indicaria objetivo. 'Even if' indicaria condição extrema.",
    "proTip": "Use 'rather than' para expor escolhas arquiteturais ponderadas: 'We chose TypeScript rather than plain JavaScript'."
  },
  "q-gremio-portalupi-1": {
    "sentenceTranslation": "O elenco do Grêmio está treinando agora; enquanto isso, o técnico Renato Portalupi está na entrevista coletiva.",
    "whyCorrect": "'Meanwhile' destaca duas ações que estão acontecendo em paralelo exatamente ao mesmo tempo.",
    "whyOthersFail": "'Unless' introduz condição negativa ('a menos que'). 'Because' introduz causa. 'Despite' exige substantivo direto.",
    "proTip": "Escreve-se 'meanwhile' em uma única palavra. Sempre use vírgula após ele quando iniciar uma nova oração!"
  },
  "q-scrum-master-1": {
    "sentenceTranslation": "O Scrum Master conduziu a Retrospectiva junto com os desenvolvedores e os QAs.",
    "whyCorrect": "'Along with' expressa companhia, união e colaboração entre os participantes da cerimônia ágil.",
    "whyOthersFail": "'Apart from' excluiria os profissionais ('exceto os devs'). 'Instead of' indicaria substituição. 'Due to' expressa causa.",
    "proTip": "Use 'along with' no ambiente corporativo para enfatizar o trabalho conjunto e colaborativo entre squads!"
  },
  "q-iphone-1": {
    "sentenceTranslation": "Quando você compra um novo iPhone, o carregador não vem junto com o aparelho.",
    "whyCorrect": "'Along with' indica que um item não acompanha fisicamente ou não está incluído no pacote do produto.",
    "whyOthersFail": "'Instead of' significa 'em vez de'. 'Because of' indica motivo. 'In order to' expressa finalidade com verbo infinitivo.",
    "proTip": "'Come along with' é o phrasal verb padrão para dizer que algo vem incluso no produto!"
  },
  "q-above-all-1": {
    "sentenceTranslation": "Acima de tudo, devemos garantir que nossos bancos de dados de produção estejam protegidos contra acessos não autorizados.",
    "whyCorrect": "'Above all' destaca a prioridade máxima e o requisito número um na arquitetura de segurança.",
    "whyOthersFail": "'Afterwards' indica tempo posterior. 'Instead of' indica substituição. 'Due to' expressa causa.",
    "proTip": "Em alinhamentos executivos de arquitetura, abra com 'Above all, ...' para focar no requisito prioritário."
  },
  "q-afterwards-1": {
    "sentenceTranslation": "Faremos a daily standup primeiro; depois / posteriormente, podemos parear no bug crítico.",
    "whyCorrect": "'Afterwards' indica o momento temporal imediatamente subsequente à reunião.",
    "whyOthersFail": "'Meanwhile' indicaria simultaneidade (impossível parear durante a daily). 'Unless' é condicional. 'Because' é causal.",
    "proTip": "Estrutura ágil clássica: '[Ação 1] first; afterwards, [Ação 2]'."
  },
  "q-all-in-all-1": {
    "sentenceTranslation": "Em suma / No geral, a sprint foi um sucesso, apesar da indisponibilidade inesperada de infraestrutura.",
    "whyCorrect": "'All in all' introduz uma avaliação global que pesa pontos positivos e negativos de forma equilibrada.",
    "whyOthersFail": "'Above all' enfatizaria a prioridade. 'Instead of' exigiria substituição. 'Because of' indicaria causa.",
    "proTip": "Excelente para a abertura da Retrospectiva: reconhece o problema de infraestrutura, mas celebra o sucesso global!"
  },
  "q-apart-from-1": {
    "sentenceTranslation": "Exceto por alguns pequenos detalhes visuais no celular, a aplicação web está pronta para deploy.",
    "whyCorrect": "'Apart from' isola a única exceção irrelevante em um sistema pronto para entrar em produção.",
    "whyOthersFail": "'Instead of' significa 'ao invés de'. 'Due to' expressa motivo. 'Although' exigiria verbo conjugado.",
    "proTip": "No Code Review: 'Apart from [detalhe], everything looks great!' é elegante e construtivo."
  },
  "q-beforehand-1": {
    "sentenceTranslation": "Por favor revise o pull request de antemão para que nossa conversa de alinhamento seja rápida e produtiva.",
    "whyCorrect": "'Beforehand' denota antecedência e preparação prévia para evitar reuniões improdutivas.",
    "whyOthersFail": "'Afterwards' significaria depois da reunião (tarde demais). 'Meanwhile' indicaria durante. 'Instead' indicaria substituição.",
    "proTip": "No trabalho remoto assíncrono: 'Reading documentation beforehand saves hours of synchronous meetings'."
  },
  "q-consequently-1": {
    "sentenceTranslation": "A pipeline de build falhou; consequentemente, nenhum novo artefato foi implantado em staging.",
    "whyCorrect": "'Consequently' expressa a decorrência causal lógica e direta da falha da esteira automatizada.",
    "whyOthersFail": "'However' expressaria oposição. 'Unless' expressa condição negativa. 'Instead of' requer substantivo/gerúndio.",
    "proTip": "'Consequently' é a palavra de transição formal ideal para post-mortems e relatórios de incidentes."
  },
  "q-definitely-1": {
    "sentenceTranslation": "Meu time construiu uma POC (Prova de Conceito) e, com certeza / definitivamente, conseguimos entregar o programa.",
    "whyCorrect": "'Definitely' expressa segurança técnica e validação prática comprovada pela POC.",
    "whyOthersFail": "'Hardly' significaria 'quase não'. 'Unless' expressa condição negativa. 'Instead' indicaria alternativa.",
    "proTip": "Atenção à ortografia: D-E-F-I-N-I-T-E-L-Y. Sílaba tônica no início: DE-fi-nit-ly."
  },
  "q-equally-1": {
    "sentenceTranslation": "Escrever código limpo e escrever testes automatizados abrangentes são igualmente importantes.",
    "whyCorrect": "'Equally' estabelece o mesmo nível de relevância e prioridade entre os dois pilares da engenharia.",
    "whyOthersFail": "'Instead' indicaria que um substitui o outro. 'Unlike' expressaria dessemelhança. 'Unless' é condicional.",
    "proTip": "Use 'equally important' ao definir a cultura de engenharia e a Definição de Pronto (DoD)."
  },
  "q-furthermore-1": {
    "sentenceTranslation": "A nova arquitetura de componentes é mais limpa; além disso, ela renderiza duas vezes mais rápido.",
    "whyCorrect": "'Furthermore' adiciona um argumento de performance expressivo para reforçar a escolha da arquitetura.",
    "whyOthersFail": "'However' indicaria contradição. 'Unless' indicaria condição negativa. 'Rather than' expressa preferência.",
    "proTip": "'Furthermore' e 'Moreover' são os conectores formais de ouro para documentação de arquitetura (ADRs)."
  },
  "q-in-contrast-1": {
    "sentenceTranslation": "Em contraste com aplicações monolíticas legadas, microsserviços escalam de forma independente.",
    "whyCorrect": "'In contrast to' contrapõe frontalmente as características operacionais dos dois modelos de arquitetura.",
    "whyOthersFail": "'Due to' expressaria causa. 'In spite of' expressaria concessão. 'Instead of' exigiria opção de escolha.",
    "proTip": "Brilhe em entrevistas de arquitetura comparando paradigmas com 'In contrast to [abordagem A], [abordagem B]...'!"
  },
  "q-in-short-1": {
    "sentenceTranslation": "A auditoria de segurança foi minuciosa. Em suma / Em resumo, todos os testes de vulnerabilidade passaram sem problemas.",
    "whyCorrect": "'In short' resume em poucas palavras o resultado favorável de um processo de auditoria longo.",
    "whyOthersFail": "'Above all' indicaria prioridade máxima. 'Because of' exigiria substantivo causal. 'Instead of' indicaria substituição.",
    "proTip": "'In short' é perfeito para o primeiro parágrafo do relatório executivo de auditoria."
  },
  "q-nevertheless-1": {
    "sentenceTranslation": "O gargalo de performance foi difícil de isolar; contudo / não obstante, nossa equipe o resolveu antes do lançamento.",
    "whyCorrect": "'Nevertheless' sinaliza que a alta dificuldade não impediu a vitória e entrega técnica do time.",
    "whyOthersFail": "'Because' diria que a dificuldade causou a resolução. 'Unless' é condicional. 'So that' expressa objetivo.",
    "proTip": "'Nevertheless' traz um tom formal e sofisticado de superação técnica diante de imprevistos."
  },
  "q-nonetheless-1": {
    "sentenceTranslation": "A refatoração era arriscada; ainda assim / não obstante, ela reduziu a dívida técnica substancialmente.",
    "whyCorrect": "'Nonetheless' reconhece o risco inicial mas valida o impacto técnico altamente positivo alcançado.",
    "whyOthersFail": "'Unless' é condicional. 'Because' indicaria causa direta. 'Rather than' expressa preferência.",
    "proTip": "Escreve-se 'nonetheless' tudo junto, em uma única palavra!"
  },
  "q-nor-1": {
    "sentenceTranslation": "O cluster de banco de dados não caiu, nem perdeu quaisquer transações de usuários.",
    "whyCorrect": "'Nor' conecta duas ideias negativas e provoca a inversão sintática ('nor did it lose').",
    "whyOthersFail": "'Or' não mantém o paralelismo negativo formal. 'Although' e 'because' têm funções diferentes.",
    "proTip": "Regra clássica de inglês avançado: Após 'nor' no início de oração, o verbo auxiliar vem antes do sujeito ('nor did it...')."
  },
  "q-on-the-whole-1": {
    "sentenceTranslation": "Houve pequenos percalços durante a integração, mas no geral / no todo, os novos desenvolvedores estão tendo um desempenho brilhante.",
    "whyCorrect": "'On the whole' faz uma avaliação global madura desconsiderando deslizes pontuais de adaptação.",
    "whyOthersFail": "'Instead of' exigiria gerúndio. 'Unless' expressaria condição negativa. 'Due to' expressa causa.",
    "proTip": "Excelente para feedbacks de 1:1 e avaliações de desempenho: 'On the whole, your progress has been outstanding!'"
  },
  "q-only-if-1": {
    "sentenceTranslation": "Dispararemos o lançamento em produção apenas se todas as checagens automatizadas de ponta a ponta forem bem-sucedidas.",
    "whyCorrect": "'Only if' estabelece a barreira de aprovação estrita sem nenhuma exceção.",
    "whyOthersFail": "'Rather than' expressa preferência. 'In spite of' expressa concessão. 'Meanwhile' indica tempo.",
    "proTip": "Critério estrito de CI/CD: 'Deploy occurs ONLY IF tests pass'."
  },
  "q-particularly-1": {
    "sentenceTranslation": "Precisamos otimizar o uso de memória, particularmente / especialmente ao processar grandes arquivos CSV.",
    "whyCorrect": "'Particularly' destaca o cenário mais crítico que exige otimização profunda de recursos.",
    "whyOthersFail": "'Otherwise' indicaria consequência negativa. 'Unless' é condicional. 'Instead' indicaria substituição.",
    "proTip": "'Particularly' é sinônimo exato de 'especially'."
  },
  "q-since-1": {
    "sentenceTranslation": "Já que / Visto que você já é proficiente em TypeScript, aprender React 19 será muito rápido.",
    "whyCorrect": "'Since' no início de oração atua como conector causal equivalente a 'visto que / já que'.",
    "whyOthersFail": "'Unless' inverteria o sentido para 'a menos que você seja proficiente'. 'Despite' e 'Instead of' exigem substantivo direto.",
    "proTip": "Dica do Professor: 'Since' no início da frase quase sempre significa 'Visto que / Como'."
  },
  "q-such-as-1": {
    "sentenceTranslation": "Bibliotecas modernas de frontend, tais como React e Vue, utilizam virtual DOM ou reatividade refinada.",
    "whyCorrect": "'Such as' introduz exemplos concretos dentro de uma classe ampla de tecnologias frontend.",
    "whyOthersFail": "'So that' expressa objetivo. 'Whereas' expressa contraste. 'Nevertheless' expressa concessão.",
    "proTip": "Use 'such as' ao invés de apenas 'like' para enriquecer documentações técnicas."
  },
  "q-summing-up-1": {
    "sentenceTranslation": "Resumindo / Em suma, nossa cobertura de testes unitários atingiu 90% e todas as metas da sprint foram alcançadas.",
    "whyCorrect": "'Summing up' abre a síntese final com energia positiva e celebração de resultados.",
    "whyOthersFail": "'Because of' exigiria causa direta. 'Even if' é condicional. 'Rather than' expressa preferência.",
    "proTip": "Ótimo conector para finalizar a apresentação da Sprint Review diante dos stakeholders."
  },
  "q-thus-1": {
    "sentenceTranslation": "Habilitamos o cache de respostas no proxy reverso, cortando assim a latência da API pela metade.",
    "whyCorrect": "'Thus' conecta a ação técnica diretamente à sua consequência medida com gerúndio ('thus cutting').",
    "whyOthersFail": "'Unless' é condicional. 'Although' e 'whereas' indicam oposição e contradição.",
    "proTip": "Padrão de engenharia: '[Ação técnica], thus [gerúndio com resultado]'."
  },
  "q-to-sum-up-1": {
    "sentenceTranslation": "Para resumir, dominar os conectivos em inglês é fundamental para uma colaboração clara na engenharia internacional.",
    "whyCorrect": "'To sum up' é a locução conectiva formal de encerramento e síntese de uma argumentação.",
    "whyOthersFail": "'Due to' exige substantivo de causa. 'Unless' e 'Even if' são condicionais.",
    "proTip": "Use 'To sum up...' para fechar artigos técnicos, e-mails executivos e reuniões."
  },
  "q-towards-1": {
    "sentenceTranslation": "A squad de engenharia deu grandes passos rumo a / em direção a lançar o novo microsserviço.",
    "whyCorrect": "'Towards' indica progresso direcionado a uma meta ou entrega de produto.",
    "whyOthersFail": "'Instead of' diria que não lançaram. 'Although' e 'because' exigem orações completas.",
    "proTip": "'Making strides towards [goal]' é uma expressão consagrada do mundo corporativo!"
  },
  "q-unlike-1": {
    "sentenceTranslation": "Diferentemente de / Ao contrário de linguagens dinâmicas, o TypeScript captura erros de digitação e incompatibilidades de tipo em tempo de compilação.",
    "whyCorrect": "'Unlike' recebe o substantivo ('dynamic languages') para estabelecer o contraste inicial com o TypeScript.",
    "whyOthersFail": "'In order to' expressa objetivo. 'Because' e 'so that' exigem orações completas com verbos.",
    "proTip": "Lembre-se: UNLIKE = Different from. Fundamental para entrevistas de emprego!"
  },
  "q-whatever-1": {
    "sentenceTranslation": "O que quer que aconteça durante a demonstração ao vivo, mantenha o foco e anote quaisquer casos de borda.",
    "whyCorrect": "'Whatever' expressa qualquer eventualidade imprevista que possa surgir durante a apresentação.",
    "whyOthersFail": "'Because' expressaria motivo. 'Rather' expressa preferência. 'Unless' expressa exceção.",
    "proTip": "'Whatever happens, stay calm' é o lema de qualquer demonstração ao vivo para clientes!"
  },
  "q-whenever-1": {
    "sentenceTranslation": "Sempre que / Toda vez que você envia novos commits para o GitHub, o GitHub Actions executa a suíte de testes automatizados.",
    "whyCorrect": "'Whenever' estabelece a regra de automação que dispara a cada novo envio de código.",
    "whyOthersFail": "'Despite', 'Rather than' e 'Instead of' não expressam gatilhos temporais.",
    "proTip": "'Whenever' = 'Every time that'. Conector indispensável para descrever pipelines de CI/CD."
  },
  "q-whether-1": {
    "sentenceTranslation": "O arquiteto deve decidir se otimiza o esquema de banco de dados existente ou migra para NoSQL.",
    "whyCorrect": "'Whether' introduz a escolha entre duas alternativas explícitas com infinitivo ('whether to optimize... or migrate').",
    "whyOthersFail": "'Despite', 'meanwhile' e 'along with' não são conectores de alternativa/escolha.",
    "proTip": "Com 'to + verbo' ou 'or', o conector correto é sempre 'WHETHER' (nunca use 'if to optimize')!"
  },
  "q-yet-1": {
    "sentenceTranslation": "A estrutura do código é minimalista e simples, contudo incrivelmente resiliente sob carga pesada.",
    "whyCorrect": "'Yet' une dois adjetivos contrastantes com elegância concisa ('simple, yet resilient').",
    "whyOthersFail": "'Because of', 'in order to' e 'due to' exigem complementação sintática diferente.",
    "proTip": "'Simple yet powerful' é o maior elogio de arquitetura de software!"
  }
};

export function getTeacherNote(questionId: string): TeacherNote | undefined {
  return TEACHER_NOTES[questionId];
}
