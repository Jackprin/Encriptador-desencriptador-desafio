function encrypt() {
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');

    document.getElementById('outputText').value = outputText;
    showOutput();
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');

    document.getElementById('outputText').value = outputText;
    showOutput();
}

function showOutput() {
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyButton').style.display = 'inline-block';
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
