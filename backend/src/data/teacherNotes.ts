// Anotações pedagógicas detalhadas elaboradas por Professor de Inglês Fluente
// Foco em aprendizado profundo, contexto real e ausência de julgamento

export type TeacherNote = {
  sentenceTranslation: string;
  whyCorrect: string;
  whyOthersFail: string;
  proTip: string;
};

export const TEACHER_NOTES: Record<string, TeacherNote> = {
  "q-although-1": {
    sentenceTranslation: "Embora esteja chovendo, eu vou à praia.",
    whyCorrect:
      "Usamos 'Although' porque temos uma oração completa (sujeito 'it' + verbo 'is raining') introduzindo uma concessão ou contraste que não impede a ação principal.",
    whyOthersFail:
      "'Despite' e 'Because of' exigiriam um substantivo direto ('despite the rain'). 'In order to' expressa finalidade com verbo no infinitivo, não contraste.",
    proTip:
      "Regra de Ouro: Viu [Sujeito + Verbo] logo após a lacuna indicando contraste? Use 'Although' ou 'Even though'. Viu substantivo puro? Use 'Despite' ou 'In spite of'.",
  },
  "q-as-a-result-1": {
    sentenceTranslation: "Você não fez seu trabalho corretamente. Como resultado, nossos clientes estão nos ligando com muitos problemas.",
    whyCorrect:
      "'As a result' funciona como um conector de transição que introduz o efeito direto ou consequência da ação descrita na frase anterior.",
    whyOthersFail:
      "'However' indicaria oposição/contraste, mas aqui temos uma consequência lógica. 'Unless' significa 'a menos que' (condição). 'Instead of' significa 'em vez de'.",
    proTip:
      "Memorize: 'As a result' = 'Portanto / Em decorrência disso'. É muito comum no início de uma nova oração após ponto final.",
  },
  "q-as-long-as-1": {
    sentenceTranslation: "Contanto que você faça sua lição de casa, você passará na prova.",
    whyCorrect:
      "'As long as' expressa uma condição indispensável e contínua ('contanto que / desde que').",
    whyOthersFail:
      "'Because of' exige substantivo e não oração. 'At last' indica tempo decorrido ('finalmente'). 'In spite of' expressa contraste, não condição.",
    proTip:
      "'As long as' equivale a 'Provided that' ou 'Only if'. Dica: pense nele como 'com a condição de que'.",
  },
  "q-hence-1": {
    sentenceTranslation: "A funcionalidade não ficou pronta a tempo, por isso precisamos reagendar o projeto.",
    whyCorrect:
      "'Hence' é um conector formal que expressa decorrência lógica e direta ('por essa razão / por isso / daí').",
    whyOthersFail:
      "'Although' expressa concessão. 'Along with' expressa companhia/inclusão. 'At all' é usado para ênfase no fim da frase.",
    proTip:
      "'Hence' é amplamente usado em relatórios técnicos e na área de exatas/engenharia como sinônimo elegante de 'therefore' ou 'that's why'.",
  },
  "q-even-if-1": {
    sentenceTranslation: "Eu vou à festa, mesmo se você não for.",
    whyCorrect:
      "'Even if' introduz uma condição hipotética extrema que não altera em nada o desfecho da ação principal.",
    whyOthersFail:
      "'Because of' precisa de substantivo ('because of the rain'). 'In order to' expressa objetivo ('a fim de'). 'As well as' adiciona itens ('assim como').",
    proTip:
      "Diferença essencial: 'Even if' é hipotético ('mesmo que aconteça'). 'Even though' é um fato real que já acontece ('embora aconteça').",
  },
  "q-instead-of-1": {
    sentenceTranslation: "Talvez você deva ficar em casa em vez de sair hoje à noite.",
    whyCorrect:
      "'Instead of' introduz uma substituição ou escolha alternativa e é seguido obrigatoriamente de verbo com terminação -ing ('going') ou substantivo.",
    whyOthersFail:
      "'Because of' indicaria motivo. 'As well as' significaria que a pessoa faria as duas coisas juntas. 'In case' indicaria precaução.",
    proTip:
      "Lembre-se da preposição 'of': depois de preposição em inglês, qualquer verbo subsequente deve levar '-ing' (instead of going, instead of buying).",
  },
  "q-even-though-1": {
    sentenceTranslation: "Embora eu não tenha muito dinheiro, eu vou sair hoje à noite.",
    whyCorrect:
      "'Even though' é a forma mais enfática e expressiva de 'although', perfeita para contrastar um fato real com uma atitude surpreendente.",
    whyOthersFail:
      "'Due to' exige substantivo. 'Therefore' expressaria consequência, não contraste. 'Likewise' expressaria semelhança.",
    proTip:
      "'Even though' tem tom de 'apesar de ser verdade que...'. Use quando quiser dar bastante ênfase à oposição entre as duas ideias.",
  },
  "q-in-advance-1": {
    sentenceTranslation: "Por favor, me avise com antecedência se você não puder comparecer.",
    whyCorrect:
      "'In advance' é uma locução temporal fixa que significa 'previamente' ou 'com antecedência'.",
    whyOthersFail:
      "'At last' significa 'finalmente após espera'. 'No longer' significa 'não mais'. 'For instance' introduz um exemplo.",
    proTip:
      "Super comum no ambiente corporativo e em chats (Slack/Teams): 'Thank you in advance' = 'Agradeço antecipadamente'.",
  },
  "q-no-longer-1": {
    sentenceTranslation: "Ele não trabalha mais na consultoria.",
    whyCorrect:
      "'No longer' é colocado antes do verbo principal para indicar que um estado ou hábito passado cessou e não é mais verdadeiro hoje.",
    whyOthersFail:
      "'At all' geralmente fica no fim da frase. 'As well' significa 'também'. 'In fact' significa 'na verdade'.",
    proTip:
      "Posição: 'He no longer works here' = 'He doesn't work here anymore'. Com 'no longer' a frase fica afirmativa na gramática, mas com sentido negativo!",
  },
  "q-meanwhile-1": {
    sentenceTranslation: "Os engenheiros frontend começaram a construir a interface. Enquanto isso, o time de backend configurou o banco de dados.",
    whyCorrect:
      "'Meanwhile' é um advérbio de transição que conecta duas atividades distintas acontecendo no mesmo período de tempo em paralelo.",
    whyOthersFail:
      "'Unless' é condição negativa ('a menos que'). 'Despite' exige substantivo. 'Hence' indica resultado/consequência.",
    proTip:
      "Pense em 'Meanwhile' como a tradução perfeita de 'No meio tempo' ou 'Enquanto isso'. Essencial para reuniões de sincronização ágil (Dailies).",
  },
  "q-along-with-1": {
    sentenceTranslation: "Quando você enviar seu relatório do projeto, junto com ele você pode compartilhar seus gráficos.",
    whyCorrect:
      "'Along with' significa 'junto com / acompanhado de', indicando inclusão de algo extra.",
    whyOthersFail:
      "'Because of' indicaria causa. 'Even if' indicaria hipótese. 'So that' expressa finalidade ('para que').",
    proTip:
      "Uso corporativo frequente: 'Please find the document attached along with my feedback' (Segue anexo o documento junto com meus comentários).",
  },
  "q-as-far-as-1": {
    sentenceTranslation: "Pelo que eu sei, a Rebeca entregou o projeto no prazo.",
    whyCorrect:
      "A expressão idiomática 'As far as I know' é clássica para delimitar o grau de certeza do falante ao que ele tem conhecimento.",
    whyOthersFail:
      "'As long as' significa 'contanto que'. 'In order to' significa 'a fim de'. 'On the other hand' expressa contraponto.",
    proTip:
      "Memorize este bloco comunicativo: 'As far as I know...' (Pelo que sei...) e 'As far as I'm concerned...' (No que me diz respeito...).",
  },
  "q-as-well-1": {
    sentenceTranslation: "Eu sei que esse é um assunto difícil. Eu preciso estudar mais também.",
    whyCorrect:
      "'As well' é o sinônimo perfeito de 'too' e é posicionado naturalmente no final da oração afirmativa.",
    whyOthersFail:
      "'Because of', 'unless' e 'in spite of' são conectores subordinativos que exigem complemento, não podem simplesmente fechar a oração desse jeito.",
    proTip:
      "No inglês falado e escrito natural, 'as well' no final substitui 'also' com muita elegância: 'I like coffee as well!'.",
  },
  "q-as-well-as-1": {
    sentenceTranslation: "A equipe precisa de um desenvolvedor de software, assim como de um QA.",
    whyCorrect:
      "'As well as' funciona como uma conjunção aditiva que conecta dois termos de valor equivalente ('assim como / bem como').",
    whyOthersFail:
      "'Because' dá motivo. 'Even though' dá contraste. 'So that' dá objetivo ('a fim de que').",
    proTip:
      "Diferença chave: 'As well' fica no fim da frase ('I'm coming as well'). 'As well as' fica entre dois itens ('HTML as well as CSS').",
  },
  "q-at-last-1": {
    sentenceTranslation: "Está tarde, mas nós encontramos o problema por fim.",
    whyCorrect:
      "'At last' expressa alívio por algo finalmente ter sido resolvido ou alcançado após demora ou dificuldade.",
    whyOthersFail:
      "'At least' significa 'pelo menos / no mínimo'. 'In case' significa 'no caso de'. 'Due to' significa 'devido a'.",
    proTip:
      "Cuidado com os falsos cognatos auditivos: 'At last' = finalmente (tempo). 'At least' = pelo menos (quantidade ou aspecto positivo).",
  },
  "q-at-least-1": {
    sentenceTranslation: "Embora eu não tenha estudado o suficiente, pelo menos estudei Matemática, a matéria mais difícil.",
    whyCorrect:
      "'At least' ressalta um aspecto positivo atenuante ou quantidade mínima em meio a um cenário que não foi ideal.",
    whyOthersFail:
      "'At last' significaria 'finalmente'. 'Unless' significaria 'a menos que'. 'In order to' expressaria finalidade.",
    proTip:
      "Use 'At least' sempre que quiser ver o copo meio cheio: 'It rained, but at least we had fun!' (Choveu, mas pelo menos nos divertimos!).",
  },
  "q-because-1": {
    sentenceTranslation: "O desenvolvedor vai se atrasar hoje porque o trânsito está horrível.",
    whyCorrect:
      "'Because' é uma conjunção causal seguida de uma oração completa (sujeito 'the traffic' + verbo 'is').",
    whyOthersFail:
      "'Because of' precisaria de um substantivo direto ('because of the traffic'), sem o verbo 'is'. 'Despite' daria sentido oposto. 'Instead of' significa 'em vez de'.",
    proTip:
      "Grande regra de prova e certificação: 'Because' + [oração com verbo]. 'Because of' + [substantivo puro].",
  },
  "q-because-of-1": {
    sentenceTranslation: "Eu estou chorando por causa do que você disse.",
    whyCorrect:
      "'Because of' é uma locução prepositiva seguida de um sintagma nominal ('what you said' funciona como substantivo aqui).",
    whyOthersFail:
      "'Because' precisaria de uma oração independente imediata. 'So that' e 'even if' têm sentidos completamente distintos (finalidade e hipótese).",
    proTip:
      "Compare: 'I was late because it was raining' (com verbo 'was') vs 'I was late because of the rain' (apenas substantivo).",
  },
  "q-besides-1": {
    sentenceTranslation: "Eu não quero sair hoje à noite; está congelando lá fora. Além disso, tenho uma reunião cedo amanhã.",
    whyCorrect:
      "'Besides' adiciona um segundo argumento convincente que reforça o primeiro motivo já mencionado.",
    whyOthersFail:
      "'Unless' estabelece condição negativa. 'Although' expressa concessão. 'In case' expressa precaução.",
    proTip:
      "Cuidado com a grafia: 'Beside' (sem s) significa 'ao lado de' ('Sit beside me'). 'Besides' (com s) significa 'além disso'.",
  },
  "q-but-1": {
    sentenceTranslation: "Foi difícil consertar aquele problema, mas eu consegui resolver.",
    whyCorrect:
      "'But' é a conjunção adversativa clássica mais direta para contrapor uma dificuldade inicial a uma superação final.",
    whyOthersFail:
      "'So that' expressa finalidade. 'Therefore' expressa dedução lógica. 'Along with' expressa inclusão.",
    proTip:
      "'But' é informal e direto; 'However' é o seu equivalente mais formal e polido para e-mails e relatórios corporativos.",
  },
  "q-currently-1": {
    sentenceTranslation: "Atualmente, nossos clientes estão satisfeitos com nossos produtos.",
    whyCorrect:
      "'Currently' significa 'no momento presente / atualmente', situando o estado temporal da frase.",
    whyOthersFail:
      "'Otherwise' significa 'caso contrário'. 'Even if' significa 'mesmo se'. 'In spite of' significa 'apesar de'.",
    proTip:
      "Falso amigo clássico! 'Actually' NÃO significa atualmente (significa 'na verdade'). Para dizer 'atualmente', use 'Currently' ou 'Nowadays'.",
  },
  "q-due-to-1": {
    sentenceTranslation: "Devido a uma interrupção nos servidores, todos os programas foram paralisados.",
    whyCorrect:
      "'Due to' é seguido de um substantivo ('an outage') e introduz a causa determinante do problema.",
    whyOthersFail:
      "'Although' exigiria oração completa com verbo. 'Even if' introduz hipótese. 'As well as' introduz adição.",
    proTip:
      "Em comunicados corporativos e de incidentes de TI (post-mortems), 'due to' é a expressão padrão para citar a causa raiz.",
  },
  "q-even-1": {
    sentenceTranslation: "Você deveria ir à Inglaterra, até mesmo sozinho.",
    whyCorrect:
      "'Even' atua como advérbio de intensidade para enfatizar algo surpreendente, incomum ou extremo ('até mesmo / mesmo').",
    whyOthersFail:
      "'Hence' e 'therefore' expressam dedução. 'As a result' expressa resultado.",
    proTip:
      "Use 'even' para destacar o extremo de uma escala: 'Not even the senior dev knew how to fix it' (Nem mesmo o sênior sabia como arrumar).",
  },
  "q-for-1": {
    sentenceTranslation: "Nós interrompemos os testes, pois o servidor estava fora do ar.",
    whyCorrect:
      "'For' é uma conjunção coordenativa formal do grupo FANBOYS (For, And, Nor, But, Or, Yet, So) que significa 'pois / visto que'.",
    whyOthersFail:
      "'Instead of' exigiria -ing. 'Along with' significa 'junto com'. 'Unless' significa 'a menos que'.",
    proTip:
      "Embora 'because' seja muito mais comum na fala diária, 'for' como conjunção é altamente valorizado em redações formais e literatura em inglês.",
  },
  "q-for-instance-1": {
    sentenceTranslation: "Deixe-me explicar novamente. Por exemplo, quando o desenvolvedor termina o programa, ele pode começar outra coisa.",
    whyCorrect:
      "'For instance' introduz um caso prático ilustrativo, funcionando como sinônimo idêntico a 'For example'.",
    whyOthersFail:
      "'Even though' expressa contraste. 'No longer' significa 'não mais'. 'In spite of' expressa concessão.",
    proTip:
      "'For instance' e 'For example' são intercambiáveis. 'For instance' soa muito natural em apresentações e reuniões técnicas.",
  },
  "q-however-1": {
    sentenceTranslation: "Há um trânsito pesado à frente; contudo, eu não tenho outro caminho.",
    whyCorrect:
      "'However' contrasta duas realidades de maneira elegante e formal, frequentemente precedido de ponto-e-vírgula ou ponto final.",
    whyOthersFail:
      "'Therefore' indicaria conclusão. 'As long as' indicaria condição. 'In order to' indicaria finalidade.",
    proTip:
      "Pontuação típica em inglês formal: Frase A; however, Frase B. A vírgula após 'however' é indispensável!",
  },
  "q-if-1": {
    sentenceTranslation: "Se você for lá, eu vou também.",
    whyCorrect:
      "'If' introduz uma condição simples na primeira condicional (If + presente simples, futuro com will).",
    whyOthersFail:
      "'Despite' e 'Because of' exigem substantivo. 'Meanwhile' expressa tempo paralelo.",
    proTip:
      "Estrutura padrão da First Conditional: 'If + Present Simple, will + verb'. Exemplo: 'If it rains, we will stay home'.",
  },
  "q-in-case-1": {
    sentenceTranslation: "Leve este exame ao seu médico, só por precaução.",
    whyCorrect:
      "'In case' (e a expressão 'just in case') é usado para preparar-se preventivamente para uma possibilidade futura.",
    whyOthersFail:
      "'As a result' indicaria consequência consumada. 'On the other hand' expressa contraponto. 'Instead of' indica substituição.",
    proTip:
      "'In case' não é sinônimo direto de 'if': 'I will take an umbrella in case it rains' (Levo o guarda-chuva antes, para me prevenir, chova ou não!).",
  },
  "q-in-fact-1": {
    sentenceTranslation: "Na verdade, o Brasil é o único país pentacampeão de futebol.",
    whyCorrect:
      "'In fact' reforça a veracidade de uma informação ou apresenta um dado real e contundente ('de fato / na verdade').",
    whyOthersFail:
      "'Unless' expressa condição negativa. 'Even if' expressa hipótese. 'Rather than' expressa preferência.",
    proTip:
      "'In fact' é excelente para introduzir uma estatística, curiosidade ou confirmação de peso em conversas profissionais.",
  },
  "q-in-order-to-1": {
    sentenceTranslation: "Eu vim trabalhar presencialmente a fim de concluir o projeto.",
    whyCorrect:
      "'In order to' expressa propósito claro e é seguido diretamente pelo verbo na sua forma base infinitiva ('finish').",
    whyOthersFail:
      "'Because of' exige substantivo. 'Even though' exige oração completa de contraste. 'As far as' delimita conhecimento.",
    proTip:
      "Fórmula de memorização: 'In order to + VERBO' (propósito direto). Exemplo: 'I practice every day in order to become fluent'.",
  },
  "q-in-spite-of-1": {
    sentenceTranslation: "Apesar do que você disse, ele conseguiu entender.",
    whyCorrect:
      "'In spite of' expressa concessão e exige substantivo ou oração substantiva ('what you said').",
    whyOthersFail:
      "'Although' exigiria oração sem 'of'. 'So that' indica finalidade. 'Hence' indica resultado.",
    proTip:
      "'In spite of' tem exatamente o mesmo significado de 'Despite'. Atenção: NUNCA diga 'despite of' — é 'despite' puro ou 'in spite of' com 'of'!",
  },
  "q-indeed-1": {
    sentenceTranslation: "A equipe fez um progresso significativo nesta sprint. De fato, eles completaram todos os itens de alta prioridade antes do prazo.",
    whyCorrect:
      "'Indeed' atua como conector de confirmação e fortalecimento da ideia apresentada na frase anterior ('de fato / com efeito').",
    whyOthersFail:
      "'Otherwise' indica consequência negativa. 'Unless' indica condição negativa. 'Instead of' indica substituição.",
    proTip:
      "Use 'indeed' para validar fortemente uma afirmação prévia com uma evidência concreta logo em seguida.",
  },
  "q-likewise-1": {
    sentenceTranslation: "Engenheiros seniores devem revisar seus pull requests. Da mesma forma, espera-se que desenvolvedores juniores sigem os mesmos padrões de teste.",
    whyCorrect:
      "'Likewise' expressa analogia direta, reciprocidade ou paralelismo de conduta entre dois sujeitos ('da mesma forma / igualmente').",
    whyOthersFail:
      "'Otherwise' indicaria alerta/consequência. 'Even though' indicaria oposição. 'Because of' indicaria causa.",
    proTip:
      "Em conversas cotidianas, responder simplesmente 'Likewise!' é uma forma polida e simpática de dizer 'Para você também!' ou 'Digo o mesmo!'.",
  },
  "q-actually-1": {
    sentenceTranslation: "Você disse que o projeto estava no prazo. Na verdade, o prazo está se esgotando.",
    whyCorrect:
      "'Actually' serve para revelar a realidade fática de uma situação, corrigindo delicadamente uma premissa equivocada.",
    whyOthersFail:
      "'In order to' expressa objetivo. 'As well as' expressa adição. 'So that' expressa finalidade.",
    proTip:
      "Lembrete fundamental: 'Actually' = 'Na verdade / Para falar a verdade'. Não confunda com 'Currently' (atualmente).",
  },
  "q-despite-1": {
    sentenceTranslation: "Apesar da chuva, eu vou à praia.",
    whyCorrect:
      "'Despite' é seguido diretamente de substantivo ('the rain') sem verbo conjugado.",
    whyOthersFail:
      "'Although' exigiria verbo ('Although it is raining'). 'Because' daria o sentido absurdo de ir à praia por causa da chuva. 'Even if' exige oração com verbo.",
    proTip:
      "Par de ouro: 'Despite the rain' (com substantivo) = 'Although it is raining' (com verbo). Memorize esse contraste!",
  },
  "q-therefore-1": {
    sentenceTranslation: "O servidor estava fora do ar. Portanto, nós paramos os testes.",
    whyCorrect:
      "'Therefore' conecta uma premissa à sua conclusão lógica inevitável com tom formal ('portanto / por esta razão').",
    whyOthersFail:
      "'Although' e 'On the other hand' expressam contraste. 'Instead of' expressa substituição.",
    proTip:
      "'Therefore' é a palavra-chave de conclusões em inglês acadêmico e corporativo. Equivale a 'Assim sendo'.",
  },
  "q-unless-1": {
    sentenceTranslation: "Você não vai passar na prova a menos que estude hoje à noite.",
    whyCorrect:
      "'Unless' equivale exatamente a 'if not' (se não), introduzindo a única condição capaz de reverter o resultado negativo.",
    whyOthersFail:
      "'Because of', 'as well as' e 'in spite of' não introduzem condição negativa.",
    proTip:
      "Pense sempre: 'Unless you study' = 'If you do not study'. Como 'unless' já é negativo, não use 'not' junto com ele!",
  },
  "q-so-that-1": {
    sentenceTranslation: "Eu estou aqui a fim de que eu possa estudar.",
    whyCorrect:
      "'So that' expressa finalidade acompanhado de oração com verbo modal ('so that I can study').",
    whyOthersFail:
      "'Despite' expressa oposição. 'However' expressa contraste. 'No longer' expressa término de hábito.",
    proTip:
      "Diferença entre 'In order to' e 'So that': 'In order to' vem seguido de verbo puro ('in order to study'). 'So that' vem com sujeito e modal ('so that I can study').",
  },
  "q-though-1": {
    sentenceTranslation: "Eu estou cansado. Vou à festa, embora.",
    whyCorrect:
      "Em inglês coloquial e fluente, 'though' no final da oração é extremamente comum para dar uma nuance de 'apesar disso / no entanto'.",
    whyOthersFail:
      "'Therefore', 'in order to' e 'as a result' não têm essa propriedade sintática de fechar a frase com sentido de concessão.",
    proTip:
      "Quer soar como um nativo fluente? Coloque 'though' no final da frase para relativizar algo: 'It's expensive. I like it, though!' (É caro. Mas eu gosto!).",
  },
  "q-on-the-other-hand-1": {
    sentenceTranslation: "O plano é mais barato. Por outro lado, vai demorar muito mais.",
    whyCorrect:
      "'On the other hand' introduz o outro lado da moeda em uma análise ou comparação ('por outro lado').",
    whyOthersFail:
      "'As long as' expressa condição. 'In order to' expressa finalidade. 'For instance' expressa exemplo.",
    proTip:
      "Par de contraste: 'On the one hand, X... On the other hand, Y...' (Por um lado X... por outro lado Y...).",
  },
  "q-otherwise-1": {
    sentenceTranslation: "Envie o relatório hoje. Caso contrário, o cliente vai cancelar a reunião.",
    whyCorrect:
      "'Otherwise' aponta a consequência desfavorável caso a instrução anterior não seja cumprida ('senão / caso contrário').",
    whyOthersFail:
      "'Likewise' expressa semelhança. 'Meanwhile' expressa simultaneidade. 'Along with' expressa companhia.",
    proTip:
      "'Otherwise' equivale a 'or else' ('ou então'). É essencial em avisos e SLAs de suporte ao cliente.",
  },
  "q-whereas-1": {
    sentenceTranslation: "O backend está pronto, ao passo que o frontend ainda está em andamento.",
    whyCorrect:
      "'Whereas' compara duas realidades paralelas que estão em estados opostos ou divergentes ('ao passo que / enquanto que').",
    whyOthersFail:
      "'Because of', 'in order to' e 'as a result' indicam causa, finalidade e consequência, não comparação contrastante.",
    proTip:
      "'Whereas' é excelente em reuniões de status report para pontuar o que já foi feito versus o que ainda falta.",
  },
  "q-thats-why-1": {
    sentenceTranslation: "O trânsito estava horrível. É por isso que o desenvolvedor se atrasou.",
    whyCorrect:
      "'That's why' liga a causa prévia ao seu desfecho de forma natural na conversação ('é por isso que / por isso').",
    whyOthersFail:
      "'Even though' expressa concessão. 'Instead of' expressa substituição. 'In case' expressa precaução.",
    proTip:
      "'That's why' é o conector de causa e efeito mais frequente no inglês oral do dia a dia.",
  },
  "q-while-1": {
    sentenceTranslation: "Enquanto o time de QA testava a API, os desenvolvedores corrigiam os bugs da interface.",
    whyCorrect:
      "'While' denota simultaneidade no tempo contínuo ('enquanto duas ações transcorriam ao mesmo tempo').",
    whyOthersFail:
      "'Unless' expressa condição. 'Due to' expressa causa. 'Rather than' expressa preferência.",
    proTip:
      "'While' pode significar 'enquanto' (tempo) ou 'ao passo que' (contraste). Ambos funcionam muito bem em comunicação técnica.",
  },
  "q-rather-than-1": {
    sentenceTranslation: "Nós podemos contratar mais um desenvolvedor backend em vez de um desenvolvedor frontend.",
    whyCorrect:
      "'Rather than' expressa preferência deliberada de uma alternativa sobre outra ('em vez de / preferível a').",
    whyOthersFail:
      "'Because' indicaria causa. 'So that' indicaria objetivo. 'Even if' indicaria condição extrema.",
    proTip:
      "Use 'rather than' para expor escolhas arquiteturais ponderadas: 'We chose TypeScript rather than plain JavaScript'.",
  },
};

export function getTeacherNote(questionId: string): TeacherNote | null {
  return TEACHER_NOTES[questionId] ?? null;
}
