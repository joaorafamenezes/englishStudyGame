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
  },
  "q-above-all-security": {
    "sentenceTranslation": "Acima de tudo, devemos garantir que as senhas e os dados pessoais dos usuários sejam criptografados antes de lançar o novo recurso de pagamento.",
    "whyCorrect": "'Above all' é o conector enfático perfeito para posicionar a segurança como prioridade número um sobre todos os outros itens da sprint.",
    "whyOthersFail": "'Instead of' exigiria gerúndio ou substantivo de substituição. 'Due to' introduz causa e exige substantivo. 'Unless' estabelece condição negativa.",
    "proTip": "Use 'Above all' em aberturas de reuniões de alinhamento ou revisões de arquitetura para definir o norte inegociável da entrega."
  },
  "q-above-all-gremio": {
    "sentenceTranslation": "O Grêmio tem muitos ajustes táticos a fazer, mas acima de tudo, os jogadores precisam demonstrar paixão e determinação em campo.",
    "whyCorrect": "'Above all' enfatiza a exigência primordial da torcida e do treinador antes de qualquer detalhe tático.",
    "whyOthersFail": "'Apart from' excluiria a determinação em vez de priorizá-la. 'So that' expressa finalidade com oração subordinada. 'In contrast' requer termo de comparação direta.",
    "proTip": "Quando quiser destacar o fator emocional ou o diferencial decisivo em uma análise, 'above all' soa muito natural."
  },
  "q-above-all-code-clarity": {
    "sentenceTranslation": "Engenheiros seniores sabem que o desempenho é importante, mas acima de tudo, um código limpo e legível garante a manutenibilidade do sistema a longo prazo.",
    "whyCorrect": "'Above all' realça a legibilidade como a virtude máxima sobre outras métricas de engenharia.",
    "whyOthersFail": "'Because of' exige substantivo direto de causa sem oração completa. 'Nor' exige correlação negativa com neither. 'Rather than' expressa preferência pontual.",
    "proTip": "Em code reviews e guias de boas práticas, use 'above all' para destacar convenções prioritárias da equipe."
  },
  "q-above-all-cinthia": {
    "sentenceTranslation": "Ao planejar nossas férias, a Cinthia e eu consideramos orçamento e voos, mas acima de tudo, queríamos um lugar calmo para descansar.",
    "whyCorrect": "'Above all' introduz o objetivo soberano do descanso em relação às variáveis de orçamento e transporte.",
    "whyOthersFail": "'Despite' exigiria substantivo ou gerúndio. 'Unless' criaria uma condição hipotética que não se encaixa. 'Meanwhile' indica eventos simultâneos no tempo.",
    "proTip": "Ao narrar planos familiares ou pessoais, 'above all' expressa o desejo central da conversa de forma elegante."
  },
  "q-above-all-daily-respect": {
    "sentenceTranslation": "Em uma squad ágil, habilidades técnicas importam, mas acima de tudo, empatia e escuta ativa durante as reuniões diárias constroem uma colaboração real.",
    "whyCorrect": "'Above all' posiciona a empatia no ápice dos comportamentos esperados do time ágil.",
    "whyOthersFail": "'Otherwise' introduz consequência negativa de condição não atendida. 'Because' exige oração explicativa de causa imediata. 'Equally' colocaria no mesmo peso em vez de destacar como superior.",
    "proTip": "Excelente expressão para retrospectivas e feedbacks quando você deseja elevar o valor do respeito mútuo."
  },
  "q-actually-budget-done": {
    "sentenceTranslation": "O gerente de projetos pensou que ainda tínhamos bastante verba disponível. Na verdade, nosso orçamento está quase no fim.",
    "whyCorrect": "'Actually' revela o fato verdadeiro (orçamento acabando) em contraste com a suposição incorreta do PM.",
    "whyOthersFail": "'Currently' indicaria apenas tempo presente sem a nuance de retificação. 'Summing up' resumiria sem retificar. 'Nor' é conjunção correlativa negativa.",
    "proTip": "'Actually' é o clássico 'na verdade' do inglês. Cuidado com o falso cognato: 'actually' NÃO significa 'atualmente' (que é 'currently')."
  },
  "q-actually-time-running-out": {
    "sentenceTranslation": "Você disse que seu projeto estava no prazo. Mas, na verdade, o seu projeto está ficando sem tempo.",
    "whyCorrect": "'Actually' confirma que a alegação de estar no prazo não condiz com a realidade das entregas.",
    "whyOthersFail": "'Besides' adicionaria um ponto novo sem retificar o anterior. 'In order to' expressa finalidade. 'Whereas' conecta duas cláusulas de contraste direto.",
    "proTip": "Use 'But actually...' em conversas difíceis de alinhamento para apontar desvios de prazo com clareza e profissionalismo."
  },
  "q-actually-drive-to-office": {
    "sentenceTranslation": "Ontem precisei ir ao escritório de carro porque o ônibus já havia passado. Na verdade, eu não queria pegar o ônibus; prefiro dirigir.",
    "whyCorrect": "'Actually' expõe a verdade íntima do falante, desconstruindo a desculpa inicial do ônibus.",
    "whyOthersFail": "'Therefore' indicaria conclusão lógica que não corresponde à confissão pessoal. 'Unless' estabelece condição restritiva. 'While' indica tempo simultâneo.",
    "proTip": "'Actually' é ótimo para confessar gostos e preferências pessoais de maneira natural e amigável."
  },
  "q-actually-truth-worse": {
    "sentenceTranslation": "Não tente suavizar o relatório do incidente; na verdade, a verdade é pior do que você imagina.",
    "whyCorrect": "'Actually' alerta o ouvinte para a gravidade real do ocorrido sem meias palavras.",
    "whyOthersFail": "'Likewise' expressaria similaridade. 'Beforehand' indicaria algo feito previamente. 'Equally' expressaria equivalência.",
    "proTip": "Frase clássica do seu documento! Use 'Actually, the truth is...' para trazer fatos à tona com autoridade."
  },
  "q-afterwards-gym-home": {
    "sentenceTranslation": "Tive um treino intenso na academia e depois fui para casa tomar banho e descansar.",
    "whyCorrect": "'Afterwards' é o advérbio perfeito para indicar o passo seguinte na rotina.",
    "whyOthersFail": "'In case' expressa hipótese preventiva. 'Rather than' expressa preferência entre opções. 'Although' introduz oração concessiva.",
    "proTip": "'Afterwards' funciona como 'later' ou 'after that'. Pode vir no meio com 'and afterwards' ou no final da frase."
  },
  "q-afterwards-dinner-walk": {
    "sentenceTranslation": "A Cinthia e eu jantamos em um ótimo restaurante italiano e fomos caminhar depois disso.",
    "whyCorrect": "'Afterwards' posicionado no fim da frase modifica toda a ação anterior, marcando o momento posterior.",
    "whyOthersFail": "'At all' é usado para ênfase negativa. 'Unless' exige oração condicional seguinte. 'Instead of' precisa de objeto ou gerúndio.",
    "proTip": "Posicionar 'afterwards' no fim da frase ('...went for a walk afterwards') é super natural no inglês cotidiano!"
  },
  "q-afterwards-call-you": {
    "sentenceTranslation": "Vou terminar minha aula de gramática de inglês agora e te ligo depois.",
    "whyCorrect": "'Afterwards' fixa a ordem cronológica do compromisso telefônico de forma coloquial e fluida.",
    "whyOthersFail": "'Nor' exige estrutura negativa correlativa. 'Due to' exige substantivo de causa. 'For instance' introduz exemplos ilustrativos.",
    "proTip": "'I'll call you afterwards' é uma das frases mais úteis do inglês para gerenciar seu tempo durante reuniões!"
  },
  "q-all-in-all-sprint-success": {
    "sentenceTranslation": "Enfrentamos dois bugs inesperados em produção e uma queda na nuvem, mas em suma, a sprint foi um grande sucesso.",
    "whyCorrect": "'All in all' introduz o veredito ponderado após pesar pontos negativos e conquistas.",
    "whyOthersFail": "'In case' expressa precaução condicional. 'Nor' exige negativa anterior. 'Unlike' faz comparação de distinção.",
    "proTip": "Em retrospectivas de sprint, use 'All in all...' para dar um fechamento construtivo e motivador à squad."
  },
  "q-all-in-all-trip-cinthia": {
    "sentenceTranslation": "Nosso voo atrasou duas horas e o clima estava chuvoso, mas afinal de contas, a viagem com a Cinthia foi maravilhosa.",
    "whyCorrect": "'All in all' fecha a narrativa valorizando a experiência como um todo acima dos percalços.",
    "whyOthersFail": "'Because of' exige sintagma nominal causal imediato. 'Otherwise' projeta consequência hipotética. 'So that' expressa finalidade.",
    "proTip": "'All in all' é o equivalente a 'tudo somado' ou 'considerando tudo'. Perfeito para relatos pessoais e profissionais."
  },
  "q-all-in-all-client-qbr": {
    "sentenceTranslation": "Em suma, nossa consultoria entregou 95% dos entregáveis dentro do orçamento e SLA combinados.",
    "whyCorrect": "'All in all' abre a oração conclusiva trazendo uma visão macro consolidada dos resultados.",
    "whyOthersFail": "'Apart from' excluiria um item sem concluir. 'Even if' é concessivo condicional. 'Instead of' pede substituição.",
    "proTip": "Use 'All in all' no slide de encerramento da sua apresentação executiva para cravar a mensagem principal."
  },
  "q-all-in-all-gremio-season": {
    "sentenceTranslation": "O Grêmio teve altos e baixos táticos durante o campeonato, mas no cômputo geral, a classificação para a Libertadores foi alcançada.",
    "whyCorrect": "'All in all' encerra a discussão ressaltando o saldo positivo alcançado pela equipe.",
    "whyOthersFail": "'Rather than' expressa preferência. 'Until' indica limite temporal estrito. 'Whenever' expressa tempo reiterado.",
    "proTip": "Quando debater futebol ou projetos com amigos, use 'all in all' para definir o saldo final da discussão."
  },
  "q-although-harder-than-thought": {
    "sentenceTranslation": "Embora seja mais difícil do que pensei, farei isso sozinho e entregarei este microsserviço no prazo.",
    "whyCorrect": "'Although' é uma conjunção subordinativa concessiva perfeita que introduz 'it's harder than I thought'.",
    "whyOthersFail": "'Despite' exigiria substantivo ou gerúndio ('Despite being harder'). 'Because' inverteria o sentido causal. 'In order to' exige verbo no infinitivo.",
    "proTip": "Regra de ouro: 'Although' + [sujeito + verbo]; 'Despite' + [substantivo / -ing]. Nunca misture os dois!"
  },
  "q-although-hard-person": {
    "sentenceTranslation": "Embora você seja uma pessoa difícil de lidar às vezes, ainda amo e respeito a sua sinceridade.",
    "whyCorrect": "'Although' introduz a oração concessiva completa com sujeito ('you') e verbo ('are').",
    "whyOthersFail": "'In spite of' exigiria 'In spite of your difficult personality' (substantivo). 'So that' expressa objetivo. 'Unless' introduz condição negativa.",
    "proTip": "Frase autêntica do seu material! Mostra como o 'Although' equilibra duas realidades aparentemente contraditórias."
  },
  "q-although-party-missed": {
    "sentenceTranslation": "Embora você não tenha vindo à festa ontem à noite, foi muito boa e todos perguntaram por você.",
    "whyCorrect": "'Although' encabeça a oração com sujeito e verbo no passado ('you didn't come').",
    "whyOthersFail": "'Despite' não aceita oração direta com sujeito e verbo sem a expressão 'the fact that'. 'Hence' indica conclusão. 'Nor' é conjunção correlativa.",
    "proTip": "Para usar 'despite' com oração completa, você precisaria dizer: 'Despite the fact that you didn't come'. Com 'Although', a frase fica mais leve e direta."
  },
  "q-although-day-clouds-walk": {
    "sentenceTranslation": "Embora o dia não esteja tão bom e o céu esteja nublado, precisamos sair, dar uma caminhada e ver as nuvens.",
    "whyCorrect": "'Although' introduz a oração concessiva completa ('the day isn't so good') inspirada diretamente no seu caderno.",
    "whyOthersFail": "'Despite' exigiria substantivo ou gerúndio ('Despite the overcast day'). 'Because of' exigiria causa nominal. 'Unless' impõe condição.",
    "proTip": "Frase autêntica do seu material: 'Although the day isn’t so good, we need to go out and see the clouds.' Pura poesia cotidiana!"
  },
  "q-apart-from-login-bug": {
    "sentenceTranslation": "Excetuando-se a pequena falha de CSS na tela de login móvel, o aplicativo inteiro passou em todas as verificações automatizadas de QA.",
    "whyCorrect": "'Apart from' funciona como 'except for', isolando a falha visual do sucesso geral dos testes.",
    "whyOthersFail": "'Because of' transformaria a falha em causa do sucesso. 'In order to' expressa objetivo. 'Even though' exige oração completa com verbo.",
    "proTip": "'Apart from' = 'Except for'. Indispensável em relatórios de homologação para separar o único blocker do restante que está 100%."
  },
  "q-apart-from-cinthia-surprise": {
    "sentenceTranslation": "Além da Cinthia, ninguém na família sabia que tínhamos comprado passagens para nossa viagem de aniversário à Europa.",
    "whyCorrect": "'Apart from' exclui a Cinthia da negação geral 'nobody knew'.",
    "whyOthersFail": "'Rather than' expressa preferência de escolha. 'So that' expressa finalidade. 'Whereas' conecta contraste entre duas frases independentes.",
    "proTip": "Use 'Apart from + nome/pessoa' para indicar quem era a única pessoa ciente de uma surpresa ou decisão importante."
  },
  "q-apart-from-database-latency": {
    "sentenceTranslation": "O deploy dos novos microsserviços foi rápido e confiável, exceto por um leve pico de latência no cluster do MongoDB.",
    "whyCorrect": "'Apart from' introduz o substantivo causal secundário como ressalva ao sucesso geral do deploy.",
    "whyOthersFail": "'Unless' exige oração condicional com verbo. 'Due to' atribuiria o sucesso do deploy à lentidão do MongoDB. 'Instead of' indicaria troca intencional.",
    "proTip": "No post-mortem de infraestrutura, 'apart from...' é perfeito para reportar métricas quase perfeitas com precisão cirúrgica."
  },
  "q-apart-from-gremio-match": {
    "sentenceTranslation": "Tive um fim de semana produtivo estudando inglês e descansando, à exceção do desgosto de ver o Grêmio perder nos acréscimos.",
    "whyCorrect": "'Apart from' isola a derrota do Grêmio como a única exceção ao fim de semana agradável.",
    "whyOthersFail": "'So that' expressa meta/finalidade. 'Therefore' expressa conclusão lógica. 'Equally' expressa equivalência positiva.",
    "proTip": "Use 'apart from' para criar relatos divertidos de fim de semana contrastando bons momentos com frustrações futebolísticas!"
  },
  "q-as-a-result-client-calls": {
    "sentenceTranslation": "O desenvolvedor subiu código não revisado direto para produção sem testar. Como resultado, centenas de clientes irritados começaram a ligar para o suporte.",
    "whyCorrect": "'As a result' inicia a frase seguinte expressando a consequência lógica e factual da causa anterior.",
    "whyOthersFail": "'However' expressaria contraste ou oposição. 'Unless' expressaria condição negativa. 'In spite of' exige substantivo de concessão.",
    "proTip": "Estrutura essencial em incidentes: [Ação desastrosa no passado]. 'As a result,' [Consequência sofrida pelo cliente]."
  },
  "q-as-a-result-study-book": {
    "sentenceTranslation": "Li o livro de arquitetura de software que você me emprestou e, como resultado, descobri muitos padrões inovadores para microsserviços.",
    "whyCorrect": "'As a result' estabelece a relação de ganho de conhecimento decorrente do ato de ler o livro.",
    "whyOthersFail": "'Instead of' indicaria que você não leu. 'Otherwise' indicaria advertência. 'Even if' criaria incerteza condicional.",
    "proTip": "Frase do seu documento! Pode vir no meio da oração entre vírgulas: 'and, as a result, I discovered...'"
  },
  "q-as-a-result-question-right-answer": {
    "sentenceTranslation": "O desenvolvedor júnior fez uma pergunta muito perspicaz durante o refinamento e, como resultado, a equipe conseguiu encontrar a resposta arquitetural correta.",
    "whyCorrect": "'As a result' articula a consequência direta e positiva da pergunta feita na reunião.",
    "whyOthersFail": "'Instead of' indicaria que não fizeram a pergunta. 'Unless' impõe condição restritiva. 'Although' expressaria concessão.",
    "proTip": "Frase autêntica do seu material: 'As a result of your question, we could find the right answer.' Encoraje seus colegas a perguntarem sempre!"
  },
  "q-as-far-as-carlos-reallocation": {
    "sentenceTranslation": "Pelo que o Carlos me disse hoje de manhã, a liderança vai cancelar o projeto legado e todos serão realocados para novas squads.",
    "whyCorrect": "'As far as Carlos told me' expressa com precisão o alcance das informações recebidas por via informal.",
    "whyOthersFail": "'In order to' exige verbo infinitivo de objetivo. 'Because of' exige causa substantiva direta. 'Unless' é condicional negativa.",
    "proTip": "Frase autêntica do seu material! Em consultorias e empresas de TI, 'As far as [pessoa] said...' evita espalhar boatos como certezas absolutas."
  },
  "q-as-far-as-devops-healthy": {
    "sentenceTranslation": "Até onde a equipe de DevOps tem ciência, a infraestrutura da AWS está rodando perfeitamente sem nenhum alarme.",
    "whyCorrect": "'As far as [sujeito] is aware' é a locução padrão para ressalvar o limite do monitoramento técnico.",
    "whyOthersFail": "'Rather than' expressa preferência. 'Due to' exige substantivo de causa. 'Although' pede contraste concessivo.",
    "proTip": "Mémorize a expressão: 'As far as I know' (até onde sei) ou 'As far as the team is aware' (até onde o time sabe). Muito refinada e segura!"
  },
  "q-as-far-as-michael-jackson-house": {
    "sentenceTranslation": "Pelo que nosso guia de turismo nos contou na Califórnia, Michael Jackson comprou aquela propriedade famosa quando era vivo.",
    "whyCorrect": "'As far as [sujeito] told us' é a locução padrão para relatar dados de terceiros.",
    "whyOthersFail": "'In order to' exige infinitivo de propósito. 'Because of' exige causa nominal. 'Rather than' expressa opção comparativa.",
    "proTip": "Frase autêntica do seu material: 'As far as he told me, Michael Jackson bought that house when he was alive.' Excelente exemplo da vida real!"
  },
  "q-as-long-as-homework-pass": {
    "sentenceTranslation": "Você alcançará comunicação fluente e passará na sua entrevista técnica contanto que pratique conversação todo santo dia.",
    "whyCorrect": "'As long as' expressa a condição prévia essencial para que o resultado positivo ocorra.",
    "whyOthersFail": "'Although' expressaria concessão incompatível com o incentivo. 'Unless' inverteria o sentido ('a menos que pratique, você passará'). 'Instead of' exige gerúndio ou substantivo.",
    "proTip": "'As long as' equivale a 'provided that' ou 'only if'. Transmite segurança e compromisso mútuo."
  },
  "q-as-long-as-remote-daily": {
    "sentenceTranslation": "O líder técnico disse ao time que o trabalho remoto é totalmente flexível contanto que todos compareçam à Daily Standup no horário.",
    "whyCorrect": "'As long as' introduz o critério contratual e de confiança entre a liderança e os desenvolvedores.",
    "whyOthersFail": "'In spite of' exige substantivo. 'Nor' exige negativa anterior. 'Because of' indicaria causa já consumada.",
    "proTip": "Expressão clássica de contratos de trabalho ágil: 'You have full autonomy as long as you deliver value.'"
  },
  "q-as-long-as-pizza-office": {
    "sentenceTranslation": "Não me importo de ficar no escritório até tarde para terminar este release contanto que peçamos uma boa pizza com a Cinthia.",
    "whyCorrect": "'As long as' condiciona a disposição em fazer serão à presença da pizza e da companhia agradável.",
    "whyOthersFail": "'Whereas' estabelece comparação contrastante. 'Therefore' expressa dedução. 'Apart from' exclui elementos.",
    "proTip": "Use 'as long as' para negociar acordos amigáveis com seus colegas de equipe de forma leve e assertiva."
  },
  "q-as-well-study-more": {
    "sentenceTranslation": "A arquitetura de microsserviços é um tema complexo, e nossos engenheiros juniores precisam estudar padrões de nuvem também.",
    "whyCorrect": "'As well' posicionado no fim da sentença funciona exatamente como 'too', adicionando outro tópico de estudo.",
    "whyOthersFail": "'At all' é usado para ênfase negativa. 'Unless' pede oração condicional. 'Rather than' requer elemento comparativo.",
    "proTip": "Dica do Professor: 'As well' fica sempre no final da oração ('...study cloud patterns as well'), assim como 'too'!"
  },
  "q-as-well-daily-plate-restaurant": {
    "sentenceTranslation": "A: Vou pedir o bife com batatas fritas. B: Parece delicioso; acho que gostaria de pedir isso também.",
    "whyCorrect": "'As well' conclui o pedido concordando com a escolha da outra pessoa.",
    "whyOthersFail": "'Nor' é usado exclusivamente em sentenças negativas ('neither... nor'). 'Because' pede justificativa. 'In contrast' opõe coisas.",
    "proTip": "Diálogo do seu material! Em restaurantes, 'I would like that as well' é super polido e natural."
  },
  "q-as-well-party-invite": {
    "sentenceTranslation": "A Cinthia me disse que você comprou ingressos para o festival de música, e me contou que eu fui convidado também.",
    "whyCorrect": "'As well' encerra a frase adicionando o falante à lista de convidados felizes.",
    "whyOthersFail": "'Otherwise' traz ameaça/condição ('caso contrário'). 'Due to' exige causa nominal. 'Summing up' introduz resumo.",
    "proTip": "Frase autêntica do seu material: 'I was invited to the party as well'. Guarde essa fórmula simples e eficiente!"
  },
  "q-as-well-backend-docker": {
    "sentenceTranslation": "A API REST do backend já foi conteinerizada, e nós configuramos o contêiner do frontend também.",
    "whyCorrect": "'As well' pontua a adição do frontend à esteira de conteinerização.",
    "whyOthersFail": "'Instead of' indicaria que trocamos um pelo outro. 'Even if' é condicional concessiva. 'Unless' nega condição.",
    "proTip": "No Daily Standup, quando você concluiu duas tarefas correlatas, diga: 'I worked on X, and I completed Y as well.'"
  },
  "q-as-well-as-eyes-bright": {
    "sentenceTranslation": "Assim como a lua brilha no céu noturno, o seu sorriso ilumina todo o meu mundo.",
    "whyCorrect": "'As well as' estabelece a comparação poética direta inspirada na frase do seu documento.",
    "whyOthersFail": "'In order to' expressa finalidade com infinitivo. 'Rather than' estabelece escolha excludente. 'In spite of' expressa oposição concessiva.",
    "proTip": "Frase autêntica do seu material! Embora no dia a dia 'as well as' signifique 'bem como', em construções clássicas pode equivaler a 'just as' (assim como)."
  },
  "q-as-well-as-planning-refinement": {
    "sentenceTranslation": "O Product Owner está ativamente envolvido no Planejamento da Sprint bem como no Refinamento do Backlog.",
    "whyCorrect": "'As well as' conecta dois substantivos próprios com elegância superior ao simples 'and'.",
    "whyOthersFail": "'Even though' exige oração completa com verbo próprio. 'Unless' é condicional negativa. 'In case' previne risco.",
    "proTip": "Frase do seu documento! Em descrições de papéis e escopo de projetos, 'X as well as Y' soa muito mais profissional e maduro."
  },
  "q-as-well-as-ios-android": {
    "sentenceTranslation": "Nosso aplicativo Flutter multiplataforma oferece suporte perfeito a dispositivos iOS bem como Android.",
    "whyCorrect": "'As well as' soma os dois ecossistemas móveis de forma harmoniosa.",
    "whyOthersFail": "'Instead of' excluiria o Android. 'Due to' indicaria relação de causa e efeito sem sentido aqui. 'Nor' exige negativa correlativa.",
    "proTip": "Use 'as well as' em documentações de arquitetura para listar tecnologias compatíveis com clareza."
  },
  "q-as-well-as-calm-down": {
    "sentenceTranslation": "O prazo está apertado, mas você precisa se acalmar e respirar fundo, assim como eu.",
    "whyCorrect": "'As well as me' une os dois colegas no mesmo sentimento de autocuidado.",
    "whyOthersFail": "'Rather than' expressaria que você não precisa se acalmar. 'Because of' exigiria causa sem paralelismo pessoal. 'Unless' condicionaria a respiração.",
    "proTip": "Frase inspirada no seu material ('You need to come down and take a breath, as well as me'). Mostra empatia entre colegas de squad!"
  },
  "q-at-all-need-job": {
    "sentenceTranslation": "A economia está difícil e o custo de vida subindo. Eu realmente preciso desta vaga de engenharia de software, mesmo.",
    "whyCorrect": "'At all' posicionado no fim da oração intensifica a declaração com convicção inequívoca.",
    "whyOthersFail": "'Due to' exige complemento nominal direto. 'In order to' exige infinitivo. 'Unless' abre oração condicional.",
    "proTip": "Frase do seu material! No seu caderno de anotações, você registrou: 'Mesmo (enfatizar), usar no fim da frase'. Excelente para reforçar uma necessidade vital."
  },
  "q-at-all-need-vacation": {
    "sentenceTranslation": "Meu trabalho na consultoria está ficando mais estressante a cada sprint. Eu preciso de férias em breve, mesmo.",
    "whyCorrect": "'At all' fecha a oração dando a ênfase final ao pedido de férias.",
    "whyOthersFail": "'Rather than' requer segundo termo comparativo. 'Because' exige oração subordinada. 'Instead of' pede termo de troca.",
    "proTip": "Outra frase autêntica do seu material: 'My job is harder nowadays. I need a vacation soon, at all.' Use para desabafar de forma enfática."
  },
  "q-at-all-london-best-place": {
    "sentenceTranslation": "Já viajei para muitas capitais europeias, mas Londres é a cidade mais vibrante que já visitei, mesmo.",
    "whyCorrect": "'At all' atua como intensificador de encerramento da frase categórica.",
    "whyOthersFail": "'Nor' pede negativa correlativa. 'Although' pede oração concessiva. 'So that' pede oração de finalidade.",
    "proTip": "Frase inspirada no seu exemplo de Londres: fecha a frase com força expressiva inquestionável."
  },
  "q-at-all-not-understand-legacy": {
    "sentenceTranslation": "O novo contratado não entendeu absolutamente nada da base de código do monólito legado porque não havia documentação.",
    "whyCorrect": "'Didn't understand ... at all' expressa a incompreensão completa e categórica.",
    "whyOthersFail": "'Equally' expressaria equivalência. 'Meanwhile' expressa tempo decorrido. 'Instead of' pede substantivo.",
    "proTip": "Dica do Professor: Com negação ('didn't / don't / not'), 'at all' significa 'de jeito nenhum / absolutamente nada' ('I don't mind at all')."
  },
  "q-at-all-not-worried-deployment": {
    "sentenceTranslation": "Com nossa esteira de rollback automatizada e ampla suíte de testes unitários, o líder técnico não está nem um pouco preocupado com o deploy de produção de hoje à noite.",
    "whyCorrect": "'Not worried at all' comunica ausência total de ansiedade ou preocupação.",
    "whyOthersFail": "'Unless' pede condição. 'Therefore' pede dedução lógica. 'Rather than' pede alternativa.",
    "proTip": "Quando alguém te perguntar em inglês 'Are you worried about the deadline?', responda com confiança: 'Not at all!'"
  },
  "q-at-last-bug-fixed-night": {
    "sentenceTranslation": "Após sete exaustivas horas analisando despejos de memória e logs de servidor, a equipe corrigiu o vazamento de memória crítico finalmente.",
    "whyCorrect": "'At last' expressa a vitória suada e o alívio que coroa horas de esforço técnico.",
    "whyOthersFail": "'At least' expressaria limite quantitativo mínimo ('pelo menos'). 'In advance' indicaria algo feito antecipadamente. 'Due to' pede causa.",
    "proTip": "Diferença clássica: 'At last' = Finalmente! (com emoção e alívio). 'Lastly' = Por último numa lista de tópicos."
  },
  "q-at-last-vacation-flight": {
    "sentenceTranslation": "A Cinthia e eu estávamos esperando no portão do aeroporto há mais de cinco horas; finalmente, a companhia aérea anunciou o embarque do nosso voo.",
    "whyCorrect": "'At last' capta perfeitamente a sensação de alívio com o fim do atraso do voo.",
    "whyOthersFail": "'Instead of' requer gerúndio ou substantivo. 'Unless' introduz condição negativa. 'Furthermore' apenas somaria um fato sem alívio.",
    "proTip": "Use 'At last!' sozinho como exclamação quando um download demorado ou um deploy infinito finalmente concluem!"
  },
  "q-at-last-contract-signed": {
    "sentenceTranslation": "O cliente corporativo aprovou todas as cláusulas de conformidade de segurança, e assinamos o contrato multimilionário finalmente.",
    "whyCorrect": "'At last' traduz a comemoração pelo fechamento de um negócio longo e burocrático.",
    "whyOthersFail": "'Because of' exige causa nominal. 'Whereas' opõe duas realidades. 'Equally' expressa paridade.",
    "proTip": "Lembre-se do exemplo do seu documento: 'Renato Gaúcho signed with Grêmio at last'. A emoção do alívio é a mesma!"
  },
  "q-at-least-unit-tests-coverage": {
    "sentenceTranslation": "Antes de fazer o merge deste pull request na master, nossa esteira de CI/CD exige pelo menos 85% de cobertura de testes automatizados.",
    "whyCorrect": "'At least' delimita o valor mínimo tolerável para a métrica de testes.",
    "whyOthersFail": "'At last' indicaria alívio temporal ('finalmente'). 'At all' é para ênfase negativa. 'Unless' introduz condição subordinada.",
    "proTip": "Dica do Professor: 'At least' = Pelo menos (quantidade mínima ou consolo: 'at least I studied Math'). Nunca confunda com 'at last'!"
  },
  "q-at-least-draw-match-gremio": {
    "sentenceTranslation": "O Grêmio não fez sua melhor partida tática fora de casa, mas pelo menos conseguiu garantir um empate crucial no torneio.",
    "whyCorrect": "'At least' traz a nota de alívio e consolo pelo ponto conquistado.",
    "whyOthersFail": "'Instead of' pede objeto de troca. 'Therefore' expressaria consequência matemática. 'Due to' exige substantivo de causa.",
    "proTip": "Exatamente a mesma estrutura do seu documento ('Although I didn't study enough, at least I studied Math') aplicada ao Grêmio!"
  },
  "q-at-least-three-refinements": {
    "sentenceTranslation": "Nossa equipe Scrum agenda pelo menos duas sessões de refinamento por sprint para manter as histórias de usuário bem estimadas.",
    "whyCorrect": "'At least' expressa o piso mínimo de sessões agendadas.",
    "whyOthersFail": "'In order to' expressa objetivo com verbo. 'So that' expressa finalidade com oração. 'Whereas' conecta contraste.",
    "proTip": "Use 'at least' sempre que definir SLAs, metas numéricas ou estimativas mínimas de esforço em reuniões de planejamento."
  },
  "q-because-api-throttled": {
    "sentenceTranslation": "O gateway de pagamento rejeitou a requisição de transação em lote porque nosso microsserviço ultrapassou o limite de requisições por segundo.",
    "whyCorrect": "'Because' conecta a rejeição à sua causa técnica explicada por uma oração completa.",
    "whyOthersFail": "'Because of' exigiria substantivo direto sem verbo ('because of the rate limit'). 'Although' expressaria concessão. 'So that' expressaria objetivo futuro.",
    "proTip": "A regra de ouro mais importante de inglês para TI: 'Because' + [oração com verbo]; 'Because of' + [apenas substantivo]."
  },
  "q-because-bus-already-left": {
    "sentenceTranslation": "Ontem de manhã precisei ir de carro ao escritório da GFT porque o ônibus fretado já havia saído do terminal.",
    "whyCorrect": "'Because' é a conjunção causal ideal seguida de sujeito e verbo no past perfect ('the commuter bus had already left').",
    "whyOthersFail": "'Despite' exigiria substantivo sem verbo conjugado. 'Unless' expressa condição negativa ('a não ser que'). 'Instead of' exige gerúndio ou objeto.",
    "proTip": "Frase do seu material ('Yesterday I needed to go to the office by car, because the bus had already left'). Pura linguagem da vida real!"
  },
  "q-because-cinthia-support": {
    "sentenceTranslation": "Consegui concluir meus estudos para a certificação no prazo porque a Cinthia me apoiou e ajudou a cuidar das tarefas do dia a dia.",
    "whyCorrect": "'Because' introduz a oração explicativa de causa e gratidão.",
    "whyOthersFail": "'Nor' exige negativa anterior. 'Rather than' expressa troca ou preferência. 'In contrast' opõe dois lados.",
    "proTip": "Ao agradecer alguém em apresentações ou posts no LinkedIn, 'because [pessoa] supported me' soa caloroso e autêntico."
  },
  "q-because-server-crashed": {
    "sentenceTranslation": "A equipe de QA não conseguiu concluir os testes de regressão no ambiente de staging porque o servidor backend travou inesperadamente.",
    "whyCorrect": "'Because' liga a consequência à falha técnica com precisão sintática.",
    "whyOthersFail": "'Beforehand' é advérbio de tempo anterior. 'Due to' exigiria substantivo direto ('due to the crash'). 'Summing up' é conector de conclusão.",
    "proTip": "Em reuniões diárias ou chamados de suporte, use 'because + [sujeito + verbo]' para justificar blockers sem rodeios."
  },
  "q-because-of-network-outage": {
    "sentenceTranslation": "O deploy em produção foi adiado para amanhã de manhã por causa de uma queda inesperada de rede na região US-East da AWS.",
    "whyCorrect": "'Because of' rege o substantivo causal 'an unexpected network outage' sem exigir verbo subordinado.",
    "whyOthersFail": "'Because' exigiria uma oração com verbo conjugado ('because there was an outage'). 'Although' expressa concessão. 'In order to' expressa finalidade com verbo.",
    "proTip": "Memorize este par: 'Because of the rain' (correto) vs 'Because it was raining' (correto). Nunca diga 'Because of it was raining'!"
  },
  "q-because-of-traffic-jam": {
    "sentenceTranslation": "Chegamos dez minutos atrasados para nossa reserva de jantar com a Cinthia por causa do trânsito pesado na rodovia.",
    "whyCorrect": "'Because of' conecta o atraso ao sintagma nominal 'the heavy traffic'.",
    "whyOthersFail": "'Instead of' indicaria que você escolheu o trânsito em vez do jantar. 'Unless' é condicional. 'So that' expressa intenção.",
    "proTip": "Ao justificar atrasos causados por imprevistos externos (chuva, trânsito, voos cancelados), use sempre 'because of + [substantivo]'."
  },
  "q-because-of-mongodb-lock": {
    "sentenceTranslation": "O tempo de resposta da consulta disparou por causa de um bloqueio de coleção sem índice no conjunto de réplicas do MongoDB.",
    "whyCorrect": "'Because of' rege diretamente o termo técnico 'an unindexed collection lock'.",
    "whyOthersFail": "'Since' exigiria oração com verbo. 'Rather than' expressa opção preferencial. 'Nor' exige correlação negativa.",
    "proTip": "Em relatórios de observabilidade e performance de banco de dados, 'because of + [gargalo]' soa extremamente conciso e profissional."
  },
  "q-beforehand-review-pr": {
    "sentenceTranslation": "Se você quer que a reunião de arquitetura transcorra com eficiência, certifique-se de ler o documento de RFC com antecedência.",
    "whyCorrect": "'Beforehand' situa a ação preparatória no tempo anterior ao evento.",
    "whyOthersFail": "'Afterwards' indicaria leitura após a reunião (tarde demais). 'At all' é ênfase negativa. 'Unless' introduz oração condicional.",
    "proTip": "'Beforehand' = 'in advance' ou 'ahead of time'. Posicionado no fim da frase, soa muito polido e natural!"
  },
  "q-beforehand-clean-code-deploy": {
    "sentenceTranslation": "O engenheiro de DevOps lembrou a todos que todas as credenciais devem ser configuradas no HashiCorp Vault previamente.",
    "whyCorrect": "'Beforehand' atua como advérbio temporal marcando o pré-requisito indispensável.",
    "whyOthersFail": "'Instead of' pede termo alternativo. 'Due to' pede causa nominal. 'Whereas' conecta orações de contraste.",
    "proTip": "No checklist de deploy, 'Do this beforehand' é a frase de ouro para evitar interrupções de serviço."
  },
  "q-beforehand-cinthia-reservation": {
    "sentenceTranslation": "Os restaurantes no Dia dos Namorados lotam em Porto Alegre, então reservei nossa mesa favorita com antecedência.",
    "whyCorrect": "'Beforehand' coroa a precaução de reservar a mesa com antecedência.",
    "whyOthersFail": "'Nor' exige negativa correlativa. 'Because of' exige substantivo causal seguinte. 'Even though' exige oração subordinada.",
    "proTip": "Use 'beforehand' para destacar planejamento e carinho em ações do dia a dia!"
  },
  "q-besides-docker-kubernetes": {
    "sentenceTranslation": "Além de dominarem o Docker e a orquestração de contêineres, nossos arquitetos de nuvem são proficientes em Terraform e automação AWS.",
    "whyCorrect": "'Besides' encabeça a oração com gerúndio ('mastering') somando uma competência técnica a outra.",
    "whyOthersFail": "'Instead of' implicaria que trocaram Docker por Terraform. 'Due to' indicaria causa. 'Unless' impõe condição negativa.",
    "proTip": "Atenção crucial: 'Beside' (sem 's') = ao lado de fisicamente ('sit beside me'). 'Besides' (com 's') = além de ('besides that'). Nunca confunda!"
  },
  "q-besides-gremio-fan": {
    "sentenceTranslation": "Além de ser um torcedor apaixonado pelo Grêmio, ele gosta de analisar táticas do futebol europeu e assistir à Champions League.",
    "whyCorrect": "'Besides' introduz a qualidade adicional com fluidez e naturalidade.",
    "whyOthersFail": "'Rather than' expressaria preferência excludente. 'In case' expressa hipótese preventiva. 'Therefore' expressa dedução.",
    "proTip": "Use 'Besides [fazer algo]' para enriquecer apresentações pessoais sobre hobbies e interesses."
  },
  "q-besides-salary-benefits": {
    "sentenceTranslation": "A proposta de trabalho na empresa de consultoria de tecnologia era muito atraente; além disso, eles oferecem flexibilidade de trabalho 100% remoto e um orçamento anual para estudos.",
    "whyCorrect": "'Besides' funciona como conector de acréscimo argumentativo em apoio à decisão profissional.",
    "whyOthersFail": "'Otherwise' indicaria advertência. 'Even though' exige oração concessiva. 'Summing up' anteciparia o fechamento sem listar os bônus.",
    "proTip": "'Besides' usado entre ponto e vírgula e vírgula ('; besides, ...') funciona com força máxima de persuasão."
  },
  "q-but-tight-deadline-delivered": {
    "sentenceTranslation": "O prazo do release estava extremamente apertado, mas a equipe de desenvolvimento trabalhou unida e entregou todas as histórias de usuário no prazo.",
    "whyCorrect": "'But' estabelece a transição imediata entre a dificuldade do prazo e o sucesso da entrega.",
    "whyOthersFail": "'So that' expressaria propósito futuro. 'Due to' exige substantivo direto. 'Nor' exige frase negativa anterior com neither.",
    "proTip": "'But' é uma das 7 conjunções coordenativas do inglês (conhecidas pelo mnemônico FANBOYS: For, And, Nor, But, Or, Yet, So). Use vírgula antes dele ao ligar orações independentes!"
  },
  "q-but-cinthia-spicy-food": {
    "sentenceTranslation": "Eu adoro comida mexicana autêntica com jalapeños e molho apimentado, mas a Cinthia prefere pratos mais suaves com guacamole fresco.",
    "whyCorrect": "'But' contrapõe os dois gostos alimentares de forma simples e natural.",
    "whyOthersFail": "'Unless' estabeleceria uma condição sem sentido. 'Because of' exige substantivo de causa. 'Instead of' pede gerúndio ou substituição direta.",
    "proTip": "Frases do dia a dia ganham ritmo quando você usa 'but' para harmonizar diferenças de gosto entre você e seu parceiro!"
  },
  "q-but-gremio-dominated-drew": {
    "sentenceTranslation": "O Grêmio dominou completamente a posse de bola durante todo o segundo tempo, mas não conseguiu marcar o gol da vitória.",
    "whyCorrect": "'But' expressa o contraste clássico do futebol entre jogar melhor e não conseguir o gol.",
    "whyOthersFail": "'Therefore' indicaria que dominar causa a falta de gols (ilogismo). 'In order to' pede verbo no infinitivo. 'As well as' adicionaria sem contraste.",
    "proTip": "Excelente conector para crônicas esportivas: contrasta o esforço com o resultado não alcançado."
  },
  "q-but-mongodb-fast-indexing": {
    "sentenceTranslation": "O MongoDB permite flexibilidade de esquema e protótipos iniciais rápidos, mas você ainda deve planejar cuidadosamente a sua estratégia de indexação para a escala de produção.",
    "whyCorrect": "'But' faz a ressalva necessária para conscientizar o time sobre escalabilidade.",
    "whyOthersFail": "'Nor' exige negação correlativa. 'Because of' exige sintagma nominal causal. 'Summing up' é marcador de encerramento.",
    "proTip": "Em discussões de arquitetura, 'but' é o instrumento perfeito para ponderar prós e contras de qualquer ferramenta NoSQL."
  },
  "q-consequently-cloud-costs": {
    "sentenceTranslation": "A squad deixou várias instâncias de GPU não otimizadas rodando durante todo o fim de semana. Consequentemente, nossa fatura mensal da AWS ultrapassou o orçamento em 30%.",
    "whyCorrect": "'Consequently' é o conector formal de causa e efeito ideal para relatórios financeiros e de custos em nuvem.",
    "whyOthersFail": "'Nevertheless' expressaria concessão. 'Unless' introduziria condição. 'Rather than' expressa preferência.",
    "proTip": "Em reuniões de FinOps (gestão de custos em nuvem), use 'Consequently' para demonstrar a relação direta de causa e efeito nos gastos."
  },
  "q-consequently-cinthia-trip": {
    "sentenceTranslation": "Concluímos todos os entregáveis da sprint dois dias antes do prazo; consequentemente, pudemos tirar a sexta-feira de folga e viajar com a Cinthia.",
    "whyCorrect": "'Consequently' expressa a recompensa direta gerada pela eficiência técnica da equipe.",
    "whyOthersFail": "'Even though' exigiria contraste. 'Nor' exige negativa. 'Instead of' exige substantivo ou gerúndio.",
    "proTip": "Use ponto e vírgula seguido de 'consequently,' para criar conexões maduras e sofisticadas na escrita em inglês."
  },
  "q-consequently-gremio-win-final": {
    "sentenceTranslation": "O atacante marcou dois gols decisivos no primeiro tempo; consequentemente, o Grêmio avançou para a grande final do campeonato estadual.",
    "whyCorrect": "'Consequently' liga a façanha dos gols à consagração da vaga na final.",
    "whyOthersFail": "'Despite' exigiria concessão nominal. 'Due to' exige substantivo causal. 'Otherwise' alerta para condição negativa.",
    "proTip": "'Consequently' eleva o nível do seu vocabulário profissional muito além do básico 'so'."
  },
  "q-currently-not-coding-pm": {
    "sentenceTranslation": "Atualmente, estou trabalhando como coordenador de projetos em vez de escrever código bruto todos os dias.",
    "whyCorrect": "'Currently' situa a ocupação atual na linha do tempo.",
    "whyOthersFail": "'Actually' significa 'na verdade' (falso cognato perigoso!). 'Afterwards' indica tempo futuro. 'Summing up' indica resumo.",
    "proTip": "Cuidado clássico do Professor: 'Currently' = Atualmente. 'Actually' = Na verdade. Esse é um dos erros mais comuns de brasileiros!"
  },
  "q-currently-migrating-microservices": {
    "sentenceTranslation": "Nossa squad de engenharia está atualmente refatorando nosso monólito em microsserviços conteinerizados em Spring Boot e Node.js.",
    "whyCorrect": "'Currently' se posiciona perfeitamente no meio do present continuous para destacar o trabalho atual da equipe.",
    "whyOthersFail": "'At all' é usado para ênfase negativa. 'Unless' pede oração condicional. 'Rather than' estabelece escolha comparativa.",
    "proTip": "No Daily Standup: 'We are currently working on story #412' é a estrutura padrão mais usada no mundo corporativo internacional."
  },
  "q-currently-gremio-table": {
    "sentenceTranslation": "O Grêmio está atualmente ocupando a terceira colocação na tabela do campeonato, lutando por uma vaga na Copa Libertadores do próximo ano.",
    "whyCorrect": "'Currently' marca com precisão o momento da classificação esportiva.",
    "whyOthersFail": "'Beforehand' indica tempo passado/prévio. 'Because of' exige causa nominal. 'Nor' exige negativa correlativa.",
    "proTip": "Use 'currently' sempre que apresentar relatórios periódicos de ranking ou status que mudam com o tempo."
  },
  "q-definitely-best-restaurant-cinthia": {
    "sentenceTranslation": "Esta autêntica trattoria italiana no centro da cidade é definitivamente o melhor restaurante que a Cinthia e eu descobrimos este ano.",
    "whyCorrect": "'Definitely' qualifica o adjetivo no superlativo ('the best') com ênfase categórica.",
    "whyOthersFail": "'Rather than' expressa preferência. 'In spite of' expressa concessão. 'Unless' estabelece condição negativa.",
    "proTip": "Quer concordar com alguém com entusiasmo em uma reunião de trabalho? Diga: 'Definitely!'"
  },
  "q-definitely-adopt-typescript": {
    "sentenceTranslation": "Após avaliar a redução de erros em tempo de execução, nossa equipe de engenharia definitivamente adotará TypeScript para todos os próximos projetos de frontend.",
    "whyCorrect": "'Definitely' colocado antes do verbo principal reforça o compromisso da decisão tecnológica.",
    "whyOthersFail": "'Nor' exige estrutura negativa. 'Because of' pede substantivo causal. 'Meanwhile' indica tempo simultâneo.",
    "proTip": "Ao assumir compromissos com clientes em reuniões de Sprint Planning, 'We will definitely deliver this' transmite confiança absoluta."
  },
  "q-definitely-worth-reading": {
    "sentenceTranslation": "A nova documentação de engenharia sobre padrões de projeto de microsserviços definitivamente vale a pena ser lida antes do início da sprint.",
    "whyCorrect": "'Definitely' intensifica a expressão idiomática 'worth reading' (vale a pena ler).",
    "whyOthersFail": "'Otherwise' traz alerta condicional. 'Due to' pede substantivo causal. 'Even if' é concessivo.",
    "proTip": "'It is definitely worth it' (vale definitivamente a pena) é uma expressão essencial para o dia a dia!"
  },
  "q-despite-heavy-rain-stadium": {
    "sentenceTranslation": "Apesar da chuva torrencial em Porto Alegre, cinquenta mil apaixonados torcedores do Grêmio lotaram a Arena para apoiar o time.",
    "whyCorrect": "'Despite' rege o substantivo sem a preposição 'of' (nunca use 'despite of').",
    "whyOthersFail": "'Although' exigiria oração com verbo ('Although it was raining'). 'Because of' faria a chuva ser o motivo de irem. 'So that' expressa finalidade.",
    "proTip": "Erro clássico de vestibular e entrevistas: NUNCA diga 'despite of'. O correto é 'despite + substantivo' ou 'in spite of + substantivo'!"
  },
  "q-despite-tight-deadline-gft": {
    "sentenceTranslation": "Apesar do prazo apertado imposto pelo cliente bancário, a consultoria GFT entregou o módulo de pagamentos sem nenhum defeito em produção.",
    "whyCorrect": "'Despite' encabeça o sintagma nominal 'the tight deadline' de forma gramaticalmente impecável.",
    "whyOthersFail": "'Even though' exige sujeito e verbo conjugado. 'Unless' impõe condição restritiva. 'Instead of' pede troca de elemento.",
    "proTip": "Em relatórios de entregas de TI: 'Despite the challenges...' é a frase clássica para abrir o sumário executivo com tom de superação."
  },
  "q-despite-lack-of-sleep": {
    "sentenceTranslation": "Apesar da falta de sono decorrente do monitoramento noturno do sistema, o arquiteto líder conduziu uma reunião de Planejamento de Sprint enérgica e inspiradora.",
    "whyCorrect": "'Despite' rege 'the lack of sleep' perfeitamente.",
    "whyOthersFail": "'Whereas' conecta orações de comparação contrastante. 'Therefore' expressa dedução. 'Nor' exige negativa anterior.",
    "proTip": "Lembre-se: 'Despite + substantivo' é conciso, refinado e demonstra alto domínio da língua inglesa."
  },
  "q-despite-high-prices-cinthia": {
    "sentenceTranslation": "Apesar dos preços altos durante a alta temporada de férias, a Cinthia e eu decidimos reservar o hotel romântico na beira da praia.",
    "whyCorrect": "'Despite' rege 'the high prices' sem vícios gramaticais.",
    "whyOthersFail": "'In order to' expressa finalidade com infinitivo. 'Because' exigiria oração explicativa. 'In contrast' pede segundo elemento comparado.",
    "proTip": "Dica de pronúncia: 'Despite' se pronuncia /dɪˈspaɪt/. O som inicial é suave e curto."
  },
  "q-due-to-database-maintenance": {
    "sentenceTranslation": "O portal do cliente ficará temporariamente indisponível hoje à noite, das 2h às 4h, devido a uma manutenção agendada no banco de dados MongoDB.",
    "whyCorrect": "'Due to' funciona como preposição causal associada diretamente ao substantivo 'scheduled database maintenance'.",
    "whyOthersFail": "'Because' exigiria verbo subordinado ('because there will be maintenance'). 'Unless' expressa condição negativa. 'Although' expressa concessão.",
    "proTip": "Frase essencial de avisos de TI e status page: 'System is down due to scheduled maintenance.'"
  },
  "q-due-to-illness-standup": {
    "sentenceTranslation": "O Scrum Master esteve ausente da Daily Standup de hoje devido a uma febre repentina e sintomas de gripe.",
    "whyCorrect": "'Due to' rege o substantivo composto que descreve a enfermidade.",
    "whyOthersFail": "'Instead of' indicaria substituição. 'So that' expressa objetivo. 'Rather than' expressa preferência.",
    "proTip": "Em comunicações de ausência ou justificativas profissionais de equipe, 'due to personal reasons' ou 'due to illness' é o formato corporativo padrão."
  },
  "q-due-to-cinthia-effort": {
    "sentenceTranslation": "A reforma da nossa casa foi concluída duas semanas antes do prazo, em grande parte devido à dedicação da Cinthia e ao seu gerenciamento dos empreiteiros.",
    "whyCorrect": "'Due to' introduz o fator determinante da conquista positiva.",
    "whyOthersFail": "'Nor' exige estrutura negativa. 'Even if' é condicional. 'In contrast' estabelece oposição.",
    "proTip": "'Largely due to...' (em grande parte devido a...) é uma combinação idiomática muito elegante em inglês!"
  },
  "q-equally-backend-frontend-quality": {
    "sentenceTranslation": "No desenvolvimento web moderno, o design de interface de usuário intuitivo é vital; igualmente, uma arquitetura de backend escalável e segura é indispensável.",
    "whyCorrect": "'Equally' estabelece paridade de relevância entre os dois pilares da engenharia de software.",
    "whyOthersFail": "'Unless' introduz condição negativa. 'Because of' pede substantivo causal. 'Instead of' anularia um dos lados.",
    "proTip": "Use 'equally' para equilibrar prioridades em debates técnicos: 'Frontend matters, but equally, backend performance is critical.'"
  },
  "q-equally-gremio-defense-attack": {
    "sentenceTranslation": "Para conquistar a taça, o Renato Gaúcho enfatizou que marcar gols é crucial, mas manter uma linha defensiva disciplinada é igualmente importante.",
    "whyCorrect": "'Equally important' é uma locução consolidada que equipara dois fatores de sucesso.",
    "whyOthersFail": "'At all' é para ênfase negativa. 'Therefore' expressa conclusão de causa. 'Rather than' expressa exclusão.",
    "proTip": "'Equally important' é uma das expressões mais úteis para apresentações e defesas de projetos!"
  },
  "q-equally-shared-responsibilities-cinthia": {
    "sentenceTranslation": "A Cinthia e eu concordamos que o planejamento financeiro e as tarefas domésticas devem ser igualmente divididos entre nós dois.",
    "whyCorrect": "'Equally divided' expressa divisão paritária e colaborativa.",
    "whyOthersFail": "'Nor' exige estrutura de negação correlativa. 'Due to' pede causa. 'In spite of' expressa concessão.",
    "proTip": "No vocabulário de trabalho em equipe e vida pessoal, 'equally divided' expressa senso de justiça impecável."
  },
  "q-equally-qa-dev-collaboration": {
    "sentenceTranslation": "A qualidade do código não é responsabilidade exclusiva dos desenvolvedores de software; QAs e gerentes de produto são igualmente responsáveis pela entrega de valor.",
    "whyCorrect": "'Equally accountable' expressa o princípio ágil de responsabilidade compartilhada.",
    "whyOthersFail": "'Otherwise' traz ameaça/alerta. 'Instead of' substituiria um pelo outro. 'So that' expressa objetivo.",
    "proTip": "Manifesto Ágil na veia: 'Devs and QAs are equally responsible for quality.' Use essa frase em retrospectivas!"
  },
  "q-even-junior-debugged-race-condition": {
    "sentenceTranslation": "O bug de concorrência era tão bizarro que até mesmo nosso arquiteto principal teve dificuldades para reproduzi-lo em máquinas locais.",
    "whyCorrect": "'Even' enfatiza o extremo da surpresa, mostrando a complexidade anômala do problema.",
    "whyOthersFail": "'Rather than' expressa preferência. 'Due to' pede substantivo causal. 'Unless' impõe condição negativa.",
    "proTip": "Use 'even' antes de um substantivo ('even our principal architect') para enfatizar algo que surpreende a todos."
  },
  "q-even-on-rainy-days-gremio": {
    "sentenceTranslation": "Torcedores de verdade nunca abandonam o clube; mesmo quando as temperaturas caem perto de zero, os gremistas cantam com orgulho na Arena.",
    "whyCorrect": "'Even when' é a locução enfática por excelência para demonstrar constância inabalável.",
    "whyOthersFail": "'Instead of' exigiria substituição. 'In order to' exige infinitivo de objetivo. 'Nor' exige negativa anterior.",
    "proTip": "'Even when...' (mesmo quando...) demonstra determinação tanto no futebol quanto em projetos sob pressão."
  },
  "q-even-cinthia-knows-git": {
    "sentenceTranslation": "Falo sobre programação e tecnologia com tanta frequência em casa que até mesmo a Cinthia sabe a diferença entre uma branch e um pull request!",
    "whyCorrect": "'Even' dá o tom bem-humorado de ênfase surpreendente.",
    "whyOthersFail": "'Otherwise' traz alerta. 'Because of' pede substantivo direto causal. 'Whereas' conecta contraste entre duas orações.",
    "proTip": "Use 'even' para criar tiradas divertidas no ambiente de trabalho sobre a onipresença da tecnologia na sua vida."
  },
  "q-even-faster-than-expected": {
    "sentenceTranslation": "Com nossa nova estratégia de indexação de banco de dados no MongoDB, a execução de consultas ficou ainda mais rápida do que tínhamos medido inicialmente.",
    "whyCorrect": "'Even' intensifica comparativos de superioridade ('even faster', 'even better', 'even harder').",
    "whyOthersFail": "'At all' se usa em frases negativas no final. 'Unless' é condicional. 'Due to' pede causa nominal.",
    "proTip": "Dica de ouro: 'Even better' (ainda melhor), 'Even faster' (ainda mais rápido). Combinação diária indispensável em TI!"
  },
  "q-even-if-server-fails-failover": {
    "sentenceTranslation": "Nosso motor de transações financeiras continuará operacional mesmo se o nó primário do banco de dados na nuvem cair completamente.",
    "whyCorrect": "'Even if' introduz a condição extrema hipotética que não abalará o sistema.",
    "whyOthersFail": "'Unless' inverteria o sentido ('a não ser que caia, continuará no ar'). 'Because of' pede substantivo direto sem verbo. 'In order to' exige infinitivo.",
    "proTip": "Em arquitetura resiliente, 'System stays up even if X fails' é a declaração definitiva de tolerância a falhas."
  },
  "q-even-if-rain-cinthia-dinner": {
    "sentenceTranslation": "A Cinthia e eu vamos comemorar nosso aniversário no bistrô com cobertura panorâmica mesmo que chova forte a noite inteira.",
    "whyCorrect": "'Even if' expressa determinação romântica diante de qualquer adversidade climática.",
    "whyOthersFail": "'Instead of' pede termo alternativo. 'Nor' exige estrutura de negação. 'Due to' exige substantivo de causa.",
    "proTip": "'Even if' lida com hipóteses futuras extremas ('mesmo que aconteça X, faremos Y')."
  },
  "q-even-if-gremio-concedes-first": {
    "sentenceTranslation": "O treinador tranquilizou os torcedores de que o time lutará pela vitória mesmo se o adversário marcar um gol logo no início do primeiro tempo.",
    "whyCorrect": "'Even if' introduz o teste de resiliência psicológica do time em campo.",
    "whyOthersFail": "'Because' transformaria o gol sofrido na razão da luta. 'Therefore' expressaria dedução lógica. 'Rather than' expressa preferência.",
    "proTip": "Diferença sutil: 'Even if' = mesmo se (hipótese); 'Even though' = embora (fato real consumado)."
  },
  "q-even-though-exhausted-deployment": {
    "sentenceTranslation": "Muito embora a equipe de DevOps estivesse completamente exausta após a migração, eles continuaram online para monitorar o pico de transações da manhã.",
    "whyCorrect": "'Even though' é uma conjunção subordinativa concessiva mais enfática que 'although', seguida de oração com fato consumado.",
    "whyOthersFail": "'Despite' exigiria substantivo ou gerúndio ('Despite being exhausted'). 'Because of' transformaria o cansaço em causa de ficarem acordados. 'Unless' impõe condição negativa.",
    "proTip": "'Even though' tem mais carga dramática e intensidade que 'Although'. Ambas pedem oração completa com sujeito e verbo!"
  },
  "q-even-though-expensive-iphone": {
    "sentenceTranslation": "Embora o mais novo smartphone topo de linha fosse bastante caro e não incluísse um carregador de tomada, o Carlos decidiu comprá-lo.",
    "whyCorrect": "'Even though' introduz os dois fatos reais negativos superados pela vontade de compra.",
    "whyOthersFail": "'In order to' expressa finalidade com infinitivo. 'So that' pede oração de intenção. 'In contrast' opõe dois sujeitos distintos.",
    "proTip": "Frase inspirada no diálogo do iPhone do seu material! Mostra a concessão real com perfeição."
  },
  "q-even-though-gremio-missed-chances": {
    "sentenceTranslation": "Muito embora o Grêmio tenha perdido várias chances claras no primeiro tempo, eles mantiveram a compostura e venceram a partida por 2 a 1.",
    "whyCorrect": "'Even though' introduz o fato histórico consumado das oportunidades desperdiçadas.",
    "whyOthersFail": "'Due to' atribuiria a vitória aos gols perdidos (absurdo). 'Unless' impõe condição restritiva. 'Rather than' expressa preferência.",
    "proTip": "Use 'Even though' para valorizar vitórias suadas em projetos ou esportes diante de dificuldades comprovadas."
  },
  "q-for-server-overloaded-halt": {
    "sentenceTranslation": "O script de automação de testes interrompeu a execução imediatamente, pois o cluster principal de banco de dados havia atingido 100% de capacidade de CPU.",
    "whyCorrect": "'For' antecedido de vírgula é a clássica conjunção explicativa que conecta duas orações independentes.",
    "whyOthersFail": "'In order to' exigiria infinitivo de finalidade. 'Despite' exigiria substantivo de concessão. 'Nor' exige negativa anterior com neither.",
    "proTip": "Dica culta do Professor: No seu material você destacou 'For' como conectivo. Ele faz parte do acrônimo FANBOYS e significa 'pois / porque' em linguagem formal e escrita!"
  },
  "q-for-trusted-cinthia-judgment": {
    "sentenceTranslation": "Concordei em mudar de apartamento sem hesitação, pois confiava completamente na intuição apurada e na pesquisa de mercado cuidadosa da Cinthia.",
    "whyCorrect": "'For' funciona com nobreza e solenidade ao justificar a decisão de vida.",
    "whyOthersFail": "'Unless' criaria uma condição negativa sem sentido. 'Instead of' exige gerúndio ou substantivo. 'Meanwhile' indica tempo simultâneo.",
    "proTip": "Na literatura e em discursos formais, 'for' no lugar de 'because' acrescenta um tom solene e comovente à narrativa."
  },
  "q-for-gremio-fans-faithful": {
    "sentenceTranslation": "O estádio explodiu em cantos unificados muito antes do apito inicial, pois os torcedores sabiam que a história estava prestes a ser escrita.",
    "whyCorrect": "'For' expressa a causa íntima que impulsionava a emoção coletiva da torcida.",
    "whyOthersFail": "'Therefore' inverteria a causalidade. 'Rather than' expressa troca. 'So that' expressa meta futura.",
    "proTip": "Use 'for' para dar elegância a textos descritivos e artigos opinativos de alta qualidade."
  },
  "q-for-consultancy-invested-training": {
    "sentenceTranslation": "A GFT continuou a expandir sua liderança técnica em soluções de nuvem, pois a empresa investiu consistentemente em certificações e mentoria para os colaboradores.",
    "whyCorrect": "'For' explica a causa fundamental do sucesso institucional.",
    "whyOthersFail": "'Because of' exigiria sintagma nominal sem oração com verbo. 'Unless' impõe condição restritiva. 'Equally' expressa equivalência sem causa.",
    "proTip": "Excelente para relatórios institucionais e casos de sucesso corporativos!"
  },
  "q-for-instance-agile-frameworks": {
    "sentenceTranslation": "Nossa organização de engenharia utiliza vários frameworks modernos de entrega; por exemplo, nossa squad de pagamentos conta com o Scrum enquanto a equipe de operações usa o Kanban.",
    "whyCorrect": "'For instance' introduz a exemplificação detalhada com total fluência.",
    "whyOthersFail": "'In contrast' oporia sem exemplificar a lista. 'Due to' exige substantivo de causa. 'Unless' estabelece condição negativa.",
    "proTip": "'For instance' é sinônimo direto de 'for example'. Em apresentações de projetos, alternar entre os dois evita repetição monótona!"
  },
  "q-for-instance-cinthia-travel-destinations": {
    "sentenceTranslation": "A Cinthia e eu adoramos explorar cidades históricas europeias; por exemplo, passamos nossas últimas férias admirando a arquitetura de Florença e Roma.",
    "whyCorrect": "'For instance' conecta a afirmação geral ao exemplo específico da viagem.",
    "whyOthersFail": "'Therefore' expressaria dedução lógica. 'Rather than' expressa exclusão comparativa. 'Nor' exige negativa anterior.",
    "proTip": "Use 'for instance' entre vírgulas ou após ponto e vírgula para ancorar relatos pessoais."
  },
  "q-for-instance-nosql-databases": {
    "sentenceTranslation": "Existem vários armazenamentos de documentos NoSQL de alto desempenho disponíveis; por exemplo, o MongoDB permite esquemas flexíveis enquanto o Couchbase oferece cache integrado.",
    "whyCorrect": "'For instance' inicia a enumeração explicativa dos sistemas NoSQL.",
    "whyOthersFail": "'In order to' expressa finalidade com infinitivo. 'Unless' estabelece condição restritiva. 'Because of' pede causa substantiva.",
    "proTip": "Em reuniões de arquitetura e tech talks, 'for instance' confere autoridade e riqueza técnica aos seus exemplos."
  },
  "q-for-instance-gremio-legends": {
    "sentenceTranslation": "O Grêmio produziu inúmeros jogadores e treinadores lendários ao longo de sua história; por exemplo, Renato Gaúcho conquistou títulos tanto como atacante quanto como técnico.",
    "whyCorrect": "'For instance' ilustra a glória histórica do clube com um exemplo incontestável.",
    "whyOthersFail": "'So that' expressa objetivo futuro. 'Instead of' pede substituição. 'Equally' expressa equivalência sem exemplificar.",
    "proTip": "Ao defender a grandeza do Grêmio em conversas em inglês com estrangeiros, 'for instance, Renato Gaúcho...' é argumento imbatível!"
  },
  "q-furthermore-microservices-benefits": {
    "sentenceTranslation": "A quebra do monólito reduziu nosso ciclo de deploy de semanas para horas. Além disso, permitiu que equipes independentes escolhessem a melhor stack tecnológica para cada domínio.",
    "whyCorrect": "'Furthermore' é o conector formal de adição por excelência para construir argumentações técnicas sólidas.",
    "whyOthersFail": "'In contrast' oporia os dois benefícios. 'Due to' exige substantivo de causa. 'Unless' impõe condição restritiva.",
    "proTip": "'Furthermore' = 'Moreover'. É o conector perfeito para defesas de teses arquiteturais e propostas comerciais corporativas."
  },
  "q-furthermore-gft-client-satisfaction": {
    "sentenceTranslation": "A squad de engenharia entregou as funcionalidades centrais de banco no prazo. Além disso, nossa taxa de defeitos pós-lançamento caiu 40% em comparação ao trimestre anterior.",
    "whyCorrect": "'Furthermore' empilha evidências de alta performance na reunião executiva.",
    "whyOthersFail": "'Rather than' expressa opção comparativa. 'Nor' exige negativa anterior. 'Even if' é concessivo condicional.",
    "proTip": "Apresentando resultados para clientes ou diretores? Use 'Furthermore,' para introduzir o seu segundo melhor indicador!"
  },
  "q-furthermore-cinthia-apartment-amenities": {
    "sentenceTranslation": "O novo apartamento tem um escritório espaçoso para home office com luz natural; além do mais, fica localizado a apenas três quadras do parque favorito da Cinthia.",
    "whyCorrect": "'Furthermore' reforça o valor da escolha do apartamento com mais uma vantagem incontestável.",
    "whyOthersFail": "'Otherwise' traria consequência negativa. 'Because of' exige causa nominal. 'Summing up' fecharia prematuramente sem somar.",
    "proTip": "'Furthermore' enriquece suas histórias pessoais, dando um ritmo maduro e envolvente à narrativa."
  },
  "q-hence-token-expired-unauthorized": {
    "sentenceTranslation": "O token de autenticação JWT havia ultrapassado sua vida útil de 15 minutos; portanto, o gateway rejeitou a requisição da API com status 401 Não Autorizado.",
    "whyCorrect": "'Hence' conecta a expiração do token à rejeição com rigor matemático e técnico.",
    "whyOthersFail": "'Nevertheless' expressaria oposição. 'Unless' impõe condição restritiva. 'Instead of' pede substituição direta.",
    "proTip": "'Hence' é muito comum em documentações de APIs, especificações RFC e discussões de lógica de programação."
  },
  "q-hence-traffic-late-airport": {
    "sentenceTranslation": "Um acidente repentino bloqueou as duas pistas da rodovia que leva ao aeroporto; daí a razão do nosso atraso no voo e da chegada apressada ao portão.",
    "whyCorrect": "'Hence' rege com precisão a expressão nominal que explica o desfecho da viagem.",
    "whyOthersFail": "'Because' exigiria oração subordinada com verbo. 'Although' expressaria concessão. 'So that' expressaria objetivo.",
    "proTip": "Uso culto: 'Hence + substantivo' ('Hence the confusion', 'Hence the delay'). Soa extremamente refinado em inglês formal!"
  },
  "q-hence-gremio-tactical-discipline": {
    "sentenceTranslation": "Os defensores mantiveram linhas compactas durante noventa minutos; daí a razão de não terem sofrido gols contra um dos ataques mais fortes do campeonato.",
    "whyCorrect": "'Hence' justifica o resultado com extrema concisão sintática.",
    "whyOthersFail": "'Rather than' expressa exclusão comparativa. 'Nor' exige negativa correlativa. 'Due to' exigiria ordem inversa ('clean sheet due to compact lines').",
    "proTip": "Em análises esportivas ou de desempenho, 'hence + [consequência]' sintetiza a causa com precisão cirúrgica."
  },
  "q-however-experienced-architect-advice": {
    "sentenceTranslation": "O desenvolvedor júnior estava confiante de que o MongoDB não precisava de índices secundários; no entanto, o arquiteto sênior aconselhou testar o desempenho das consultas sob carga.",
    "whyCorrect": "'However' antecedido de ponto e vírgula e seguido de vírgula é o padrão de ouro para introduzir contraste formal.",
    "whyOthersFail": "'Because of' exige causa substantiva. 'In order to' exige infinitivo de objetivo. 'Unless' impõe condição restritiva.",
    "proTip": "A pontuação clássica de 'However' no meio de períodos é: '; however, ' ou abrindo frase nova: '. However, '. Nunca coloque apenas uma vírgula antes!"
  },
  "q-however-cinthia-busy-time-dinner": {
    "sentenceTranslation": "A Cinthia teve uma agenda intensa de reuniões com clientes a tarde toda; no entanto, ela ainda encontrou tempo para tomar um café agradável comigo.",
    "whyCorrect": "'However' articula a oposição de ideias com leveza e precisão gramatical.",
    "whyOthersFail": "'Nor' pede negativa anterior. 'Due to' exige substantivo de causa. 'Instead of' pede substituição direta.",
    "proTip": "Use 'however' em narrativas de dia a dia para demonstrar consideração mútua que supera obstáculos de tempo."
  },
  "q-however-gremio-conceded-draw": {
    "sentenceTranslation": "O Grêmio atacou com pressão implacável e acertou a trave duas vezes; todavia, o goleiro adversário fez defesas milagrosas para preservar o empate.",
    "whyCorrect": "'However' faz o contraponto perfeito entre o ataque gremista e a resistência rival.",
    "whyOthersFail": "'Therefore' indicaria dedução de causa. 'So that' expressa finalidade. 'Equally' expressa equivalência sem adversidade.",
    "proTip": "Em relatos de partidas de futebol, 'however' dá o tom dramático de equilíbrio entre as duas forças em campo."
  },
  "q-however-cloud-migration-worth-it": {
    "sentenceTranslation": "Migrar cinquenta serviços legados para a AWS exigiu três meses de engenharia intensiva; contudo, a economia de custos operacionais fez o esforço valer totalmente a pena.",
    "whyCorrect": "'However' estabelece o contraste positivo entre o investimento árduo e o retorno do projeto.",
    "whyOthersFail": "'Unless' impõe condição. 'Rather than' expressa preferência. 'In spite of' exige substantivo sem oração independente.",
    "proTip": "Conectivo indispensável para fechar estudos de caso de TI: [Desafio difícil]; however, [Retorno espetacular]."
  },
  "q-if-all-tests-pass-deploy": {
    "sentenceTranslation": "Se todos os testes unitários e de integração automatizados passarem com sucesso no Jenkins, nossa esteira fará o deploy automático do código em produção.",
    "whyCorrect": "'If' é a conjunção condicional clássica (First Conditional) que conecta o gatilho dos testes à ação no futuro simples ('will deploy').",
    "whyOthersFail": "'Unless' inverteria a regra ('a não ser que passem, faremos deploy'). 'Although' expressa concessão. 'Because of' exige substantivo de causa.",
    "proTip": "A regra da First Conditional: 'If + Simple Present, ... will + verbo'. Padrão essencial em lógica de programação e automação de CI/CD!"
  },
  "q-if-gremio-wins-top-four": {
    "sentenceTranslation": "Se o Grêmio vencer o clássico de sábado na Arena, subirá direto para o G4 do campeonato nacional.",
    "whyCorrect": "'If' introduz a condição esportiva associada ao verbo no presente ('wins') e resultado futuro ('will climb').",
    "whyOthersFail": "'Instead of' exige gerúndio ou substantivo de substituição. 'Due to' exige substantivo. 'Nor' exige negativa correlativa.",
    "proTip": "Toda rodada decisiva de campeonato gira em torno de 'If': 'If they win, they will qualify!'"
  },
  "q-if-cinthia-finishes-early-cinema": {
    "sentenceTranslation": "Se a Cinthia terminar sua apresentação para o cliente mais cedo hoje à noite, pegaremos a sessão das dez no cinema.",
    "whyCorrect": "'If' expressa a possibilidade real e animadora de um programa a dois após o trabalho.",
    "whyOthersFail": "'Whereas' conecta orações de contraste. 'Therefore' expressa dedução lógica. 'Rather than' expressa preferência.",
    "proTip": "Use 'If + presente, we will + verbo' para planejar encontros e compromissos com quem você ama com flexibilidade."
  },
  "q-if-you-need-help-mongodb": {
    "sentenceTranslation": "Se você encontrar algum problema de sintaxe ao escrever o pipeline de agregação no MongoDB, sinta-se à vontade para me chamar no Slack.",
    "whyCorrect": "'If' abre a oração condicional de suporte entre pares ('Zero Conditional / Imperativo').",
    "whyOthersFail": "'Unless' criaria um sentido hostil ('a menos que tenha problemas, não fale comigo'). 'In order to' exige infinitivo. 'Because of' exige substantivo.",
    "proTip": "'If you need any help, feel free to reach out' é a frase mais simpática e profissional que você pode dizer aos seus colegas no Slack!"
  },
  "q-in-advance-book-flight-vacation": {
    "sentenceTranslation": "A Cinthia e eu conseguimos garantir passagens aéreas econômicas porque as compramos com três meses de antecedência.",
    "whyCorrect": "'In advance' é a locução temporal padrão usada após intervalos de tempo ('three months in advance').",
    "whyOthersFail": "'At last' expressaria alívio após espera. 'At all' é para ênfase negativa. 'Unless' é condicional.",
    "proTip": "Fórmula de ouro: [Período de tempo] + 'in advance' ('two weeks in advance', 'three days in advance'). Memorize!"
  },
  "q-in-advance-notify-downtime-clients": {
    "sentenceTranslation": "A governança corporativa exige que nossa equipe de TI notifique os clientes bancários corporativos com pelo menos 48 horas de antecedência em relação a qualquer indisponibilidade de manutenção.",
    "whyCorrect": "'In advance of' expressa antecedência temporal antes de um marco ou evento programado.",
    "whyOthersFail": "'Instead of' indicaria cancelamento da manutenção. 'Due to' indicaria causa. 'Even though' exige oração subordinada.",
    "proTip": "'48 hours in advance' é requisito padrão em SLAs de grandes empresas. Use com total segurança em e-mails executivos."
  },
  "q-in-advance-thank-review-pr": {
    "sentenceTranslation": "Enviei o documento de RFC arquitetural aos líderes técnicos e escrevi: 'Agradeço antecipadamente pelo feedback construtivo de vocês.'",
    "whyCorrect": "'Thank you in advance' expressa gentileza e expectativa positiva de colaboração.",
    "whyOthersFail": "'Nor' pede negativa. 'Rather than' expressa escolha. 'Whereas' conecta orações de contraste.",
    "proTip": "'Thank you in advance' (agradeço desde já) é uma das saudações finais de e-mail corporativo mais utilizadas em todo o planeta!"
  },
  "q-in-case-network-fails-cache": {
    "sentenceTranslation": "Nosso aplicativo móvel salva os dados mais recentes do usuário em cache local no dispositivo para o caso de o usuário perder temporariamente a conexão com a internet.",
    "whyCorrect": "'In case' expressa precaução contra uma possibilidade indesejada futura.",
    "whyOthersFail": "'Unless' significaria 'a não ser que perca' (inversão absurda da lógica de cache). 'Due to' pede substantivo causal. 'So that' expressaria que queríamos que ele perdesse a conexão.",
    "proTip": "Diferença vital: 'If' = se acontecer, farei algo. 'In case' = faço algo agora por precaução, para estar pronto se acontecer!"
  },
  "q-in-case-rain-arena-gremio": {
    "sentenceTranslation": "Leve seu casaco corta-vento impermeável do Grêmio caso a previsão do tempo vire para chuva durante o clássico na Arena.",
    "whyCorrect": "'In case' expressa a atitude preventiva de se proteger do frio e da chuva.",
    "whyOthersFail": "'Rather than' expressaria preferência entre coisas. 'Instead of' pediria troca. 'Therefore' expressa conclusão lógica.",
    "proTip": "'Take an umbrella in case it rains' é o exemplo de livro-texto mais famoso de 'in case'. Aqui adaptado com estilo para o Grêmio!"
  },
  "q-in-case-cinthia-hungry-late": {
    "sentenceTranslation": "Comprei queijo artesanal e frutas frescas no caminho de casa caso a Cinthia sinta fome após o seu plantão até mais tarde.",
    "whyCorrect": "'In case' expressa a ação de carinho e precaução antecipada.",
    "whyOthersFail": "'Although' expressa concessão incompatível. 'Because of' exige causa sem oração com verbo conjugado. 'Unless' inverteria a lógica.",
    "proTip": "Demonstre consideração em conversas do dia a dia: 'I did X in case you need it.'"
  },
  "q-in-contrast-nosql-sql-scaling": {
    "sentenceTranslation": "Bancos de dados relacionais legados frequentemente exigem escalabilidade vertical de hardware; em contraste, armazenamentos de documentos distribuídos escalam horizontalmente em clusters comuns.",
    "whyCorrect": "'In contrast' é o conector formal perfeito para traçar distinções técnicas marcantes entre duas arquiteturas.",
    "whyOthersFail": "'Due to' exige substantivo de causa. 'In order to' expressa finalidade com infinitivo. 'Unless' introduz condição negativa.",
    "proTip": "Em reuniões de design de sistemas: '; in contrast, ...' destaca vantagens competitivas de uma nova tecnologia sobre o legado."
  },
  "q-in-contrast-scrum-kanban-iterations": {
    "sentenceTranslation": "O Scrum organiza o desenvolvimento em sprints com caixas de tempo fixas; em contraste, o Kanban enfatiza a entrega contínua e limites rigorosos de trabalho em andamento.",
    "whyCorrect": "'In contrast' articula a comparação metodológica direta entre Scrum e Kanban.",
    "whyOthersFail": "'Because' transformaria a metodologia de um na causa do outro. 'Rather than' exigiria reestruturação comparativa. 'Nor' exige negativa.",
    "proTip": "Perfeita para entrevistas de emprego de liderança técnica: contraste frameworks ágeis usando 'in contrast' para mostrar maturidade."
  },
  "q-in-contrast-cinthia-morning-evening": {
    "sentenceTranslation": "Sinto-me com mais energia e escrevo meu código mais limpo logo cedo pela manhã; em contraste, a Cinthia é uma pessoa noturna que realiza seu trabalho mais criativo tarde da noite.",
    "whyCorrect": "'In contrast' coloca lado a lado duas rotinas opostas de forma harmoniosa.",
    "whyOthersFail": "'So that' expressa objetivo. 'Therefore' expressa dedução causal. 'In spite of' pede sintagma nominal.",
    "proTip": "Use 'in contrast' para contar com bom humor sobre como diferenças de hábitos tornam o relacionamento rico e equilibrado."
  },
  "q-in-contrast-gremio-first-second-half": {
    "sentenceTranslation": "O Grêmio sofreu com lentidão tática durante os primeiros trinta minutos; em contrapartida, sua atuação no segundo tempo foi eletrizante e implacável.",
    "whyCorrect": "'In contrast' dramatiza a virada de postura do time em campo.",
    "whyOthersFail": "'Unless' é condicional. 'Due to' exige substantivo de causa. 'Equally' indicaria que os dois tempos foram idênticos.",
    "proTip": "Ao narrar jogos ou retrospectivas de projetos, 'in contrast' ressalta a melhora nítida de desempenho."
  },
  "q-in-fact-paola-bracho-villain": {
    "sentenceTranslation": "Muitas novelas têm antagonistas memoráveis, mas Paola Bracho em 'A Usurpadora' é, de fato, a vilã mais icônica da história da televisão.",
    "whyCorrect": "'In fact' confirma e reforça o status lendário da personagem citado expressamente no seu documento.",
    "whyOthersFail": "'Instead of' exigiria substituição. 'Due to' pede causa nominal. 'Unless' impõe condição restritiva.",
    "proTip": "Frase autêntica do seu material! 'In fact' colocado entre vírgulas ('is, in fact, the most...') confere elegância ímpar à afirmação."
  },
  "q-in-fact-brazil-five-titles": {
    "sentenceTranslation": "As seleções europeias dominaram os torneios recentes, mas o Brasil é, de fato, a única seleção nacional que conquistou a Copa do Mundo da FIFA cinco vezes.",
    "whyCorrect": "'In fact' sela o dado estatístico com segurança máxima.",
    "whyOthersFail": "'Nor' exige negativa correlativa. 'Rather than' expressa preferência. 'Whereas' conecta duas orações completas.",
    "proTip": "Frase do seu material! Use 'in fact' para destacar recordes absolutos e verdades históricas inegáveis."
  },
  "q-in-fact-cloud-faster-expected": {
    "sentenceTranslation": "Os stakeholders esperavam ganhos modestos de latência após a migração; na realidade, a arquitetura de microsserviços melhorou os tempos de resposta em mais de 60%.",
    "whyCorrect": "'In fact' valida e eleva o impacto positivo da solução de TI entregue.",
    "whyOthersFail": "'Otherwise' traz alerta condicional. 'Unless' impõe condição. 'Summing up' fecharia sem enfatizar o salto de métrica.",
    "proTip": "Em relatórios de ROI e benchmarking: '; in fact, [métrica surpreendente]' impressiona qualquer diretoria."
  },
  "q-in-order-to-prevent-sql-injection": {
    "sentenceTranslation": "Os desenvolvedores devem sanitizar todos os parâmetros de consulta recebidos e usar prepared statements a fim de prevenir ataques de injeção de SQL.",
    "whyCorrect": "'In order to' é a locução de finalidade formal por excelência que antecede o verbo no infinitivo.",
    "whyOthersFail": "'So that' exigiria oração com sujeito e verbo modal ('so that they can prevent'). 'Because of' exige substantivo. 'Although' expressa concessão.",
    "proTip": "Regra mestra de concurso e certificação: 'In order to' + [verbo no infinitivo]; 'So that' + [sujeito + can/could/may + verbo]. Nunca confunda!"
  },
  "q-in-order-to-surprise-cinthia": {
    "sentenceTranslation": "Cheguei em casa trinta minutos mais cedo e acendi velas aromáticas a fim de surpreender a Cinthia no nosso jantar de aniversário.",
    "whyCorrect": "'In order to' precede o infinitivo 'surprise' com intenção deliberada.",
    "whyOthersFail": "'Instead of' indicaria que não quis surpreendê-la. 'Unless' estabelece condição restritiva. 'Due to' pede substantivo causal.",
    "proTip": "Use 'in order to' para destacar que você realizou uma série de ações com um propósito nobre e intencional."
  },
  "q-in-order-to-win-gremio-intensified": {
    "sentenceTranslation": "A fim de vencer a partida decisiva na Arena, o Renato Gaúcho intensificou os treinos táticos de transição durante a semana inteira.",
    "whyCorrect": "'In order to' abre a frase estabelecendo o objetivo estratégico que justifica a intensidade dos treinos.",
    "whyOthersFail": "'Because of' exigiria substantivo ('Because of the victory'). 'In spite of' expressaria concessão. 'Whereas' conecta duas orações completas.",
    "proTip": "Abrir uma frase em inglês com 'In order to [verbo]...' demonstra autoridade e clareza de metas!"
  },
  "q-in-short-release-status": {
    "sentenceTranslation": "Todos os testes de regressão passaram, a conformidade de segurança foi aprovada e os painéis de monitoramento estão verdes. Em resumo, a plataforma está pronta para produção.",
    "whyCorrect": "'In short' sintetiza o status com brevidade e contundência executiva.",
    "whyOthersFail": "'In contrast' exigiria oposição. 'Unless' impõe condição negativa. 'Due to' exige causa nominal.",
    "proTip": "Use 'In short' no último parágrafo de e-mails para diretores ou clientes: resume a mensagem central em uma linha."
  },
  "q-in-short-gremio-champion-performance": {
    "sentenceTranslation": "Defesa sólida, meio-campo disciplinado e finalizações cirúrgicas diante do gol. Em resumo, o Grêmio jogou como verdadeiro campeão hoje à noite.",
    "whyCorrect": "'In short' coroa o resumo esportivo dos três setores do time.",
    "whyOthersFail": "'Rather than' expressa opção comparativa. 'Nor' exige negativa. 'Even if' é condicional.",
    "proTip": "'In short' funciona como um carimbo de autoridade ao final de listas de atributos positivos."
  },
  "q-in-short-cinthia-relationship": {
    "sentenceTranslation": "Compartilhamos valores, apoiamos as ambições de carreira um do outro e rimos juntos todo santo dia. Em suma, viver com a Cinthia é pura alegria.",
    "whyCorrect": "'In short' amarra a relação harmoniosa em uma frase cheia de afeto.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' exige substantivo. 'Instead of' pede substituição.",
    "proTip": "Ao resumir um período ou momento feliz da vida, 'In short, it was amazing' fecha com chave de ouro."
  },
  "q-in-short-cloud-advantages": {
    "sentenceTranslation": "Escalabilidade elástica, cobrança conforme o uso e alta disponibilidade automatizada em zonas globais. Em resumo, a infraestrutura em nuvem revolucionou o mercado de TI.",
    "whyCorrect": "'In short' sintetiza os benefícios apresentados.",
    "whyOthersFail": "'So that' expressa finalidade. 'Whereas' conecta contraste. 'In order to' exige infinitivo.",
    "proTip": "'In short' = 'To sum up'. Excelente para apresentações e defesas de arquitetura."
  },
  "q-in-spite-of-cloud-outage-gft": {
    "sentenceTranslation": "Apesar da grave queda regional da nuvem, os engenheiros da GFT redirecionaram o tráfego com sucesso e mantiveram perda zero de dados dos clientes.",
    "whyCorrect": "'In spite of' precede o sintagma nominal indicando o obstáculo superado com brilhantismo técnico.",
    "whyOthersFail": "'Although' exigiria oração completa ('Although there was an outage'). 'Because of' atribuiria o redirecionamento como causa do desastre. 'Unless' é condicional.",
    "proTip": "Lembre-se: 'In spite of' tem exatamente 3 palavras: 'in' + 'spite' + 'of'. Tem o mesmo significado de 'despite'!"
  },
  "q-in-spite-of-exhaustion-gym": {
    "sentenceTranslation": "Apesar de me sentir exausto após um deploy de sprint desafiador, fui à academia com a Cinthia para treinar e desestressar.",
    "whyCorrect": "'In spite of' é a preposição concessiva ideal para reger verbo terminado em '-ing'.",
    "whyOthersFail": "'Even though' exigiria oração completa conjugada ('Even though I felt exhausted'). 'Rather than' expressa preferência. 'Due to' atribuiria o treino ao cansaço.",
    "proTip": "Guarde a estrutura: 'In spite of + [verbo com -ing]' ('In spite of raining', 'In spite of feeling tired'). Muito comum em provas e na conversação!"
  },
  "q-in-spite-of-heavy-snow-flight": {
    "sentenceTranslation": "Apesar da nevasca congelante e dos atrasos no aeroporto, nosso voo internacional pousou com segurança em Londres.",
    "whyCorrect": "'In spite of' antecede os substantivos climáticos com fluência nativa.",
    "whyOthersFail": "'So that' expressa meta. 'Therefore' expressa conclusão de causa. 'Nor' exige negativa anterior.",
    "proTip": "Em histórias de viagem, 'in spite of the bad weather' é uma fórmula clássica e elegante."
  },
  "q-in-spite-of-referee-mistakes-gremio": {
    "sentenceTranslation": "Apesar de várias decisões questionáveis da arbitragem, o Grêmio manteve o foco e garantiu uma vitória épica por 3 a 2 na Arena.",
    "whyCorrect": "'In spite of' rege o substantivo 'several questionable decisions'.",
    "whyOthersFail": "'Unless' impõe condição restritiva. 'Instead of' pede substituição. 'Equally' expressa paridade sem concessão.",
    "proTip": "No futebol: 'In spite of the referee's bias, we won!' Frase imbatível para torcedores apaixonados."
  },
  "q-indeed-microservices-complex": {
    "sentenceTranslation": "Microsserviços introduzem flexibilidade arquitetural significativa; de fato, gerenciar rastreamento distribuído e observabilidade exige ferramental disciplinado.",
    "whyCorrect": "'Indeed' atua como conector enfático de confirmação formal entre duas verdades técnicas.",
    "whyOthersFail": "'Unless' impõe condição negativa. 'Due to' exige substantivo de causa. 'Rather than' expressa opção comparativa.",
    "proTip": "'Indeed' é muito usado em literatura técnica e debates acadêmicos de computação para ratificar uma constatação profunda."
  },
  "q-indeed-cinthia-talented-leader": {
    "sentenceTranslation": "Seus colegas elogiaram sua visão estratégica durante a reorganização; ela é, de fato, uma das líderes mais talentosas da unidade de negócios.",
    "whyCorrect": "'Indeed' intensifica a constatação com admiração e autoridade.",
    "whyOthersFail": "'Nor' pede negativa correlativa. 'Because of' exige causa nominal. 'Instead of' pede substituição.",
    "proTip": "Em recomendações do LinkedIn e feedbacks: 'He is, indeed, an exceptional engineer' soa sofisticado e poderoso."
  },
  "q-indeed-gremio-tricolor-tradition": {
    "sentenceTranslation": "Com três títulos da Copa Libertadores e uma Copa Intercontinental, o Grêmio escreveu, de fato, alguns dos capítulos mais gloriosos do futebol sul-americano.",
    "whyCorrect": "'Indeed' sela a constatação histórica incontestável da grandeza do clube.",
    "whyOthersFail": "'Otherwise' traz ameaça. 'So that' expressa objetivo. 'Even if' é concessivo condicional.",
    "proTip": "Use 'indeed' entre vírgulas no meio do tempo verbal ('has, indeed, written...') para dar um tom épico e solene à sua fala."
  },
  "q-indeed-clean-architecture-saves-time": {
    "sentenceTranslation": "Adotar o domain-driven design pareceu lento durante as duas primeiras sprints; de fato, refatorar etapas seguintes tornou-se simples à medida que a lógica de negócios cresceu.",
    "whyCorrect": "'Indeed' confirma a promessa do DDD com fatos comprovados no código.",
    "whyOthersFail": "'Unless' é condicional. 'In spite of' exige substantivo. 'Summing up' fecharia o texto prematuramente.",
    "proTip": "Quando defender refatoração de código com o Product Owner, diga: 'It feels slower now; indeed, it will save us months later!'"
  },
  "q-instead-of-manual-qa-automated": {
    "sentenceTranslation": "Em vez de executar listas manuais de regressão antes de cada lançamento de sprint, nossa equipe implementou suítes de testes automatizados em Cypress e Jest.",
    "whyCorrect": "'Instead of' rege o gerúndio 'executing' para indicar o processo substituído.",
    "whyOthersFail": "'Due to' transformaria o checklist manual em causa da automação. 'In order to' exigiria infinitivo de propósito. 'Unless' é condicional.",
    "proTip": "Regra mestra: 'Instead of + verbo no -ing' ('Instead of doing X, we did Y'). Essencial para relatórios de modernização de TI!"
  },
  "q-instead-of-eating-out-cinthia": {
    "sentenceTranslation": "Em vez de comer fora em um restaurante barulhento na sexta-feira à noite, a Cinthia e eu cozinhamos massa caseira e aproveitamos uma noite tranquila juntos.",
    "whyCorrect": "'Instead of' rege 'eating out' marcando a alternativa descartada com afeto e bom senso.",
    "whyOthersFail": "'Because of' transformaria comer fora na causa de terem ficado em casa. 'Although' exige oração completa com verbo. 'Rather' sozinho sem than não encaixa.",
    "proTip": "Use 'Instead of [verbo com -ing]' para contar decisões do dia a dia com seu parceiro de forma muito natural."
  },
  "q-instead-of-direct-http-queues": {
    "sentenceTranslation": "Decidimos desacoplar nossos microsserviços de pedidos e faturamento usando filas de mensageria do Kafka em vez de acoplamento REST HTTP síncrono.",
    "whyCorrect": "'Instead of' conecta a escolha arquitetural recomendada sobre o acoplamento rejeitado.",
    "whyOthersFail": "'Due to' indicaria causa. 'Unless' impõe condição subordinada. 'In contrast' exigiria oração independente.",
    "proTip": "Nas decisões de arquitetura (ADRs): 'We chose X instead of Y because...' é o formato padrão da indústria de software."
  },
  "q-likewise-seniors-juniors-reviews": {
    "sentenceTranslation": "Engenheiros seniores devem submeter seu código para revisão por pares; da mesma forma, desenvolvedores juniores devem participar ativamente da revisão de PRs de arquitetura.",
    "whyCorrect": "'Likewise' estabelece reciprocidade e paridade comportamental na equipe de engenharia.",
    "whyOthersFail": "'In contrast' criaria oposição entre seniores e juniores. 'Due to' exige causa nominal. 'Unless' impõe condição restritiva.",
    "proTip": "Frase inspirada no seu material! 'Likewise' é perfeito para pregar reciprocidade em boas práticas ágeis e de liderança."
  },
  "q-likewise-cinthia-career-growth": {
    "sentenceTranslation": "Estou dedicado a expandir minhas habilidades de liderança de software na GFT; da mesma forma, a Cinthia está buscando certificações profissionais avançadas em sua área.",
    "whyCorrect": "'Likewise' liga as duas trajetórias profissionais paralelas de evolução constante.",
    "whyOthersFail": "'Rather than' expressaria exclusão comparativa. 'Nor' exige negativa anterior. 'Otherwise' traria consequência negativa.",
    "proTip": "Use 'Likewise' para demonstrar admiração mútua por metas de carreira compartilhadas no casal."
  },
  "q-likewise-tests-documentation": {
    "sentenceTranslation": "Software de alta qualidade requer suítes abrangentes de testes automatizados; igualmente, uma documentação de API clara e atualizada é vital para a adoção pelos desenvolvedores.",
    "whyCorrect": "'Likewise' conecta os dois requisitos essenciais da boa engenharia de software.",
    "whyOthersFail": "'Because of' exige substantivo causal direto. 'Unless' é condicional negativa. 'In order to' exige infinitivo.",
    "proTip": "Quer concordar com alguém em uma conversa informal? Responda simplesmente: 'Likewise!' (O mesmo para você / Igualmente!)."
  },
  "q-meanwhile-frontend-backend-parallel": {
    "sentenceTranslation": "Os engenheiros de backend estavam modelando os esquemas do banco MongoDB e os endpoints de autenticação; enquanto isso, a equipe de frontend construía protótipos responsivos no Figma.",
    "whyCorrect": "'Meanwhile' é o advérbio por excelência para conectar duas frentes de trabalho ocorrendo no mesmo intervalo de tempo.",
    "whyOthersFail": "'Afterwards' indicaria que o frontend esperou o backend terminar. 'Due to' pede causa. 'Unless' impõe condição.",
    "proTip": "Frase do seu documento! No Daily Standup: 'I was testing feature X; meanwhile, colleague Y refactored the pipeline.' Demonstra sincronia de squad!"
  },
  "q-meanwhile-gremio-renato-press": {
    "sentenceTranslation": "O elenco do Grêmio realizava treinos táticos rigorosos no CT; enquanto isso, o Renato Gaúcho atendia a imprensa em uma concorrida entrevista coletiva.",
    "whyCorrect": "'Meanwhile' situa os dois acontecimentos esportivos no mesmo recorte temporal.",
    "whyOthersFail": "'Rather than' expressa opção. 'Nor' exige negativa. 'Therefore' expressa causa e efeito.",
    "proTip": "Inspirada no seu material! 'Meanwhile' dá um ar cinematográfico à narrativa de eventos esportivos e de projetos."
  },
  "q-mostly-remote-work-consultancy": {
    "sentenceTranslation": "Nossa equipe de consultoria opera na maior parte remotamente, visitando o escritório corporativo do cliente apenas uma vez por mês para reuniões executivas de diretoria.",
    "whyCorrect": "'Mostly' qualifica o advérbio 'remotely', denotando preponderância quase total.",
    "whyOthersFail": "'At all' é usado para ênfase negativa. 'Unless' impõe condição. 'Instead of' pede termo alternativo com substantivo.",
    "proTip": "'Mostly' = 'mainly' ou 'for the most part'. Útil para descrever rotinas híbridas e hábitos habituais."
  },
  "q-mostly-junior-team-support": {
    "sentenceTranslation": "A nova squad de microsserviços é composta em sua maioria por desenvolvedores juniores ambiciosos, ansiosos para aprender práticas de nuvem e DevOps.",
    "whyCorrect": "'Mostly' expressa a composição majoritária da squad com clareza.",
    "whyOthersFail": "'Due to' pede causa nominal. 'Nor' exige negação correlativa. 'Beforehand' indica tempo anterior.",
    "proTip": "'Composed mostly of...' (composto principalmente de...) é uma estrutura muito comum em apresentações de times e squads."
  },
  "q-mostly-cinthia-travel-preferences": {
    "sentenceTranslation": "Ao escolher destinos de férias, a Cinthia e eu buscamos principalmente cidades litorâneas charmosas com trilhas panorâmicas e frutos do mar frescos.",
    "whyCorrect": "'Mostly' indica o foco principal das preferências do casal.",
    "whyOthersFail": "'Rather than' exigiria outro elemento em contraste direto. 'Because of' pede causa. 'Unless' impõe condição.",
    "proTip": "Use 'look mostly for' para falar dos seus gostos e prioridades de forma direta e fluente."
  },
  "q-mostly-cloud-infrastructure-spend": {
    "sentenceTranslation": "Nosso orçamento mensal de infraestrutura na nuvem é gasto em sua maior parte em clusters de banco de dados MongoDB multirregião e corretores de streaming Kafka.",
    "whyCorrect": "'Mostly' qualifica a distribuição orçamentária demonstrando a prioridade dos gastos técnicos.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Even though' exige oração subordinada. 'Summing up' é conector de encerramento.",
    "proTip": "Em reuniões de orçamento com executivos: 'Our budget goes mostly to X' comunica onde está a prioridade financeira."
  },
  "q-mostly-gremio-fans-arena": {
    "sentenceTranslation": "Durante o clássico em Porto Alegre, a arquibancada sul foi ocupada em sua maioria por apaixonados torcedores do Grêmio cantando os hinos do clube.",
    "whyCorrect": "'Mostly' qualifica o particípio 'occupied' marcando a presença maciça da torcida.",
    "whyOthersFail": "'Nor' exige negativa anterior. 'In order to' exige infinitivo de objetivo. 'Rather than' expressa opção comparativa.",
    "proTip": "'Mostly' é um advérbio versátil que traz precisão e naturalidade tanto em temas profissionais quanto pessoais."
  },
  "q-nevertheless-legacy-code-refactored": {
    "sentenceTranslation": "A base de código legada era notoriamente não documentada e frágil; mesmo assim, a squad refatorou o motor central de cálculos sem causar nenhum bug de regressão.",
    "whyCorrect": "'Nevertheless' é o conector formal de contraste mais prestigiado para relatar conquistas difíceis em projetos complexos.",
    "whyOthersFail": "'Due to' transformaria a fragilidade em causa do sucesso. 'Unless' impõe condição restritiva. 'In order to' exige infinitivo.",
    "proTip": "'Nevertheless' = 'Nonetheless'. Use após ponto e vírgula seguido de vírgula ('; nevertheless, ') para dar peso acadêmico e corporativo ao seu texto."
  },
  "q-nevertheless-cinthia-tired-walk": {
    "sentenceTranslation": "A Cinthia estava exausta após preparar o relatório anual de estratégia; mesmo assim, calçou os tênis de corrida e me acompanhou na nossa caminhada noturna no parque.",
    "whyCorrect": "'Nevertheless' articula o contraste entre o esgotamento do trabalho e a dedicação ao relacionamento.",
    "whyOthersFail": "'Rather than' expressa escolha excludente. 'Nor' exige negativa correlativa. 'Because of' exige causa nominal.",
    "proTip": "Use 'nevertheless' para celebrar a força de vontade de pessoas queridas diante do cansaço."
  },
  "q-nevertheless-gremio-red-card-held": {
    "sentenceTranslation": "O Grêmio teve seu zagueiro titular expulso aos 15 minutos do segundo tempo; mesmo assim, os dez jogadores restantes defenderam heroicamente e garantiram a vitória por 1 a 0.",
    "whyCorrect": "'Nevertheless' coroa a superação tática diante da expulsão adversa.",
    "whyOthersFail": "'Therefore' indicaria que a expulsão causa vitórias. 'So that' expressaria propósito. 'Equally' expressa equivalência sem adversidade.",
    "proTip": "Em crônicas de vitórias épicas com expulsão no futebol, 'nevertheless' é a palavra mais potente para descrever o triunfo contra as adversidades."
  },
  "q-nevertheless-cloud-costs-investment": {
    "sentenceTranslation": "As despesas iniciais de migração de infraestrutura para a nuvem superaram nossa previsão trimestral; não obstante, a escalabilidade a longo prazo e a elasticidade operacional justificaram o investimento.",
    "whyCorrect": "'Nevertheless' pondera o custo inicial com o retorno de longo prazo com elegância corporativa.",
    "whyOthersFail": "'Unless' impõe condição. 'Instead of' pede troca substantiva. 'Because of' pede causa nominal.",
    "proTip": "Apresentações para CFOs e diretores financeiros exigem 'nevertheless' para demonstrar equilíbrio e maturidade estratégica."
  },
  "q-no-longer-legacy-soap-apis": {
    "sentenceTranslation": "Nossa equipe de engenharia migrou todos os fluxos de pagamento para arquiteturas orientadas a eventos, de modo que não mantemos mais os endpoints SOAP legados.",
    "whyCorrect": "'No longer' se posiciona entre o sujeito ('we') e o verbo principal ('maintain'), marcando o encerramento da atividade.",
    "whyOthersFail": "'At all' se posicionaria no fim da frase e requer negação 'not'. 'Unless' impõe condição subordinada. 'Rather than' expressa preferência.",
    "proTip": "Frase inspirada no seu material! 'We no longer support/maintain X' é a declaração padrão de descontinuação (deprecation) em tecnologia."
  },
  "q-no-longer-gft-consultant-contract": {
    "sentenceTranslation": "Ele já não trabalha como prestador de serviços na consultoria porque aceitou um cargo de liderança em engenharia em uma fintech internacional.",
    "whyCorrect": "'No longer' expressa com respeito e clareza a conclusão de um ciclo profissional.",
    "whyOthersFail": "'Due to' exige substantivo de causa. 'Instead of' exige gerúndio ou substantivo. 'Nor' exige correlação negativa com neither.",
    "proTip": "Frase autêntica do seu material: 'He no longer works at the consultancy'. Estrutura limpa, direta e profissional."
  },
  "q-no-longer-commute-remote": {
    "sentenceTranslation": "Desde que mudei para uma função 100% remota na GFT, não perco mais duas horas todos os dias preso no trânsito da rodovia.",
    "whyCorrect": "'No longer' expressa alívio e qualidade de vida conquistada com o trabalho remoto.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' exige causa nominal. 'Whereas' conecta contraste entre duas orações.",
    "proTip": "Compartilhe conquistas de qualidade de vida em inglês: 'I no longer waste time commuting; now I have breakfast with Cinthia!'"
  },
  "q-nonetheless-complex-specs-delivered": {
    "sentenceTranslation": "As especificações de conformidade regulatória do cliente eram extraordinariamente complicadas; ainda assim, a equipe de engenharia entregou a solução dentro da sprint designada.",
    "whyCorrect": "'Nonetheless' funciona como sinônimo refinado de 'nevertheless', conectando a alta dificuldade ao cumprimento do prazo.",
    "whyOthersFail": "'Because of' exige causa nominal. 'Unless' impõe condição restritiva. 'In order to' exige infinitivo de finalidade.",
    "proTip": "'Nonetheless' e 'Nevertheless' são 100% intercambiáveis. Ambos transmitem alto grau de formalidade e sofisticação na escrita!"
  },
  "q-nonetheless-tired-cinthia-dinner": {
    "sentenceTranslation": "A Cinthia passou dez horas facilitando workshops para clientes hoje; ainda assim, ela tinha um sorriso radiante no rosto quando nos encontramos para jantar.",
    "whyCorrect": "'Nonetheless' valoriza a energia positiva e o carinho mútuo sobre a rotina exaustiva.",
    "whyOthersFail": "'Rather than' expressa exclusão comparativa. 'Nor' exige negativa correlativa. 'Due to' atribuiria o sorriso ao cansaço.",
    "proTip": "Use 'nonetheless' para valorizar o companheirismo do parceiro que traz leveza ao fim do dia."
  },
  "q-nonetheless-gremio-injuries-competed": {
    "sentenceTranslation": "O Grêmio teve três meio-campistas titulares afastados por lesões musculares; ainda assim, o elenco demonstrou imensa raça e controlou o ritmo do meio-campo.",
    "whyCorrect": "'Nonetheless' dramatiza a superação diante do departamento médico lotado.",
    "whyOthersFail": "'Therefore' deduziria que lesões causam controle de jogo. 'So that' expressa objetivo. 'Equally' expressa equivalência sem concessão.",
    "proTip": "Em análises esportivas: 'Injuries plagued the team; nonetheless, they persevered.' Linguagem digna dos melhores comentaristas da BBC!"
  },
  "q-nonetheless-high-licensing-costs": {
    "sentenceTranslation": "As licenças de ferramentas de banco de dados corporativo eram inegavelmente caras; ainda assim, o SLA de suporte 24/7 para missão crítica deu total tranquilidade à diretoria.",
    "whyCorrect": "'Nonetheless' equilibra investimento financeiro e mitigação de riscos com maturidade executiva.",
    "whyOthersFail": "'Unless' é condicional. 'Instead of' pede substituição direta. 'In spite of' exige substantivo sem oração independente.",
    "proTip": "Perfeito para defesas de compras de softwares e contratos de nuvem em comitês executivos."
  },
  "q-nor-neither-coffee-tea": {
    "sentenceTranslation": "A: Você gostaria de um café expresso ou de uma xícara de chá inglês? B: Na verdade, não bebo nem café nem chá; prefiro bastante água com gás gelada.",
    "whyCorrect": "'Neither ... nor' é a estrutura correlativa canônica e inegociável da língua inglesa para ligar duas negações.",
    "whyOthersFail": "'Or' seria usado com 'either' ('either coffee or tea'). 'And' violaria o paralelismo negativo. 'But' expressaria oposição sem correlação.",
    "proTip": "Regra sagrada de ouro: 'Neither ... nor' (nem um, nem outro); 'Either ... or' (ou um, ou outro). Nunca misture 'neither' com 'or'!"
  },
  "q-nor-neither-java-spring": {
    "sentenceTranslation": "Para esta função serverless leve, nossos arquitetos de nuvem não querem nem runtimes pesados de Java nem configurações complexas de Spring Boot.",
    "whyCorrect": "'Nor' fecha a correlação negativa iniciada por 'neither' com perfeição sintática.",
    "whyOthersFail": "'Due to' exige causa nominal. 'Unless' impõe condição restritiva. 'Rather than' quebra a estrutura correlativa de 'neither'.",
    "proTip": "Frase inspirada no seu material! Em debates de microsserviços: 'We want neither monolithic complexity nor unmanaged microservices chaos.'"
  },
  "q-nor-did-the-server-restart": {
    "sentenceTranslation": "O balanceador de carga primário não redirecionou o tráfego durante o simulado de failover, e tampouco o script de recuperação automatizado inicializou os contêineres de backup.",
    "whyCorrect": "'Nor' iniciando oração independente exige inversão: 'nor + verbo auxiliar + sujeito' ('nor did the script launch').",
    "whyOthersFail": "'Because' transformaria uma falha na causa da outra. 'So that' expressaria finalidade. 'Whereas' conecta contraste entre estados opostos.",
    "proTip": "Uso avançado de inglês: Quando 'Nor' inicia uma oração, ele inverte a ordem: 'nor did he...', 'nor could we...'. Soa extremamente culto!"
  },
  "q-on-the-other-hand-monolith-vs-microservices": {
    "sentenceTranslation": "Arquiteturas monolíticas simplificam a depuração local e as esteiras de deploy; por outro lado, microsserviços proporcionam escalabilidade independente sem precedentes para squads grandes.",
    "whyCorrect": "'On the other hand' é o conector por excelência para ponderar dois pontos de vista legítimos em decisões de engenharia.",
    "whyOthersFail": "'Due to' pede causa nominal. 'Unless' impõe condição. 'In order to' exige infinitivo de propósito.",
    "proTip": "Pares conceituais perfeitos: 'On the one hand, [vantagem A]... On the other hand, [vantagem B]...'. Um clássico dos debates de TI!"
  },
  "q-on-the-other-hand-cinthia-apartment-options": {
    "sentenceTranslation": "O loft no centro fica mais perto dos nossos restaurantes favoritos e eventos culturais; por outro lado, a casa no subúrbio oferece um jardim tranquilo e muito mais espaço para a Cinthia e para mim.",
    "whyCorrect": "'On the other hand' contrapõe as duas escolhas de moradia de forma equilibrada e madura.",
    "whyOthersFail": "'Rather than' exigiria exclusão direta. 'Nor' exige negação. 'Because of' exige causa nominal.",
    "proTip": "Ao pesar decisões de vida com quem você ama, 'on the other hand' demonstra empatia e análise ponderada."
  },
  "q-on-the-other-hand-gremio-veteran-youth": {
    "sentenceTranslation": "Veteranos experientes trazem compostura e inteligência tática durante finais de alta pressão; por outro lado, jovens revelações da base injetam vigor incansável e velocidade destemida.",
    "whyCorrect": "'On the other hand' equilibra as duas forças complementares do elenco esportivo.",
    "whyOthersFail": "'Therefore' deduziria consequência lógica. 'So that' expressa objetivo. 'Equally' expressaria que os dois são idênticos em estilo.",
    "proTip": "Use 'on the other hand' em análises esportivas para demonstrar como estilos diferentes completam um elenco campeão."
  },
  "q-on-the-whole-agile-transformation": {
    "sentenceTranslation": "Embora tenha havido atritos iniciais de comunicação durante as retrospectivas de sprint, de modo geral, nossa transformação ágil melhorou dramaticamente o moral da equipe e a velocidade de entrega.",
    "whyCorrect": "'On the whole' faz o balanço macro consolidado considerando prós e contras.",
    "whyOthersFail": "'In case' expressa precaução condicional. 'Unless' impõe condição restritiva. 'Instead of' pede termo de substituição.",
    "proTip": "'On the whole' = 'Generally speaking' ou 'All in all'. Perfeito para concluir relatórios gerenciais e avaliações anuais de desempenho."
  },
  "q-on-the-whole-cinthia-vacation-italy": {
    "sentenceTranslation": "Apesar de dois pequenos atrasos de trem entre Milão e Veneza, no geral, nossas férias românticas na Itália foram uma das experiências mais felizes que a Cinthia e eu já compartilhamos.",
    "whyCorrect": "'On the whole' sintetiza o saldo positivo da experiência de férias.",
    "whyOthersFail": "'Due to' atribuiria a felicidade aos atrasos do trem. 'Rather than' expressa preferência. 'Nor' exige negativa anterior.",
    "proTip": "Conclua histórias de viagens e passeios com 'on the whole' para transmitir uma lembrança afetiva duradoura."
  },
  "q-on-the-whole-gremio-season-review": {
    "sentenceTranslation": "Embora o Grêmio tenha ficado por pouco sem o título da final da copa nacional, no cômputo geral, a evolução tática sob o comando de Renato Gaúcho resgatou nosso orgulho campeão.",
    "whyCorrect": "'On the whole' faz o fechamento positivo e apaixonado da temporada futebolística.",
    "whyOthersFail": "'Because of' pede causa nominal direta. 'Otherwise' alerta para ameaça. 'So that' expressa objetivo.",
    "proTip": "Use 'on the whole' para fazer análises de maturidade e evolução esportiva em mesas redondas com amigos."
  },
  "q-on-the-whole-mongodb-cluster-health": {
    "sentenceTranslation": "Pequenos picos de latência de consulta ocorreram durante os momentos de tráfego intenso da Black Friday, mas no geral, o cluster de réplicas do MongoDB manteve 99,99% de disponibilidade durante todo o evento.",
    "whyCorrect": "'On the whole' coroa o relatório de observabilidade com o atestado de estabilidade global.",
    "whyOthersFail": "'Unless' é condicional. 'In order to' exige infinitivo. 'Rather than' pede escolha comparativa.",
    "proTip": "Em relatórios de SLA pós-Black Friday, 'on the whole' é a locução padrão para tranquilizar executivos."
  },
  "q-only-if-production-deploy-passed-tests": {
    "sentenceTranslation": "O engenheiro líder de DevOps disparará a esteira de deploy em produção apenas se a suíte de varredura de segurança reportar zero vulnerabilidades críticas.",
    "whyCorrect": "'Only if' estabelece a restrição categórica e de conformidade que autoriza o deploy.",
    "whyOthersFail": "'Although' expressaria concessão. 'Because of' exige substantivo causal sem oração com verbo. 'Rather than' expressa preferência.",
    "proTip": "Diferença do Professor: 'If' = se (aberto a possibilidades). 'Only if' = apenas se (condição obrigatória, exclusiva e rigorosa)."
  },
  "q-only-if-cinthia-goes-party": {
    "sentenceTranslation": "Meus colegas me convidaram para o coquetel da consultoria de tecnologia no terraço, mas eu disse a eles que só comparecerei se a Cinthia puder ir comigo.",
    "whyCorrect": "'Only if' estabelece a condição afetiva exclusiva e carinhosa inspirada diretamente no seu material.",
    "whyOthersFail": "'Unless' significaria 'a não ser que ela vá' (inversão da lógica). 'Due to' pede substantivo causal. 'So that' expressa meta.",
    "proTip": "Frase autêntica do seu material: 'I'm going to the party, only if Cinthia goes too.' Demonstra lealdade e carinho pelo seu par!"
  },
  "q-or-commit-changes-lose-work": {
    "sentenceTranslation": "Certifique-se de enviar suas branches locais do Git para o GitHub antes de sair do escritório, ou você corre o risco de perder seu trabalho não salvo se sua máquina reiniciar.",
    "whyCorrect": "'Or' atua como conjunção de aviso e alternativa (equivalente a 'or else').",
    "whyOthersFail": "'And' ignoraria o risco adverso. 'Because' transformaria o risco na causa de enviar. 'So that' expressaria que queríamos perder o trabalho.",
    "proTip": "No terminal: 'Commit your changes or stash them before pulling master.' Regra de sobrevivência de todo desenvolvedor!"
  },
  "q-or-tea-coffee-cinthia-morning": {
    "sentenceTranslation": "Pela manhã, a Cinthia geralmente pergunta: 'Você prefere café coado feito na hora ou uma xícara quente de chá verde?'",
    "whyCorrect": "'Or' é a conjunção de alternância natural para escolhas diretas.",
    "whyOthersFail": "'Nor' exige negação correlativa prévia com neither. 'Unless' impõe condição restritiva. 'Due to' pede causa nominal.",
    "proTip": "'Or' é uma das conjunções mais simples e vitais da língua inglesa (FANBOYS: For, And, Nor, But, Or, Yet, So)."
  },
  "q-or-scrum-kanban-choice": {
    "sentenceTranslation": "Uma equipe de engenharia de software pode adotar sprints com caixas de tempo com Scrum, ou pode optar pelo gerenciamento de fluxo contínuo com Kanban.",
    "whyCorrect": "'Or' liga as duas alternativas metodológicas com clareza.",
    "whyOthersFail": "'Instead of' exigiria gerúndio e reestruturação. 'Because of' pede causa. 'In spite of' expressa concessão.",
    "proTip": "Em consultorias ágeis como a GFT: 'We tailor the process to your team: Scrum or Kanban based on workflow needs.'"
  },
  "q-or-win-draw-gremio-qualification": {
    "sentenceTranslation": "Para garantir uma vaga na fase mata-mata da Copa Libertadores, o Grêmio deve vencer a partida de hoje à noite ou garantir pelo menos um empate com gols fora de casa.",
    "whyCorrect": "'Or' conecta as duas possibilidades de resultado positivo na tabela.",
    "whyOthersFail": "'Rather than' expressaria preferência excludente. 'Nor' exige negação. 'Due to' pede causa nominal.",
    "proTip": "Toda rodada final de torneio continental se resume a 'Win or draw': use 'or' para expressar opções matemáticas!"
  },
  "q-or-upgrade-server-crash": {
    "sentenceTranslation": "Devemos aumentar a escala do nosso cluster de banco de dados MongoDB antes do início da liquidação relâmpago, ou nosso checkout de pagamentos cairá sob a carga repentina.",
    "whyCorrect": "'Or' introduz a consequência desastrosa de não realizar a ação preventiva.",
    "whyOthersFail": "'So that' expressaria que queríamos que o sistema caísse. 'Although' expressa concessão. 'Therefore' deduziria consequência lógica já consumada.",
    "proTip": "'Do X or Y will happen' é a estrutura padrão de alertas críticos de engenharia de confiabilidade (SRE)."
  },
  "q-otherwise-airplane-call-attendant": {
    "sentenceTranslation": "Primeiro, chamarei educadamente a comissária de bordo; caso contrário, ligarei para o 911 e deixarei que eles resolvam com o passageiro indisciplinado!",
    "whyCorrect": "'Otherwise' é o conector de advertência e alternativa condicional por excelência.",
    "whyOthersFail": "'Due to' exige substantivo de causa. 'In order to' exige infinitivo de propósito. 'Unless' impõe oração condicional subordinada.",
    "proTip": "Piada do avião clássica do seu caderno de anotações! 'Otherwise' alerta para o plano B com tom bem-humorado."
  },
  "q-otherwise-renew-ssl-certs": {
    "sentenceTranslation": "Nossa equipe de infraestrutura deve renovar os certificados SSL que estão vencendo hoje; caso contrário, os navegadores web sinalizarão nosso portal bancário como inseguro.",
    "whyCorrect": "'Otherwise' antecedido de ponto e vírgula introduz a consequência adversa inevitável.",
    "whyOthersFail": "'Because of' exige substantivo de causa. 'Instead of' exige gerúndio de substituição. 'Rather than' expressa opção.",
    "proTip": "Use '; otherwise, ' para formalizar alertas críticos em chamados de infraestrutura de TI."
  },
  "q-particularly-nosql-mongodb-aggregations": {
    "sentenceTranslation": "Gosto de planejar soluções escaláveis de banco de dados, particularmente ao construir pipelines complexos de agregação no MongoDB.",
    "whyCorrect": "'Particularly' afunila o foco para a atividade mais estimulante e gratificante.",
    "whyOthersFail": "'Unless' é condicional negativa. 'Instead of' pediria substituição. 'Due to' pede causa nominal.",
    "proTip": "'Particularly' = 'especially'. Excelente para destacar especialidades no seu currículo e perfil técnico!"
  },
  "q-particularly-gremio-derby-passion": {
    "sentenceTranslation": "Torcedores de futebol apaixonados no Rio Grande do Sul vivem para os clássicos, particularmente a intensa rivalidade entre Grêmio e Internacional.",
    "whyCorrect": "'Particularly' especifica o clássico mais emblemático com ênfase apaixonada.",
    "whyOthersFail": "'Rather than' expressaria exclusão comparativa. 'Nor' exige negação correlativa. 'Therefore' expressa dedução.",
    "proTip": "Ao explicar a cultura do futebol do Sul do Brasil para estrangeiros, use 'particularly the Gre-Nal derby'!"
  },
  "q-particularly-cinthia-culinary-skills": {
    "sentenceTranslation": "A Cinthia é uma cozinheira talentosa, particularmente renomada entre nossos amigos por seus risotos caseiros autênticos e massas frescas.",
    "whyCorrect": "'Particularly' qualifica o adjetivo 'renowned' com afeto e orgulho.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' pede causa nominal. 'Summing up' fecharia prematuramente.",
    "proTip": "Elogie talentos de quem você admira: 'She is particularly skilled at X.' Soa fluente e carinhoso."
  },
  "q-particularly-microservices-observability": {
    "sentenceTranslation": "Arquiteturas distribuídas requerem ferramental robusto, particularmente logs centralizados e rastreamento distribuído para solucionar gargalos de latência.",
    "whyCorrect": "'Particularly' introduz os dois componentes de observabilidade de maior destaque técnico.",
    "whyOthersFail": "'So that' expressa finalidade com oração subordinada. 'In contrast' opõe dois lados. 'Unless' impõe condição restritiva.",
    "proTip": "Em reuniões de engenharia: 'We need good tools, particularly tool X.' Direto ao ponto!"
  },
  "q-rather-than-play-soccer-hide-seek": {
    "sentenceTranslation": "Quando eu era mais jovem em Porto Alegre, preferia jogar futebol em vez de esconde-esconde com as crianças da vizinhança.",
    "whyCorrect": "'Rather than' é a locução de preferência comparativa natural inspirada no seu material original.",
    "whyOthersFail": "'Instead' sozinho sem of estaria incompleto. 'Due to' exige causa nominal. 'Unless' impõe condição restritiva.",
    "proTip": "Frase autêntica do seu material: 'When I was younger, I preferred to play soccer rather than hide and seek.' Pura recordação de infância!"
  },
  "q-rather-than-cleaning-office-kitchen": {
    "sentenceTranslation": "Sexta-feira é meu dia favorito para a faxina completa da nossa casa; prefiro sempre começar pelo escritório em vez da cozinha.",
    "whyCorrect": "'Rather than' articula a preferência prática registrada diretamente no seu documento.",
    "whyOthersFail": "'Because of' transformaria a cozinha em causa do escritório. 'Nor' exige negativa. 'Therefore' expressa dedução.",
    "proTip": "Frase do seu material: 'Friday is a day that I like cleaning at home. I prefer to start in the office rather than the kitchen.' Muito autêntica!"
  },
  "q-rather-than-coffee-tea-preference": {
    "sentenceTranslation": "Em tardes quentes e ensolaradas, prefiro tomar chá gelado fresco em vez de café quente, embora aprecie ambas as bebidas.",
    "whyCorrect": "'Rather than' conecta a opção favorita à alternativa preterida.",
    "whyOthersFail": "'So that' expressa meta. 'In order to' exige infinitivo. 'Unless' impõe condição.",
    "proTip": "Frase do seu material: 'I prefer coffee rather than tea.' Pratique com 'I prefer X rather than Y' no dia a dia!"
  },
  "q-rather-than-async-queues-sync-coupling": {
    "sentenceTranslation": "Nossos arquitetos decidiram implementar filas assíncronas do Kafka em vez de acoplamento REST síncrono rígido entre microsserviços.",
    "whyCorrect": "'Rather than' expressa a escolha técnica refinada entre duas abordagens de design de sistemas.",
    "whyOthersFail": "'Due to' pede causa nominal. 'Unless' é condicional. 'In spite of' expressa concessão.",
    "proTip": "Em documentações de decisões de arquitetura (ADR): 'We chose pattern A rather than pattern B because...' é a linguagem dos grandes especialistas."
  },
  "q-since-cinthia-known-2024": {
    "sentenceTranslation": "Minha vida se tornou muito mais alegre e equilibrada desde que conheci a Cinthia em 2024.",
    "whyCorrect": "'Since' conecta a linha do tempo afetiva com perfeição gramatical.",
    "whyOthersFail": "'Although' expressaria concessão incompatível com a felicidade. 'Unless' impõe condição negativa. 'Instead of' pede substituição.",
    "proTip": "Frase autêntica do seu material: 'I have known Cinthia since 2024.' O present perfect com 'since' é a fórmula clássica para marcar o início de algo que continua até hoje!"
  },
  "q-since-gft-working-2022": {
    "sentenceTranslation": "Expandir significativamente minha expertise em consultoria internacional desde que comecei a trabalhar na GFT em 2022.",
    "whyCorrect": "'Since' rege a cláusula com present perfect continuous ('have been working').",
    "whyOthersFail": "'Due to' exigiria substantivo direto sem verbo ('due to my job at GFT'). 'Nor' exige negação. 'Rather than' expressa preferência.",
    "proTip": "Frase autêntica do seu material: 'I have been working at GFT since 2022.' Em entrevistas de emprego: 'I have been doing X since [ano]' demonstra solidez e estabilidade!"
  },
  "q-since-daily-canceled-slack": {
    "sentenceTranslation": "Já que o Scrum Master estava facilitando uma escalada executiva urgente, a Daily Standup da manhã foi realizada de forma assíncrona no Slack.",
    "whyCorrect": "'Since' no início da frase expressa a causa conhecida e aceita por todos da squad.",
    "whyOthersFail": "'Because of' exigiria substantivo sem verbo ('Because of the escalation'). 'In spite of' expressaria concessão. 'Unless' impõe condição.",
    "proTip": "Dica de ouro do Professor: 'Since' tem dois significados vitais no inglês: 1) Temporal ('desde 2024'); 2) Causal ('já que / visto que'). Ambos são indispensáveis!"
  },
  "q-so-not-dev-anymore": {
    "sentenceTranslation": "Na verdade, não estou trabalhando como desenvolvedor de software 'mão na massa' no momento, então não programo em Python ou Java no dia a dia.",
    "whyCorrect": "'So' antecedido de vírgula expressa a consequência lógica e natural na fala do dia a dia.",
    "whyOthersFail": "'Although' expressaria concessão. 'Because of' exige substantivo direto sem verbo. 'Unless' impõe condição.",
    "proTip": "Frase autêntica do seu material: 'Actually, I'm not working as a software developer, so I don't code anymore.' Essencial para explicar transições de carreira!"
  },
  "q-so-messi-joke": {
    "sentenceTranslation": "O Leo Messi driblou defensores e ganhou oito troféus da Bola de Ouro, por isso é impossível não considerá-lo um dos maiores atletas da história.",
    "whyCorrect": "'So' fecha a argumentação esportiva inspirada nas tiradas sobre futebol do seu caderno.",
    "whyOthersFail": "'Instead of' pede termo alternativo. 'Nor' exige negação. 'Due to' exige substantivo de causa.",
    "proTip": "Em conversas informais e discussões de futebol, 'so' é a ponte mais dinâmica e fluida para cravar uma opinião."
  },
  "q-so-gremio-champion-celebration": {
    "sentenceTranslation": "O Grêmio conquistou o troféu de campeão com uma falta espetacular aos 45 do segundo tempo, por isso a cidade inteira de Porto Alegre comemorou até o amanhecer.",
    "whyCorrect": "'So' expressa o resultado triunfal imediato e a comemoração coletiva.",
    "whyOthersFail": "'Therefore' seria excessivamente formal para a fala coloquial esportiva. 'In order to' exige infinitivo. 'Unless' é condicional.",
    "proTip": "'So' faz parte do FANBOYS (For, And, Nor, But, Or, Yet, So). Quando unir duas orações completas, coloque vírgula antes!"
  },
  "q-so-that-ci-cd-automate-fast": {
    "sentenceTranslation": "Configuramos esteiras abrangentes de testes automatizados no Jenkins e GitHub Actions de modo que os desenvolvedores possam fazer merge de pull requests com alta confiança.",
    "whyCorrect": "'So that' é a conjunção subordinativa de propósito que rege a oração com 'can / could / may'.",
    "whyOthersFail": "'In order to' exigiria infinitivo direto ('in order to merge') sem o sujeito 'developers can'. 'Because of' exige substantivo. 'Unless' é condicional negativa.",
    "proTip": "A regra de ouro da gramática de TI: 'In order to + verbo infinitivo' vs 'So that + sujeito + can/could + verbo'. Decore essa diferença!"
  },
  "q-so-that-cinthia-relax-weekend": {
    "sentenceTranslation": "Concluí todas as tarefas domésticas e o preparo das refeições na sexta-feira à noite para que a Cinthia e eu pudéssemos desfrutar de um fim de semana totalmente tranquilo e relaxante.",
    "whyCorrect": "'So that' conecta a ação prévia ao propósito no passado ('could enjoy').",
    "whyOthersFail": "'Instead of' pede substituição. 'Rather than' expressa preferência. 'Due to' exige causa nominal.",
    "proTip": "No passado, a estrutura clássica é: '...so that we could [verbo]'. Demonstra planejamento e consideração!"
  },
  "q-so-that-mongodb-shard-scale": {
    "sentenceTranslation": "Os administradores de banco de dados configuraram chaves de partição (shard keys) em múltiplas zonas geográficas para que nosso cluster MongoDB pudesse processar milhões de consultas simultâneas.",
    "whyCorrect": "'So that' introduz o propósito arquitetural de alta capacidade com 'could handle'.",
    "whyOthersFail": "'Although' expressa concessão. 'Nor' exige negativa anterior. 'In contrast' pede comparação oposta.",
    "proTip": "Em defesas de arquitetura de software: 'We designed X so that the system could scale to Y.' Fórmula infalível!"
  },
  "q-such-a-complex-architecture": {
    "sentenceTranslation": "Projetar um motor central financeiro com failover sem tempo de inatividade é uma tarefa arquitetural tão desafiadora que apenas engenheiros seniores são escalados para ela.",
    "whyCorrect": "'Such a + adjetivo + substantivo + that' expressa intensidade ligada a uma consequência.",
    "whyOthersFail": "'So' exigiria apenas o adjetivo sem o artigo e substantivo ('is so challenging that'). 'Rather' expressa preferência. 'Due' pede preposição to.",
    "proTip": "Dica clássica de gramática: 'So + adjetivo' ('so challenging') vs 'Such a + adjetivo + substantivo' ('such a challenging task'). Nunca erre isso!"
  },
  "q-such-a-passionate-derby-gremio": {
    "sentenceTranslation": "A partida Gre-Nal na Arena do Grêmio gera uma atmosfera emocional tão intensa que analistas de futebol no mundo inteiro elogiam sua rivalidade singular.",
    "whyCorrect": "'Such an' antecede perfeitamente o substantivo modificado por adjetivo com som de vogal ('intense').",
    "whyOthersFail": "'Unless' impõe condição negativa. 'Instead' pede of. 'Because' exigiria oração causal.",
    "proTip": "Ao falar do clássico gaúcho em inglês: 'It was such an incredible game!' transmite toda a vibração do torcedor."
  },
  "q-such-a-wonderful-partner-cinthia": {
    "sentenceTranslation": "A Cinthia é uma companheira tão inspiradora, acolhedora e generosa que cada dia juntos parece uma bênção renovadora.",
    "whyCorrect": "'Such an' antecede a lista de adjetivos e o substantivo 'partner' com carinho sincero.",
    "whyOthersFail": "'Nor' exige negação correlativa. 'Rather than' expressa opção comparativa. 'Due to' exige causa nominal.",
    "proTip": "Elogie com grandeza em inglês: 'You are such a wonderful person!' (Você é uma pessoa tão maravilhosa!)."
  },
  "q-such-great-mentorship-gft": {
    "sentenceTranslation": "Os consultores seniores da GFT fornecem uma orientação tão valiosa aos desenvolvedores juniores que as habilidades técnicas se aceleram em questão de meses.",
    "whyCorrect": "'Such + adjetivo + substantivo incontável' dispensa o artigo 'a/an', funcionando com precisão formal.",
    "whyOthersFail": "'So' não pode anteceder diretamente 'adjetivo + substantivo'. 'Unless' é condicional. 'In spite of' expressa concessão.",
    "proTip": "Atenção: Com substantivos plurais ou incontáveis ('guidance', 'advice', 'help'), use 'such + substantivo' (sem 'a/an'). Ex: 'such good advice'!"
  },
  "q-such-resilience-under-pressure": {
    "sentenceTranslation": "Durante a interrupção bancária de quatro horas, a equipe de resposta a incidentes demonstrou tamanha compostura que todos os bancos de dados críticos foram restaurados com segurança.",
    "whyCorrect": "'Such' destaca o grau supremo de tranquilidade técnica exibida pelo time sob estresse.",
    "whyOthersFail": "'Rather' expressa preferência. 'Due to' pede causa nominal com preposição. 'Nor' exige negativa.",
    "proTip": "Em reconhecimentos e elogios formais após incidentes de TI: 'The team showed such professionalism under fire!'"
  },
  "q-such-as-agile-frameworks-scrum-safe": {
    "sentenceTranslation": "Consultorias modernas de TI corporativa adotam metodologias comprovadas de entrega, tais como Scrum, Kanban e SAFe, para coordenar equipes multidisciplinares.",
    "whyCorrect": "'Such as' exemplifica a lista diretamente sem desviar da função adjetiva.",
    "whyOthersFail": "'Like' é mais informal; 'for example' exigiria pontuação com oração completa; 'instead of' excluiria as metodologias.",
    "proTip": "Frase do seu documento: 'frameworks such as Scrum and SAFe'. Em redações técnicas em inglês, prefira 'such as' a 'like' para listar exemplos!"
  },
  "q-such-as-wild-animals-tigers-lions": {
    "sentenceTranslation": "Durante nossa maratona de documentários de safári, a Cinthia e eu aprendemos fatos fascinantes sobre animais selvagens predadores, tais como tigres, leões e leopardos.",
    "whyCorrect": "'Such as' introduz a série de substantivos exemplificativos com total naturalidade.",
    "whyOthersFail": "'Rather than' expressaria preferência excludente. 'Nor' exige negativa. 'Therefore' expressa dedução.",
    "proTip": "Frase autêntica do seu material: 'wild animals such as Tigers, Lions and Snakes'. Uso perfeito e clássico de 'such as'!"
  },
  "q-summing-up-sprint-retro-wins": {
    "sentenceTranslation": "Concluímos 42 story points, resolvemos três dívidas técnicas antigas e integramos dois engenheiros juniores. Resumindo, esta sprint foi a mais impactante deste trimestre.",
    "whyCorrect": "'Summing up' funciona como marcador discursivo conclusivo ideal para retrospectivas ágeis.",
    "whyOthersFail": "'In contrast' exigiria oposição. 'Unless' impõe condição restritiva. 'Due to' exige causa nominal.",
    "proTip": "'Summing up,' (com -ing) é dinâmico e enérgico para reuniões ágeis. Use na transição para o slide de conclusões!"
  },
  "q-summing-up-cinthia-trip-memories": {
    "sentenceTranslation": "Praias ensolaradas e quentes, arquitetura histórica, culinária local de dar água na boca e conversas inesquecíveis com a Cinthia. Resumindo, foram as melhores férias de nossas vidas.",
    "whyCorrect": "'Summing up' amarra o relato de viagens com emoção e concisão.",
    "whyOthersFail": "'Rather than' expressa exclusão comparativa. 'Nor' exige negativa correlativa. 'Because of' pede causa nominal.",
    "proTip": "Feche diários de viagem ou posts comemorativos com 'Summing up, it was unforgettable!'"
  },
  "q-summing-up-gremio-season-verdict": {
    "sentenceTranslation": "Uma defesa resiliente, uma guinada tática inspirada sob o comando de Renato Portalupi e o apoio inabalável de cinquenta mil torcedores na Arena. Resumindo, o Grêmio está de volta ao nível de elite.",
    "whyCorrect": "'Summing up' coroa a retrospectiva do campeonato com orgulho e energia.",
    "whyOthersFail": "'Otherwise' traria advertência adversa. 'So that' expressa objetivo. 'Equally' expressa paridade sem resumir.",
    "proTip": "Use 'Summing up' para sintetizar o balanço de temporadas ou grandes eventos esportivos."
  },
  "q-summing-up-cloud-migration-audit": {
    "sentenceTranslation": "Zero tempo de inatividade durante a virada do DNS, zero corrupção de dados no MongoDB e latência reduzida em 35%. Em síntese, a migração para a nuvem superou todas as metas de SLA.",
    "whyCorrect": "'Summing up' conclui o relatório técnico com autoridade e precisão matemática.",
    "whyOthersFail": "'Unless' é condicional. 'In order to' exige infinitivo. 'Rather than' pede escolha comparativa.",
    "proTip": "Em relatórios de auditoria de TI: 'Summing up, all criteria were met' é o carimbo final de aprovação."
  },
  "q-thats-why-gremio-lost-drank": {
    "sentenceTranslation": "Ontem foi um dia terrível para os torcedores de futebol; o Grêmio sofreu um gol no último minuto e perdeu a partida. É por isso que me senti tão desapontado e tomei uma cerveja gelada com amigos.",
    "whyCorrect": "'That's why' introduz a consequência emocional compreensível inspirada na frase do seu documento original.",
    "whyOthersFail": "'Although' expressaria concessão. 'Because of' exige substantivo causal direto sem oração independente. 'Unless' impõe condição.",
    "proTip": "Frase autêntica do seu material: 'Yesterday was a bad day, Grêmio lost the match. That's why I drank a lot.' Mostra a paixão pura pelo clube!"
  },
  "q-thats-why-mongodb-table-collection": {
    "sentenceTranslation": "Você não criou o índice apropriado na coleção do MongoDB. É por isso que as consultas do painel estavam rodando tão lentamente e dando tempo limite.",
    "whyCorrect": "'That's why' liga a causa técnica ao efeito de lentidão observado pelos usuários.",
    "whyOthersFail": "'Instead of' pede termo alternativo. 'Nor' exige negação correlativa. 'Due to' exige substantivo de causa.",
    "proTip": "Frase inspirada no seu material: 'You didn't fix the table on MongoDB. That's why the problem wasn't solved.' Perfeito para feedback técnico de code review!"
  },
  "q-thats-why-cinthia-surprised-flowers": {
    "sentenceTranslation": "A Cinthia defendeu sua dissertação de mestrado com louvor hoje; por isso cheguei cedo em casa com um buquê de girassóis frescos para comemorar.",
    "whyCorrect": "'That's why' conecta a conquista ao gesto carinhoso de celebração.",
    "whyOthersFail": "'Rather than' expressaria exclusão comparativa. 'Unless' impõe condição restritiva. 'In spite of' expressaria concessão.",
    "proTip": "Use 'That's why...' para contar o porquê de atitudes nobres e carinhosas na sua vida pessoal."
  },
  "q-then-sprint-planning-stories": {
    "sentenceTranslation": "O Product Owner definiu o Objetivo da Sprint e apresentou as histórias refinadas do backlog; em seguida, os desenvolvedores estimaram os story points e se comprometeram com a entrega.",
    "whyCorrect": "'Then' estabelece a sequência temporal canônica dos eventos de planejamento ágil.",
    "whyOthersFail": "'Beforehand' inverteria a ordem cronológica. 'Due to' pede causa nominal. 'Unless' impõe condição restritiva.",
    "proTip": "Em reuniões ágeis: 'First we do X, then we do Y.' A forma mais direta e universal de ordenar tarefas!"
  },
  "q-then-finish-gym-cook-cinthia": {
    "sentenceTranslation": "Vamos terminar nossa sessão de treino na academia, passar no mercado orgânico para comprar ingredientes frescos e então cozinhar um jantar delicioso juntos.",
    "whyCorrect": "'And then' é a expressão de encadeamento sequencial mais natural e utilizada no inglês falado.",
    "whyOthersFail": "'Nor' exige negação correlativa. 'Rather than' expressa preferência. 'Because of' exige causa nominal.",
    "proTip": "'First..., next..., and then...' é o trio infalível para dar ritmo e fluência a qualquer relato de rotina."
  },
  "q-then-merge-pr-deploy": {
    "sentenceTranslation": "Certifique-se de que as aprovações de revisão de código por pares foram recebidas, execute os testes finais de integração localmente e então faça o merge da branch na master.",
    "whyCorrect": "'Then' guia o passo a passo procedural no fluxo de trabalho de engenharia de software.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'So that' expressa objetivo com oração. 'In contrast' opõe dois lados.",
    "proTip": "No README e manuais de onboarding de desenvolvedores, 'and then [comando]' orienta o passo a passo com precisão."
  },
  "q-therefore-pipeline-failed-rolled-back": {
    "sentenceTranslation": "A suíte de testes de fumaça detectou uma NullPointerException não tratada no serviço de autenticação; portanto, a esteira abortou o deploy e iniciou um rollback automatizado.",
    "whyCorrect": "'Therefore' é o conector formal por excelência para relatar conclusões de causa e efeito em engenharia de sistemas.",
    "whyOthersFail": "'Nevertheless' expressaria oposição (como se devesse continuar com o erro). 'Unless' impõe condição. 'Rather than' expressa preferência.",
    "proTip": "A pontuação clássica de 'Therefore': '; therefore, [consequência]'. Demonstra altíssimo rigor na escrita técnica em inglês."
  },
  "q-therefore-cinthia-promoted-celebration": {
    "sentenceTranslation": "A Cinthia superou todas as metas de receita corporativa por três trimestres consecutivos; portanto, a liderança executiva a promoveu a diretora sênior.",
    "whyCorrect": "'Therefore' expressa a relação de mérito e recompensa corporativa com solenidade.",
    "whyOthersFail": "'Due to' exige substantivo sem oração independente. 'Nor' exige negação correlativa. 'Instead of' pede substituição.",
    "proTip": "Use 'therefore' para destacar o mérito inegável de promoções e reconhecimentos profissionais."
  },
  "q-therefore-gremio-clean-sheet-qualified": {
    "sentenceTranslation": "O Grêmio não sofreu gols nos dois jogos da semifinal; portanto, garantiu por mérito próprio seu lugar na grande final da Copa Libertadores.",
    "whyCorrect": "'Therefore' deduz a classificação como fruto da consistência defensiva.",
    "whyOthersFail": "'Unless' impõe condição restritiva. 'Rather than' expressa preferência. 'In spite of' expressa concessão.",
    "proTip": "Em debates esportivos maduros, 'therefore' confere autoridade analítica à sua argumentação tática."
  },
  "q-therefore-mongodb-schema-migration": {
    "sentenceTranslation": "A nova exigência regulatória requer criptografia imediata de todos os CPFs de clientes em repouso; portanto, nossa squad deve executar uma migração de esquema no MongoDB hoje à noite.",
    "whyCorrect": "'Therefore' justifica a tarefa técnica urgente a partir da exigência legal.",
    "whyOthersFail": "'So that' expressaria finalidade sem dedução. 'Because of' exige substantivo de causa direto. 'Equally' expressaria equivalência.",
    "proTip": "Ao priorizar itens de segurança na sprint com o PO: 'Compliance requires X; therefore, we must do Y first.' Argumento irrefutável!"
  },
  "q-though-hard-day-did-everything": {
    "sentenceTranslation": "Foi um dia muito duro e exigente na consultoria. Consegui entregar tudo o que precisava, no entanto.",
    "whyCorrect": "'Though' no fim da oração é a forma mais natural e expressiva do inglês nativo para suavizar uma adversidade anterior.",
    "whyOthersFail": "'Although' raramente é usado no final de sentenças no inglês moderno. 'Because' exige oração causal seguinte. 'Unless' é condicional.",
    "proTip": "Frase autêntica do seu material: 'It was a very tough day. I did everything that I needed to, though.' Usar 'though' no final da frase soa 100% nativo!"
  },
  "q-though-palmeiras-gremio-match": {
    "sentenceTranslation": "O Palmeiras jogou com marcação alta e criou contra-ataques perigosos; o Grêmio saiu com os três pontos em São Paulo, contudo.",
    "whyCorrect": "'Though' arremata a narrativa esportiva inspirada nas discussões do seu material sobre Grêmio e Palmeiras.",
    "whyOthersFail": "'Nor' exige negação correlativa. 'Due to' pede causa nominal. 'Rather than' expressa opção comparativa.",
    "proTip": "Frase inspirada no seu material! 'Grêmio won, though' fecha qualquer debate com amigos com elegância e satisfação."
  },
  "q-though-cinthia-tired-dinner": {
    "sentenceTranslation": "O restaurante estava completamente lotado e tivemos que esperar vinte minutos por nossa mesa; a massa caseira estava absolutamente deliciosa, contudo.",
    "whyCorrect": "'Though' no fim da frase fecha o relato valorizando a qualidade da comida sobre o tempo de espera.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' exige causa nominal. 'Summing up' fecharia com resumo.",
    "proTip": "'The wait was long; the food was great, though!' Pratique essa estrutura em avaliações de viagens e restaurantes."
  },
  "q-thus-automation-reduced-manual-effort": {
    "sentenceTranslation": "A squad aumentou a cobertura de testes automatizados em todos os repositórios de microsserviços para 92%; assim, o esforço manual de regressão de QA foi reduzido dramaticamente.",
    "whyCorrect": "'Thus' é o conector formal de dedução clássico do seu documento, ideal para relatórios executivos.",
    "whyOthersFail": "'Nevertheless' expressaria oposição. 'Unless' impõe condição restritiva. 'Rather than' expressa preferência.",
    "proTip": "Frase autêntica do seu material: 'The squad increased automation coverage. Thus, manual effort was reduced.' Simples, precisa e executiva!"
  },
  "q-thus-indexed-mongodb-speed": {
    "sentenceTranslation": "O arquiteto de banco de dados adicionou índices compostos cobrindo customerId e transactionDate; assim, a latência de execução de consultas caiu de 800ms para 12ms.",
    "whyCorrect": "'Thus' introduz o ganho numérico de performance com elegância científica.",
    "whyOthersFail": "'Due to' exigiria ordem inversa ('latency dropped due to indexes'). 'Nor' exige negativa. 'Although' expressa concessão.",
    "proTip": "Em apresentações de performance: 'We optimized X; thus, metric Y improved by Z%.' Linguagem de engenheiro sênior!"
  },
  "q-thus-cinthia-investment-growth": {
    "sentenceTranslation": "A Cinthia e eu automatizamos sistematicamente nossas economias mensais em fundos de índice globais diversificados; assim, nossa segurança financeira de longo prazo cresceu de forma constante.",
    "whyCorrect": "'Thus' expressa a evolução patrimonial como efeito direto do planejamento disciplinado.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' exige causa nominal sem oração independente. 'In order to' exige infinitivo.",
    "proTip": "'Thus' pode significar 'desta forma / desse modo' (in this way) ou 'portanto'. Ambas as nuances são elegantes!"
  },
  "q-to-sum-up-production-deployment-success": {
    "sentenceTranslation": "Todos os cinquenta microsserviços foram migrados para o Kubernetes, as replicações de banco de dados permaneceram sincronizadas e o tráfego dos usuários fluiu sem interrupções. Para resumir, a transição para a nuvem foi um triunfo.",
    "whyCorrect": "'To sum up' é a locução infinitiva consagrada para inaugurar o sumário de conclusões.",
    "whyOthersFail": "'In contrast' exigiria oposição. 'Unless' impõe condição restritiva. 'Due to' exige causa nominal.",
    "proTip": "Frase inspirada no seu material! 'To sum up,' é perfeita para o último slide de qualquer apresentação executiva."
  },
  "q-to-sum-up-cinthia-florence-trip": {
    "sentenceTranslation": "Paisagens toscanas de tirar o fôlego, clima quente e ensolarado, culinária italiana refinada e muitas risadas com a Cinthia. Para resumir, foram férias inesquecíveis.",
    "whyCorrect": "'To sum up' fecha a narrativa de viagens valorizando os melhores momentos.",
    "whyOthersFail": "'Rather than' expressa exclusão comparativa. 'Nor' exige negativa correlativa. 'Because of' exige causa nominal.",
    "proTip": "'To sum up, it was an unforgettable experience' é uma frase de fechamento impecável para conversas sociais em inglês!"
  },
  "q-to-sum-up-gremio-derby-tactics": {
    "sentenceTranslation": "Uma postura defensiva resiliente, contra-ataques cirúrgicos pelas alas e defesas heroicas do nosso goleiro. Para resumir, o Grêmio conquistou uma vitória magistral no clássico.",
    "whyCorrect": "'To sum up' amarra os três fatores do sucesso esportivo na conclusão definitiva.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'So that' expressa objetivo. 'Equally' expressa equivalência sem resumir.",
    "proTip": "Use 'To sum up' para resumir análises esportivas, debates técnicos e apresentações profissionais com autoridade."
  },
  "q-towards-sprint-goal-progress": {
    "sentenceTranslation": "Cada compromisso assumido pela equipe de engenharia na daily standup é um passo deliberado em direção ao alcance do nosso Objetivo de Sprint trimestral.",
    "whyCorrect": "'Towards + gerúndio' ('towards achieving') expressa avanço e direcionamento com clareza.",
    "whyOthersFail": "'Unless' impõe condição restritiva. 'Instead of' indicaria abandono da meta. 'Due to' exige causa nominal.",
    "proTip": "Frase ágil clássica: 'A major step towards our goal.' Use 'towards' para falar de progresso e alinhamento de metas!"
  },
  "q-towards-cinthia-future-home": {
    "sentenceTranslation": "A Cinthia e eu depositamos uma fatia fixa dos nossos bônus mensais de consultoria em um fundo de reserva voltado para a compra da casa dos nossos sonhos.",
    "whyCorrect": "'Towards + gerúndio' rege a destinação de recursos e energia para um propósito nobre.",
    "whyOthersFail": "'Rather than' expressaria exclusão comparativa. 'Nor' exige negativa correlativa. 'Because of' exige causa consumada.",
    "proTip": "'Saving money towards a goal' (economizar para uma meta) é uma das combinações mais naturais da língua inglesa."
  },
  "q-towards-championship-title-gremio": {
    "sentenceTranslation": "Vencer três partidas consecutivas fora de casa deu ao Grêmio um impulso imenso rumo à conquista do título do campeonato nacional.",
    "whyCorrect": "'Towards' rege 'securing the title' marcando a trajetória vitoriosa da equipe.",
    "whyOthersFail": "'Unless' é condicional negativa. 'In spite of' expressa concessão. 'Therefore' expressa dedução.",
    "proTip": "No esporte e na carreira: 'Momentum towards victory' (impulso rumo à vitória) transmite determinação e foco!"
  },
  "q-unless-ci-tests-pass-no-merge": {
    "sentenceTranslation": "Nossas regras de proteção de branch impedirão qualquer desenvolvedor de fazer merge na master a menos que todas as varreduras unitárias, de integração e de segurança passem com 100% de sucesso.",
    "whyCorrect": "'Unless' equivale a 'if ... not', funcionando perfeitamente para expressar regras de conformidade e travas de segurança.",
    "whyOthersFail": "'If' exigiria negação na oração ('if they don't pass'). 'Because of' exige substantivo causal direto. 'Although' expressa concessão.",
    "proTip": "Dica fundamental do Professor: 'Unless' = 'If not'. Nunca use 'unless' com verbo na negativa ('unless you don't do' é errado; o certo é 'unless you do')!"
  },
  "q-unless-gremio-scores-eliminated": {
    "sentenceTranslation": "Na fase mata-mata do torneio, o Grêmio será eliminado no placar agregado a menos que marque pelo menos dois gols no segundo tempo.",
    "whyCorrect": "'Unless' articula a condição de salvação esportiva diante da eliminação iminente.",
    "whyOthersFail": "'Rather than' expressa preferência de escolha. 'Nor' exige negativa correlativa. 'Due to' exige causa nominal.",
    "proTip": "Em transmissões e decisões de futebol: 'They will be knocked out unless they score!' Tensão pura!"
  },
  "q-unless-cinthia-feels-better-stay-home": {
    "sentenceTranslation": "Estamos programados para ir ao banquete de casamento de nossos amigos amanhã, mas ficaremos em casa descansando a não ser que a Cinthia se sinta totalmente recuperada do resfriado.",
    "whyCorrect": "'Unless' condiciona a ida à festa à recuperação plena da saúde da parceira.",
    "whyOthersFail": "'Instead of' exige gerúndio ou substantivo. 'Because of' exige substantivo. 'So that' expressaria propósito.",
    "proTip": "Mostre empatia e consideração em inglês: 'We will cancel the trip unless you feel 100% better.'"
  },
  "q-unlike-monolith-microservices-isolated": {
    "sentenceTranslation": "Ao contrário de arquiteturas monolíticas, onde um único vazamento de memória pode derrubar o sistema inteiro, microsserviços isolam falhas dentro de contêineres individuais.",
    "whyCorrect": "'Unlike' rege o substantivo comparado 'monolithic architectures' estabelecendo distinção nítida.",
    "whyOthersFail": "'Whereas' exigiria oração completa com verbo logo após. 'Because of' indicaria causa. 'Unless' impõe condição restritiva.",
    "proTip": "Frase inspirada no seu material! 'Unlike X, Y does Z' é o formato perfeito para destacar inovações em propostas técnicas."
  },
  "q-unlike-previous-job-remote-gft": {
    "sentenceTranslation": "Ao contrário do meu trabalho presencial anterior, onde eu enfrentava duas horas de trânsito todos os dias, meu cargo atual de consultoria na GFT é totalmente flexível e remoto.",
    "whyCorrect": "'Unlike' abre a frase com comparação biográfica direta inspirada no seu material.",
    "whyOthersFail": "'Rather than' expressaria preferência em vez de distinção factual. 'Nor' exige negativa. 'Due to' exige causa nominal.",
    "proTip": "Frase do seu material: 'Unlike my previous job, my current job is fully remote.' Guarde para entrevistas!"
  },
  "q-whatever-hurdles-gft-delivers": {
    "sentenceTranslation": "Quaisquer que sejam os obstáculos arquiteturais imprevistos que surjam durante a migração para a nuvem, nossa squad sênior da GFT tem a expertise para resolvê-los rapidamente.",
    "whyCorrect": "'Whatever' antecede o substantivo 'unforeseen architectural hurdles' com abrangência total.",
    "whyOthersFail": "'Unless' impõe condição restritiva. 'Instead of' exige substituição. 'Due to' exige causa nominal.",
    "proTip": "'Whatever challenges arise, we will overcome them' transmite liderança firme e confiança em apresentações corporativas."
  },
  "q-whatever-cinthia-chooses-menu": {
    "sentenceTranslation": "Confio totalmente no gosto culinário dela, então qualquer que seja o prato que a Cinthia escolher do cardápio italiano hoje à noite, vou compartilhar alegremente com ela.",
    "whyCorrect": "'Whatever' qualifica 'dish' com flexibilidade e carinho.",
    "whyOthersFail": "'Rather than' expressaria exclusão comparativa. 'Nor' exige negativa. 'Therefore' expressa dedução.",
    "proTip": "'Whatever you prefer' (o que você preferir) é uma das frases mais simpáticas para concordar com seu par no dia a dia."
  },
  "q-whatever-weather-gremio-arena": {
    "sentenceTranslation": "Seja qual for o clima que chegue a Porto Alegre no domingo de clássico — chuva pesada, frio cortante ou calor escaldante —, os torcedores do Grêmio lotarão a Arena.",
    "whyCorrect": "'Whatever' encabeça a oração concessiva universal com força poética e esportiva.",
    "whyOthersFail": "'Otherwise' traria alerta adverso. 'Because of' exige causa nominal simples. 'So that' expressa objetivo.",
    "proTip": "Mostre a paixão inabalável pelo Grêmio usando 'Whatever the weather, Grêmio comes first!'"
  },
  "q-whatever-database-mongodb-fast": {
    "sentenceTranslation": "Qualquer que seja a estrutura de coleção que você defina no MongoDB, lembre-se de que criar índices compostos adequados é o que garante consultas ultrarrápidas.",
    "whyCorrect": "'Whatever' qualifica 'collection structure' demonstrando regra universal de engenharia de dados.",
    "whyOthersFail": "'Unless' é condicional restritiva. 'In order to' exige infinitivo. 'Rather than' pede opção comparativa.",
    "proTip": "Em workshops técnicos: 'Whatever technology you choose, fundamentals matter most.'"
  },
  "q-whenever-incident-pagerduty-alert": {
    "sentenceTranslation": "Sempre que ocorre uma queda crítica de microsserviço em produção, o PagerDuty dispara automaticamente notificações de alerta para o celular do engenheiro de plantão.",
    "whyCorrect": "'Whenever' é a conjunção subordinativa temporal por excelência para expressar recorrência ou condição repetida.",
    "whyOthersFail": "'Unless' significaria 'a menos que ocorra' (inversão absurda do propósito do plantão). 'Due to' exige substantivo. 'Although' expressa concessão.",
    "proTip": "'Whenever' = 'Every time that'. Essencial para descrever automações, triggers, webhooks e alertas em TI!"
  },
  "q-whenever-gremio-scores-arena-erupts": {
    "sentenceTranslation": "Toda vez que o Grêmio marca um gol decisivo na Arena, cinquenta mil torcedores pulam de suas cadeiras, tremulando bandeiras e cantando o hino de batalha do clube.",
    "whyCorrect": "'Whenever' conecta o momento do gol à vibração coletiva imediata.",
    "whyOthersFail": "'Rather than' expressa opção comparativa. 'Nor' exige negativa correlativa. 'Therefore' expressa dedução.",
    "proTip": "Use 'Whenever' para narrar rituais e costumes emocionantes do estádio de futebol!"
  },
  "q-whenever-cinthia-smiles-day-brightens": {
    "sentenceTranslation": "Sempre que a Cinthia sorri e me dá um abraço caloroso após um longo dia de reuniões de consultoria, todo o meu estresse de trabalho se desfaz instantaneamente.",
    "whyCorrect": "'Whenever' expressa a repetição afetuosa que traz paz e bem-estar à rotina.",
    "whyOthersFail": "'Otherwise' traria advertência adversa. 'Because of' exige causa nominal direta. 'Instead of' pede substituição.",
    "proTip": "'Whenever I see you...' é uma declaração clássica e emocionante em qualquer idioma!"
  },
  "q-whereas-scrum-sprints-kanban-flow": {
    "sentenceTranslation": "O Scrum organiza a entrega de software em sprints com caixas de tempo fixas, ao passo que o Kanban foca no fluxo contínuo e em limites rigorosos de trabalho em andamento.",
    "whyCorrect": "'Whereas' é a conjunção subordinativa por excelência para traçar contrastes analíticos diretos entre duas realidades.",
    "whyOthersFail": "'Due to' exige substantivo de causa. 'Unless' impõe condição restritiva. 'In order to' exige infinitivo de propósito.",
    "proTip": "Frase autêntica do seu material: 'Scrum focuses on short iterations, whereas Kanban focuses on continuous flow.' Domínio puro de metodologia ágil!"
  },
  "q-whereas-sql-acid-mongodb-flexibility": {
    "sentenceTranslation": "Bancos de dados relacionais SQL tradicionais priorizam rigorosamente garantias de transação ACID, ao passo que armazenamentos de documentos como o MongoDB otimizam para escalabilidade horizontal e flexibilidade de esquema.",
    "whyCorrect": "'Whereas' articula com maestria a comparação entre os paradigmas de persistência de dados.",
    "whyOthersFail": "'Because' transformaria um paradigma na causa do outro. 'Rather than' exigiria reformulação. 'Nor' exige negativa.",
    "proTip": "Em avaliações técnicas e certificações em nuvem, 'whereas' é a conjunção favorita dos examinadores para comparar tecnologias!"
  },
  "q-whereas-cinthia-morning-planner-spontaneous": {
    "sentenceTranslation": "Gosto de esboçar nossas atividades de fim de semana e preparar itinerários detalhados, ao passo que a Cinthia prefere viagens espontâneas com espaço para surpresas agradáveis.",
    "whyCorrect": "'Whereas' coloca os dois temperamentos lado a lado ressaltando a beleza das diferenças.",
    "whyOthersFail": "'So that' expressa objetivo. 'Therefore' expressa dedução causal. 'In spite of' pede sintagma nominal.",
    "proTip": "'Whereas' funciona como 'while', mas carrega um tom muito mais refinado e analítico na escrita."
  },
  "q-wherever-cloud-consulting-gft": {
    "sentenceTranslation": "Tecnologias modernas em nuvem permitem que nossa squad de consultoria da GFT entregue software bancário de missão crítica onde quer que estejamos localizados no mundo.",
    "whyCorrect": "'Wherever' expressa universalidade de localização física com fluência nativa.",
    "whyOthersFail": "'Unless' é condicional restritiva. 'Instead of' pede substituição. 'Due to' exige causa nominal.",
    "proTip": "'Wherever you are' (onde quer que você esteja) é um conectivo chave para o trabalho remoto global contemporâneo."
  },
  "q-wherever-gremio-plays-fans-travel": {
    "sentenceTranslation": "Os torcedores do Grêmio são famosos por sua devoção; onde quer que o time viaje pela América do Sul pela Libertadores, faixas azuis e pretas lotam o setor visitante.",
    "whyCorrect": "'Wherever' introduz o alcance continental incondicional da torcida tricolor.",
    "whyOthersFail": "'Rather than' expressa opção comparativa. 'Nor' exige negativa. 'Therefore' expressa dedução.",
    "proTip": "Lema gremista traduzido para o inglês: 'Wherever Grêmio goes, we will follow!'"
  },
  "q-wherever-cinthia-travels-home": {
    "sentenceTranslation": "O lar não é apenas um endereço geográfico; onde quer que a Cinthia e eu estejamos juntos, aquele lugar parece acolhedor, alegre e completamente seguro.",
    "whyCorrect": "'Wherever' abre a oração subordinada com profundo sentimento de cumplicidade.",
    "whyOthersFail": "'Otherwise' traria advertência adversa. 'Because of' exige causa nominal sem oração. 'So that' expressa objetivo.",
    "proTip": "Declaração afetuosa clássica: 'Wherever you go, I go.' Encha suas frases em inglês de verdade humana!"
  },
  "q-wherever-mongodb-deployed-replicated": {
    "sentenceTranslation": "Nossa arquitetura corporativa distribuída garante que, onde quer que nossos clusters MongoDB estejam implantados — AWS, Azure ou GCP —, os dados sejam sincronizados em tempo quase real.",
    "whyCorrect": "'Wherever' abrange os múltiplos provedores de nuvem de forma inclusiva.",
    "whyOthersFail": "'Unless' impõe condição restritiva. 'In order to' exige infinitivo. 'Rather than' pede escolha comparativa.",
    "proTip": "Em arquiteturas multicloud: 'Data stays secure wherever it is hosted.' Direto e confiável!"
  },
  "q-wherever-you-find-passion-tech": {
    "sentenceTranslation": "Em comunidades de engenharia de software, onde quer que você encontre desenvolvedores apaixonados por código limpo, descobrirá grande colaboração e aprendizado contínuo.",
    "whyCorrect": "'Wherever' formula o princípio comunitário universal com elegância.",
    "whyOthersFail": "'Because of' exige causa nominal. 'Nor' exige negativa. 'Due to' exige preposição com substantivo.",
    "proTip": "Use 'wherever' para abrir reflexões sobre cultura e boas práticas de tecnologia."
  },
  "q-whether-scrum-or-kanban-agile": {
    "sentenceTranslation": "Quer sua squad de engenharia escolha o Scrum com iterações fixas ou o Kanban com entrega contínua, estabelecer segurança psicológica é primordial.",
    "whyCorrect": "'Whether ... or' é a locução correlativa padrão para subordinar duas alternativas sob um princípio maior.",
    "whyOthersFail": "'Unless' significaria 'a não ser que' sem o paralelismo de 'or'. 'Because of' exige causa nominal. 'In order to' exige infinitivo de propósito.",
    "proTip": "'Whether X or Y, [conclusão importante]' é a estrutura favorita de palestrantes e líderes para mostrar maturidade que vai além de preferências pontuais!"
  },
  "q-whether-rain-or-shine-cinthia": {
    "sentenceTranslation": "Quer faça sol ou chuva este fim de semana em Porto Alegre, a Cinthia e eu planejamos atividades divertidas para comemorar nosso aniversário.",
    "whyCorrect": "'Whether' comanda as duas possibilidades climáticas ligadas por 'or'.",
    "whyOthersFail": "'Rather than' expressaria preferência excludente. 'Nor' exige negação correlativa. 'Due to' exige causa nominal.",
    "proTip": "Expressão idiomática clássica em inglês: 'Whether rain or shine...' (faça chuva ou faça sol). Pura determinação!"
  },
  "q-while-frontend-develops-backend-apis": {
    "sentenceTranslation": "Enquanto os engenheiros de backend implementavam as consultas de agregação do MongoDB, a squad de frontend construía componentes de interface responsivos em React.",
    "whyCorrect": "'While' é a conjunção temporal por excelência para conectar duas orações que ocorrem simultaneamente no mesmo período.",
    "whyOthersFail": "'Afterwards' indicaria que o frontend esperou o backend terminar. 'Due to' pede substantivo causal sem oração completa. 'Unless' impõe condição restritiva.",
    "proTip": "'While' tem dois usos fundamentais: 1) Tempo simultâneo ('While I was coding, he was testing'); 2) Contraste ('While Python is interpreted, Go compiles to native code')."
  },
  "q-while-gremio-attacked-opponent-countered": {
    "sentenceTranslation": "Enquanto o Grêmio mantinha posse de bola implacável no campo de ataque, o adversário permanecia organizado defensivamente, buscando contra-ataques.",
    "whyCorrect": "'While' capta a simultaneidade tática dos dois times em campo com perfeição.",
    "whyOthersFail": "'Rather than' expressaria opção comparativa. 'Nor' exige negativa. 'Therefore' expressa dedução.",
    "proTip": "Em análises futebolísticas: 'While team A attacks, team B defends.' Simples, dinâmico e fluente!"
  },
  "q-yet-simple-architecture-reliable": {
    "sentenceTranslation": "A base de código do microsserviço de pagamentos é notavelmente compacta e concisa, contudo processa com confiabilidade milhares de transações financeiras a cada segundo.",
    "whyCorrect": "'Yet' antecedido de vírgula expressa um contraste surpreendente entre a simplicidade aparente e a alta capacidade técnica.",
    "whyOthersFail": "'So that' expressaria propósito. 'Due to' exige substantivo causal direto. 'Nor' exige negação correlativa prévia com neither.",
    "proTip": "'Yet' faz parte do FANBOYS! Funciona como um 'but' sofisticado, com nuance de surpresa ('compact, yet powerful')."
  },
  "q-yet-exhausted-gremio-fans-cheered": {
    "sentenceTranslation": "Os torcedores haviam viajado dezoito longas horas de ônibus pelo país, contudo suas vozes estrondosas ecoaram pelo estádio até o apito final.",
    "whyCorrect": "'Yet' destaca o amor incondicional que supera o cansaço físico da viagem.",
    "whyOthersFail": "'Because' transformaria o cansaço na causa da gritaria. 'Unless' impõe condição restritiva. 'Rather than' expressa opção comparativa.",
    "proTip": "Use 'yet' para contrastar esforço heróico e determinação inabalável tanto em esportes quanto em projetos de TI."
  }
};

