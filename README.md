# Pragma Brewery Code Challenge
Esse código foi desenvolvido para demonstrar uma possível solução para um cenário onde uma empresa que fabrica cervejas, ao transportá-las utilizando refrigeradores, solicitou um sistema que informasse o condutor do caminhão caso algum refrigerador se encontrasse com a temperatura superior ou inferior ao nível de temperatura ideal de cada cerveja.

## Sobre a solução desenvolvida
A ideia foi chegar o mais próximo possível de um cenário real quando se tratava de informar as temperaturas. Inicialmente deve-se informar quantos refrigeradores estão sendo transportados.

No sistema existe a opção de gerar temperaturas aleatórias pra cada refrigerador, simulando o cenário onde de tempos em tempos a temperatura muda nos refrigeradores e informaria o sistema de imediato. Para cada refrigerador deve-se informar o tipo de cerveja que ele está transportando, pois a partir disso que será informado se a temperatura atual está superior ou inferior a temperatura ideal.

Também é possível parar a atualização de temperaturas e informá-las manualmente.

OBS: No documento não ficou claro se as temperaturas eram positivas ou negativas, a lógica está feita supondo que são positivas, por exemplo a `Beer 1 (Pilsner)` tem a temperatura ideal entre 4°C e 6°C.

## Sobre as linguagens utilizadas
Criei um projeto inicial utilizando [angular-cli](https://github.com/angular/angular-cli) e importei baixei os módulos do node do bootstrap para o front-end e do express para subir a aplicação no Heroku.

## Melhorias futuras
- Utilizar o MongoDB para armazenamento dos dados;
- Permitir o cadastro da cidade de entrega, pois caso o negócio se expanda já exista a opção de cadastras diferentes cidades;
- Cada cidade tem uma média de temperatura e a partir dessa média ter um conhecimento se será necessário deixar os refrigeradores em uma potência maior ou menor;
- Permitir que um refrigerador transporte mais de um tipo de cerveja, garantindo claro que a temperatura atenda os dois casos;
- Caso a temperatura ideal das cervejas mude de uma cidade pra outra, implementar também um cadastro para as temperaturas por cidade

## Heroku
A aplicação pode ser acessada clicando [aqui](https://pragmabrewery-deploy.herokuapp.com/).
