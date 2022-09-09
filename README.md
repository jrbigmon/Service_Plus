# ServicePlus
## Welcome
- Bem-vindo ao portifólio ServicePlus, esperamos que você possa abstrair tanto conhecimento quanto agregar. 
- Somos desenvolvedores entusiastas e loucos por inovação. 
- Esse projeto foi criado com a expectativa de atender a necessidade de diversas pessoas que estão em busca de uma colocação no mercado para serviços domésticos, quanto clientes que necessitam de um atendimento eficaz e seguro. 
- Nós temos orgulho de olhar para trás e ver o quanto evoluímos com a construção desse projeto e sentir o anseio da melhoria e evolução constante. 
- Agradecemos pelo bug de cada dia, que nos inspira a continuarmos em nossa missão. 

## Como iniciar o projeto
### Instale as dependencias do projeto
Instale todas as dependências:
````bash
npm install
````
💡 Inicie seu servidor MySQL (XAMPP recomendado) na porta 3306 

Crie o banco de dados com `sequelize`
````bash
npx sequelize db:create
````
Crie as tabelas do banco de dados com `sequelize`
````bash
npx sequelize db:migrate
````
Rode todas as seeders para inserir os valores iniciais do banco de dados
````bash
npx sequelize db:seed:all
````
Após realizar todos os processos anteriores, faça
````bash
npm start
````

## Um pouco mais sobre o projeto
### Pagina inicial
![alt text](./public/img/imgReadme/home-page.PNG)

### Lista de profissionais
![alt text](./public/img/imgReadme/search-professionals-page.PNG)
![alt text](./public/img/imgReadme/search-professionals-with-filter-page.PNG)

### Solicitar orçamento
![alt text](./public/img/imgReadme/budget-page.PNG)

### Tela de login
![alt text](./public/img/imgReadme/login-page.PNG)

### Tela de cadastro 
![alt text](./public//img/imgReadme/register-page.PNG)

### Tela de perfil do cliente 
![alt text](./public//img/imgReadme/profile-client-page.PNG)

### Tela de perfil do profissional
![alt text](./public/img/imgReadme/profile-professional-page.PNG)

### Tela de histórico de serviços do cliente
![alt text](./public/img/imgReadme/history-services-client-page.PNG)
![alt text](./public/img/imgReadme/history-services-with-filter-client-page.PNG)

### Tela de histórico de serviços do profissional
![alt text](./public/img/imgReadme/history-services-professional-page.PNG)

### Tela Sobre nós
![alt text](./public/img/imgReadme/about-page.PNG)
