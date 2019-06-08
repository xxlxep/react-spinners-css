const { createElement } = require('react');
const { Ripple } = require('react-spinners-css');
const { renderToString } = require('react-dom/server');
const express = require('express');
const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ripple));

  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
</head>
<body>
  ${html}
</body>
</html>
`);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
