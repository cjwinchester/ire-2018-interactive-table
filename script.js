(function(Tabletop, List) {

  // replace this string with your share URL
  var SHEET_ID = 'https://docs.google.com/spreadsheets/d/1kq-RlKy6a-eza5m4Pz8B8KjVS08mxgKnu96Mtnwryok/edit?usp=sharing';


  /**********************************************************************/
  var loading = document.getElementById('loading');
  var thead = document.getElementsByTagName('thead')[0];

  function init() {
    Tabletop.init({
      key: SHEET_ID,
      callback: buildTable,
      simpleSheet: true
    })
  }

  function buildRowTemplates(headers) {
    var thead_str = '<tr>';
    var row_str = '<tr>';
    
    for (var i=0; i<headers.length; i++) {
      thead_str += '<th class="sort" data-sort="' + headers[i] + '" data-target=".list">' + headers[i] + '</th>';
      row_str += '<td class="' + headers[i] + '"></td>'
    }
    
    thead_str += '</tr>'
    row_str += '</tr>'
    
    return {'row_template': row_str, 'thead': thead_str};
  }

  function buildTable(data, tabletop) {
    loading.style.display = 'none';

    var headers = Object.keys(data[0]);
    var built = buildRowTemplates(headers);
    var item = built['row_template'];
    thead.innerHTML = built['thead'];

    var options = {
      valueNames: headers,
      item: item
    };

    var sheetsTable = new List('table', options, data);

    table.style.display = 'block';
  }

  window.addEventListener('DOMContentLoaded', init);
})(Tabletop, List);
