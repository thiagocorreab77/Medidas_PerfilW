window.onload = function() {
    const bitolaSelect = document.getElementById('bitolaSelect');

    const opcoes = [
        "W150X13,0", "W150X18,0", "W150X22,5", "W150X24,0", "W150X29,8",
        "W150X37,1", "W200X15,0", "W200X19,3", "W200X22,5", "W200X26,6",
        "W200X31,3", "W200X35,9", "W200X41,7", "W200X46,1", "W200X52,0",
        "HP200X53,0", "W200X59,0", "W200X71,0", "W200X86,0", "W250X17,9",
        "W250X22,3", "W250X25,3", "W250X28,4", "W250X32,7", "W250X38,5",
        "W250X44,8", "HP250X62,0", "W250X73,0", "W250X80,0", "HP250X85,0",
        "W250X89,0", "W250X101,0", "W250X115,0", "W310X21,0", "W310X23,8",
        "W310X28,3", "W310X32,7", "W310X38,7", "W310X44,5", "W310X52,0",
        "HP310X79,0", "HP310X93,0", "W310X97,0", "W310X107,0", "HP310X110,0",
        "W310X117,0", "HP310X125,0", "W360X32,9", "W360X39,0", "W360X44,0",
        "W360X51,0", "W360X57,8", "W360X64,0", "W360X72,0", "W360X79,0",
        "W360X91,0", "W360X101,0", "W360X110,0", "W360X122,0", "W410X38,8",
        "W410X46,1", "W410X53,0", "W410X60,0", "W410X67,0", "W410X75,0",
        "W410X85,0", "W460X52,0", "W460X60,0", "W460X68,0", "W460X74,0",
        "W460X82,0", "W460X89,0", "W460X97,0", "W460X106,0", "W530X66,0",
        "W530X72,0", "W530X74,0", "W530X82,0", "W530X85,0", "W530X92,0",
        "W530X101,0", "W530X109,0", "W610X101,0", "W610X113,0", "W610X125,0",
        "W610X140,0", "W610X155,0", "W610X174,0"
    ];

    opcoes.forEach(opcao => {
        const optionElement = document.createElement('option');
        optionElement.value = opcao;
        optionElement.textContent = opcao.replace(/X/, ' x ');
        bitolaSelect.appendChild(optionElement);
    });
};