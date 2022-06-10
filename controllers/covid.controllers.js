const fetch = require("node-fetch");

const getCovidResult = (req, res) => {
  console.log(req.body);

  const datos = {
    Inputs: {
      input1: {
        ColumnNames: [
          "id_persona",
          "fecha_fallecimiento",
          "edad",
          "sexo",
          "criterio_fallecido",
          "ubigeo_cdc",
          "dpt_cdc",
          "prov_cdc",
          "dist_cdc",
          "cdc_positividad",
          "flag_vacuna",
          "fecha_dosis1",
          "fabricante_dosis1",
          "fecha_dosis2",
          "fabricante_dosis2",
          "fecha_dosis3",
          "fabricante_dosis3",
          "flag_hospitalizado",
          "eess_renaes",
          "eess_diresa",
          "eess_red",
          "eess_nombre",
          "fecha_ingreso_hosp",
          "flag_uci",
          "fecha_ingreso_uci",
          "fecha_ingreso_ucin",
          "con_oxigeno",
          "con_ventilacion",
          "fecha_segumiento_hosp_ultimo",
          "evolucion_hosp_ultimo",
          "ubigeo_inei_domicilio",
          "dep_domicilio",
          "prov_domicilio",
          "dist_domicilio",
        ],
        Values: [
          [
            "0",
            "value",
            "0",
            "M",
            "45",
            "0",
            "value",
            "value",
            "value",
            "0",
            "1",
            "02/04/2021",
            "PFIZER",
            "value",
            "value",
            "value",
            "value",
            "0",
            "0",
            "value",
            "value",
            "value",
            "value",
            "0",
            "value",
            "value",
            "0",
            "0",
            "value",
            "value",
            "0",
            "LIMA",
            "LIMA",
            "SAN MIGUEL",
          ],
        ],
      },
    },
    GlobalParameters: {},
  };

  // Fetching data of persons with covid method post
  fetch(process.env.URL_COVID_AML, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY_COVID_AML,
      Accept: "application/json",
    },
  })
    .then((res) => res.text())
    .then((body) => {
      const data = JSON.parse(body);
      res.json(data);
    });
};

module.exports = getCovidResult;
