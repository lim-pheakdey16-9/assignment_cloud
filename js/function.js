

    $(document).ready(function(){


        // Size Shoes

        $('#s').click(function(){
            $('#buy').val("S");
            $('#buy').css({"text-align" : "center"});
        });
        
        $('#m').click(function(){
            $('#buy').val("M");
            $('#buy').css({"text-align" : "center"});
        });

        $('#l').click(function(){
            $('#buy').val("L");
            $('#buy').css({"text-align" : "center"});
        });

        $('#xl').click(function(){
            $('#buy').val("XL");
            $('#buy').css({"text-align" : "center"});
        });

        $('#xxl').click(function(){
            $('#buy').val("XXL");
            $('#buy').css({"text-align" : "center"});
        });
        
        function sopping_caed()
        {
            var index_cart = $('index-cart').length ;
            var i=1;
            var text = "";
            $('#shop-icon').click(function(){
                // if(index_cart<=i)
                // {
                //     i=1
                //     $(".index-cart").val(index_cart[i]);
                // }
                // for(i=1 ; i <= index_cart ; i++){
                    
                //     $(".index-cart").eq(index_cart[i]);
                
                $(".index-cart").css({"display" : "block"});
                // }
            });

            
        }
        sopping_caed();

    });

    function btn_buy()
    {
        // var size = /^[A-Za-z0-9@!#$%^&*-+/?]+$/;
        var buy = document.getElementById("buy").value;
        var qty = document.getElementById("qty").value;
        var number_accounct = document.getElementById("number-accounct").value;
        if( buy == "" || buy == size  || qty == "" || qty <= 0 || number_accounct  == "" || number_accounct  < 0 ){
            
            swal({
                title: "Sorry",
                text: "Please you enter on ckek box..!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              

        }else{
            
            swal("Success", "You Buy Shoes Success..", "success");
            
        }
        
    }


