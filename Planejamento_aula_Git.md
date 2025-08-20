# Planejamento aula de Git

https://git-scm.com/

## O que é um Sistema de Controle de Versão?

## Descrição do modelo Git

- Snapshots ()
- Operações Locais 
- Integridade de dados
- Os 3 Estados da Matéria
    - modified [Working Directory ()
    - staged [Staging Area (Área de Preparação) - INDEX (git add)
    - commited [Repository (Repositório) (git commit)

### Apresentação do fluxo básico do repositório
- Checkout
- Modify
- Stage
- Commit
    - Opcionais: Merge / Rebase
    - Opcionais: Push

### Repositório Distribuído
    - Cada cliente tem um backup completo do repositório
    - Destacar ideia de push vs pull
    - Apresentar modelos de trabalho distribuído
        -- Centralizado
        -- Ditador
        -- Ditador e Tenentes

### Confiabilidade dos Dados
    - Uso de checksum em arquivos e commits (Ids)
    - Ids definem o histórico do repositório

## Modo de Uso

- Terminal / Git bash
- Clientes GUI
    - GitKraken
    - SourceTree 
    - GitHub Desktop
    - GitExtensions

## Preparando o Ambiente

- git config
    - --system
    - --global
    - --local [default]

$ git config set --global user.name "José Exemplo"
$ git config set --global user.email zeexemplo@email.com
$ git config set --global core.editor nano

$ git config list
$ git config get core.filemode
$ git config unset --global user.name
$ git config edit --global


https://git-scm.com/docs/git-config
$ git help config
$ git config -h


## Iniciando um Repositório

- Clonando origem remota
    - $ cd diretorio_base
    - $ git clone "https://github.com/ezancanaro/QuantumInterpreter" haskell_quantumInterpreter

- Criando repositório local
    - $ cd diretorio_base
    - $ mkdir aula_git
    - $ cd aula_git
    - $ git init
    - $ nano LICENSE
    - $ git add LICENSE
    - $ git commit [-m "Commit Inicial"]

## Controlando Arquivos
### Status
- $ git status
- $ nano README
- $ git add README 
//- $ git diff --staged 
- $ git status
- $ nano LICENSE
- $ git status
- $ git add LICENSE
- $ nano LICENSE
- $ git status 
- $ git diff [--staged]

### Git Ignore
- $ cat .gitignore
- $ nano .gitignore
    *.class
    *.jar
    *.[oa]
    !biblioteca.jar
    target/
    build/
    senhas.cfg
    prod.env
    bd_credentials.json

### Commit
- $ git commit [-v]             # abrirá editor de text
- $ git commit -a               # commit de TODOS os arquivos modificados, ignorando staging area

### Remoção de Arquivos
- $ git rm --cached README  # mantém no diretório de trabalho mas remove dos arquivos tracked
- $ git rm README           # remove do repositório e do diretório de trabalho

- $ git mv README README.md # renomear um arquivo explicitamente no git

## Gestão de Repositório
 Pedir para voltarem no repositório clonado
- $ git log
- $ git log -p -2
- $ git log --pretty=format:"%h - %an, %ar : %s"

- $ git help log

### Desfazendo/Refazendo Alterações
- $ git commit --amend
!!! Cuidado ao utilizar esse tipo de operação
- $ git reset HEAD {arquivo} # Remove da área de staging
- $ git restore --staged {arquivo} # alternativa nas versões mais recentes
!!! Operações Destrutivas, sobrescrevem as alterações locais
- $ git checkout HEAD README # Defaz alterações locais, substituindo o arquivo pelo commit HEAD
- $ git restore {arquivo} # Restaura o arquivo a versão do HE

## Repositórios Remotos
- git remote -v # listar repositórios remotos associados ao local
- git remote add origin https://github.com/ezancanaro/Git_UniSENAI.git
- git fetch origin # fetch vs pull
- git push -u origin main

## Tags (Manter como material extra ao final da aula)
- git tag
- git tag -a v1.0 -m "comentário sobre a versão 1.0"
- git tag -a v0.5 -m "comentário" 9ce7b7
- git push origin tags


## Git Branches! (Demonstrar ponteiros )
- git branch {nome_branc} # Criar um branch a partir do commit atual \
- git checkout {nome_branc} # Alterar para o branch                  / git checkout -b {nome_estudante}
- nano Arquivo_Exemplo
- git add Arquivo_Exemplo
- git commit -m "..."
- git checkout main
- nano Arquivo_Exemplo
- git add Arquivo_Exemplo
- git commit -m "..."
- git log --all --decorate --oneline --graph #https://i.sstatic.net/ElVkf.jpg

## Merge
- git checkout main
- git merge {nome_branch}
- git branch -d {nome_branch} # excluir branch redundante

## Rebase
- Reaplica as alterações de um commit em outro branch
- git checkout {branch_local}
- git rebase main
- git checkout main
- git merge {branch_local}
- Apontar problemas com rebase de commits enviados ao remoto

## Remoto
 - Branch Remoto vs Branch Local # Ilustrar grafo de ponteiros 
 - git remote show | git ls-remote
 - git remote show origin
 - git fetch origin/{branch_remoto} VS git pull (git fetch + git merge)
 - git checkout {branch_local}
 - git merge origin/{branch_remoto}
 - git checkout -b {branch_local} origin/{branch_remoto} # Cria um 'tracking branch'
 - git checkout {branch_remoto} # Atalho para o comando acima
 - git branch -u origin/{branch_remoto}
 - git diff main origin/main
 - Enviando alterações ao remoto
     - git push origin {branch_local}
     - git push origin {branch_local}:{branch_remoto}

### Apresentar situação de exemplo de trabalho em branches
### Gerar estrutura de repositório que force conflitos no merge
### Demonstrar no grafo os commits envolvidos no Merge (3 way merge)
### Discutir nomeclaturas
 - fix_descricao
 - issue12
 - cartao_do_trelo


## Metodologias de Trabalho Colaborativo
- Centralizado - Branch, modify, add, commit, checkout, merge, push
- Integrador Responsável - Branch, modify, add, commit, push, pull-request
- Fork - Clone, Fork, modify, add, commit, push, pull-request

## Stash


# Tessauro

1. Repositório: Coleção de commits, arquivando o estado do diretório de trabalho no passado;
2. HEAD: identificação do commit inicial da árvore de trabalho atual;
3. Index: área de preparação (staging area). Armazena as alterações locais antes de comprometê-las ao repositório;
4. Diretório de Trabalho/Árvore de trabalho: diretório (e subdiretorios) ou sistema de arquivos associado a um repositório;
5. Commit: snapshot da árvore de trabalho em um determinado momento. Identificado por um hash SHA-1;
6. Branch: é um commit nomeado, ou uma referência. A cada commit, é atualizado para apontar para o HEAD atual;

