<html>

   <head>
      <script type="text/javascript" src="/js/jquery-2.0.3.min.js"></script>
      <script type="text/javascript" src="/js/system.js"></script>
      <script type="text/javascript" src="/js/utils.js"></script>
      <script type="text/javascript" src="/js/filewatcher.js"></script>
      <script type="text/javascript" src="liveinventory.js"></script>
   </head>


   <body>
      <input type="file" id="outputfile"></input>
   </body>

   <script>
      var system = new _system({onSystemReady: function() {
         liveinventory.construct();
      }});
   </script>

</html>