Claro, vou explicar detalhadamente o que cada um dos métodos de função que mencionamos faz:

### 1. **Map:**
O método `map` cria um novo array com os resultados de chamar uma função fornecida para cada elemento do array original.

```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map(function(num) {
  return num * 2;
});
// dobrados será [2, 4, 6]
```

Neste exemplo, `map` está iterando sobre cada elemento do array `numeros` e dobrando cada valor.

### 2. **Filter:**
O método `filter` cria um novo array com todos os elementos do array original que passam por um teste implementado pela função fornecida.

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(function(num) {
  return num % 2 === 0;
});
// pares será [2, 4]
```

Aqui, `filter` está criando um novo array contendo apenas os números pares.

### 3. **Reduce:**
O método `reduce` executa uma função fornecida para cada valor do array, resultando em um único valor acumulado.

```javascript
const numeros = [1, 2, 3];
const soma = numeros.reduce(function(acumulador, num) {
  return acumulador + num;
}, 0);
// soma será 6
```

No exemplo, `reduce` está somando todos os elementos do array.

### Funcionamento Geral:
- **Iteração:**
  - Todos esses métodos (`map`, `filter`, `reduce`) percorrem cada elemento do array.
- **Função de Callback:**
  - Eles recebem uma função de callback como argumento, que é executada para cada elemento.
- **Novo Array ou Valor:**
  - `map` e `filter` criam um novo array com os resultados. `reduce` retorna um único valor acumulado.

### Exemplos Adicionais:
- **Map - Transformando Strings em Números:**
  ```javascript
  const strings = ['1', '2', '3'];
  const numeros = strings.map(function(str) {
    return parseInt(str);
  });
  // numeros será [1, 2, 3]
  ```

- **Filter - Filtrando Números Maiores que 5:**
  ```javascript
  const numeros = [2, 7, 4, 10, 3];
  const maioresQueCinco = numeros.filter(function(num) {
    return num > 5;
  });
  // maioresQueCinco será [7, 10]
  ```

- **Reduce - Concatenando Strings:**
  ```javascript
  const palavras = ['Olá', ' ', 'Mundo', '!'];
  const frase = palavras.reduce(function(acumulador, palavra) {
    return acumulador + palavra;
  });
  // frase será 'Olá Mundo!'
  ```

Esses métodos são extremamente úteis para manipular arrays de uma maneira funcional, proporcionando uma maneira mais concisa e legível de lidar com operações comuns.