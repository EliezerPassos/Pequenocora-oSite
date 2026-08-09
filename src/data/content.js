// TODO: substituir todos os valores abaixo por informações reais da creche

export const siteInfo = {
  name: 'CEI Pequeno Coração',
  whatsappNumber: '5547989249171',
  whatsappMessage: 'Olá! Gostaria de saber mais sobre as matrículas do CEI Pequeno Coração.',
  phone: '(47) 98924-9171',
  email: 'contato@pequenocoracao.com.br',
  address: {
    street: 'R. George Fridrich Mordhorst, 47',
    neighborhood: 'Itoupava Central',
    city: 'Blumenau',
    state: 'SC',
    zip: '',
  },
  hours: [
    { day: 'Segunda a sexta-feira', time: '6h30 às 18h30' },
    { day: 'Sábados, domingos e feriados', time: 'Fechado' },
  ],
  mapEmbedSrc:
    'https://www.google.com/maps?q=R.+George+Fridrich+Mordhorst,+47,+Itoupava+Central,+Blumenau+-+SC&output=embed',
  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
    x: 'https://x.com/', // TODO
    linkedin: 'https://linkedin.com/', // TODO
  },
}

// Páginas (rotas) do site — usado no menu do header pra listar só os
// destinos que não são a página atual. Diferente de navLinks (âncoras
// da home, usadas no rodapé).
export const routePages = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Metodologia', href: '/metodologia' },
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Referência em cuidado', href: '#referencia-em-cuidado' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Momento com a Bia', href: '#momento-com-a-bia' },
  { label: 'Blog', href: '/blog' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Famílias', href: '#familias-recomendam' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

// TODO: playlist real "Momento com a Bia" — os vídeos abaixo são placeholders temporários
// do canal @LittleScholarsChannel (youtube.com/@LittleScholarsChannel), usados só até a
// Bia gravar o material próprio. Substituir youtubeId por cada vídeo publicado no canal
// da creche assim que estiver pronto (ID é o trecho após "v=" na URL do vídeo).
export const biaPlaylist = [
  {
    title: 'Um dia na Pequeno Coração',
    description: 'Do acolhimento da manhã até a saída — como é a rotina completa dos pequenos.',
    youtubeId: 'YRuaP2HWNoA',
  },
  {
    title: 'Hora da leitura',
    description: 'A Bia mostra o cantinho da leitura e como estimulamos o gosto pelos livros.',
    youtubeId: 'zFL2dqpeY2w',
  },
  {
    title: 'Brincando ao ar livre',
    description: 'Um passeio pelo pátio e pelas brincadeiras que fazem parte do dia a dia.',
    youtubeId: 'kwq8U2H20GA',
  },
  {
    title: 'Alimentação e cuidados',
    description: 'Como cuidamos da alimentação e da higiene de cada criança, fase por fase.',
    youtubeId: 'HgyQrk_6brM',
  },
]

export const values = [
  {
    tab: 'Acolhimento',
    icon: 'Heart',
    color: 'bloom',
    photo: '/Referencia/pexels-kseniachernaya-8535568.jpg',
    title: 'Cada criança recebida como é',
    description:
      'Cada criança é recebida com carinho, respeito ao seu tempo e atenção às suas particularidades — sem pressa, sem comparação, no ritmo dela.',
    ctaLabel: 'Conheça nossa proposta pedagógica',
    ctaHref: '#metodologia',
  },
  {
    tab: 'Segurança',
    icon: 'Blocks',
    color: 'sun',
    photo: '/Referencia/pexels-pavel-danilyuk-8422169.jpg',
    title: 'Cuidado que os pais sentem',
    description:
      'Ambiente seguro e supervisionado, com equipe qualificada e protocolos claros de cuidado em cada fase do dia.',
    ctaLabel: 'Veja nossa estrutura',
    ctaHref: '#estrutura',
  },
  {
    tab: 'Aprendizado lúdico',
    icon: 'Sun',
    color: 'bloom',
    photo: '/Referencia/pexels-pavel-danilyuk-8441839.jpg',
    title: 'Aprender brincando, todos os dias',
    description:
      'Estimulamos a curiosidade natural das crianças por meio de atividades sensoriais e criativas, respeitando cada fase do desenvolvimento.',
    ctaLabel: 'Veja a rotina diária',
    ctaHref: '#rotina',
  },
  {
    tab: 'Parceria com a família',
    icon: 'Star',
    color: 'sun',
    photo: '/Referencia/pexels-yankrukov-8612955.jpg',
    title: 'Conectados com o seu dia a dia',
    description:
      'Comunicação próxima e transparente com os pais e responsáveis em cada etapa do desenvolvimento do seu filho.',
    ctaLabel: 'Fale com a gente',
    ctaHref: '#contato',
  },
]

export const ageGroups = [
  {
    slug: 'bercario',
    icon: 'Heart',
    range: 'Berçário I e II',
    ages: '4 meses a 1 ano e 11 meses',
    description:
      'Cuidados essenciais, estímulo sensorial e rotina de sono e alimentação respeitando o ritmo de cada bebê.',
    ctaLabel: 'Conheça a metodologia do Berçário',
    longDescription:
      'No Berçário, cada bebê tem um ritmo — e é esse ritmo que guia a rotina, não o contrário. O vínculo afetivo com a equipe é a base de tudo: é ele que dá segurança para o bebê explorar, descobrir texturas, sons e movimentos novos a cada semana.',
    pillars: [
      {
        title: 'Vínculo e acolhimento individual',
        description:
          'Atenção próxima e constante de referências afetivas fixas, com rotina de sono e alimentação respeitando o tempo de cada bebê.',
      },
      {
        title: 'Estimulação sensorial',
        description:
          'Texturas, sons, cores e materiais pensados para bebês, estimulando os primeiros sentidos e descobertas.',
      },
      {
        title: 'Desenvolvimento motor',
        description:
          'Espaço seguro e livre para engatinhar, sentar, ficar de pé e dar os primeiros passos no tempo de cada um.',
      },
    ],
  },
  {
    slug: 'maternal',
    icon: 'Blocks',
    range: 'Maternal I e II',
    ages: '2 a 3 anos e 11 meses',
    description:
      'Desenvolvimento da autonomia, coordenação motora, linguagem e primeiras experiências em grupo.',
    ctaLabel: 'Conheça a metodologia do Maternal',
    longDescription:
      'No Maternal, as crianças começam a fazer coisas "sozinhas" — comer, vestir-se, guardar os brinquedos — e cada pequena conquista de autonomia é celebrada. É também a fase das primeiras amizades e das primeiras palavras em frases inteiras.',
    pillars: [
      {
        title: 'Autonomia guiada',
        description:
          'Pequenas tarefas do dia a dia, como vestir-se, comer sozinho e guardar os próprios brinquedos, incentivadas com paciência.',
      },
      {
        title: 'Linguagem e comunicação',
        description:
          'Rodas de conversa, histórias e brincadeiras que ampliam o vocabulário e a expressão oral.',
      },
      {
        title: 'Socialização',
        description:
          'Brincadeiras em grupo, aprender a compartilhar e mediação afetiva dos primeiros pequenos conflitos.',
      },
    ],
  },
  {
    slug: 'pre',
    icon: 'Sun',
    range: 'Pré I e II',
    ages: '4 a 5 anos e 11 meses',
    description:
      'Preparação para a alfabetização, raciocínio lógico, socialização e projetos pedagógicos temáticos.',
    ctaLabel: 'Conheça a metodologia do Pré',
    longDescription:
      'No Pré, a curiosidade natural das crianças vira combustível pra aprender a ler, escrever e pensar de forma lógica — sempre através do brincar. Os projetos temáticos nascem dos interesses da turma e viram descobertas coletivas.',
    pillars: [
      {
        title: 'Alfabetização lúdica',
        description:
          'Consciência fonológica, contato com letras e números por meio de jogos, músicas e brincadeiras.',
      },
      {
        title: 'Raciocínio e lógica',
        description:
          'Jogos, quebra-cabeças e desafios que estimulam o pensamento lógico-matemático desde cedo.',
      },
      {
        title: 'Projetos temáticos',
        description:
          'Investigação de temas do interesse da turma, culminando em produções coletivas e apresentações.',
      },
    ],
  },
  {
    slug: 'contraturno',
    icon: 'Star',
    range: 'Contraturno',
    ages: '6 a 14 anos',
    description:
      'Apoio nas tarefas escolares, atividades recreativas e esportivas para quem já está na escola regular.',
    ctaLabel: 'Conheça a metodologia do Contraturno',
    longDescription:
      'No Contraturno, quem já está na escola regular encontra um espaço pra terminar as tarefas com tranquilidade, brincar, praticar esportes e conviver com crianças de outras idades — equilibrando estudo, lazer e amizades.',
    pillars: [
      {
        title: 'Apoio pedagógico',
        description:
          'Acompanhamento individualizado das tarefas escolares, com incentivo à organização e ao estudo.',
      },
      {
        title: 'Atividades recreativas e esportivas',
        description:
          'Jogos, esportes e brincadeiras que equilibram o tempo de estudo com lazer e movimento.',
      },
      {
        title: 'Convívio e autonomia',
        description:
          'Responsabilidade, organização e amizades construídas no convívio entre diferentes idades.',
      },
    ],
  },
]

export const dailyRoutine = [
  { time: '6h30', activity: 'Acolhida e café da manhã' },
  { time: '8h00', activity: 'Atividades pedagógicas dirigidas' },
  { time: '10h00', activity: 'Brincadeiras ao ar livre' },
  { time: '11h30', activity: 'Almoço' },
  { time: '13h00', activity: 'Momento do sono/descanso' },
  { time: '15h00', activity: 'Lanche da tarde' },
  { time: '15h30', activity: 'Atividades lúdicas e artísticas' },
  { time: '17h30', activity: 'Higiene e preparação para saída' },
]

export const galleryItems = [
  { label: 'Área externa e playground', image: '/Espaco/pexels-rafael-rodrigues-173187950-38561388.jpg' },
  { label: 'Pátio de brincadeiras', image: '/Espaco/pexels-bertellifotografia-19230078.jpg' },
  { label: 'Salas amplas e claras', image: '/Espaco/pexels-artempodrez-8088086.jpg' },
  { label: 'Sala colorida e lúdica', image: '/Espaco/istockphoto-1151392292-612x612.jpg' },
  { label: 'Cantinho do faz de conta', image: '/Espaco/pexels-kseniachernaya-8535620.jpg' },
  { label: 'Cantinho das artes', image: '/Espaco/pexels-nataliaolivera-30594012.jpg' },
  { label: 'Cantinho da música', image: '/Espaco/pexels-kseniachernaya-8535632.jpg' },
]

// TODO: vídeos-depoimento reais das famílias — os youtubeId abaixo são placeholders
// temporários do canal @LittleScholarsChannel, usados só até gravarmos com nossas
// próprias famílias (com autorização). Substituir assim que tiver o material.
export const testimonials = [
  {
    name: 'Mariana S.',
    relation: 'mãe da Laura, 3 anos',
    quote:
      'A adaptação da minha filha foi tranquila graças ao carinho da equipe. Hoje ela adora ir para a escolinha!',
    youtubeId: 'MBA_B2mLCB8',
  },
  {
    name: 'Rodrigo A.',
    relation: 'pai do Bernardo, 2 anos',
    quote:
      'Sinto segurança em deixar meu filho no Pequeno Coração. A comunicação com os professores é excelente.',
    youtubeId: 'iG8OgPGL-_s',
  },
  {
    name: 'Camila T.',
    relation: 'mãe do Théo, 4 anos',
    quote:
      'A proposta pedagógica é linda, muito voltada ao brincar e ao respeito ao tempo de cada criança.',
    youtubeId: 'yd3r1qWUDv8',
  },
  {
    name: 'Fernanda M.',
    relation: 'mãe da Alice, 1 ano',
    quote:
      'Ambiente limpo, acolhedor e uma equipe muito atenciosa. Recomendo de olhos fechados!',
    youtubeId: 'yoV-7vEFZ-s',
  },
]
