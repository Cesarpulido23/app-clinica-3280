const baseDatos3280 = [
    // --- PRIMERA INFANCIA (0 a 5 años) ---
    {
        min: 0, max: 0.1, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración integral por Medicina General / Pediatría (Recién Nacido)",
        tipo: "Primera Infancia", freq: "Recién nacido", cups: "890201"
    },
    {
        min: 0.1, max: 5, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud (Primera Infancia)",
        tipo: "Primera Infancia", freq: "Seguimiento periódico según esquema normativo", cups: "890201"
    },
    {
        min: 0.5, max: 2, sexo: 'A', gestante: 'TODOS',
        nombre: "Administración de Micronutrientes en Polvo / Hierro elemental",
        tipo: "Protección Específica", freq: "Según edad y riesgo nutricional", cups: "B03AA0701"
    },
    {
        min: 1, max: 5, sexo: 'A', gestante: 'TODOS',
        nombre: "Desparasitación intestinal (Albendazol / Mebendazol)",
        tipo: "Protección Específica", freq: "Semestral a partir del año de edad", cups: "P02CA0301"
    },

    // --- INFANCIA (6 a 11 años) ---
    {
        min: 6, max: 11, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud (Infancia)",
        tipo: "Infancia", freq: "Anual", cups: "890201"
    },
    {
        min: 10, max: 13, sexo: 'F', gestante: 'TODOS',
        nombre: "Tamizaje para anemia - Hemoglobina y hematocrito",
        tipo: "Detección Temprana", freq: "Una sola vez en este rango de edad", cups: "902213"
    },

    // --- ADOLESCENCIA (12 a 17 años) ---
    {
        min: 12, max: 17, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud (Adolescencia)",
        tipo: "Adolescencia", freq: "Anual", cups: "890201"
    },
    {
        min: 12, max: 17, sexo: 'A', gestante: 'TODOS',
        nombre: "Prueba rápida treponémica para sífilis y Prueba rápida para VIH",
        tipo: "Detección Temprana / ITS", freq: "Según exposición al riesgo", cups: "906039 / 906249"
    },
    {
        min: 14, max: 17, sexo: 'F', gestante: 'TODOS',
        nombre: "Tamizaje para anemia (Hemoglobina y hematocrito)",
        tipo: "Detección Temprana", freq: "Una vez entre 14 y 17 años", cups: "902213"
    },

    // --- JUVENTUD (18 a 28 años) ---
    {
        min: 18, max: 28, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud (Juventud)",
        tipo: "Juventud", freq: "Cada 2 años", cups: "890201"
    },
    {
        min: 18, max: 28, sexo: 'A', gestante: 'TODOS',
        nombre: "Tamizaje de riesgo cardiovascular (Glicemia basal, perfil lipídico, creatinina, uroanálisis)",
        tipo: "Detección Temprana", freq: "Según clasificación del riesgo", cups: "903841 / 903856 / 903825 / 907106"
    },

    // --- ADULTEZ (29 a 59 años) ---
    {
        min: 29, max: 59, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud (Adultez)",
        tipo: "Adultez", freq: "Cada 3 años", cups: "890201"
    },
    {
        min: 29, max: 59, sexo: 'A', gestante: 'TODOS',
        nombre: "Tamizaje de riesgo cardiovascular (Glucemia, perfil lipídico, creatinina, uroanálisis)",
        tipo: "Detección Temprana", freq: "Quinquenal", cups: "903841 / 903856 / 903825 / 907106"
    },
    {
        min: 25, max: 65, sexo: 'F', gestante: 'TODOS',
        nombre: "Tamizaje de cáncer de cuello uterino (Citología cervicouterina o ADN-VPH)",
        tipo: "Tamizaje Oncológico", freq: "Según esquema normativo (1-3-3 o quinquenal)", cups: "892901 / 908436"
    },
    {
        min: 50, max: 59, sexo: 'F', gestante: 'TODOS',
        nombre: "Mamografía bilateral de tamizaje",
        tipo: "Tamizaje Oncológico", freq: "Cada 2 años a partir de los 50 años", cups: "876802"
    },
    {
        min: 50, max: 59, sexo: 'M', gestante: 'TODOS',
        nombre: "Tamizaje para cáncer de próstata (Antígeno específico - PSA)",
        tipo: "Tamizaje Oncológico", freq: "Cada 5 años a partir de los 50 años", cups: "906610"
    },
    {
        min: 50, max: 59, sexo: 'A', gestante: 'TODOS',
        nombre: "Tamizaje para cáncer de colon y recto (Sangre oculta en materia fecal por inmunoquímica)",
        tipo: "Tamizaje Oncológico", freq: "Cada 2 años a partir de los 50 años", cups: "907009"
    },

    // --- VEJEZ (60 años y más) ---
    {
        min: 60, max: 120, sexo: 'A', gestante: 'TODOS',
        nombre: "Valoración Integral de la Salud en el Vejez",
        tipo: "Vejez", freq: "Cada 3 años", cups: "890201"
    },
    {
        min: 60, max: 120, sexo: 'A', gestante: 'TODOS',
        nombre: "Tamizajes metabólicos y renales de control",
        tipo: "Detección Temprana", freq: "Cada 5 años hasta los 75 años", cups: "903841 / 903856 / 903825 / 907106"
    },
    {
        min: 60, max: 69, sexo: 'F', gestante: 'TODOS',
        nombre: "Mamografía bilateral de tamizaje",
        tipo: "Tamizaje Oncológico", freq: "Cada 2 años hasta los 69 años", cups: "876802"
    },
    {
        min: 60, max: 75, sexo: 'M', gestante: 'TODOS',
        nombre: "Tamizaje para cáncer de próstata (PSA)",
        tipo: "Tamizaje Oncológico", freq: "Cada 5 años hasta los 75 años", cups: "906610"
    }
];
