function consultarRuta() {
    const edadInput = document.getElementById('edad').value;
    const sexoInput = document.getElementById('sexo').value;
    const contenedorResultados = document.getElementById('resultados');

    if (edadInput === "" || isNaN(edadInput) || edadInput < 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    const edad = parseFloat(edadInput);
    const sexo = sexoInput;

    let resultadosHTML = "<h3>Intervenciones RIAS Aplicables:</h3>";
    let contador = 0;

    baseDatos3280.forEach(item => {
        let cumpleEdad = (edad >= item.min && edad <= item.max);
        let cumpleSexo = (item.sexo === 'A' || item.sexo === sexo);

        if (cumpleEdad && cumpleSexo) {
            contador++;
            resultadosHTML += `
                <div class="card-resultado">
                    <span class="badge">${item.tipo}</span>
                    <h4>${item.nombre}</h4>
                    <p style="margin: 4px 0;"><strong>Frecuencia:</strong> ${item.freq}</p>
                    <p style="margin: 0; font-size: 0.85rem; color: #555;"><strong>CUPS:</strong> ${item.cups}</p>
                </div>
            `;
        }
    });

    if (contador === 0) {
        resultadosHTML += `<p style="color: #666; text-align: center;">No se encontraron intervenciones estándar de la norma para este filtro exacto.</p>`;
    }

    contenedorResultados.innerHTML = resultadosHTML;
}
