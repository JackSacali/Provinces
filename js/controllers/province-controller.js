 function provinceController(Province) {
   var that = this;
     Province.getData()
     .then (function (provinces) {
        that.provinces = provinces.data;
                 
        console.log(provinces);
         
     })
     .catch (function(error) {
       console.error(error);
     });
}