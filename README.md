# Weather

Este projeto é um aplicativo de clima que permite aos usuários buscar as condições atuais do clima em qualquer cidade. O aplicativo exibe a temperatura, a descrição do clima, a umidade e a velocidade do vento usando dados obtidos da API OpenWeatherMap.

## Funcionalidades

- **Buscar Clima**: Insira o nome de uma cidade para obter as informações atuais do clima.
- **Detalhes do Clima**: Exibe a temperatura em Celsius, uma descrição do clima, porcentagem de umidade e velocidade do vento.
- **Tratamento de Erros**: Se uma localização inválida for inserida, uma mensagem de erro será exibida.
- **Design Responsivo**: O aplicativo é projetado para funcionar em vários tamanhos de tela.

## Tecnologias Utilizadas

- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização do aplicativo, incluindo layout e animações.
- **JavaScript**: Manipula a lógica para buscar dados da API e atualizar a interface do usuário.
- **API OpenWeatherMap**: Fornece dados meteorológicos em tempo real.

## Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/weather-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd weather
   ```

3. Abra o `index.html` no seu navegador.

4. **Obtenha sua chave da API:**

   - Acesse [OpenWeatherMap](https://openweathermap.org/).
   - Crie uma conta ou faça login.
   - Navegue até a seção de API Keys no painel de usuário e gere uma nova chave da API.

5. **Configure a chave da API no código:**

   - Abra o arquivo `index.js`.
   - Substitua o placeholder `"Sua API Key"` pela sua chave da API obtida no passo anterior:
     ```javascript
     const APIKey = "sua-chave-da-api";
     ```

6. Insira o nome de uma cidade na caixa de busca e clique no ícone de busca ou pressione Enter.

7. Os detalhes do clima para a localização inserida serão exibidos.

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal contendo a estrutura do aplicativo.
- `style.css`: Arquivo CSS para estilização do aplicativo.
- `index.js`: Arquivo JavaScript para manipulação de solicitações à API e atualização da interface.
- `images/`: Pasta contendo ícones de clima e imagens de erro.

## Créditos

- Dados do clima fornecidos por [OpenWeatherMap](https://openweathermap.org/).
- Ícones de [FontAwesome](https://fontawesome.com/).

---
## Imagens do Weather:

Barra de busca para inserir o endereço:

<img width="655" alt="image" src="https://github.com/user-attachments/assets/191d712f-7622-4641-9838-884e08a7caca">

Clima do endereço inserido:

<img width="821" alt="image" src="https://github.com/user-attachments/assets/5b5b0c2c-2dd1-47fd-b3a9-f8c297e01382">

Erro 404 quando não encontrar o endereço inserido:

<img width="752" alt="image" src="https://github.com/user-attachments/assets/a2f06205-5cc6-48a7-927e-7daf0d5cd148">
