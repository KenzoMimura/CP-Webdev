function calcular() {
    let hi = parseInt(document.getElementById('horaIni').value);
    let mi = parseInt(document.getElementById('minIni').value);
    let hf = parseInt(document.getElementById('horaFim').value);
    let mf = parseInt(document.getElementById('minFim').value);

    let dur = ( (hf * 60 + mf) - (hi * 60 + mi) + 1440 ) % 1440;

    let h = Math.floor(dur / 60);
    let m = dur % 60;

    document.getElementById('horas').textContent = h;
    document.getElementById('minutos').textContent = m;
}