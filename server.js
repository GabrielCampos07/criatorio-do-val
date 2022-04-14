import app from './api/index.js';

const port = process.send?.PORT || 3000;

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));