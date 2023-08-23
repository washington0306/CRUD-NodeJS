const {} = require("express");
const router = Router();

router.get("/atendimentos", (req, res) => {
    res.send('chegou aqui, estamo listando os atendimentos')
});

router.post('/atendimentos', (req, res) =>{
    res.send('chegou aqui, estamos criando um novo atendimento');
})

router.put('/atendimentos/:id', (req, res) =>{
    const { id } = req.params;
    res.send(`chegou aqui estamos atualizando o atendimento ${id}`);
});

router.delete('/atendimentos/:id', (req, res) =>{
    const { id } = req.params;
    res.send('Chegou aqui, estamos criando um novo atendimento' + id + '...')
})

module.export = router;