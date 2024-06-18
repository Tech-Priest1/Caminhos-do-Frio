 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: src='img/CAPA-SITE.png',
             title: "<a href=\"all_tours_list.html\" target=\"_blank\"><h4>Rota Caminho do Frio</h4>",
             message: "<figure><img src=\"img/notify_img.png\"></figure><p>Vai de 1 de Julho a 8 de Setembro.</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 500,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });