$(function(){
    $('#submit').click(function(){
        $('#result').html('comparing');
        $.ajax({
            type: "GET",
            url: "/gpm",
            data:"url1="+$('#url1').val()+'&url2='+ $('#url2').val()   ,
            success: function(data){
                console.log('data',data);
                $('#result').empty();   
                var html = '<table class="table table-bordered table-hover" data-toggle="table" data-cache="true" data-height="299"><tbody><tr><th></th><th>loopback</th><th>sailsjs</th></tr>' ;
                $.each(data, function(index, eachdata){                            
                                           
                    console.log(index, eachdata);                               
                    html += "<tr><td></td><td>"+ data[index].Star +"</td><td>"+data[index].Fork+"</td></tr>"
                    
                
                });
                html += '</tbody></table>';
                $('#result').html(html);
            }
        });
    });
});
