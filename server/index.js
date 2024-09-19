const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.use('/api', require('./router/routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});