---
sidebar_position: 6
sidebar_label: AAP3 - Atividade Diagnóstica
---

# Respostas


## #1 Questão

  


De uma forma geral, os sistemas operacionais implementam mecanismos para garantir a independência entre processos, com suporte de hardware para proteção de memória. Mas quando há necessidade de troca de informações entre processos, existem mecanismos apropriados para troca de informações.

Baseado nesses conceitos, assinale a assertiva CORRETA:

  

- [x] A comunicação entre processos em computadores diferentes pode ser feita utilizando sockets. ✅

- [ ] A comunicação entre processos em um mesmo computador pode ser feita através de acesso direto à memória, sem uso de bibliotecas específicas.

- [ ] A comunicação entre threads de um mesmo processo não pode ocorrer, pois um thread interrompe a execução do outro.

- [ ] A comunicação entre threads em máquinas diferentes pode ocorrer através do uso de uma biblioteca específica para troca de mensagens entre threads.

- [ ] A troca de informação entre processos pode gerar resultados incorretos pois altera a região de memória do processo remoto.


## #2 Questão

  


O processamento digital de imagens demanda grande capacidade de processamento. Por isso, os softwares precisam ser implementados de forma que haja distribuição do processamento em vários núcleos de processamento em uma mesma máquina ou em máquinas remotas em uma mesma rede de computadores.

Considerando a distribuição do processamento, marque a alternativa CORRETA:

  

- [ ] Para que o processamento ocorra em uma máquina remota é necessário que seja criado um thread remoto e esse se comunique com os demais por memória compartilhada.  

- [x] A distribuição do processamento em núcleos de processamento de uma mesma máquina pode ser feita pela criação de threads que se comunicam por memória compartilhada. ✅

- [ ] Para que o processamento ocorra em uma mesma máquina é necessário que seja utilizado somente um processo e um único núcleo de processamento.

- [ ] A distribuição do processamento entre máquinas remotas é feita pelo sistema operacional.

- [ ] A distribuição do processamento entre máquinas remotas pode gerar resultados incorretos pois altera a região de memória do processo remoto.


## #3 Questão

  


Mapas são amplamente utilizados em várias aplicações e o compartilhamento de coordenada/localização em tempo real é de fundamental importância. Na implementação da aplicação, a atualização de uma coordenada pode ser realizada usando os conceitos de sockets.

Portanto, analise as afirmativas:

I. Socket é uma interface entre a camada física e a de rede.

II. Cada ponto final na interface socket para TCP/IP é identificado por uma tupla contendo porta TCP, endereço IP.

III. Através da conexão entre sockets é possível conectar pontos finais e fazer operações de E/S.

IV. Sockets não podem ser utilizados para realizar a comunicação entre processos cliente e servidor.

Baseado nos conceitos apresentados nas afirmativas, assinale a alternativa CORRETA.

  

- [ ] As afirmativas I e IV são corretas.  

- [ ] As afirmativas II e IV são corretas.

- [ ] As afirmativas I e II são corretas.

- [ ] As afirmativas III e IV são corretas.

- [x] As afirmativas II e III são corretas. ✅


## #4 Questão

  


Segundo Coulouris (2013) Os sistemas distribuídos podem ser classificados em diferentes categorias, de acordo com sua arquitetura e finalidade, sendo os mais comuns: computação em cluster e computação em grid.

Um cluster é formado por um conjunto de máquinas com
  

- [ ] software semelhantes, ou seja, as máquinas que compõe o cluster possuem características homogênea.  

- [ ] middleware semelhantes, ou seja, as máquinas que compõe o cluster possuem características homogênea.

- [ ] sistemas operacionais semelhantes, ou seja, as máquinas que compõe o cluster possuem características homogênea.

- [x] hardware semelhantes, ou seja, as máquinas que compõe o cluster possuem características homogênea. ✅

- [ ] aplicações semelhantes, ou seja, as máquinas que compõe o cluster possuem características homogênea.