// TODO: substituir todos os valores abaixo por informações reais da creche

export const siteInfo = {
  name: 'CEI Pequeno Coração',
  whatsappNumber: '5547999999999', // TODO: número real do WhatsApp (formato internacional, só dígitos)
  whatsappMessage: 'Olá! Gostaria de saber mais sobre as matrículas do CEI Pequeno Coração.',
  phone: '(47) 99999-9999',
  email: 'contato@pequenocoracao.com.br',
  address: {
    street: 'Rua das Acácias, 123',
    neighborhood: 'Itoupava Central',
    city: 'Blumenau',
    state: 'SC',
    zip: '89075-000',
  },
  hours: [
    { day: 'Segunda a sexta-feira', time: '6h30 às 18h30' },
    { day: 'Sábados, domingos e feriados', time: 'Fechado' },
  ],
  mapEmbedSrc:
    'https://www.google.com/maps?q=Itoupava+Central,+Blumenau+-+SC&output=embed',
  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
  },
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export const values = [
  {
    title: 'Acolhimento',
    description:
      'Cada criança é recebida com carinho, respeito ao seu tempo e atenção às suas particularidades.',
  },
  {
    title: 'Segurança',
    description:
      'Ambiente seguro e supervisionado, com equipe qualificada e protocolos claros de cuidado.',
  },
  {
    title: 'Aprendizado lúdico',
    description:
      'Aprender brincando: estimulamos a curiosidade natural das crianças por meio de atividades sensoriais e criativas.',
  },
  {
    title: 'Parceria com a família',
    description:
      'Comunicação próxima e transparente com os pais e responsáveis em cada etapa do desenvolvimento.',
  },
]

export const ageGroups = [
  {
    range: 'Berçário I e II',
    ages: '4 meses a 1 ano e 11 meses',
    description:
      'Cuidados essenciais, estímulo sensorial e rotina de sono e alimentação respeitando o ritmo de cada bebê.',
  },
  {
    range: 'Maternal I e II',
    ages: '2 a 3 anos e 11 meses',
    description:
      'Desenvolvimento da autonomia, coordenação motora, linguagem e primeiras experiências em grupo.',
  },
  {
    range: 'Pré I e II',
    ages: '4 a 5 anos e 11 meses',
    description:
      'Preparação para a alfabetização, raciocínio lógico, socialização e projetos pedagógicos temáticos.',
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
  { label: 'Sala do Maternal', image: '/images/estrutura/1.svg' },
  { label: 'Pátio externo', image: '/images/estrutura/2.svg' },
  { label: 'Refeitório', image: '/images/estrutura/3.svg' },
  { label: 'Sala do Berçário', image: '/images/estrutura/4.svg' },
  { label: 'Cantinho da leitura', image: '/images/estrutura/5.svg' },
  { label: 'Área de brinquedos', image: '/images/estrutura/6.svg' },
]

export const testimonials = [
  {
    name: 'Mariana S.',
    relation: 'mãe da Laura, 3 anos',
    quote:
      'A adaptação da minha filha foi tranquila graças ao carinho da equipe. Hoje ela adora ir para a escolinha!',
  },
  {
    name: 'Rodrigo A.',
    relation: 'pai do Bernardo, 2 anos',
    quote:
      'Sinto segurança em deixar meu filho no Pequeno Coração. A comunicação com os professores é excelente.',
  },
  {
    name: 'Camila T.',
    relation: 'mãe do Théo, 4 anos',
    quote:
      'A proposta pedagógica é linda, muito voltada ao brincar e ao respeito ao tempo de cada criança.',
  },
  {
    name: 'Fernanda M.',
    relation: 'mãe da Alice, 1 ano',
    quote:
      'Ambiente limpo, acolhedor e uma equipe muito atenciosa. Recomendo de olhos fechados!',
  },
]
