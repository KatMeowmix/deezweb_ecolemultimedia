Vue.component('artist-list', {
    template :
        `<div>
            <ul class="collection with-header">
                <li class="collection-header"><h4>Page de recherche</h4></li>
                <li class="collection-item">
                    <form class="row">
                        <div class="input-field">
                            <label for="artistSearch">Rechercher un artiste ...</label>
                            <input type="search" id="artistSearch">
                        </div>
                        <button v-on:click.prevent="display()" class="btn waves-effect">Rechercher</button>
                    </form>
                </li>
            </ul>
            <li v-for="(album, index) in artistList" class="card">
                {{index}}<span>{{artistList}}</span>
            </li>
        </div>`,
    data : function() {
        return {
            urlSrc: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=',
            index: 0,
            artistList:[
                {
                    artist : '',
                    album : '',
                }
            ]
        }
    },
    methods : {
        display: function(){
            $.ajax({
                url:this.urlSrc+this.mediaData,
                success:function(response){

                    homePage.artistList = response.data;
                    console.log(response.data);
                }
            })
            //musicList = response.data[0].album.title;
            //console.log(musicList);
        }
    }
});


var homePage = new Vue({
    el:'#deezer-app',
})