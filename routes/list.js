const list = function(req, res){
    res.render('list', { title: 'Noted List' });
};
module.exports = {
    list
};