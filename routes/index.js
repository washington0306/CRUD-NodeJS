const routerAtendimento = require('./atendimentoRoute')
modeule.export = (app) => {
    app.use(routerAtendimento);
}