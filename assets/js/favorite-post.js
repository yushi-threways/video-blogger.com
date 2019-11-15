jQuery(function($){
    $(".post-Item_Favorite").click(function(e){
        e.preventDefault();
        let $this = $(this);

        if (($this).hasClass('btn-primary')) {
            let url = $(this).data('add-url');
            $.ajax({
                type: 'POST',
                url: url
            }).then(function(res){
                $this.text('favorited');
                $this.removeClass('btn-primary');
                $this.addClass('btn-danger');
                console.log(res);
            });
        } else {
            let url = $(this).data('remove-url');
            $.ajax({
                type: 'POST',
                url: url
            }).then(function(res){
                $this.text('favorite');
                $this.removeClass('btn-danger');
                $this.addClass('btn-primary');
                console.log(res);
            });
        }
    });
});

