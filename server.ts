import App from './app';

class Server {
  private app: App;

  constructor(public port: number) {
    this.app = new App();
  }

  async serve() {
    try {
      const add = await this.app.build().listen(this.port);
      console.log('running at', add);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  }
}

export default Server;
