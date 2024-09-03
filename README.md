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
    cd weather-app
    ```

3. Abra o `index.html` no seu navegador.

4. Insira o nome de uma cidade na caixa de busca e clique no ícone de busca ou pressione Enter.

5. Os detalhes do clima para a localização inserida serão exibidos.

## Chave da API

Para rodar o projeto, você precisa de uma chave da API do OpenWeatherMap. Substitua o placeholder no arquivo JavaScript pela sua chave da API:
```javascript
const APIKey = "sua-chave-da-api";
```

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal contendo a estrutura do aplicativo.
- `style.css`: Arquivo CSS para estilização do aplicativo.
- `index.js`: Arquivo JavaScript para manipulação de solicitações à API e atualização da interface.
- `images/`: Pasta contendo ícones de clima e imagens de erro.

## Créditos

- Dados do clima fornecidos por [OpenWeatherMap](https://openweathermap.org/).
- Ícones de [FontAwesome](https://fontawesome.com/).

## Licença

Este projeto é licenciado sob a Licença MIT.

---

Sinta-se à vontade para ajustar o README conforme necessário para atender às suas necessidades.
