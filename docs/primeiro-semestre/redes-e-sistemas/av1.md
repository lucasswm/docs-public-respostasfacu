---
sidebar_position: 6
sidebar_label: AV1 - Atividade Diagnóstica
---

# Respostas


## #1 Questão

  


_nsmission Controle Protocol / Internet Protocol_) estrutura a rede de forma que os protocolos de camadas superiores encaminham os dados às camadas inferiores com informações de endereçamento e controle adicionados a carga útil dos dados. Este processo é chamado de encapsulamento por Kurose e Ross (2013) e pode ser visualizado conforme o fluxo de dados é transmitido pelas camadas da rede na figura a seguir.

![Exemplo de fluxo de dados com encapsulamento.](http://studiare-assets.s3.sa-east-1.amazonaws.com/uploads/fbaf3cb8-775f-4b74-99af-54928552cdb1/U1S2FU1.png)

Fonte: (KUROSE; ROSS, 2013, p. 40).

Tomando como referência o conceito de encapsulamento de dados pelos protocolos da arquitetura TCP/IP, julgue as afirmativas apresentadas a seguir.

I. Encapsulamento é o nome dado a técnica de adicionar dados de controle aos dados úteis a serem transmitidos através de protocolos de rede em uma rede de computadores dentro de uma arquitetura em camadas de rede.

II. Esta técnica adiciona um informações em cabeçalho quando o dado (carga útil) é encaminhado a outro nível, ou seja, a outra camada da arquitetura da rede.

III. A sequência de envio de dados em uma rede inicia na camada de Aplicação, passa pela camada e Transporte, segue para a camada de Inter-Rede e por fim os dados são encaminhados para a camada de  _Host_  de Rede, onde são transmitidos em formato binário.

IV. Um Datagrama, também chamado de pacote, é o nome dos dados na camada de Inter-Rede que estão sendo transmitidos em uma rede de computadores na arquitetura TCP/IP.

Considerando o contexto apresentado, é correto o que se afirma em:

  

- [ ] II e III apenas.  

- [ ] I, II, apenas.

- [ ] I, II e III, apenas.

- [ ] II, IV, apenas.

- [x] I, II, III e IV. ✅


## #2 Questão

  


O Modelo TCP/IP (_Transmission Control Protocol / Internet Protocol_) oferece um conjunto de protocolos distribuído em camadas: Apresentação, Transporte, Inter-Rede e  _Host_  de Rede. Os serviços implementados por seus protocolos podem ter duas abordagens: Orientada a conexão e Não orientada a conexão.

Considerando um serviço orientado à conexão em nível de Transporte de dados em uma rede de computadores, analise as afirmativas a seguir:

I. Este serviço não garante a entrega dos dados enviado pelo  _host_  de origem até o  _host_  de destino em uma rede de computadores.

II. Este serviço é implementado por um protocolo que privilegia a velocidade de transmissão em contrapartida a necessidade de entrega com confiança dos dados.

III. Um protocolo em nível de Transporte que implementa este serviço é o UDP (_User Datagram Protocol_).

IV. Este tipo de serviço garante a entrega dos dados no  _host_  de destino e utiliza-se primordialmente do protocolo TCP (_Transmission Control Protocol_).

Considerando o contexto apresentado, é correto o que se afirma em:

  

- [ ] I e IV apenas.  

- [ ] II, IV, apenas.

- [ ] III apenas.

- [x] IV apenas. ✅

- [ ] II e III, apenas.


## #3 Questão

  


Dentro da camada de Inter-Rede de um sistema computacional em rede estruturado pela arquitetura TCP/IP, o protocolo ICMP (_Internet Control Message Protocol_) desempenha um importante papel junto ao protocolo IP (Internet Protocol).

Considerando as características do protocolo ICMP, analise as afirmativas a seguir:

I. Trata-se de um protocolo alocado dentro da camada de Inter-Rede da arquitetura TCP/IP.

II. Protocolo responsável por gerenciar os erros de processamento de datagramas do protocolo IP.

III. Protocolo que pode ser operacionalizado mediante ao uso do comando  **_ping_**, que determina se a interface de rede está ativa através de um teste de conexão.

IV. Protocolo que pode ser operacionalizado mediante o comando  **_traceroute_**  ou  **_tracert_** para mapear os saltos e trazer informações sobre o tempo de acesso aos dados entre nodos de rede.

Considerando o contexto apresentado, é correto o que se afirma em:

  

- [ ] I e II, apenas. ✅

- [ ] I, II e IV, apenas.

- [ ] I e III apenas.

- [x] II e III, apenas. ✅

- [ ] I, II, III e IV.


## #4 Questão

  


Conforme definido por Kurose e Ross (2013, p. 331), redes de computadores têm protocolos semelhantes, denominados de  **Protocolos de Acesso Múltiplo**, pelos quais os nós (_hosts_) regulam sua transmissão pelos canais de difusão compartilhados.

O protocolo de acesso ao meio compartilhado CSMA, _Carrier Sense Multiple Access_ é utilizado como tecnologia para utilização de um único canal de comunicação compartilhado por diversos  _hosts_  em uma rede de computadores. Suas implementações com detecção de onda portadora e com colisão evitada de onda portadora são utilizadas em implementações da atualidade em sistemas de redes de computadores.

PORQUE

O protocolo de acesso ao meio compartilhado, CSMA/CD, _Carrier Sense Multiple Access with Collision Detection_ é utilizado em redes  _wireless_  Wi-Fi, por exemplo, enquanto o CSMA/CA, _Carrier Sense Multiple Access with Collision Avoidance é_ utilizado em redes cabeadas com o padrão Ethernet.

A respeito dessas asserções, assinale a alternativa correta.

  

- [ ] As asserções I e II são proposições verdadeiras, mas a II não complementa a I.  

- [ ] As asserções I e II são proposições verdadeiras e a II complementa a I.

- [x] A asserção I é uma proposição verdadeira e a II, falsa. ✅

- [ ] A asserção I é uma proposição falsa e a II, verdadeira.

- [ ] As asserções I e II são proposições falsas.


## #5 Questão

  


Conforme afirma Tanenbaum (2011), quando um processo de aplicação deseja estabelecer uma conexão com um outro processo de aplicação remoto, é necessário especificar a aplicação com a qual ele irá se conectar. Na camada de Transporte, a comunicação utiliza-se de um endereçamento baseado em portas, utilizadas pelos protocolos TCP (_Transmission Control Protocol_) e UDP (_User Datagram Protocol_) para fazer acesso as aplicações com diferentes protocolos na camada de Aplicação.

Considerando as informações sobre o endereçamento em nível de camada de Transporte e a conexão entre diferentes processos de aplicações em camada de Aplicação, analise as afirmativas a seguir:

I. As portas são nomes dados aos  _Transport Service Access Point_  (TSAP), que se associam a seções de acesso chamadas de Socket como ponto final de um endereço de rede em uma aplicação distribuída.

II. As portas são numeradas de 0 a 65.536 e podem ser utilizadas livremente por programadores para implementação de sistemas em rede.

III. Existem 65.536 portas que podem ser utilizadas por aplicações em uma rede de computadores.

IV. As portas 1 a 1024 são reservadas para protocolos definidos para implementação de serviços de sistemas.

Considerando o contexto apresentado, é correto o que se afirma em:

  

- [x] I e IV apenas. ✅

- [ ] I, II, apenas.

- [ ] I, II e IV, apenas.

- [ ] II, III, apenas.

- [ ] I, II, III e IV.