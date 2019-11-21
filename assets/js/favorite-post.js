jQuery(function($){
    $(".post-Item_Favorite").click(function(e){
        e.preventDefault();
        let $this = $(this);

        if (($this).hasClass('post-favorite')) {
            let url = $(this).data('add-url');
            $.ajax({
                type: 'POST',
                url: url
            }).then(function(res){
                // $this.text('favorited');
                $this.removeClass('post-favorite');
                $this.addClass('post-favorited');
                console.log(res);
            });
        } else {
            let url = $(this).data('remove-url');
            $.ajax({
                type: 'POST',
                url: url
            }).then(function(res){
                $this.addClass('post-favorite');
                $this.removeClass('post-favorited');
                console.log(res);
            });
        }
    });
});

