# Guia de Compilação - APK Baratao.mais

## ⚠️ Pré-requisitos

Antes de compilar o APK, você precisa instalar:

### 1. **Node.js e npm**
- Download: https://nodejs.org/
- Versão recomendada: v16 ou superior

### 2. **Java Development Kit (JDK)**
- Download: https://www.oracle.com/java/technologies/downloads/
- Versão mínima: JDK 11
- Configure a variável de ambiente `JAVA_HOME`

### 3. **Android Studio**
- Download: https://developer.android.com/studio
- Durante a instalação, também instale:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device (emulador)

### 4. **Gradle**
- Será instalado automaticamente pelo Android Studio
- Ou: https://gradle.org/

### 5. **Apache Cordova**
```bash
npm install -g cordova
```

---

## 🔧 Passos para Compilar o APK

### Passo 1: Clone o repositório
```bash
git clone https://github.com/danielrodrigues0109-a11y/baratao-mais-app.git
cd baratao-mais-app
```

### Passo 2: Instale as dependências
```bash
npm install
```

### Passo 3: Crie um projeto Cordova (se ainda não existir)
```bash
cordova create BarataoMais com.baratao.mais BarataoMais
cd BarataoMais
cordova platform add android
```

### Passo 4: Copie os arquivos do projeto
```bash
# Copie index.html, css/, js/, assets/ para www/
cp -r ../index.html ../css ../js ../assets www/
```

### Passo 5: Configure as variáveis de ambiente

**No Windows:**
```bash
set ANDROID_HOME=C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
```

**No macOS/Linux:**
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### Passo 6: Construa o APK
```bash
cordova build android --release
```

Ou para Debug (testes):
```bash
cordova build android
```

### Passo 7: Localize o APK
O arquivo será gerado em:
```
BarataoMais/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
```

---

## 🔐 Assinando o APK (Obrigatório para Google Play)

### Criar Keystore
```bash
keytool -genkey -v -keystore baratao-mais.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias baratao_key
```

### Assinar o APK
```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore baratao-mais.keystore \
app-release-unsigned.apk baratao_key
```

### Otimizar o APK
```bash
$ANDROID_HOME/build-tools/VERSION/zipalign -v 4 app-release-unsigned.apk app-release.apk
```

---

## 📱 Testando o APK

### No Emulador
```bash
cordova emulate android
```

### Em um Dispositivo Real
1. Conecte seu celular via USB
2. Ative "Modo de Desenvolvedor" nas Configurações
3. Execute:
```bash
cordova run android
```

Ou copie o APK para o celular:
```bash
adb install app-release.apk
```

---

## 🚀 Publicar na Google Play Store

1. Crie uma conta de desenvolvedor: https://play.google.com/console
2. Crie um novo app
3. Prepare:
   - APK assinado
   - Ícones (192x192, 512x512)
   - Screenshots
   - Descrição e screenshots
4. Envie para revisão

---

## 📋 Solução de Problemas

### "Erro: JAVA_HOME não encontrado"
```bash
# Verifique a instalação do Java
java -version

# Configure manualmente
export JAVA_HOME=/caminho/para/jdk
```

### "Erro: Android SDK não encontrado"
```bash
# Abra Android Studio e instale SDK
# Tools > SDK Manager > Install Android SDK
```

### "Erro: Gradle não funciona"
```bash
# Limpe e reconstrua
cordova clean
cordova build android --release
```

---

## 📞 Suporte

Para dúvidas sobre Cordova:
- Documentação: https://cordova.apache.org/docs/en/latest/
- Forum: https://apache.cordova.apache.org/

Para dúvidas sobre Android:
- Documentação: https://developer.android.com/docs
- Stack Overflow: https://stackoverflow.com/questions/tagged/android

---

**Baratao.mais** - Combustível de qualidade. Economia de verdade. 🚗⛽
