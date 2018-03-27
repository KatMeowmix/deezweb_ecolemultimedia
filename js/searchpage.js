Vue.component('searchpage', {
    template :
        `<div>
            <div class="collection with-header">
                <h1 class="collection-header">Page de recherche</h1>
                <div class="collection-item">
                    <form class="row">
                        <div class="input-field">
                            <label for="deezSearch">Rechercher un artiste ...</label>
                            <input v-model="getInfo" type="text" placeholder="">
                        </div>
                        <button v-on:click.prevent="display()" class="btn waves-effect">Rechercher</button>
                    </form>
                </div>
            </div>
            <div class="container">
                <div v-for="(artist, index) in artistInfo" class="col s4 card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" v-bind:src="artist.album.cover_big">
                    </div>
                    <div class="card-content">
                        <span class="truncate card-title activator grey-text text-darken-4">{{artist.album.title}}</span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light indigo darken-4 btn">Ecouter un extrait</a>
                        <a class="waves-effect waves-light orange accent-4 btn">Consulter l’album</a>
                        <a class="waves-effect waves-light grey darken-2 btn">Voir la fiche de l’artiste</a>
                    </div>
                </div>
            </div>
        </div>`,
    data : function() {
        return {
            urlSrc:'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=',
            getInfo:'',
            index: 0,
            artistInfo:[],
            orderOption:[]
        }
    },
    methods : {
        display: function(){
            $.ajax({
                url:this.urlSrc+this.getInfo,
                success:function(response){

                    homePage.artistInfo = response.data;
                    console.log(response.data);
                    return homePage.artistInfo;
                }
            })
        }
    }
});


var homePage = new Vue({
    el:'#deezer-app',
})