$(function(){
    Account = Backbone.Model.extend({
        defaults: {
            type: "Visa",
            imageUrl: "",
            cardNumber: "0000 0000 0000 0000",
            validThru: "",
            name: 'default account',
            owner: 'No One'
        },
    });
});