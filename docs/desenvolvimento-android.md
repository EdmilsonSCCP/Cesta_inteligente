# Desenvolvimento Android

## Objetivo

Gerar primeiro um APK para testes internos no celular. Depois, preparar um AAB para publicação na Play Store.

## Pré-requisitos

- Node.js LTS instalado
- npm instalado e disponível no terminal
- Node.js 22.13.x ou superior para Expo SDK 56
- Expo CLI via `npx expo`
- Conta Expo para usar EAS Build
- APK interno gerado pelo EAS para testes no celular

## Primeiros comandos

Instalar dependências:

```bash
npm install
```

Rodar em modo desenvolvimento:

```bash
npm start
```

Observação: no SDK 56, o Expo Go da Play Store ainda não é o melhor caminho para teste. Para testar como aplicativo instalado, use o APK do perfil `preview`.

Gerar APK de teste com EAS:

```bash
npx eas build -p android --profile preview
```

Gerar AAB para Play Store:

```bash
npx eas build -p android --profile production
```

## Observação

No ambiente atual, o terminal ainda não conseguiu executar Node/npm corretamente. Antes de rodar o app, será necessário corrigir a instalação do Node.js ou o PATH do Windows.
