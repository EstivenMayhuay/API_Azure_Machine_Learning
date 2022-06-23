const fetch = require("node-fetch");
const data = require("../peru.json");

const getPeruProvincias = (req, res) => {
  const departamento = req.params.departamento.replace("&", " ");

  for (const key in data.departamentos) {
    if (
      data.departamentos[key]["nombre"].toLocaleLowerCase() === departamento
    ) {
      res.json(data.departamentos[key]["provincias"]);
    }
  }
};

const getPeruDistritos = (req, res) => {
  const departamento = req.body.departamento.toLowerCase();
  const provincia = req.params.provincia.replace("&", " ");

  for (const key in data.departamentos) {
    if (data.departamentos[key]["nombre"].toLowerCase() === departamento) {
      const provincias = data.departamentos[key]["provincias"];
      for (const key in provincias) {
        if (provincias[key].nombre.toLowerCase() === provincia)
          res.json(provincias[key]["distritos"]);
      }
    }
  }
};

const getCovidResult = (req, res) => {
  const {
    nombre,
    edad,
    sexo,
    cdc_positividad,
    flag_vacuna,
    fecha_dosis1,
    fabricante_dosis1,
    fecha_dosis2,
    fabricante_dosis2,
    fecha_dosis3,
    fabricante_dosis3,
    dep_domicilio,
    prov_domicilio,
    dist_domicilio,
  } = req.body;

  const data = {
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
            edad,
            sexo,
            "value",
            "0",
            "value",
            "value",
            "value",
            cdc_positividad,
            flag_vacuna,
            fecha_dosis1 || "0",
            fabricante_dosis1 || "0",
            fecha_dosis2 || "0",
            fabricante_dosis2 || "0",
            fecha_dosis3 || "0",
            fabricante_dosis3 || "0",
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
            dep_domicilio,
            prov_domicilio,
            dist_domicilio,
          ],
        ],
      },
    },
    GlobalParameters: {},
  };

  // Fetching data of persons with covid method post
  fetch(process.env.URL_COVID_AML, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY_COVID_AML,
      Accept: "application/json",
    },
  })
    .then((res) => res.text())
    .then((body) => {
      const data = JSON.parse(body);
      const value = data.Results.output1.value.Values[0];
      const covidObj = {
        nombre: nombre,
        edad: value[0],
        sexo: value[1],
        positividad: value[2],
        cantidad_vacuna: flag_vacuna,
        fecha_dosis1: value[4],
        marca_dosis1: value[5],
        fecha_dosis2: value[6],
        marca_dosis2: value[7],
        fecha_dosis3: value[8],
        marca_dosis3: value[9],
        departamento: value[10],
        provincia: value[11],
        distrito: value[12],
        scoreLabel: value[13],
        scoreProbability: value[14],
      };
      res.json(covidObj);
    });
};

module.exports = {
  getCovidResult,
  getPeruProvincias,
  getPeruDistritos,
};
