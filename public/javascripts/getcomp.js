$(function(){
    $('#submit').click(function(){
        $('#result').html('comparing');
        $.ajax({
            type: "GET",
            url: "/gpm",    
            success: function(data){
                console.log('data',data);
                $('#result').empty();   
                var html = '';
                $.each(data, function(commentIndex, comment){
                    html += '<div class="comment">' + JSON.stringify(data)         
                    + '</div>';
                    });
                    $('#result').html(html);
            }
        });
    });
});
