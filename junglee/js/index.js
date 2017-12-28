var JungleeGames = JungleeGames || {};

JungleeGames.searchArtist = function ($) {
    var cache, fn;

    cache = {
        validateBtn: $("#validate-btn"),
        searchForm : $("#validateArtistModal"),
        artistListCt : $("#artist-list-ct"),
        artistList : $(".artist-list"),
        artistTemplate : $("#t-artist")

    };

    fn = {
        init: function () {
            fn.bindEvents();
        },
        bindEvents: function(){
            cache.validateBtn.on("click", function(){
                var artName, limit, url;
                artName = cache.searchForm.find(".artist-name").val().toLowerCase().trim();
                limit = parseInt(cache.searchForm.find(".limit").val());
                cache.searchForm.find(".error").addClass("hidden");
                if(artName != "" && limit > 0){
                    cache.artistList.html("");
                    cache.validateBtn.addClass("disabled");
                    url  = "http://itunes.apple.com/search?term="+ artName + "&" + "limit=" + limit;
                    $.ajax({
                        url: url,
                        success: function(data){
                            cache.searchForm.modal("hide");
                            cache.artistListCt.find(".artist-list-header").removeClass("hidden");
                            fn.showArtist(data);
                            cache.validateBtn.removeClass("disabled");
                        },
                        error: function(){
                            alert("Some error occured");
                        },
                    })
                } else {
                    cache.searchForm.find(".error").removeClass("hidden");
                }

            });
        },
        showArtist: function (data) {
            var len,i, htm="", temp, tempStr;
            data = JSON.parse(data);
            data = data.results ? data.results : [];
            len = data.length;
            tempStr = cache.artistTemplate.html();
            for(i=0;i<len;i++){
                temp = $(tempStr);
                temp.find(".t-art-name").text(data[i].artistName);
                temp.find(".t-track-name").text(data[i].trackName);
                temp.find(".t-image").attr("src", data[i].artworkUrl30);
                temp.find(".t-short-desc").text(data[i].shortDescription);  
                cache.artistList.append(temp);
            }
        }
    };

    return {
        init: function(){ fn.init.apply(this, arguments);}
    }
}(jQuery); 

JungleeGames.searchArtist.init();