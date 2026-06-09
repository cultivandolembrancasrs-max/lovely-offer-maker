# Prompts — Mockups da Seção de Entregáveis

Gere as 3 imagens abaixo no ChatGPT (DALL-E) ou no Midjourney.
Depois salve cada arquivo nesta pasta com os nomes indicados.

Ao salvar, atualize o HTML da seção substituindo cada `.ent-device-inner` por:
```html
<img src="assets/mockups/screen-A.png" class="ent-device-img" alt="">
```

---

## IMAGEM A — Device principal (frente)
**Arquivo:** `screen-A.png`
**Proporção:** 3:4 (ex: 900×1200px)
**Representa:** Tela de aula do curso — player de vídeo com lista de módulos

```
UI screenshot of a premium online course platform, dark theme.
The screen shows a video lesson player at the top (16:9 black rectangle with a subtle play icon in the center, no actual video, just the player UI shell). Below the player, a lesson list panel with 4 items stacked vertically. Each item has a small terracotta circle bullet on the left, a short white text label, and a faint horizontal divider below. The overall background is very dark brown-black (#0a0908). Accent color is warm terracotta (#ba8c6e) used only in thin lines, small dots, and the active item highlight. Typography is clean modern sans-serif (similar to Montserrat). Top bar shows a logo area on the left (abstract "PS" monogram in terracotta) and two small icon buttons on the right. The interface looks like a high-end beauty course platform — minimal, editorial, no clutter. No real photographs. No faces. No stock imagery inside the player. Flat UI, not 3D. Transparent background (PNG with alpha channel). The mockup fills the entire canvas edge to edge with no device frame — just the flat UI screen content.
HARD CONSTRAINTS: transparent background, no device bezel or frame, no outer shadow, screen content only, PNG with alpha channel.
```

---

## IMAGEM B — Device traseiro (inclinado)
**Arquivo:** `screen-B.png`
**Proporção:** 3:4 (ex: 900×1200px)
**Representa:** Tela de currículo do curso — lista de módulos com progresso

```
UI screenshot of a premium online course curriculum page, dark theme.
The screen shows a vertical list of course modules. At the top, a small section header in terracotta uppercase letters. Below it, 4 module cards stacked vertically. Each card has: a rounded square icon on the left (terracotta outline on dark background), a module title in white bold text, a subtitle in muted grey, and a small value badge on the right ("R$ 47", "R$ 67" etc in tiny terracotta text). Cards have very subtle dark borders. Background is very dark brown-black (#0a0908). Accent is warm terracotta (#ba8c6e). Clean modern sans-serif typography (Montserrat-style). No photographs, no faces, no stock imagery. Flat UI. The layout is editorial and minimal — wide breathing room between elements, no visual clutter. Transparent background (PNG with alpha channel). Screen fills the canvas completely with no device frame.
HARD CONSTRAINTS: transparent background, no device bezel, no outer shadow, flat UI content only, PNG with alpha channel.
```

---

## IMAGEM C — Device pequeno (frente-baixo)
**Arquivo:** `screen-C.png`
**Proporção:** 9:16 (ex: 540×960px)
**Representa:** Tela mobile de calendário semanal do protocolo

```
UI screenshot of a premium skincare routine calendar on a mobile phone screen, dark theme.
The screen shows a weekly schedule. At the top, a small label in terracotta uppercase text reading "CALENDÁRIO SEMANAL". Below it, 7 day columns (Mon–Sun) arranged horizontally, each with a single icon or dot indicating which active ingredient to use that day — some days show a terracotta filled dot, others show an outlined dot (rest days). Below the week grid, two small info cards stacked vertically. Each card has an icon on the left and a short white text label. Background is very dark brown-black (#0a0908). Accent is warm terracotta (#ba8c6e). Clean modern sans-serif typography. No photographs, no faces. Flat mobile UI, minimal, editorial. The content fills the full portrait canvas edge to edge with no phone frame. Transparent background (PNG with alpha channel).
HARD CONSTRAINTS: transparent background, no phone bezel or frame, no outer shadow, flat UI content only, PNG with alpha channel.
```

---

## Como usar as imagens no HTML

Após salvar os 3 arquivos nesta pasta, abra o arquivo:
`copias/entregaveis-pele-de-seda-marcela-dezan.html`

Substitua o conteúdo interno de cada device:

**Device A (principal):**
```html
<div class="ent-device ent-device--a">
  <img src="assets/mockups/screen-A.png" class="ent-device-img" alt="">
</div>
```

**Device B (traseiro):**
```html
<div class="ent-device ent-device--b">
  <img src="assets/mockups/screen-B.png" class="ent-device-img" alt="">
</div>
```

**Device C (pequeno):**
```html
<div class="ent-device ent-device--c">
  <img src="assets/mockups/screen-C.png" class="ent-device-img" alt="">
</div>
```

Depois rode novamente:
```
py -3 scripts/montar-pagina-copias.py --slug pele-de-seda-marcela-dezan
```
