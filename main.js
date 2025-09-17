function calcular() {
    let hi = parseInt(document.getElementById('horaIni').value);
    let mi = parseInt(document.getElementById('minIni').value);
    let hf = parseInt(document.getElementById('horaFim').value);
    let mf = parseInt(document.getElementById('minFim').value);

    if (isNaN(hi) || isNaN(mi) || isNaN(hf) || isNaN(mf)) {
        alert('Por favor, insira valores válidos para horas e minutos.');
        return;
    }

    let dur = ((hf * 60 + mf) - (hi * 60 + mi) + 1440) % 1440;


    let h = Math.floor(dur / 60);
    let m = dur % 60;

    h = String(h).padStart(2, '0');
    m = String(m).padStart(2, '0');

    document.getElementById('horas').textContent = h;
    document.getElementById('minutos').textContent = m;
}