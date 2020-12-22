/*window.onload = () => {
  document.getElementById("downloadbtn").addEventListener("click", () => {
    let elems = document.getElementsByName("ipForm")[0].getElementsByTagName("input");
    for (let i = 0; i < elems.length; i++) {
      // set attribute to property value
      elems[i].setAttribute("value", elems[i].value);
      console.log(elems[i].value);
      elems[i].insertAdjacentHTML("afterend", "<span class ='insertedContent'>" + elems[i].value + "</span>");
      elems[i].style.display = "none";
      console.log(elems[i].value);
    }
    elems = document.getElementsByName("ipForm2")[0].getElementsByTagName("input");
    for (let i = 0; i < elems.length; i++) {
      // set attribute to property value
      elems[i].setAttribute("value", elems[i].value);
      elems[i].insertAdjacentHTML("afterend", "<span class ='insertedContent'>" + elems[i].value + "</span>");
      elems[i].style.display = "none";
      console.log(elems[i].value);
    }

    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const invoice = document.querySelector("#tabcont");
    let heightCM = height / 35.35;
    // EXPORTAR A PDF
    console.log(invoice);
    const opt = {
      margin: 3,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 1 },
      jsPDF: { unit: "cm", format: [heightCM, 60], orientation: "landscape" },
      pagebreak: { mode: ["css", "legacy"], after: ".breakme" },
      html2canvas: { scrollX: -400, scrollY: -400 },
    };
    html2pdf(invoice, opt);

    // DELETE
    elems = document.getElementsByName("ipForm2")[0].getElementsByTagName("input");
    for (let i = 0; i < elems.length; i++) {
      let insertedContent = document.querySelector(".insertedContent");
      if (insertedContent) {
        // insertedContent.parentNode.removeChild(insertedContent);
      }
      elems[i].style.display = "block";
    }
    elems = document.getElementsByName("ipForm")[0].getElementsByTagName("input");
    for (let i = 0; i < elems.length; i++) {
      let insertedContent = document.querySelector(".insertedContent");
      if (insertedContent) {
        // insertedContent.parentNode.removeChild(insertedContent);
      }
      elems[i].style.display = "block";
    }
  });
};
*/
// window.onload = () => {
//     document.getElementById("downloadbtn").addEventListener("click", () => {
//         let body = document.getElementsByTagName('body')[0];
//         let tbl = document.createElement('table');
//         tbl.style.width = '100%';
//         tbl.style.height = '82px';
//         tbl.setAttribute('border', '1');
//         let tbdy = document.createElement('tbody');
//         for (let i = 0; i < 3; i++) {
//           let tr = document.createElement('tr');
//           for (let j = 0; j < 2; j++) {
//             if (i == 2 && j == 1) {
//               break
//             } else {
//               let td = document.createElement('td');
//               td.appendChild(document.createTextNode('\u0020'))
//               i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
//               tr.appendChild(td)
//             }
//           }
//           tbdy.appendChild(tr);
//         }
//         tbl.appendChild(tbdy);
//         body.appendChild(tbl);
//     })
// }
