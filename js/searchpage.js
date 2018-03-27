Vue.component('artist-list', {
    template :
        `<div>
            <ul>
                <li class="collection-item">
                    <form class="row">
                        <div class="input-field">
                            <label for="artistSearch">Rechercher un artiste ...</label>
                            <input type="search" id="artistSearch">
                        </div>
                        <button class="btn waves-effect">Rechercher</button>
                    </form>
                </li>
            </ul>
        </div>`,
    data : function() {
        return {
            url: 'https://api.deezer.com/search?q=eminem',
            artist : 'Eminem',
            artistList : [
                {
                    name:'Drake',
                    album:'0 to 100'
                },
                {
                    name:'jay-z',
                    album:'qqchose'
                }
            ]
        }
    },
    methods:{
        display: function(){
            $.ajax({
                url:this.url+this.artist,
                success:function(response){
                    console.log(response);
                }
            });
        }
    },
    computed : {
        
    },
    filters : {
        
    }
});


var homePage = new Vue({
    el:'#deezer-app',
})