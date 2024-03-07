const getErrorHtml = (err) => {
    const errorHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tienda de ropa</title>
        <link rel="stylesheet" href="/errorStyles.css">
    </head>
    <body>
        <img src='/error.png' width='100'/>
        <h1 class='errorTitle'>${err}</h1>
    </body>
    </html>
    `
    return errorHtml
}

module.exports = getErrorHtml