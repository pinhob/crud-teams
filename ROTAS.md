# Rotas
Neste documento você encontra a documentação de cada um dos endpoints das rotas da aplicação.

O endereço base da aplicação é:

```
http://localhost:4242/v1/
```

Todos os endpoints aqui listados complementam este endereço, como, por exemplo `http://localhost:4242/v1/auth/login`.

Você também pode utilizar o arquivo `CRUD_Insomnia.json` no Insomnia para realizar testes na aplicação.

---
---
## Sumário
- [Users](#users-auth)
  - [POST Criar usuário](#post-criar-usuário-register)
  - [POST Fazer login](#post-fazer-login-login)
- [Pessoas](#pessoas-people)
  - [POST Criar pessoa](#post-criar-pessoa-new)
  - [GET Listar pesoas](#get-listar-pesoas)
  - [GET Listar pessoa pelo id](#get-listar-pessoa-pelo-id-idr-pessoa-pelo-id)
  - [PATCH Atualizar informação da pessoa](#patch-atualizar-informação-da-pessoa-idessoa-pelo-id)
	- [DELETE Deletar pessoa](#delete-deletar-pessoa-id)
- [Equipes](#equipes-teams)
  - [POST Criar equipe](#post-criar-equipe-new)
  - [GET Listar equipes](#get-listar-equipes)
  - [GET Listar equipe pelo id](#get-listar-equipe-pelo-id-id)
  - [PUT Atualizar equipe](#put-atualizar-equipe-id)
	- [DELETE Deletar pessoa](#delete-deletar-equipe-id)
---

## Users (`/auth`)
### POST Criar usuário (`/register`)
* Corpo da requisição:
```
	"name": string (obrigatório),
	"email": string (obrigatório),
	"password": string (obrigatório)
```
* Exemplo de resultado esperado:
```
// STATUS: 201
{
	"user": {
		"name": "Carlos",
		"email": "carlos@email.com",
		"_id": "62de3d60c0ba42afbb327579",
		"createdAt": "2022-07-25T06:51:12.765Z",
		"__v": 0
	},
	"token": "..."
}
```
### POST Fazer login (`/login`)
* Corpo da requisição:
```
	"email": string (obrigatório),
	"password": string (obrigatório)
```
* Exemplo de resultado esperado:
```
// STATUS: 200
{
	"user": {
		"email": "carlos@email.com",
		"_id": "62de3d60c0ba42afbb327579",
		"createdAt": "2022-07-25T06:51:12.765Z",
		"__v": 0
	},
	"token": "..."
}
```

## Pessoas (`/people`)
### POST Criar pessoa (`/new`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Corpo da requisição:

```
{
  "name": string (obrigatório),
  "lastName": string (obrigatório), 
  "email": string (obrigatório), 
	"role": string (obrigatório), 
	"city": string, 
	"age": number,
}
```

* Exemplo de resultado esperado:

```
// STATUS 200
{
	"name": "Bruno",
	"lastName": "Pinho",
	"email": "brunopinho@email.com",
	"role": "Analista Supoerte Operação - Node",
	"city": "São Paulo",
	"age": 25,
	"_id": "62de49c1a0740bce5cd15f41",
	"__v": 0
}
```

### GET Listar pesoas (`/`)
* **Sem corpo da requisição**.

* Exemplo de resultado esperado: 
```
// STATUS 200
[
	{
		"_id": "62de381394dff0e920393e68",
		"name": "Luiz",
		"lastName": "Silva",
		"email": "luiz@gmail.com",
		"role": "Técnico",
		"city": "Rio de Janeiro",
		"age": 30,
		"__v": 0
	},
	{
		"_id": "62de49c1a0740bce5cd15f41",
		"name": "Bruno",
		"lastName": "Pinho",
		"email": "brunopinho@email.com",
		"role": "Analista Supoerte Operação - Node",
		"city": "São Paulo",
		"age": 25,
		"__v": 0
	}
]
```
### GET Listar pessoa pelo id (`/:id`)
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
	{
		"_id": "62de49c1a0740bce5cd15f41",
		"name": "Bruno",
		"lastName": "Pinho",
		"email": "brunopinho@email.com",
		"role": "Analista Supoerte Operação - Node",
		"city": "São Paulo",
		"age": 25,
		"__v": 0
	}
```
## PATCH Atualizar informação da pessoa (`/:id`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
	{
		"_id": "62de381394dff0e920393e68",
		"name": "Luiz",
		"lastName": "Silva",
		"email": "luiz@gmail.com",
		"role": "Técnico",
		"city": "São Paulo",
		"age": 30,
		"__v": 0
	},
```

## DELETE Deletar pessoa (`/:id`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
	{
		"_id": "62de381394dff0e920393e68",
		"name": "Luiz",
		"lastName": "Silva",
		"email": "luiz@gmail.com",
		"role": "Técnico",
		"city": "São Paulo",
		"age": 30,
		"__v": 0
	},
```

## Equipes (`/teams`)
### POST Criar equipe (`/new`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Corpo da requisição:

```
{
  "name": string (obrigatório),
  "description": string,
  "members": array de strings (ids),
}
```

* Exemplo de resultado esperado:

```
// STATUS 200
{
	"name": "Suporte Operação",
	"description": "Suporte da área de Operações de Rede Externa da Vivo",
	"members": [
		{
			"_id": "62ddedd8e73a514e60a6883e",
			"name": "Bruno",
			"lastName": "Pinho",
			"email": "bruno@email.com",
			"role": "Analista Supoerte Operação - Node",
			"city": "São Paulo",
			"age": 25,
			"__v": 0
		}
	],
	"_id": "62de09f542890b2a658e5e58",
	"__v": 0
}
```

### GET Listar equipes (`/`)
* **Sem corpo da requisição**.

* Exemplo de resultado esperado: 
```
// STATUS 200
[
	{
		"_id": "62de00f76319ac49116dd2c5",
		"name": "Suporte Operação",
		"description": "Suporte da área de Operações de Rede Externa da Vivo",
		"members": [],
		"__v": 0
	},
	{
		"_id": "62de011e6319ac49116dd2ca",
		"name": "Telefonia",
		"description": "Implatação e melhoria da área de telefonia da região de São Paulo",
		"members": [
			"62de11f7af385b6db4d6f610"
		],
		"__v": 0
	},
]
```

### GET Listar equipe pelo id (`/:id`)
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
{
	"_id": "62de00f76319ac49116dd2c5",
	"name": "Suporte Operação",
	"description": "Suporte da área de Operações de Rede Externa da Vivo",
	"members": [],
	"__v": 0
}
```

### PUT Atualizar equipe (`/:id`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
{
	"_id": "62de00f76319ac49116dd2c5",
	"name": "Suporte Operação",
	"description": "Suporte da área de Operações de Rede Externa da Vivo",
	"members": [
    "62de11f7af385b6db4d6f610"
  ],
	"__v": 0
}
```

### DELETE Deletar equipe (`/:id`)
**É necessário passar o header Authorization com o token gerado no momento do cadastro ou login**
* Sem corpo da requisição. **Informar id pela URL**. 

* Exemplo de resultado esperado: 
```
// STATUS 200
	{
		"_id": "62de011e6319ac49116dd2ca",
		"name": "Telefonia",
		"description": "Implatação e melhoria da área de telefonia da região de São Paulo",
		"members": [
			"62de11f7af385b6db4d6f610"
		],
		"__v": 0
	},
```