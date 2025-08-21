# Desafio 3 — Planejamento de um Media Player

# Entendimento do que precisa ser feito
Criar criar um media player que exiba arquivos mp4 e png em sequência. Esses arquivos devem ser mostrados na segunda tela do computador. O usuário precisa conseguir modificar a ordem dos arquivos e definir por quanto tempo cada imagem png deve ficar visível. Essas mudanças devem poder ser feitas a qualquer momento durante a execução do programa...

# Por onde eu começaria:
Começaria entendendo como capturar e usar a segunda tela. Porque tudo será exibido nela. Depois disso, o próximo passo seria montar uma estrutura que consiga ler uma lista de arquivos e exibir cada um na ordem. O foco seria em alternar corretamente entre vídeos e imagens, com controle do tempo das imagens.
# Como eu pensaria a arquitetura:
Separaria o projeto em três partes. A primeira parte seria o reprodutor, que mostra os arquivos na tela. A segunda parte seria o controle da playlist, que permite o usuário definir a ordem e os tempos. A terceira seria a lógica que liga os dois, garantindo que o reprodutor siga a playlist como ela está configurada.
A playlist pode ser representada por um arquivo json, contendo o caminho do arquivo e, no caso das imagens, o tempo de exibição. Esse arquivo pode ser editado pela interface do sistema ou manualmente, se necessário.

# Tecnologias que eu usaria
Bom iniciamos com Python nesse caso, li que tkinter pode ser uma boa opcao, por ser mais leve, ou PyQt. Para reproduzir vídeos, poderia usar alguma biblioteca como ffpyplayer. Para imagens, Pillow. Para detectar e usar a segunda tela, usaria screeninfo. E se for necessário detectar alterações no json da playlist em tempo real, avaliaria o uso de watchdog.

# O que seria o fluxo do projeto
Primeiro, testar se é possível abrir uma janela em tela cheia na segunda tela. Depois, implementar a reprodução sequencial de arquivos, respeitando o tempo das imagens e a duração dos vídeos. Em seguida, criar o json da playlist e garantir que o player siga esse arquivo corretamente. Depois disso, montar uma interface que permita o usuário reorganizar a lista e mudar os tempos. Por fim, garantir que qualquer mudança feita pelo usuário seja aplicada ao player sem precisar reiniciar o sistema.
# Dificuldades:
Pode ser difícil garantir que a janela do player abra sempre na segunda tela, de forma estável. Outra coisa que pode dar trabalho é fazer a transição entre arquivos de forma suave, especialmente entre vídeos e imagens. Também pode ser desafiador garantir que a duração dos vídeos não cause atrasos ou conflitos com o tempo das imagens. E fazer uma interface simples, mas funcional, que permita o usuário fazer essas alterações sem confusão.

# Próximos passos
Depois desse planejamento, o próximo passo seria começar testando a reprodução das mídias, direto na segunda tela... Se essa parte funcionar bem, o restante tende a se encaixar naturalmente conforme for sendo implementado.