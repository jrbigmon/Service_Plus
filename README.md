# ServicePlus
## Welcome
- Bem-vindo ao portifólio ServicePlus, esperamos que você possa abstrair tanto conhecimento quanto agregar. 
- Somos desenvolvedores entusiastas e loucos por inovação. 
- Esse projeto foi criado com a expectativa de atender a necessidade de diversas pessoas que estão em busca de uma colocação no mercado para serviços domésticos quanto clientes que necessitam de um atendimento eficaz e seguro. 
- Nós temos orgulho de olhar para trás e ver o quanto evoluímos com a construção desse projeto e olhar um pouco mais a frente e sentir em nossos dedos o anseio da melhoria e evolução constante. 
- Agradecemos pelo bug de cada dia, que nos inspira a continuarmos em nossa missão. 
- Utilize esse projeto com moderação... pois como já dizia o tio Ben: "With great power comes great responsibility" 

## Como iniciar o projeto
### Instale as dependencias do projeto
Install all the dependecies:
````bash
npm install
````
💡 Inicie seu servidor MySQL (XAMPP recomendado) na porta 3306 

Crie o banco de dados com `sequelize`
````bash
npx sequelize db:create
````
Crie as tabelas do banco de dados com sequelize
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
   
