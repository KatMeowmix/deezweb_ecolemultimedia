Vue.component('recherche', {
    data : function() {
        return {
            urlSrc:'https://api.deezer.com/search?q=',
            getInfo:'',
            index: 0,
            artistInfo:[],
            orderOption:[],
            favourite : []
        }
    },
    methods : {
        display: function(){
            $.ajax({
                url:'https://api.deezer.com/search?q='+this.getInfo,
                dataType : 'jsonp', // <-- Informe jQuery qu'il recevra du JSONP de la part de Deezer
                data : {
                    output : 'jsonp', // <-- Indique à Deezer que le format de retour doit être du JSONP
                }
            }).then(response=>{
                this.artistInfo = response.data;
                console.log(response.data);
                return this.artistInfo;
            }, function() {
                console.log("nope");
            });
        }
    },
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
                        <button @click.prevent="display()" class="btn waves-effect">Rechercher</button>
                    </form>
                </div>
            </div>
            <div v-for="artist in artistInfo">
                <div class="row">
                    <div v-for="(artist, index) in artistInfo" class="col s3 card hoverable">
                        <div class="card-image img-container">
                            <img class="activator" :src="artist.album.cover_big" alt="Couverture de l'album">
                        </div>
                        <div class="card-content">
                            <h2 class="truncate card-title activator">{{artist.title}}</h2>
                            <blockquote class="truncate grey-text text-darken-4">{{artist.artist.name}}<br>{{artist.album.title}}</blockquote>
                            <audio controls controlsList="nodownload">
                                <source :src="artist.preview" type="audio/mpeg">
                            </audio>
                            <i class="small material-icons favorite_border right-align">favorite_border</i>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light green accent-3 btn">Voir les détails du titre</a>
                            <a class="waves-effect waves-light green accent-3 btn">Consulter l’album</a>
                            <a class="waves-effect waves-light green accent-3 btn">Voir la fiche de l’artiste</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});

Vue.component('trackpage', {
    template :
        `<div class="collection with-header">
            <div v-for="(artist, index) in artistInfo" class="col s3 card hoverable">
            <div class="card-image img-container">
                <img class="activator" :src="artist.album.cover_big" alt="Couverture de l'album">
            </div>
            <div class="card-content">
                <h2 class="truncate card-title activator">{{artist.title}}</h2>
                <blockquote class="truncate grey-text text-darken-4">{{artist.artist.name}}<br>{{artist.album.title}}</blockquote>
                <audio controls controlsList="nodownload">
                    <source :src="artist.preview" type="audio/mpeg">
                </audio>
                <i class="small material-icons favorite_border right-align">favorite_border</i>
            </div>
            <div class="card-action">
                <a class="waves-effect waves-light green accent-3 btn">Voir les détails du titre</a>
                <a class="waves-effect waves-light green accent-3 btn">Consulter l’album</a>
                <a class="waves-effect waves-light green accent-3 btn">Voir la fiche de l’artiste</a>
            </div>
        </div>`,
    methods: {
        displayTrack : function(){}
    }
});

var homePage = new Vue({
    el:'#deezer-app',
});