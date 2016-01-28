'use strict';

$(document).ready(function(){
    $.get('../content/blog-data.json', function(response) {
        response.forEach(function(post) {
            console.log('happening');
            var current = new BlogPost(post.title, post.thumbnail, post.content);
        });
    });
});

function BlogPost(title, thumbnail, content) {
    var self = this;
    this.title = title;
    this.thumbnail = thumbnail;
    this.content = content;

    //Trim the content if needed
    if (this.content.length > 1000) {
        this.rest = this.content.substring(1000, this.content.length);
        this.content = this.content.substring(0, 1001);
        this.showMore = true;
    }

    self.loadControl = function(blogPost) {
        var blogContainer = $('#blog-container');
        blogContainer.append($(blogPost));
        var currentPost = blogContainer.find('article:last-of-type');
        var thumbnail = $('<img>').attr('src', this.thumbnail);
        currentPost.addClass('row');
        currentPost.find('.post-title').html(this.title).addClass('col-md-12 col-sm-8 col-xs-12 text-center');
        currentPost.find('.post-text').html(this.content);
        thumbnail.addClass('post-thumbnail img-responsive col-md-4 col-sm-8 col-xs-12').css('float', 'right');

        //Enable expanding and collapsing content
        this.showMoreLink = function() {
            var showMore = $('<a> прочети още</a>').addClass('show-more').appendTo(currentPost.find('.post-text'));
            showMore.click(function() {
               currentPost.find('.post-text').html(self.content.concat(self.rest)).prepend(thumbnail);
               self.showLessLink();
            });
        }

        this.showLessLink = function() {
            var showLess = $('<a> скрий</a>').addClass('show-less').appendTo(currentPost.find('.post-text'));
            showLess.click(function() {
                currentPost.find('.post-text').html(self.content).prepend(thumbnail);
                self.showMoreLink();
            });
        }
        if (this.showMore) {
           this.showMoreLink();
        }
        currentPost.find('.post-text').prepend(thumbnail).addClass('col-md-12 col-sm-12 col-xs-12');
    }

    //Blog post setup
    $.get('../html/blog-post.html', function(response){
       self.loadControl(response);
       var oddPosts = $('.post').filter(':odd');
       oddPosts.find('.post-thumbnail').css('float', 'left');
    });
}