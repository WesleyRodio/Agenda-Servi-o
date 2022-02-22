
exports.Saudacao = function() {

    var mydate = new Date(); // momento atual 
    var myhours = mydate.getHours();
    if (myhours >= 1 && myhours < 12) {
        return "Bom Dia";
    }
    if (myhours >= 12 && myhours < 18) {
        return "Boa Tarde";
    }
    if (myhours >= 18 && myhours <= 24) {
        return "Boa Noite";
    }
};