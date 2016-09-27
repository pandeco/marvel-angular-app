#Marvel Heroes Catalog
Projeto de estudo que consome a API da Marvel (http://developer.marvel.com)

## 1. Arquitetura

### 1.1 Estrutura de pastas

* assets
  * images
  * style
  * fonts
* common *(conteudo comum)*
* core *(paginas)*
* lib *(bibliotecas de terceiros)*

### 1.2 Third Party Libraries

Name                | Version | Description               | Reference                       |
--------------------|---------|---------------------------|-------------------------------- |
Angular             | 1.5.8   | Web framework used as base for this development | https://angularjs.org/
Angular-Route       | 1.5.8   | Angular module used for deep-linking URLs to controllers and views (HTML partials) | https://docs.angularjs.org/api/ngRoute
AngularUI-Bootstrap | 2.1.4   | Bootstrap components written in pure angularJS | http://angular-ui.github.io/bootstrap/
AngularJS-Toaster   | 2.0.0   | AngularJS port of the toastr non-blocking notification jQuery library | https://github.com/jirikavi/AngularJS-Toaster
Jquery              | 3.1.1   | jQuery is a fast, small, and feature-rich JavaScript library | https://jquery.com/
Bootstrap           | 3.3.7   | Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web | http://getbootstrap.com/
Protractor          | Last    | Protractor is an end-to-end test framework for AngularJS applications | https://angular.github.io/protractor/#/

## 2. Configuração de ambiente

1. Install npm *(download in https://www.npmjs.com)*
2. Install gulp *(npm install gulp)*
3. Install gulp-cli *(npm install -g gulp-cli)*
4. Install gulp-webserver *(npm install gulp-webserver)*
