<h1 align="center">Bem vindos ao website do CodeLab</h1>

## 🤝 Como Contribuir
Aqui constam as instruções para fazer parte da criação deste site:

1. Escolha uma task para fazer, elas estão disponíveis em nosso **ClickUp**. Caso você ainda não tenha acesso, entre em contato com o diretor responsável.
   
2. Clone este repositório remoto em sua máquina, em seu **terminal** digite:
   ```bash
   git clone https://github.com/RenanMoreir/AEX2025.1-DevLearn-.git
   
   cd AEX2025.1-DevLearn/

   npm install
   ```
   
3. Criar uma **branch** para a task. Exemplo: paginaLogin
   ```
   git checkout -b paginaLogin
   ```
4. Após terminar sua task, basta mandar suas modificações locais para este repositório remoto:
   ```bash
   git add .

   git commit -m "feat: adicionei página de login de usuários"

   git push origin paginaLogin
   ```
   
5. Por fim, basta vir aqui no **Github** e pedir uma **Pull Request**. Vamos analisar seu código e te dar um feedback!


> [!WARNING]
> Lembre-se de realizar um ```git fetch``` sempre que for começar algo, assim não haverá conflito na hora do ```git push```.
