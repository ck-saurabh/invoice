var fs = require("fs");
// var pdf = require("html-pdf");
var html = fs.readFileSync("./index.html", "utf8");
// var options = { format: "A4" };

// pdf.create(html, options).toFile("./invoice.pdf", function (err, res) {
//   if (err) return console.log(err);
//   console.log(res);
// });
const { jsPDF } = require("jspdf");

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.html(html, { filename: "a4.pdf", autoPaging: true });
