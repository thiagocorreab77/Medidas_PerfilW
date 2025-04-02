function sincronizarInput() {
    const select = document.getElementById('bitolaSelect');
    const input = document.getElementById('bitolaInput');
    input.value = select.value; // Sincroniza o input com a seleção
}

function buscarViga() {
    let bitola = document.getElementById('bitolaInput').value.trim();
    bitola = bitola.toUpperCase().replace(/\s+/g, '');

    const resultContainer = document.getElementById('resultContainer');
    const canvas = document.getElementById('vigaCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if (vigaData[bitola]) {
        const viga = vigaData[bitola];
        resultContainer.innerHTML = `
            <strong>Bitola:</strong> ${bitola} <br>
            <strong>Largura da mesa (bf):</strong> ${viga.bf} mm<br>
            <strong>Altura (d):</strong> ${viga.d} mm<br>
            <strong>Espessura da alma (tw):</strong> ${viga.tw} mm<br>
            <strong>Espessura da mesa (tf):</strong> ${viga.tf} mm<br>
            <strong>Bitola (Imperial):</strong> ${viga.bitolaImperial} <br>
            <strong>Massa Linear:</strong> ${viga.massa} kg/m<br>
            <strong>Área (U):</strong> ${viga.u} m²/m<br>
        `;

        // Desenho técnico no canvas continua o mesmo
        ctx.fillStyle = '#000';
        const scale = 1;
        const startX = 100;
        const startY = 50;

        ctx.fillRect(startX + (viga.bf / 2) * scale - (viga.tw / 2) * scale, startY, viga.tw * scale, viga.d * scale);
        ctx.fillRect(startX, startY, viga.bf * scale, viga.tf * scale);
        ctx.fillRect(startX, startY + (viga.d - viga.tf) * scale, viga.bf * scale, viga.tf * scale);

        ctx.font = "14px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText(`d = ${viga.d} mm`, startX + (viga.bf * scale) + 10, startY + (viga.d / 2) * scale);
        ctx.fillText(`bf = ${viga.bf} mm`, startX + (viga.bf / 2) * scale - 30, startY - 10);
        ctx.fillText(`tw = ${viga.tw} mm`, startX + (viga.bf / 2) * scale - 100, startY + (viga.d / 2) * scale);
        ctx.fillText(`tf = ${viga.tf} mm`, startX + (viga.bf * scale) + 10, startY + viga.tf * scale / 2);
    } else {
        resultContainer.innerHTML = "Viga não encontrada!";
    }
}
