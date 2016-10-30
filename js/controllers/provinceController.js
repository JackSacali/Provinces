 function provinceController(Province) {
   var that = this;
     Province.getData()
     .then (function (response) {
       that.provinces = response.data;
      //  console.log(response.data);
     })
     .catch (function(error) {
       console.error(error);
     });
}
