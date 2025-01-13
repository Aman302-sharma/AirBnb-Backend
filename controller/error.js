exports.pageNotFound=(req, res, next) => {

    //res.status(404).sendFile(path.join(rootDir, 'views', '404.ejs'));
    res.status(404).render('404.ejs', {pageTitle: 'Page Not Found',currentPage:'404'});
}