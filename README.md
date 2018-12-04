# 起動環境

Node.js v10.13.0 以上推奨  
npm v6.4.1 以上推奨  

※ Windows 以外での起動は未確認です

# 起動方法

### プロジェクトをクローンします

- ssh

`git clone git@develop.alpha.co.jp:a-learning/ui-dev-frameworks.git`

- https

`git clone https://develop.alpha.co.jp:1443/gitlab/a-learning/ui-dev-frameworks.git`

### npm install を行います

`$ npm i`

npm install に失敗する場合は、Proxy 設定を確認してください。

### 起動します

`$ npm run start`

Webpack によるビルドを行い、その後簡易な Web サーバとして作った Node.js のプロセスが起動します。

### アクセス

http://localhost:8080/

# 概要

トップページに 3 つのリンクがあります。
各リンク先はすべて、まったく同じ動作をするユーザ管理画面です。

- Angular
  - Angular + NgRx の組み合わせによって構築されています。
- React
  - React + Redux の組み合わせによって構築されています。
- Vue
  - Vue.js + Vuex の組み合わせによって構築されています。
