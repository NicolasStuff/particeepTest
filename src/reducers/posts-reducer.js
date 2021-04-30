export default function(posts=[], action) {
    if(action.type == 'updatePost') {
        var newPosts = [... posts];
        console.log('newPosts', newPosts)
        return newPosts;
    }else{
        return posts;
    }
};