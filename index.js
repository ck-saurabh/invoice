var fs = require("fs");
var html_to_pdf = require("html-pdf-node");
var html = fs.readFileSync("./index.html", "utf8");

let options = { format: "A4", path: "invoice.pdf" };

let file = { content: html };
html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  console.log("PDF Buffer:-", pdfBuffer);
});
