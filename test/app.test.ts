import request from 'supertest';
import { test } from 'tap';
import App from '../app';


test('GET `/` route', async (t) => {
  const app = new App().build();

  t.teardown(() => { app.close(); })

  await app.ready()

  const res = await request(app.server).get('/')
  t.same(res.body, { ok: true, msg: "/" })
})


test('GET `/ping` route', async (t) => {
  const app = new App().build();

  t.teardown(() => { app.close(); })

  await app.ready()

  const res = await request(app.server).get('/ping')
  t.same(res.body, { ok: true, msg: "pong" })
})


