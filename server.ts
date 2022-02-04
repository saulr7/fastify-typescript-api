import App from './app';

class Server {
  private app: App;

  // eslint-disable-next-line no-unused-vars
  constructor(public port: number) {
    this.app = new App();
  }

  async serve() {
    try {
      const add = await this.app.build().listen(this.port);
      // eslint-disable-next-line no-console
      console.log('running at', add);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Something went wrong', error);
    }
  }
}

export default Server;
