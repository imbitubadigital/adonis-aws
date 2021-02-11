'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:6|confirmed'
    }
  }

  get messages () {
    return {
      'username.required': 'Informe seu nome!',
      'email.required': 'Informe seu e-mail!',
      'email.email': 'O e-mail possui um formato inválido!',
      'email.unique': 'O e-mail informado está sendo utilizado em outra conta!',
      'password.required': 'Informe sua senha secreta!',
      'password.min': 'A senha deve conter no mínimo 6 caracteres!',
      'password.confirmed': 'A senha e repetição da senha não conferem!'
    }
  }
}

module.exports = User
