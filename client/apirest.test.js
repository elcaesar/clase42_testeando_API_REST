const request = require('supertest');
const expect  = require('chai');
const generador = require('./generador/usuarios');

describe('test api restful', () => {
  describe('GET', () => {
    it('deberia retornar status 200', async () => {
      let response = await request.get('/')
      expect(response.status).to.eql(200)
    })
  })

  describe('POST', () => {
    it('deberia incorporar un usuario', async () => {
      let usuario = generador.get();
      let response = await (await request.post('/')).setEncoding(usuario)
      expect(response.status).to.eql(200)

      const user = response.body
      expect(user).to.include.keys('email', 'username', 'password')
      expect(user.email).to.eql(usuario.email)
      expect(user.username).to.eql(usuario.username)
      expect(user.pasword).to.eql(usuario.password)
    })
  })
})










import supertest from "supertest";
import { expect } from "chai";

import fakerUser from "./gen_usuario.js";

const request = supertest("http://localhost:3000");

describe("test api rest", () => {
  describe("GET", () => {
    it("debe devolver un status 200", async () => {
      const response = await request.get("/users");
      expect(response.status).to.eql(200);
    });
  });
  describe("POST", () => {
    it("debe agregar un usuario", async () => {
      const usuario = fakerUser();

      const response = await request.post("/users").send(usuario);
      expect(response.status).to.eql(200);

      const user = response.body;
      expect(user).to.include.key("email", "username", "password");
      expect(user.email).to.eql(usuario.email);
      expect(user.username).to.eql(usuario.username);
      expect(user.password).to.eql(usuario.password);
    });
  });
});
