document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
      constrainWidth:false
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var curyear = new Date().getFullYear();
    var today = new Date();
    var instances = M.Datepicker.init(elems,{
      setDefaultDate: true,
      defaultDate: today,
      showDaysInNextAndPreviousMonths:true,
      format: 'dd.mm.yyyy'
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems,{
      outDuration: 0
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  
  $(function() {
    $('#hide-right-info').click(function() {
      $('#right-info').toggleClass('scale-out absol');
      $('#main-info').toggleClass('push-card');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

  $(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#mkb').chips({
      placeholder: 'Сопутствующие заболевания',
      secondaryPlaceholder: 'Сопутствующие заболевания',
      autocompleteOptions: {
        data: {
          'C00-Злокачественное новообразование губы': null,
          'C01-ЗНО основания языка': null,
          'C02.4-ЗНО язычной миндалины': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });