/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Crie um objeto para armazenar os números e seus índices
    var numMap = {};

    // Itere pelos números no array
    for (var i = 0; i < nums.length; i++) {
        // Calcule o complemento necessário para atingir o alvo
        var complement = target - nums[i];

        // Verifique se o complemento já existe no mapa
        if (complement in numMap) {
            // Se existe, retornar os índices
            return [numMap[complement], i];
        }

        // Se não existe, adicionar o número atual ao mapa
        numMap[nums[i]] = i;
    }

    // Se nenhum par foi encontrado, retornar null ou uma mensagem de erro, dependendo dos requisitos
    return null;
};


/*
var meuObjeto = {};  // Cria um objeto vazio

// Adiciona um par chave-valor ao objeto
meuObjeto["chave1"] = "valor1";
meuObjeto["chave2"] = "valor2";
meuObjeto["chave3"] = "valor3";

console.log(meuObjeto);  // Saída: { chave1: 'valor1', chave2: 'valor2', chave3: 'valor3' }

// Acesse os valores usando as chaves
console.log(meuObjeto["chave1"]);  // Saída: valor1
console.log(meuObjeto["chave2"]);  // Saída: valor2
console.log(meuObjeto["chave3"]);  // Saída: valor3
*/

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {

    l1 = l1.reverse()
    var num1 = ""
    for(var num of l1) {
        num1 += String(num)
    }
    
    l2 = l2.reverse()
    var num2 = ""
    for(var num of l2) {
        num2 += String(num)
    }
    
    return (Number(num1) + Number(num2)).toString().split('').reverse().map(Number);
};
//console.log(addTwoNumbers([5, 6, 4], [2, 4, 3]))

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = String(x)
    var inicio
    var fim

    if (num < 0) {
        return false
    }

    if ((num.length % 2) == 1) {
        inicio = num.substring(0, (num.length / 2))
        fim = num.substring(((num.length + 1) / 2), num.length).split("").reverse().join("")
    } else {
        inicio = num.substring(0, ((num.length + 1) / 2))
        fim = num.substring(((num.length) / 2), num.length).split("").reverse().join("")
    }

    if (inicio == fim) {
        return true
    } else {
        return false
    }
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var result = 0;

    for (var i = 0; i < s.length; i++) {
        const currentVal = romanValues[s[i]];
        const nextVal = romanValues[s[i + 1]];

        if (nextVal > currentVal) {
            result += (nextVal - currentVal);
            i++; // Avançar mais um índice, pois já consideramos dois caracteres
        } else {
            result += currentVal;
        }
    }

    return result;
};
//console.log(romanToInt(0))

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    // Sort the array to have the strings with the common prefix adjacent
    strs.sort();

    // Take the first and last strings (after sorting)
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    // Find the common prefix between the first and last strings
    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === lastStr[i]) {
            commonPrefix += firstStr[i];
        } else {
            break;
        }
    }

    return commonPrefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Utilize uma pilha para rastrear os caracteres de abertura
    let stack = [];

    // Mapeamento dos caracteres de abertura para seus respectivos fechamentos
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Iterar sobre cada caractere na string
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        // Se o caractere atual é um caractere de fechamento
        if (currentChar === ')' || currentChar === '}' || currentChar === ']') {
            // Verifique se a pilha está vazia
            if (stack.length === 0) {
                return false;
            }

            // Verifique se o caractere de fechamento corresponde ao último caractere de abertura
            const lastOpening = stack.pop();
            if (currentChar !== mapping[lastOpening]) {
                return false;
            }
        } else {
            // Se o caractere atual é um caractere de abertura, empilhe na pilha
            stack.push(currentChar);
        }
    }

    // A string é válida se a pilha estiver vazia no final
    return stack.length === 0;
};

//console.log(isValid("()[]{}"))
//console.log(isValid("{[]}"))
//console.log(isValid("(]"))

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var uniqueCount = 0;

    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            // Se for o primeiro elemento ou não for uma duplicata, atualiza a array
            nums[uniqueCount] = nums[i];
            uniqueCount++;
        }
    }

    // A partir do índice 'uniqueCount', os elementos restantes podem ser ignorados

    return uniqueCount;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))