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
      yearRange: [1900,curyear],
      setDefaultDate: true,
      defaultDate: today,
      showDaysInNextAndPreviousMonths:true
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById('date_chat');
    var curyear = new Date().getFullYear();
    var today = new Date();
    var instances = M.Datepicker.init(elems,{
      yearRange: [curyear-2,curyear],
      showDaysInNextAndPreviousMonths:true,
      maxDate: today,
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
    var elems = document.getElementById('mobile-nav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById('slide-out');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    });
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
    $('#send_in').width($('#notif').innerWidth());
    $(window).resize(function() {
      $('#send_in').width($('#notif').innerWidth());
    });
  });