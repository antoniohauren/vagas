# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

# Rotas:

### Get one user by name:
---
[GET]
```
/user?name=qwe
```

### Get one user by id:
---
[GET]
```
/user/1
```

### Get all users:
---
[GET]
```
/users
```

### Create a user:
---
[POST]
```
/users
```

```
body: {
  name: string,
  job: string
}
```

### Delete a user by name:
---
[DELETE]
```
/user?name=qwe
```

```
headers: {
    x-access-token: string
}
```

### Delete a user by id:
---
[DELETE]
```
/user/1
```

```
headers: {
    x-access-token: string
}
```

### Update a user by name:
---
[PUT]
```
/user?name=qwe
```

```
headers: {
    x-access-token: string
}

body: {
  name?: string,
  job?: string
}
```

### Update a user by id:
---
[PUT]
```
user/1
```

```
haders: {
    x-access-token: string
}

body: {
  "name?": string,
  "job?": string
}
```

### Check access count:
---
[GET]
```
users/access/1
```

### Login:
---
[POST]
```
{
    token: 'admin' | 'user'
}
```
