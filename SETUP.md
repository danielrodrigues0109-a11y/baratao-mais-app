# Instalação e Configuração Local

## 🚀 Início Rápido

### 1. Instale Node.js
Baixe de: https://nodejs.org/

### 2. Clone o repositório
```bash
git clone https://github.com/danielrodrigues0109-a11y/baratao-mais-app.git
cd baratao-mais-app
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Inicie o servidor local
```bash
npm start
```

O app estará disponível em: **http://localhost:3000**

---

## 📱 Para Criar o APK Android

Veja o arquivo **BUILD_APK.md** para instruções detalhadas.

Resumo rápido:
```bash
# Instale Cordova globalmente
npm install -g cordova

# Crie o projeto Cordova
cordova create BarataoMais com.baratao.mais BarataoMais
cd BarataoMais

# Adicione a plataforma Android
cordova platform add android

# Copie os arquivos do projeto
cp -r ../index.html ../css ../js ../assets www/

# Construa o APK
cordova build android --release
```

O APK estará em: `platforms/android/app/build/outputs/apk/release/`

---

## 🔧 Configuração para Desenvolvimento

### Estrutura do Projeto
```
baratao-mais-app/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── logo-brand.jpg
│   ├── facade.jpg
│   ├── outdoor.jpg
│   └── instagram.jpg
├── config.xml (Configuração Cordova)
├── package.json
├── server.js
├── BUILD_APK.md
└── README.md
```

### Adicionar Plugins Cordova (Opcional)

```bash
# Câmera
cordova plugin add cordova-plugin-camera

# Geolocalização
cordova plugin add cordova-plugin-geolocation

# Contatos
cordova plugin add cordova-plugin-contacts

# Armazenamento local
cordova plugin add cordova-plugin-sqlite-storage
```

---

## 🌐 Hospedagem

Você pode hospedar este app em:

- **Vercel**: https://vercel.com/
- **Netlify**: https://netlify.com/
- **GitHub Pages**: https://pages.github.com/
- **Heroku**: https://heroku.com/

Exemplo com Vercel:
```bash
npm install -g vercel
vercel
```

---

## 📚 Recursos Úteis

- [Apache Cordova Docs](https://cordova.apache.org/)
- [Android Developer Docs](https://developer.android.com/docs)
- [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 💬 Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Envie email para: contato@baratao.mais
- WhatsApp: https://wa.me/5585999999999

---

**Baratao.mais** - Combustível de qualidade. Economia de verdade. 🚗⛽
