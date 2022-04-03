exports.sendReqParam = (req, res) => {
    
    if (req.url == "/home") {
        res.render('home', {
        });
    }
    else if (req.url == "/images/1") {
        res.render('image1', {
        });
    }
    else if (req.url == "/images/2") {
        res.render('image2', {
        });
    }
    else if (req.url == "/images/3") {
        res.render('image3', {
        });
    }
}
