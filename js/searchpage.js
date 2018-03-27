var homePage = new Vue({
    el:'#deezer-app',
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