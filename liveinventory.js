var liveinventory = new function() {
   var li = this;

   li.filewatcher = undefined;
   li.inventoryData = undefined;

   li.construct = function() {
      li.body = $(document.body)
      li.inpFile = li.body.find("input#outputfile");

      li.filewatcher = new filewatcher({
         onFileSelected: li.onFileSelected,
         inputElement: li.inpFile,
         onGetContents: li.onGetContents,
         onContentsChanged: li.onContentsChanged,
      });
   }
   li.resolveItems = function(items) {
      $.ajax({url: "liveinventory-actions.php", type: "post", dataType: "json",
         data: JSON.stringify({m:1, items: items}),
         success: function(data) {
            console.log(data);
         }
      });

   }

   // events
   li.onFileSelected = function() {
      li.filewatcher.getSelectedFileContents();
   }
   li.onContentsChanged = function(newContents) {
      console.log(newContents);
   }
   li.onGetContents = function(contents) {
      var generalSlots = [];

      contents = contents.split("\n");
      contents = contents.map(function(line) {
         var parts = line.split(/\t/);
         return {itemName: parts[1], itemID: parts[2], qty: parts[3]}
      });

      li.resolveItems(contents);
   }

   // children
   this._container = function(opts) {
      var c = this;

      c.construct = function() {

      }

      c.construct();
      return this;
   }


   return this;
}
