'use strict';

module.exports.handler = async event => {

  let viewWidth, evtAbbr, evtLong, evtColor, evtYear = new Date().getFullYear()

  // TODO Simplify the query of the following IF loops into single-line loops 
  if(event.queryStringParameters) {
    if(event.queryStringParameters["evt"]) evtAbbr = event.queryStringParameters["evt"]
    if(event.queryStringParameters["event"]) evtAbbr = event.queryStringParameters["event"]
    if(evtAbbr) {
      switch(evtAbbr) {
        case "ber":
          viewWidth = 231
          evtAbbr = "BER"
          evtLong = "Berlin"
          evtColor = "#2aabe1"
          break
        case "ffm":
          viewWidth = 250
          evtAbbr = "FFM"
          evtLong = "Frankfurt"
          evtColor = "#5d6eb2"
          break
        case "hal":
          viewWidth = 226
          evtAbbr = "HAL"
          evtLong = "Halle"
          evtColor = "#FFE712"
          break
        case "hh":
          viewWidth = 250
          evtAbbr = "HH"
          evtLong = "Hamburg"
          evtColor = "#22B573"
          break
        case "hd":
          viewWidth = 258
          evtAbbr = "HD"
          evtLong = "Heidelberg"
          evtColor = "#e74712"
          break
        case "cgn":
          viewWidth = 224
          evtAbbr = "CGN"
          evtLong = "Köln"
          evtColor = "#2E3192"
          break
        case "at":
          viewWidth = 256
          evtAbbr = "AT"
          evtLong = "Österreich"
          evtColor = "#00cc33"
          break
        case "ch":
          viewWidth = 243
          evtAbbr = "CH"
          evtLong = "Schweiz"
          evtColor = "#CC0033"
          break
        case "mv":
          viewWidth = 345
          evtAbbr = "MV"
          evtLong = "Mecklenburg-Vorpommern"
          evtColor = "#B5DDDF"
          break
        case "ulm":
          viewWidth = 220
          evtAbbr = "ULM"
          evtLong = "Ulm"
          evtColor = "#EA680E"
          break
        case "asia":
          viewWidth = 222
          evtAbbr = "ASIA"
          evtLong = "Asia"
          evtColor = "#FFD000"
          break
        case "rem":
          viewWidth = 243
          evtAbbr = "REM"
          evtLong = "Remote"
          evtColor = "#00498D"
          break
        default:
          viewWidth = 195
          evtAbbr = ""
          evtLong = ""
          evtColor = "#2aabe1"
          break
      }
    } else {
      viewWidth = 195
      evtAbbr = ""
      evtLong = ""
      evtColor = "#2aabe1"
    }
    // TODO Simplify the query of the following IF loops into single-line loops 
    if(event.queryStringParameters["noyear"]){
      if(event.queryStringParameters["noyear"] == "true") {
        evtYear = ""
        viewWidth -= 32
      } else {
        if(event.queryStringParameters["year"]) {
          if(!isNaN(event.queryStringParameters["year"])) evtYear = event.queryStringParameters["year"]
          else evtYear = "err"
        } else evtYear = new Date().getFullYear()
      }
    } else {
      if(event.queryStringParameters["year"]) {
        if(!isNaN(event.queryStringParameters["year"])) evtYear = event.queryStringParameters["year"]
        else evtYear = "err"
      } else evtYear = new Date().getFullYear()
    }
  } else {
    viewWidth = 195
    evtAbbr = ""
    evtLong = ""
    evtColor = "#2aabe1"
  }
  if(event.queryStringParameters && event.queryStringParameters["noyear"] && event.queryStringParameters["noyear"]==true) {
    evtYear = ""
    viewWidth = viewWidth-8;
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
    body: `
      <svg xmlns="http://www.w3.org/2000/svg" width="${viewWidth}" height="20" viewBox="0 0 ${viewWidth} 20">
        <!--
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          !!  This generator was originally developed by Niklas Schroetler. https://nschroetler.de                                 !!
          !!  Performance and stability adjustments as well as conversion to serverless by Marvin Schopf. https://marvinschopf.com !!
          !!  Github repo: https://github.com/Jugendhackt/Badges-Improved                                                          !!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        -->
        <a href="https://jugendhackt.org">
          <title>JH${evtAbbr} Badge</title>
          <rect x="0" y="0" width="136" height="20" style="fill:#555"/>
          <rect x="135" y="0" width="7000" height="20" style="fill:${evtColor}"/>
          <text transform="translate(8 14)" style="isolation:isolate;font-size:11px;fill:#fff;" font-family="Verdana,Geneva,sans-serif">Made at JugendHackt</text>
          <text transform="translate(160 14)" style="isolation:isolate;font-size:11px;fill:#fff;" font-family="Verdana,Geneva,sans-serif">${evtLong} ${evtYear}</text>
          <rect x="144.9" y="10.55" width="1.09" height="1.09" style="fill:#fff"/>
          <rect x="151.46" y="10.55" width="1.09" height="1.09" style="fill:#fff"/>
          <polygon points="149.28 12.73 148.18 12.73 148.18 11.64 147.09 11.64 147.09 13.83 150.37 13.83 150.37 11.64 149.28 11.64 149.28 12.73" style="fill:#fff"/>
          <path d="M153.65,5.08V4h-2.19V5.08h-1.09V6.17h-3.28V5.08H146V4h-2.19V5.08h-1.09v8.75h1.09v1.09h1.09V16h7.66V14.92h1.09V13.83h1.09V5.08Zm0,7.65h-1.09v1.1h-1.1v1.09H146V13.83h-1.1v-1.1h-1.09V9.45h1.09V8.36h7.66V9.45h1.09Z" style="fill:#fff"/>
        </a>
      </svg>
    `
  };
};
