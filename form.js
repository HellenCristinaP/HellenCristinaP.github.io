function doPost(e) {
    var ss = SpreadsheetApp.openById("https://docs.google.com/spreadsheets/d/1Xu8DFKr5NAyfaEqsMQ9Yu1eouCDcMjF2BKMmyzLm2pQ/edit#gid=0"); // Substitua "ID_DA_SUA_PLANILHA" pelo ID da sua planilha
    var sheet = ss.getSheetByName("formulario");
    
    var rowData = [];
    rowData.push(new Date()); // Adiciona a data e hora atual
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.email);
    rowData.push(e.parameter.feedback);
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput("Dados enviados com sucesso para a planilha.").setMimeType(ContentService.MimeType.TEXT);
  }
  