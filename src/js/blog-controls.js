'use strict';

$(document).ready(function(){
    $.get('../content/blog-data.json', function(response) {
        response.forEach(function(post) {
            var current = new BlogPost(post.title, post.thumbnail, post.content);
        });
    });
});

function BlogPost(title, thumbnail, content) {
    var self = this;
    this.title = title;
    this.thumbnail = thumbnail;
    this.content = content;

    self.loadControl = function(data) {
        var blogContainer = $('#blog-container');
        blogContainer.append($(data));
        var currentPost = blogContainer.find('article:last-of-type');
        var thumbnail = $('<img>');
        thumbnail.attr('src', this.thumbnail);
        currentPost.addClass('row');
        //Set title
        currentPost.find('.post-title').html(this.title).addClass('col-md-12 col-sm-8 col-xs-12 text-center');
        //Set thumbnail
        //currentPost.find('.post-thumbnail').attr('src', this.thumbnail).addClass('img-responsive col-md-4 col-sm-8 col-xs-12');
        //Set content
        currentPost.find('.post-text').html(this.content).addClass('col-md-12 col-sm-12 col-xs-12');
        currentPost.find('.post-text').prepend(thumbnail);
        thumbnail.css('float', 'right');
        thumbnail.addClass('post-thumbnail img-responsive col-md-4 col-sm-8 col-xs-12');
    }

    $.get('../html/blog-post.html', function(response){
       self.loadControl(response);
       var oddPosts = $('.post').filter(':odd');
       var evenPosts = $('.post').filter(':even');
       evenPosts.find('.post-thumbnail').addClass();
       oddPosts.find('.post-thumbnail').css('float', 'left');

    });
}