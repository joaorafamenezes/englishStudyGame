import type { ConnectorFamily } from "../types";

export type EverQuestion = {
  id: string;
  prompt: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  connector: string;
  family: ConnectorFamily;
  translation: string;
  explanation: string;
  fullSentence: string;
  sentenceTranslation: string;
  whyCorrect: string;
  whyOthersFail: string;
  proTip: string;
};

export const EVER_QUESTIONS: EverQuestion[] = [
  {
    "id": "q-ever-whoever-oncall",
    "prompt": "_____ is on call tonight must monitor the PagerDuty alerts and respond to any latency spikes immediately.",
    "options": [
      {
        "id": "a",
        "text": "Whoever"
      },
      {
        "id": "b",
        "text": "Whenever"
      },
      {
        "id": "c",
        "text": "Wherever"
      },
      {
        "id": "d",
        "text": "Whatever"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whoever",
    "family": "emphasis",
    "translation": "Quem quer que / Qualquer pessoa que",
    "explanation": "'Whoever' refere-se a uma pessoa que cumpre a função de plantonista.",
    "fullSentence": "Whoever is on call tonight must monitor the PagerDuty alerts and respond to any latency spikes immediately.",
    "sentenceTranslation": "Quem quer que esteja de plantão hoje à noite deve monitorar os alertas do PagerDuty e responder a qualquer pico de latência imediatamente.",
    "whyCorrect": "'Whoever' refere-se a uma PESSOA (qualquer pessoa que / quem quer que). Como a lacuna ocupa a posição de sujeito humano da oração, 'Whoever' é a única opção gramaticalmente correta.",
    "whyOthersFail": "'Whenever' refere-se a tempo ('sempre que'). 'Wherever' refere-se a lugar ('onde quer que'). 'Whatever' refere-se a coisas ou eventos ('o que quer que').",
    "proTip": "Dica de ouro da Família -Ever: A lacuna é uma pessoa? Se sim, a resposta é 'Whoever' ('any person who')."
  },
  {
    "id": "q-ever-whoever-pr-review",
    "prompt": "_____ authored this pull request followed clean architecture principles and wrote excellent automated unit tests.",
    "options": [
      {
        "id": "a",
        "text": "Whatever"
      },
      {
        "id": "b",
        "text": "Whoever"
      },
      {
        "id": "c",
        "text": "Whenever"
      },
      {
        "id": "d",
        "text": "Wherever"
      }
    ],
    "correctOptionId": "b",
    "connector": "Whoever",
    "family": "emphasis",
    "translation": "Quem quer que / Qualquer pessoa que",
    "explanation": "'Whoever' indica o autor humano do código ('the person who authored').",
    "fullSentence": "Whoever authored this pull request followed clean architecture principles and wrote excellent automated unit tests.",
    "sentenceTranslation": "Quem quer que tenha criado este pull request seguiu princípios de arquitetura limpa e escreveu excelentes testes unitários automatizados.",
    "whyCorrect": "'Whoever' conecta-se diretamente ao sujeito humano que executou a ação ('authored the pull request').",
    "whyOthersFail": "'Whatever' seria para coisas. 'Whenever' para momentos temporais. 'Wherever' para locais geográficos.",
    "proTip": "'Whoever' equivale a 'the person who'. Substitua mentalmente para confirmar!"
  },
  {
    "id": "q-ever-whoever-scrum-ticket",
    "prompt": "The Scrum Master announced that _____ finishes their sprint task early should help pair program with the junior developer.",
    "options": [
      {
        "id": "a",
        "text": "Wherever"
      },
      {
        "id": "b",
        "text": "Whenever"
      },
      {
        "id": "c",
        "text": "Whoever"
      },
      {
        "id": "d",
        "text": "Whatever"
      }
    ],
    "correctOptionId": "c",
    "connector": "Whoever",
    "family": "emphasis",
    "translation": "Quem quer que / Qualquer pessoa que",
    "explanation": "'Whoever' refere-se a qualquer integrante da squad que terminar a tarefa primeiro.",
    "fullSentence": "The Scrum Master announced that whoever finishes their sprint task early should help pair program with the junior developer.",
    "sentenceTranslation": "O Scrum Master anunciou que quem quer que termine sua tarefa da sprint mais cedo deve ajudar a programar em par com o desenvolvedor júnior.",
    "whyCorrect": "'Whoever' indica qualquer membro do time (pessoa) que concluir primeiro a sua história de usuário.",
    "whyOthersFail": "'Wherever' indicaria localização física. 'Whenever' indicaria o horário/momento. 'Whatever' indicaria uma coisa ou objeto.",
    "proTip": "No vocabulário ágil, use 'whoever' para delegar tarefas a qualquer integrante da squad que atenda a uma condição."
  },
  {
    "id": "q-ever-whoever-postmortem-root-cause",
    "prompt": "_____ discovers the root cause of the memory leak should document the solution in the team post-mortem report.",
    "options": [
      {
        "id": "a",
        "text": "Whoever"
      },
      {
        "id": "b",
        "text": "Whatever"
      },
      {
        "id": "c",
        "text": "Wherever"
      },
      {
        "id": "d",
        "text": "Whenever"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whoever",
    "family": "emphasis",
    "translation": "Quem quer que / Qualquer pessoa que",
    "explanation": "'Whoever' introduz o agente da oração subordinada, referindo-se a uma pessoa.",
    "fullSentence": "Whoever discovers the root cause of the memory leak should document the solution in the team post-mortem report.",
    "sentenceTranslation": "Quem quer que descubra a causa raiz do vazamento de memória deve documentar a solução no relatório de post-mortem do time.",
    "whyCorrect": "'Whoever' introduz o agente da oração ('discovers the root cause') referindo-se a uma pessoa.",
    "whyOthersFail": "'Whatever' trata de coisas. 'Wherever' de localização. 'Whenever' de tempo.",
    "proTip": "Lembre-se: 'Who' = pessoa -> 'Whoever' = qualquer pessoa que."
  },
  {
    "id": "q-ever-whoever-leads-daily-standup",
    "prompt": "_____ facilitates the Daily Scrum meeting should ensure that discussion stays strictly within the fifteen-minute timebox.",
    "options": [
      {
        "id": "a",
        "text": "Whatever"
      },
      {
        "id": "b",
        "text": "Whoever"
      },
      {
        "id": "c",
        "text": "Whenever"
      },
      {
        "id": "d",
        "text": "Wherever"
      }
    ],
    "correctOptionId": "b",
    "connector": "Whoever",
    "family": "emphasis",
    "translation": "Quem quer que / Qualquer pessoa que",
    "explanation": "'Whoever' refere-se ao facilitador da reunião (sujeito humano).",
    "fullSentence": "Whoever facilitates the Daily Scrum meeting should ensure that discussion stays strictly within the fifteen-minute timebox.",
    "sentenceTranslation": "Quem quer que facilite a reunião da Daily Scrum deve garantir que a discussão permaneça rigorosamente dentro do timebox de quinze minutos.",
    "whyCorrect": "'Whoever' identifica o facilitador da cerimônia (uma pessoa/indivíduo da equipe).",
    "whyOthersFail": "'Whatever' seria para itens inanimados. 'Whenever' para o horário. 'Wherever' para a sala ou local.",
    "proTip": "Prática ágil: qualquer membro da squad pode facilitar a Daily; por isso usamos 'Whoever facilitates'."
  },
  {
    "id": "q-ever-wherever-cloud-workstation",
    "prompt": "With modern cloud workstations, software engineers can code securely from _____ they are located in the world.",
    "options": [
      {
        "id": "a",
        "text": "whoever"
      },
      {
        "id": "b",
        "text": "whenever"
      },
      {
        "id": "c",
        "text": "wherever"
      },
      {
        "id": "d",
        "text": "whereas"
      }
    ],
    "correctOptionId": "c",
    "connector": "wherever",
    "family": "emphasis",
    "translation": "onde quer que / de qualquer lugar",
    "explanation": "'Wherever' expressa ausência de restrição geográfica ou espacial.",
    "fullSentence": "With modern cloud workstations, software engineers can code securely from wherever they are located in the world.",
    "sentenceTranslation": "Com estações de trabalho modernas em nuvem, engenheiros de software podem programar com segurança de onde quer que estejam no mundo.",
    "whyCorrect": "'Wherever' expressa ausência de restrição geográfica ou espacial ('de onde quer que estejam').",
    "whyOthersFail": "'Whoever' refere-se a pessoas ('quem quer que'). 'Whenever' refere-se a tempo ('sempre que'). 'Whereas' significa 'ao passo que' (contraste) e NÃO indica lugar, apesar de começar com 'Where-'!",
    "proTip": "Dica de ouro: A lacuna é um local ou espaço? Se sim, a resposta é 'Wherever' ('any place where'). Cuidado para não confundir com 'Whereas' ('ao passo que')!"
  },
  {
    "id": "q-ever-wherever-microservices-bottleneck",
    "prompt": "In our distributed architecture, _____ a latency bottleneck occurs, the monitoring agent automatically spins up read replicas.",
    "options": [
      {
        "id": "a",
        "text": "whatever"
      },
      {
        "id": "b",
        "text": "wherever"
      },
      {
        "id": "c",
        "text": "whoever"
      },
      {
        "id": "d",
        "text": "however"
      }
    ],
    "correctOptionId": "b",
    "connector": "wherever",
    "family": "emphasis",
    "translation": "onde quer que / em qualquer lugar que",
    "explanation": "'Wherever' localiza o ponto da arquitetura onde o problema acontece.",
    "fullSentence": "In our distributed architecture, wherever a latency bottleneck occurs, the monitoring agent automatically spins up read replicas.",
    "sentenceTranslation": "Em nossa arquitetura distribuída, onde quer que ocorra um gargalo de latência, o agente de monitoramento cria automaticamente réplicas de leitura.",
    "whyCorrect": "'Wherever' localiza o ponto ou componente do sistema onde o gargalo acontece ('in any service/place where').",
    "whyOthersFail": "'Whatever' refere-se a coisas genéricas. 'Whoever' refere-se a pessoas. 'However' refere-se a modo/grau.",
    "proTip": "'Where' = lugar -> 'Wherever' = qualquer lugar que / onde quer que."
  },
  {
    "id": "q-ever-wherever-clean-code-domains",
    "prompt": "_____ you navigate in this backend repository, you will find strict boundary isolation between business domains.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "Whoever"
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
    "correctOptionId": "d",
    "connector": "Wherever",
    "family": "emphasis",
    "translation": "Onde quer que / Para onde quer que",
    "explanation": "'Wherever' denota qualquer diretório ou pasta do repositório.",
    "fullSentence": "Wherever you navigate in this backend repository, you will find strict boundary isolation between business domains.",
    "sentenceTranslation": "Onde quer que você navegue neste repositório backend, encontrará isolamento rigoroso de fronteiras entre os domínios de negócio.",
    "whyCorrect": "'Wherever' denota qualquer diretório, módulo ou pasta dentro da estrutura do código.",
    "whyOthersFail": "'Whenever' seria no momento temporal. 'Whoever' seria quem navega (pessoa). 'Whatever' seria o que você navega.",
    "proTip": "Use 'wherever' para indicar consistência espacial em qualquer parte do projeto."
  },
  {
    "id": "q-ever-wherever-you-deploy-containers",
    "prompt": "Our Docker container images are completely portable, running reliably _____ they are hosted—on local developer laptops or in cloud clusters.",
    "options": [
      {
        "id": "a",
        "text": "wherever"
      },
      {
        "id": "b",
        "text": "whenever"
      },
      {
        "id": "c",
        "text": "whoever"
      },
      {
        "id": "d",
        "text": "whatever"
      }
    ],
    "correctOptionId": "a",
    "connector": "wherever",
    "family": "emphasis",
    "translation": "onde quer que / em qualquer lugar que",
    "explanation": "'Wherever' indica flexibilidade de ambiente ou host.",
    "fullSentence": "Our Docker container images are completely portable, running reliably wherever they are hosted—on local developer laptops or in cloud clusters.",
    "sentenceTranslation": "Nossas imagens de container Docker são completamente portáveis, executando de forma confiável onde quer que sejam hospedadas — em laptops locais de desenvolvedores ou em clusters na nuvem.",
    "whyCorrect": "'Wherever' indica flexibilidade geográfica e de ambiente de execução (lugar/host).",
    "whyOthersFail": "'Whenever' seria no momento. 'Whoever' seria quem executa. 'Whatever' seria o que executa.",
    "proTip": "Portabilidade de containers: 'run wherever you want' (execute onde quer que você queira)."
  },
  {
    "id": "q-ever-whenever-ci-pipeline-fails",
    "prompt": "_____ the automated test suite fails on the main branch, a high-priority alert is dispatched to our squad channel.",
    "options": [
      {
        "id": "a",
        "text": "Wherever"
      },
      {
        "id": "b",
        "text": "Whoever"
      },
      {
        "id": "c",
        "text": "Whenever"
      },
      {
        "id": "d",
        "text": "Whatever"
      }
    ],
    "correctOptionId": "c",
    "connector": "Whenever",
    "family": "time",
    "translation": "Sempre que / Toda vez que",
    "explanation": "'Whenever' expressa tempo e repetição de evento ('every time that').",
    "fullSentence": "Whenever the automated test suite fails on the main branch, a high-priority alert is dispatched to our squad channel.",
    "sentenceTranslation": "Sempre que o conjunto de testes automatizados falha na branch principal, um alerta de alta prioridade é enviado para o canal da nossa squad.",
    "whyCorrect": "'Whenever' introduz uma oração adverbial temporal indicando repetição e tempo ('every time that / at any moment that').",
    "whyOthersFail": "'Wherever' indicaria lugar. 'Whoever' indicaria pessoa. 'Whatever' indicaria objeto ou evento.",
    "proTip": "Dica de ouro: A lacuna é um momento ou ocasião repetida? Se sim, use 'Whenever' ('every time that')."
  },
  {
    "id": "q-ever-whenever-developer-pushes-commit",
    "prompt": "You can trigger the integration tests _____ you are ready; the CI runner is idle and waiting.",
    "options": [
      {
        "id": "a",
        "text": "wherever"
      },
      {
        "id": "b",
        "text": "whoever"
      },
      {
        "id": "c",
        "text": "whatever"
      },
      {
        "id": "d",
        "text": "whenever"
      }
    ],
    "correctOptionId": "d",
    "connector": "whenever",
    "family": "time",
    "translation": "sempre que / quando quer que",
    "explanation": "'Whenever' expressa liberdade temporal irrestrita ('no momento em que desejar').",
    "fullSentence": "You can trigger the integration tests whenever you are ready; the CI runner is idle and waiting.",
    "sentenceTranslation": "Você pode acionar os testes de integração quando quer que esteja pronto; o executor de CI está ocioso e aguardando.",
    "whyCorrect": "'Whenever' expressa liberdade temporal irrestrita ('no momento em que desejar').",
    "whyOthersFail": "'Wherever' falaria de lugar físico. 'Whoever' falaria de pessoa. 'Whatever' falaria de coisa.",
    "proTip": "'When' = tempo -> 'Whenever' = qualquer momento que / sempre que."
  },
  {
    "id": "q-ever-whenever-sprint-retrospective-begins",
    "prompt": "_____ our sprint retrospective starts, the Scrum Master reminds everyone that the prime directive is blameless continuous improvement.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "Whoever"
      },
      {
        "id": "c",
        "text": "Wherever"
      },
      {
        "id": "d",
        "text": "Whatever"
      }
    ],
    "correctOptionId": "a",
    "connector": "Whenever",
    "family": "time",
    "translation": "Sempre que / Toda vez que",
    "explanation": "'Whenever' marca a regularidade temporal de cada reunião.",
    "fullSentence": "Whenever our sprint retrospective starts, the Scrum Master reminds everyone that the prime directive is blameless continuous improvement.",
    "sentenceTranslation": "Sempre que a nossa retrospectiva de sprint começa, o Scrum Master lembra a todos que a diretiva primária é a melhoria contínua sem culpados.",
    "whyCorrect": "'Whenever' marca a regularidade temporal cíclica de cada reunião de retrospectiva.",
    "whyOthersFail": "'Whoever' seria para quem começa. 'Wherever' para onde começa. 'Whatever' para o que começa.",
    "proTip": "Muito usado em cerimônias recorrentes do Scrum: 'whenever we plan', 'whenever we reflect'."
  },
  {
    "id": "q-ever-whatever-happens-production-demo",
    "prompt": "_____ happens during the client demonstration, maintain composure and explain the architectural trade-offs with confidence.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "Whoever"
      },
      {
        "id": "c",
        "text": "Wherever"
      },
      {
        "id": "d",
        "text": "Whatever"
      }
    ],
    "correctOptionId": "d",
    "connector": "Whatever",
    "family": "emphasis",
    "translation": "O que quer que / Seja o que for que",
    "explanation": "'Whatever' refere-se a coisas, eventos ou acontecimentos imprevistos.",
    "fullSentence": "Whatever happens during the client demonstration, maintain composure and explain the architectural trade-offs with confidence.",
    "sentenceTranslation": "O que quer que aconteça durante a demonstração para o cliente, mantenha a compostura e explique as escolhas arquiteturais com confiança.",
    "whyCorrect": "'Whatever' expressa qualquer coisa, evento ou imprevisto ('anything that happens / no matter what happens').",
    "whyOthersFail": "'Whoever' trataria de uma pessoa ('quem quer que'). 'Whenever' trataria de tempo ('sempre que'). 'Wherever' trataria de lugar ('onde quer que').",
    "proTip": "Dica de ouro: A lacuna refere-se a coisas, ações ou acontecimentos? Se sim, use 'Whatever' ('anything that')."
  },
  {
    "id": "q-ever-whatever-framework-chosen-team",
    "prompt": "_____ frontend framework the tech committee chooses, the underlying REST and GraphQL APIs will remain completely unchanged.",
    "options": [
      {
        "id": "a",
        "text": "Whoever"
      },
      {
        "id": "b",
        "text": "Whenever"
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
    "correctOptionId": "c",
    "connector": "Whatever",
    "family": "emphasis",
    "translation": "Qualquer que seja o / O que quer que",
    "explanation": "'Whatever' qualifica o substantivo 'frontend framework'.",
    "fullSentence": "Whatever frontend framework the tech committee chooses, the underlying REST and GraphQL APIs will remain completely unchanged.",
    "sentenceTranslation": "Qualquer que seja o framework frontend que o comitê de tecnologia escolher, as APIs subjacentes em REST e GraphQL permanecerão completamente inalteradas.",
    "whyCorrect": "'Whatever' funciona como determinante relativo acompanhando o substantivo 'frontend framework' ('qualquer framework que seja').",
    "whyOthersFail": "'Whoever' só acompanha pessoas. 'Whenever' e 'Wherever' são conjunções de tempo e espaço e não determinam substantivos como 'framework'.",
    "proTip": "'What' = coisa -> 'Whatever' = qualquer coisa que / qualquer [substantivo] que."
  },
  {
    "id": "q-ever-whatever-cloud-provider-architecture",
    "prompt": "Our Kubernetes manifests are designed to deploy seamlessly on _____ cloud infrastructure our enterprise partners provide.",
    "options": [
      {
        "id": "a",
        "text": "whenever"
      },
      {
        "id": "b",
        "text": "whoever"
      },
      {
        "id": "c",
        "text": "whatever"
      },
      {
        "id": "d",
        "text": "however"
      }
    ],
    "correctOptionId": "c",
    "connector": "whatever",
    "family": "emphasis",
    "translation": "qualquer / o que quer que",
    "explanation": "'Whatever' determina 'cloud infrastructure' (coisa/recurso).",
    "fullSentence": "Our Kubernetes manifests are designed to deploy seamlessly on whatever cloud infrastructure our enterprise partners provide.",
    "sentenceTranslation": "Nossos manifestos do Kubernetes foram projetados para serem implantados sem problemas em qualquer infraestrutura de nuvem que nossos parceiros corporativos fornecerem.",
    "whyCorrect": "'Whatever' qualifica 'cloud infrastructure' (coisa/recurso), mostrando independência de tecnologia proprietária.",
    "whyOthersFail": "'Whoever' refere-se a pessoas. 'Whenever' refere-se a tempo. 'However' refere-se a modo ou contraste.",
    "proTip": "'Whatever + substantivo' é um padrão clássico em arquitetura de software agnóstica a provedores."
  },
  {
    "id": "q-ever-whatever-requirements-client-requests",
    "prompt": "The engineering squad adopts Agile principles so we can adapt gracefully to _____ new business requirements the stakeholder requests.",
    "options": [
      {
        "id": "a",
        "text": "whenever"
      },
      {
        "id": "b",
        "text": "whoever"
      },
      {
        "id": "c",
        "text": "whatever"
      },
      {
        "id": "d",
        "text": "wherever"
      }
    ],
    "correctOptionId": "c",
    "connector": "whatever",
    "family": "emphasis",
    "translation": "quaisquer / o que quer que",
    "explanation": "'Whatever' qualifica os requisitos de negócio.",
    "fullSentence": "The engineering squad adopts Agile principles so we can adapt gracefully to whatever new business requirements the stakeholder requests.",
    "sentenceTranslation": "A squad de engenharia adota princípios ágeis para que possamos nos adaptar com facilidade a quaisquer novos requisitos de negócio que o stakeholder solicitar.",
    "whyCorrect": "'Whatever' determina 'new business requirements' (coisas/requisitos que o cliente pode pedir).",
    "whyOthersFail": "'Whoever' seria para pessoas. 'Whenever' para tempo. 'Wherever' para lugar.",
    "proTip": "'Whatever + substantivo plural' expressa 'quaisquer que sejam os requisitos'."
  },
  {
    "id": "q-ever-however-hard-challenge-delivers",
    "prompt": "_____ difficult the legacy monolith migration seems, breaking the code into domain-driven microservices guarantees success.",
    "options": [
      {
        "id": "a",
        "text": "Whatever"
      },
      {
        "id": "b",
        "text": "Whenever"
      },
      {
        "id": "c",
        "text": "However"
      },
      {
        "id": "d",
        "text": "Wherever"
      }
    ],
    "correctOptionId": "c",
    "connector": "However",
    "family": "contrast",
    "translation": "Por mais que / Por mais difícil que",
    "explanation": "'However + adjetivo' (However difficult) expressa grau de concessão ('por mais difícil que').",
    "fullSentence": "However difficult the legacy monolith migration seems, breaking the code into domain-driven microservices guarantees success.",
    "sentenceTranslation": "Por mais difícil que a migração do monólito legado pareça, quebrar o código em microsserviços orientados a domínio garante o sucesso.",
    "whyCorrect": "'However + adjetivo' (However difficult) expressa grau de concessão ('no matter how difficult / por mais difícil que'). Este é o uso clássico do sufixo '-ever' com 'how'!",
    "whyOthersFail": "'Whatever difficult' é agramatical em inglês (usa-se 'However + adjetivo', nunca 'Whatever + adjetivo'). 'Whenever' indicaria tempo e 'Wherever' lugar.",
    "proTip": "Regra de ouro vital: Antes de um ADJETIVO ou ADVÉRBIO ('However difficult', 'However fast', 'However hard'), a única opção correta da família é 'However' com sentido de 'por mais que'!"
  },
  {
    "id": "q-ever-however-you-organize-clean-code",
    "prompt": "You can format your code _____ you prefer, provided you follow the team's shared ESLint and Prettier rules.",
    "options": [
      {
        "id": "a",
        "text": "whoever"
      },
      {
        "id": "b",
        "text": "wherever"
      },
      {
        "id": "c",
        "text": "however"
      },
      {
        "id": "d",
        "text": "whenever"
      }
    ],
    "correctOptionId": "c",
    "connector": "however",
    "family": "contrast",
    "translation": "como quer que / de qualquer maneira que",
    "explanation": "'However' expressa modo ou maneira ('in whatever way you prefer').",
    "fullSentence": "You can format your code however you prefer, provided you follow the team's shared ESLint and Prettier rules.",
    "sentenceTranslation": "Você pode formatar o seu código como quer que prefira, contanto que siga as regras compartilhadas de ESLint e Prettier do time.",
    "whyCorrect": "'However' expressa modo ou maneira ('in whatever way you prefer / como quer que').",
    "whyOthersFail": "'Whoever' falaria de quem formata (pessoa). 'Wherever' falaria de onde formata (lugar). 'Whenever' falaria do momento (tempo).",
    "proTip": "'How' = modo/maneira -> 'However' = como quer que / de qualquer maneira que."
  },
  {
    "id": "q-ever-however-tight-sprint-deadline",
    "prompt": "_____ tight the sprint deadline became, the developers refused to compromise on writing automated integration tests.",
    "options": [
      {
        "id": "a",
        "text": "Whenever"
      },
      {
        "id": "b",
        "text": "However"
      },
      {
        "id": "c",
        "text": "Whatever"
      },
      {
        "id": "d",
        "text": "Whoever"
      }
    ],
    "correctOptionId": "b",
    "connector": "However",
    "family": "contrast",
    "translation": "Por mais apertado que",
    "explanation": "'However + adjetivo' expressa intensidade e concessão ('por mais apertado que').",
    "fullSentence": "However tight the sprint deadline became, the developers refused to compromise on writing automated integration tests.",
    "sentenceTranslation": "Por mais apertado que o prazo da sprint tenha ficado, os desenvolvedores se recusaram a abrir mão de escrever testes de integração automatizados.",
    "whyCorrect": "'However + adjetivo' ('However tight') expressa 'por mais apertado que fosse o prazo'.",
    "whyOthersFail": "'Whatever tight' não existe gramaticalmente. 'Whenever' indicaria quando. 'Whoever' indicaria quem.",
    "proTip": "Memorize a estrutura: 'However + ADJETIVO + sujeito + verbo' = 'Por mais [adjetivo] que [sujeito] seja'."
  },
  {
    "id": "q-ever-contrast-however-architect-decision",
    "prompt": "The cloud infrastructure costs increased after the product launch; _____ , the ninety-nine percent uptime SLA fully justified the expense.",
    "options": [
      {
        "id": "a",
        "text": "whatever"
      },
      {
        "id": "b",
        "text": "whenever"
      },
      {
        "id": "c",
        "text": "however"
      },
      {
        "id": "d",
        "text": "wherever"
      }
    ],
    "correctOptionId": "c",
    "connector": "however",
    "family": "contrast",
    "translation": "no entanto / contudo",
    "explanation": "'However' atua como conector de transição adversativa.",
    "fullSentence": "The cloud infrastructure costs increased after the product launch; however, the ninety-nine percent uptime SLA fully justified the expense.",
    "sentenceTranslation": "Os custos de infraestrutura em nuvem aumentaram após o lançamento do produto; no entanto, o SLA de noventa e nove por cento de disponibilidade justificou plenamente a despesa.",
    "whyCorrect": "'However' aqui atua como o tradicional conector de transição adversativa ('no entanto/contudo'), conectando duas orações independentes.",
    "whyOthersFail": "'Whatever', 'Whenever' e 'Wherever' não funcionam como conectores adversativos de transição entre ponto e vírgula e vírgula.",
    "proTip": "Note a pontuação clássica: ponto e vírgula antes de '; however,' e vírgula logo após."
  },
  {
    "id": "q-ever-whereas-scrum-kanban",
    "prompt": "Scrum organizes agile work into fixed two-week sprints, _____ Kanban relies on continuous delivery and work-in-progress limits.",
    "options": [
      {
        "id": "a",
        "text": "wherever"
      },
      {
        "id": "b",
        "text": "whereas"
      },
      {
        "id": "c",
        "text": "whatever"
      },
      {
        "id": "d",
        "text": "whoever"
      }
    ],
    "correctOptionId": "b",
    "connector": "whereas",
    "family": "contrast",
    "translation": "ao passo que / enquanto que",
    "explanation": "'Whereas' introduz uma oração subordinada que contrapõe diretamente dois métodos de trabalho (Scrum vs Kanban).",
    "fullSentence": "Scrum organizes agile work into fixed two-week sprints, whereas Kanban relies on continuous delivery and work-in-progress limits.",
    "sentenceTranslation": "O Scrum organiza o trabalho ágil em sprints fixas de duas semanas, ao passo que o Kanban depende de entrega contínua e limites de trabalho em progresso.",
    "whyCorrect": "'Whereas' contrapõe diretamente dois métodos ou características simultâneas na mesma oração ('ao passo que / enquanto que').",
    "whyOthersFail": "'Wherever' expressa lugar ('onde quer que seja'). 'Whatever' expressa coisas ou fatos ('o que quer que'). 'Whoever' expressa pessoas ('quem quer que').",
    "proTip": "Cuidado com o falso amigo: 'Whereas' começa com 'Where-', mas NÃO expressa lugar! É um conector de contraste ('ao passo que')."
  },
  {
    "id": "q-ever-whereas-monolith-microservices",
    "prompt": "Monolithic architectures simplify local debugging and deployment, _____ microservices provide independent scalability and squad autonomy.",
    "options": [
      {
        "id": "a",
        "text": "however"
      },
      {
        "id": "b",
        "text": "wherever"
      },
      {
        "id": "c",
        "text": "whereas"
      },
      {
        "id": "d",
        "text": "whenever"
      }
    ],
    "correctOptionId": "c",
    "connector": "whereas",
    "family": "contrast",
    "translation": "ao passo que / enquanto que",
    "explanation": "'Whereas' conecta duas orações com vírgula para contrastar vantagens de arquiteturas distintas.",
    "fullSentence": "Monolithic architectures simplify local debugging and deployment, whereas microservices provide independent scalability and squad autonomy.",
    "sentenceTranslation": "Arquiteturas monolíticas simplificam a depuração e o deploy local, ao passo que microsserviços oferecem escalabilidade independente e autonomia para as squads.",
    "whyCorrect": "'Whereas' é a conjunção subordinativa ideal para unir duas orações contrapostas separadas por vírgula.",
    "whyOthersFail": "'However' geralmente atua como advérbio de transição (exige ponto/ponto e vírgula antes e vírgula depois). 'Wherever' indicaria lugar e 'Whenever' indicaria tempo.",
    "proTip": "Estrutura clássica de arquitetura: '[Característica A], whereas [Característica B]'."
  },
  {
    "id": "q-ever-whereas-relational-nosql",
    "prompt": "Relational databases strictly guarantee ACID transactions, _____ NoSQL document stores prioritize flexible schemas and high write throughput.",
    "options": [
      {
        "id": "a",
        "text": "whatever"
      },
      {
        "id": "b",
        "text": "whoever"
      },
      {
        "id": "c",
        "text": "wherever"
      },
      {
        "id": "d",
        "text": "whereas"
      }
    ],
    "correctOptionId": "d",
    "connector": "whereas",
    "family": "contrast",
    "translation": "ao passo que / enquanto que",
    "explanation": "'Whereas' contrapõe as garantias de bancos relacionais com as prioridades do NoSQL.",
    "fullSentence": "Relational databases strictly guarantee ACID transactions, whereas NoSQL document stores prioritize flexible schemas and high write throughput.",
    "sentenceTranslation": "Bancos relacionais garantem estritamente transações ACID, ao passo que repositórios NoSQL priorizam esquemas flexíveis e alto rendimento de escrita.",
    "whyCorrect": "'Whereas' expressa a oposição direta entre as propriedades técnicas de dois modelos de banco de dados.",
    "whyOthersFail": "'Wherever' confundiria o aluno com lugar na nuvem. 'Whatever' significaria 'o que quer que'. 'Whoever' refere-se a pessoas.",
    "proTip": "Diferença crucial: 'Wherever' = 'Where + ever' (lugar). 'Whereas' = 'Where + as' (contraste analítico)!"
  },
  {
    "id": "q-ever-whereas-junior-senior",
    "prompt": "Junior developers often evaluate success solely by lines of code written, _____ senior engineers emphasize code simplicity and domain clarity.",
    "options": [
      {
        "id": "a",
        "text": "whereas"
      },
      {
        "id": "b",
        "text": "wherever"
      },
      {
        "id": "c",
        "text": "whenever"
      },
      {
        "id": "d",
        "text": "however"
      }
    ],
    "correctOptionId": "a",
    "connector": "whereas",
    "family": "contrast",
    "translation": "ao passo que / enquanto que",
    "explanation": "'Whereas' compara duas visões de maturidade profissional sobre desenvolvimento de software.",
    "fullSentence": "Junior developers often evaluate success solely by lines of code written, whereas senior engineers emphasize code simplicity and domain clarity.",
    "sentenceTranslation": "Desenvolvedores júnior muitas vezes avaliam o sucesso apenas por linhas de código escritas, ao passo que engenheiros seniores enfatizam a simplicidade do código e a clareza de domínio.",
    "whyCorrect": "'Whereas' faz o contraponto equilibrado entre os critérios dos desenvolvedores júnior e dos engenheiros seniores.",
    "whyOthersFail": "'Wherever' é lugar, 'Whenever' é tempo. 'However' exigiria pontuação de advérbio conectivo independente (ex: '; however,').",
    "proTip": "Use 'whereas' em entrevistas para contrastar abordagens com alto nível de sofisticação no inglês."
  },
  {
    "id": "q-ever-whereas-sync-async",
    "prompt": "Synchronous HTTP calls block the calling thread until a response returns, _____ asynchronous message queues allow non-blocking event processing.",
    "options": [
      {
        "id": "a",
        "text": "whatever"
      },
      {
        "id": "b",
        "text": "whereas"
      },
      {
        "id": "c",
        "text": "wherever"
      },
      {
        "id": "d",
        "text": "whoever"
      }
    ],
    "correctOptionId": "b",
    "connector": "whereas",
    "family": "contrast",
    "translation": "ao passo que / enquanto que",
    "explanation": "'Whereas' contrapõe a natureza bloqueante do HTTP síncrono com a mensageria assíncrona.",
    "fullSentence": "Synchronous HTTP calls block the calling thread until a response returns, whereas asynchronous message queues allow non-blocking event processing.",
    "sentenceTranslation": "Chamadas HTTP síncronas bloqueiam a thread de execução até que a resposta retorne, ao passo que filas de mensageria assíncronas permitem processamento não bloqueante de eventos.",
    "whyCorrect": "'Whereas' conecta e contrapõe os dois paradigmas de integração com precisão técnica.",
    "whyOthersFail": "'Wherever' é espacial/nuvem ('onde quer que'). 'Whatever' é substantivo indeterminado. 'Whoever' é para agentes humanos.",
    "proTip": "Lembrete definitivo: 'Whereas' = 'While / In contrast to the fact that'."
  }
];
