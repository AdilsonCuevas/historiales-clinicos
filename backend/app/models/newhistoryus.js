const { Schema, model } = require('mongoose');

const datepersonal = new Schema({

    user: {type: String},
    newHs: {type: String},
        motivoP: {type: String},
        nombreCP: {type: String},
        enfermedadAP: {type: String},
        observacionAP: {type: String},

            cardioP: {type: String},
            pulmonP: {type: String},
            digestionP: {type: String},
            diabetesP: {type: String},
            renalesP: {type: String},
            quirurgicosP: {type: String},
            alergiasP: {type: String},
            tfusionesP: {type: String},
            medicamentosP: {type: String},
            alcoholP: {type: String},
            tabaquismoP: {type: String},
            drogasP: {type: String},
            inmunizacionesP: {type: String},
            otrosPP: {type: String},

            padreVP: {type: String},
            enfermedadPP: {type: String},
            madreVP: {type: String},
            enfermedadMP: {type: String},
            hermanosVP: {type: String},
            numeroHP: {type: Number},
            enfermedadHP: {type: String},
            otrosFP: {type: String},

            menarquiaP: {type: String},
            ritmoP: {type: String},
            fumP: {type: String},
            GP: {type: String},
            PP: {type: String},
            AP: {type: String},
            CP: {type: String},
            metodoAp: {type: String},
            cualmetodoAP: {type: String},

            cabezaRP: {type: String},
            cuelloRP: {type: String},
            cardioRP: {type: String},
            digestivoRP: {type: String},
            urinarioRP: {type: String},
            muscularRP: {type: String},
            neurologicoRP: {type: String},

            TADRP: {type: String},
            TAIRP: {type: String},
            FARP: {type: String},
            FRRP: {type: String},
            temRP: {type: String},
            pesoRP: {type: String},
            tallaRP: {type: String},
            IMCRP: {type: String},
            cacuRP: {type: String},
            toraxRP: {type: String},
            abdomenRP: {type: String},
            extremidadesRP: {type: String},
            genitoRP: {type: String},
            mentalRP: {type: String},

            tipoLP: {type: String},
            fechaLp: {type: Date, default: Date.now},
            resultadosLP: {type: String},

            tipoELP: {type: String},
            obserELP: {type: String},
            imagenesELP: {type: File},

            tipoEOP: {type: String},
            obserEOP: {type: String},

        impresionRP: {type: String},
        planRP: {type: String}

},{
    timestamps: true,

});

module.exports = model('newHistoryUs', datepersonal);