function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let bitola = document.getElementById('bitolaInput').value.trim();
    bitola = bitola.toUpperCase().replace(/\s+/g, '');

    if (vigaData[bitola]) {
        const viga = vigaData[bitola];

        // Adiciona o título ao PDF centralizado
        doc.setFontSize(16);
        doc.text('Relatório da Viga W', 105, 20, { align: 'center' });

        // Alinha as informações da viga à esquerda com espaçamento entre linhas
        doc.setFontSize(12);
        let posY = 40;
        doc.text(`Bitola: ${bitola}`, 20, posY);
        posY += 10;
        doc.text(`Largura da aba (bf): ${viga.bf} mm`, 20, posY);
        posY += 10;
        doc.text(`Altura (d): ${viga.d} mm`, 20, posY);
        posY += 10;
        doc.text(`Espessura da alma (tw): ${viga.tw} mm`, 20, posY);
        posY += 10;
        doc.text(`Espessura da aba (tf): ${viga.tf} mm`, 20, posY);
        posY += 10;
        doc.text(`Bitola Imperial: ${viga.bitolaImperial}`, 20, posY);
        posY += 10;
        doc.text(`Massa Linear: ${viga.massa} kg/m`, 20, posY);
        posY += 10;
        doc.text(`Área (U): ${viga.u} m²/m`, 20, posY);

        // Adiciona as anotações com limite de largura
        const anotacoes = document.getElementById('notas').value;
        posY += 20;
        doc.text('Notas:', 20, posY);
        posY += 10;
        doc.text(anotacoes, 20, posY, { maxWidth: 170 });

        // Adiciona a imagem centralizada no PDF
        const canvas = document.getElementById('vigaCanvas');
        const imgData = canvas.toDataURL('image/png');
        posY += 40;
        doc.addImage(imgData, 'PNG', 15, posY, 180, 100);

        // Gera o PDF
        doc.save(`relatorio_viga_${bitola}.pdf`);
    } else {
        alert("Viga não encontrada para exportar!");
    }
}
