import {
  FastifyRequest, FastifyReply, FastifyPluginCallback,
} from 'fastify';

type RequestGetUser = FastifyRequest<{ Params: { id: number } }>

const getUsers = (req: FastifyRequest, res: FastifyReply) => {
  res.send({ ok: true, msg: 'get users' });
};

const getUserById = async (req: RequestGetUser) => {
  const id = req.params.id || 0;
  return { ok: true, msg: `It works fuckers 3${id}` };
};

const createUser = async (req: FastifyRequest) => ({ ok: true, msg: 'reading body', body: req.body });

const userRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/', getUsers);
  fastify.post('/', createUser);
  fastify.get('/:id', getUserById);
  done();
};

export default userRoutes;
