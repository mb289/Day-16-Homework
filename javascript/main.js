var githubUsername = "mb289";
var url = "https://api.github.com/users/" + githubUsername;
$.get(url).then(function(data) {
    drawProfile(data);
})

function drawProfile(data) {
    document.body.innerHTML = [
       
        '<h1>',
        data.name,
        '</h1>',
        '<h2> blog:',
        data.blog,
        '</h2>',
        '<h2> location:',
        data.location,
        '</h2>',
        '<h2> email:',
        data.email,
        '</h2>',
        '<h3> avatar:',
        data.avatar_url,
        '</h3>',
        '<h3> site:',
        data.html_url,
        '</h3>'
    ].join('')
}
