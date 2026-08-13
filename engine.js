// ==========================================
// MOTOR CLÍNICO Y ALGORÍTMICO (FORMATO MÉDICO ESTRICTO)
// ==========================================

function ejecutarMotorClinico(edadValor, tipoEdad, sexo, estadoControl, gestante) {
    let edadEnMeses = (tipoEdad === 'anios') ? (edadValor * 12) : edadValor;

    let intervencionesAplicables = [];
    let cupsSet = new Set();
    let finalidadesSet = new Set();
    let cie10Set = new Set();
    
    // Formato de orden médica directa que exige el médico
    let textoOrdenesMedicas = "ORDENES MÉDICAS Y PARACLÍNICOS (RIAS 3280):\n\n";

    let alertaIntervaloHTML = "";
    if (estadoControl === 'prematuro') {
        alertaIntervaloHTML = `<div class="alerta prematuro">⚠️ ALERTA: Control previo reciente. Verifique pertinencia para evitar glosas por controles prematuros.</div>`;
        textoOrdenesMedicas += "[AVISO: Control previo reportado como prematuro]\n\n";
    } else if (estadoControl === 'tardio') {
        alertaIntervaloHTML = `<div class="alerta tardio">🚨 ALERTA: Brecha en cohorte PyP (Control vencido o tardío). Canalización prioritaria requerida.</div>`;
        textoOrdenesMedicas += "[AVISO: Brecha detectada - Control tardío/vencido]\n\n";
    } else if (estadoControl === 'en_rango') {
        alertaIntervaloHTML = `<div class="alerta adecuado">✅ Intervalo de control adecuado según cohorte normativa.</div>`;
        textoOrdenesMedicas += "[Intervalo de atención adecuado]\n\n";
    }

    baseDatos3280.forEach(item => {
        let cumpleEdad = (edadEnMeses >= item.minMeses && edadEnMeses <= item.maxMeses);
        let cumpleSexo = (item.sexo === 'A' || item.sexo === sexo);

        if (cumpleEdad && cumpleSexo) {
            intervencionesAplicables.push(item);
            cupsSet.add(`CUPS: ${item.cups} - ${item.nombre}`);
            finalidadesSet.add(item.finalidad);
            cie10Set.add(item.cie10);
            
            // Generación de la línea en formato exacto SS/
            textoOrdenesMedicas += `SS/ ${item.nombre}\n- Código CUPS: ${item.cups}\n- Finalidad: ${item.finalidad}\n- Diagnóstico CIE-10: ${item.cie10}\n- Frecuencia: ${item.frecuencia}\n\n`;
        }
    });

    return {
        alertaIntervaloHTML,
        intervencionesAplicables,
        cupsAislados: Array.from(cupsSet),
        finalidadesRips: Array.from(finalidadesSet),
        cie10Sugerido: Array.from(cie10Set),
        textoHC: textoOrdenesMedicas
    };
}