export function getTeacherNote(questionId: string): TeacherNote | undefined {
  return TEACHER_NOTES[questionId];
}

function normalizeKey(str?: string | null): string {
  if (!str) return "";
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export const SENTENCE_TO_ID_MAP: Record<string, string> = {
  "whenyoubuyanewiphoneyouneedtobuythechargerseparatelyitwontcomealongwiththephone": "q-user-along-with-iphone",
  "thescrummastermadetheretrospectivealongwiththedevelopersandtheqas": "q-user-along-with-scrum",
  "imadeanappointmentinarestaurantandcinthiawillgoalongwithme": "q-user-along-with-cinthia",
  "grmiolostonemorematchonsaturdayandasaresultthemanagerwasfired": "q-user-as-a-result-gremio",
  "asfarasiknowrebecadeliveredtheprojectontime": "q-user-as-far-as-rebeca",
  "asfarastheclientsaidtometheproblemisthatthescreendoesntwork": "q-user-as-far-as-screen",
  "theteamneedsasoftwaredeveloperaswellasaqa": "q-user-as-well-as-qa",
  "renatogachosignedwithgrmioatlast": "q-user-at-last-gremio",
  "althoughididntstudyenoughatleastistudiedmaththehardestone": "q-user-at-least-math",
  "myteammadeapocproofofconceptanddefinitelywecanbuildtheprogram": "q-user-definitely-poc",
  "thefrontendengineersstartedbuildingtheuserinterfacemeanwhilethebackendteamsetupthedatabaseschemasandauthenticationendpoints": "q-user-meanwhile-tech",
  "welikeneitherjavanorspringframeworks": "q-user-nor-tech",
  "imgoingtothepartyonlyifcinthiagoestoo": "q-user-only-if-cinthia",
  "firstillcalltheflightattendantotherwiseiwillcall911andtheyfight": "q-user-otherwise-joke",
  "firstillcalltheflightattendantotherwiseiwillcall911andtheyfightelesquelutem": "q-user-otherwise-joke",
  "ihavebeenworkingatgftsince2022": "q-user-since-gft",
  "actuallyimnotworkingasasoftwaredevelopersoidontcodeanymore": "q-user-so-career",
  "whenwemanageprojectsitsnecessarytousesomeframeworkssuchasscrumandsafe": "q-user-such-as-frameworks",
  "youdidntfixthetableonmongodbthatswhytheproblemwasntsolved": "q-user-thats-why-mongodb",
  "weheldthesprintplanningmeetingthentheteambeganworkingonthestories": "q-user-then-sprint",
  "itwasaverytoughdayidideverythingthatineededtothough": "q-user-though-tough-day",
  "thesquadincreasedautomationcoveragethusmanualeffortwasreduced": "q-user-thus-automation",
  "tosumupafterallthatyousaidyoufinishedthedeploymentinproduction": "q-user-to-sum-up-prod",
  "unlikemypreviousjobmycurrentjobisfullyremote": "q-user-unlike-remote",
  "scrumfocusesonshortiterationswhereaskanbanfocusesoncontinuousflow": "q-user-whereas-scrum-kanban",
  "weneedtodecidewhethertostayorleave": "q-user-whether-decide",
  "whiletheprojectwassuccessfulitwasveryexpensive": "q-user-while-expensive",
  "thetaskwasdifficultyetwemanagedtofinishit": "q-user-yet-task",
  "infactimnotpaolabrachoimanusurpadora": "q-user-in-fact-paola",
  "icantcomeinadvancesoicalledleomessitoinformyoudoyouknowhim": "q-user-so-messi",
  "abovealltheengineeringsquadmustensurethatcustomerdataissecurelyencryptedatrest": "q-tech-above-all-security",
  "aboveallalltheengineeringsquadmustensurethatcustomerdataissecurelyencryptedatrest": "q-tech-above-all-security",
  "wewillexecutethedatabasemigrationscriptfirstafterwardswewillverifytableindexesandcacheconsistency": "q-tech-afterwards-migration",
  "wefacedtwoflakyautomatedtestsbutallinallthesquadmeteverysinglesprintgoal": "q-tech-all-in-all-sprint",
  "wefacedtwoflakyautomatedtestsbutallinallinallthesquadmeteverysinglesprintgoal": "q-tech-all-in-all-sprint",
  "apartfromaminorcssformattingissueonthenavbarthepullrequestlookscleanandreadytomerge": "q-tech-apart-from-pr",
  "apartfromfromaminorcssformattingissueonthenavbarthepullrequestlookscleanandreadytomerge": "q-tech-apart-from-pr",
  "youcanpushyourhotfixtostagingaslongasallautomatedsmoketestspasssuccessfully": "q-tech-as-long-as-deploy",
  "youcanpushyourhotfixtostagingaslongasasallautomatedsmoketestspasssuccessfully": "q-tech-as-long-as-deploy",
  "thedockercontainerfailedtostartbecauseofamissingenvironmentvariableintheproductionconfig": "q-tech-because-of-env",
  "theproductownerrefinescomplexuserstoriesbeforehandsothatdevelopersfacezeroambiguityduringsprintplanning": "q-tech-beforehand-backlog",
  "thisrediscachinglayerreducesdatabaseloadbesidesitslashesapiresponsetimesfrom400msdownto18ms": "q-tech-besides-cache",
  "thesquaddidnotmockexternalpaymentendpointsconsequentlytheautomatedpipelinetimedoutduringunittesting": "q-tech-consequently-tests",
  "ourengineeringorganizationiscurrentlymigratingallonpremisemicroservicestoamanagedkubernetescluster": "q-tech-currently-cloud",
  "thereleasefreezewasenforcedduetohightrafficvolumeexpectedduringblackfridayweek": "q-tech-due-to-black-friday",
  "eveniftheprimaryauthenticationprovidergoesdownourservicemaintainssessionvalidationviajwtsignatures": "q-tech-even-if-auth",
  "evenififtheprimaryauthenticationprovidergoesdownourservicemaintainssessionvalidationviajwtsignatures": "q-tech-even-if-auth",
  "eventhoughthecodebasewaswritteninlegacyphpthedeveloperssucceededinbuildingautomatedcitests": "q-tech-even-though-legacy",
  "eventhoughthoughthecodebasewaswritteninlegacyphpthedeveloperssucceededinbuildingautomatedcitests": "q-tech-even-though-legacy",
  "thenewcloudclusterautomaticallyscalespodsondemandfurthermoreitisolatessensitivetenantdatainseparatenamespaces": "q-tech-furthermore-cluster",
  "themonolithicbackendreacheditshorizontalscalinglimithencethearchitectureteamdecidedtosplititintodomainservices": "q-tech-hence-legacy",
  "pleaseinformtheoncalldevopssquadinadvanceifyouplantoexecuteabulkdatabaseschemamigration": "q-tech-in-advance-migration",
  "weconfiguredmultiregioncrossclouddatabasebackupsincasetheprimaryawsregionsuffersanunexpectedoutage": "q-tech-in-case-outage",
  "thesquadimplementedstrictinputsanitizationinordertopreventsqlinjectionattacks": "q-tech-in-order-to-security",
  "thearchitectrecommendedusingwebsocketsinsteadofpollingthehttpservereverytwoseconds": "q-tech-instead-of-polling",
  "seniorsoftwareengineersmustwritecleanunittestslikewisejuniordevelopersareexpectedtomaintainthesamequalitystandards": "q-tech-likewise-standards",
  "ourplatformnolongersupportslegacytls10protocolsduetocriticalsecuritydeprecations": "q-tech-no-longer-legacy",
  "monolithicarchitecturesaresimplertosetupinitiallyontheotherhandmicroservicesallowdecoupledteamdeployments": "q-tech-on-the-other-hand-monolith",
  "monolithicarchitecturesaresimplertosetupinitiallyontheontheotherhandhandmicroservicesallowdecoupledteamdeployments": "q-tech-on-the-other-hand-monolith",
  "thepipelinewilltriggertheproductionreleaseonlyifallsonarqubequalitygatespasswithzerovulnerabilities": "q-tech-only-if-production",
  "thepipelinewilltriggertheproductionreleaseonlyififallsonarqubequalitygatespasswithzerovulnerabilities": "q-tech-only-if-production",
  "storetheawssecretkeysinasecuresecretsmanagerotherwiseyourcredentialsmightbeexposedinpublicrepositories": "q-tech-otherwise-credentials",
  "weconfiguredapigatewayratelimitingsothattheserverscanhandleunexpectedtrafficspikeswithoutcrashing": "q-tech-so-that-ddos",
  "ourdevopsengineersleverageobservabilitytoolssuchasgrafanaprometheusanddatadogtomonitorclusterlatency": "q-tech-such-as-observability",
  "firstthedeveloperopensapullrequestthenthegithubactionsworkflowtriggersautomatedstaticcodeanalysis": "q-tech-then-ci",
  "thesecurityteamisworkingdiligentlytowardsachievingsoc2typeiicompliancebeforethethirdquarteraudit": "q-tech-towards-soc2",
  "neverbypassautomatedpipelinesecuritychecksunlessthectoexplicitlyapprovesanemergencyproductionoverride": "q-tech-unless-cto",
  "unlikesynchronousrestendpointsapachekafkamessagetopicsdecoupleproducerandconsumerservicescompletely": "q-tech-unlike-kafka",
  "wheneveradevelopermergescodeintothemasterbranchthecicdpipelinetriggersanautomatedcontainerbuild": "q-tech-whenever-push",
  "theengineeringsquadisevaluatingwhethertomigratetodynamodboroptimizeourexistingpostgresqlinstance": "q-tech-whether-database",
  "whilethebackendengineerrefactoredthedatabasequeriesthefrontendteambuilttheinteractivedashboards": "q-tech-while-async",
  "thearchitecturalrefactoringwasriskyandcomplexyetityieldedanimmediate4xincreaseinapithroughput": "q-tech-yet-throughput",
  "althoughitsrainingimgoingtothebeach": "q-although-1",
  "youdidntdoyourjobcorrectlyasaresultourclientsarecallinguswithmanyproblems": "q-as-a-result-1",
  "aslongasyoudoyourhomeworkyouwillpasstheexam": "q-as-long-as-1",
  "thefeaturewasntdoneintimehenceweneedtorescheduletheproject": "q-hence-1",
  "iwillgotothepartyevenifyouwontgo": "q-even-if-1",
  "maybeyoushouldstayhomeinsteadofgoingouttonight": "q-instead-of-1",
  "eventhoughidonthavemuchmoneyiwillgoouttonight": "q-even-though-1",
  "pleaseletmeknowinadvanceifyoucantattend": "q-in-advance-1",
  "henolongerworksattheconsultancy": "q-no-longer-1",
  "thefrontendengineersstartedbuildingtheuimeanwhilethebackendteamsetupthedatabase": "q-meanwhile-1",
  "whenyousendyourprojectreportalongwithityoucanshareyourgraphics": "q-along-with-1",
  "iknowthatsahardsubjectineedtostudymoreaswell": "q-as-well-1",
  "itslatebutwefoundtheproblematlast": "q-at-last-1",
  "althoughididntstudyenoughatleastistudiedmaththehardestsubject": "q-at-least-1",
  "thedeveloperwillbelatetodaybecausethetrafficisawful": "q-because-1",
  "imcryingbecauseofwhatyousaid": "q-because-of-1",
  "idontwanttogoouttonightitsfreezingbesidesihaveanearlymeetingtomorrow": "q-besides-1",
  "itwashardtofixthatproblembuticouldhandleit": "q-but-1",
  "currentlyourclientsaresatisfiedwithourproducts": "q-currently-1",
  "duetoanoutagealltheprogramswerestopped": "q-due-to-1",
  "youshouldgotoenglandevenalone": "q-even-1",
  "westoppedtestingfortheserverwasdown": "q-for-1",
  "letmeexplainagainforinstancewhenthedeveloperfinishestheprogramhecanstartsomethingelse": "q-for-instance-1",
  "theresheavytrafficaheadhoweveridonthaveanotherway": "q-however-1",
  "ifyougothereillgotoo": "q-if-1",
  "takethisexamtoyourdoctorjustincase": "q-in-case-1",
  "infactbrazilistheonlycountrythatisafivetimeworldcupchampion": "q-in-fact-1",
  "icametoworkinpersoninordertofinishtheproject": "q-in-order-to-1",
  "inspiteofwhatyousaidhecouldunderstand": "q-in-spite-of-1",
  "theteammadesignificantprogressthissprintindeedtheycompletedallhighpriorityitemsaheadofschedule": "q-indeed-1",
  "seniorengineersmustreviewtheirpullrequestslikewisejuniordevelopersareexpectedtofollowthesametestingstandards": "q-likewise-1",
  "yousaidtheprojectwasontimeactuallyitisrunningoutoftime": "q-actually-1",
  "despitetherainimgoingtothebeach": "q-despite-1",
  "theserverwasdownthereforewestoppedtesting": "q-therefore-1",
  "youwillnotpasstheexamunlessyoustudytonight": "q-unless-1",
  "imheresothaticanstudy": "q-so-that-1",
  "imtiredillgotothepartythough": "q-though-1",
  "theplanischeaperontheotherhanditwilltakemuchlonger": "q-on-the-other-hand-1",
  "submitthereporttodayotherwisetheclientwillcancelthemeeting": "q-otherwise-1",
  "thebackendisreadywhereasthefrontendisstillinprogress": "q-whereas-1",
  "thetrafficwasawfulthatswhythedeveloperwaslate": "q-thats-why-1",
  "whiletheqateamtestedtheapithedevelopersfixedtheuibugs": "q-while-1",
  "wecanhireonemorebackenddeveloperratherthanafrontenddeveloper": "q-rather-than-1",
  "thegrmiosquadistrainingnowmeanwhilecoachrenatoportalupiisatthepressconference": "q-gremio-portalupi-1",
  "thescrummasterconductedtheretrospectivealongwiththedevelopersandtheqas": "q-scrum-master-1",
  "whenyoubuyanewiphonethechargerwontcomealongwiththephone": "q-iphone-1",
  "aboveallwemustensureourproductiondatabasesaresecuredagainstunauthorizedaccess": "q-above-all-1",
  "wewillconductthedailystandupfirstafterwardswecanpairprogramonthecriticalbug": "q-afterwards-1",
  "allinallthesprintwasasuccessdespitetheunexpectedinfrastructuredowntime": "q-all-in-all-1",
  "apartfromafewminorstylingquirksonmobilethewebapplicationisreadyfordeploy": "q-apart-from-1",
  "pleasereviewthepullrequestbeforehandsooursynccallcanbefastandproductive": "q-beforehand-1",
  "thebuildpipelinefailedconsequentlynonewartifactsweredeployedtostaging": "q-consequently-1",
  "myteambuiltapocproofofconceptanddefinitelywecandelivertheprogram": "q-definitely-1",
  "writingcleancodeandwritingcomprehensiveautomatedtestsareequallyimportant": "q-equally-1",
  "thenewcomponentarchitectureiscleanerfurthermoreitrenderstwiceasfast": "q-furthermore-1",
  "incontrasttolegacymonolithicapplicationsmicroservicesscaleindependently": "q-in-contrast-1",
  "thesecurityauditwasthoroughinshortallvulnerabilitytestspassedwithoutissue": "q-in-short-1",
  "theperformancebottleneckwastrickytoisolateneverthelessourteamresolveditbeforerelease": "q-nevertheless-1",
  "therefactoringwasriskynonethelessitdecreasedtechnicaldebtsubstantially": "q-nonetheless-1",
  "thedatabaseclusterdidnotcrashnordiditloseanyusertransactions": "q-nor-1",
  "therewereminorbumpsduringonboardingbutonthewholethenewdevelopersareperformingbrilliantly": "q-on-the-whole-1",
  "wewilltriggertheproductionreleaseonlyifallautomatedendtoendcheckssucceed": "q-only-if-1",
  "weneedtooptimizememoryusageparticularlywhenprocessinglargecsvfiles": "q-particularly-1",
  "sinceyouarealreadyproficientintypescriptlearningreact19willbeveryfast": "q-since-1",
  "modernfrontendlibrariessuchasreactandvueutilizevirtualdomorfinegrainedreactivity": "q-such-as-1",
  "summingupourunittestcoveragehit90andallsprintgoalswerereached": "q-summing-up-1",
  "weenabledresponsecachingonthereverseproxythuscuttingapilatencybyhalf": "q-thus-1",
  "tosumupmasteringenglishconnectorsiscriticalforclearinternationalengineeringcollaboration": "q-to-sum-up-1",
  "theengineeringsquadmademajorstridestowardsshippingthenewmicroservice": "q-towards-1",
  "unlikedynamiclanguagestypescriptcatchestyposandtypemismatchesatcompiletime": "q-unlike-1",
  "whateveroccursduringthelivedemonstrationmaintainyourfocusandnoteanyedgecases": "q-whatever-1",
  "wheneveryoupushnewcommitstogithubgithubactionsrunstheautomatedtestsuite": "q-whenever-1",
  "thearchitectmustdecidewhethertooptimizetheexistingdatabaseschemaormigratetonosql": "q-whether-1",
  "thecodestructureisminimalandsimpleyetremarkablyresilientunderheavyload": "q-yet-1",
  "aboveallwemustguaranteethatuserpasswordsandpersonaldataareencryptedbeforelaunchingthenewpaymentfeature": "q-above-all-security",
  "grmiohasmanytacticaladjustmentstomakebutabovealltheplayersneedtoshowpassionanddeterminationonthepitch": "q-above-all-gremio",
  "seniorengineersknowthatperformanceisimportantbutaboveallcleanandreadablecodeensureslongtermsystemmaintainability": "q-above-all-code-clarity",
  "whenplanningourvacationcinthiaandiconsideredbudgetandflightsbutaboveallwewantedaquietplacetorelax": "q-above-all-cinthia",
  "inanagilesquadtechnicalskillsmatterbutaboveallempathyandactivelisteningduringdailymeetingsbuildrealcollaboration": "q-above-all-daily-respect",
  "theprojectmanagerthoughtwestillhadplentyoffundsleftactuallyourbudgetisalmostdone": "q-actually-budget-done",
  "yousaidthatyourprojectwasontimebutactuallyyourprojectisrunningoutoftime": "q-actually-time-running-out",
  "yesterdayineededtogototheofficebycarbecausethebushadalreadyleftactuallyididntwanttotakethebusipreferdriving": "q-actually-drive-to-office",
  "donttrytosugarcoattheoutagereportactuallythetruthisworsethanyoucanimagine": "q-actually-truth-worse",
  "ihadanintenseworkoutatthegymandafterwardsiwenthometotakeashowerandrest": "q-afterwards-gym-home",
  "cinthiaandihaddinneratalovelyitalianrestaurantandwentforawalkafterwards": "q-afterwards-dinner-walk",
  "illfinishmyenglishgrammarlessonnowandillcallyouafterwards": "q-afterwards-call-you",
  "wefacedtwounexpectedproductionbugsandacloudoutagebutallinallthesprintwasamajorsuccess": "q-all-in-all-sprint-success",
  "ourflightwasdelayedbytwohoursandtheweatherwasrainybutallinallthetripwithcinthiawaswonderful": "q-all-in-all-trip-cinthia",
  "allinallourconsultancydelivered95ofthedeliverableswithintheagreedbudgetandsla": "q-all-in-all-client-qbr",
  "grmiohadtacticalupsanddownsduringthechampionshipbutallinallqualifyingforthelibertadoreswasachieved": "q-all-in-all-gremio-season",
  "althoughitsharderthanithoughtiwillmakeitbymyselfanddeliverthismicroserviceonschedule": "q-although-harder-than-thought",
  "althoughyouareahardpersontodealwithsometimesistillloveandrespectyourhonesty": "q-although-hard-person",
  "althoughyoudidntcometothepartylastnightitwasgoodandeveryoneaskedaboutyou": "q-although-party-missed",
  "althoughthedayisntsogoodandtheskyisovercastweneedtogoouttakeawalkandseetheclouds": "q-although-day-clouds-walk",
  "apartfromtheminorcssglitchonthemobileloginscreenthewholeapplicationpassedallautomatedqachecks": "q-apart-from-login-bug",
  "apartfromcinthianobodyinthefamilyknewthatwehadbookedticketsforouranniversarytriptoeurope": "q-apart-from-cinthia-surprise",
  "thenewmicroservicesdeploymentwasfastandreliableapartfromaslightlatencyspikeonthemongodbcluster": "q-apart-from-database-latency",
  "ihadaproductiveweekendstudyingenglishandrestingapartfromtheheartbreakofwatchinggrmioloseinthefinalminutes": "q-apart-from-gremio-match",
  "thedeveloperpushedunreviewedcodedirectlytoproductionwithouttestingasaresulthundredsofangryclientsstartedcallingsupport": "q-as-a-result-client-calls",
  "ireadthesoftwarearchitecturebookthatyoulentmeandasaresultidiscoveredmanyinnovativepatternsformicroservices": "q-as-a-result-study-book",
  "thejuniordeveloperaskedaverythoughtfulquestionduringrefinementandasaresulttheteamcouldfindtherightarchitectureanswer": "q-as-a-result-question-right-answer",
  "asfarascarlostoldmethismorningtheleadershipwillcancelthelegacyprojectandeveryonewillbereallocatedtonewsquads": "q-as-far-as-carlos-reallocation",
  "asfarasthedevopsteamisawaretheawsinfrastructurehasbeenrunningsmoothlywithoutanyalarms": "q-as-far-as-devops-healthy",
  "asfarasourtourguidetoldusincaliforniamichaeljacksonboughtthatfamousestatewhenhewasalive": "q-as-far-as-michael-jackson-house",
  "youwillachievefluentcommunicationandpassyourtechnicalinterviewaslongasyoupracticespeakingeverysingleday": "q-as-long-as-homework-pass",
  "thetechleadtoldtheteamthatremoteworkiscompletelyflexibleaslongaseveryoneattendsthedailystandupontime": "q-as-long-as-remote-daily",
  "idontmindstayingattheofficeuntillatetofinishthisreleaseaslongasweordersomegoodpizzawithcinthia": "q-as-long-as-pizza-office",
  "microservicesarchitectureisacomplextopicandourjuniorengineersneedtostudycloudpatternsaswell": "q-as-well-study-more",
  "aiwillorderthesteakwithfrenchfriesbthatlooksdeliciousithinkiwouldliketoorderthataswell": "q-as-well-daily-plate-restaurant",
  "cinthiatoldmeyouboughtticketstothemusicconcertandshetoldmethatiwasinvitedaswell": "q-as-well-party-invite",
  "thebackendrestapihasalreadybeendockerizedandweconfiguredthefrontendcontaineraswell": "q-as-well-backend-docker",
  "aswellasthemoonisbrightinthenightskyyoursmileilluminatesmyentireworld": "q-as-well-as-eyes-bright",
  "theproductownerisactivelyinvolvedinsprintplanningaswellasbacklogrefinement": "q-as-well-as-planning-refinement",
  "ourcrossplatformflutterapplicationseamlesslysupportsiosaswellasandroiddevices": "q-as-well-as-ios-android",
  "thedeadlineisdemandingbutyouneedtocalmdownandtakeadeepbreathaswellasme": "q-as-well-as-calm-down",
  "theeconomyistoughandlivingcostsarerisingireallyneedthissoftwareengineeringpositionatall": "q-at-all-need-job",
  "myjobattheconsultancyisgettingmorestressfuleverysprintineedavacationsoonatall": "q-at-all-need-vacation",
  "ihavetraveledtomanyeuropeancapitalsbutlondonisthemostvibrantcityihaveevervisitedatall": "q-at-all-london-best-place",
  "thenewhiredidntunderstandthelegacymonolithcodebaseatallbecausetherewasnodocumentation": "q-at-all-not-understand-legacy",
  "withourautomatedrollbackpipelineandextensiveunittestsuitethetechleadisnotworriedatallabouttonightsproductionrelease": "q-at-all-not-worried-deployment",
  "aftersevenexhaustinghoursofanalyzingmemorydumpsandserverlogstheteamfixedthecriticalmemoryleakatlast": "q-at-last-bug-fixed-night",
  "cinthiaandihadbeenwaitingattheairportgateforoverfivehoursatlasttheairlineannouncedboardingforourflight": "q-at-last-vacation-flight",
  "theenterpriseclientapprovedallsecuritycomplianceclausesandwesignedthemultimilliondollarcontractatlast": "q-at-last-contract-signed",
  "beforemergingthispullrequestintomasterourcicdpipelinerequiresatleast85automatedtestcoverage": "q-at-least-unit-tests-coverage",
  "grmiodidntplaytheirbesttacticalgameawayfromhomebutatleasttheymanagedtosecureacrucialdrawinthetournament": "q-at-least-draw-match-gremio",
  "ourscrumteamschedulesatleasttworefinementsessionspersprinttokeeptheuserstorieswellestimated": "q-at-least-three-refinements",
  "thepaymentgatewayrejectedthebulktransactionrequestbecauseourmicroserviceexceededtheratelimitpersecond": "q-because-api-throttled",
  "yesterdaymorningineededtodrivemycartothegftofficebecausethecommuterbushadalreadylefttheterminal": "q-because-bus-already-left",
  "imanagedtocompletemycertificationstudiesontimebecausecinthiasupportedmeandhelpedmanageourdailytasks": "q-because-cinthia-support",
  "theqateamcouldntfinishtheregressiontestinginthestagingenvironmentbecausethebackendserverunexpectedlycrashed": "q-because-server-crashed",
  "theproductionreleasewaspostponeduntiltomorrowmorningbecauseofanunexpectednetworkoutageintheawsuseastregion": "q-because-of-network-outage",
  "wearrivedtenminuteslateforourdinnerreservationwithcinthiabecauseoftheheavytrafficonthehighway": "q-because-of-traffic-jam",
  "thequeryresponsetimeskyrocketedbecauseofanunindexedcollectionlockonthemongodbreplicaset": "q-because-of-mongodb-lock",
  "ifyouwantthearchitecturemeetingtorunefficientlymakesuretoreadtherfcdocumentbeforehand": "q-beforehand-review-pr",
  "thedevopsengineerremindedeveryonethatallsecretsmustbeconfiguredinhashicorpvaultbeforehand": "q-beforehand-clean-code-deploy",
  "valentinesdayrestaurantsgetfullybookedinportoalegresoireservedourfavoritetablebeforehand": "q-beforehand-cinthia-reservation",
  "besidesmasteringdockerandcontainerorchestrationourcloudarchitectsareproficientinterraformandawsautomation": "q-besides-docker-kubernetes",
  "besidesbeingapassionategrmiosupporterheenjoysanalyzingeuropeanfootballtacticsandwatchingthechampionsleague": "q-besides-gremio-fan",
  "thejobofferatthetechconsultingfirmwasveryattractivebesidestheyofferfullremoteflexibilityandanannuallearningbudget": "q-besides-salary-benefits",
  "thereleasedeadlinewasextremelytightbutthedevelopmentsquadworkedtogetheranddeliveredalluserstoriesontime": "q-but-tight-deadline-delivered",
  "iloveauthenticmexicanfoodwithjalapeosandspicysalsabutcinthiaprefersmilderdisheswithfreshguacamole": "q-but-cinthia-spicy-food",
  "grmiocompletelydominatedballpossessionthroughoutthesecondhalfbuttheycouldntscorethewinninggoal": "q-but-gremio-dominated-drew",
  "mongodballowsschemaflexibilityandfastinitialprototypesbutyoustillmustdesignyourindexingstrategycarefullyforproductionscale": "q-but-mongodb-fast-indexing",
  "thesquadleftseveralunoptimizedgpuinstancesrunningovertheentireweekendconsequentlyourawsmonthlybillexceededthebudgetby30": "q-consequently-cloud-costs",
  "wefinishedallsprintdeliverablestwodaysaheadofscheduleconsequentlywewereabletotakefridayoffandtravelwithcinthia": "q-consequently-cinthia-trip",
  "thestrikerscoredtwodecisivegoalsinthefirsthalfconsequentlygrmioadvancedtothegrandfinalofthestatechampionship": "q-consequently-gremio-win-final",
  "currentlyiamworkingasaprojectcoordinatorratherthanwritingrawcodeeveryday": "q-currently-not-coding-pm",
  "ourengineeringsquadiscurrentlyrefactoringourmonolithintocontainerizedspringbootandnodejsmicroservices": "q-currently-migrating-microservices",
  "grmioiscurrentlyoccupyingthirdplaceintheleaguetablefightingforaspotinnextyearscopalibertadores": "q-currently-gremio-table",
  "thisauthenticitaliantrattoriainthecitycenterisdefinitelythebestrestaurantcinthiaandihavediscoveredthisyear": "q-definitely-best-restaurant-cinthia",
  "afterevaluatingthereductioninruntimeerrorsourengineeringteamwilldefinitelyadopttypescriptforallupcomingfrontendprojects": "q-definitely-adopt-typescript",
  "thenewengineeringdocumentationonmicroservicedesignpatternsisdefinitelyworthreadingbeforethesprintstarts": "q-definitely-worth-reading",
  "despitethetorrentialraininportoalegrefiftythousandpassionategrmiofanspackedthearenatosupporttheteam": "q-despite-heavy-rain-stadium",
  "despitethetightdeadlineimposedbythebankingclientthegftconsultancydeliveredthepaymentmodulewithoutanyproductiondefects": "q-despite-tight-deadline-gft",
  "despitethelackofsleepduetoovernightsystemmonitoringtheleadarchitectledanenergeticandinspiringsprintplanningmeeting": "q-despite-lack-of-sleep",
  "despitethehighpricesduringpeakholidayseasoncinthiaandidecidedtobooktheromantichotelbythebeach": "q-despite-high-prices-cinthia",
  "thecustomerportalwillbetemporarilyunavailabletonightfrom2amto4amduetoscheduleddatabasemaintenanceonmongodb": "q-due-to-database-maintenance",
  "thescrummasterwasabsentfromtodaysdailystandupduetoasuddenfeverandflusymptoms": "q-due-to-illness-standup",
  "ourhouserenovationwascompletedtwoweeksaheadofschedulelargelyduetocinthiasdedicationandmanagementofthecontractors": "q-due-to-cinthia-effort",
  "inmodernwebdevelopmentintuitiveuserinterfacedesignisvitalequallyascalableandsecurebackendarchitectureisindispensable": "q-equally-backend-frontend-quality",
  "towinthecuprenatogachoemphasizedthatscoringgoalsiscrucialbutmaintainingadisciplineddefensivelineisequallyimportant": "q-equally-gremio-defense-attack",
  "cinthiaandiagreedthatfinancialplanningandhouseholdchoresshouldbeequallydividedbetweenbothofus": "q-equally-shared-responsibilities-cinthia",
  "codequalityisnotsolelytheresponsibilityofsoftwaredevelopersqasandproductmanagersareequallyaccountablefordeliveringvalue": "q-equally-qa-dev-collaboration",
  "theconcurrencybugwassobizarrethatevenourprincipalarchitectstruggledtoreproduceitonlocalmachines": "q-even-junior-debugged-race-condition",
  "truefansneverabandontheclubevenwhentemperaturesdropnearfreezingthegrmiosupporterssingproudlyatthearena": "q-even-on-rainy-days-gremio",
  "italkaboutprogrammingandtechnologysofrequentlyathomethatevencinthiaknowsthedifferencebetweenabranchandapullrequest": "q-even-cinthia-knows-git",
  "withournewdatabaseindexingstrategyonmongodbqueryexecutionbecameevenfasterthanweinitiallybenchmarked": "q-even-faster-than-expected",
  "ourfinancialtransactionenginewillremainoperationaleveniftheprimaryclouddatabasenodecompletelygoesdown": "q-even-if-server-fails-failover",
  "cinthiaandiwillcelebrateouranniversaryattherooftopbistroevenifitrainsheavilyallevening": "q-even-if-rain-cinthia-dinner",
  "thecoachreassuredthefansthatthesquadwillfightforvictoryeveniftheopponentscoresanearlygoalinthefirsthalf": "q-even-if-gremio-concedes-first",
  "eventhoughthedevopsteamwasutterlyexhaustedafterthemigrationtheystayedonlinetomonitorthemorningtransactionpeak": "q-even-though-exhausted-deployment",
  "eventhoughthenewestflagshipsmartphonewasquiteexpensiveanddidntincludeawallchargercarlosdecidedtopurchaseit": "q-even-though-expensive-iphone",
  "eventhoughgrmiomissedseveralclearopportunitiesinthefirsthalftheymaintainedcomposureandwonthematch21": "q-even-though-gremio-missed-chances",
  "thetestautomationscripthaltedexecutionimmediatelyfortheprimarydatabaseclusterhadreached100cpucapacity": "q-for-server-overloaded-halt",
  "iagreedtorelocateourapartmentwithouthesitationforitrustedcinthiassharpintuitionandcarefulmarketresearchcompletely": "q-for-trusted-cinthia-judgment",
  "thestadiumeruptedinunifiedchantslongbeforekickoffforthesupportersknewthathistorywasabouttobemade": "q-for-gremio-fans-faithful",
  "gftcontinuedtoexpanditstechnicalleadershipincloudsolutionsforthecompanyconsistentlyinvestedinemployeecertificationsandmentoring": "q-for-consultancy-invested-training",
  "ourengineeringorganizationutilizesseveralmoderndeliveryframeworksforinstanceourpaymentssquadreliesonscrumwhiletheoperationsteamuseskanban": "q-for-instance-agile-frameworks",
  "cinthiaandiloveexploringhistoriceuropeancitiesforinstancewespentourlastholidayadmiringthearchitectureofflorenceandrome": "q-for-instance-cinthia-travel-destinations",
  "therearemultiplehighperformancenosqldocumentstoresavailableforinstancemongodballowsflexibleschemaswhilecouchbaseoffersintegratedcaching": "q-for-instance-nosql-databases",
  "grmiohasproducednumerouslegendaryplayersandcoachesthroughoutitshistoryforinstancerenatogachowontitlesasbothastrikerandamanager": "q-for-instance-gremio-legends",
  "breakingthemonolithreducedourdeploymentcyclefromweekstohoursfurthermoreitallowedindependentteamstochoosetheoptimaltechstackforeachdomain": "q-furthermore-microservices-benefits",
  "theengineeringsquaddeliveredthecorebankingfeaturesontimefurthermoreourpostlaunchdefectratedroppedby40comparedtothepreviousquarter": "q-furthermore-gft-client-satisfaction",
  "thenewapartmenthasaspacioushomeofficewithnaturallightfurthermoreitislocatedjustthreeblocksawayfromcinthiasfavoritepark": "q-furthermore-cinthia-apartment-amenities",
  "thejwtauthenticationtokenhadexceededits15minutelifespanhencethegatewayrejectedtheapirequestwitha401unauthorizedstatus": "q-hence-token-expired-unauthorized",
  "asuddenaccidentblockedbothlanesofthehighwayleadingtotheairporthenceourflightdelayandrushedarrivalatthegate": "q-hence-traffic-late-airport",
  "thedefendersmaintainedcompactlinesthroughoutninetyminuteshencetheircleansheetagainstoneofthestrongestattacksintheleague": "q-hence-gremio-tactical-discipline",
  "thejuniordeveloperwasconfidentthatmongodbdidntneedsecondaryindexeshowevertheseniorarchitectadvisedbenchmarkingqueryperformanceunderload": "q-however-experienced-architect-advice",
  "cinthiahadanintensescheduleofclientmeetingsallafternoonhowevershestillfoundtimetojoinmeforadelightfulcoffeebreak": "q-however-cinthia-busy-time-dinner",
  "grmioattackedwithrelentlesspressureandhitthegoalposttwicehowevertheopponentsgoalkeepermademiraculoussavestopreservethedraw": "q-however-gremio-conceded-draw",
  "migratingfiftylegacyservicestoawsrequiredthreemonthsofintensivereengineeringhowevertheoperationalcostsavingsmadetheeffortfullyworthwhile": "q-however-cloud-migration-worth-it",
  "ifallautomatedunitandintegrationtestspasssuccessfullyinjenkinsourpipelinewillautomaticallydeploythecodetoproduction": "q-if-all-tests-pass-deploy",
  "ifgrmiowinssaturdaysclassicderbyatthearenatheywillclimbstraightintothetopfourofthenationalchampionship": "q-if-gremio-wins-top-four",
  "ifcinthiafinishesherclientpresentationearlythiseveningwewillcatchthelatenightmovieatthecinema": "q-if-cinthia-finishes-early-cinema",
  "ifyouencounteranysyntaxissueswhilewritingtheaggregationpipelineonmongodbfeelfreetoreachouttomeonslack": "q-if-you-need-help-mongodb",
  "cinthiaandimanagedtosecureaffordableairlineticketsbecausewepurchasedthemthreemonthsinadvance": "q-in-advance-book-flight-vacation",
  "corporategovernancerequiresouritteamtonotifyenterprisebankingclientsatleast48hoursinadvanceofanymaintenancedowntime": "q-in-advance-notify-downtime-clients",
  "isentthearchitecturalrfcdocumenttothetechleadsandwrotethankyouinadvanceforyourthoughtfulfeedback": "q-in-advance-thank-review-pr",
  "ourmobileclientappcachesthelatestuserdatalocallyonthedeviceincasetheusertemporarilylosesinternetconnectivity": "q-in-case-network-fails-cache",
  "takeyourwaterproofgrmiowindbreakerjacketincasetheweatherforecastturnsrainyduringthederbyatthearena": "q-in-case-rain-arena-gremio",
  "iboughtsomeartisanalcheeseandfreshfruitonthewayhomeincasecinthiafeelshungryafterherlateshift": "q-in-case-cinthia-hungry-late",
  "legacyrelationaldatabasesoftenrequireverticalhardwarescalingincontrastdistributeddocumentstoresscalehorizontallyacrosscommodityclusters": "q-in-contrast-nosql-sql-scaling",
  "scrumorganizesdevelopmentintofixedtimeboxedsprintsincontrastkanbanemphasizescontinuousdeliveryandstrictworkinprogresslimits": "q-in-contrast-scrum-kanban-iterations",
  "ifeelmostenergizedandwritemycleanestcodeearlyinthemorningincontrastcinthiaisanightowlwhodoeshermostcreativeworklateatnight": "q-in-contrast-cinthia-morning-evening",
  "grmiostruggledwithtacticalsluggishnessduringtheopeningthirtyminutesincontrasttheirsecondhalfperformancewaselectrifyingandrelentless": "q-in-contrast-gremio-first-second-half",
  "manysoapoperashavememorableantagonistsbutpaolabrachoinausurpadoraisinfactthemosticonicvillainintelevisionhistory": "q-in-fact-paola-bracho-villain",
  "europeanteamshavedominatedrecenttournamentsbutbrazilisinfacttheonlynationalteamthathaswonthefifaworldcupfivetimes": "q-in-fact-brazil-five-titles",
  "thestakeholdersexpectedmodestlatencygainsafterthemigrationinfactthemicroservicearchitectureimprovedresponsetimesbyover60": "q-in-fact-cloud-faster-expected",
  "developersmustsanitizeallincomingqueryparametersandusepreparedstatementsinordertopreventsqlinjectionattacks": "q-in-order-to-prevent-sql-injection",
  "iarrivedhomethirtyminutesearlyandlitscentedcandlesinordertosurprisecinthiaonouranniversarydinner": "q-in-order-to-surprise-cinthia",
  "inordertowinthedecisivematchatthearenarenatogachointensifiedtacticaltransitiondrillsthroughouttheentireweek": "q-in-order-to-win-gremio-intensified",
  "allregressiontestspassedsecuritycompliancewassignedoffandmonitoringdashboardsaregreeninshorttheplatformisreadyforproduction": "q-in-short-release-status",
  "soliddefensedisciplinedmidfieldandclinicalfinishinginfrontofgoalinshortgrmioplayedliketruechampionstonight": "q-in-short-gremio-champion-performance",
  "wesharevaluessupporteachotherscareerambitionsandlaughtogethereverysingledayinshortlivingwithcinthiaispurejoy": "q-in-short-cinthia-relationship",
  "elasticscalingpayasyougopricingandautomatedhighavailabilityacrossglobalzonesinshortcloudinfrastructurerevolutionizedtheitmarket": "q-in-short-cloud-advantages",
  "elasticscalingpayasyougopricingandautomatedhighavailabilityacrossglobalzonesinshortcloudinfrastructurerevolutionizouomercadodeti": "q-in-short-cloud-advantages",
  "inspiteofthesevereregionalcloudoutagethegftengineerssuccessfullyreroutedtrafficandmaintainedzerocustomerdataloss": "q-in-spite-of-cloud-outage-gft",
  "inspiteoffeelingexhaustedafterachallengingsprintdeploymentiwenttothegymwithcinthiatoworkoutanddecompress": "q-in-spite-of-exhaustion-gym",
  "inspiteofthefreezingblizzardanddelaysattheairportourinternationalflightlandedsafelyinlondon": "q-in-spite-of-heavy-snow-flight",
  "inspiteofseveralquestionabledecisionsbytherefereegrmiostayedfocusedandsecuredanepic32victoryatthearena": "q-in-spite-of-referee-mistakes-gremio",
  "microservicesintroducesignificantarchitecturalflexibilityindeedmanagingdistributedtracingandobservabilityrequiresdisciplinedtooling": "q-indeed-microservices-complex",
  "hercolleaguespraisedherstrategicvisionduringthereorganizationsheisindeedoneofthemosttalentedleadersinthebusinessunit": "q-indeed-cinthia-talented-leader",
  "withthreecopalibertadorestitlesandanintercontinentalcupgrmiohasindeedwrittensomeofthemostgloriouschaptersinsouthamericanfootball": "q-indeed-gremio-tricolor-tradition",
  "adoptingdomaindrivendesignfeltslowduringthefirsttwosprintsindeedrefactoringdownstreambecameeffortlessasbusinesslogicgrew": "q-indeed-clean-architecture-saves-time",
  "insteadofexecutingmanualregressionchecklistsbeforeeverysprintreleaseourteamimplementedautomatedcypressandjesttestsuites": "q-instead-of-manual-qa-automated",
  "insteadofeatingoutatanoisyrestaurantonfridaynightcinthiaandicookedhomemadepastaandenjoyedaquieteveningtogether": "q-instead-of-eating-out-cinthia",
  "wedecidedtodecoupleourorderingandinvoicingmicroservicesusingkafkamessagequeuesinsteadofsynchronoushttprestcoupling": "q-instead-of-direct-http-queues",
  "seniorengineersmustsubmittheircodeforpeerreviewlikewisejuniordevelopersshouldparticipateactivelyinreviewingarchitectureprs": "q-likewise-seniors-juniors-reviews",
  "iamdedicatedtoexpandingmysoftwareleadershipskillsatgftlikewisecinthiaispursuingadvancedprofessionalcertificationsinherfield": "q-likewise-cinthia-career-growth",
  "highqualitysoftwarerequirescomprehensiveautomatedtestsuiteslikewiseclearandupdatedapidocumentationisvitalfordeveloperadoption": "q-likewise-tests-documentation",
  "thebackendengineersweredesigningthemongodbdatabaseschemasandauthenticationendpointsmeanwhilethefrontendteambuiltresponsivefigmaprototypes": "q-meanwhile-frontend-backend-parallel",
  "thegrmiosquadconductedrigoroustacticaldrillsatthetraininggroundmeanwhilerenatogachoaddressedthemediainahighstakespressconference": "q-meanwhile-gremio-renato-press",
  "ourconsultingteamoperatesmostlyremotelyvisitingtheclientscorporateofficeonlyonceamonthforexecutivesteeringmeetings": "q-mostly-remote-work-consultancy",
  "thenewmicroservicessquadiscomposedmostlyofambitiousjuniordeveloperseagertolearncloudanddevopspractices": "q-mostly-junior-team-support",
  "whenselectingholidaydestinationscinthiaandilookmostlyforcharmingcoastaltownswithscenicwalkingtrailsandfreshseafood": "q-mostly-cinthia-travel-preferences",
  "ourmonthlycloudinfrastructurebudgetisspentmostlyonmultiregionmongodbdatabaseclustersandkafkastreamingbrokers": "q-mostly-cloud-infrastructure-spend",
  "duringthederbyinportoalegrethesouthernstandwasoccupiedmostlybyroaringgrmiofanssingingtheclubsanthems": "q-mostly-gremio-fans-arena",
  "thelegacycodebasewasnotoriouslyundocumentedandfragileneverthelessthesquadrefactoredthecorecalculationenginewithoutcausinganyregressionbugs": "q-nevertheless-legacy-code-refactored",
  "cinthiawasexhaustedafterpreparingtheannualstrategyreportneverthelesssheputonherrunningshoesandjoinedmeforoureveningstrollinthepark": "q-nevertheless-cinthia-tired-walk",
  "grmiohadtheirprimarycentraldefendersentoffinthe60thminuteneverthelesstheremainingtenplayersdefendedheroicallyandsecuredthe10victory": "q-nevertheless-gremio-red-card-held",
  "initialcloudinfrastructuremigrationexpensesexceededourquarterlyforecastneverthelessthelongtermscalabilityandoperationalelasticityjustifiedtheinvestment": "q-nevertheless-cloud-costs-investment",
  "ourengineeringsquadhasmigratedallpaymentworkflowstoeventdrivenarchitecturessowenolongermaintainthelegacysoapendpoints": "q-no-longer-legacy-soap-apis",
  "henolongerworksasacontractorattheconsultancybecauseheacceptedanexecutiveengineeringpositionataninternationalfintech": "q-no-longer-gft-consultant-contract",
  "sinceswitchingtoafulltimeremoteroleatgftinolongerlosetwohourseverydaystuckinhighwaytraffic": "q-no-longer-commute-remote",
  "theclientsregulatorycompliancespecificationswereextraordinarilyconvolutednonethelesstheengineeringteamdeliveredthesolutionwithinthedesignatedsprint": "q-nonetheless-complex-specs-delivered",
  "cinthiaspenttenhoursfacilitatingclientworkshopstodaynonethelessshehadabrightsmileonherfacewhenwemetfordinner": "q-nonetheless-tired-cinthia-dinner",
  "grmiohadthreekeymidfielderssidelinedwithmuscleinjuriesnonethelessthesquaddisplayedimmensegritandcontrolledthemidfieldtempo": "q-nonetheless-gremio-injuries-competed",
  "enterprisedatabasetoolinglicenseswereundeniablysteepnonethelessthe247missioncriticalsupportslagavetheboardabsolutepeaceofmind": "q-nonetheless-high-licensing-costs",
  "awouldyoulikeanespressooracupofenglishteabactuallyidrinkneithercoffeenorteaistronglyprefercoldsparklingwater": "q-nor-neither-coffee-tea",
  "forthislightweightserverlessfunctionourcloudarchitectswantneitherheavyweightjavaruntimesnorcomplexspringbootconfigurations": "q-nor-neither-java-spring",
  "theprimaryloadbalancerdidntredirecttrafficduringthefailoverdrillnordidtheautomatedrecoveryscriptlaunchbackupcontainers": "q-nor-did-the-server-restart",
  "monolithicarchitecturessimplifylocaldebugginganddeploymentpipelinesontheotherhandmicroservicesprovideunparalleledindependentscalingforlargesquads": "q-on-the-other-hand-monolith-vs-microservices",
  "thedowntownloftisclosertoourfavoriterestaurantsandculturaleventsontheotherhandthesuburbanhouseoffersaquietgardenandmuchmorespaceforcinthiaandme": "q-on-the-other-hand-cinthia-apartment-options",
  "experiencedveteransbringcomposureandtacticalintelligenceduringhighpressurefinalsontheotherhandyoungacademyplayersinjectrelentlessstaminaandfearlesspace": "q-on-the-other-hand-gremio-veteran-youth",
  "whiletherewereinitialcommunicationfrictionsduringsprintretrospectivesonthewholeouragiletransformationhasdramaticallyimprovedteammoraleanddeliveryvelocity": "q-on-the-whole-agile-transformation",
  "despitetwominortraindelaysbetweenmilanandveniceonthewholeourromanticvacationinitalywasoneofthehappiestexperiencescinthiaandihaveevershared": "q-on-the-whole-cinthia-vacation-italy",
  "althoughgrmionarrowlymissedoutonwinningthenationalcupfinalonthewholethetacticalevolutionunderrenatogachorestoredourchampionshippride": "q-on-the-whole-gremio-season-review",
  "minorquerylatencyspikesoccurredduringblackfridaytrafficpeaksbutonthewholethemongodbreplicaclustermaintained9999availabilitythroughouttheevent": "q-on-the-whole-mongodb-cluster-health",
  "theleaddevopsengineerwilltriggertheproductiondeploymentpipelineonlyifthesecurityscanningsuitereportszerocriticalvulnerabilities": "q-only-if-production-deploy-passed-tests",
  "mycolleaguesinvitedmetothetechconsultancyrooftopcocktailbutitoldthemiwillattendonlyifcinthiacancomealongwithme": "q-only-if-cinthia-goes-party",
  "makesuretopushyourlocalgitbranchestogithubbeforeleavingtheofficeoryourisklosingyouruncommittedworkifyourmachinerestarts": "q-or-commit-changes-lose-work",
  "inthemorningcinthiausuallyaskswouldyoupreferfreshlybreweddripcoffeeorawarmcupofgreentea": "q-or-tea-coffee-cinthia-morning",
  "asoftwareengineeringteamcanadopttimeboxedsprintswithscrumortheycanoptforcontinuousflowmanagementwithkanban": "q-or-scrum-kanban-choice",
  "tosecureaspotinthecopalibertadoresknockoutphasegrmiomustwintonightsmatchorsecureatleastascoredrawawayfromhome": "q-or-win-draw-gremio-qualification",
  "wemustscaleupourmongodbdatabaseclusterbeforetheflashsalebeginsorourpaymentcheckoutwillcrashundersuddenload": "q-or-upgrade-server-crash",
  "firstillpolitelycalltheflightattendantotherwiseiwillcall911andletthemhandletheunrulypassenger": "q-otherwise-airplane-call-attendant",
  "ourinfrastructureteammustrenewtheexpiringsslcertificatestodayotherwisewebbrowserswillflagourbankingportalasunsecure": "q-otherwise-renew-ssl-certs",
  "ienjoydesigningscalabledatabasesolutionsparticularlywhencraftingcomplexaggregationpipelinesinmongodb": "q-particularly-nosql-mongodb-aggregations",
  "passionatefootballsupportersinriograndedosulliveforclassicderbymatchesparticularlythefiercerivalrybetweengrmioandinternacional": "q-particularly-gremio-derby-passion",
  "cinthiaisanaccomplishedhomechefparticularlyrenownedamongourfriendsforherauthentichomemaderisottosandfreshpastas": "q-particularly-cinthia-culinary-skills",
  "distributedarchitecturesrequirerobusttoolingparticularlycentralizedlogginganddistributedtracingtotroubleshootlatencybottlenecks": "q-particularly-microservices-observability",
  "wheniwasyoungerinportoalegreipreferredtoplaysoccerratherthanhideandseekwiththeneighborhoodkids": "q-rather-than-play-soccer-hide-seek",
  "fridayismyfavoritedayfordeepcleaningourhomeialwaysprefertostartinthehomeofficeratherthanthekitchen": "q-rather-than-cleaning-office-kitchen",
  "onwarmsunnyafternoonsiprefertodrinkfreshicedtearatherthanhotcoffeealthoughienjoybothbeverages": "q-rather-than-coffee-tea-preference",
  "ourarchitectsdecidedtoimplementasynchronouskafkaqueuesratherthantightsynchronousrestcouplingbetweenmicroservices": "q-rather-than-async-queues-sync-coupling",
  "mylifehasbecomesomuchmorejoyfulandgroundedsinceihaveknowncinthiasince2024": "q-since-cinthia-known-2024",
  "ihaveexpandedmyinternationalconsultingexpertisesignificantlysinceihavebeenworkingatgftsince2022": "q-since-gft-working-2022",
  "sincethescrummasterwasfacilitatinganurgentexecutiveescalationthemorningdailystandupwasconductedasynchronouslyonslack": "q-since-daily-canceled-slack",
  "actuallyimnotworkingasahandsonsoftwaredeveloperrightnowsoidontcodeinpythonorjavaonadailybasis": "q-so-not-dev-anymore",
  "leomessihasdribbledpastdefendersandwoneightballondortrophiessoitisimpossiblenottoconsiderhimoneofthegreatestathletesinhistory": "q-so-messi-joke",
  "grmioclinchedthechampionshiptrophywithaspectacularfreekickinthe90thminutesotheentirecityofportoalegrecelebrateduntildawn": "q-so-gremio-champion-celebration",
  "weconfiguredcomprehensiveautomatedtestpipelinesinjenkinsandgithubactionssothatdeveloperscanmergepullrequestswithhighconfidence": "q-so-that-ci-cd-automate-fast",
  "ifinishedallhouseholdchoresandmealpreparationsonfridayeveningsothatcinthiaandicouldenjoyacompletelypeacefulandrelaxingweekend": "q-so-that-cinthia-relax-weekend",
  "thedatabaseadministratorsconfiguredshardkeysacrossmultiplegeographiczonessothatourmongodbclustercouldhandlemillionsofconcurrentqueries": "q-so-that-mongodb-shard-scale",
  "designingafinancialcoreenginewithzerodowntimefailoverissuchachallengingarchitecturaltaskthatonlyseniorengineersareassignedtoit": "q-such-a-complex-architecture",
  "thegrenalmatchatthearenadogrmiogeneratessuchanintenseemotionalatmospherethatfootballanalystsworldwidepraiseitsuniquerivalry": "q-such-a-passionate-derby-gremio",
  "cinthiaissuchaninspiringsupportiveandgenerouspartnerthateverydaytogetherfeelslikeanupliftingblessing": "q-such-a-wonderful-partner-cinthia",
  "theseniorconsultantsatgftprovidesuchvaluableguidancetojuniordevelopersthattechnicalskillsacceleratewithinmonths": "q-such-great-mentorship-gft",
  "duringthefourhourbankingoutagetheincidentresponsesquaddemonstratedsuchcomposurethatallcriticaldatabaseswererestoredsafely": "q-such-resilience-under-pressure",
  "modernenterpriseitconsultanciesadoptprovendeliverymethodologiessuchasscrumkanbanandsafetocoordinatecrossfunctionalteams": "q-such-as-agile-frameworks-scrum-safe",
  "duringoursafaridocumentarymarathoncinthiaandilearnedfascinatingfactsaboutpredatorywildanimalssuchastigerslionsandleopards": "q-such-as-wild-animals-tigers-lions",
  "wecompleted42storypointsresolvedthreelongstandingtechdebtsandonboardedtwojuniorengineerssummingupthissprintwasourmostimpactfulonethisquarter": "q-summing-up-sprint-retro-wins",
  "warmsunnybeacheshistoricarchitecturemouthwateringlocalcuisineandunforgettableconversationswithcinthiasummingupitwasthebestholidayofourlives": "q-summing-up-cinthia-trip-memories",
  "aresilientdefenseaninspiredtacticalshiftunderrenatoportalupiandunwaveringsupportfromfiftythousandfansatthearenasummingupgrmioisbackattheelitelevel": "q-summing-up-gremio-season-verdict",
  "zerodowntimeduringdnscutoverzerodatacorruptioninmongodbandlatencydroppedby35summingupthecloudmigrationsurpassedallslatargets": "q-summing-up-cloud-migration-audit",
  "yesterdaywasaterribledayforfootballfansgrmioconcededinthelastminuteandlostthematchthatswhyifeltsodisappointedandhadacoldbeerwithfriends": "q-thats-why-gremio-lost-drank",
  "youdidntcreatetheappropriateindexonthecollectioninmongodbthatswhythedashboardquerieswererunningsoslowlyandtimingout": "q-thats-why-mongodb-table-collection",
  "cinthiasuccessfullydefendedhermastersdissertationwithhonorstodaythatswhyiarrivedhomeearlywithabouquetoffreshsunflowerstocelebrate": "q-thats-why-cinthia-surprised-flowers",
  "theproductownerdefinedthesprintgoalandpresentedtherefinedbacklogstoriesthenthedevelopersestimatedthestorypointsandcommittedtodelivery": "q-then-sprint-planning-stories",
  "wewillfinishourworkoutsessionatthegymstopbytheorganicmarkettopickupfreshingredientsandthencookadeliciousdinnertogether": "q-then-finish-gym-cook-cinthia",
  "ensurethatpeercodereviewapprovalsarereceivedrunthefinalintegrationtestslocallyandthenmergethebranchintomaster": "q-then-merge-pr-deploy",
  "thesmoketestsuitedetectedanunhandlednullpointerexceptionintheauthenticationservicethereforethepipelineaborteddeploymentandinitiatedanautomatedrollback": "q-therefore-pipeline-failed-rolled-back",
  "cinthiaexceededallcorporaterevenuetargetsforthreeconsecutivequartersthereforetheexecutiveleadershippromotedhertoseniordirector": "q-therefore-cinthia-promoted-celebration",
  "grmioconcededzerogoalsacrossthetwolegsofthesemifinaltiethereforetheyrightfullyclaimedtheirplaceinthecopalibertadoresgrandfinal": "q-therefore-gremio-clean-sheet-qualified",
  "thenewcompliancemandaterequiresimmediateencryptionofallcustomertaxidsatrestthereforeoursquadmustexecuteaschemamigrationonmongodbtonight": "q-therefore-mongodb-schema-migration",
  "itwasaverytoughanddemandingdayattheconsultancyimanagedtodelivereverythingthatineededtothough": "q-though-hard-day-did-everything",
  "palmeirasplayedwithhighpressingandcreateddangerouscounterattacksgrmiowalkedawaywiththethreepointsinsopaulothough": "q-though-palmeiras-gremio-match",
  "therestaurantwascompletelypackedandwehadtowaittwentyminutesforourtablethehomemadepastawasabsolutelydeliciousthough": "q-though-cinthia-tired-dinner",
  "thesquadincreasedautomatedtestcoverageacrossallmicroservicerepositoriesto92thusmanualregressionqaeffortwasdramaticallyreduced": "q-thus-automation-reduced-manual-effort",
  "thedatabasearchitectaddedcompoundindexescoveringcustomeridandtransactiondatethusqueryexecutionlatencydroppedfrom800msto12ms": "q-thus-indexed-mongodb-speed",
  "cinthiaandisystematicallyautomatedourmonthlysavingsintodiversifiedglobalindexfundsthusourlongtermfinancialsecuritygrewsteadily": "q-thus-cinthia-investment-growth",
  "allfiftymicroservicesweremigratedtokubernetesdatabasereplicationsremainedinsyncandusertrafficflowedwithoutinterruptionstosumupthecloudtransitionwasatriumph": "q-to-sum-up-production-deployment-success",
  "breathtakingtuscanlandscapeswarmsunnyweatherexquisiteitaliancuisineandgreatlaughterwithcinthiatosumupitwasanunforgettablevacation": "q-to-sum-up-cinthia-florence-trip",
  "aresilientdefensiveshapeclinicalcounterattacksdownthewingsandheroicsavesbyourgoalkeepertosumupgrmioearnedamasterclassderbyvictory": "q-to-sum-up-gremio-derby-tactics",
  "everydailystandupcommitmentmadebytheengineeringteamisadeliberatesteptowardsachievingouroverarchingquarterlysprintgoal": "q-towards-sprint-goal-progress",
  "cinthiaandidepositafixedportionofourmonthlyconsultingbonusesintoadesignatedsavingsfundtowardsbuyingourdreamhome": "q-towards-cinthia-future-home",
  "winningthreeconsecutiveawaymatchesgavegrmioimmensemomentumtowardssecuringthenationalleaguechampionshiptitle": "q-towards-championship-title-gremio",
  "ourbranchprotectionruleswillpreventanydeveloperfrommergingcodeintomasterunlessallunitintegrationandsecurityscanspasswith100success": "q-unless-ci-tests-pass-no-merge",
  "intheknockoutstageofthetournamentgrmiowillbeeliminatedonaggregatescoreunlesstheyscoreatleasttwogoalsinthesecondhalf": "q-unless-gremio-scores-eliminated",
  "wearescheduledtoattendourfriendsweddingbanquettomorrowbutwewillstayhomeandrestunlesscinthiafeelscompletelyrecoveredfromhercold": "q-unless-cinthia-feels-better-stay-home",
  "unlikemonolithicarchitectureswhereasinglememoryleakcancrashtheentiresystemmicroservicesisolatefailureswithinindividualcontainers": "q-unlike-monolith-microservices-isolated",
  "unlikemypreviousonsitejobwhereicommutedtwohourseverydaymycurrentconsultingpositionatgftisfullyflexibleandremote": "q-unlike-previous-job-remote-gft",
  "whateverunforeseenarchitecturalhurdlesemergeduringthecloudmigrationourseniorgftsquadhastheexpertisetosolvethemrapidly": "q-whatever-hurdles-gft-delivers",
  "itrustherculinarytastecompletelysowhateverdishcinthiaselectsfromtheitalianmenutonightiwillhappilyshareitwithher": "q-whatever-cinthia-chooses-menu",
  "whatevertheweatherbringstoportoalegreonderbysundayheavyrainbittercoldorscorchingheatthegrmiosupporterswillpackthearena": "q-whatever-weather-gremio-arena",
  "whatevercollectionstructureyoudefineinmongodbrememberthatcreatingpropercompoundindexesiswhatensureslightningfastqueries": "q-whatever-database-mongodb-fast",
  "wheneveracriticalmicroserviceoutageoccursinproductionpagerdutyautomaticallytriggersalertnotificationstotheoncallengineersphone": "q-whenever-incident-pagerduty-alert",
  "whenevergrmioscoresadecisivegoalatthearenafiftythousandfansleapfromtheirseatswavingflagsandsingingtheclubsbattleanthem": "q-whenever-gremio-scores-arena-erupts",
  "whenevercinthiasmilesandsharesawarmhugafteralongdayofconsultingmeetingsallmyworkplacestressinstantlymeltsaway": "q-whenever-cinthia-smiles-day-brightens",
  "scrumorganizessoftwaredeliveryintofixedtimeboxedsprintswhereaskanbanfocusesoncontinuousflowandstrictworkinprogresslimits": "q-whereas-scrum-sprints-kanban-flow",
  "traditionalsqlrelationaldatabasesstrictlyprioritizeacidtransactionguaranteeswhereasdocumentstoreslikemongodboptimizeforhorizontalscalingandschemaflexibility": "q-whereas-sql-acid-mongodb-flexibility",
  "iliketooutlineourweekendactivitiesandpreparedetaileditinerarieswhereascinthiaprefersspontaneousroadtripswithroomforserendipity": "q-whereas-cinthia-morning-planner-spontaneous",
  "moderncloudtechnologiesallowourgftconsultingsquadtodelivermissioncriticalbankingsoftwarewhereverwearelocatedintheworld": "q-wherever-cloud-consulting-gft",
  "thegrmiosupportersarefamousfortheirdevotionwherevertheteamtravelsacrosssouthamericaforthelibertadoresblueandblackbannersfilltheawaystands": "q-wherever-gremio-plays-fans-travel",
  "homeisnotmerelyageographicaddresswherevercinthiaandiaretogetherthatplacefeelswarmjoyfulandcompletelysecure": "q-wherever-cinthia-travels-home",
  "ourdistributedenterprisearchitectureensuresthatwhereverourmongodbclustersaredeployedawsazureorgcpdataissynchronizedinnearrealtime": "q-wherever-mongodb-deployed-replicated",
  "insoftwareengineeringcommunitieswhereveryoufinddeveloperspassionateaboutcleancodeyouwilldiscovergreatcollaborationandcontinuouslearning": "q-wherever-you-find-passion-tech",
  "whetheryourengineeringsquadchoosesscrumwithfixediterationsorkanbanwithcontinuousdeliveryestablishingpsychologicalsafetyisparamount": "q-whether-scrum-or-kanban-agile",
  "whetheritturnsouttobesunnyorrainythisweekendinportoalegrecinthiaandihaveplannedfunactivitiestocelebrateouranniversary": "q-whether-rain-or-shine-cinthia",
  "whilethebackendengineersimplementedthemongodbaggregationqueriesthefrontendsquadbuiltresponsiveuicomponentsinreact": "q-while-frontend-develops-backend-apis",
  "whilegrmiomaintainedrelentlesspossessionintheoffensivehalftheopponentstayeddefensivelyorganizedlookingforcounterattacks": "q-while-gremio-attacked-opponent-countered",
  "thepaymentmicroservicecodebaseisremarkablycompactandconciseyetitreliablyprocessesthousandsoffinancialtransactionseverysecond": "q-yet-simple-architecture-reliable",
  "thesupportershadtraveledeighteenlonghoursbybusacrossthecountryyettheirthunderousvoicesechoedthroughthestadiumuntilthefinalwhistle": "q-yet-exhausted-gremio-fans-cheered"
};

export const PROMPT_TO_ID_MAP: Record<string, string> = {
  "whenyoubuyanewiphoneyouneedtobuythechargerseparatelyitwontcomethephone": "q-user-along-with-iphone",
  "thescrummastermadetheretrospectivethedevelopersandtheqas": "q-user-along-with-scrum",
  "imadeanappointmentinarestaurantandcinthiawillgome": "q-user-along-with-cinthia",
  "grmiolostonemorematchonsaturdayandthemanagerwasfired": "q-user-as-a-result-gremio",
  "iknowrebecadeliveredtheprojectontime": "q-user-as-far-as-rebeca",
  "theclientsaidtometheproblemisthatthescreendoesntwork": "q-user-as-far-as-screen",
  "theteamneedsasoftwaredeveloperaqa": "q-user-as-well-as-qa",
  "renatogachosignedwithgrmio": "q-user-at-last-gremio",
  "althoughididntstudyenoughistudiedmaththehardestone": "q-user-at-least-math",
  "myteammadeapocproofofconceptandwecanbuildtheprogram": "q-user-definitely-poc",
  "thefrontendengineersstartedbuildingtheuserinterfacethebackendteamsetupthedatabaseschemasandauthenticationendpoints": "q-user-meanwhile-tech",
  "welikeneitherjavaspringframeworks": "q-user-nor-tech",
  "imgoingtothepartycinthiagoestoo": "q-user-only-if-cinthia",
  "firstillcalltheflightattendantiwillcall911andtheyfightelesquelutem": "q-user-otherwise-joke",
  "ihavebeenworkingatgft2022": "q-user-since-gft",
  "actuallyimnotworkingasasoftwaredeveloperidontcodeanymore": "q-user-so-career",
  "whenwemanageprojectsitsnecessarytousesomeframeworksscrumandsafe": "q-user-such-as-frameworks",
  "youdidntfixthetableonmongodbtheproblemwasntsolved": "q-user-thats-why-mongodb",
  "weheldthesprintplanningmeetingtheteambeganworkingonthestories": "q-user-then-sprint",
  "itwasaverytoughdayidideverythingthatineededto": "q-user-though-tough-day",
  "thesquadincreasedautomationcoveragemanualeffortwasreduced": "q-user-thus-automation",
  "afterallthatyousaidyoufinishedthedeploymentinproduction": "q-user-to-sum-up-prod",
  "mypreviousjobmycurrentjobisfullyremote": "q-user-unlike-remote",
  "scrumfocusesonshortiterationskanbanfocusesoncontinuousflow": "q-user-whereas-scrum-kanban",
  "weneedtodecidetostayorleave": "q-user-whether-decide",
  "theprojectwassuccessfulitwasveryexpensive": "q-user-while-expensive",
  "thetaskwasdifficultwemanagedtofinishit": "q-user-yet-task",
  "imnotpaolabrachoimanusurpadora": "q-user-in-fact-paola",
  "icantcomeinadvanceicalledleomessitoinformyoudoyouknowhim": "q-user-so-messi",
  "alltheengineeringsquadmustensurethatcustomerdataissecurelyencryptedatrest": "q-tech-above-all-security",
  "wewillexecutethedatabasemigrationscriptfirstwewillverifytableindexesandcacheconsistency": "q-tech-afterwards-migration",
  "wefacedtwoflakyautomatedtestsbutinallthesquadmeteverysinglesprintgoal": "q-tech-all-in-all-sprint",
  "fromaminorcssformattingissueonthenavbarthepullrequestlookscleanandreadytomerge": "q-tech-apart-from-pr",
  "youcanpushyourhotfixtostagingasallautomatedsmoketestspasssuccessfully": "q-tech-as-long-as-deploy",
  "thedockercontainerfailedtostartamissingenvironmentvariableintheproductionconfig": "q-tech-because-of-env",
  "theproductownerrefinescomplexuserstoriessothatdevelopersfacezeroambiguityduringsprintplanning": "q-tech-beforehand-backlog",
  "thisrediscachinglayerreducesdatabaseloaditslashesapiresponsetimesfrom400msdownto18ms": "q-tech-besides-cache",
  "thesquaddidnotmockexternalpaymentendpointstheautomatedpipelinetimedoutduringunittesting": "q-tech-consequently-tests",
  "ourengineeringorganizationismigratingallonpremisemicroservicestoamanagedkubernetescluster": "q-tech-currently-cloud",
  "thereleasefreezewasenforcedhightrafficvolumeexpectedduringblackfridayweek": "q-tech-due-to-black-friday",
  "iftheprimaryauthenticationprovidergoesdownourservicemaintainssessionvalidationviajwtsignatures": "q-tech-even-if-auth",
  "thoughthecodebasewaswritteninlegacyphpthedeveloperssucceededinbuildingautomatedcitests": "q-tech-even-though-legacy",
  "thenewcloudclusterautomaticallyscalespodsondemanditisolatessensitivetenantdatainseparatenamespaces": "q-tech-furthermore-cluster",
  "themonolithicbackendreacheditshorizontalscalinglimitthearchitectureteamdecidedtosplititintodomainservices": "q-tech-hence-legacy",
  "pleaseinformtheoncalldevopssquadifyouplantoexecuteabulkdatabaseschemamigration": "q-tech-in-advance-migration",
  "weconfiguredmultiregioncrossclouddatabasebackupstheprimaryawsregionsuffersanunexpectedoutage": "q-tech-in-case-outage",
  "thesquadimplementedstrictinputsanitizationpreventsqlinjectionattacks": "q-tech-in-order-to-security",
  "thearchitectrecommendedusingwebsocketspollingthehttpservereverytwoseconds": "q-tech-instead-of-polling",
  "seniorsoftwareengineersmustwritecleanunittestsjuniordevelopersareexpectedtomaintainthesamequalitystandards": "q-tech-likewise-standards",
  "ourplatformsupportslegacytls10protocolsduetocriticalsecuritydeprecations": "q-tech-no-longer-legacy",
  "monolithicarchitecturesaresimplertosetupinitiallyonthehandmicroservicesallowdecoupledteamdeployments": "q-tech-on-the-other-hand-monolith",
  "thepipelinewilltriggertheproductionreleaseifallsonarqubequalitygatespasswithzerovulnerabilities": "q-tech-only-if-production",
  "storetheawssecretkeysinasecuresecretsmanageryourcredentialsmightbeexposedinpublicrepositories": "q-tech-otherwise-credentials",
  "weconfiguredapigatewayratelimitingtheserverscanhandleunexpectedtrafficspikeswithoutcrashing": "q-tech-so-that-ddos",
  "ourdevopsengineersleverageobservabilitytoolsgrafanaprometheusanddatadogtomonitorclusterlatency": "q-tech-such-as-observability",
  "firstthedeveloperopensapullrequestthegithubactionsworkflowtriggersautomatedstaticcodeanalysis": "q-tech-then-ci",
  "thesecurityteamisworkingdiligentlyachievingsoc2typeiicompliancebeforethethirdquarteraudit": "q-tech-towards-soc2",
  "neverbypassautomatedpipelinesecuritychecksthectoexplicitlyapprovesanemergencyproductionoverride": "q-tech-unless-cto",
  "synchronousrestendpointsapachekafkamessagetopicsdecoupleproducerandconsumerservicescompletely": "q-tech-unlike-kafka",
  "adevelopermergescodeintothemasterbranchthecicdpipelinetriggersanautomatedcontainerbuild": "q-tech-whenever-push",
  "theengineeringsquadisevaluatingtomigratetodynamodboroptimizeourexistingpostgresqlinstance": "q-tech-whether-database",
  "thebackendengineerrefactoredthedatabasequeriesthefrontendteambuilttheinteractivedashboards": "q-tech-while-async",
  "thearchitecturalrefactoringwasriskyandcomplexityieldedanimmediate4xincreaseinapithroughput": "q-tech-yet-throughput",
  "itsrainingimgoingtothebeach": "q-although-1",
  "youdidntdoyourjobcorrectlyourclientsarecallinguswithmanyproblems": "q-as-a-result-1",
  "youdoyourhomeworkyouwillpasstheexam": "q-as-long-as-1",
  "thefeaturewasntdoneintimeweneedtorescheduletheproject": "q-hence-1",
  "iwillgotothepartyyouwontgo": "q-even-if-1",
  "maybeyoushouldstayhomegoingouttonight": "q-instead-of-1",
  "idonthavemuchmoneyiwillgoouttonight": "q-even-though-1",
  "pleaseletmeknowifyoucantattend": "q-in-advance-1",
  "heworksattheconsultancy": "q-no-longer-1",
  "thefrontendengineersstartedbuildingtheuithebackendteamsetupthedatabase": "q-meanwhile-1",
  "whenyousendyourprojectreportityoucanshareyourgraphics": "q-along-with-1",
  "iknowthatsahardsubjectineedtostudymore": "q-as-well-1",
  "itslatebutwefoundtheproblem": "q-at-last-1",
  "althoughididntstudyenoughistudiedmaththehardestsubject": "q-at-least-1",
  "thedeveloperwillbelatetodaythetrafficisawful": "q-because-1",
  "imcryingwhatyousaid": "q-because-of-1",
  "idontwanttogoouttonightitsfreezingihaveanearlymeetingtomorrow": "q-besides-1",
  "itwashardtofixthatproblemicouldhandleit": "q-but-1",
  "ourclientsaresatisfiedwithourproducts": "q-currently-1",
  "anoutagealltheprogramswerestopped": "q-due-to-1",
  "youshouldgotoenglandalone": "q-even-1",
  "westoppedtestingtheserverwasdown": "q-for-1",
  "letmeexplainagainwhenthedeveloperfinishestheprogramhecanstartsomethingelse": "q-for-instance-1",
  "theresheavytrafficaheadidonthaveanotherway": "q-however-1",
  "yougothereillgotoo": "q-if-1",
  "takethisexamtoyourdoctorjust": "q-in-case-1",
  "brazilistheonlycountrythatisafivetimeworldcupchampion": "q-in-fact-1",
  "icametoworkinpersonfinishtheproject": "q-in-order-to-1",
  "whatyousaidhecouldunderstand": "q-in-spite-of-1",
  "theteammadesignificantprogressthissprinttheycompletedallhighpriorityitemsaheadofschedule": "q-indeed-1",
  "seniorengineersmustreviewtheirpullrequestsjuniordevelopersareexpectedtofollowthesametestingstandards": "q-likewise-1",
  "yousaidtheprojectwasontimeitisrunningoutoftime": "q-actually-1",
  "therainimgoingtothebeach": "q-despite-1",
  "theserverwasdownwestoppedtesting": "q-therefore-1",
  "youwillnotpasstheexamyoustudytonight": "q-unless-1",
  "imhereicanstudy": "q-so-that-1",
  "imtiredillgototheparty": "q-though-1",
  "theplanischeaperitwilltakemuchlonger": "q-on-the-other-hand-1",
  "submitthereporttodaytheclientwillcancelthemeeting": "q-otherwise-1",
  "thebackendisreadythefrontendisstillinprogress": "q-whereas-1",
  "thetrafficwasawfulthedeveloperwaslate": "q-thats-why-1",
  "theqateamtestedtheapithedevelopersfixedtheuibugs": "q-while-1",
  "wecanhireonemorebackenddeveloperafrontenddeveloper": "q-rather-than-1",
  "thegrmiosquadistrainingnowcoachrenatoportalupiisatthepressconference": "q-gremio-portalupi-1",
  "thescrummasterconductedtheretrospectivethedevelopersandtheqas": "q-scrum-master-1",
  "whenyoubuyanewiphonethechargerwontcomethephone": "q-iphone-1",
  "wemustensureourproductiondatabasesaresecuredagainstunauthorizedaccess": "q-above-all-1",
  "wewillconductthedailystandupfirstwecanpairprogramonthecriticalbug": "q-afterwards-1",
  "thesprintwasasuccessdespitetheunexpectedinfrastructuredowntime": "q-all-in-all-1",
  "afewminorstylingquirksonmobilethewebapplicationisreadyfordeploy": "q-apart-from-1",
  "pleasereviewthepullrequestsooursynccallcanbefastandproductive": "q-beforehand-1",
  "thebuildpipelinefailednonewartifactsweredeployedtostaging": "q-consequently-1",
  "myteambuiltapocproofofconceptandwecandelivertheprogram": "q-definitely-1",
  "writingcleancodeandwritingcomprehensiveautomatedtestsareimportant": "q-equally-1",
  "thenewcomponentarchitectureiscleaneritrenderstwiceasfast": "q-furthermore-1",
  "legacymonolithicapplicationsmicroservicesscaleindependently": "q-in-contrast-1",
  "thesecurityauditwasthoroughallvulnerabilitytestspassedwithoutissue": "q-in-short-1",
  "theperformancebottleneckwastrickytoisolateourteamresolveditbeforerelease": "q-nevertheless-1",
  "therefactoringwasriskyitdecreasedtechnicaldebtsubstantially": "q-nonetheless-1",
  "thedatabaseclusterdidnotcrashdiditloseanyusertransactions": "q-nor-1",
  "therewereminorbumpsduringonboardingbutthenewdevelopersareperformingbrilliantly": "q-on-the-whole-1",
  "wewilltriggertheproductionreleaseallautomatedendtoendcheckssucceed": "q-only-if-1",
  "weneedtooptimizememoryusagewhenprocessinglargecsvfiles": "q-particularly-1",
  "youarealreadyproficientintypescriptlearningreact19willbeveryfast": "q-since-1",
  "modernfrontendlibrariesreactandvueutilizevirtualdomorfinegrainedreactivity": "q-such-as-1",
  "ourunittestcoveragehit90andallsprintgoalswerereached": "q-summing-up-1",
  "weenabledresponsecachingonthereverseproxycuttingapilatencybyhalf": "q-thus-1",
  "masteringenglishconnectorsiscriticalforclearinternationalengineeringcollaboration": "q-to-sum-up-1",
  "theengineeringsquadmademajorstridesshippingthenewmicroservice": "q-towards-1",
  "dynamiclanguagestypescriptcatchestyposandtypemismatchesatcompiletime": "q-unlike-1",
  "occursduringthelivedemonstrationmaintainyourfocusandnoteanyedgecases": "q-whatever-1",
  "youpushnewcommitstogithubgithubactionsrunstheautomatedtestsuite": "q-whenever-1",
  "thearchitectmustdecidetooptimizetheexistingdatabaseschemaormigratetonosql": "q-whether-1",
  "thecodestructureisminimalandsimpleremarkablyresilientunderheavyload": "q-yet-1",
  "wemustguaranteethatuserpasswordsandpersonaldataareencryptedbeforelaunchingthenewpaymentfeature": "q-above-all-security",
  "grmiohasmanytacticaladjustmentstomakebuttheplayersneedtoshowpassionanddeterminationonthepitch": "q-above-all-gremio",
  "seniorengineersknowthatperformanceisimportantbutcleanandreadablecodeensureslongtermsystemmaintainability": "q-above-all-code-clarity",
  "whenplanningourvacationcinthiaandiconsideredbudgetandflightsbutwewantedaquietplacetorelax": "q-above-all-cinthia",
  "inanagilesquadtechnicalskillsmatterbutempathyandactivelisteningduringdailymeetingsbuildrealcollaboration": "q-above-all-daily-respect",
  "theprojectmanagerthoughtwestillhadplentyoffundsleftourbudgetisalmostdone": "q-actually-budget-done",
  "yousaidthatyourprojectwasontimebutyourprojectisrunningoutoftime": "q-actually-time-running-out",
  "yesterdayineededtogototheofficebycarbecausethebushadalreadyleftididntwanttotakethebusipreferdriving": "q-actually-drive-to-office",
  "donttrytosugarcoattheoutagereportthetruthisworsethanyoucanimagine": "q-actually-truth-worse",
  "ihadanintenseworkoutatthegymandiwenthometotakeashowerandrest": "q-afterwards-gym-home",
  "cinthiaandihaddinneratalovelyitalianrestaurantandwentforawalk": "q-afterwards-dinner-walk",
  "illfinishmyenglishgrammarlessonnowandillcallyou": "q-afterwards-call-you",
  "wefacedtwounexpectedproductionbugsandacloudoutagebutthesprintwasamajorsuccess": "q-all-in-all-sprint-success",
  "ourflightwasdelayedbytwohoursandtheweatherwasrainybutthetripwithcinthiawaswonderful": "q-all-in-all-trip-cinthia",
  "ourconsultancydelivered95ofthedeliverableswithintheagreedbudgetandsla": "q-all-in-all-client-qbr",
  "grmiohadtacticalupsanddownsduringthechampionshipbutqualifyingforthelibertadoreswasachieved": "q-all-in-all-gremio-season",
  "itsharderthanithoughtiwillmakeitbymyselfanddeliverthismicroserviceonschedule": "q-although-harder-than-thought",
  "youareahardpersontodealwithsometimesistillloveandrespectyourhonesty": "q-although-hard-person",
  "youdidntcometothepartylastnightitwasgoodandeveryoneaskedaboutyou": "q-although-party-missed",
  "thedayisntsogoodandtheskyisovercastweneedtogoouttakeawalkandseetheclouds": "q-although-day-clouds-walk",
  "theminorcssglitchonthemobileloginscreenthewholeapplicationpassedallautomatedqachecks": "q-apart-from-login-bug",
  "cinthianobodyinthefamilyknewthatwehadbookedticketsforouranniversarytriptoeurope": "q-apart-from-cinthia-surprise",
  "thenewmicroservicesdeploymentwasfastandreliableaslightlatencyspikeonthemongodbcluster": "q-apart-from-database-latency",
  "ihadaproductiveweekendstudyingenglishandrestingtheheartbreakofwatchinggrmioloseinthefinalminutes": "q-apart-from-gremio-match",
  "thedeveloperpushedunreviewedcodedirectlytoproductionwithouttestinghundredsofangryclientsstartedcallingsupport": "q-as-a-result-client-calls",
  "ireadthesoftwarearchitecturebookthatyoulentmeandidiscoveredmanyinnovativepatternsformicroservices": "q-as-a-result-study-book",
  "thejuniordeveloperaskedaverythoughtfulquestionduringrefinementandtheteamcouldfindtherightarchitectureanswer": "q-as-a-result-question-right-answer",
  "carlostoldmethismorningtheleadershipwillcancelthelegacyprojectandeveryonewillbereallocatedtonewsquads": "q-as-far-as-carlos-reallocation",
  "thedevopsteamisawaretheawsinfrastructurehasbeenrunningsmoothlywithoutanyalarms": "q-as-far-as-devops-healthy",
  "ourtourguidetoldusincaliforniamichaeljacksonboughtthatfamousestatewhenhewasalive": "q-as-far-as-michael-jackson-house",
  "youwillachievefluentcommunicationandpassyourtechnicalinterviewyoupracticespeakingeverysingleday": "q-as-long-as-homework-pass",
  "thetechleadtoldtheteamthatremoteworkiscompletelyflexibleeveryoneattendsthedailystandupontime": "q-as-long-as-remote-daily",
  "idontmindstayingattheofficeuntillatetofinishthisreleaseweordersomegoodpizzawithcinthia": "q-as-long-as-pizza-office",
  "microservicesarchitectureisacomplextopicandourjuniorengineersneedtostudycloudpatterns": "q-as-well-study-more",
  "aiwillorderthesteakwithfrenchfriesbthatlooksdeliciousithinkiwouldliketoorderthat": "q-as-well-daily-plate-restaurant",
  "cinthiatoldmeyouboughtticketstothemusicconcertandshetoldmethatiwasinvited": "q-as-well-party-invite",
  "thebackendrestapihasalreadybeendockerizedandweconfiguredthefrontendcontainer": "q-as-well-backend-docker",
  "themoonisbrightinthenightskyyoursmileilluminatesmyentireworld": "q-as-well-as-eyes-bright",
  "theproductownerisactivelyinvolvedinsprintplanningbacklogrefinement": "q-as-well-as-planning-refinement",
  "ourcrossplatformflutterapplicationseamlesslysupportsiosandroiddevices": "q-as-well-as-ios-android",
  "thedeadlineisdemandingbutyouneedtocalmdownandtakeadeepbreathme": "q-as-well-as-calm-down",
  "theeconomyistoughandlivingcostsarerisingireallyneedthissoftwareengineeringposition": "q-at-all-need-job",
  "myjobattheconsultancyisgettingmorestressfuleverysprintineedavacationsoon": "q-at-all-need-vacation",
  "ihavetraveledtomanyeuropeancapitalsbutlondonisthemostvibrantcityihaveevervisited": "q-at-all-london-best-place",
  "thenewhiredidntunderstandthelegacymonolithcodebasebecausetherewasnodocumentation": "q-at-all-not-understand-legacy",
  "withourautomatedrollbackpipelineandextensiveunittestsuitethetechleadisnotworriedabouttonightsproductionrelease": "q-at-all-not-worried-deployment",
  "aftersevenexhaustinghoursofanalyzingmemorydumpsandserverlogstheteamfixedthecriticalmemoryleak": "q-at-last-bug-fixed-night",
  "cinthiaandihadbeenwaitingattheairportgateforoverfivehourstheairlineannouncedboardingforourflight": "q-at-last-vacation-flight",
  "theenterpriseclientapprovedallsecuritycomplianceclausesandwesignedthemultimilliondollarcontract": "q-at-last-contract-signed",
  "beforemergingthispullrequestintomasterourcicdpipelinerequires85automatedtestcoverage": "q-at-least-unit-tests-coverage",
  "grmiodidntplaytheirbesttacticalgameawayfromhomebuttheymanagedtosecureacrucialdrawinthetournament": "q-at-least-draw-match-gremio",
  "ourscrumteamschedulestworefinementsessionspersprinttokeeptheuserstorieswellestimated": "q-at-least-three-refinements",
  "thepaymentgatewayrejectedthebulktransactionrequestourmicroserviceexceededtheratelimitpersecond": "q-because-api-throttled",
  "yesterdaymorningineededtodrivemycartothegftofficethecommuterbushadalreadylefttheterminal": "q-because-bus-already-left",
  "imanagedtocompletemycertificationstudiesontimecinthiasupportedmeandhelpedmanageourdailytasks": "q-because-cinthia-support",
  "theqateamcouldntfinishtheregressiontestinginthestagingenvironmentthebackendserverunexpectedlycrashed": "q-because-server-crashed",
  "theproductionreleasewaspostponeduntiltomorrowmorninganunexpectednetworkoutageintheawsuseastregion": "q-because-of-network-outage",
  "wearrivedtenminuteslateforourdinnerreservationwithcinthiatheheavytrafficonthehighway": "q-because-of-traffic-jam",
  "thequeryresponsetimeskyrocketedanunindexedcollectionlockonthemongodbreplicaset": "q-because-of-mongodb-lock",
  "ifyouwantthearchitecturemeetingtorunefficientlymakesuretoreadtherfcdocument": "q-beforehand-review-pr",
  "thedevopsengineerremindedeveryonethatallsecretsmustbeconfiguredinhashicorpvault": "q-beforehand-clean-code-deploy",
  "valentinesdayrestaurantsgetfullybookedinportoalegresoireservedourfavoritetable": "q-beforehand-cinthia-reservation",
  "masteringdockerandcontainerorchestrationourcloudarchitectsareproficientinterraformandawsautomation": "q-besides-docker-kubernetes",
  "beingapassionategrmiosupporterheenjoysanalyzingeuropeanfootballtacticsandwatchingthechampionsleague": "q-besides-gremio-fan",
  "thejobofferatthetechconsultingfirmwasveryattractivetheyofferfullremoteflexibilityandanannuallearningbudget": "q-besides-salary-benefits",
  "thereleasedeadlinewasextremelytightthedevelopmentsquadworkedtogetheranddeliveredalluserstoriesontime": "q-but-tight-deadline-delivered",
  "iloveauthenticmexicanfoodwithjalapeosandspicysalsacinthiaprefersmilderdisheswithfreshguacamole": "q-but-cinthia-spicy-food",
  "grmiocompletelydominatedballpossessionthroughoutthesecondhalftheycouldntscorethewinninggoal": "q-but-gremio-dominated-drew",
  "mongodballowsschemaflexibilityandfastinitialprototypesyoustillmustdesignyourindexingstrategycarefullyforproductionscale": "q-but-mongodb-fast-indexing",
  "thesquadleftseveralunoptimizedgpuinstancesrunningovertheentireweekendourawsmonthlybillexceededthebudgetby30": "q-consequently-cloud-costs",
  "wefinishedallsprintdeliverablestwodaysaheadofschedulewewereabletotakefridayoffandtravelwithcinthia": "q-consequently-cinthia-trip",
  "thestrikerscoredtwodecisivegoalsinthefirsthalfgrmioadvancedtothegrandfinalofthestatechampionship": "q-consequently-gremio-win-final",
  "iamworkingasaprojectcoordinatorratherthanwritingrawcodeeveryday": "q-currently-not-coding-pm",
  "ourengineeringsquadisrefactoringourmonolithintocontainerizedspringbootandnodejsmicroservices": "q-currently-migrating-microservices",
  "grmioisoccupyingthirdplaceintheleaguetablefightingforaspotinnextyearscopalibertadores": "q-currently-gremio-table",
  "thisauthenticitaliantrattoriainthecitycenteristhebestrestaurantcinthiaandihavediscoveredthisyear": "q-definitely-best-restaurant-cinthia",
  "afterevaluatingthereductioninruntimeerrorsourengineeringteamwilladopttypescriptforallupcomingfrontendprojects": "q-definitely-adopt-typescript",
  "thenewengineeringdocumentationonmicroservicedesignpatternsisworthreadingbeforethesprintstarts": "q-definitely-worth-reading",
  "thetorrentialraininportoalegrefiftythousandpassionategrmiofanspackedthearenatosupporttheteam": "q-despite-heavy-rain-stadium",
  "thetightdeadlineimposedbythebankingclientthegftconsultancydeliveredthepaymentmodulewithoutanyproductiondefects": "q-despite-tight-deadline-gft",
  "thelackofsleepduetoovernightsystemmonitoringtheleadarchitectledanenergeticandinspiringsprintplanningmeeting": "q-despite-lack-of-sleep",
  "thehighpricesduringpeakholidayseasoncinthiaandidecidedtobooktheromantichotelbythebeach": "q-despite-high-prices-cinthia",
  "thecustomerportalwillbetemporarilyunavailabletonightfrom2amto4amscheduleddatabasemaintenanceonmongodb": "q-due-to-database-maintenance",
  "thescrummasterwasabsentfromtodaysdailystandupasuddenfeverandflusymptoms": "q-due-to-illness-standup",
  "ourhouserenovationwascompletedtwoweeksaheadofschedulelargelycinthiasdedicationandmanagementofthecontractors": "q-due-to-cinthia-effort",
  "inmodernwebdevelopmentintuitiveuserinterfacedesignisvitalascalableandsecurebackendarchitectureisindispensable": "q-equally-backend-frontend-quality",
  "towinthecuprenatogachoemphasizedthatscoringgoalsiscrucialbutmaintainingadisciplineddefensivelineisimportant": "q-equally-gremio-defense-attack",
  "cinthiaandiagreedthatfinancialplanningandhouseholdchoresshouldbedividedbetweenbothofus": "q-equally-shared-responsibilities-cinthia",
  "codequalityisnotsolelytheresponsibilityofsoftwaredevelopersqasandproductmanagersareaccountablefordeliveringvalue": "q-equally-qa-dev-collaboration",
  "theconcurrencybugwassobizarrethatourprincipalarchitectstruggledtoreproduceitonlocalmachines": "q-even-junior-debugged-race-condition",
  "truefansneverabandontheclubwhentemperaturesdropnearfreezingthegrmiosupporterssingproudlyatthearena": "q-even-on-rainy-days-gremio",
  "italkaboutprogrammingandtechnologysofrequentlyathomethatcinthiaknowsthedifferencebetweenabranchandapullrequest": "q-even-cinthia-knows-git",
  "withournewdatabaseindexingstrategyonmongodbqueryexecutionbecamefasterthanweinitiallybenchmarked": "q-even-faster-than-expected",
  "ourfinancialtransactionenginewillremainoperationaltheprimaryclouddatabasenodecompletelygoesdown": "q-even-if-server-fails-failover",
  "cinthiaandiwillcelebrateouranniversaryattherooftopbistroitrainsheavilyallevening": "q-even-if-rain-cinthia-dinner",
  "thecoachreassuredthefansthatthesquadwillfightforvictorytheopponentscoresanearlygoalinthefirsthalf": "q-even-if-gremio-concedes-first",
  "thedevopsteamwasutterlyexhaustedafterthemigrationtheystayedonlinetomonitorthemorningtransactionpeak": "q-even-though-exhausted-deployment",
  "thenewestflagshipsmartphonewasquiteexpensiveanddidntincludeawallchargercarlosdecidedtopurchaseit": "q-even-though-expensive-iphone",
  "grmiomissedseveralclearopportunitiesinthefirsthalftheymaintainedcomposureandwonthematch21": "q-even-though-gremio-missed-chances",
  "thetestautomationscripthaltedexecutionimmediatelytheprimarydatabaseclusterhadreached100cpucapacity": "q-for-server-overloaded-halt",
  "iagreedtorelocateourapartmentwithouthesitationitrustedcinthiassharpintuitionandcarefulmarketresearchcompletely": "q-for-trusted-cinthia-judgment",
  "thestadiumeruptedinunifiedchantslongbeforekickoffthesupportersknewthathistorywasabouttobemade": "q-for-gremio-fans-faithful",
  "gftcontinuedtoexpanditstechnicalleadershipincloudsolutionsthecompanyconsistentlyinvestedinemployeecertificationsandmentoring": "q-for-consultancy-invested-training",
  "ourengineeringorganizationutilizesseveralmoderndeliveryframeworksourpaymentssquadreliesonscrumwhiletheoperationsteamuseskanban": "q-for-instance-agile-frameworks",
  "cinthiaandiloveexploringhistoriceuropeancitieswespentourlastholidayadmiringthearchitectureofflorenceandrome": "q-for-instance-cinthia-travel-destinations",
  "therearemultiplehighperformancenosqldocumentstoresavailablemongodballowsflexibleschemaswhilecouchbaseoffersintegratedcaching": "q-for-instance-nosql-databases",
  "grmiohasproducednumerouslegendaryplayersandcoachesthroughoutitshistoryrenatogachowontitlesasbothastrikerandamanager": "q-for-instance-gremio-legends",
  "breakingthemonolithreducedourdeploymentcyclefromweekstohoursitallowedindependentteamstochoosetheoptimaltechstackforeachdomain": "q-furthermore-microservices-benefits",
  "theengineeringsquaddeliveredthecorebankingfeaturesontimeourpostlaunchdefectratedroppedby40comparedtothepreviousquarter": "q-furthermore-gft-client-satisfaction",
  "thenewapartmenthasaspacioushomeofficewithnaturallightitislocatedjustthreeblocksawayfromcinthiasfavoritepark": "q-furthermore-cinthia-apartment-amenities",
  "thejwtauthenticationtokenhadexceededits15minutelifespanthegatewayrejectedtheapirequestwitha401unauthorizedstatus": "q-hence-token-expired-unauthorized",
  "asuddenaccidentblockedbothlanesofthehighwayleadingtotheairportourflightdelayandrushedarrivalatthegate": "q-hence-traffic-late-airport",
  "thedefendersmaintainedcompactlinesthroughoutninetyminutestheircleansheetagainstoneofthestrongestattacksintheleague": "q-hence-gremio-tactical-discipline",
  "thejuniordeveloperwasconfidentthatmongodbdidntneedsecondaryindexestheseniorarchitectadvisedbenchmarkingqueryperformanceunderload": "q-however-experienced-architect-advice",
  "cinthiahadanintensescheduleofclientmeetingsallafternoonshestillfoundtimetojoinmeforadelightfulcoffeebreak": "q-however-cinthia-busy-time-dinner",
  "grmioattackedwithrelentlesspressureandhitthegoalposttwicetheopponentsgoalkeepermademiraculoussavestopreservethedraw": "q-however-gremio-conceded-draw",
  "migratingfiftylegacyservicestoawsrequiredthreemonthsofintensivereengineeringtheoperationalcostsavingsmadetheeffortfullyworthwhile": "q-however-cloud-migration-worth-it",
  "allautomatedunitandintegrationtestspasssuccessfullyinjenkinsourpipelinewillautomaticallydeploythecodetoproduction": "q-if-all-tests-pass-deploy",
  "grmiowinssaturdaysclassicderbyatthearenatheywillclimbstraightintothetopfourofthenationalchampionship": "q-if-gremio-wins-top-four",
  "cinthiafinishesherclientpresentationearlythiseveningwewillcatchthelatenightmovieatthecinema": "q-if-cinthia-finishes-early-cinema",
  "youencounteranysyntaxissueswhilewritingtheaggregationpipelineonmongodbfeelfreetoreachouttomeonslack": "q-if-you-need-help-mongodb",
  "cinthiaandimanagedtosecureaffordableairlineticketsbecausewepurchasedthemthreemonths": "q-in-advance-book-flight-vacation",
  "corporategovernancerequiresouritteamtonotifyenterprisebankingclientsatleast48hoursofanymaintenancedowntime": "q-in-advance-notify-downtime-clients",
  "isentthearchitecturalrfcdocumenttothetechleadsandwrotethankyouforyourthoughtfulfeedback": "q-in-advance-thank-review-pr",
  "ourmobileclientappcachesthelatestuserdatalocallyonthedevicetheusertemporarilylosesinternetconnectivity": "q-in-case-network-fails-cache",
  "takeyourwaterproofgrmiowindbreakerjackettheweatherforecastturnsrainyduringthederbyatthearena": "q-in-case-rain-arena-gremio",
  "iboughtsomeartisanalcheeseandfreshfruitonthewayhomecinthiafeelshungryafterherlateshift": "q-in-case-cinthia-hungry-late",
  "legacyrelationaldatabasesoftenrequireverticalhardwarescalingdistributeddocumentstoresscalehorizontallyacrosscommodityclusters": "q-in-contrast-nosql-sql-scaling",
  "scrumorganizesdevelopmentintofixedtimeboxedsprintskanbanemphasizescontinuousdeliveryandstrictworkinprogresslimits": "q-in-contrast-scrum-kanban-iterations",
  "ifeelmostenergizedandwritemycleanestcodeearlyinthemorningcinthiaisanightowlwhodoeshermostcreativeworklateatnight": "q-in-contrast-cinthia-morning-evening",
  "grmiostruggledwithtacticalsluggishnessduringtheopeningthirtyminutestheirsecondhalfperformancewaselectrifyingandrelentless": "q-in-contrast-gremio-first-second-half",
  "manysoapoperashavememorableantagonistsbutpaolabrachoinausurpadoraisthemosticonicvillainintelevisionhistory": "q-in-fact-paola-bracho-villain",
  "europeanteamshavedominatedrecenttournamentsbutbrazilistheonlynationalteamthathaswonthefifaworldcupfivetimes": "q-in-fact-brazil-five-titles",
  "thestakeholdersexpectedmodestlatencygainsafterthemigrationthemicroservicearchitectureimprovedresponsetimesbyover60": "q-in-fact-cloud-faster-expected",
  "developersmustsanitizeallincomingqueryparametersandusepreparedstatementspreventsqlinjectionattacks": "q-in-order-to-prevent-sql-injection",
  "iarrivedhomethirtyminutesearlyandlitscentedcandlessurprisecinthiaonouranniversarydinner": "q-in-order-to-surprise-cinthia",
  "winthedecisivematchatthearenarenatogachointensifiedtacticaltransitiondrillsthroughouttheentireweek": "q-in-order-to-win-gremio-intensified",
  "allregressiontestspassedsecuritycompliancewassignedoffandmonitoringdashboardsaregreentheplatformisreadyforproduction": "q-in-short-release-status",
  "soliddefensedisciplinedmidfieldandclinicalfinishinginfrontofgoalgrmioplayedliketruechampionstonight": "q-in-short-gremio-champion-performance",
  "wesharevaluessupporteachotherscareerambitionsandlaughtogethereverysingledaylivingwithcinthiaispurejoy": "q-in-short-cinthia-relationship",
  "elasticscalingpayasyougopricingandautomatedhighavailabilityacrossglobalzonescloudinfrastructurerevolutionizouomercadodeti": "q-in-short-cloud-advantages",
  "thesevereregionalcloudoutagethegftengineerssuccessfullyreroutedtrafficandmaintainedzerocustomerdataloss": "q-in-spite-of-cloud-outage-gft",
  "feelingexhaustedafterachallengingsprintdeploymentiwenttothegymwithcinthiatoworkoutanddecompress": "q-in-spite-of-exhaustion-gym",
  "thefreezingblizzardanddelaysattheairportourinternationalflightlandedsafelyinlondon": "q-in-spite-of-heavy-snow-flight",
  "severalquestionabledecisionsbytherefereegrmiostayedfocusedandsecuredanepic32victoryatthearena": "q-in-spite-of-referee-mistakes-gremio",
  "microservicesintroducesignificantarchitecturalflexibilitymanagingdistributedtracingandobservabilityrequiresdisciplinedtooling": "q-indeed-microservices-complex",
  "hercolleaguespraisedherstrategicvisionduringthereorganizationsheisoneofthemosttalentedleadersinthebusinessunit": "q-indeed-cinthia-talented-leader",
  "withthreecopalibertadorestitlesandanintercontinentalcupgrmiohaswrittensomeofthemostgloriouschaptersinsouthamericanfootball": "q-indeed-gremio-tricolor-tradition",
  "adoptingdomaindrivendesignfeltslowduringthefirsttwosprintsrefactoringdownstreambecameeffortlessasbusinesslogicgrew": "q-indeed-clean-architecture-saves-time",
  "executingmanualregressionchecklistsbeforeeverysprintreleaseourteamimplementedautomatedcypressandjesttestsuites": "q-instead-of-manual-qa-automated",
  "eatingoutatanoisyrestaurantonfridaynightcinthiaandicookedhomemadepastaandenjoyedaquieteveningtogether": "q-instead-of-eating-out-cinthia",
  "wedecidedtodecoupleourorderingandinvoicingmicroservicesusingkafkamessagequeuessynchronoushttprestcoupling": "q-instead-of-direct-http-queues",
  "seniorengineersmustsubmittheircodeforpeerreviewjuniordevelopersshouldparticipateactivelyinreviewingarchitectureprs": "q-likewise-seniors-juniors-reviews",
  "iamdedicatedtoexpandingmysoftwareleadershipskillsatgftcinthiaispursuingadvancedprofessionalcertificationsinherfield": "q-likewise-cinthia-career-growth",
  "highqualitysoftwarerequirescomprehensiveautomatedtestsuitesclearandupdatedapidocumentationisvitalfordeveloperadoption": "q-likewise-tests-documentation",
  "thebackendengineersweredesigningthemongodbdatabaseschemasandauthenticationendpointsthefrontendteambuiltresponsivefigmaprototypes": "q-meanwhile-frontend-backend-parallel",
  "thegrmiosquadconductedrigoroustacticaldrillsatthetraininggroundrenatogachoaddressedthemediainahighstakespressconference": "q-meanwhile-gremio-renato-press",
  "ourconsultingteamoperatesremotelyvisitingtheclientscorporateofficeonlyonceamonthforexecutivesteeringmeetings": "q-mostly-remote-work-consultancy",
  "thenewmicroservicessquadiscomposedofambitiousjuniordeveloperseagertolearncloudanddevopspractices": "q-mostly-junior-team-support",
  "whenselectingholidaydestinationscinthiaandilookforcharmingcoastaltownswithscenicwalkingtrailsandfreshseafood": "q-mostly-cinthia-travel-preferences",
  "ourmonthlycloudinfrastructurebudgetisspentonmultiregionmongodbdatabaseclustersandkafkastreamingbrokers": "q-mostly-cloud-infrastructure-spend",
  "duringthederbyinportoalegrethesouthernstandwasoccupiedbyroaringgrmiofanssingingtheclubsanthems": "q-mostly-gremio-fans-arena",
  "thelegacycodebasewasnotoriouslyundocumentedandfragilethesquadrefactoredthecorecalculationenginewithoutcausinganyregressionbugs": "q-nevertheless-legacy-code-refactored",
  "cinthiawasexhaustedafterpreparingtheannualstrategyreportsheputonherrunningshoesandjoinedmeforoureveningstrollinthepark": "q-nevertheless-cinthia-tired-walk",
  "grmiohadtheirprimarycentraldefendersentoffinthe60thminutetheremainingtenplayersdefendedheroicallyandsecuredthe10victory": "q-nevertheless-gremio-red-card-held",
  "initialcloudinfrastructuremigrationexpensesexceededourquarterlyforecastthelongtermscalabilityandoperationalelasticityjustifiedtheinvestment": "q-nevertheless-cloud-costs-investment",
  "ourengineeringsquadhasmigratedallpaymentworkflowstoeventdrivenarchitecturessowemaintainthelegacysoapendpoints": "q-no-longer-legacy-soap-apis",
  "heworksasacontractorattheconsultancybecauseheacceptedanexecutiveengineeringpositionataninternationalfintech": "q-no-longer-gft-consultant-contract",
  "sinceswitchingtoafulltimeremoteroleatgftilosetwohourseverydaystuckinhighwaytraffic": "q-no-longer-commute-remote",
  "theclientsregulatorycompliancespecificationswereextraordinarilyconvolutedtheengineeringteamdeliveredthesolutionwithinthedesignatedsprint": "q-nonetheless-complex-specs-delivered",
  "cinthiaspenttenhoursfacilitatingclientworkshopstodayshehadabrightsmileonherfacewhenwemetfordinner": "q-nonetheless-tired-cinthia-dinner",
  "grmiohadthreekeymidfielderssidelinedwithmuscleinjuriesthesquaddisplayedimmensegritandcontrolledthemidfieldtempo": "q-nonetheless-gremio-injuries-competed",
  "enterprisedatabasetoolinglicenseswereundeniablysteepthe247missioncriticalsupportslagavetheboardabsolutepeaceofmind": "q-nonetheless-high-licensing-costs",
  "awouldyoulikeanespressooracupofenglishteabactuallyidrinkneithercoffeeteaistronglyprefercoldsparklingwater": "q-nor-neither-coffee-tea",
  "forthislightweightserverlessfunctionourcloudarchitectswantneitherheavyweightjavaruntimescomplexspringbootconfigurations": "q-nor-neither-java-spring",
  "theprimaryloadbalancerdidntredirecttrafficduringthefailoverdrilldidtheautomatedrecoveryscriptlaunchbackupcontainers": "q-nor-did-the-server-restart",
  "monolithicarchitecturessimplifylocaldebugginganddeploymentpipelinesmicroservicesprovideunparalleledindependentscalingforlargesquads": "q-on-the-other-hand-monolith-vs-microservices",
  "thedowntownloftisclosertoourfavoriterestaurantsandculturaleventsthesuburbanhouseoffersaquietgardenandmuchmorespaceforcinthiaandme": "q-on-the-other-hand-cinthia-apartment-options",
  "experiencedveteransbringcomposureandtacticalintelligenceduringhighpressurefinalsyoungacademyplayersinjectrelentlessstaminaandfearlesspace": "q-on-the-other-hand-gremio-veteran-youth",
  "whiletherewereinitialcommunicationfrictionsduringsprintretrospectivesouragiletransformationhasdramaticallyimprovedteammoraleanddeliveryvelocity": "q-on-the-whole-agile-transformation",
  "despitetwominortraindelaysbetweenmilanandveniceourromanticvacationinitalywasoneofthehappiestexperiencescinthiaandihaveevershared": "q-on-the-whole-cinthia-vacation-italy",
  "althoughgrmionarrowlymissedoutonwinningthenationalcupfinalthetacticalevolutionunderrenatogachorestoredourchampionshippride": "q-on-the-whole-gremio-season-review",
  "minorquerylatencyspikesoccurredduringblackfridaytrafficpeaksbutthemongodbreplicaclustermaintained9999availabilitythroughouttheevent": "q-on-the-whole-mongodb-cluster-health",
  "theleaddevopsengineerwilltriggertheproductiondeploymentpipelinethesecurityscanningsuitereportszerocriticalvulnerabilities": "q-only-if-production-deploy-passed-tests",
  "mycolleaguesinvitedmetothetechconsultancyrooftopcocktailbutitoldthemiwillattendcinthiacancomealongwithme": "q-only-if-cinthia-goes-party",
  "makesuretopushyourlocalgitbranchestogithubbeforeleavingtheofficeyourisklosingyouruncommittedworkifyourmachinerestarts": "q-or-commit-changes-lose-work",
  "inthemorningcinthiausuallyaskswouldyoupreferfreshlybreweddripcoffeeawarmcupofgreentea": "q-or-tea-coffee-cinthia-morning",
  "asoftwareengineeringteamcanadopttimeboxedsprintswithscrumtheycanoptforcontinuousflowmanagementwithkanban": "q-or-scrum-kanban-choice",
  "tosecureaspotinthecopalibertadoresknockoutphasegrmiomustwintonightsmatchsecureatleastascoredrawawayfromhome": "q-or-win-draw-gremio-qualification",
  "wemustscaleupourmongodbdatabaseclusterbeforetheflashsalebeginsourpaymentcheckoutwillcrashundersuddenload": "q-or-upgrade-server-crash",
  "firstillpolitelycalltheflightattendantiwillcall911andletthemhandletheunrulypassenger": "q-otherwise-airplane-call-attendant",
  "ourinfrastructureteammustrenewtheexpiringsslcertificatestodaywebbrowserswillflagourbankingportalasunsecure": "q-otherwise-renew-ssl-certs",
  "ienjoydesigningscalabledatabasesolutionswhencraftingcomplexaggregationpipelinesinmongodb": "q-particularly-nosql-mongodb-aggregations",
  "passionatefootballsupportersinriograndedosulliveforclassicderbymatchesthefiercerivalrybetweengrmioandinternacional": "q-particularly-gremio-derby-passion",
  "cinthiaisanaccomplishedhomechefrenownedamongourfriendsforherauthentichomemaderisottosandfreshpastas": "q-particularly-cinthia-culinary-skills",
  "distributedarchitecturesrequirerobusttoolingcentralizedlogginganddistributedtracingtotroubleshootlatencybottlenecks": "q-particularly-microservices-observability",
  "wheniwasyoungerinportoalegreipreferredtoplaysoccerhideandseekwiththeneighborhoodkids": "q-rather-than-play-soccer-hide-seek",
  "fridayismyfavoritedayfordeepcleaningourhomeialwaysprefertostartinthehomeofficethekitchen": "q-rather-than-cleaning-office-kitchen",
  "onwarmsunnyafternoonsiprefertodrinkfreshicedteahotcoffeealthoughienjoybothbeverages": "q-rather-than-coffee-tea-preference",
  "ourarchitectsdecidedtoimplementasynchronouskafkaqueuestightsynchronousrestcouplingbetweenmicroservices": "q-rather-than-async-queues-sync-coupling",
  "mylifehasbecomesomuchmorejoyfulandgroundedihaveknowncinthiasince2024": "q-since-cinthia-known-2024",
  "ihaveexpandedmyinternationalconsultingexpertisesignificantlyihavebeenworkingatgftsince2022": "q-since-gft-working-2022",
  "thescrummasterwasfacilitatinganurgentexecutiveescalationthemorningdailystandupwasconductedasynchronouslyonslack": "q-since-daily-canceled-slack",
  "actuallyimnotworkingasahandsonsoftwaredeveloperrightnowidontcodeinpythonorjavaonadailybasis": "q-so-not-dev-anymore",
  "leomessihasdribbledpastdefendersandwoneightballondortrophiesitisimpossiblenottoconsiderhimoneofthegreatestathletesinhistory": "q-so-messi-joke",
  "grmioclinchedthechampionshiptrophywithaspectacularfreekickinthe90thminutetheentirecityofportoalegrecelebrateduntildawn": "q-so-gremio-champion-celebration",
  "weconfiguredcomprehensiveautomatedtestpipelinesinjenkinsandgithubactionsdeveloperscanmergepullrequestswithhighconfidence": "q-so-that-ci-cd-automate-fast",
  "ifinishedallhouseholdchoresandmealpreparationsonfridayeveningcinthiaandicouldenjoyacompletelypeacefulandrelaxingweekend": "q-so-that-cinthia-relax-weekend",
  "thedatabaseadministratorsconfiguredshardkeysacrossmultiplegeographiczonesourmongodbclustercouldhandlemillionsofconcurrentqueries": "q-so-that-mongodb-shard-scale",
  "designingafinancialcoreenginewithzerodowntimefailoverisachallengingarchitecturaltaskthatonlyseniorengineersareassignedtoit": "q-such-a-complex-architecture",
  "thegrenalmatchatthearenadogrmiogeneratesanintenseemotionalatmospherethatfootballanalystsworldwidepraiseitsuniquerivalry": "q-such-a-passionate-derby-gremio",
  "cinthiaisaninspiringsupportiveandgenerouspartnerthateverydaytogetherfeelslikeanupliftingblessing": "q-such-a-wonderful-partner-cinthia",
  "theseniorconsultantsatgftprovidevaluableguidancetojuniordevelopersthattechnicalskillsacceleratewithinmonths": "q-such-great-mentorship-gft",
  "duringthefourhourbankingoutagetheincidentresponsesquaddemonstratedcomposurethatallcriticaldatabaseswererestoredsafely": "q-such-resilience-under-pressure",
  "modernenterpriseitconsultanciesadoptprovendeliverymethodologiesscrumkanbanandsafetocoordinatecrossfunctionalteams": "q-such-as-agile-frameworks-scrum-safe",
  "duringoursafaridocumentarymarathoncinthiaandilearnedfascinatingfactsaboutpredatorywildanimalstigerslionsandleopards": "q-such-as-wild-animals-tigers-lions",
  "wecompleted42storypointsresolvedthreelongstandingtechdebtsandonboardedtwojuniorengineersthissprintwasourmostimpactfulonethisquarter": "q-summing-up-sprint-retro-wins",
  "warmsunnybeacheshistoricarchitecturemouthwateringlocalcuisineandunforgettableconversationswithcinthiaitwasthebestholidayofourlives": "q-summing-up-cinthia-trip-memories",
  "aresilientdefenseaninspiredtacticalshiftunderrenatoportalupiandunwaveringsupportfromfiftythousandfansatthearenagrmioisbackattheelitelevel": "q-summing-up-gremio-season-verdict",
  "zerodowntimeduringdnscutoverzerodatacorruptioninmongodbandlatencydroppedby35thecloudmigrationsurpassedallslatargets": "q-summing-up-cloud-migration-audit",
  "yesterdaywasaterribledayforfootballfansgrmioconcededinthelastminuteandlostthematchifeltsodisappointedandhadacoldbeerwithfriends": "q-thats-why-gremio-lost-drank",
  "youdidntcreatetheappropriateindexonthecollectioninmongodbthedashboardquerieswererunningsoslowlyandtimingout": "q-thats-why-mongodb-table-collection",
  "cinthiasuccessfullydefendedhermastersdissertationwithhonorstodayiarrivedhomeearlywithabouquetoffreshsunflowerstocelebrate": "q-thats-why-cinthia-surprised-flowers",
  "theproductownerdefinedthesprintgoalandpresentedtherefinedbacklogstoriesthedevelopersestimatedthestorypointsandcommittedtodelivery": "q-then-sprint-planning-stories",
  "wewillfinishourworkoutsessionatthegymstopbytheorganicmarkettopickupfreshingredientsandcookadeliciousdinnertogether": "q-then-finish-gym-cook-cinthia",
  "ensurethatpeercodereviewapprovalsarereceivedrunthefinalintegrationtestslocallyandmergethebranchintomaster": "q-then-merge-pr-deploy",
  "thesmoketestsuitedetectedanunhandlednullpointerexceptionintheauthenticationservicethepipelineaborteddeploymentandinitiatedanautomatedrollback": "q-therefore-pipeline-failed-rolled-back",
  "cinthiaexceededallcorporaterevenuetargetsforthreeconsecutivequarterstheexecutiveleadershippromotedhertoseniordirector": "q-therefore-cinthia-promoted-celebration",
  "grmioconcededzerogoalsacrossthetwolegsofthesemifinaltietheyrightfullyclaimedtheirplaceinthecopalibertadoresgrandfinal": "q-therefore-gremio-clean-sheet-qualified",
  "thenewcompliancemandaterequiresimmediateencryptionofallcustomertaxidsatrestoursquadmustexecuteaschemamigrationonmongodbtonight": "q-therefore-mongodb-schema-migration",
  "itwasaverytoughanddemandingdayattheconsultancyimanagedtodelivereverythingthatineededto": "q-though-hard-day-did-everything",
  "palmeirasplayedwithhighpressingandcreateddangerouscounterattacksgrmiowalkedawaywiththethreepointsinsopaulo": "q-though-palmeiras-gremio-match",
  "therestaurantwascompletelypackedandwehadtowaittwentyminutesforourtablethehomemadepastawasabsolutelydelicious": "q-though-cinthia-tired-dinner",
  "thesquadincreasedautomatedtestcoverageacrossallmicroservicerepositoriesto92manualregressionqaeffortwasdramaticallyreduced": "q-thus-automation-reduced-manual-effort",
  "thedatabasearchitectaddedcompoundindexescoveringcustomeridandtransactiondatequeryexecutionlatencydroppedfrom800msto12ms": "q-thus-indexed-mongodb-speed",
  "cinthiaandisystematicallyautomatedourmonthlysavingsintodiversifiedglobalindexfundsourlongtermfinancialsecuritygrewsteadily": "q-thus-cinthia-investment-growth",
  "allfiftymicroservicesweremigratedtokubernetesdatabasereplicationsremainedinsyncandusertrafficflowedwithoutinterruptionsthecloudtransitionwasatriumph": "q-to-sum-up-production-deployment-success",
  "breathtakingtuscanlandscapeswarmsunnyweatherexquisiteitaliancuisineandgreatlaughterwithcinthiaitwasanunforgettablevacation": "q-to-sum-up-cinthia-florence-trip",
  "aresilientdefensiveshapeclinicalcounterattacksdownthewingsandheroicsavesbyourgoalkeepergrmioearnedamasterclassderbyvictory": "q-to-sum-up-gremio-derby-tactics",
  "everydailystandupcommitmentmadebytheengineeringteamisadeliberatestepachievingouroverarchingquarterlysprintgoal": "q-towards-sprint-goal-progress",
  "cinthiaandidepositafixedportionofourmonthlyconsultingbonusesintoadesignatedsavingsfundbuyingourdreamhome": "q-towards-cinthia-future-home",
  "winningthreeconsecutiveawaymatchesgavegrmioimmensemomentumsecuringthenationalleaguechampionshiptitle": "q-towards-championship-title-gremio",
  "ourbranchprotectionruleswillpreventanydeveloperfrommergingcodeintomasterallunitintegrationandsecurityscanspasswith100success": "q-unless-ci-tests-pass-no-merge",
  "intheknockoutstageofthetournamentgrmiowillbeeliminatedonaggregatescoretheyscoreatleasttwogoalsinthesecondhalf": "q-unless-gremio-scores-eliminated",
  "wearescheduledtoattendourfriendsweddingbanquettomorrowbutwewillstayhomeandrestcinthiafeelscompletelyrecoveredfromhercold": "q-unless-cinthia-feels-better-stay-home",
  "monolithicarchitectureswhereasinglememoryleakcancrashtheentiresystemmicroservicesisolatefailureswithinindividualcontainers": "q-unlike-monolith-microservices-isolated",
  "mypreviousonsitejobwhereicommutedtwohourseverydaymycurrentconsultingpositionatgftisfullyflexibleandremote": "q-unlike-previous-job-remote-gft",
  "unforeseenarchitecturalhurdlesemergeduringthecloudmigrationourseniorgftsquadhastheexpertisetosolvethemrapidly": "q-whatever-hurdles-gft-delivers",
  "itrustherculinarytastecompletelysodishcinthiaselectsfromtheitalianmenutonightiwillhappilyshareitwithher": "q-whatever-cinthia-chooses-menu",
  "theweatherbringstoportoalegreonderbysundayheavyrainbittercoldorscorchingheatthegrmiosupporterswillpackthearena": "q-whatever-weather-gremio-arena",
  "collectionstructureyoudefineinmongodbrememberthatcreatingpropercompoundindexesiswhatensureslightningfastqueries": "q-whatever-database-mongodb-fast",
  "acriticalmicroserviceoutageoccursinproductionpagerdutyautomaticallytriggersalertnotificationstotheoncallengineersphone": "q-whenever-incident-pagerduty-alert",
  "grmioscoresadecisivegoalatthearenafiftythousandfansleapfromtheirseatswavingflagsandsingingtheclubsbattleanthem": "q-whenever-gremio-scores-arena-erupts",
  "cinthiasmilesandsharesawarmhugafteralongdayofconsultingmeetingsallmyworkplacestressinstantlymeltsaway": "q-whenever-cinthia-smiles-day-brightens",
  "scrumorganizessoftwaredeliveryintofixedtimeboxedsprintskanbanfocusesoncontinuousflowandstrictworkinprogresslimits": "q-whereas-scrum-sprints-kanban-flow",
  "traditionalsqlrelationaldatabasesstrictlyprioritizeacidtransactionguaranteesdocumentstoreslikemongodboptimizeforhorizontalscalingandschemaflexibility": "q-whereas-sql-acid-mongodb-flexibility",
  "iliketooutlineourweekendactivitiesandpreparedetaileditinerariescinthiaprefersspontaneousroadtripswithroomforserendipity": "q-whereas-cinthia-morning-planner-spontaneous",
  "moderncloudtechnologiesallowourgftconsultingsquadtodelivermissioncriticalbankingsoftwarewearelocatedintheworld": "q-wherever-cloud-consulting-gft",
  "thegrmiosupportersarefamousfortheirdevotiontheteamtravelsacrosssouthamericaforthelibertadoresblueandblackbannersfilltheawaystands": "q-wherever-gremio-plays-fans-travel",
  "homeisnotmerelyageographicaddresscinthiaandiaretogetherthatplacefeelswarmjoyfulandcompletelysecure": "q-wherever-cinthia-travels-home",
  "ourdistributedenterprisearchitectureensuresthatourmongodbclustersaredeployedawsazureorgcpdataissynchronizedinnearrealtime": "q-wherever-mongodb-deployed-replicated",
  "insoftwareengineeringcommunitiesyoufinddeveloperspassionateaboutcleancodeyouwilldiscovergreatcollaborationandcontinuouslearning": "q-wherever-you-find-passion-tech",
  "yourengineeringsquadchoosesscrumwithfixediterationsorkanbanwithcontinuousdeliveryestablishingpsychologicalsafetyisparamount": "q-whether-scrum-or-kanban-agile",
  "itturnsouttobesunnyorrainythisweekendinportoalegrecinthiaandihaveplannedfunactivitiestocelebrateouranniversary": "q-whether-rain-or-shine-cinthia",
  "thebackendengineersimplementedthemongodbaggregationqueriesthefrontendsquadbuiltresponsiveuicomponentsinreact": "q-while-frontend-develops-backend-apis",
  "grmiomaintainedrelentlesspossessionintheoffensivehalftheopponentstayeddefensivelyorganizedlookingforcounterattacks": "q-while-gremio-attacked-opponent-countered",
  "thepaymentmicroservicecodebaseisremarkablycompactandconciseitreliablyprocessesthousandsoffinancialtransactionseverysecond": "q-yet-simple-architecture-reliable",
  "thesupportershadtraveledeighteenlonghoursbybusacrossthecountrytheirthunderousvoicesechoedthroughthestadiumuntilthefinalwhistle": "q-yet-exhausted-gremio-fans-cheered"
};

export function resolveTeacherNote(query: {
  id?: string | null;
  fullSentence?: string | null;
  prompt?: string | null;
}): TeacherNote | undefined {
  if (query.id && TEACHER_NOTES[query.id]) {
    return TEACHER_NOTES[query.id];
  }

  if (query.fullSentence) {
    const key = normalizeKey(query.fullSentence);
    const matchedId = SENTENCE_TO_ID_MAP[key];
    if (matchedId && TEACHER_NOTES[matchedId]) {
      return TEACHER_NOTES[matchedId];
    }
  }

  if (query.prompt) {
    const key = normalizeKey(query.prompt);
    const matchedId = PROMPT_TO_ID_MAP[key];
    if (matchedId && TEACHER_NOTES[matchedId]) {
      return TEACHER_NOTES[matchedId];
    }
  }

  return undefined;
}
