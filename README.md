# Projeto de Avaliação DevOps

## Integrantes
* RM:335477 GUILHERME ALMEIDA REZENDE
* RM:335815 JAQUELINE DE CARVALHO LAURENTI
* RM:335698 LUCAS GABRIEL DAMASCENA DE SOUZA
* RM:335231 SERGIO HENRIQUE PEDROSO OLIVEIRA
* RM:335986 WILLIAM DA SILVA ROCHA

## Modelo: GitHub Flow
A equipe é composta por cinco alunos com o objetivo de entregar um MVP (Minimum Viable Product) para certificação do MBA, então gostaríamos de organizar nosso projeto em workflow simples e que seja de fácil entendimento aos integrantes que não tenham a vivência dessa metodologia.

## Vantagens

* Amigável para CI/CD;
* Desenvolvimento baseado SEMPRE em relação a última aplicação enviada como release;
* Em relação ao GitFlow, possui menor complexidade e possibilita maior entendimento do histórico de projeto;
* O processo começa SEMPRE via pull request, possibilitando discussões e code review antes da alteração entrar na esteira;
* Praticidade de Implantação, Scott Chacon cita em artigo de Agosto, 2011: 
>"Se você implantar a cada poucas horas, é quase impossível introduzir um grande número de grandes bugs. Pequenos problemas podem ser introduzidos, mas podem ser corrigidos e reimplantados muito rapidamente. Normalmente, você teria que fazer um 'hotfix' ou algo fora do processo normal, mas isso é simplesmente parte do nosso processo normal - não há diferença no fluxo do GitHub entre um hotfix e um recurso muito pequeno."

### Desvantagens

* Em produção pode se tornar instável (Justamente pela regularidade de implantações citadas por Scott Chacon);
* Não existe convenção de nomes para branches. Então é uma questão que precisa ser elaborada e monitorada pela equipe para evitar desorganização.
* Por não existir **branch intermediária** o pull request é realizado diretamente na **branch master**;

### Cenários do Pipeline

O pipeline será capaz de cobrir as seguintes atividades:

* Pull Requests;
* Code Analysis;
* Testes;
* Merges;
* Deploy.
 
## Modelo de Implementação

Como a esteira tem início com pull request, significa que existe uma fase de validação/code review realizada pela equipe, o que permite a escolha somente do **Deployment Continuous**.

## Representação Gráfica

![Flowchart](../master/Graphic.jpeg)
