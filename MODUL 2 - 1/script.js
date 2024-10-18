// Menyimpan ekspresi matematika yang akan dihitung
let expression = "";

// Menambahkan karakter ke dalam ekspresi
function appendCharacter(char) {
    expression += char;
    document.getElementById("result").value = expression;
}

// Fungsi untuk menghitung hasil ekspresi
function calculate() {
    try {
        // Gantikan operator ^ dengan Math.pow()
        if (expression.includes('^')) {
            let parts = expression.split('^');
            let base = parseFloat(parts[0]);
            let exponent = parseFloat(parts[1]);
            expression = Math.pow(base, exponent).toString();
        } else {
            expression = eval(expression);
        }
        document.getElementById("result").value = expression;
        expression = ''; // Reset setelah hasil
    } catch (error) {
        document.getElementById("result").value = "Error";
        expression = '';
    }
}

// Menghapus semua isi dari layar
function clearScreen() {
    expression = "";
    document.getElementById("result").value = "";
}
