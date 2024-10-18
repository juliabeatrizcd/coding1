# coding1

#RESUMO DA AULA 1 (GitHub):

Na última aula, a professora Tereza Oliveira apresentou o processo de criação de uma conta no GitHub. Ela explicou a importância da plataforma para o desenvolvimento colaborativo de software e ajudou os alunos na criação de um repositório e na personalização de seus perfis, mostrando como um perfil bem elaborado pode ser um portfólio valioso para futuros empregadores. Além de ensinar sobre GitHub, a professora Tereza também introduziu o conceito de variáveis em JavaScript, explicando os tipos principais, como var, let e const, e demonstrando suas diferenças e aplicações. 
Entre as principais funcionalidades do GitHub, estão:

• Repositórios: Armazenam o código-fonte de um projeto, onde cada repositório pode conter múltiplas versões do código em diferentes branches (ramificações).

• Commits: Cada alteração no código é registrada em um commit, que guarda o histórico das modificações feitas, facilitando o rastreamento de erros ou a reversão de mudanças.

• Branches: Permitem que diferentes desenvolvedores trabalhem em novas funcionalidades ou correções sem afetar a versão principal do projeto. Mais tarde, essas alterações podem ser mescladas (merged) de volta à branch principal

• Pull requests: São usados para sugerir alterações de uma branch para outra. Isso cria um fluxo de revisão de código, onde outros membros da equipe podem comentar, revisar e aprovar as mudanças antes de integrá-las ao projeto principal.

• Issues: Funcionalidade para rastrear problemas ou sugerir novas funcionalidades, criando um espaço para comunicação entre desenvolvedores e colaboradores do projeto.

Variações:

• var: usado de forma mais tradicional, mas com escopo global ou de função, o que pode levar a problemas em códigos mais complexos.

• let: uma alternativa mais moderna, com escopo de bloco, oferecendo maior controle e segurança no uso de variáveis.

• const: para declarar valores constantes, que não podem ser alterados após a atribuição.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#RESUMO DA AULA 2 (Code Pen):

A professora Tereza passou uma atividade (atividade.if/else). Essa atividade era para praticarmos o uso de estruturas condicionais em JavaScript, especificamente o if/else. Esse código utiliza a função prompt() para solicitar que o usuário escolha uma opção numérica para descrever o tipo de dor que está sentindo. As opções são:

• Dor nas costas (representada pelo valor 1)

• Dor de cabeça ou dor de garganta (representadas pelos valores 2 e 3)

O código segue a seguinte lógica:

•Se o usuário escolher a opção 1, o console exibirá "Você será encaminhado para um Ortopedista.

• Se o usuário escolher as opções 2 ou 3, o console exibirá "Você será encaminhado para um clínico geral.

• Se o usuário inserir qualquer outro valor, o código exibe uma mensagem de brincadeira: "Você foi corno, não tratamos suas dores aqui, procure um psicólogo.

Este é um exemplo simples de estrutura condicional if-else que toma decisões com base no valor da variável consulta, utilizando operadores de igualdade (==) e lógicos (||).

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#RESUMO DA AULA 3 (Code Pen):

A professora Tereza passou uma atividade (atividade.switchcase) para trabalharmos com a estrutura de controle switch em JavaScript, onde implementamos um pequeno programa que recebe o nome do usuário e o turno de treino desejado (Manhã, Tarde ou Noite) através da função prompt(). Com base na escolha do turno, o programa utiliza a estrutura switch para verificar o valor inserido e exibir uma mensagem personalizada no console com o nome do usuário e o turno selecionado. Se o valor não corresponder a nenhuma das opções, uma mensagem padrão informa que o cadastro não pôde ser concluído.

• Recebendo o nome: Primeiro, o programa utiliza a função prompt() para solicitar ao usuário que insira seu nome, armazenando essa informação na variável nome.

• Solicitando o turno: Em seguida, o programa pede ao usuário que escolha um turno (Manhã, Tarde ou Noite) através de outro prompt(), que guarda o valor inserido na variável treino.

• Estrutura switch: O switch é então utilizado para comparar o valor inserido em treino com as três opções esperadas:
>Se o usuário digitar "Manhã", o programa mostra uma mensagem no console indicando que o turno escolhido foi pela manhã.
> O mesmo acontece para as opções "Tarde" e "Noite", com a mensagem sendo ajustada de acordo com o turno selecionado.

• Caso padrão (default): Se o usuário digitar qualquer valor que não seja "Manhã", "Tarde" ou "Noite", o programa cairá no default, exibindo uma mensagem informando que o cadastro não pôde ser concluído por erro no horário.

Esse processo nos ajuda a entender como manipular entradas de usuários e reagir a diferentes opções com o switch, que é mais eficiente quando temos várias condições específicas a verificar.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 #RESUMO DA AULA 4 (Code Pen):
 
 Na última aula (16/10/24), a professora Tereza nos ensinou a manipular arrays em JavaScript. O exercício envolvia a consulta e exibição de elementos dentro de um array. A seguir, um resumo do código abordado:

• Consulta por índice: Criamos um array chamado livros, contendo os itens "javascript", "EMAScript" e "MongoDB". Para acessar uma parte específica de um item, utilizamos dois índices: o primeiro para o elemento do array e o segundo para a posição do caractere dentro da string. Por exemplo, o comando console.log(livros[0][2]) retorna o terceiro caractere do primeiro item, que é "v" de "javascript".

• Consulta por nome: Usamos o método indexOf() para localizar a posição de um elemento dentro do array. No exemplo, buscamos o valor "MongoDB" e armazenamos o índice em uma variável chamada consulta. O comando console.log(consulta) então exibe a posição de "MongoDB" dentro do array, que é o índice 2.

Essa atividade nos ajudou a praticar o acesso direto a elementos e como consultar a posição de um item dentro de um array.
 
