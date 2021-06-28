const express = require("express");
const app = express();
app.listen(8080, () => console.log("Listening at 8080!"));
app.use(express.static('C:\Users\Hp\OneDrive - HTL Anichstrasse (1)\HTL Anichstraße\3AHW_Projekt\Financial-Application\API\Index.html'));
