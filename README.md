# CEI Pequeno Coração — Site Institucional

Site institucional para o **CEI Pequeno Coração**, Centro de Educação Infantil no
bairro Itoupava Central, Blumenau/SC. Construído com **Vite + React + Tailwind CSS
v4**, com identidade visual autoral (amarelo + roxo, formas orgânicas em SVG) e
scroll suave via **Lenis**.

## Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Outros comandos úteis:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # roda o oxlint
```

## Estrutura de pastas

```
src/
  App.jsx                     # monta as seções da landing page
  index.css                   # tema Tailwind (@theme): cores, fontes
  assets/
    illustrations/            # SVGs decorativos reutilizáveis (Sun, Heart, Cloud, Blob, Logo...)
  components/
    layout/                   # Header, Footer, WhatsAppFloatButton
    sections/                 # Hero, About, Methodology, Gallery, Testimonials, Location, Contact
    ui/                       # Button, Container, SectionHeading, WhatsAppIcon (peças pequenas reutilizáveis)
  data/
    content.js                # TODO todo o conteúdo textual/placeholders do site (fácil de editar)
  hooks/
    useSmoothScroll.js        # inicializa o Lenis (scroll suave)
    useWhatsAppLink.js        # monta o link wa.me a partir de data/content.js
public/
  images/estrutura/           # imagens placeholder da galeria (SVG) — trocar por fotos reais
  favicon.svg
```

## Como trocar conteúdo, cores e imagens

### Conteúdo (textos, endereço, WhatsApp, depoimentos etc.)

Quase todo o texto do site fica centralizado em [`src/data/content.js`](src/data/content.js).
Edite os valores desse arquivo (nome, endereço, telefone, número de WhatsApp,
horários, depoimentos, faixas etárias, rotina diária...) para atualizar o site
inteiro sem precisar mexer nos componentes.

Textos que ficam diretamente nas seções (ex.: parágrafos de "Sobre nós") estão
marcados com o comentário `{/* TODO: substituir por conteúdo real */}` — procure
por `TODO` no código para encontrar todos os pontos pendentes de revisão.

### Cores

A paleta fica definida em [`src/index.css`](src/index.css), dentro do bloco
`@theme`:

- `sun-*` — amarelo (cor primária)
- `bloom-*` — roxo (cor secundária)
- `ink-*` — preto quente, usado só como cor de apoio (texto/contornos)
- `cream-*` — fundo, nunca branco puro

Altere os valores hexadecimais ali para ajustar o tom de toda a identidade
visual — as classes Tailwind (`bg-sun-400`, `text-bloom-700` etc.) são geradas
automaticamente a partir desse tema.

### Tipografia

As fontes (Google Fonts) são carregadas em [`index.html`](index.html):
**Baloo 2** para títulos (`font-display`) e **Nunito Sans** para texto corrido
(`font-body`).

### Imagens

- **Logo**: [`src/assets/illustrations/Logo.jsx`](src/assets/illustrations/Logo.jsx)
  é um placeholder em SVG. Substitua pelo logo real (pode trocar todo o
  conteúdo do arquivo por uma tag `<img>` apontando para o logo definitivo).
- **Galeria de estrutura**: as imagens ficam em
  [`public/images/estrutura/`](public/images/estrutura/) (`1.svg` a `6.svg`).
  Basta substituir cada arquivo por uma foto real (`.jpg`/`.webp`) e atualizar
  o caminho correspondente em `galleryItems` dentro de `src/data/content.js`.
- **Hero e "Sobre"**: atualmente usam formas ilustrativas (blob + ícone) no
  lugar de fotos reais — procure pelos comentários `TODO` nesses componentes
  (`src/components/sections/Hero.jsx` e `About.jsx`) para trocar por imagens.

### WhatsApp

O número usado em todos os botões de WhatsApp e no formulário de contato vem
de `siteInfo.whatsappNumber` em `src/data/content.js` (formato internacional,
somente dígitos, ex.: `5547999999999`).

## Formulário de contato

O formulário (nome, telefone, e-mail, mensagem) não possui backend próprio:
ao ser enviado, ele monta uma mensagem e abre o WhatsApp com os dados
preenchidos. Para receber os dados por e-mail ou salvá-los em um banco,
integre um serviço como Formspree, EmailJS, ou um backend próprio no lugar do
`handleSubmit` em `src/components/sections/Contact.jsx`.

## Acessibilidade

- Contraste de cores testado entre os tons de amarelo/roxo/preto usados como texto.
- Navegação por teclado: menu mobile, carrossel de depoimentos e formulário são
  totalmente operáveis via teclado.
- Imagens decorativas usam `aria-hidden`; imagens de conteúdo têm `alt` descritivo.
- Scroll suave (Lenis) respeita `prefers-reduced-motion`.
