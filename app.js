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

    let ordenesTexto = "--- ORDENES MÉDICAS / INTERVENCIONES RIAS ---\n";
    let cupsList = new Set();
    let finalidadesSet = new Set();
    let cie10Set = new Set();
    
    let tarjetasHTML = "";
    let contador = 0;

    baseDatos3280.forEach(item => {
        let cumpleEdad = (edad >= item.min && edad <= item.max);
        let cumpleSexo = (item.sexo === 'A' || item.sexo === sexo);

        if (cumpleEdad && cumpleSexo) {
            contador++;
            ordenesTexto += `• ${item.nombre} (Frecuencia: ${item.frecuencia})\n`;
            cupsList.add(`${item.cups} : ${item.nombre}`);
            finalidadesSet.add(item.finalidad);
            cie10Set.add(item.cie10);

            tarjetasHTML += `
                <div class="card-resultado">
                    <span class="badge">${item.categoria}</span>
                    <h4>${item.nombre}</h4>
                    <p style="margin: 4px 0;"><strong>Frecuencia:</strong> ${item.frecuencia}</p>
                    <p style="margin: 4px 0; font-size: 0.85rem; color: #444;"><strong>Talento Humano:</strong> ${item.talento}</p>
                    <p style="margin: 0; font-size: 0.85rem; color: #0056b3;"><strong>CUPS:</strong> ${item.cups}</p>
                </div>
            `;
        }
    });

    if (contador === 0) {
        tarjetasHTML = `<p style="color: #666; text-align: center;">No hay intervenciones preventivas normativas programadas para este filtro exacto.</p>`;
    } else {
        tarjetasHTML = `
            <div style="margin-bottom: 15px;">
                <button onclick="copiarTexto('${ordenesTexto.replace(/\n/g, '\\n')}')" style="background-color: #28a745; padding: 10px;">📋 Copiar Ordenes para HC</button>
            </div>
            <h3>Intervenciones RIAS Aplicables:</h3>
            <div style="background: #e9ecef; padding: 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 15px;">
                <strong>RIPS - Finalidad:</strong> ${Array.from(finalidadesSet).join(', ')}<br>
                <strong>CIE-10 Sugerido:</strong> ${Array.from(cie10Set).join(', ')}<br>
                <strong>CUPS Asociados:</strong><br> ${Array.from(cupsList).join('<br>')}
            </div>
            ${tarjetasHTML}
        `;
    }

    contenedorResultados.innerHTML = tarjetasHTML;
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("¡Órdenes copiadas al portapapeles!");
    });
}
